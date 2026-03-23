import os
import subprocess
from PIL import Image, ImageDraw, ImageFont
import math

def get_font_path():
    try:
        result = subprocess.run(['fc-match', '-f', '%{file}', 'sans-serif'], stdout=subprocess.PIPE)
        font_path = result.stdout.decode('utf-8').strip()
        if font_path and os.path.exists(font_path):
            return font_path
    except:
        pass
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return p
    return None

def draw_diamond(draw, x, y, size, fill, outline, width=2):
    half = size / 2
    pts = [(x, y - half), (x + half, y), (x, y + half), (x - half, y)]
    # shadow
    pts_sh = [(px + 4, py + 4) for px, py in pts]
    draw.polygon(pts_sh, fill=(200, 200, 200))
    # actual
    draw.polygon(pts, fill=fill, outline=outline, width=width)

def draw_round_rect(draw, x, y, w, h, radius, fill, outline, width=2):
    # shadow
    draw.rounded_rectangle([x + 3, y + 3, x + w + 3, y + h + 3], radius=radius, fill=(200, 200, 200))
    # actual
    draw.rounded_rectangle([x, y, x + w, y + h], radius=radius, fill=fill, outline=outline, width=width)

def draw_arrow(draw, pt1, pt2, fill, width=2):
    # draw line
    draw.line([pt1, pt2], fill=fill, width=width)
    
    # arrowhead
    dx = pt2[0] - pt1[0]
    dy = pt2[1] - pt1[1]
    angle = math.atan2(dy, dx)
    head_len = 10
    
    # tip is pt2
    p1 = (pt2[0] - head_len * math.cos(angle - math.pi/6),
          pt2[1] - head_len * math.sin(angle - math.pi/6))
    p2 = (pt2[0] - head_len * math.cos(angle + math.pi/6),
          pt2[1] - head_len * math.sin(angle + math.pi/6))
    
    # Small circle at the start (like the reference)
    draw.ellipse([pt1[0]-3, pt1[1]-3, pt1[0]+3, pt1[1]+3], outline=fill, fill="white", width=2)
    # Triangle at the end
    draw.polygon([pt2, p1, p2], fill=fill)

def main():
    W, H = 1600, 450
    img = Image.new('RGB', (W, H), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    font_path = get_font_path()
    if font_path:
        font_title = ImageFont.truetype(font_path, 20)
        font_text = ImageFont.truetype(font_path, 13)
    else:
        font_title = font_text = ImageFont.load_default()

    # Title Box
    title_rect = [20, 20, 360, 60]
    draw.rounded_rectangle(title_rect, radius=8, fill=(24, 139, 246))
    draw.text((30, 30), "Consultar agenda de eventos/exposiciones", font=font_title, fill=(255, 255, 255))

    # Colors
    c_blue_in = (228, 240, 252)
    c_blue_out = (116, 160, 244)
    c_green_in = (225, 251, 223)
    c_green_out = (139, 197, 139)
    c_red_in = (252, 226, 222)
    c_red_out = (248, 139, 127)
    c_arrow = (100, 100, 255)
    
    # Nodes configuration
    # (x, y, w, h, type, text, fill, outline, text_color)
    nodes = {
        "start":   (60, 200, 80, 80, "diamond", "Inicio", c_blue_in, c_blue_out, c_blue_out),
        "menu":    (200, 170, 120, 60, "rect", "Acceder a\nAgenda", c_green_in, c_green_out, c_green_out),
        "list":    (380, 170, 120, 60, "rect", "Ver lista de\neventos", c_green_in, c_green_out, c_green_out),
        "filter?": (560, 170, 120, 60, "rect", "¿Aplicar\nfiltros?", c_red_in, c_red_out, c_red_out),
        "filter":  (560, 300, 120, 60, "rect", "Seleccionar\nfecha/tipo", c_green_in, c_green_out, c_green_out),
        "view":    (740, 170, 120, 60, "rect", "Explorar\ntarjetas", c_green_in, c_green_out, c_green_out),
        "found?":  (920, 170, 120, 60, "rect", "¿Evento de\ninterés?", c_red_in, c_red_out, c_red_out),
        "error":   (920, 300, 120, 60, "rect", "Modificar\nfiltros", c_red_in, c_red_out, c_red_out),
        "detail":  (1100, 170, 120, 60, "rect", "Ver ficha\ncompleta", c_green_in, c_green_out, c_green_out),
        "end":     (1300, 200, 80, 80, "diamond", "Fin", c_blue_in, c_blue_out, c_blue_out)
    }

    # Center points for connections
    centers = {}

    for k, v in nodes.items():
        x, y, w, h, typ, text, fill, outline, tcolor = v
        if typ == "diamond":
            draw_diamond(draw, x + w/2, y + h/2, w, fill, outline)
            centers[k] = (x + w/2, y + h/2)
        else:
            draw_round_rect(draw, x, y, w, h, 6, fill, outline)
            centers[k] = (x + w/2, y + h/2)
            
        # Text centering
        lines = text.split('\n')
        th = sum(draw.textbbox((0,0), l, font=font_text)[3] - draw.textbbox((0,0), l, font=font_text)[1] for l in lines)
        cy = y + h/2 - th/2 - 5
        for line in lines:
            bbox = draw.textbbox((0, 0), line, font=font_text)
            tw = bbox[2] - bbox[0]
            draw.text((x + w/2 - tw/2, cy), line, font=font_text, fill=tcolor)
            cy += (bbox[3] - bbox[1]) + 2

    # Draw Connections
    def connect(n1, n2, offset1=(0,0), offset2=(0,0), via=None):
        p1 = (centers[n1][0] + offset1[0], centers[n1][1] + offset1[1])
        p2 = (centers[n2][0] + offset2[0], centers[n2][1] + offset2[1])
        if via:
            draw.line([p1, via], fill=c_arrow, width=2)
            draw_arrow(draw, via, p2, fill=c_arrow)
        else:
            draw_arrow(draw, p1, p2, fill=c_arrow)

    # Path
    # start -> menu
    connect("start", "menu", offset1=(40, 0), offset2=(-60, 0))
    # menu -> list
    connect("menu", "list", offset1=(60, 0), offset2=(-60, 0))
    # list -> filter?
    connect("list", "filter?", offset1=(60, 0), offset2=(-60, 0))
    
    # filter? -> filter (Yes)
    p1 = (centers["filter?"][0], centers["filter?"][1] + 30)
    p2 = (centers["filter"][0], centers["filter"][1] - 30)
    draw_arrow(draw, p1, p2, fill=c_arrow)
    draw.text((p1[0] + 5, p1[1] + 5), "Sí", font=font_text, fill=(150,150,150))
    
    # filter -> view
    p_f_out = (centers["filter"][0] + 60, centers["filter"][1])
    via_1 = (centers["view"][0], centers["filter"][1])
    p_v_in = (centers["view"][0], centers["view"][1] + 30)
    draw_arrow(draw, p_f_out, via_1, fill=c_arrow) # to corner
    draw_arrow(draw, via_1, p_v_in, fill=c_arrow)
    
    # filter? -> view (No)
    connect("filter?", "view", offset1=(60, 0), offset2=(-60, 0))
    draw.text((centers["filter?"][0] + 65, centers["filter?"][1] - 15), "No", font=font_text, fill=(150,150,150))

    # view -> found?
    connect("view", "found?", offset1=(60, 0), offset2=(-60, 0))

    # found? -> error (No)
    p_err_in = (centers["found?"][0], centers["found?"][1] + 30)
    p_err_to = (centers["error"][0], centers["error"][1] - 30)
    draw_arrow(draw, p_err_in, p_err_to, fill=c_arrow)
    draw.text((p_err_in[0] + 5, p_err_in[1] + 5), "No", font=font_text, fill=(150,150,150))
    
    # error -> view (Loop back)
    p_err_out = (centers["error"][0] - 60, centers["error"][1])
    via_err = (centers["view"][0] - 20, centers["error"][1])
    p_v_back = (centers["view"][0] - 20, centers["view"][1] + 30)
    draw_arrow(draw, p_err_out, via_err, fill=c_arrow)
    draw_arrow(draw, via_err, p_v_back, fill=c_arrow)

    # found? -> detail (Yes)
    connect("found?", "detail", offset1=(60, 0), offset2=(-60, 0))
    draw.text((centers["found?"][0] + 65, centers["found?"][1] - 15), "Sí", font=font_text, fill=(150,150,150))
    
    # detail -> end
    connect("detail", "end", offset1=(60, 0), offset2=(-40, 0))

    img.save("/home/miguel/Escritorio/DIU/Errores404_DIU2_2526/P2/Taskflow_Agenda.png")
    print("Taskflow generated successfully.")

if __name__ == '__main__':
    main()

# Práctica 4: Componentes UI
## Equipo: Errores404 (DIU2)

🌐 **Web en producción: [errores404-laqarmita.surge.sh](https://errores404-laqarmita.surge.sh)**

Este documento describe el proceso de **paso a producción** del prototipo diseñado en Figma durante la P3, eligiendo la **Opción B: Figma Make** como alternativa de exportación directa a React.

---

## Alternativas planteadas

Antes de implementar, analizamos las tres vías posibles para pasar el diseño de Figma a código:

| Opción | Descripción | Ventajas | Inconvenientes |
|---|---|---|---|
| **A — Dev Mode (Inspección)** | Inspeccionar el diseño en Figma Dev Mode y reescribir manualmente en React con shadcn/ui | Control total del código | Muy lento, requiere reescribir todo desde cero |
| **B — Figma Make ✅ Elegida** | Exportar directamente desde Figma Make a un proyecto React funcional | Código ya generado y estructurado; preserva fidelidad visual | Código generado por IA puede requerir ajustes |
| **C — Figma MCP + Agente IA** | Conectar Figma vía MCP a un editor con agente IA (Cursor, Windsurf…) | Altamente automatizado e iterativo | Requiere configuración de MCP y pago/cuenta Pro |

### ¿Por qué elegimos Figma Make?

Figma Make genera directamente un proyecto React con **Vite + Tailwind CSS v4 + shadcn/ui + Lucide React**, que es exactamente el stack recomendado en el guion de prácticas. Al exportar desde Figma Make, obtenemos:

- Una estructura de componentes ya organizada (átomos → organismos)
- Las variables de color y tipografía del Design System aplicadas como tokens CSS
- Routing básico entre páginas implementado con `react-router`
- Diseño responsive heredado del Auto Layout de Figma

---

## Stack Tecnológico

```
Vite 6.3.5          ← Build tool y dev server
React 18.3.1        ← Framework UI
Tailwind CSS 4.1.12 ← Utility-first CSS (con Design Tokens)
shadcn/ui           ← Componentes Radix UI accesibles
Lucide React        ← Librería de iconos
react-router 7.x    ← Navegación entre páginas
motion              ← Animaciones declarativas
```

---

## Estructura del Proyecto

```
LaNeoQarmita/
├── src/
│   ├── app/
│   │   ├── App.tsx                  ← Router principal (estado de página)
│   │   └── components/
│   │       ├── Header.tsx           ← Navbar responsive con logo
│   │       ├── HeroSection.tsx      ← Sección hero con CTA principal
│   │       ├── ConceptSection.tsx   ← Sección "Neo-Qarmita"
│   │       ├── AudienceSection.tsx  ← Tarjetas de público objetivo
│   │       ├── Footer.tsx           ← Footer con redes y navegación
│   │       ├── SearchPage.tsx       ← Agenda con filtros (Tipo/Fecha)
│   │       ├── EventDetailPage.tsx  ← Detalle de evento con reserva
│   │       ├── ShopPage.tsx         ← Tienda (café en grano + libros)
│   │       ├── SignUpPage.tsx       ← Registro al Club Qarmita
│   │       ├── NovedadesPage.tsx    ← Blog de novedades
│   │       ├── MenuPage.tsx         ← Carta y horarios
│   │       └── AboutPage.tsx        ← Sobre nosotros
│   └── styles/
│       ├── theme.css                ← Design Tokens (colores, tipografía)
│       ├── fonts.css                ← Google Fonts (Playfair Display + Inter)
│       └── globals.css              ← Reset y estilos base
├── package.json
└── vite.config.ts
```

---

## Componentes UI implementados

### Átomos
- **Botones:** Variantes `primary` (Terracota `#C66B4A`) y `ghost` para CTAs secundarios
- **Badges/Tags:** Etiquetas de categoría (`Café`, `Libros`, `Música`) con color semántico
- **Inputs:** Campo de búsqueda con icono integrado y estados de focus

### Moléculas
- **EventCard:** Tarjeta de evento con imagen, fecha badge, categoría y botón de reserva
- **ProductCard:** Card de tienda con imagen, precio, descripción y añadir al carrito
- **ArticleCard:** Card de novedad con imagen, fecha y extracto

### Organismos
- **Header/Navbar:** Navegación responsive con logo, links principales y CTA "Regístrate Ahora"
- **HeroSection:** Banner principal con imagen de fondo, copy y botón `¡RESERVA YA!`
- **SearchPage:** Agenda con buscador + panel de filtros lateral (tipo de evento, fecha)
- **ShopPage:** Grid de productos con sidebar de categorías y carrito
- **Footer:** Columnas con links, redes sociales y créditos

---

## Despliegue y ejecución

### 🌐 Versión en producción (Surge.sh)
**URL:** [https://errores404-laqarmita.surge.sh](https://errores404-laqarmita.surge.sh)

Desplegado con:
```bash
pnpm build
surge dist/ errores404-laqarmita.surge.sh
```

### 💻 Ejecutar en local
```bash
# Desde la carpeta P4/LaNeoQarmita
pnpm install
pnpm approve-builds   # Aprobar scripts de build de tailwind/esbuild
pnpm dev              # http://localhost:5173
```

> **Requisito:** Node.js 18+ y pnpm instalado (`npm install -g pnpm`)

---

## Briefing del proceso

### Paso 1 — Exportación desde Figma Make
El diseño de alta fidelidad de la P3 fue generado iterativamente con **Figma Make**, ajustando prompts para alinear el resultado con el Design System definido (paleta Espresso/Terracota/Crema, tipografía Playfair Display + Inter). Al finalizar el prototipo en Figma, exportamos el proyecto completo como un paquete ZIP desde el propio panel de Figma Make.

### Paso 2 — Revisión e integración
El código generado ya incluía la estructura de componentes y el sistema de Design Tokens en `theme.css`. Lo importamos al repositorio en `P4/LaNeoQarmita/`, instalamos dependencias con `pnpm` y verificamos que el servidor de desarrollo funcionara correctamente (`pnpm dev`).

### Paso 3 — Validación de componentes
Navegamos por todas las páginas generadas para verificar la fidelidad respecto al mockup de la P3: Hero, Agenda, Tienda, Novedades, Menú, Sobre Nosotros y Registro. El sistema de routing está implementado mediante **estado de React** (`useState`) en `App.tsx`, lo que evita la complejidad de un router de URL para un prototipo de evaluación.

### Valoración del proceso
Figma Make ha demostrado ser una herramienta muy eficiente para el paso a producción en contextos de prototipado académico. La generación de código reduce significativamente el tiempo de implementación respecto a la reescritura manual, aunque el código generado puede requerir refactorizaciones para proyectos en producción real (separación de datos, gestión de estado global, llamadas a API). Para el alcance de esta práctica, el resultado es fiel al diseño original y completamente funcional.

---

**Actualizado:** 11/05/2026
**Equipo:** Errores404 (DIU2)

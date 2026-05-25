# Accessibility Report

## 1. Ficha Técnica del Informe

- **Nombre del proyecto:** Mejora de Goiko — Caso B · [https://goikomejorado.surge.sh](https://goikomejorado.surge.sh)
- **Repositorio:** [https://github.com/ClaudioDevv/UX_CaseStudy](https://github.com/ClaudioDevv/UX_CaseStudy)
- **Equipo evaluador:** DIU2.Errores404 — Julian Carrion Tovar · Miguel Angel Luque Gomez
- **Normativa de referencia:** WCAG 2.1 Nivel AA · Norma UNE-EN 301549
- **Herramientas utilizadas:** Google Lighthouse (PageSpeed Insights), WAVE Web Accessibility Evaluation Tool
- **Fecha de la auditoría:** Mayo 2026

---

## 2. Puntuaciones Globales (Métricas Automáticas)

### Google Lighthouse

![Lighthouse Escritorio](lightescritorio.png)
*Escritorio*

![Lighthouse Móvil](lightmovil.png)
*Móvil*

| Métrica          | Escritorio | Móvil  |
| :--------------- | :--------: | :----: |
| Rendimiento      | 66 / 100   | 69 / 100 |
| Accesibilidad    | 87 / 100   | 82 / 100 |
| Buenas prácticas | 96 / 100   | 96 / 100 |
| SEO              | 58 / 100   | 58 / 100 |

### WAVE — Web Accessibility Evaluation Tool

![Resultado WAVE](wave.png)

| Indicador          | Resultado       |
| :----------------- | :-------------- |
| Errores críticos   | 0               |
| Errores contraste  | 0               |
| Alertas            | 2               |
| AIM Score          | **10 / 10**     |

---

## 3. Análisis por Principios (POUR)

### A. Perceptible

**Hallazgo 1 — Sin estructura de encabezados**

- **Criterio WCAG incumplido:** 1.3.1 — Información y relaciones
- **Herramienta:** WAVE (alerta: *No heading structure*)
- **Impacto:** Los usuarios con lector de pantalla no pueden identificar la jerarquía del contenido ni navegar por secciones. Los motores de búsqueda tampoco pueden determinar la estructura semántica de la página.
- **Recomendación:** Añadir etiquetas `<h1>`, `<h2>`, `<h3>` jerárquicas en todas las secciones del documento.

**Hallazgo 2 — LCP de 28.3s en móvil**

- **Criterio WCAG incumplido:** 1.4.4 — Cambio de tamaño del texto (rendimiento perceptivo)
- **Herramienta:** Lighthouse Móvil (Largest Contentful Paint: 28.3s)
- **Impacto:** Las imágenes de gran tamaño sin optimizar bloquean la carga del contenido principal. En conexiones estándar o lentas, el usuario no puede percibir el contenido durante casi 30 segundos, lo que equivale a una barrera de acceso real.
- **Recomendación:** Convertir imágenes a formato WebP, implementar lazy loading y definir dimensiones explícitas en los elementos visuales.

### B. Operable

**Hallazgo 3 — CLS de 0.243 en escritorio**

- **Criterio WCAG incumplido:** 2.5.3 — Etiqueta en nombre (desplazamiento de contenido)
- **Herramienta:** Lighthouse Escritorio (Cumulative Layout Shift: 0.243)
- **Impacto:** El desplazamiento visual durante la carga provoca que los usuarios hagan clic en elementos incorrectos de forma accidental. Para usuarios con control motor reducido, este comportamiento es especialmente perjudicial.
- **Recomendación:** Reservar espacio explícito (atributos `width` y `height`) en todas las imágenes y elementos cargados de forma asíncrona.

### C. Comprensible

**Hallazgo 4 — Sin regiones de página definidas**

- **Criterio WCAG incumplido:** 1.3.6 — Identificar el propósito
- **Herramienta:** WAVE (alerta: *No page regions*)
- **Impacto:** La ausencia de landmarks semánticos (`<header>`, `<main>`, `<nav>`, `<footer>`) impide que los usuarios de tecnologías asistivas naveguen por puntos de referencia. Un usuario ciego no puede saltar directamente al contenido principal ni al menú de navegación.
- **Recomendación:** Estructurar el HTML con landmarks semánticos en todos los bloques principales de la página.

**Punto positivo:** El idioma de la página está correctamente declarado (`lang="es"`), lo que permite a los lectores de pantalla pronunciar el contenido en castellano sin configuración adicional.

### D. Robusto

**Hallazgo 5 — SEO 58/100 y ausencia de metadatos estructurados**

- **Criterio WCAG incumplido:** 4.1.1 — Análisis sintáctico
- **Herramienta:** Lighthouse (SEO: 58/100)
- **Impacto:** Los agentes de usuario y tecnologías asistivas no pueden interpretar correctamente la estructura del documento. La ausencia de metaetiquetas descriptivas y atributos `aria-label` en los elementos interactivos reduce la compatibilidad con software de apoyo.
- **Recomendación:** Añadir `<title>` descriptivo, `<meta name="description">`, `aria-label` en botones y enlaces sin texto visible, y datos estructurados JSON-LD para buscadores.

---

## 4. Tabla de Hallazgos y Prioridades

| **ID**     | **Prioridad** | **Criterio WCAG**              | **Error detectado**                              | **Recomendación técnica**                              |
| :--------- | :------------ | :----------------------------- | :----------------------------------------------- | :----------------------------------------------------- |
| **ACC-01** | **Alta**      | 1.3.1 Información y relaciones | Sin estructura de encabezados `<h1>`/`<h2>`       | Añadir jerarquía de headings semánticos                |
| **ACC-02** | **Alta**      | 1.4.4 Cambio de tamaño         | LCP 28.3s en móvil por imágenes sin optimizar    | Convertir a WebP, aplicar lazy loading                 |
| **ACC-03** | **Alta**      | 2.5.3 Etiqueta en nombre       | CLS 0.243 en escritorio                           | Reservar `width`/`height` en imágenes y elementos async |
| **ACC-04** | **Media**     | 1.3.6 Identificar el propósito | Sin landmarks `<header>`, `<main>`, `<footer>`    | Añadir regiones semánticas HTML5                       |
| **ACC-05** | **Media**     | 4.1.1 Análisis sintáctico      | SEO 58/100; sin `<title>` ni `aria-label`         | Metaetiquetas descriptivas y roles ARIA                |

---

## 5. Conclusiones y Declaración de Conformidad

### Estado actual

El sitio **cumple parcialmente con el nivel AA de WCAG 2.1**. La ausencia de errores críticos de contraste y el buen cumplimiento de buenas prácticas (96/100) suponen una base técnica aceptable. Sin embargo, los problemas estructurales —falta de encabezados semánticos y de landmarks de página— incumplen criterios AA que penalizan directamente a usuarios con discapacidad visual que utilizan lectores de pantalla.

**Puntuación global estimada: 6/10**

El punto más crítico es el **rendimiento en móvil**: un LCP de 28.3 segundos es inaceptable para un sitio de restauración donde el usuario espera acceso inmediato al menú o al proceso de reserva. Combinado con un SEO de 58/100, el sitio no está optimizado ni para la accesibilidad real ni para la visibilidad en buscadores.

### Próximos pasos inmediatos

1. **Añadir estructura de encabezados** (`<h1>` único por página, `<h2>` por sección) y landmarks HTML5 semánticos — cambio estructural de bajo coste y alto impacto en accesibilidad.
2. **Optimizar imágenes** para móvil (formato WebP, lazy loading, dimensiones explícitas) — reduce el LCP de 28.3s a menos de 3s y mejora drásticamente la experiencia en dispositivos móviles.
3. **Añadir `aria-label`** en todos los botones interactivos sin texto visible y una metaetiqueta `<title>` descriptiva — mejora compatibilidad con tecnologías asistivas y sube el SEO por encima de 80/100.

Con estas tres acciones, la puntuación de accesibilidad en Lighthouse subiría previsiblemente de 82–87/100 a más de 90/100 en ambas plataformas, y el sitio alcanzaría el cumplimiento completo del nivel AA de WCAG 2.1.

---

*Informe elaborado por el equipo DIU2.Errores404 — Asignatura Diseño de Interfaces de Usuario, Universidad de Granada, curso 2025/26.*

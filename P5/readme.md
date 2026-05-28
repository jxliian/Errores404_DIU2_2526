# Práctica 5: Evaluación — Accesibilidad y Pruebas de Usabilidad A/B Testing

**Equipo:** DIU2.Errores404 · Curso 2025/26
**Caso A evaluado:** NeoQarmita — [Web en producción](https://errores404-laqarmita.surge.sh)
**Caso B evaluado:** Mejora de Goiko — [Repositorio](https://github.com/ClaudioDevv/UX_CaseStudy) · [Web en producción](https://goikomejorado.surge.sh)

---

## Entregables (25% cada uno)

| Entregable                                | Archivo                                                                    | Estado |
| ----------------------------------------- | -------------------------------------------------------------------------- | ------ |
| Reclutamiento de usuarios + propuesta A/B | [Datos_Usuarios.md](Datos_Usuarios.md)                                        | ✅     |
| Cuestionario SUS                          | [Cuestionario_SUS.md](Cuestionario_SUS.md) · [Tally](https://tally.so/r/KYaJMk) | ✅     |
| Eye Tracking (heatmaps)                   | Ver sección abajo                                                         | ✅     |
| Usability Report                          | [Usability-Report.md](Usability-Report.md) · [PDF](REPORT_DIU3.GECV_doneBy_DIU2_Errores404.pdf) | ✅     |
| Accessibility Report                      | [Acceibility-Report-template.md](Acceibility-Report-template.md)              | ✅     |

---

## 1. Reclutamiento de usuarios

📋 [Cuestionario_SUS.md](Cuestionario_SUS.md) — Estructura del formulario de evaluación.

📋 [Cuestionario online (Tally)](https://tally.so/r/KYaJMk) — Formulario digital utilizado con los usuarios.

---

## 2. Eye Tracking — Mapas de Calor

Herramienta utilizada: **[GazeMapping](https://github.com/mgea/gazemapping)**
Capturas realizadas con la extensión **FireShot** para Chrome.

---

### Caso B — Mejora de Goiko

#### Landing Page (Escritorio)

![Heatmap Goiko - Landing Escritorio](heatmapLP.jpg)

La atención se concentra en las imágenes de hamburguesas del hero y en el botón "PRUEBANOS". El botón "RESERVAR" de la cabecera recibe escasa atención pese a estar en una posición prominente, ya que queda eclipsado visualmente por las fotografías de producto. El footer con los enlaces de navegación es sistemáticamente ignorado.

#### Landing Page (Móvil)

![Heatmap Goiko - Landing Móvil](heatmap1.jpg)

En móvil el patrón es similar: las imágenes de producto dominan la atención. Los usuarios escanean verticalmente las secciones (Burgers, Menú Goiko, Postres, Toda la carta) pero sin detenerse en los textos descriptivos. Los enlaces del footer reciben algunos puntos de calor aislados, lo que indica búsqueda de información de contacto o navegación.

#### Personaliza tu Hamburguesa (Móvil)

![Heatmap Goiko - Personalizar](heatmap2.jpg)

La sección de ingredientes acumula la mayor concentración de calor, especialmente en "Vegetales" y "Extras". Los botones `+` y `−` para modificar cantidades son usados con frecuencia. El botón "GUARDAR BURGER" recibe atención moderada, mientras que "AÑADIR AL CARRITO" concentra un foco de calor intenso al final del proceso.

#### Carrito (Móvil)

![Heatmap Goiko - Carrito](heatmap3.jpg)

Los usuarios leen el nombre del producto y el precio, y fijan la mirada en los controles de cantidad. El botón "PAGAR" genera una mancha de calor intensa en la parte inferior, lo que confirma que es localizado sin dificultad. La imagen del producto apenas recibe atención en esta pantalla.

#### Pago (Móvil)

![Heatmap Goiko - Pago](heatmap4.jpg)

El mapa muestra atención dispersa sobre todos los campos del formulario: titular, número de tarjeta, mes, año y CVV. El patrón errático indica que los usuarios buscan el orden correcto de cumplimentación. El botón "PAGAR" concentra el foco más intenso de toda la pantalla, confirmando que es el elemento más buscado.

#### Pago Finalizado (Móvil)

![Heatmap Goiko - Pago Finalizado](heatmap5.jpg)

El icono de confirmación (check) recibe atención inmediata. Los usuarios leen la fecha y hora de pago, y después fijan la mirada en el botón "Ver estado del pedido". "Descargar Factura" recibe menos atención, lo que es coherente con el perfil de usuario medio.

---

### Caso A — NeoQarmita

#### Landing Page (Escritorio)

![Heatmap NeoQarmita - Landing](heatmapconjunto2.jpg)

El hero con la noticia destacada ("Nueva Cosecha: Etiopía Yirgacheffe") concentra la mayor atención inicial. La sección "La Neo-Qarmita" y "Café & Biblioteca" reciben lecturas completas. La sección "¿Quién Encuentra su Lugar?" es escaneada pero con menos profundidad. El botón "¡RESERVA YA!" es localizado con facilidad gracias a su color terracota sobre fondo crema.

#### Agenda Cultural (Escritorio)

![Heatmap NeoQarmita - Agenda](heatmapconjunto1.jpg)

Los filtros del panel lateral concentran gran actividad, lo que indica que los usuarios los utilizan activamente para segmentar eventos. Las tarjetas de eventos reciben atención equitativa en imagen y título. Los botones "Reservar" son localizados sin dificultad. El footer es ignorado por completo.

#### Novedades (Escritorio)

![Heatmap NeoQarmita - Novedades](heatmapconjunto3.jpg)

El artículo destacado superior recibe la mayor concentración de calor. Los usuarios escanean los artículos de la cuadrícula en patrón en F (izquierda superior → derecha → abajo). Los títulos y las imágenes son los elementos más leídos; los textos descriptivos debajo de las tarjetas reciben poca atención.

#### Tienda (Escritorio)

![Heatmap NeoQarmita - Tienda](heatmapconjunto4.jpg)

Los filtros de categoría y el buscador reciben atención temprana. Los productos de la primera fila concentran el mayor calor. Los precios y botones "Añadir al carrito" son leídos con regularidad. Los productos de filas inferiores reciben progresivamente menos atención, patrón típico de páginas de catálogo.

---

## 3. Cuestionario SUS — Resultados

| Caso                 | Usuarios | SUS medio      | Valoración |
| -------------------- | -------- | -------------- | ----------- |
| A — NeoQarmita      | P01–P05 | **73.0** | Bueno       |
| B — Mejora de Goiko | P06–P10 | **62.0** | Aceptable   |


## 4. Usability Report

📄 [Usability-Report.md](Usability-Report.md) · 📥 [REPORT\_DIU3.GECV\_doneBy\_DIU2\_Errores404.pdf](REPORT_DIU3.GECV_doneBy_DIU2_Errores404.pdf)

Informe centrado en el **Caso B (Mejora de Goiko)** con hallazgos del estudio A/B, análisis SUS, Eye Tracking y auditoría de accesibilidad.

---

## 5. Accessibility Report

📄 [Acceibility-Report-template.md](Acceibility-Report-template.md)

Auditoría de accesibilidad del Caso B con WAVE y Lighthouse. Puntuaciones:

| Herramienta           | Resultado                                  |
| --------------------- | ------------------------------------------ |
| WAVE                  | 0 errores · 2 alertas · AIM 10/10        |
| Lighthouse Escritorio | Accesibilidad 87/100 · Rendimiento 66/100 |
| Lighthouse Móvil     | Accesibilidad 82/100 · Rendimiento 69/100 |

![WAVE](wave.png)
![Lighthouse Escritorio](lightescritorio.png)
![Lighthouse Móvil](lightmovil.png)

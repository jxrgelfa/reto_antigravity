# CONVENCIONES Y GUÍA DE ESTILOS — DROPZONE STREETWEAR

## 1. PALETA DE COLORES (ESTÉTICA UNDERGROUND / STREETWEAR)

### Modo Oscuro (Predeterminado - "Night Drop")
- **Fondo Base Principal**: `#09090b` (Zinc / Dark Slate ultra profundo)
- **Superficie de Tarjetas**: `#18181b` (Zinc 900 con borde sutil `#27272a`)
- **Texto Principal**: `#f4f4f5` (Zinc 100 de alta legibilidad)
- **Texto Secundario**: `#a1a1aa` (Zinc 400 atenuado)
- **Acento Primario (Cyber Lime / Volt)**: `#22c55e` (Verde Neón enérgico) / Hover: `#16a34a`
- **Acento Secundario (Electric Violet)**: `#8b5cf6` (Violeta vibrante para badges)
- **Badge de Alerta / Sold Out**: `#ef4444` (Rojo neón)

### Modo Claro ("Daylight Capsule")
- **Fondo Base Principal**: `#fafafa` (Blanco tiza suave)
- **Superficie de Tarjetas**: `#ffffff` (Blanco puro con sombra sutil)
- **Texto Principal**: `#18181b` (Negro carbón de alto contraste)
- **Texto Secundario**: `#52525b` (Gris urbano)
- **Acento Primario**: `#16a34a` (Verde esmeralda oscuro de alto contraste)

## 2. REGLA ESTRICTA DE CONTRASTE (.force-text-white)
Todos los botones de acción principal (CTA, Confirmar Reserva, Botones de compra y Badges oscuros/de color) deben incluir de forma obligatoria la clase `.force-text-white` o `text-white !important` para garantizar que el texto jamás se vuelva ilegible ni grisáceo al alternar entre modo claro y oscuro.

```css
.force-text-white {
  color: #ffffff !important;
}
```

## 3. ESTÁNDARES DE HTML5 SEMÁNTICO Y ACCESIBILIDAD (A11Y)
- Todo elemento con evento click debe ser una etiqueta `<button type="button">` nativa con atributo `aria-label` descriptivo.
- Todas las imágenes de prendas urbanas deben contar con un atributo `alt` descriptivo de la prenda (ej: `alt="Hoodie Oversize Cyber Black 380gsm frizado"`).
- Los campos de formulario deben vincular su `<label for="...">` con el `<input id="...">` y declarar `required` para validación accesible.
- El modal debe atrapar el foco, soportar cierre con tecla `Escape` y cierre por clic en el backdrop oscurecido.

## 4. BREAKPOINTS Y ADAPTABILIDAD RESPONSIVE (MOBILE-FIRST)
- **Celulares (< 768px)**:
  - 1 sola columna vertical en la grilla de catálogo.
  - Menú de navegación colapsado en Drawer táctil con botón hamburguesa accesible.
  - Botones con altura mínima de 44px para permitir toque cómodo con el pulgar.
  - Margen de seguridad lateral `px-4`.
- **Tablets (768px - 1024px)**:
  - 2 columnas en catálogo de drops.
- **Escritorio (> 1024px)**:
  - 3 columnas organizadas en el catálogo.
  - Enlaces de navegación visibles en el navbar superior.

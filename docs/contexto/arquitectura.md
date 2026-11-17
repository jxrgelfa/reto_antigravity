# ARQUITECTURA DEL PROYECTO — DROPZONE STREETWEAR

## 1. VISIÓN GENERAL
- **Nombre del Proyecto**: DROPZONE // Urban Apparel & Streetwear Studio
- **Propósito**: Tienda conceptual y plataforma interactiva de indumentaria urbana (hoodies oversize, cargo pants, acid wash tees, bomber jackets y accesorios drop limitados). Permite explorar colecciones, inspeccionar prendas con modales de alta resolución y reservar pedidos directos.
- **Tipo de Aplicación**: Single Page Application (SPA) multi-vista interactiva en el cliente, de alto rendimiento y cero recargas de página.

## 2. STACK TECNOLÓGICO
- **Markup**: HTML5 Semántico estructurado (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
- **Estilos**: TailwindCSS v3 (vía CDN: `https://cdn.tailwindcss.com`) complementado con `style.css` para microinteracciones urbanas, degradados sutiles y transiciones de modales.
- **Lógica & Estado**: JavaScript Vanilla moderno (ES6+) en `app.js` gestionando vistas SPA, catálogo reactivo, modal dinámico, validación de formulario y persistencia de tema en `localStorage`.
- **Tipografías**: Google Fonts (`Syne` / `Space Grotesk` para títulos urbanos, `Inter` para cuerpos de texto, `JetBrains Mono` para códigos y badges de stock).
- **Iconografía**: Emojis estilizados y SVG inline optimizados.

## 3. ESTRUCTURA DE DIRECTORIOS
```text
seminario_antigravity/
├── index.html                     # Maquetado principal con arquitectura SPA (Hero, Catálogo, Formulario, Modal)
├── app.js                         # Lógica reactiva SPA, catálogo de prendas, modal y validación
├── style.css                      # Reglas CSS personalizadas, clases de contraste y animaciones
├── GEMINI.md                      # Conector maestro de contexto para Google Antigravity 2.0
├── REPORTE_VERIFICACION_SDD.md    # Checklist de calidad y verificación DoD
├── .agents/
│   ├── rules/
│   │   └── antigravity_global_rules.md  # Reglas globales always_on del sistema
│   └── skills/                          # Directorio de habilidades frontend podadas
└── docs/
    └── contexto/
        ├── arquitectura.md        # Especificación técnica y límites
        ├── convenciones.md        # Guía de estilos urbanos, colores y accesibilidad
        ├── decisiones.md          # Registro cronológico de ADRs con fecha/hora
        ├── glosario.md            # Vocabulario de streetwear y componentes UI
        ├── flujo-de-trabajo.md    # Metodología Gentle-AI SDD y Criterio de Listo
        └── errores-conocidos.md   # Registro de gotchas y trampas resueltas
```

## 4. TECNOLOGÍAS PROHIBIDAS (LÍMITES ARQUITECTÓNICOS)
- ❌ **Sin Frameworks JS pesados**: Prohibido el uso de React, Vue, Angular o Svelte.
- ❌ **Sin Servidores Backend**: Prohibido Node.js/Express, Python/Django, PHP o servidores de procesamiento.
- ❌ **Sin Bases de Datos Externas**: Prohibido SQL, MongoDB, Firebase o Supabase. El estado del pedido y catálogo vive en cliente y `localStorage`.
- ❌ **Sin Múltiples Archivos HTML**: La navegación entre vistas es SPA instantánea dentro de `index.html` (cero redirecciones `window.location`).
- ❌ **Sin Estilos Inline**: Prohibido el uso de `style="..."` caótico; se utilizan utilidades de TailwindCSS y `style.css`.

# REGISTRO DE DECISIONES DE ARQUITECTURA (ADR)

> ⚠️ **REGLA DE ORO DE AUTORIZACIÓN OBLIGATORIA**:
> Cualquier cambio que modifique el framework CSS, altere la estructura de vistas SPA, modifique las prendas del catálogo o elimine archivos existentes **requiere autorización previa explícita del usuario** antes de realizarse.

---

### [ADR-001] · [2026-11-13 01:00] — Elección de TailwindCSS v3 vía CDN
- **Estado**: Aprobado
- **Contexto**: Se necesita maquetar rápidamente una interfaz de moda urbana contemporánea, minimalista y visualmente impactante sin sobrecargar el proyecto con configuraciones complejas de empaquetadores como Webpack o Vite.
- **Decisión**: Cargar TailwindCSS v3 oficial vía CDN (`https://cdn.tailwindcss.com`) y extender temas en tiempo de ejecución.
- **Consecuencias**: Código limpio en HTML, iteración ágil en vivo y cero tiempo perdido instalando dependencias pesadas de Node.js.

---

### [ADR-002] · [2026-11-13 01:15] — Arquitectura SPA Multi-Vista en Archivo Único (index.html)
- **Estado**: Aprobado
- **Contexto**: El usuario debe navegar entre la portada (Hero), el catálogo de prendas y el formulario de reserva sin experimentar parpadeos ni recargas de página.
- **Decisión**: Centralizar las 3 vistas en un único archivo `index.html` estructurado en secciones con clases de visibilidad (`hidden` / `block`), gestionadas instantáneamente por listeners de JavaScript en `app.js`.
- **Consecuencias**: Navegación fluida de 60fps, experiencia tipo aplicación nativa y total compatibilidad con cualquier servidor estático (GitHub Pages, Netlify).

---

### [ADR-003] · [2026-11-13 01:30] — Modal Dinámico Reutilizable para Inspección de Prendas
- **Estado**: Aprobado
- **Contexto**: Los compradores de ropa streetwear necesitan observar detalles técnicos de las prendas (corte oversize, gramaje de algodón frizado 380gsm, guía de talles y fotos en alta resolución).
- **Decisión**: Implementar un único componente modal emergente en el DOM que se hidrata dinámicamente con los datos de la prenda al hacer clic en *"Ver detalles"*. Incluye soporte para tecla Escape y cierre con clic en backdrop.
- **Consecuencias**: Menor tamaño de código HTML, alta modularidad y experiencia de compra interactiva.

---

### [ADR-004] · [2026-11-13 01:45] — Persistencia de Preferencia de Modo Oscuro / Claro
- **Estado**: Aprobado
- **Contexto**: El estilo streetwear tiene gran afinidad con el modo oscuro, pero se debe brindar accesibilidad a usuarios que prefieren modo diurno.
- **Decisión**: Implementar alternancia de modo con guardado de preferencia en `localStorage.getItem('theme')` y sincronización con clase `dark` en la etiqueta `<html>`.
- **Consecuencias**: La preferencia del usuario se conserva entre recargas y visitas recurrentes.

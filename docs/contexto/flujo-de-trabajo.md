# FLUJO DE TRABAJO & CONTROL DE CALIDAD (SDD & DoD)

## 1. METODOLOGÍA SPEC-DRIVEN DEVELOPMENT (SDD)
Siguiendo las pautas de desarrollo de https://github.com/Gentleman-Programming/gentle-ai adaptadas para Antigravity 2.0:

1. **Exploración (`sdd-explore`)**:
   - Inspeccionar los requisitos de la tienda urbana y consultar `docs/contexto/`.
   - Analizar el comportamiento responsivo en celulares antes de escribir código.
2. **Especificación (`sdd-propose` / `sdd-spec`)**:
   - Redactar los contratos de componentes (Hero, Grilla de 6 prendas, Modal de inspección, Formulario de reserva).
   - Validar que no se infrinjan las tecnologías prohibidas (cero React, cero backend).
3. **Plan de Tareas (`sdd-tasks`)**:
   - Descomponer la construcción en capas atómicas: Capa 1 HTML semántico ➔ Capa 2 TailwindCSS styling ➔ Capa 3 JS interactivity.
4. **Aplicación (`sdd-apply`)**:
   - Escribir código limpio, modular, accesible y libre de estilos inline.
5. **Verificación (`sdd-verify`)**:
   - Ejecutar la lista de control de Criterio de Listo (DoD) y documentar en `REPORTE_VERIFICACION_SDD.md`.

## 2. CHECKLIST DE DEFINITION OF DONE (CRITERIO DE LISTO)
Antes de dar por concluida la entrega, el director técnico y el agente deben validar cada ítem:

- [ ] **Apertura Limpia**: El archivo `index.html` abre directamente en cualquier navegador moderno sin requerir servidores locales.
- [ ] **Navegación SPA sin Recarga**: Los botones del menú conmutan entre Inicio, Catálogo y Formulario al instante sin recargar la página.
- [ ] **Catálogo Completo**: Se renderizan 6 tarjetas con fotos temáticas urbanas de alta resolución, títulos, precios y badges de Drop.
- [ ] **Modal Interactivo Operativo**: Al hacer clic en *"Ver detalles"*, la ventana modal se despliega con información detallada de la prenda, selector de talles, y se cierra con la 'X', con clic afuera o con la tecla `Escape`.
- [ ] **Formulario Validado con Feedback**: El formulario valida campos obligatorios y muestra un Toast visual verde de éxito al enviar, limpiando los campos.
- [ ] **Diseño Responsivo Verificado**: Probado en vista móvil (< 768px) con F12; las tarjetas se apilan en 1 columna y el menú hamburguesa abre y cierra correctamente.
- [ ] **Contraste y Temas**: El selector Dark/Light funciona sin parpadeos y los botones mantienen el texto blanco con `.force-text-white`.
- [ ] **Cero Errores en Consola**: La consola de desarrollador (F12 ➔ Console) no arroja ningún error rojo ni advertencias de recursos rotos.
- [ ] **4 Estados de UI Validados**: Se contemplan estados Loading, Empty, Error y Success.

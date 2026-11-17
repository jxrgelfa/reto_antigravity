# ERRORES CONOCIDOS & GOTCHAS DE MAQUETADO STREETWEAR

### [GOTCHA-001] — Desborde y Scroll Horizontal Roto en Móviles
- **Síntoma**: Al navegar en celulares, la pantalla se mueve hacia los lados permitiendo ver un espacio en blanco incómodo.
- **Causa**: Imágenes con ancho absoluto superior al viewport o grillas con paddings desbordados sin `box-sizing: border-box`.
- **Solución Aplicada**:
  - Se añade `overflow-x: hidden` a las etiquetas `<html>` y `<body>`.
  - Todas las imágenes llevan `w-full h-auto object-cover`.
  - Contenedores con `max-w-7xl mx-auto px-4`.

---

### [GOTCHA-002] — Texto de Botones Ilegible al Alternar a Modo Claro
- **Síntoma**: Al cambiar del modo oscuro al modo claro, los botones con fondo verde neón o violeta heredan texto negro o gris del body claro, perdiendo legibilidad.
- **Causa**: Especificidad de TailwindCSS donde la clase de texto oscuro del contenedor tiene igual o mayor peso.
- **Solución Aplicada**:
  - Clase utilitaria `.force-text-white { color: #ffffff !important; }` aplicada en todos los botones y badges coloreados.

---

### [GOTCHA-003] — Menú Hamburguesa Permanece Abierto tras Seleccionar Sección
- **Síntoma**: El usuario toca "Catálogo" en el menú móvil, la vista cambia pero el menú sigue tapando la pantalla.
- **Causa**: El evento click en los enlaces del menú móvil no invoca la función de cierre del drawer.
- **Solución Aplicada**:
  - Se añadió un listener a todos los enlaces `.nav-link-mobile` para ejecutar `closeMobileMenu()` de forma automática al hacer clic.

---

### [GOTCHA-004] — Fondo del Modal Bloqueado o Scroll de Fondo Activo
- **Síntoma**: Al abrir el modal de detalles de prenda, el usuario puede seguir scrolleando la página de fondo.
- **Solución Aplicada**:
  - Al abrir el modal, se agrega la clase `overflow-hidden` a `document.body`.
  - Al cerrar el modal, se remueve la clase permitiendo el scroll normal.

/**
 * DROPZONE STREETWEAR — ARCHIVO PRINCIPAL DE LÓGICA (app.js)
 * Arquitectura SPA nativa, cero dependencias pesadas, manipulación limpia del DOM.
 */

// 1. CATÁLOGO DE DATOS DE MUESTRA (6 PRENDAS STREETWEAR)
const PRODUCTS = [
  {
    id: 'hoodie-acid',
    name: 'OVERSIZED HOODIE // ACID CHARCOAL',
    drop: 'DROP 04',
    category: 'Hoodies',
    price: 78,
    currency: 'USD',
    badge: 'BESTSELLER',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Buzo con capucha corte boxy oversize. Algodón rústico frizado de 380 GSM con proceso acid wash.',
    fullDesc: 'Confeccionado en algodón pesado de 380 gramos por metro cuadrado con acabado soft wash. Presenta costuras reforzadas en hombros caídos, capucha doble forrada sin cordones y bolsillo canguro frontal. Ideal para un look underground de alta durabilidad.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'cargo-tactical',
    name: 'TACTICAL CARGO // STEALTH BLACK',
    drop: 'DROP 04',
    category: 'Pants',
    price: 85,
    currency: 'USD',
    badge: 'HEAVYWEIGHT',
    badgeColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Pantalón cargo técnico con 6 bolsillos utilitarios y correas de compresión de nylon ajustable.',
    fullDesc: 'Pantalón táctico fabricado en tejido Ripstop antidesgarro con acabado repelente al agua ligera. Cintura elastizada con cordón técnico industrial, fuelles profundos en piernas y puños con ajuste elástico para calzado deportivo.',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 'tee-void',
    name: 'GRAPHIC TEE // VOID RUNNER',
    drop: 'DROP 04',
    category: 'Tees',
    price: 45,
    currency: 'USD',
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Camiseta corte relax en algodón peinado de 240 GSM con estampa serigráfica de alta densidad.',
    fullDesc: 'Remera de cuello redondo cerrado (cuello rib ancho de 2.5cm) en 100% algodón peinado 24/1. Estampado serigráfico en espalda con tinta plastisol al tacto cero que soporta lavados industriales continuos sin degradarse.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'bomber-cyber',
    name: 'BOMBER JACKET // NEON REIGN',
    drop: 'LIMITED',
    category: 'Jackets',
    price: 120,
    currency: 'USD',
    badge: 'LIMITED 50 PCS',
    badgeColor: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Campera bomber técnica con forro térmico acolchado en rombos y detalles reflectivos 3M.',
    fullDesc: 'Chaqueta estilo aviador contemporánea en nylon impermeable con relleno de guata siliconada térmica. Cierre frontal YKK bidireccional, bolsillo de piloto en brazo izquierdo con tirador neón "REMOVE BEFORE FLIGHT" y tiras reflectivas en espalda.',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'crewneck-obsidian',
    name: 'ACID CREWNECK // OBSIDIAN GREY',
    drop: 'DROP 04',
    category: 'Crewnecks',
    price: 69,
    currency: 'USD',
    badge: 'DROP EXCLUSIVE',
    badgeColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Buzo cuello redondo sin capucha en tono carbón con desgaste manual y detalles de pespunte visto.',
    fullDesc: 'Diseñado bajo la estética minimalista distópica. Algodón premium sin frisar de tacto frío, rib acanalado de alta densidad en cuello, puños y bajo. Corte amplio con caída relajada para superposición de capas.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'crossbody-metro',
    name: 'CROSSBODY BAG // METRO TECH',
    drop: 'ACCESSORY',
    category: 'Accessories',
    price: 38,
    currency: 'USD',
    badge: 'RESTOCK',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Bolso bandolera utilitario impermeable con hebilla táctica magnética Fidlock.',
    fullDesc: 'Bandolera compacta en lona Cordura 500D impermeable. Compartimento principal con cierre termosellado, bolsillo frontal de malla técnica y correa regulable con mosquetones de aluminio anodizado.',
    sizes: ['Único'],
    inStock: true
  }
];

// 2. ESTADO DE LA APLICACIÓN
let activeView = 'inicio';
let selectedProductForModal = null;

// 3. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  populateFormProductSelect();
  initNavigation();
  initModalListeners();
  initFormHandler();
  initMobileMenu();
});

// 4. CONTROL DE TEMA (DARK / LIGHT) CON LOCALSTORAGE
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('dropzone_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    // Por defecto en la marca: Dark Mode
    document.documentElement.classList.add('dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('dropzone_theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  });

  updateThemeIcons(document.documentElement.classList.contains('dark'));
}

function updateThemeIcons(isDark) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    icon.textContent = isDark ? '☀️' : '🌙';
  });
}

// 5. NAVEGACIÓN SPA SIN RECARGAS
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-view-target]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-view-target');
      switchView(targetView);

      // Si es un enlace del menú móvil, cerrar el drawer
      closeMobileMenu();
    });
  });
}

function switchView(viewName) {
  const views = document.querySelectorAll('.spa-view');
  views.forEach(view => {
    if (view.id === `view-${viewName}`) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  });

  // Actualizar enlaces activos
  const navLinks = document.querySelectorAll('[data-view-target]');
  navLinks.forEach(link => {
    if (link.getAttribute('data-view-target') === viewName) {
      link.classList.add('text-emerald-500', 'font-semibold');
      link.classList.remove('text-zinc-400');
    } else {
      link.classList.remove('text-emerald-500', 'font-semibold');
      link.classList.add('text-zinc-400');
    }
  });

  activeView = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. RENDERIZADO DEL CATÁLOGO DE TARJETAS
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <article class="product-card group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between" data-product-id="${p.id}">
      <div>
        <div class="product-img-wrapper relative h-72 w-full bg-zinc-100 dark:bg-zinc-800">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy">
          <div class="absolute top-3 left-3 flex flex-wrap gap-2">
            <span class="px-2.5 py-1 text-xs font-mono-tag font-bold rounded-full force-text-white ${p.badgeColor} shadow-md">
              ${p.badge}
            </span>
            <span class="px-2.5 py-1 text-xs font-mono-tag font-semibold rounded-full bg-black/60 backdrop-blur-md force-text-white">
              ${p.drop}
            </span>
          </div>
          <div class="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-lg force-text-white font-mono-tag font-bold text-sm">
            $${p.price} ${p.currency}
          </div>
        </div>

        <div class="p-6">
          <span class="text-xs uppercase tracking-wider font-mono-tag text-emerald-600 dark:text-emerald-400 font-semibold">
            ${p.category}
          </span>
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1 mb-2 line-clamp-1 group-hover:text-emerald-500 transition-colors">
            ${p.name}
          </h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
            ${p.shortDesc}
          </p>
        </div>
      </div>

      <div class="px-6 pb-6 pt-0 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
        <span class="text-xs text-zinc-500 font-mono-tag">
          Talles: ${p.sizes.join(', ')}
        </span>
        <button type="button" 
          class="btn-open-modal px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 force-text-white rounded-xl text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          data-id="${p.id}"
          aria-label="Ver detalles de ${p.name}">
          <span>Ver detalles</span>
          <span>→</span>
        </button>
      </div>
    </article>
  `).join('');

  // Listeners de los botones "Ver detalles"
  const modalBtns = container.querySelectorAll('.btn-open-modal');
  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-id');
      openModal(productId);
    });
  });
}

// 7. MODAL DE PRODUCTO (POPUP INTERACTIVO)
function initModalListeners() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('btn-close-modal');
  const backdrop = document.getElementById('modal-backdrop-area');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Botón "Reservar esta prenda" dentro del modal
  const modalReserveBtn = document.getElementById('btn-modal-reserve');
  if (modalReserveBtn) {
    modalReserveBtn.addEventListener('click', () => {
      if (!selectedProductForModal) return;
      const select = document.getElementById('input-prenda');
      if (select) {
        select.value = selectedProductForModal.id;
      }
      closeModal();
      switchView('reserva');
      document.getElementById('input-nombre')?.focus();
    });
  }
}

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  selectedProductForModal = product;
  const modal = document.getElementById('product-modal');

  // Hidratar datos en el modal
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-img').alt = product.name;
  document.getElementById('modal-badge').textContent = product.badge;
  document.getElementById('modal-badge').className = `px-3 py-1 text-xs font-mono-tag font-bold rounded-full force-text-white ${product.badgeColor}`;
  document.getElementById('modal-drop').textContent = product.drop;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = `$${product.price} ${product.currency}`;
  document.getElementById('modal-desc').textContent = product.fullDesc;

  // Renderizar selector interactivo de talles
  const sizesContainer = document.getElementById('modal-sizes-list');
  sizesContainer.innerHTML = product.sizes.map((size, idx) => `
    <button type="button" 
      class="modal-size-pill px-3 py-1.5 text-xs font-mono-tag rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-400 font-semibold transition-all ${idx === 0 ? 'bg-emerald-500 border-emerald-500 force-text-white' : 'text-zinc-700 dark:text-zinc-300'}"
      data-size="${size}">
      ${size}
    </button>
  `).join('');

  // Listener para cambiar talle seleccionado visualmente
  const sizePills = sizesContainer.querySelectorAll('.modal-size-pill');
  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => {
        p.classList.remove('bg-emerald-500', 'border-emerald-500', 'force-text-white');
        p.classList.add('text-zinc-700', 'dark:text-zinc-300');
      });
      pill.classList.add('bg-emerald-500', 'border-emerald-500', 'force-text-white');
      pill.classList.remove('text-zinc-700', 'dark:text-zinc-300');
    });
  });

  // Mostrar modal y bloquear scroll de body
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.classList.remove('overflow-hidden');
  selectedProductForModal = null;
}

// 8. FORMULARIO DE RESERVA & TOAST VERDE DE ÉXITO
function populateFormProductSelect() {
  const select = document.getElementById('input-prenda');
  if (!select) return;

  select.innerHTML = `
    <option value="" disabled selected>Selecciona una prenda del catálogo...</option>
    ${PRODUCTS.map(p => `
      <option value="${p.id}">${p.name} — $${p.price} ${p.currency} (${p.drop})</option>
    `).join('')}
  `;
}

function initFormHandler() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('input-nombre').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const prendaId = document.getElementById('input-prenda').value;
    const talle = document.getElementById('input-talle').value;

    if (!nombre || !email || !prendaId || !talle) {
      alert('Por favor completa todos los campos obligatorios para apartar tu drop.');
      return;
    }

    const selectedPrenda = PRODUCTS.find(p => p.id === prendaId);

    // Simular guardado de pedido en consola
    console.log('[DROPZONE ORDER RESERVED]', {
      cliente: nombre,
      email,
      prenda: selectedPrenda ? selectedPrenda.name : prendaId,
      talle,
      fecha: new Date().toISOString()
    });

    // Mostrar Toast de Éxito
    showSuccessToast(nombre, selectedPrenda ? selectedPrenda.name : 'tu prenda');

    // Limpiar formulario
    form.reset();
  });
}

function showSuccessToast(cliente, prendaNombre) {
  const toast = document.getElementById('success-toast');
  const toastMsg = document.getElementById('toast-msg');

  if (!toast) return;

  toastMsg.innerHTML = `<strong>¡Drop reservado con éxito, ${cliente}!</strong> Hemos apartado <em>${prendaNombre}</em>. Te enviamos la confirmación a tu correo.`;
  toast.classList.remove('hidden');
  toast.classList.add('toast-animate');

  // Ocultar automáticamente a los 5 segundos
  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('toast-animate');
  }, 5500);
}

// 9. MENÚ MÓVIL (DRAWER TÁCTIL)
function initMobileMenu() {
  const btnOpen = document.getElementById('btn-mobile-menu-open');
  const btnClose = document.getElementById('btn-mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (btnOpen) btnOpen.addEventListener('click', openMobileMenu);
  if (btnClose) btnClose.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);
}

function openMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

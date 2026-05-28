/**
 * FTDMESH — Alpine.js App & Utilities
 * Función principal ftdmesh() para Alpine.js + helpers globales
 */

/* ── Constantes ──────────────────────────────────────────── */
const EXCHANGE_RATE = 3.72;
const CART_KEY = 'ftdmesh_cart';
const CURRENCY_KEY = 'ftdmesh_currency';

/* ── Formatear precio ───────────────────────────────────── */
function formatPrice(pen, currency, rate) {
  rate = rate || EXCHANGE_RATE;
  if (currency === 'USD') {
    const usd = (pen / rate).toFixed(2);
    return `$${usd}`;
  }
  return `S/. ${pen.toLocaleString('es-PE')}`;
}

/* ── Carrito helpers ─────────────────────────────────────── */
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('No se pudo guardar el carrito:', e);
  }
}

function cartTotal(items, currency) {
  const totalPen = items.reduce((sum, item) => sum + item.pricePen * item.qty, 0);
  return formatPrice(totalPen, currency || 'PEN', EXCHANGE_RATE);
}

/* ── Función principal Alpine ────────────────────────────── */
function ftdmesh() {
  return {
    /* Estado */
    currency: localStorage.getItem(CURRENCY_KEY) || 'PEN',
    rate: EXCHANGE_RATE,
    cartOpen: false,
    cartItems: loadCart(),
    mobileMenuOpen: false,
    toast: null,
    toastTimer: null,

    /* Filtros de productos */
    filters: {
      tiers: [],
      series: [],
      maxPrice: 2100,
      minPrice: 0,
      capabilities: []
    },
    sortBy: 'default',
    searchQuery: '',
    activeTab: 'devices',

    /* Productos (se cargan desde data.js) */
    allProducts: (typeof FTDMeshData !== 'undefined') ? FTDMeshData.products : [],
    allAccessories: (typeof FTDMeshData !== 'undefined') ? FTDMeshData.accessories : [],

    /* ── Init ──────────────────────────────────────────── */
    init() {
      this.$watch('currency', val => {
        localStorage.setItem(CURRENCY_KEY, val);
      });

      this.$watch('cartItems', val => {
        saveCart(val);
      });
    },

    /* ── Currency ──────────────────────────────────────── */
    setCurrency(c) {
      this.currency = c;
    },

    toggleCurrency() {
      this.currency = this.currency === 'PEN' ? 'USD' : 'PEN';
    },

    price(pen) {
      return formatPrice(pen, this.currency, this.rate);
    },

    /* ── Carrito ───────────────────────────────────────── */
    addToCart(product) {
      const existing = this.cartItems.find(i => i.id === product.id);
      if (existing) {
        existing.qty += 1;
        this.cartItems = [...this.cartItems];
      } else {
        this.cartItems = [...this.cartItems, { ...product, qty: 1 }];
      }
      this.showToast(`✓ ${product.name} agregado al carrito`);
    },

    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(i => i.id !== id);
    },

    updateQty(id, delta) {
      const item = this.cartItems.find(i => i.id === id);
      if (!item) return;
      item.qty = Math.max(1, item.qty + delta);
      this.cartItems = [...this.cartItems];
    },

    setQty(id, qty) {
      const item = this.cartItems.find(i => i.id === id);
      if (!item) return;
      const n = parseInt(qty, 10);
      if (n < 1) { this.removeFromCart(id); return; }
      item.qty = n;
      this.cartItems = [...this.cartItems];
    },

    clearCart() {
      this.cartItems = [];
    },

    get cartCount() {
      return this.cartItems.reduce((s, i) => s + i.qty, 0);
    },

    get cartSubtotal() {
      return cartTotal(this.cartItems, this.currency);
    },

    get cartSubtotalPen() {
      return this.cartItems.reduce((s, i) => s + i.pricePen * i.qty, 0);
    },

    /* ── Filtros ───────────────────────────────────────── */
    get filteredProducts() {
      let list = this.allProducts;

      if (this.filters.tiers.length > 0) {
        list = list.filter(p => this.filters.tiers.includes(p.tier));
      }

      if (this.filters.series.length > 0) {
        list = list.filter(p => this.filters.series.includes(p.series));
      }

      if (this.filters.capabilities.length > 0) {
        list = list.filter(p =>
          this.filters.capabilities.every(cap => p.capabilities.includes(cap))
        );
      }

      list = list.filter(p =>
        p.pricePen >= this.filters.minPrice &&
        p.pricePen <= this.filters.maxPrice
      );

      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.badges.some(b => b.toLowerCase().includes(q))
        );
      }

      switch (this.sortBy) {
        case 'price-asc':  list = [...list].sort((a, b) => a.pricePen - b.pricePen); break;
        case 'price-desc': list = [...list].sort((a, b) => b.pricePen - a.pricePen); break;
        case 'name':       list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
        default: break;
      }

      return list;
    },

    get filteredAccessories() {
      let list = this.allAccessories;

      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(a =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
        );
      }

      switch (this.sortBy) {
        case 'price-asc':  list = [...list].sort((a, b) => a.pricePen - b.pricePen); break;
        case 'price-desc': list = [...list].sort((a, b) => b.pricePen - a.pricePen); break;
        case 'name':       list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
        default: break;
      }

      return list;
    },

    toggleFilter(type, value) {
      const arr = this.filters[type];
      const idx = arr.indexOf(value);
      if (idx === -1) {
        arr.push(value);
      } else {
        arr.splice(idx, 1);
      }
    },

    clearFilters() {
      this.filters = {
        tiers: [],
        series: [],
        maxPrice: 2100,
        minPrice: 0,
        capabilities: []
      };
      this.sortBy = 'default';
      this.searchQuery = '';
    },

    get activeFiltersCount() {
      return this.filters.tiers.length +
             this.filters.series.length +
             this.filters.capabilities.length +
             (this.filters.maxPrice < 2100 ? 1 : 0);
    },

    /* ── Toast ─────────────────────────────────────────── */
    showToast(message, type) {
      clearTimeout(this.toastTimer);
      this.toast = { message, type: type || 'success' };
      this.toastTimer = setTimeout(() => {
        this.toast = null;
      }, 3000);
    },

    /* ── FAQ accordion ─────────────────────────────────── */
    openFaq: null,

    toggleFaq(id) {
      this.openFaq = this.openFaq === id ? null : id;
    },

    /* ── Events tabs ───────────────────────────────────── */
    eventsTab: 'upcoming',

    /* ── Mobile menu ───────────────────────────────────── */
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },

    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },

    /* ── Dropdown nav ──────────────────────────────────── */
    activeDropdown: null,

    openDropdown(name) {
      this.activeDropdown = name;
    },

    closeDropdown() {
      this.activeDropdown = null;
    },

    toggleDropdown(name) {
      this.activeDropdown = this.activeDropdown === name ? null : name;
    },

    /* ── Newsletter ────────────────────────────────────── */
    newsletterEmail: '',
    newsletterSent: false,

    submitNewsletter() {
      if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
        this.showToast('Por favor ingresa un email válido', 'error');
        return;
      }
      this.newsletterSent = true;
      this.showToast('¡Suscripción exitosa! Te mantendremos informado.');
    },

    /* ── Formulario de contacto ────────────────────────── */
    contactForm: {
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      tipo: '',
      mensaje: ''
    },
    contactSent: false,

    submitContact() {
      if (!this.contactForm.nombre || !this.contactForm.email || !this.contactForm.mensaje) {
        this.showToast('Por favor completa los campos requeridos', 'error');
        return;
      }
      this.contactSent = true;
      this.showToast('¡Mensaje enviado! Te contactaremos pronto.');
    },

    /* ── Formulario de evento ──────────────────────────── */
    eventForm: {
      nombre: '',
      email: '',
      telefono: '',
      eventId: ''
    },
    eventRegistered: false,

    registerEvent(eventId) {
      this.eventForm.eventId = eventId;
    },

    submitEventForm() {
      if (!this.eventForm.nombre || !this.eventForm.email) {
        this.showToast('Por favor completa nombre y email', 'error');
        return;
      }
      this.eventRegistered = true;
      this.showToast('¡Registro exitoso! Revisa tu email.');
    },

    /* ── Cotización empresas ───────────────────────────── */
    quoteForm: {
      empresa: '',
      contacto: '',
      email: '',
      industria: '',
      cantidad: '',
      mensaje: ''
    },
    quoteSent: false,

    submitQuote() {
      if (!this.quoteForm.empresa || !this.quoteForm.email) {
        this.showToast('Por favor completa empresa y email', 'error');
        return;
      }
      this.quoteSent = true;
      this.showToast('¡Cotización enviada! Te contactaremos en 24h.');
    }
  };
}

/* ── FAQ vanilla (para páginas sin Alpine completo) ──────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ── Sticky navbar shadow ────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-lg');
      nav.style.background = 'rgba(8,12,20,0.98)';
    } else {
      nav.classList.remove('shadow-lg');
      nav.style.background = 'rgba(8,12,20,0.95)';
    }
  }, { passive: true });
}

/* ── Intersection Observer para animaciones ──────────────── */
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/* ── Range slider precio doble ───────────────────────────── */
function initPriceSlider() {
  const minInput = document.getElementById('price-min');
  const maxInput = document.getElementById('price-max');
  const minLabel = document.getElementById('price-min-label');
  const maxLabel = document.getElementById('price-max-label');

  if (!minInput || !maxInput) return;

  function updateLabels() {
    if (minLabel) minLabel.textContent = `S/. ${parseInt(minInput.value).toLocaleString('es-PE')}`;
    if (maxLabel) maxLabel.textContent = `S/. ${parseInt(maxInput.value).toLocaleString('es-PE')}`;
  }

  minInput.addEventListener('input', () => {
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
      minInput.value = maxInput.value;
    }
    updateLabels();
  });

  maxInput.addEventListener('input', () => {
    if (parseInt(maxInput.value) < parseInt(minInput.value)) {
      maxInput.value = minInput.value;
    }
    updateLabels();
  });

  updateLabels();
}

/* ── Tabs eventos ────────────────────────────────────────── */
function initEventTabs() {
  const tabs = document.querySelectorAll('.tab-btn[data-tab]');
  const panes = document.querySelectorAll('[data-tab-pane]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panes.forEach(p => {
        p.style.display = p.dataset.tabPane === target ? 'block' : 'none';
      });
    });
  });
}

/* ── DOM Ready ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initFAQ();
  initPriceSlider();
  initEventTabs();
});

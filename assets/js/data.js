/**
 * FTDMESH — Catálogo de datos
 * Todos los productos, accesorios, bundles, membresías y eventos
 */

const FTDMeshData = {

  /* ── Dispositivos ──────────────────────────────────────── */
  products: [
    {
      id: 1,
      slug: "heltec-v3-lite",
      name: "Heltec V3 Lite",
      series: "Heltec",
      tier: "Entrada",
      pricePen: 260,
      image: "./images/dispositivos/heltec-v3-lite.jpg",
      badges: ["LoRa", "WiFi", "USB-C"],
      capabilities: ["wifi"],
      description: "Nodo Meshtastic de entrada. Compacto, liviano y con WiFi integrado. Ideal para primeros pasos en la red mesh.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32-S3",
        "RAM": "8 MB",
        "Flash": "8 MB",
        "Puerto": "USB-C",
        "Pantalla": "0.96\" OLED",
        "Dimensiones": "55 × 35 mm"
      }
    },
    {
      id: 2,
      slug: "t-beam-v12",
      name: "T-Beam v1.2",
      series: "LILYGO",
      tier: "Entrada",
      pricePen: 310,
      image: "./images/dispositivos/t-beam-v12.jpg",
      badges: ["LoRa", "GPS", "WiFi", "BT"],
      capabilities: ["gps", "wifi"],
      description: "El clásico. GPS integrado, WiFi y Bluetooth. Perfecto para rastreo y comunicación de largo alcance en exteriores.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32",
        "GPS": "NEO-6M",
        "WiFi": "802.11 b/g/n",
        "Batería": "18650 (no incluida)",
        "Dimensiones": "115 × 40 mm"
      }
    },
    {
      id: 3,
      slug: "heltec-mesh-node-t114",
      name: "Heltec Mesh Node T114",
      series: "Heltec",
      tier: "Media",
      pricePen: 330,
      image: "./images/dispositivos/heltec-mesh-t114.jpg",
      badges: ["LoRa", "nRF52", "BLE"],
      capabilities: [],
      description: "Basado en nRF52840. Excelente autonomía de batería. Ideal para nodos estáticos y rastreo prolongado.",
      stock: true,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "CPU": "nRF52840",
        "BLE": "5.0",
        "Autonomía": "Hasta 72h",
        "Dimensiones": "60 × 40 mm"
      }
    },
    {
      id: 4,
      slug: "rak4631-wisblock",
      name: "RAK4631 WisBlock",
      series: "RAK",
      tier: "Media",
      pricePen: 370,
      image: "./images/dispositivos/rak4631-wisblock.jpg",
      badges: ["LoRa", "Modular", "BLE"],
      capabilities: [],
      description: "Plataforma modular. Añade sensores, GPS, solar y más con módulos WisBlock. Muy popular para despliegues IoT.",
      stock: true,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "CPU": "nRF52840",
        "Modular": "WisBlock Base",
        "BLE": "5.0",
        "I/O": "GPIO, I2C, SPI, UART"
      }
    },
    {
      id: 5,
      slug: "lilygo-t-echo",
      name: "LILYGO T-Echo",
      series: "LILYGO",
      tier: "Media",
      pricePen: 480,
      image: "./images/dispositivos/t-echo.jpg",
      badges: ["LoRa", "GPS", "e-Paper"],
      capabilities: ["gps", "epaper"],
      description: "Pantalla e-Paper de 1.54\". Pantalla de tinta electrónica con GPS. Legible bajo el sol. Perfecto para senderismo.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "nRF52840",
        "Pantalla": "1.54\" e-Paper",
        "GPS": "L76K",
        "Batería": "Li-ion 1000 mAh",
        "Dimensiones": "65 × 38 mm"
      }
    },
    {
      id: 6,
      slug: "t-beam-supreme",
      name: "T-Beam Supreme",
      series: "LILYGO",
      tier: "Media",
      pricePen: 480,
      image: "./images/dispositivos/t-beam-supreme.jpg",
      badges: ["LoRa", "GPS", "WiFi", "BT"],
      capabilities: ["gps", "wifi"],
      description: "La versión mejorada del T-Beam clásico. Procesador más potente, mejor GPS y conectividad WiFi/BT simultánea.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32-S3",
        "GPS": "L76K",
        "WiFi": "802.11 b/g/n",
        "BT": "5.0",
        "Batería": "18650"
      }
    },
    {
      id: 7,
      slug: "seeed-card-tracker-t1000e",
      name: "Seeed Card Tracker T1000-E",
      series: "Seeed",
      tier: "Media",
      pricePen: 520,
      image: "./images/dispositivos/seeed-card-tracker.webp",
      badges: ["LoRa", "GPS", "Waterproof"],
      capabilities: ["gps", "waterproof"],
      description: "Tarjeta tracker del tamaño de una tarjeta de crédito. IP65, GPS y LoRa. Para rastreo de activos y personas.",
      stock: true,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "GPS": "GNSS Multi-banda",
        "Protección": "IP65",
        "Batería": "700 mAh",
        "Dimensiones": "85 × 54 × 6 mm"
      }
    },
    {
      id: 8,
      slug: "station-g2",
      name: "Station G2",
      series: "Station",
      tier: "Pro",
      pricePen: 590,
      image: "./images/dispositivos/station-g2.jpg",
      badges: ["LoRa", "WiFi", "Ethernet", "Solar"],
      capabilities: ["wifi", "solar", "atak"],
      description: "Nodo repetidor/base de alta potencia. Ethernet, WiFi, PoE y entrada solar. Para infraestructura permanente.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32",
        "Red": "WiFi + Ethernet",
        "Alimentación": "PoE / Solar / DC",
        "Tx Power": "30 dBm",
        "Carcasa": "Plástico IP54"
      }
    },
    {
      id: 9,
      slug: "rak-wisblock-rugged",
      name: "RAK WisBlock Rugged",
      series: "RAK",
      tier: "Industrial",
      pricePen: 850,
      image: "./images/dispositivos/rak-wisblock-rugged.webp",
      badges: ["LoRa", "IP67", "Industrial"],
      capabilities: ["waterproof"],
      description: "Carcasa industrial IP67. Resistente a polvo, agua y vibraciones. Para minería, industria y zonas adversas.",
      stock: true,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "CPU": "nRF52840",
        "Protección": "IP67",
        "Temperatura": "-40°C a +85°C",
        "Conectores": "M12 industriales"
      }
    },
    {
      id: 10,
      slug: "t-deck-plus",
      name: "T-Deck Plus",
      series: "LILYGO",
      tier: "Pro",
      pricePen: 740,
      image: "./images/dispositivos/t-deck-plus.jpg",
      badges: ["LoRa", "Teclado", "GPS", "Touchscreen"],
      capabilities: ["gps", "keyboard", "touchscreen", "atak"],
      description: "Comunicador táctico completo. Teclado físico QWERTY, pantalla touch 2.8\", GPS y LoRa en un dispositivo.",
      stock: true,
      featured: true,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32-S3",
        "Pantalla": "2.8\" IPS Touch",
        "GPS": "L76K",
        "Teclado": "QWERTY físico",
        "Batería": "1000 mAh"
      }
    },
    {
      id: 11,
      slug: "heltec-capsule-sensor-v3",
      name: "Heltec Capsule Sensor V3",
      series: "Heltec",
      tier: "Pro",
      pricePen: 960,
      image: "./images/dispositivos/heltec-capsule-v3.jpg",
      badges: ["LoRa", "Waterproof", "Solar"],
      capabilities: ["waterproof", "solar"],
      description: "Nodo cápsul con carga solar integrada y resistencia al agua. Para despliegues en exterior sin mantenimiento.",
      stock: false,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32-S3",
        "Solar": "Panel integrado",
        "Protección": "IP67",
        "Batería": "LiPo 2000 mAh"
      }
    },
    {
      id: 12,
      slug: "seeed-sensecap-indicator",
      name: "Seeed SenseCAP Indicator",
      series: "Seeed",
      tier: "Industrial",
      pricePen: 2030,
      image: "./images/dispositivos/seeed-sensecap.jpg",
      badges: ["LoRa", "WiFi", "Touch", "ATAK"],
      capabilities: ["wifi", "touchscreen", "atak"],
      description: "Dashboard táctil industrial. Pantalla 4\" a color, WiFi, LoRa y compatible con plugins ATAK. Para centros de mando.",
      stock: true,
      featured: false,
      specs: {
        "Banda": "915 MHz",
        "CPU": "ESP32-S3 + RP2040",
        "Pantalla": "4\" IPS Touch",
        "WiFi": "802.11 b/g/n",
        "USB-C": "Sí",
        "ATAK": "Plugin compatible"
      }
    }
  ],

  /* ── Accesorios ─────────────────────────────────────────── */
  accessories: [
    {
      id: 101,
      slug: "antena-lora-5dbi",
      name: "Antena LoRa 915MHz 5dBi",
      pricePen: 85,
      image: "./images/accesorios/antena-5dbi.webp",
      badges: ["915 MHz", "SMA", "Omnidireccional"],
      description: "Antena omnidireccional 5dBi para 915 MHz. Conector SMA macho. Aumenta el rango hasta 40% vs antena de stock.",
      stock: true
    },
    {
      id: 102,
      slug: "cable-usb-c-1m",
      name: "Cable USB-C Carga Rápida 1m",
      pricePen: 35,
      image: "https://placehold.co/600x400/080c14/94a3b8?text=Cable+USB-C&font=mono",
      badges: ["USB-C", "PD 3.0", "1 metro"],
      description: "Cable USB-C trenzado con soporte PD 3.0. Carga rápida compatible con todos los dispositivos del catálogo.",
      stock: true
    },
    {
      id: 103,
      slug: "funda-tactica-molle",
      name: "Funda Táctica Molle",
      pricePen: 120,
      image: "./images/accesorios/funda-molle.webp",
      badges: ["MOLLE", "Impermeable", "Universal"],
      description: "Funda táctica con sistema MOLLE. Protege tu dispositivo en entornos exigentes. Compatible con T-Beam, T-Echo y similares.",
      stock: true
    },
    {
      id: 104,
      slug: "bateria-lipo-3000mah",
      name: "Batería LiPo 3000mAh",
      pricePen: 95,
      image: "./images/accesorios/bateria-lipo-3000.webp",
      badges: ["3000 mAh", "Li-Po", "JST 2mm"],
      description: "Batería recargable LiPo 3.7V 3000mAh con conector JST 2mm. Compatible con la mayoría de dispositivos del catálogo.",
      stock: true
    },
    {
      id: 105,
      slug: "panel-solar-5w",
      name: "Panel Solar Portátil 5W",
      pricePen: 185,
      image: "./images/accesorios/panel-solar-5w.webp",
      badges: ["5W", "USB-C", "Plegable"],
      description: "Panel solar monocristalino 5W con salida USB-C. Ideal para mantener tus nodos activos en el campo sin conectar a la red.",
      stock: true
    },
    {
      id: 106,
      slug: "antena-yagi-10dbi",
      name: "Antena Yagi Direccional 10dBi",
      pricePen: 260,
      image: "https://placehold.co/600x400/080c14/60a5fa?text=Antena+Yagi&font=mono",
      badges: ["10dBi", "915 MHz", "Direccional"],
      description: "Antena Yagi de alta ganancia para enlaces punto a punto. Ideal para crear backhauls entre nodos distantes.",
      stock: true
    },
    {
      id: 107,
      slug: "conector-sma-ipex",
      name: "Conector SMA a iPEX (x3)",
      pricePen: 25,
      image: "https://placehold.co/600x400/080c14/94a3b8?text=SMA+iPEX&font=mono",
      badges: ["SMA", "iPEX", "Pack x3"],
      description: "Pack de 3 pigtails SMA hembra a iPEX/U.FL. Indispensable para conectar antenas externas a tus módulos LoRa.",
      stock: true
    },
    {
      id: 108,
      slug: "soporte-magnetico",
      name: "Soporte Magnético de Montaje",
      pricePen: 75,
      image: "./images/accesorios/soporte-magnetico.webp",
      badges: ["Magnético", "Universal", "Acero inox"],
      description: "Soporte magnético con base de acero inoxidable. Adhiere tus nodos a vehículos, puertas y superficies metálicas.",
      stock: true
    }
  ],

  /* ── Bundles ────────────────────────────────────────────── */
  bundles: [
    {
      id: 201,
      slug: "bundle-outdoor",
      name: "Bundle Outdoor",
      pricePen: 650,
      image: "./images/bundles/bundle-outdoor.webp",
      industry: "Outdoor & Aventura",
      color: "orange",
      includes: ["T-Beam v1.2", "Antena LoRa 5dBi", "Batería LiPo 3000mAh"],
      useCases: ["Senderismo en los Andes", "Expedición Huaraz", "Inca Trail", "Camping grupal"],
      description: "El kit perfecto para aventureros. Comunicación mesh entre tu grupo sin depender de señal celular en montaña, selva o desierto.",
      savings: 75
    },
    {
      id: 202,
      slug: "bundle-agro",
      name: "Bundle Agro",
      pricePen: 1850,
      image: "./images/bundles/bundle-agro.webp",
      industry: "Agricultura & Ganadería",
      color: "green",
      includes: ["Station G2", "2× T-Beam v1.2", "Panel Solar 5W"],
      useCases: ["Haciendas y fundos", "Monitoreo de ganado", "Riego inteligente", "Campos remotos"],
      description: "Red mesh para predios agrícolas. Nodo base con energía solar + dispositivos de campo. Sin costos mensuales de conectividad.",
      savings: 185
    },
    {
      id: 203,
      slug: "bundle-seguridad",
      name: "Bundle Seguridad",
      pricePen: 2400,
      image: "./images/bundles/bundle-seguridad.webp",
      industry: "Seguridad Urbana",
      color: "blue",
      includes: ["T-Deck Plus", "4× Heltec V3 Lite", "4× Antenas 5dBi", "Fondas Tácticas"],
      useCases: ["Serenazgo municipal", "Vigilancia privada", "Patrullaje coordinado", "Centro de mando"],
      description: "Sistema de comunicación táctico para equipos de seguridad. Centro de mando con T-Deck Plus y agentes con nodos Heltec.",
      savings: 320
    },
    {
      id: 204,
      slug: "bundle-emergencias",
      name: "Bundle Emergencias",
      pricePen: 3100,
      image: "./images/bundles/bundle-emergencias.webp",
      industry: "Emergencias & Defensa Civil",
      color: "orange",
      includes: ["Station G2", "6× T-Beam v1.2", "2× Panel Solar", "Mochilas Tácticas"],
      useCases: ["Bomberos", "Defensa Civil", "PNP - Operaciones campo", "Rescate montaña"],
      description: "Infraestructura de comunicación para emergencias. Desplegable en minutos, funciona sin internet ni celular. Para cuando más importa.",
      savings: 450
    }
  ],

  /* ── Membresías ─────────────────────────────────────────── */
  memberships: [
    {
      id: 301,
      slug: "membresia-basica",
      name: "Membresía Básica",
      pricePen: 370,
      period: "año",
      color: "gray",
      featured: false,
      benefits: [
        "Acceso al Foro de la comunidad",
        "Soporte por email (48h respuesta)",
        "Descuentos del 5% en todos los productos",
        "Newsletter mensual técnica",
        "Acceso a guías PDF de configuración",
        "Canal Discord de la comunidad"
      ]
    },
    {
      id: 302,
      slug: "membresia-pro",
      name: "Membresía Pro",
      pricePen: 740,
      period: "año",
      color: "orange",
      featured: true,
      badge: "Más popular",
      benefits: [
        "Todo lo de Básica",
        "Soporte prioritario (12h respuesta)",
        "Descuentos del 15% en todos los productos",
        "Acceso a 4 capacitaciones/año online",
        "Configuración remota ATAK (inicial)",
        "Webinars exclusivos de expertos",
        "Canal Discord Pro con técnicos FTDMESH",
        "Acceso anticipado a nuevos productos"
      ]
    },
    {
      id: 303,
      slug: "membresia-enterprise",
      name: "Membresía Enterprise",
      pricePen: 3700,
      period: "año",
      color: "blue",
      featured: false,
      benefits: [
        "Todo lo de Pro",
        "Soporte técnico dedicado (4h respuesta)",
        "Descuentos del 25% en todos los productos",
        "Instalación remota incluida (hasta 2/año)",
        "SLA 24h en casos críticos",
        "Capacitación in-company disponible",
        "Integración con sistemas existentes",
        "Reporte mensual de red mesh",
        "Hasta 5 usuarios en la cuenta"
      ]
    }
  ],

  /* ── Eventos ────────────────────────────────────────────── */
  events: [
    {
      id: 401,
      slug: "meshcon-lima-2025",
      name: "MeshCon Lima 2025",
      date: "2025-08-15",
      dateDisplay: "15 de Agosto, 2025",
      type: "Presencial",
      location: "Miraflores, Lima",
      venue: "Centro Empresarial La Molina",
      price: 0,
      priceDisplay: "Gratis",
      capacity: 120,
      registered: 87,
      status: "upcoming",
      description: "La conferencia anual de la comunidad Meshtastic en Perú. Demos en vivo, talleres técnicos, networking y presentación de nuevos dispositivos.",
      agenda: [
        "09:00 - Introducción a Meshtastic 2025",
        "10:30 - Demo de red mesh en Lima",
        "12:00 - Almuerzo networking",
        "14:00 - Taller: Configuración ATAK",
        "16:00 - Casos de uso industriales",
        "17:30 - Cierre y sorteos"
      ],
      tags: ["Networking", "Demo en vivo", "ATAK", "Talleres"]
    },
    {
      id: 402,
      slug: "webinar-atak-integration",
      name: "Webinar: ATAK Integration",
      date: "2025-06-22",
      dateDisplay: "22 de Junio, 2025",
      type: "Online",
      location: "Zoom",
      venue: "Online - Zoom",
      price: 0,
      priceDisplay: "Gratis",
      capacity: 200,
      registered: 143,
      status: "upcoming",
      description: "Aprende a integrar tus nodos Meshtastic con ATAK (Android Team Awareness Kit). Configuración, plugins y casos tácticos.",
      agenda: [
        "19:00 - Bienvenida y agenda",
        "19:10 - ¿Qué es ATAK?",
        "19:40 - Instalación del plugin Meshtastic",
        "20:10 - Demo: Rastreo en tiempo real",
        "20:40 - Q&A en vivo",
        "21:00 - Cierre"
      ],
      tags: ["ATAK", "Online", "Gratuito", "Táctica"]
    },
    {
      id: 403,
      slug: "taller-lora-basico",
      name: "Taller LoRa Básico",
      date: "2025-07-08",
      dateDisplay: "8 de Julio, 2025",
      type: "Online + Kit",
      location: "Online + Envío kit",
      venue: "Online - Meet + Kit enviado por courier",
      price: 185,
      priceDisplay: "S/. 185",
      capacity: 30,
      registered: 18,
      status: "upcoming",
      description: "Taller práctico para principiantes. Incluye kit físico con Heltec V3 Lite. Aprende desde cero a configurar tu primer nodo Meshtastic.",
      agenda: [
        "Día 1 (online): Teoría LoRa y Meshtastic",
        "Día 2 (online): Configuración con Meshtastic Flasher",
        "Día 3 (auto): Práctica con tu kit",
        "Día 4 (online): Resolución de dudas y proyecto final"
      ],
      tags: ["Principiantes", "Kit incluido", "4 sesiones", "Certificado"]
    },
    {
      id: 404,
      slug: "taller-despliegue-campo",
      name: "Taller: Despliegue de Campo",
      date: "2025-04-05",
      dateDisplay: "5 de Abril, 2025",
      type: "Presencial",
      location: "San Borja, Lima",
      venue: "Parque de la Amistad, San Borja",
      price: 0,
      priceDisplay: "Gratis",
      capacity: 40,
      registered: 40,
      status: "past",
      description: "Taller práctico de despliegue de red mesh en campo abierto. Configuración de repetidores, antenas y visualización en mapas.",
      tags: ["Presencial", "Campo", "Red mesh", "Antenas"]
    },
    {
      id: 405,
      slug: "webinar-agricultura-iot",
      name: "Webinar: Meshtastic para Agricultura",
      date: "2025-03-18",
      dateDisplay: "18 de Marzo, 2025",
      type: "Online",
      location: "Zoom",
      venue: "Online - Zoom",
      price: 0,
      priceDisplay: "Gratis",
      capacity: 150,
      registered: 134,
      status: "past",
      description: "Casos de uso de redes LoRa en agricultura peruana. Monitoreo de parcelas, ganado y comunicación en fundos sin señal celular.",
      tags: ["Agricultura", "IoT", "Online", "Gratuito"]
    },
    {
      id: 406,
      slug: "meetup-comunidad-enero",
      name: "Meetup Comunidad - Enero",
      date: "2025-01-25",
      dateDisplay: "25 de Enero, 2025",
      type: "Presencial",
      location: "Miraflores, Lima",
      venue: "Café Literario, Miraflores",
      price: 0,
      priceDisplay: "Gratis",
      capacity: 50,
      registered: 47,
      status: "past",
      description: "Encuentro mensual informal de la comunidad Meshtastic Lima. Trae tu dispositivo, comparte proyectos y conoce a otros entusiastas.",
      tags: ["Networking", "Comunidad", "Casual", "Presencial"]
    }
  ],

  /* ── Industrias ─────────────────────────────────────────── */
  industries: [
    {
      id: 501,
      slug: "outdoor-aventura",
      name: "Outdoor & Aventura",
      icon: "🏔️",
      color: "orange",
      headline: "Comunícate en los Andes sin señal celular",
      description: "Lleva Meshtastic a tu próxima expedición. Red mesh entre tu equipo sin depender de torres celulares ni internet satelital.",
      useCases: [
        "Senderismo en Huaraz y Cusco",
        "Expediciones al Nevado Ausangate",
        "Inca Trail y Camino Inca",
        "Camping en Reserva Pacaya Samiria",
        "Parapente y deportes de aventura"
      ],
      recommendedBundle: 201,
      testimonial: {
        text: "En el Ausangate a 5,800m no había señal. Con FTDMESH podíamos comunicarnos en todo el grupo. Nos salvó.",
        author: "Carlos Quispe",
        role: "Guía de montaña certificado, Huaraz"
      }
    },
    {
      id: 502,
      slug: "agricultura-ganaderia",
      name: "Agricultura & Ganadería",
      icon: "🌾",
      color: "green",
      headline: "Conectividad para tus tierras sin cobertura",
      description: "Monitorea ganado, activa riegos y comunica a tu personal en haciendas y fundos remotos sin pagar por datos móviles.",
      useCases: [
        "Rastreo GPS de ganado",
        "Comunicación en fundos de Ica y La Libertad",
        "Monitoreo de sensores de riego",
        "Coordinación de cuadrillas agrícolas",
        "Alertas de perímetro"
      ],
      recommendedBundle: 202,
      testimonial: {
        text: "Tenemos 800 hectáreas en Ica. Con la red mesh coordinamos a 12 personas sin pagar plan de datos. El ahorro es enorme.",
        author: "Ing. María Flores",
        role: "Gerente Agrícola, Ica"
      }
    },
    {
      id: 503,
      slug: "seguridad-urbana",
      name: "Seguridad Urbana",
      icon: "🛡️",
      color: "blue",
      headline: "Comunicación táctica para serenazgo y seguridad privada",
      description: "Red privada cifrada AES-256 para equipos de seguridad. Sin dependencia de redes celulares que pueden estar saturadas o caídas.",
      useCases: [
        "Serenazgo municipal Lima y provincias",
        "Vigilancia privada en condominios",
        "Patrullaje coordinado",
        "Centro de mando y control",
        "Respuesta a incidentes"
      ],
      recommendedBundle: 203,
      testimonial: {
        text: "El municipio de Surco tiene 15 nodos desplegados. La coordinación mejoró 60% y ya no dependemos del celular en emergencias.",
        author: "Cte. Roberto Medina",
        role: "Jefe de Serenazgo, Santiago de Surco"
      }
    },
    {
      id: 504,
      slug: "emergencias-defensa-civil",
      name: "Emergencias & Defensa Civil",
      icon: "🚨",
      color: "orange",
      headline: "Comunicación cuando la red colapsa",
      description: "En desastres naturales, la red celular colapsa primero. FTDMESH proporciona comunicación independiente para equipos de respuesta.",
      useCases: [
        "Bomberos voluntarios y profesionales",
        "Defensa Civil en sismos e inundaciones",
        "PNP en operaciones de campo",
        "Cruz Roja y organizaciones humanitarias",
        "Rescate en montaña y zonas remotas"
      ],
      recommendedBundle: 204,
      testimonial: {
        text: "En el sismo de Amazonas desplegamos 8 nodos en 20 minutos. Coordinamos el rescate sin señal. Funciona cuando todo falla.",
        author: "Cap. Ana Salas",
        role: "Bomberos Voluntarios, Lima"
      }
    },
    {
      id: 505,
      slug: "mineria-industria",
      name: "Minería & Industria",
      icon: "⛏️",
      color: "blue",
      headline: "Redes mesh en entornos industriales adversos",
      description: "Comunicación en minas, plantas industriales y zonas de alta interferencia RF. Dispositivos IP67, temperatura extendida.",
      useCases: [
        "Minas en Cerro de Pasco y Arequipa",
        "Plantas procesadoras",
        "Comunicación subterránea",
        "Rastreo de personal en zonas de riesgo",
        "Monitoreo de maquinaria remota"
      ],
      recommendedBundle: 203,
      testimonial: {
        text: "En la mina a 4,200m, los radios industriales costaban una fortuna. Con FTDMESH cubrimos el tajo por S/. 2,400.",
        author: "Ing. Luis Torres",
        role: "Jefe de Operaciones, Minera Cusco SAC"
      }
    }
  ],

  /* ── Carcasas 3D ────────────────────────────────────────── */
  enclosures: [
    {
      id: 501,
      slug: "heltec-v3-lite-case",
      name: "Case Heltec V3 Lite Compact",
      pricePen: 45,
      image: "./images/carcasas/heltec-v3-lite-case.jpg",
      badges: ["PLA", "PETG", "IP54"],
      compatible: ["Heltec V3 Lite"],
      material: "PLA / PETG",
      color: "Negro / Gris",
      printTime: "~3h",
      designer: "Comunidad Meshtastic",
      source: "MakerWorld",
      description: "Carcasa compacta diseñada específicamente para el Heltec WiFi LoRa 32 V3 Lite. Diseño minimalista con acceso a todos los puertos. Imprimible en PLA o PETG.",
      stock: true,
      featured: true
    },
    {
      id: 502,
      slug: "tbeam-supreme-case",
      name: "Case T-Beam Supreme Táctico",
      pricePen: 65,
      image: "./images/carcasas/tbeam-supreme-case.jpg",
      badges: ["PETG", "GPS", "Táctica"],
      compatible: ["T-Beam Supreme", "T-Beam v1.2"],
      material: "PETG / ASA",
      color: "Negro mate / Ranger Green",
      printTime: "~6h",
      designer: "TacticalMesh",
      source: "MakerWorld",
      description: "Case táctico para T-Beam con ventana para pantalla OLED, acceso al botón, antena externa y clip para cinturón MOLLE. Ideal para operaciones outdoor.",
      stock: true,
      featured: true
    },
    {
      id: 503,
      slug: "rak4631-modular-case",
      name: "Case RAK4631 Modular IP67",
      pricePen: 80,
      image: "./images/carcasas/rak4631-modular-case.jpg",
      badges: ["ASA", "IP67", "Modular"],
      compatible: ["RAK4631 WisBlock"],
      material: "ASA / ABS",
      color: "Negro",
      printTime: "~5h",
      designer: "RAKwireless Community",
      source: "Printables",
      description: "Enclosure modular para RAK4631 WisBlock con sello de silicona incluido (IP67). Sistema de expansión por módulos apilables. Perfecto para instalaciones fijas al aire libre.",
      stock: true,
      featured: false
    },
    {
      id: 504,
      slug: "techo-waterproof-case",
      name: "Case T-Echo Waterproof",
      pricePen: 55,
      image: "./images/carcasas/techo-waterproof-case.jpg",
      badges: ["PETG", "IP65", "E-Paper"],
      compatible: ["LILYGO T-Echo"],
      material: "PETG",
      color: "Blanco / Negro",
      printTime: "~4h",
      designer: "MeshCommunity PE",
      source: "MakerWorld",
      description: "Case impermeable con ventana transparente para pantalla e-paper del T-Echo. Resistente al polvo y salpicaduras (IP65). Incluye porta-batería adicional.",
      stock: true,
      featured: false
    },
    {
      id: 505,
      slug: "node-solar-enclosure",
      name: "Carcasa Nodo Solar Outdoor",
      pricePen: 95,
      image: "./images/carcasas/node-solar-enclosure.jpg",
      badges: ["ASA", "Solar", "IP67", "Outdoor"],
      compatible: ["Heltec V3 Lite", "T-Beam v1.2"],
      material: "ASA (resistente UV)",
      color: "Blanco / Gris claro",
      printTime: "~8h",
      designer: "SolarMesh",
      source: "Thingiverse",
      description: "Enclosure completo para nodo solar permanente. Incluye soporte para panel solar 5W, porta-batería LiPo 3000mAh, y paso para cable de carga. Resistente a UV y lluvia.",
      stock: true,
      featured: true
    },
    {
      id: 506,
      slug: "heltec-capsule-case",
      name: "Case Heltec Capsule Cilíndrico",
      pricePen: 40,
      image: "./images/carcasas/heltec-capsule-case.jpg",
      badges: ["PLA", "IP54", "Compact"],
      compatible: ["Heltec Capsule Sensor V3"],
      material: "PLA / PETG",
      color: "Negro",
      printTime: "~2h",
      designer: "Heltec Community",
      source: "MakerWorld",
      description: "Carcasa cilíndrica minimalista para el Heltec Capsule Sensor V3. Diseño de rosca para fácil apertura. Incluye ojal para colgar con cordón.",
      stock: true,
      featured: false
    },
    {
      id: 507,
      slug: "tdeck-plus-case",
      name: "Case T-Deck Plus Protector",
      pricePen: 70,
      image: "./images/carcasas/tdeck-plus-case.jpg",
      badges: ["PETG", "Teclado", "Pantalla"],
      compatible: ["T-Deck Plus"],
      material: "PETG",
      color: "Negro / Antracita",
      printTime: "~5h",
      designer: "DeckMesh",
      source: "Printables",
      description: "Funda protectora para T-Deck Plus con acceso completo al teclado QWERTY y pantalla táctil. Sistema de clip para bolsillo lateral. Incluye tapa trasera con soporte.",
      stock: true,
      featured: false
    },
    {
      id: 508,
      slug: "rak-rugged-case",
      name: "Case RAK Rugged Militar",
      pricePen: 110,
      image: "./images/carcasas/rak-rugged-case.jpg",
      badges: ["ASA", "IP68", "Militar", "Drop-proof"],
      compatible: ["RAK WisBlock Rugged", "RAK4631 WisBlock"],
      material: "ASA / Nylon CF",
      color: "Ranger Green / Negro",
      printTime: "~10h",
      designer: "TacticalMesh Labs",
      source: "MakerWorld",
      description: "Enclosure de grado militar con juntas de silicona (IP68), absorción de impactos y puntos de anclaje para arnés. Probado a caídas de 1.5m. El case Meshtastic más robusto disponible.",
      stock: true,
      featured: true
    },
    {
      id: 509,
      slug: "mini-tracker-case",
      name: "Case Mini Tracker Ultra-Compact",
      pricePen: 35,
      image: "./images/carcasas/mini-tracker-case.jpg",
      badges: ["PLA", "Portátil", "GPS"],
      compatible: ["Seeed Card Tracker T1000-E", "Heltec V3 Lite"],
      material: "PLA / PETG",
      color: "Negro / Rojo / Verde",
      printTime: "~1.5h",
      designer: "MiniMesh",
      source: "MakerWorld",
      description: "Case ultra-compacto para rastreador personal. Cabe en el bolsillo de una camisa. Clip integrado para mochila. Disponible en varios colores. Ideal para tracking de personas y mascotas.",
      stock: true,
      featured: false
    },
    {
      id: 510,
      slug: "mesh-repeater-case",
      name: "Carcasa Repetidor Solar Mesh",
      pricePen: 120,
      image: "./images/carcasas/mesh-repeater-case.jpg",
      badges: ["ASA", "Solar", "IP67", "Repetidor"],
      compatible: ["Heltec V3 Lite", "RAK4631 WisBlock"],
      material: "ASA resistente UV",
      color: "Blanco / Gris",
      printTime: "~12h",
      designer: "SolarNode PE",
      source: "Printables",
      description: "Enclosure para nodo repetidor con panel solar integrado 10W, batería interna 5000mAh y paso de antena externa. Diseñado para instalación permanente en postes o paredes. Autonomía mayor a 7 días sin sol.",
      stock: true,
      featured: true
    },
    {
      id: 511,
      slug: "universal-mesh-case",
      name: "Case Universal Mesh Node",
      pricePen: 50,
      image: "./images/carcasas/universal-mesh-case.jpg",
      badges: ["PLA", "Universal", "Adaptable"],
      compatible: ["Heltec V3 Lite", "T-Beam v1.2", "RAK4631 WisBlock"],
      material: "PLA / PETG",
      color: "Negro / Gris",
      printTime: "~4h",
      designer: "OpenMesh",
      source: "Thingiverse",
      description: "Case universal con sistema de insertos intercambiables para diferentes placas. Un solo case, múltiples dispositivos. Incluye plantillas para Heltec V3, T-Beam y RAK4631.",
      stock: true,
      featured: false
    },
    {
      id: 512,
      slug: "outdoor-pelican-case",
      name: "Nodo Outdoor Resistente",
      pricePen: 85,
      image: "./images/carcasas/outdoor-pelican-case.jpg",
      badges: ["ASA", "IP66", "Outdoor", "Antena ext."],
      compatible: ["T-Beam v1.2", "Heltec V3 Lite", "RAK4631 WisBlock"],
      material: "ASA + TPU bumper",
      color: "Negro / Naranja safety",
      printTime: "~7h",
      designer: "OutdoorMesh PE",
      source: "MakerWorld",
      description: "Enclosure outdoor resistente con bumper TPU antiimpacto, conector para antena externa SMA, y ventana OLED sellada. Ideal para expediciones, construcción y trabajo de campo.",
      stock: true,
      featured: false
    }
  ],

  /* ── Config ─────────────────────────────────────────────── */
  config: {
    exchangeRate: 3.72,
    currency: "PEN",
    whatsapp: "+51 999 888 777",
    email: "info@ftdmesh.pe",
    discord: "https://discord.gg/ftdmesh",
    github: "https://github.com/ftdmesh",
    instagram: "https://instagram.com/ftdmesh",
    facebook: "https://facebook.com/ftdmesh",
    youtube: "https://youtube.com/@ftdmesh",
    address: "Lima, Perú"
  }
};

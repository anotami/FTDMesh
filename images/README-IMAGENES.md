# Guía de Imágenes — FTDMESH

Coloca las imágenes en las carpetas correspondientes con los nombres exactos indicados.
El sitio las cargará automáticamente. Si una imagen no existe, muestra un placeholder de color.

**Formato recomendado:** JPG o WebP · Tamaño: 800×600 px mínimo · Peso: < 300 KB por imagen

---

## 📁 images/dispositivos/   (12 archivos)

| Nombre de archivo         | Producto                      | Dónde conseguir la imagen                                      |
|---------------------------|-------------------------------|----------------------------------------------------------------|
| `heltec-v3-lite.jpg`      | Heltec V3 Lite                | https://heltec.org/project/wifi-lora-32-v3/                   |
| `t-beam-v12.jpg`          | T-Beam v1.2                   | https://www.lilygo.cc/products/t-beam-v1-2                    |
| `heltec-mesh-t114.jpg`    | Heltec Mesh Node T114         | https://heltec.org/project/mesh-node-t114/                    |
| `rak4631-wisblock.jpg`    | RAK4631 WisBlock              | https://store.rakwireless.com/products/rak4631-lpwan-node      |
| `t-echo.jpg`              | LILYGO T-Echo                 | https://www.lilygo.cc/products/t-echo                         |
| `t-beam-supreme.jpg`      | T-Beam Supreme                | https://www.lilygo.cc/products/t-beam-supreme                 |
| `seeed-card-tracker.jpg`  | Seeed Card Tracker T1000-E    | https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E     |
| `station-g2.jpg`          | Station G2                    | Buscar "Meshtastic Station G2" en Google Imágenes             |
| `rak-wisblock-rugged.jpg` | RAK WisBlock Rugged           | https://store.rakwireless.com                                  |
| `t-deck-plus.jpg`         | T-Deck Plus                   | https://www.lilygo.cc/products/t-deck                         |
| `heltec-capsule-v3.jpg`   | Heltec Capsule Sensor V3      | https://heltec.org/project/capsule-sensor-v3/                 |
| `seeed-sensecap.jpg`      | Seeed SenseCAP Indicator      | https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html |

---

## 📁 images/accesorios/   (8 archivos)

| Nombre de archivo         | Producto                  | Fuente sugerida                                      |
|---------------------------|---------------------------|------------------------------------------------------|
| `antena-5dbi.jpg`         | Antena LoRa 915MHz 5dBi   | AliExpress / Amazon — buscar "LoRa 915MHz antenna"   |
| `cable-usb-c.jpg`         | Cable USB-C Carga Rápida  | Foto genérica de cable USB-C                         |
| `funda-molle.jpg`         | Funda Táctica Molle       | AliExpress — buscar "molle pouch radio"              |
| `bateria-lipo-3000.jpg`   | Batería LiPo 3000mAh      | AliExpress — "3.7V 3000mAh lipo battery"            |
| `panel-solar-5w.jpg`      | Panel Solar Portátil 5W   | AliExpress — "5W solar panel portable"              |
| `antena-yagi.jpg`         | Antena Yagi 10dBi         | AliExpress — "915MHz yagi antenna"                  |
| `conector-sma.jpg`        | Conector SMA a iPEX       | AliExpress — "SMA to iPEX pigtail"                  |
| `soporte-magnetico.jpg`   | Soporte Magnético Montaje | Amazon / AliExpress — soporte magnético genérico     |

---

## 📁 images/bundles/   (4 archivos)

Para los bundles, puedes usar una composición de fotos del ambiente de uso:

| Nombre de archivo          | Bundle              | Imagen sugerida                                    |
|----------------------------|---------------------|----------------------------------------------------|
| `bundle-outdoor.jpg`       | Bundle Outdoor      | Foto de senderismo en los Andes / Machu Picchu     |
| `bundle-agro.jpg`          | Bundle Agro         | Foto de campo agrícola o fundo ganadero en Perú    |
| `bundle-seguridad.jpg`     | Bundle Seguridad    | Foto de serenazgo o guardia urbana                 |
| `bundle-emergencias.jpg`   | Bundle Emergencias  | Foto de rescate o defensa civil                    |

Fuentes gratuitas sin copyright: https://unsplash.com · https://pexels.com · https://pixabay.com

---

## 📁 images/hero/   (opcional)

Puedes agregar imágenes de fondo para el hero de cada página:

| Nombre de archivo   | Uso                     |
|---------------------|-------------------------|
| `hero-home.jpg`     | Fondo hero principal    |
| `hero-industrias.jpg` | Fondo página industrias |
| `hero-eventos.jpg`  | Fondo página eventos    |

---

## ✅ Checklist de formato

- [ ] Formato: JPG o WebP (no PNG a menos que tenga transparencia)
- [ ] Tamaño: 800×600 px para productos, 1920×600 px para heroes
- [ ] Peso: < 300 KB por imagen (comprimir en https://squoosh.app)
- [ ] Nombre: exactamente igual al indicado arriba (minúsculas, guiones, sin espacios)

---

## Cómo descargar imágenes de los fabricantes

1. Ve al link del fabricante indicado arriba
2. Click derecho en la foto del producto → "Guardar imagen como..."
3. Guarda con el nombre exacto indicado en la tabla
4. Coloca el archivo en la carpeta correcta (`images/dispositivos/`, etc.)
5. Sube el archivo al repositorio GitHub

```bash
# Desde tu computadora local, después de agregar las imágenes:
git add images/
git commit -m "Agregar imágenes de productos"
git push
```

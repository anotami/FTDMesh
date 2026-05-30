#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  add-analytics.sh
#  Agrega GoatCounter + contador de visitas visible a todos los
#  archivos .html de un proyecto estático.
#
#  Uso:
#    bash add-analytics.sh <codigo-goatcounter>
#
#  Ejemplo:
#    bash add-analytics.sh hackperu
#    bash add-analytics.sh mi-tienda
# ─────────────────────────────────────────────────────────────

CODE=${1:-""}

if [ -z "$CODE" ]; then
  echo ""
  echo "  Uso: bash add-analytics.sh <tu-codigo-goatcounter>"
  echo "  Ejemplo: bash add-analytics.sh hackperu"
  echo ""
  echo "  El codigo es el que elegiste al registrarte en goatcounter.com"
  echo "  Tu dashboard queda en: https://TU-CODIGO.goatcounter.com"
  echo ""
  exit 1
fi

ANALYTICS=$(cat <<EOF

<!-- ═══ ANALYTICS ════════════════════════════════════════════
     Dashboard: https://${CODE}.goatcounter.com
═══════════════════════════════════════════════════════════ -->
<script data-goatcounter="https://${CODE}.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
<script>
(function(){
  fetch("https://api.counterapi.dev/v1/${CODE}/visitas/up")
    .then(function(r){ return r.json(); })
    .then(function(d){
      var el = document.getElementById("site-visit-count");
      if(el && d.count != null) el.textContent = Number(d.count).toLocaleString();
    }).catch(function(){});
})();
</script>
EOF
)

COUNTER_WIDGET='<div style="text-align:center;padding:8px 0;font-size:11px;color:#64748b;">
  <span style="margin-right:4px;">👁</span>
  <span id="site-visit-count" style="color:#f97316;font-weight:600;font-family:monospace;">—</span>
  <span> visitas totales</span>
</div>'

HTML_FILES=$(find . -name "*.html" -not -path "*/node_modules/*" -not -path "*/.git/*")
COUNT=0
SKIPPED=0

echo ""
echo "  Código GoatCounter: $CODE"
echo "  Dashboard: https://${CODE}.goatcounter.com"
echo "  Buscando archivos HTML..."
echo ""

for file in $HTML_FILES; do
  if grep -q "goatcounter" "$file"; then
    echo "  ⏭  Ya tiene analytics: $file"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Agrega widget de contador antes de </footer> si existe, sino antes de </body>
  if grep -q "</footer>" "$file"; then
    python3 -c "
import sys
content = open('$file').read()
widget = '''$COUNTER_WIDGET'''
content = content.replace('</footer>', widget + '\n</footer>', 1)
open('$file', 'w').write(content)
"
  fi

  # Agrega scripts antes de </body>
  python3 -c "
import sys
content = open('$file').read()
analytics = '''$ANALYTICS'''
content = content.replace('</body>', analytics + '\n</body>', 1)
open('$file', 'w').write(content)
"

  echo "  ✅  Actualizado: $file"
  COUNT=$((COUNT + 1))
done

echo ""
echo "  ────────────────────────────────────────"
echo "  ✅  $COUNT archivo(s) actualizados"
if [ $SKIPPED -gt 0 ]; then
  echo "  ⏭  $SKIPPED archivo(s) ya tenían analytics"
fi
echo ""
echo "  Próximos pasos:"
echo "  1. git add -A"
echo "  2. git commit -m 'Agregar analytics GoatCounter'"
echo "  3. git push"
echo ""
echo "  Tu dashboard: https://${CODE}.goatcounter.com"
echo "  ────────────────────────────────────────"
echo ""

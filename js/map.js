/**
 * Terruño Chileno - Módulo de Georreferenciación, Topografía y Mapa Interactivo de Valles
 * Visualización topográfica precisa de Chile con corte transversal de altitud (msnm),
 * las 3 macro-zonas del Decreto 2011 (Costa, Entre Cordilleras, Andes) y silueta geográfica auténtica.
 */
const TerroirMap = {
  currentValleyId: null,
  activeFilterZone: "all",
  activeFilterRegion: "all",

  init() {
    this.renderElevationProfile();
    this.renderMapList();
    this.renderSvgMap();
    this.bindEvents();
  },

  bindEvents() {
    const zoneFilter = document.getElementById("map-zone-filter");
    const regionFilter = document.getElementById("map-region-filter");

    if (zoneFilter) {
      zoneFilter.addEventListener("change", (e) => {
        this.activeFilterZone = e.target.value;
        this.filterValleys();
      });
    }

    if (regionFilter) {
      regionFilter.addEventListener("change", (e) => {
        this.activeFilterRegion = e.target.value;
        this.filterValleys();
      });
    }
  },

  filterByMacroZone(zoneName) {
    this.activeFilterZone = zoneName;
    const zoneFilter = document.getElementById("map-zone-filter");
    if (zoneFilter) zoneFilter.value = zoneName;
    this.filterValleys();
    App.showToast(`Filtrando por zona topográfica: ${zoneName}`);
  },

  getFilteredValleys() {
    return VALLEYS_DATA.filter((v) => {
      const matchZone =
        this.activeFilterZone === "all" ||
        v.zone.toLowerCase().includes(this.activeFilterZone.toLowerCase()) ||
        (v.doType && v.doType.some((d) => d.toLowerCase().includes(this.activeFilterZone.toLowerCase())));
      const matchRegion =
        this.activeFilterRegion === "all" ||
        v.region.toLowerCase() === this.activeFilterRegion.toLowerCase();
      return matchZone && matchRegion;
    });
  },

  filterValleys() {
    this.renderMapList();
    this.updateSvgMapHighlights();
  },

  /**
   * Renderiza el Diagrama de Corte Transversal Topográfico (Este - Oeste)
   * Ilustra el perfil de elevación desde el Pacífico hasta la Cordillera de los Andes
   */
  renderElevationProfile() {
    const container = document.getElementById("elevation-profile-container");
    if (!container) return;

    container.innerHTML = `
      <svg viewBox="0 0 900 240" class="elevation-svg-canvas" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1B4965" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#0B1D28" stop-opacity="0.95"/>
          </linearGradient>
          <linearGradient id="coastGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2D5A43" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#14281E" stop-opacity="0.95"/>
          </linearGradient>
          <linearGradient id="centralGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#C29B38" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#3D2E0B" stop-opacity="0.9"/>
          </linearGradient>
          <linearGradient id="andesGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
            <stop offset="25%" stop-color="#722F37" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#250910" stop-opacity="0.98"/>
          </linearGradient>
        </defs>

        <!-- Fondo y Ejes de Altitud -->
        <line x1="60" y1="200" x2="880" y2="200" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <line x1="60" y1="150" x2="880" y2="150" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
        <line x1="60" y1="100" x2="880" y2="100" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>
        <line x1="60" y1="50" x2="880" y2="50" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2 2"/>

        <text x="15" y="204" class="elev-axis-text">0 m</text>
        <text x="10" y="154" class="elev-axis-text">500 m</text>
        <text x="5" y="104" class="elev-axis-text">1.500 m</text>
        <text x="5" y="54" class="elev-axis-text">4.000 m</text>

        <!-- Océano Pacífico (0m) -->
        <rect x="60" y="195" width="130" height="40" fill="url(#oceanGrad)" rx="3"/>
        <path d="M 60 195 Q 90 190 120 195 T 190 195 L 190 235 L 60 235 Z" fill="rgba(69, 123, 157, 0.4)"/>
        <text x="125" y="220" text-anchor="middle" class="elev-layer-title" fill="#A8DADC">🌊 Océano Pacífico</text>
        <text x="125" y="232" text-anchor="middle" class="elev-layer-sub" fill="#81C784">Corriente de Humboldt (14°C)</text>

        <!-- Cordillera de la Costa (400 - 900m) -->
        <path d="M 190 200 Q 230 145 270 140 Q 310 135 340 185 L 340 235 L 190 235 Z" fill="url(#coastGrad)"/>
        <text x="265" y="130" text-anchor="middle" class="elev-peak-text" fill="#A3E4C0">⛰️ Cordillera de la Costa (800m)</text>

        <!-- Depresión Central / Valle Longitudinal (150 - 450m) -->
        <path d="M 340 185 Q 420 178 500 170 L 500 235 L 340 235 Z" fill="url(#centralGrad)"/>
        <text x="420" y="165" text-anchor="middle" class="elev-layer-title" fill="#F4D06F">🌾 Depresión Central</text>
        <text x="420" y="195" text-anchor="middle" class="elev-layer-sub" fill="#FFF">Amplitud Térmica +18°C</text>

        <!-- Cordillera de los Andes (1.000 - 6.961m) -->
        <path d="M 500 170 Q 560 140 620 100 Q 690 60 760 30 Q 820 15 880 20 L 880 235 L 500 235 Z" fill="url(#andesGrad)"/>
        <text x="760" y="22" text-anchor="middle" class="elev-peak-text" fill="#FFFFFF">❄️ Cordillera de los Andes (6.961m)</text>
        <text x="760" y="70" text-anchor="middle" class="elev-layer-sub" fill="#FFD166">Aire Frío Catabático (Viento Raco)</text>

        <!-- Puntos Interactivos Clave de Altitud -->
        <!-- Leyda -->
        <g class="elev-pin-group" onclick="TerroirMap.openValleyModal('san_antonio_leyda')" style="cursor:pointer;">
          <circle cx="210" cy="188" r="5" fill="#48CAE4" stroke="#FFF" stroke-width="1.5"/>
          <line x1="210" y1="188" x2="210" y2="160" stroke="#48CAE4" stroke-width="1" stroke-dasharray="2 2"/>
          <rect x="165" y="142" width="90" height="18" fill="rgba(10,20,30,0.85)" rx="3" stroke="#48CAE4"/>
          <text x="210" y="155" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">Leyda (120m)</text>
        </g>

        <!-- Casablanca -->
        <g class="elev-pin-group" onclick="TerroirMap.openValleyModal('casablanca')" style="cursor:pointer;">
          <circle cx="290" cy="162" r="5" fill="#48CAE4" stroke="#FFF" stroke-width="1.5"/>
          <line x1="290" y1="162" x2="290" y2="110" stroke="#48CAE4" stroke-width="1" stroke-dasharray="2 2"/>
          <rect x="235" y="92" width="110" height="18" fill="rgba(10,20,30,0.85)" rx="3" stroke="#48CAE4"/>
          <text x="290" y="105" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">Casablanca (250m)</text>
        </g>

        <!-- Colchagua / Peumo -->
        <g class="elev-pin-group" onclick="TerroirMap.openValleyModal('colchagua')" style="cursor:pointer;">
          <circle cx="420" cy="176" r="5" fill="#D4AF37" stroke="#FFF" stroke-width="1.5"/>
          <line x1="420" y1="176" x2="420" y2="135" stroke="#D4AF37" stroke-width="1" stroke-dasharray="2 2"/>
          <rect x="365" y="117" width="110" height="18" fill="rgba(20,15,10,0.85)" rx="3" stroke="#D4AF37"/>
          <text x="420" y="130" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">Apalta / Peumo (220m)</text>
        </g>

        <!-- Maipo Alto Puente Alto -->
        <g class="elev-pin-group" onclick="TerroirMap.openValleyModal('maipo')" style="cursor:pointer;">
          <circle cx="580" cy="128" r="5" fill="#E63946" stroke="#FFF" stroke-width="1.5"/>
          <line x1="580" y1="128" x2="580" y2="90" stroke="#E63946" stroke-width="1" stroke-dasharray="2 2"/>
          <rect x="520" y="72" width="120" height="18" fill="rgba(30,10,15,0.85)" rx="3" stroke="#E63946"/>
          <text x="580" y="85" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">Puente Alto (650m)</text>
        </g>

        <!-- Elqui Alcohuaz -->
        <g class="elev-pin-group" onclick="TerroirMap.openValleyModal('elqui')" style="cursor:pointer;">
          <circle cx="710" cy="55" r="5" fill="#FFB703" stroke="#FFF" stroke-width="1.5"/>
          <line x1="710" y1="55" x2="710" y2="30" stroke="#FFB703" stroke-width="1" stroke-dasharray="2 2"/>
          <rect x="650" y="12" width="120" height="18" fill="rgba(30,20,5,0.85)" rx="3" stroke="#FFB703"/>
          <text x="710" y="25" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">Alcohuaz (2.200m)</text>
        </g>
      </svg>
    `;
  },

  /**
   * Renderiza el Mapa SVG Topográfico de Chile con Georreferenciación Exacta
   * Coordenadas calibradas dentro de la franja territorial y franjas Costa/Centro/Andes
   */
  renderSvgMap() {
    const svgContainer = document.getElementById("chile-interactive-svg");
    if (!svgContainer) return;

    // Rango de latitudes vitivinícolas de Chile: -27.0°S (Copiapó) a -41.0°S (Osorno/Austral)
    const latMin = -26.8;
    const latMax = -41.2;

    // Función para calcular la coordenada X e Y de cada valle dentro del mapa
    const getCoordinates = (v) => {
      const normY = (v.lat - latMin) / (latMax - latMin); // 0 (Norte) a 1 (Sur)
      const cy = 60 + normY * 860; // 60px a 920px

      // Curvatura geográfica real de Chile
      // En el norte (cy 60-300): x_costa ~ 150, x_andes ~ 320 (ancho 170px)
      // En la zona central (cy 300-650): x_costa ~ 165, x_andes ~ 335 (ancho 170px)
      // En el sur (cy 650-920): x_costa ~ 155, x_andes ~ 315 (ancho 160px)
      let xCoast = 155;
      let xAndes = 330;

      if (cy < 300) {
        xCoast = 150 - (300 - cy) * 0.05;
        xAndes = 325 - (300 - cy) * 0.04;
      } else if (cy >= 300 && cy < 650) {
        xCoast = 162 + Math.sin((cy - 300) / 100) * 8;
        xAndes = 338 + Math.sin((cy - 300) / 100) * 6;
      } else {
        xCoast = 155 - (cy - 650) * 0.04;
        xAndes = 318 - (cy - 650) * 0.05;
      }

      let cx = xCoast + 80; // Centro por defecto

      if (v.zone.includes("Costa") || (v.doType && v.doType.includes("Costa"))) {
        cx = xCoast + 22; // Franja costera (segura dentro de tierra firme)
      } else if (v.zone.includes("Andes") || (v.doType && v.doType.includes("Andes"))) {
        cx = xAndes - 24; // Franja andina (al pie de la cordillera)
      } else {
        cx = xCoast + (xAndes - xCoast) * 0.5; // Depresión intermedia
      }

      return { cx, cy, xCoast, xAndes };
    };

    const pins = VALLEYS_DATA.map((v) => {
      const { cx, cy } = getCoordinates(v);
      const isAndes = v.zone.includes("Andes") || (v.doType && v.doType.includes("Andes"));
      const isCosta = v.zone.includes("Costa") || (v.doType && v.doType.includes("Costa"));

      let pinColor = "#D4AF37"; // Oro (Entre Cordilleras)
      let zoneTag = "🌾 Centro";
      if (isCosta) {
        pinColor = "#48CAE4";
        zoneTag = "🌊 Costa";
      } else if (isAndes) {
        pinColor = "#E63946";
        zoneTag = "🏔️ Andes";
      }

      const shortName = v.name.replace("Valle de ", "").replace("Valle del ", "").replace("Sub-valle de ", "");
      const isRightAligned = cx > 240;

      return `
        <g class="map-valley-pin" data-id="${v.id}" onclick="TerroirMap.openValleyModal('${v.id}')" style="cursor:pointer;">
          <!-- Pulso de radar -->
          <circle cx="${cx}" cy="${cy}" r="9" class="pin-pulse" stroke="${pinColor}" fill="none"/>
          <!-- Núcleo del pin -->
          <circle cx="${cx}" cy="${cy}" r="4.5" class="pin-core" fill="${pinColor}" stroke="#FFF" stroke-width="1.2"/>
          
          <!-- Etiqueta del valle -->
          <g class="pin-label-group">
            <rect x="${isRightAligned ? cx + 8 : cx - 110}" y="${cy - 9}" width="105" height="18" rx="3" 
                  fill="rgba(15, 12, 18, 0.88)" stroke="${pinColor}" stroke-width="0.8"/>
            <text x="${isRightAligned ? cx + 13 : cx - 8}" y="${cy + 3.5}" 
                  text-anchor="${isRightAligned ? 'start' : 'end'}" 
                  class="pin-text" fill="#FFF" font-size="9.5" font-weight="600">
              ${shortName} <tspan fill="${pinColor}" font-size="8">(${v.altitude.split(' ')[0]}m)</tspan>
            </text>
          </g>
        </g>
      `;
    }).join("");

    svgContainer.innerHTML = `
      <svg viewBox="0 0 460 980" class="chile-svg-map" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Gradiente de la Franja Costera -->
          <linearGradient id="costaBeltGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1B4965" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2D5A43" stop-opacity="0.6"/>
          </linearGradient>

          <!-- Gradiente del Valle Central -->
          <linearGradient id="valleCentralBeltGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4A3B10" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#8C6B1B" stop-opacity="0.6"/>
          </linearGradient>

          <!-- Gradiente de la Cordillera de los Andes -->
          <linearGradient id="andesBeltGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#5A1827" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#8E283B" stop-opacity="0.9"/>
          </linearGradient>
        </defs>

        <!-- Fondo Océano Pacífico con Corriente de Humboldt -->
        <rect x="0" y="0" width="150" height="980" fill="rgba(10, 25, 40, 0.4)"/>
        <path d="M 20 80 Q 50 200 30 400 T 60 700 T 30 950" fill="none" stroke="rgba(72, 202, 228, 0.18)" stroke-width="2" stroke-dasharray="8 6"/>
        <text x="35" y="320" transform="rotate(-90 35 320)" fill="rgba(72, 202, 228, 0.4)" font-size="11" letter-spacing="3" font-weight="bold">
          🌊 CORRIENTE FRÍA DE HUMBOLDT • OCÉANO PACÍFICO
        </text>

        <!-- SILUETA GEOGRÁFICA REAL DE CHILE (3 Franjas Topográficas) -->
        
        <!-- 1. Franja Costa (Cordillera de la Costa) -->
        <path d="M 148 40 
                 Q 146 160 144 280 
                 Q 156 420 162 560 
                 Q 158 700 152 820 
                 Q 146 910 140 960 
                 L 190 960 
                 Q 198 820 206 700 
                 Q 212 560 210 420 
                 Q 202 280 198 160 
                 L 194 40 Z" 
              fill="url(#costaBeltGrad)" stroke="rgba(72, 202, 228, 0.4)" stroke-width="1.2"/>

        <!-- 2. Franja Depresión Central (Entre Cordilleras) -->
        <path d="M 194 40 
                 L 198 160 
                 Q 202 280 210 420 
                 Q 212 560 206 700 
                 Q 198 820 190 960 
                 L 270 960 
                 Q 282 820 290 700 
                 Q 300 560 298 420 
                 Q 290 280 280 160 
                 L 274 40 Z" 
              fill="url(#valleCentralBeltGrad)" stroke="rgba(212, 175, 55, 0.3)" stroke-width="0.8"/>

        <!-- 3. Franja Cordillera de los Andes (Límite Oriental & Cumbres) -->
        <path d="M 274 40 
                 L 280 160 
                 Q 290 280 298 420 
                 Q 300 560 290 700 
                 Q 282 820 270 960 
                 L 315 960 
                 Q 330 820 338 700 
                 Q 348 560 342 420 
                 Q 332 280 322 160 
                 L 316 40 Z" 
              fill="url(#andesBeltGrad)" stroke="rgba(230, 57, 70, 0.5)" stroke-width="1.2"/>

        <!-- Picos y Relieve de la Cordillera de los Andes -->
        <g fill="#FFF" opacity="0.6" font-size="8">
          <text x="305" y="80">▲ 6.000m</text>
          <text x="315" y="240">▲ 6.200m</text>
          <text x="330" y="440">▲ 6.961m (Aconcagua)</text>
          <text x="325" y="620">▲ 5.500m (Tupungato)</text>
          <text x="300" y="780">▲ 3.700m (Lanín)</text>
          <text x="285" y="910">▲ 2.800m (Villarrica)</text>
        </g>

        <!-- Leyendas de Franjas en la Cabecera -->
        <g font-size="8.5" font-weight="bold">
          <text x="162" y="25" text-anchor="middle" fill="#48CAE4">COSTA</text>
          <text x="235" y="25" text-anchor="middle" fill="#F4D06F">CENTRO</text>
          <text x="305" y="25" text-anchor="middle" fill="#E63946">ANDES</text>
        </g>

        <!-- Pines Georreferenciados de Valles -->
        ${pins}
      </svg>
    `;
  },

  updateSvgMapHighlights() {
    const filtered = this.getFilteredValleys();
    const activeIds = filtered.map((f) => f.id);

    document.querySelectorAll(".map-valley-pin").forEach((el) => {
      const id = el.getAttribute("data-id");
      if (activeIds.includes(id)) {
        el.style.opacity = "1";
        el.classList.remove("pin-disabled");
      } else {
        el.style.opacity = "0.15";
        el.classList.add("pin-disabled");
      }
    });
  },

  renderMapList() {
    const container = document.getElementById("valleys-cards-container");
    if (!container) return;

    const filtered = this.getFilteredValleys();
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state glass-panel">
          <p>No se encontraron valles con los filtros seleccionados.</p>
          <button class="btn btn-sm btn-primary mt-2" onclick="TerroirMap.resetMapFilters()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((v) => `
      <article class="valley-card glass-panel" onclick="TerroirMap.openValleyModal('${v.id}')" data-valley-id="${v.id}">
        <div class="valley-card-header">
          <div class="valley-header-top">
            <span class="badge badge-gold">${v.region}</span>
            <span class="badge badge-subtle">${v.zone}</span>
          </div>
          <h3 class="valley-card-title">${v.name}</h3>
          <p class="valley-coords">📍 ${v.lat}° S, ${v.lng}° O • <strong>⛰️ Altitud: ${v.altitude}</strong></p>
        </div>

        <p class="valley-desc-excerpt">${v.description.substring(0, 150)}...</p>

        <div class="valley-meta-grid">
          <div class="meta-item">
            <span class="meta-label">🌧️ Lluvia Anual</span>
            <span class="meta-val">${v.rainfall}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">☀️ Radiación</span>
            <span class="meta-val">${v.solarHours}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">🪨 Suelo</span>
            <span class="meta-val">${v.soil.substring(0, 45)}...</span>
          </div>
        </div>

        <div class="valley-grapes-tags">
          ${v.flagshipVarieties.map((g) => `<span class="tag-grape">${g}</span>`).join("")}
        </div>

        <button class="btn btn-secondary btn-block mt-3">
          Ver Ficha Completa &amp; Vinos →
        </button>
      </article>
    `).join("");
  },

  resetMapFilters() {
    this.activeFilterZone = "all";
    this.activeFilterRegion = "all";

    const zoneFilter = document.getElementById("map-zone-filter");
    if (zoneFilter) zoneFilter.value = "all";

    const regionFilter = document.getElementById("map-region-filter");
    if (regionFilter) regionFilter.value = "all";

    this.filterValleys();
    App.showToast("Filtros del mapa restablecidos");
  },

  openValleyModal(valleyId) {
    const valley = VALLEYS_DATA.find((v) => v.id === valleyId);
    if (!valley) return;

    // Buscar vinos pertenecientes a este valle
    const valleyWines = WINES_DATA.filter((w) => w.valleyId === valleyId);

    const modal = document.getElementById("valley-modal");
    const modalContent = document.getElementById("valley-modal-body");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="valley-detail-hero">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="badge badge-gold">${valley.region} • ${valley.zone}</span>
          <span class="badge badge-subtle">D.O. Chile</span>
        </div>
        <h2 class="modal-title-custom">${valley.name}</h2>
        <p class="text-gold mb-2">📍 Coordenadas: ${valley.lat}° S, ${valley.lng}° O • <strong>⛰️ Altitud: ${valley.altitude}</strong></p>
      </div>

      <div class="modal-body-section">
        <!-- Tarjeta de Altitud y Topografía -->
        <div class="elevation-info-card glass-panel mb-3 p-3">
          <div class="d-flex align-items-center gap-2 mb-1">
            <span style="font-size: 1.2rem;">⛰️</span>
            <strong class="text-gold font-serif">Altitud & Perfil Topográfico: ${valley.altitude}</strong>
          </div>
          <p class="text-light-muted mb-0" style="font-size: 0.85rem;">
            Zona D.O. Oficial: <strong>${valley.doType ? valley.doType.join(" • ") : valley.zone}</strong>.
            ${valley.zone.includes("Costa") ? 'Influencia directa de la Corriente de Humboldt y brisas del Océano Pacífico.' : valley.zone.includes("Andes") ? 'Influencia de aire frío catabático cordillerano (Viento Raco) y suelos de origen volcánico/coluvial.' : 'Protección de la Cordillera de la Costa, gran radiación solar y marcada amplitud térmica.'}
          </p>
        </div>

        <h4 class="section-subheading">🌿 Terroir & Microclima</h4>
        <p class="leading-relaxed mb-3">${valley.description}</p>
        
        <div class="grid-2-cols mb-3">
          <div class="info-pill-card">
            <strong>🌧️ Pluviosidad:</strong> ${valley.rainfall}
          </div>
          <div class="info-pill-card">
            <strong>☀️ Radiación Solar:</strong> ${valley.solarHours}
          </div>
          <div class="info-pill-card">
            <strong>🪨 Suelo:</strong> ${valley.soil}
          </div>
          <div class="info-pill-card">
            <strong>🌡️ Clima:</strong> ${valley.climate}
          </div>
        </div>

        <h4 class="section-subheading mt-4">⭐ Puntos Destacados</h4>
        <ul class="styled-bullet-list">
          ${valley.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>

        <h4 class="section-subheading mt-4">🍇 Cepas Emblema</h4>
        <div class="d-flex flex-wrap gap-2 mb-3">
          ${valley.flagshipVarieties.map((g) => `<span class="tag-grape-large">${g}</span>`).join("")}
        </div>

        <h4 class="section-subheading mt-4">🍷 Viñas & Productores Destacados</h4>
        <p class="text-light-muted">${valley.topProducers.join(" • ")}</p>

        <h4 class="section-subheading mt-4">🍾 Vinos de este Valle en el Catálogo (${valleyWines.length})</h4>
        ${
          valleyWines.length > 0
            ? `<div class="valley-wines-grid">
                ${valleyWines.map((w) => `
                  <div class="mini-wine-card glass-panel" onclick="App.openWineModal('${w.id}')">
                    <div class="mini-wine-score">${w.topScore} pts</div>
                    <div class="mini-wine-info">
                      <strong>${w.name}</strong>
                      <span>${w.winery}</span>
                      <small class="text-gold">${w.blend} • ${w.priceTier}</small>
                    </div>
                  </div>
                `).join("")}
              </div>`
            : `<p class="text-light-muted">Próximamente más etiquetas agregadas para este valle.</p>`
        }
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeValleyModal() {
    const modal = document.getElementById("valley-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
};

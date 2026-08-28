/**
 * Terruño Chileno - Módulo Asistente Sommelier y Maridaje Inteligente
 * Motor de recomendación culinaria, cálculo de temperatura de servicio, cristalería y tiempos de decantación.
 */
const SommelierEngine = {
  currentCategory: "all",

  init() {
    this.renderPairingsList();
    this.bindEvents();
  },

  bindEvents() {
    const categorySelector = document.getElementById("pairing-category-select");
    if (categorySelector) {
      categorySelector.addEventListener("change", (e) => {
        this.currentCategory = e.target.value;
        this.renderPairingsList();
      });
    }

    const dishSearch = document.getElementById("dish-search-input");
    if (dishSearch) {
      dishSearch.addEventListener("input", (e) => {
        this.searchPairings(e.target.value);
      });
    }
  },

  searchPairings(query) {
    const q = query.toLowerCase().trim();
    const filtered = PAIRINGS_DATA.filter((p) => {
      const matchCat = this.currentCategory === "all" || p.category.toLowerCase().includes(this.currentCategory.toLowerCase());
      const matchText = p.dishName.toLowerCase().includes(q) ||
                        p.flavorProfile.toLowerCase().includes(q) ||
                        p.recommendedWineStyles.some((s) => s.toLowerCase().includes(q)) ||
                        p.targetGrapes.some((g) => g.toLowerCase().includes(q));
      return matchCat && matchText;
    });

    this.renderCards(filtered);
  },

  renderPairingsList() {
    const filtered = PAIRINGS_DATA.filter((p) => {
      return this.currentCategory === "all" || p.category.toLowerCase().includes(this.currentCategory.toLowerCase());
    });
    this.renderCards(filtered);
  },

  renderCards(pairings) {
    const container = document.getElementById("pairings-cards-container");
    if (!container) return;

    if (pairings.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>No se encontraron maridajes para el plato o ingrediente buscado.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = pairings.map((p) => `
      <div class="pairing-card glass-panel">
        <div class="pairing-header">
          <div class="pairing-icon-badge">${p.icon}</div>
          <div>
            <span class="badge badge-gold mb-1">${p.category}</span>
            <h3 class="pairing-title">${p.dishName}</h3>
          </div>
        </div>

        <div class="pairing-flavor-box">
          <strong>Perfil Culinario:</strong> ${p.flavorProfile}
        </div>

        <div class="sommelier-recommendation-box">
          <div class="rec-title">
            <span class="sommelier-badge">🤵 Consejo del Sommelier</span>
          </div>
          <p class="sommelier-rationale">${p.sommelierRationale}</p>
          
          <div class="wine-style-badges">
            ${p.recommendedWineStyles.map((s) => `<span class="badge badge-wine">${s}</span>`).join("")}
          </div>
        </div>

        <div class="service-metrics-grid">
          <div class="service-metric-item">
            <span class="metric-icon">🌡️</span>
            <div>
              <small>Temperatura</small>
              <strong>${p.servingTemp}</strong>
            </div>
          </div>
          <div class="service-metric-item">
            <span class="metric-icon">🍷</span>
            <div>
              <small>Cristalería</small>
              <strong>${p.glassType}</strong>
            </div>
          </div>
        </div>

        <div class="pairing-labels-section mt-3">
          <small class="text-gold font-bold">Etiquetas Chilenas Sugeridas:</small>
          <div class="suggested-labels-list">
            ${p.recommendedLabels.map((lbl) => `<span class="tag-suggested-label">${lbl}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  },

  calculateServingAdvice() {
    const wineType = document.getElementById("temp-wine-type").value;
    const tempResultBox = document.getElementById("temp-calc-result");

    const guides = {
      tinto_robusto: {
        temp: "17°C – 18°C",
        glass: "Copa Burdeos (Cáliz amplio y alto)",
        decant: "60 a 90 minutos",
        fridgeTime: "20 a 25 minutos en refrigerador si la botella está a temperatura ambiente (22°C)",
        tip: "Nunca servir a más de 20°C: el alcohol se vuelve punzante y opaca los aromas nobles."
      },
      tinto_ligero: {
        temp: "13°C – 15°C",
        glass: "Copa Borgoña (Cáliz esférico)",
        decant: "15 a 20 minutos o servir directo",
        fridgeTime: "35 a 45 minutos en refrigerador antes de servir",
        tip: "La Cepa País, Pinot Noir y Cinsault brillan cuando se sirven frescos y jugosos."
      },
      blanco_madera: {
        temp: "10°C – 12°C",
        glass: "Copa Borgoña Blanca / Chardonnay",
        decant: "15 minutos",
        fridgeTime: "1 hora en refrigerador; sacar 10 minutos antes de descorchar",
        tip: "No servirlo helado (a 4°C se congelan las notas de avellana, brioche y mantequilla)."
      },
      blanco_mineral: {
        temp: "7°C – 9°C",
        glass: "Copa Sauvignon Blanc / Tulipa Estrecha",
        decant: "No requiere decantación",
        fridgeTime: "2 horas en refrigerador o 20 minutos en frappera con agua y hielo",
        tip: "Preserva la acidez punzante y la frescura marina de Leyda, Casablanca y Huasco."
      },
      espumante: {
        temp: "6°C – 8°C",
        glass: "Copa Tulipa para Espumante",
        decant: "Nunca decantar",
        fridgeTime: "2 a 3 horas en refrigerador",
        tip: "La copa tulipa permite que la burbuja suba delicadamente y concentre los aromas de levadura y manzana."
      },
      naranjo: {
        temp: "11°C – 13°C",
        glass: "Copa Universal Amplia",
        decant: "20 minutos",
        fridgeTime: "45 minutos en refrigerador",
        tip: "Sus taninos de piel y notas de naranja confitada y té exigen temperatura intermedia."
      },
      late_harvest: {
        temp: "8°C – 10°C",
        glass: "Copa pequeña de postre / Oporto",
        decant: "No requiere",
        fridgeTime: "2 horas en refrigerador",
        tip: "El frío equilibra la concentración de azúcar y resalta la miel y fruta confitada."
      }
    };

    const guide = guides[wineType] || guides.tinto_robusto;

    if (tempResultBox) {
      tempResultBox.innerHTML = `
        <div class="calc-output-card glass-panel">
          <div class="output-row">
            <span class="output-label">🌡️ Temperatura Óptima:</span>
            <span class="output-val text-gold">${guide.temp}</span>
          </div>
          <div class="output-row">
            <span class="output-label">🍷 Copa Recomendada:</span>
            <span class="output-val">${guide.glass}</span>
          </div>
          <div class="output-row">
            <span class="output-label">⏳ Decantación / Oxigenación:</span>
            <span class="output-val">${guide.decant}</span>
          </div>
          <div class="output-row">
            <span class="output-label">❄️ Tiempo de Refrigeración:</span>
            <span class="output-val">${guide.fridgeTime}</span>
          </div>
          <div class="output-tip mt-2">
            <strong>💡 Secreto de Sommelier:</strong> ${guide.tip}
          </div>
        </div>
      `;
    }
  }
};

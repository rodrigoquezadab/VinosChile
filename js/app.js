/**
 * Terruño Chileno - Aplicación Principal (Mobile-First)
 * Gestión de estado global, filtros multifacéticos (estilo, canal de compra, precio en CLP, valle, cepa, puntaje),
 * modales de fichas técnicas con fotografías reales y directorio de supermercados, tiendas y botillerías.
 */
const App = {
  currentTab: "catalog",
  searchQuery: "",
  activeFilters: {
    style: "all",
    channel: "all",
    price: "all",
    valley: "all",
    grape: "all",
    type: "all",
    scoreMin: 0,
    organicOnly: false,
    favoritesOnly: false
  },

  init() {
    if (typeof I18n !== "undefined") {
      I18n.init();
    }
    this.bindNavigation();
    this.bindSearchAndFilters();
    this.bindCategoryChips();
    this.renderCatalog();
    this.renderVarieties();
    this.renderScoresTab();
    this.renderProducersTab();

    // Inicializar submódulos
    if (typeof TerroirMap !== "undefined") TerroirMap.init();
    if (typeof SommelierEngine !== "undefined") SommelierEngine.init();
    if (typeof CompareEngine !== "undefined") CompareEngine.init();

    this.populateFilterDropdowns();
    this.setupModalClosers();
    this.setupMobileGestures();
  },

  bindNavigation() {
    const navButtons = document.querySelectorAll("[data-nav-tab]");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = btn.getAttribute("data-nav-tab");
        this.switchTab(tab);
      });
    });
  },

  switchTab(tabName) {
    this.currentTab = tabName;

    // Actualizar botones de navegación
    document.querySelectorAll("[data-nav-tab]").forEach((btn) => {
      if (btn.getAttribute("data-nav-tab") === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Actualizar secciones
    document.querySelectorAll(".app-section").forEach((sec) => {
      if (sec.id === `section-${tabName}`) {
        sec.classList.add("active");
      } else {
        sec.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (tabName === "map" && typeof TerroirMap !== "undefined") {
      setTimeout(() => TerroirMap.renderSvgMap(), 50);
    }
  },

  bindCategoryChips() {
    this.updateCategoryChipCounts();
    const chipBtns = document.querySelectorAll(".category-chip-btn");
    chipBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const style = btn.getAttribute("data-style-filter");
        chipBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        this.activeFilters.style = style;
        const styleSelect = document.getElementById("filter-style");
        if (styleSelect) styleSelect.value = style;

        this.renderCatalog();
      });
    });
  },

  updateCategoryChipCounts() {
    const styleKeyMap = {
      "all": "chip_all",
      "Ícono / Vino de Culto": "chip_icons",
      "Gran Reserva / Premium": "chip_gran_reserva",
      "Patrimonial / Natural / MOVI": "chip_patrimonial",
      "Supermercado & Botillería Masivo": "chip_supermarket",
      "Espumantes Chilenos": "chip_sparkling",
      "Clima Extremo / Desierto": "chip_desert"
    };

    const chipBtns = document.querySelectorAll(".category-chip-btn");
    chipBtns.forEach((btn) => {
      const style = btn.getAttribute("data-style-filter");
      const count = style === "all" ? WINES_DATA.length : WINES_DATA.filter((w) => w.style === style).length;
      const i18nKey = styleKeyMap[style];
      const label = (typeof I18n !== "undefined" && i18nKey) ? I18n.t(i18nKey) : btn.getAttribute("data-label") || btn.textContent.trim();
      btn.setAttribute("data-label", label);
      btn.innerHTML = `${label} <span class="chip-count-pill">${count}</span>`;
    });
  },

  bindSearchAndFilters() {
    const searchInput = document.getElementById("wine-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderCatalog();
      });
    }

    const filterChannel = document.getElementById("filter-channel");
    if (filterChannel) {
      filterChannel.addEventListener("change", (e) => {
        this.activeFilters.channel = e.target.value;
        this.renderCatalog();
      });
    }

    const filterPrice = document.getElementById("filter-price");
    if (filterPrice) {
      filterPrice.addEventListener("change", (e) => {
        this.activeFilters.price = e.target.value;
        this.renderCatalog();
      });
    }

    const filterStyle = document.getElementById("filter-style");
    if (filterStyle) {
      filterStyle.addEventListener("change", (e) => {
        this.activeFilters.style = e.target.value;
        // Sincronizar chip buttons
        document.querySelectorAll(".category-chip-btn").forEach((chip) => {
          if (chip.getAttribute("data-style-filter") === e.target.value) {
            chip.classList.add("active");
          } else {
            chip.classList.remove("active");
          }
        });
        this.renderCatalog();
      });
    }

    const filterValley = document.getElementById("filter-valley");
    if (filterValley) {
      filterValley.addEventListener("change", (e) => {
        this.activeFilters.valley = e.target.value;
        this.renderCatalog();
      });
    }

    const filterGrape = document.getElementById("filter-grape");
    if (filterGrape) {
      filterGrape.addEventListener("change", (e) => {
        this.activeFilters.grape = e.target.value;
        this.renderCatalog();
      });
    }

    const filterType = document.getElementById("filter-type");
    if (filterType) {
      filterType.addEventListener("change", (e) => {
        this.activeFilters.type = e.target.value;
        this.renderCatalog();
      });
    }

    const filterScore = document.getElementById("filter-score");
    if (filterScore) {
      filterScore.addEventListener("change", (e) => {
        this.activeFilters.scoreMin = parseInt(e.target.value, 10) || 0;
        this.renderCatalog();
      });
    }

    const filterOrganic = document.getElementById("filter-organic");
    if (filterOrganic) {
      filterOrganic.addEventListener("change", (e) => {
        this.activeFilters.organicOnly = e.target.checked;
        this.renderCatalog();
      });
    }

    const filterFavorites = document.getElementById("filter-favorites");
    if (filterFavorites) {
      filterFavorites.addEventListener("change", (e) => {
        this.activeFilters.favoritesOnly = e.target.checked;
        this.renderCatalog();
      });
    }

    // Toggle drawer de filtros móvil
    const filterToggleBtn = document.getElementById("mobile-filter-toggle-btn");
    const filterDrawer = document.getElementById("filters-drawer");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");

    if (filterToggleBtn && filterDrawer) {
      filterToggleBtn.addEventListener("click", () => {
        filterDrawer.classList.toggle("active");
      });
    }

    if (closeDrawerBtn && filterDrawer) {
      closeDrawerBtn.addEventListener("click", () => {
        filterDrawer.classList.remove("active");
      });
    }
  },

  populateFilterDropdowns() {
    const valleySelect = document.getElementById("filter-valley");
    if (valleySelect) {
      const allValleysLabel = typeof I18n !== "undefined" ? I18n.t("filter_valley_all") : "Todos los Valles";
      const valleys = [...new Set(VALLEYS_DATA.map((v) => v.name))];
      valleySelect.innerHTML = `<option value="all">${allValleysLabel}</option>` +
        valleys.map((v) => `<option value="${v}">${v}</option>`).join("");
    }

    const grapeSelect = document.getElementById("filter-grape");
    if (grapeSelect) {
      const allGrapesLabel = typeof I18n !== "undefined" ? I18n.t("filter_grape_all") : "Todas las Cepas";
      const grapes = [...new Set(VARIETIES_DATA.map((g) => g.name))];
      grapeSelect.innerHTML = `<option value="all">${allGrapesLabel}</option>` +
        grapes.map((g) => `<option value="${g}">${g}</option>`).join("");
    }
  },

  resetFilters() {
    this.searchQuery = "";
    this.activeFilters = {
      style: "all",
      channel: "all",
      price: "all",
      valley: "all",
      grape: "all",
      type: "all",
      scoreMin: 0,
      organicOnly: false,
      favoritesOnly: false
    };

    const searchInput = document.getElementById("wine-search-input");
    if (searchInput) searchInput.value = "";

    const filterChannel = document.getElementById("filter-channel");
    if (filterChannel) filterChannel.value = "all";

    const filterPrice = document.getElementById("filter-price");
    if (filterPrice) filterPrice.value = "all";

    const filterStyle = document.getElementById("filter-style");
    if (filterStyle) filterStyle.value = "all";

    const filterValley = document.getElementById("filter-valley");
    if (filterValley) filterValley.value = "all";

    const filterGrape = document.getElementById("filter-grape");
    if (filterGrape) filterGrape.value = "all";

    const filterType = document.getElementById("filter-type");
    if (filterType) filterType.value = "all";

    const filterScore = document.getElementById("filter-score");
    if (filterScore) filterScore.value = "0";

    const filterOrganic = document.getElementById("filter-organic");
    if (filterOrganic) filterOrganic.checked = false;

    const filterFavorites = document.getElementById("filter-favorites");
    if (filterFavorites) filterFavorites.checked = false;

    // Reset chips
    document.querySelectorAll(".category-chip-btn").forEach((chip, i) => {
      if (i === 0) chip.classList.add("active");
      else chip.classList.remove("active");
    });

    this.renderCatalog();
    this.showToast("Filtros restablecidos");
  },

  getFilteredWines() {
    return WINES_DATA.filter((wine) => {
      // Búsqueda por texto (nombre, viña, valle, cepa, supermercados, botillerías, notas)
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchName = wine.name.toLowerCase().includes(q);
        const matchWinery = wine.winery.toLowerCase().includes(q);
        const matchValley = wine.valleyName.toLowerCase().includes(q);
        const matchGrape = (wine.blend && wine.blend.toLowerCase().includes(q)) || (wine.primaryGrape && wine.primaryGrape.toLowerCase().includes(q));
        const matchNotes = wine.tastingNotes ? wine.tastingNotes.toLowerCase().includes(q) : false;
        const matchAwards = wine.medals ? wine.medals.some((m) => m.toLowerCase().includes(q)) : false;
        const matchStores = wine.availableAt ? wine.availableAt.some((s) => s.toLowerCase().includes(q)) : false;
        const matchPrice = wine.priceTier ? wine.priceTier.toLowerCase().includes(q) : false;
        if (!matchName && !matchWinery && !matchValley && !matchGrape && !matchNotes && !matchAwards && !matchStores && !matchPrice) {
          return false;
        }
      }

      // Filtro de Estilo / Segmento
      if (this.activeFilters.style !== "all" && wine.style !== this.activeFilters.style) {
        return false;
      }

      // Filtro de Canal de Distribución
      if (this.activeFilters.channel !== "all") {
        if (!wine.retailChannels || !wine.retailChannels.includes(this.activeFilters.channel)) {
          return false;
        }
      }

      // Filtro de Rango de Precio en CLP
      if (this.activeFilters.price !== "all") {
        const p = wine.priceAvgCLP || 0;
        if (this.activeFilters.price === "under_5k" && p >= 5000) return false;
        if (this.activeFilters.price === "5k_12k" && (p < 5000 || p > 12000)) return false;
        if (this.activeFilters.price === "12k_25k" && (p < 12000 || p > 25000)) return false;
        if (this.activeFilters.price === "25k_60k" && (p < 25000 || p > 60000)) return false;
        if (this.activeFilters.price === "over_60k" && p <= 60000) return false;
      }

      // Filtro de Valle
      if (this.activeFilters.valley !== "all" && !wine.valleyName.includes(this.activeFilters.valley.replace("Valle de ", "").replace("Valle del ", ""))) {
        return false;
      }

      // Filtro de Cepa
      if (this.activeFilters.grape !== "all") {
        const g = this.activeFilters.grape.toLowerCase();
        const matchBlend = wine.blend ? wine.blend.toLowerCase().includes(g) : false;
        const matchPrimary = wine.primaryGrape ? wine.primaryGrape.toLowerCase().includes(g) : false;
        if (!matchBlend && !matchPrimary) return false;
      }

      // Filtro de Tipo de Vino
      if (this.activeFilters.type !== "all" && (!wine.type || !wine.type.toLowerCase().includes(this.activeFilters.type.toLowerCase()))) {
        return false;
      }

      // Filtro de Puntaje Mínimo
      if (this.activeFilters.scoreMin > 0 && wine.topScore < this.activeFilters.scoreMin) {
        return false;
      }

      // Filtro Orgánico/Biodinámico
      if (this.activeFilters.organicOnly) {
        const bio = (wine.organicBio || "").toLowerCase();
        if (!bio.includes("biodinámico") && !bio.includes("orgánico") && !bio.includes("natural") && !bio.includes("demeter")) {
          return false;
        }
      }

      // Filtro Favoritos
      if (this.activeFilters.favoritesOnly && !CompareEngine.isFavorite(wine.id)) {
        return false;
      }

      return true;
    });
  },

  renderCatalog() {
    const container = document.getElementById("wines-catalog-grid");
    const countEl = document.getElementById("catalog-wines-count");
    if (!container) return;

    const filtered = this.getFilteredWines();
    const suffix = typeof I18n !== "undefined" ? I18n.t("results_count_suffix") : "vinos encontrados";
    if (countEl) countEl.textContent = `${filtered.length} ${suffix}`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state glass-panel">
          <span class="empty-icon">🍇</span>
          <h3>${typeof I18n !== "undefined" ? I18n.t("no_results_title") : "No se encontraron vinos"}</h3>
          <p>${typeof I18n !== "undefined" ? I18n.t("no_results_desc") : "Prueba ajustando los filtros de búsqueda o restablece los criterios de precio y estilo."}</p>
          <button class="btn btn-primary mt-3" onclick="App.resetFilters()">${typeof I18n !== "undefined" ? I18n.t("reset_filters_btn") : "Restablecer Filtros"}</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((wine) => {
      const isFav = CompareEngine.isFavorite(wine.id);
      const inComp = CompareEngine.isInCompare(wine.id);
      const storesSnippet = wine.availableAt ? wine.availableAt.slice(0, 3).join(" • ") : "Supermercados & Tiendas";
      const whereBuyLabel = typeof I18n !== "undefined" ? I18n.t("card_where_buy") : "Dónde Comprar:";
      const compareLabel = inComp 
        ? (typeof I18n !== "undefined" ? "✓ " + I18n.t("card_comparing") : "✓ Comparando")
        : (typeof I18n !== "undefined" ? "+ " + I18n.t("card_compare") : "+ Comparar");
      const detailsLabel = typeof I18n !== "undefined" ? I18n.t("card_view_details") : "Ver Ficha & Cata";

      return `
        <article class="wine-card glass-panel" data-wine-id="${wine.id}">
          <div class="wine-card-top">
            <div class="wine-badge-group">
              <span class="badge badge-gold">${wine.category}</span>
              <span class="badge badge-subtle">${wine.vintage}</span>
              <span class="badge badge-zone">${wine.zone}</span>
            </div>
            <button class="btn-icon-fav ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); CompareEngine.toggleFavorite('${wine.id}')" title="Guardar en Favoritos">
              ${isFav ? '★' : '☆'}
            </button>
          </div>

          <div class="wine-card-main" onclick="App.openWineModal('${wine.id}')">
            <!-- Imagen de la botella y etiqueta -->
            <div class="wine-bottle-thumbnail-wrapper">
              <img src="${wine.bottleImage}" alt="${wine.name} - Botella y Etiqueta" class="wine-bottle-thumbnail" loading="lazy" onerror="this.src='assets/images/wines/almaviva.jpg'">
              <div class="score-circle-floating">
                <span class="score-num">${wine.topScore}</span>
                <span class="score-label">PTS</span>
              </div>
            </div>

            <div class="wine-details-summary">
              <h3 class="wine-card-name">${wine.name}</h3>
              <p class="wine-card-winery">${wine.winery}</p>
              <p class="wine-card-valley">📍 ${wine.valleyName}</p>
              <p class="wine-card-blend">${wine.blend}</p>
              
              <!-- Rango de Precio Destacado -->
              <div class="wine-card-price-badge">
                <span class="price-badge-icon">💵</span>
                <span class="price-badge-text"><strong>${wine.priceTier}</strong></span>
              </div>

              <div class="wine-retail-tag-line">
                <span>🛒 <strong>${whereBuyLabel}</strong> ${storesSnippet}</span>
              </div>
            </div>
          </div>

          <div class="wine-card-scores-row">
            <span class="score-tag">JS <strong>${wine.scores.jamesSuckling}</strong></span>
            <span class="score-tag">Desc <strong>${wine.scores.descorchados}</strong></span>
            <span class="score-tag">TA <strong>${wine.scores.timAtkin}</strong></span>
            <span class="score-tag">RP <strong>${wine.scores.robertParker}</strong></span>
          </div>

          <div class="wine-card-footer">
            <div class="wine-serving-pill">
              <span>🌡️ ${wine.servingTemp}</span>
            </div>
            
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-gold ${inComp ? 'active' : ''}" onclick="event.stopPropagation(); CompareEngine.toggleCompare('${wine.id}')">
                ${compareLabel}
              </button>
              <button class="btn btn-sm btn-primary" onclick="App.openWineModal('${wine.id}')">
                ${detailsLabel} →
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  updateWineCardFavorites() {
    document.querySelectorAll(".wine-card").forEach((card) => {
      const id = card.getAttribute("data-wine-id");
      const btn = card.querySelector(".btn-icon-fav");
      if (btn && id) {
        const isFav = CompareEngine.isFavorite(id);
        btn.innerHTML = isFav ? "★" : "☆";
        if (isFav) btn.classList.add("active");
        else btn.classList.remove("active");
      }
    });

    if (this.activeFilters.favoritesOnly) {
      this.renderCatalog();
    }
  },

  updateWineCardCompareButtons() {
    document.querySelectorAll(".wine-card").forEach((card) => {
      const id = card.getAttribute("data-wine-id");
      const btn = card.querySelector(".btn-outline-gold");
      if (btn && id) {
        const inComp = CompareEngine.isInCompare(id);
        btn.textContent = inComp ? "✓ Comparando" : "+ Comparar";
        if (inComp) btn.classList.add("active");
        else btn.classList.remove("active");
      }
    });
  },

  openWineModal(wineId) {
    const wine = WINES_DATA.find((w) => w.id === wineId);
    if (!wine) return;

    const modal = document.getElementById("wine-modal");
    const modalContent = document.getElementById("wine-modal-body");
    if (!modal || !modalContent) return;

    const isFav = CompareEngine.isFavorite(wine.id);
    const inComp = CompareEngine.isInCompare(wine.id);

    modalContent.innerHTML = `
      <div class="wine-modal-hero">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div class="d-flex flex-wrap gap-2">
            <span class="badge badge-gold">${wine.category}</span>
            <span class="badge badge-subtle">${wine.vintage}</span>
            <span class="badge badge-zone">${wine.zone} • ${wine.region}</span>
          </div>
          <button class="btn-icon-fav-large ${isFav ? 'active' : ''}" onclick="CompareEngine.toggleFavorite('${wine.id}')">
            ${isFav ? '★ Guardado' : '☆ Guardar'}
          </button>
        </div>

        <h2 class="wine-modal-title">${wine.name}</h2>
        <p class="wine-modal-winery">${wine.winery}</p>
        <p class="text-gold font-bold">📍 ${wine.valleyName}</p>

        <!-- Rango de Precio Hero en Modal -->
        <div class="wine-modal-price-hero-strip mt-2">
          <span class="price-hero-label">💵 ${typeof I18n !== "undefined" ? I18n.t("modal_market_price") : "Rango de Precio de Mercado:"}</span>
          <strong class="price-hero-amount">${wine.priceTier}</strong>
        </div>
      </div>

      <div class="modal-body-section">

        <!-- Presentación de la Botella -->
        <div class="bottle-showcase-card glass-panel mb-4 text-center">
          <div class="bottle-showcase-wrapper">
            <img src="${wine.bottleImage}" alt="${wine.name} - Botella y Etiqueta Oficial" class="bottle-showcase-img" loading="eager" onerror="this.src='assets/images/wines/almaviva.jpg'">
          </div>
        </div>

        <!-- Dónde Comprar, Supermercados y Canales de Distribución -->
        <div class="retail-stores-showcase-box glass-panel mb-4">
          <h4 class="box-title">🛒 ${typeof I18n !== "undefined" ? I18n.t("modal_where_title") : "Dónde Comprar en Chile (Supermercados, Tiendas & Botillerías)"}</h4>
          <p class="text-light-muted mb-2" style="font-size: 0.85rem;">${typeof I18n !== "undefined" ? I18n.t("modal_where_sub") : "Encuentra este vino en los siguientes canales de distribución autorizados:"}</p>
          <div class="stores-badges-grid mb-3">
            ${wine.availableAt ? wine.availableAt.map((s) => `
              <div class="store-badge-card">
                <span class="store-icon">📍</span>
                <span class="store-name">${s}</span>
              </div>
            `).join("") : '<span class="text-light-muted">Supermercados y tiendas de todo Chile</span>'}
          </div>

          <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-3 border-top-glass">
            <div>
              <span class="text-light-muted" style="font-size: 0.8rem;">Precio Estimado en Chile:</span>
              <h3 class="text-gold mb-0 font-bold">${wine.priceTier}</h3>
            </div>
            <a href="${wine.sellerLink}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
              ${typeof I18n !== "undefined" ? I18n.t("modal_online_store") : "Sitio Oficial de la Viña"} ↗
            </a>
          </div>
        </div>

        <!-- Puntajes Internacionales -->
        <div class="scores-summary-box glass-panel mb-4">
          <h4 class="box-title">🏆 ${typeof I18n !== "undefined" ? I18n.t("modal_critic_scores") : "Puntajes & Reconocimientos Internacionales"}</h4>
          <div class="scores-pills-grid">
            <div class="score-pill-item">
              <span class="pill-name">James Suckling</span>
              <strong class="pill-score">${wine.scores.jamesSuckling} pts</strong>
            </div>
            <div class="score-pill-item">
              <span class="pill-name">Guía Descorchados</span>
              <strong class="pill-score">${wine.scores.descorchados} pts</strong>
            </div>
            <div class="score-pill-item">
              <span class="pill-name">Tim Atkin MW</span>
              <strong class="pill-score">${wine.scores.timAtkin} pts</strong>
            </div>
            <div class="score-pill-item">
              <span class="pill-name">Wine Advocate (RP)</span>
              <strong class="pill-score">${wine.scores.robertParker} pts</strong>
            </div>
            <div class="score-pill-item">
              <span class="pill-name">Decanter Awards</span>
              <strong class="pill-score">${wine.scores.decanter} pts</strong>
            </div>
            <div class="score-pill-item">
              <span class="pill-name">Mesa de Cata CAV</span>
              <strong class="pill-score">${wine.scores.laCav} pts</strong>
            </div>
          </div>
          <div class="medals-list mt-3">
            ${wine.medals.map((m) => `<span class="badge badge-medal">🏅 ${m}</span>`).join("")}
          </div>
        </div>

        <!-- Notas Organolépticas y Cata -->
        <h4 class="section-subheading">👃 ${typeof I18n !== "undefined" ? I18n.t("modal_tasting_notes_title") : "Notas de Cata del Sommelier"}</h4>
        <p class="tasting-notes-full leading-relaxed mb-4">${wine.tastingNotes}</p>

        <!-- Radar / Barras de Perfil Organoléptico -->
        <div class="sensory-bars-container glass-panel mb-4">
          <h4 class="box-title">📊 ${typeof I18n !== "undefined" ? I18n.t("modal_radar_title") : "Perfil Sensorial en Boca"}</h4>
          <div class="sensory-bar-row">
            <span class="sensory-label">${typeof I18n !== "undefined" ? I18n.t("radar_aroma") : "Intensidad Aromática"}</span>
            <div class="sensory-progress-bar"><div class="progress-fill" style="width: ${wine.tastingRadar.aroma}%;"></div></div>
            <span class="sensory-value">${wine.tastingRadar.aroma}%</span>
          </div>
          <div class="sensory-bar-row">
            <span class="sensory-label">${typeof I18n !== "undefined" ? I18n.t("radar_body") : "Cuerpo & Estructura"}</span>
            <div class="sensory-progress-bar"><div class="progress-fill" style="width: ${wine.tastingRadar.body}%;"></div></div>
            <span class="sensory-value">${wine.tastingRadar.body}%</span>
          </div>
          <div class="sensory-bar-row">
            <span class="sensory-label">${typeof I18n !== "undefined" ? I18n.t("radar_tannins") : "Taninos & Textura"}</span>
            <div class="sensory-progress-bar"><div class="progress-fill" style="width: ${wine.tastingRadar.tannins}%;"></div></div>
            <span class="sensory-value">${wine.tastingRadar.tannins}%</span>
          </div>
          <div class="sensory-bar-row">
            <span class="sensory-label">${typeof I18n !== "undefined" ? I18n.t("radar_acidity") : "Acidez & Frescura"}</span>
            <div class="sensory-progress-bar"><div class="progress-fill" style="width: ${wine.tastingRadar.acidity}%;"></div></div>
            <span class="sensory-value">${wine.tastingRadar.acidity}%</span>
          </div>
          <div class="sensory-bar-row">
            <span class="sensory-label">${typeof I18n !== "undefined" ? I18n.t("radar_finish") : "Persistencia / Final"}</span>
            <div class="sensory-progress-bar"><div class="progress-fill" style="width: ${wine.tastingRadar.finish}%;"></div></div>
            <span class="sensory-value">${wine.tastingRadar.finish}%</span>
          </div>
        </div>

        <!-- Ficha Enológica -->
        <h4 class="section-subheading">🧪 ${typeof I18n !== "undefined" ? I18n.t("modal_tech_title") : "Ficha Técnica Enológica"}</h4>
        <div class="specs-grid mb-4">
          <div class="spec-card">
            <span class="spec-label">Composición / Blend</span>
            <span class="spec-value">${wine.blend}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Grado Alcohólico</span>
            <span class="spec-value">${wine.alcohol}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Acidez Total</span>
            <span class="spec-value">${wine.acidity}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Crianza / Guarda en Roble</span>
            <span class="spec-value">${wine.aging}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">${typeof I18n !== "undefined" ? I18n.t("modal_potential") : "Potencial de Guarda"}</span>
            <span class="spec-value">${wine.agingPotential}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Certificación</span>
            <span class="spec-value">${wine.organicBio}</span>
          </div>
        </div>

        <!-- Guía de Servicio y Maridaje -->
        <h4 class="section-subheading">🍽️ ${typeof I18n !== "undefined" ? I18n.t("modal_service_title") : "Servicio & Maridaje Recomendado"}</h4>
        <div class="service-box glass-panel mb-4">
          <div class="service-item-row">
            <strong>🌡️ ${typeof I18n !== "undefined" ? I18n.t("modal_serving_temp") : "Temperatura Óptima:"}</strong>
            <span class="text-gold font-bold">${wine.servingTemp}</span>
          </div>
          <div class="service-item-row">
            <strong>⏳ ${typeof I18n !== "undefined" ? I18n.t("modal_decant_time") : "Tiempo de Decantación:"}</strong>
            <span>${wine.decantTime}</span>
          </div>
          <div class="service-item-row">
            <strong>🍷 ${typeof I18n !== "undefined" ? I18n.t("modal_glassware") : "Cristalería Adecuada:"}</strong>
            <span>${wine.glassware}</span>
          </div>
          <div class="service-item-row">
            <strong>🥩 ${typeof I18n !== "undefined" ? I18n.t("modal_pairings_title") : "Maridajes Sugeridos:"}</strong>
            <div class="d-flex flex-wrap gap-1 mt-1">
              ${wine.pairings.map((p) => `<span class="badge badge-wine">${p}</span>`).join("")}
            </div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="d-flex gap-2">
          <button class="btn btn-secondary btn-block" onclick="CompareEngine.toggleCompare('${wine.id}')">
            ${inComp ? 'Quitar del Comparador' : 'Añadir al Comparador Lado a Lado'}
          </button>
          <button class="btn btn-outline-gold btn-block" onclick="App.closeWineModal()">
            ${typeof I18n !== "undefined" ? I18n.t("modal_close") : "Cerrar"}
          </button>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeWineModal() {
    const modal = document.getElementById("wine-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  renderVarieties() {
    const container = document.getElementById("varieties-container");
    if (!container) return;

    container.innerHTML = VARIETIES_DATA.map((v) => `
      <article class="variety-card glass-panel">
        <div class="variety-card-header" style="border-left: 4px solid ${v.colorHex};">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge badge-gold">${v.type}</span>
            <span class="badge badge-subtle">${v.badge}</span>
          </div>
          <h3 class="variety-name">${v.name}</h3>
          <small class="text-light-muted">Origen: ${v.origin}</small>
        </div>

        <div class="variety-history-box mb-3">
          <strong>📖 Historia en Chile:</strong>
          <p class="leading-relaxed mt-1">${v.chileHistory}</p>
        </div>

        <div class="variety-metrics-grid mb-3">
          <div class="v-metric">
            <span class="v-metric-label">Cuerpo:</span>
            <span class="v-metric-stars">${'●'.repeat(v.body)}${'○'.repeat(5 - v.body)}</span>
          </div>
          <div class="v-metric">
            <span class="v-metric-label">Taninos:</span>
            <span class="v-metric-stars">${'●'.repeat(v.tannins)}${'○'.repeat(5 - v.tannins)}</span>
          </div>
          <div class="v-metric">
            <span class="v-metric-label">Acidez:</span>
            <span class="v-metric-stars">${'●'.repeat(v.acidity)}${'○'.repeat(5 - v.acidity)}</span>
          </div>
          <div class="v-metric">
            <span class="v-metric-label">Alcohol Habitual:</span>
            <strong>${v.alcoholTypical}</strong>
          </div>
        </div>

        <div class="variety-aromas-box mb-3">
          <strong>👃 Descriptores Aromáticos:</strong>
          <div class="d-flex flex-wrap gap-1 mt-1">
            ${v.aromaDescriptors.map((a) => `<span class="tag-aroma">${a}</span>`).join("")}
          </div>
        </div>

        <div class="variety-terroirs-box mb-3">
          <strong>📍 Terroirs Óptimos en Chile:</strong>
          <p class="text-gold mb-0">${v.idealTerroirs.join(" • ")}</p>
        </div>

        <div class="variety-pairing-box">
          <strong>🍽️ Maridaje Ideal:</strong>
          <p class="mb-0">${v.idealPairing}</p>
        </div>
      </article>
    `).join("");
  },

  renderScoresTab() {
    const container = document.getElementById("scores-guide-container");
    if (!container) return;

    container.innerHTML = SCORING_SYSTEMS_DATA.map((s) => `
      <div class="score-system-card glass-panel">
        <div class="system-header">
          <span class="system-icon">${s.icon}</span>
          <div>
            <h3 class="system-name">${s.name}</h3>
            <span class="badge badge-gold">${s.origin} • ${s.scale}</span>
          </div>
        </div>

        <p class="system-desc leading-relaxed">${s.description}</p>

        <h4 class="section-subheading mt-3">📊 Escalas y Categorías</h4>
        <div class="system-categories-list">
          ${s.categories.map((c) => `
            <div class="system-cat-row">
              <strong class="cat-range text-gold">${c.range}</strong>
              <div class="cat-details">
                <span class="cat-title">${c.name}</span>
                <small class="cat-desc text-light-muted">${c.desc}</small>
              </div>
            </div>
          `).join("")}
        </div>

        <h4 class="section-subheading mt-3">🏅 Premios Especiales</h4>
        <div class="d-flex flex-wrap gap-1">
          ${s.specialAwards.map((a) => `<span class="badge badge-subtle">${a}</span>`).join("")}
        </div>
      </div>
    `).join("");
  },

  renderProducersTab() {
    const wineriesContainer = document.getElementById("producers-wineries-grid");
    const retailersContainer = document.getElementById("producers-retailers-grid");

    if (wineriesContainer) {
      wineriesContainer.innerHTML = PRODUCERS_DATA.map((p) => `
        <article class="producer-card glass-panel">
          <div class="producer-header">
            <span class="badge badge-gold">Fundada en ${p.foundingYear}</span>
            <h3 class="producer-name">${p.name}</h3>
            <p class="producer-hq">📍 ${p.headquarters}</p>
          </div>

          <p class="producer-philosophy">"${p.philosophy}"</p>

          <div class="producer-meta-box">
            <div><strong>🍷 Vino Ícono:</strong> ${p.flagshipWine}</div>
            <div><strong>🍇 Enólogos:</strong> ${p.keyWinemakers.join(", ")}</div>
            <div><strong>🏰 Enoturismo:</strong> ${p.tourismAvailable ? '✅ Tours y Catas Disponibles' : 'Visitas Privadas'}</div>
          </div>

          <div class="producer-tags-row mt-2">
            ${p.tags.map((t) => `<span class="badge badge-subtle">${t}</span>`).join("")}
          </div>

          <div class="d-flex gap-2 mt-3">
            <a href="${p.website}" target="_blank" rel="noopener" class="btn btn-sm btn-secondary flex-1">
              Sitio Web ↗
            </a>
            <a href="${p.onlineStore}" target="_blank" rel="noopener" class="btn btn-sm btn-primary flex-1">
              Tienda Oficial 🛒
            </a>
          </div>
        </article>
      `).join("");
    }

    if (retailersContainer) {
      retailersContainer.innerHTML = RETAILERS_DIRECTORY.map((r) => `
        <div class="retailer-card glass-panel">
          <div class="retailer-header">
            <div>
              <span class="badge badge-gold mb-1">${r.category}</span>
              <h4 class="retailer-name mb-0">${r.name}</h4>
            </div>
            <span class="badge badge-subtle">${r.type}</span>
          </div>

          <p class="retailer-specialty mt-2"><strong>Especialidad:</strong> ${r.specialty}</p>

          <div class="retailer-locations mb-2">
            <strong>Sucursales Principales:</strong>
            <ul class="styled-bullet-list mt-1">
              ${r.locations.map((loc) => `<li>${loc}</li>`).join("")}
            </ul>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top-glass">
            <span class="text-light-muted" style="font-size: 0.8rem;">🚚 ${r.shipping}</span>
            <a href="${r.onlineStore}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
              Ir a la Tienda ↗
            </a>
          </div>
        </div>
      `).join("");
    }
  },

  setupModalClosers() {
    const wineModal = document.getElementById("wine-modal");
    const closeWineBtn = document.getElementById("close-wine-modal-btn");
    if (closeWineBtn) closeWineBtn.addEventListener("click", () => this.closeWineModal());
    if (wineModal) {
      wineModal.addEventListener("click", (e) => {
        if (e.target === wineModal) this.closeWineModal();
      });
    }

    const valleyModal = document.getElementById("valley-modal");
    const closeValleyBtn = document.getElementById("close-valley-modal-btn");
    if (closeValleyBtn) closeValleyBtn.addEventListener("click", () => TerroirMap.closeValleyModal());
    if (valleyModal) {
      valleyModal.addEventListener("click", (e) => {
        if (e.target === valleyModal) TerroirMap.closeValleyModal();
      });
    }
  },

  setupMobileGestures() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeWineModal();
        if (typeof TerroirMap !== "undefined") TerroirMap.closeValleyModal();
        if (typeof CompareEngine !== "undefined") CompareEngine.closeCompareModal();
      }
    });
  },

  showToast(message, type = "success") {
    const toast = document.getElementById("app-toast");
    if (!toast) return;

    toast.textContent = message;
    toast.className = `app-toast active ${type}`;

    setTimeout(() => {
      toast.classList.remove("active");
    }, 3200);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

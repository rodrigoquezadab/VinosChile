/**
 * Terruño Chileno - Módulo de Comparación de Vinos y Gestión de Favoritos
 * Comparación lado a lado de 2 o 3 vinos con fotografías reales, atributos enológicos, puntajes y terroir.
 */
const CompareEngine = {
  comparedWineIds: [],
  favoriteIds: [],

  init() {
    this.loadFavorites();
    this.bindEvents();
    this.updateCompareFloatingBar();
  },

  bindEvents() {
    const compareModal = document.getElementById("compare-modal");
    const closeBtn = document.getElementById("close-compare-modal-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeCompareModal());
    if (compareModal) {
      compareModal.addEventListener("click", (e) => {
        if (e.target === compareModal) this.closeCompareModal();
      });
    }
  },

  loadFavorites() {
    try {
      const saved = localStorage.getItem("terruno_favorites");
      this.favoriteIds = saved ? JSON.parse(saved) : [];
    } catch (e) { this.favoriteIds = []; }
  },

  saveFavorites() {
    try {
      localStorage.setItem("terruno_favorites", JSON.stringify(this.favoriteIds));
    } catch (e) { console.warn("No se pudo guardar en localStorage", e); }
  },

  toggleFavorite(wineId) {
    const index = this.favoriteIds.indexOf(wineId);
    let added = false;
    if (index > -1) {
      this.favoriteIds.splice(index, 1);
    } else {
      this.favoriteIds.push(wineId);
      added = true;
    }
    this.saveFavorites();
    App.updateWineCardFavorites();
    App.showToast(added ? "⭐ Añadido a tus Vinos Guardados" : "Removido de tus favoritos");
    this.openCompareModal();
  },

  isFavorite(wineId) { return this.favoriteIds.includes(wineId); },

  toggleCompare(wineId) {
    const index = this.comparedWineIds.indexOf(wineId);
    if (index > -1) {
      this.comparedWineIds.splice(index, 1);
      App.showToast("Vino removido del comparador");
    } else {
      if (this.comparedWineIds.length >= 3) {
        const msg = typeof I18n !== "undefined" ? I18n.t("toast_compare_max") : "Puedes comparar un máximo de 3 vinos a la vez";
        App.showToast(msg, "warning");
        return;
      }
      this.comparedWineIds.push(wineId);
      App.showToast("Vino añadido al comparador");
    }
    this.updateCompareFloatingBar();
    App.updateWineCardCompareButtons();
  },

  isInCompare(wineId) { return this.comparedWineIds.includes(wineId); },

  clearCompare() {
    this.comparedWineIds = [];
    this.updateCompareFloatingBar();
    App.updateWineCardCompareButtons();
  },

  updateCompareFloatingBar() {
    const bar = document.getElementById("compare-floating-bar");
    const countEl = document.getElementById("compare-count");
    if (!bar || !countEl) return;
    countEl.textContent = this.comparedWineIds.length;
    if (this.comparedWineIds.length > 0) bar.classList.add("visible");
    else bar.classList.remove("visible");
  },

  _scoreBar(score) {
    if (!score || score === "N/A" || score === 0) return '<span class="cmp-score-na">-</span>';
    const pct = Math.max(0, Math.min(100, Math.round(((score - 80) / 20) * 100)));
    const color = score >= 97 ? "#F0C040" : score >= 94 ? "#D4AF37" : score >= 90 ? "#C87941" : "#9E9E9E";
    return '<div class="cmp-score-bar-wrap"><span class="cmp-score-num" style="color:' + color + '">' + score + '</span><div class="cmp-score-bar"><div class="cmp-score-fill" style="width:' + pct + '%;background:' + color + ';"></div></div></div>';
  },

  _priceBadge(tier) {
    const map = { "$": "price-tier-1", "$$": "price-tier-2", "$$$": "price-tier-3", "$$$$": "price-tier-4" };
    const cls = map[tier] || "price-tier-2";
    return '<span class="cmp-price-badge ' + cls + '">' + (tier || "-") + '</span>';
  },

  openCompareModal() {
    if (this.comparedWineIds.length < 2) {
      App.showToast("Selecciona al menos 2 vinos para comparar", "warning");
      return;
    }
    const wines = this.comparedWineIds.map((id) => WINES_DATA.find((w) => w.id === id)).filter(Boolean);
    const modal = document.getElementById("compare-modal");
    const container = document.getElementById("compare-table-container");
    if (!modal || !container) return;
    const n = wines.length;
    const self = this;

    const sections = [
      {
        title: "BOTELLA",
        icon: "BOTTLE_ICON",
        rows: [
          { label: "Etiqueta", render: function(w) { return '<div class="cmp-bottle-wrap"><img class="cmp-bottle-img" src="' + w.bottleImage + '" alt="' + w.name + '" onerror="this.src=\'assets/images/wines/almaviva.jpg\'"></div>'; } }
        ]
      },
      {
        title: "TERROIR",
        icon: "MAP_ICON",
        rows: [
          { label: "Viña",         render: function(w) { return '<span class="cmp-val-main">' + w.winery + '</span>'; } },
          { label: "Valle / D.O.", render: function(w) { return '<span class="cmp-val-main">' + w.valleyName + '</span>'; } },
          { label: "Zona",         render: function(w) { return '<span class="badge badge-gold">' + w.zone + '</span>'; } },
          { label: "Añada",        render: function(w) { return '<span class="cmp-val-main">' + w.vintage + '</span>'; } }
        ]
      },
      {
        title: "ENOLOGIA",
        icon: "WINE_ICON",
        rows: [
          { label: "Variedad",  render: function(w) { return '<span class="cmp-val-sub">' + w.blend + '</span>'; } },
          { label: "Categoría", render: function(w) { return '<span class="badge badge-subtle">' + w.category + '</span>'; } },
          { label: "Alcohol",   render: function(w) { return '<span class="cmp-val-main">' + w.alcohol + '</span>'; } },
          { label: "Crianza",   render: function(w) { return '<span class="cmp-val-sub">' + w.aging + '</span>'; } },
          { label: "Guarda",    render: function(w) { return '<span class="cmp-val-main">' + w.agingPotential + '</span>'; } }
        ]
      },
      {
        title: "PUNTUACIONES",
        icon: "SCORE_ICON",
        rows: [
          { label: "Puntaje Máx.",   render: function(w) { return '<span class="cmp-top-score">' + w.topScore + '<small>pts</small></span>'; } },
          { label: "James Suckling", render: function(w) { return self._scoreBar(w.scores.jamesSuckling); } },
          { label: "Descorchados",   render: function(w) { return self._scoreBar(w.scores.descorchados); } },
          { label: "Robert Parker",  render: function(w) { return self._scoreBar(w.scores.robertParker); } }
        ]
      },
      {
        title: "SERVICIO",
        icon: "DISH_ICON",
        rows: [
          { label: "Temperatura",  render: function(w) { return '<span class="cmp-val-gold">' + w.servingTemp + '</span>'; } },
          { label: "Decantación",  render: function(w) { return '<span class="cmp-val-sub">' + w.decantTime + '</span>'; } },
          { label: "Maridaje",     render: function(w) { return '<span class="cmp-val-sub">' + w.pairings.slice(0, 2).join(" · ") + '</span>'; } },
          { label: "Precio",       render: function(w) { return self._priceBadge(w.priceTier); } }
        ]
      }
    ];

    const sectionEmoji = { "BOTELLA": "🍾", "TERROIR": "🗺️", "ENOLOGIA": "🍷", "PUNTUACIONES": "🏅", "SERVICIO": "🍽️" };
    const sectionLabel = { "BOTELLA": "Botella", "TERROIR": "Terroir", "ENOLOGIA": "Enología", "PUNTUACIONES": "Puntuaciones", "SERVICIO": "Servicio" };

    let html = '<div class="cmp-wrapper" style="--cmp-cols:' + n + ';">';

    // Header row
    html += '<div class="cmp-header-row">';
    html += '<div class="cmp-label-col cmp-header-label"><span class="cmp-header-icon">⚖️</span>Comparando</div>';
    wines.forEach(function(w) {
      const isFav = self.isFavorite(w.id);
      html += '<div class="cmp-wine-header">';
      html += '<div class="cmp-wine-actions">';
      html += '<button class="cmp-fav-btn' + (isFav ? " is-fav" : "") + '" title="' + (isFav ? "Quitar favorito" : "Guardar") + '" onclick="CompareEngine.toggleFavorite(\'' + w.id + '\')">' + (isFav ? "⭐" : "☆") + '</button>';
      html += '<button class="cmp-remove-btn" title="Quitar" onclick="CompareEngine.toggleCompare(\'' + w.id + '\');if(CompareEngine.comparedWineIds.length>=2){CompareEngine.openCompareModal();}else{CompareEngine.closeCompareModal();}">✕</button>';
      html += '</div>';
      html += '<div class="cmp-wine-name">' + w.name + '</div>';
      html += '<div class="cmp-wine-meta">' + w.vintage + ' &middot; ' + w.category + '</div>';
      html += '<div class="cmp-wine-winery">' + w.winery + '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Sections
    sections.forEach(function(sec) {
      html += '<div class="cmp-section-divider"><span>' + sectionEmoji[sec.title] + '</span>' + sectionLabel[sec.title] + '</div>';
      sec.rows.forEach(function(row) {
        html += '<div class="cmp-row">';
        html += '<div class="cmp-label-col">' + row.label + '</div>';
        wines.forEach(function(w) {
          html += '<div class="cmp-value-col">' + row.render(w) + '</div>';
        });
        html += '</div>';
      });
    });

    html += '</div>';
    container.innerHTML = html;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeCompareModal() {
    const modal = document.getElementById("compare-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
};

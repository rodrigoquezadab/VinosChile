/**
 * Terruño Chileno - Módulo de Comparación de Vinos y Gestión de Favoritos
 * Comparación lado a lado de 2 o 3 vinos con fotografías reales, atributos enológicos, puntajes y terroir.
 * Layout: panel de etiquetas fijo a la izquierda + área de vinos con scroll horizontal independiente.
 */
const CompareEngine = {
  comparedWineIds: [],
  favoriteIds: [],

  // Alturas sincronizadas entre panel de etiquetas y panel de vinos
  ROW_H: {
    header:  90,   // px - cabecera con nombre del vino
    divider: 34,   // px - separador de sección
    bottle:  160,  // px - fila de imagen de botella
    normal:  52,   // px - fila estándar
    score:   44,   // px - fila con barra de score
  },

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
    App.showToast(added ? "Añadido a tus Vinos Guardados" : "Removido de tus favoritos");
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
    if (!score || score === "N/A" || score === 0) return '<span class="cmp-score-na">—</span>';
    const pct = Math.max(0, Math.min(100, Math.round(((score - 80) / 20) * 100)));
    const color = score >= 97 ? "#F0C040" : score >= 94 ? "#D4AF37" : score >= 90 ? "#C87941" : "#9E9E9E";
    return '<div class="cmp-score-bar-wrap"><span class="cmp-score-num" style="color:' + color + '">' + score + '</span><div class="cmp-score-bar"><div class="cmp-score-fill" style="width:' + pct + '%;background:' + color + ';"></div></div></div>';
  },

  _priceBadge(tier) {
    const map = { "$": "price-tier-1", "$$": "price-tier-2", "$$$": "price-tier-3", "$$$$": "price-tier-4" };
    const cls = map[tier] || "price-tier-2";
    return '<span class="cmp-price-badge ' + cls + '">' + (tier || "—") + '</span>';
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

    const self = this;
    const H = this.ROW_H;

    // Definición de secciones y filas
    const sections = [
      {
        key: "BOTELLA", label: "Botella", emoji: "🍾",
        rows: [
          { label: "Etiqueta", type: "bottle",
            render: function(w) { return '<div class="cmp-bottle-wrap"><img class="cmp-bottle-img" src="' + w.bottleImage + '" alt="' + w.name + '" onerror="this.src=\'assets/images/wines/almaviva.jpg\'"></div>'; }
          }
        ]
      },
      {
        key: "TERROIR", label: "Terroir", emoji: "🗺️",
        rows: [
          { label: "Viña",         type: "normal", render: function(w) { return '<span class="cmp-val-main">' + w.winery + '</span>'; } },
          { label: "Valle / D.O.", type: "normal", render: function(w) { return '<span class="cmp-val-main">' + w.valleyName + '</span>'; } },
          { label: "Zona",         type: "normal", render: function(w) { return '<span class="badge badge-gold">' + w.zone + '</span>'; } },
          { label: "Añada",        type: "normal", render: function(w) { return '<span class="cmp-val-main">' + w.vintage + '</span>'; } }
        ]
      },
      {
        key: "ENOLOGIA", label: "Enología", emoji: "🍷",
        rows: [
          { label: "Variedad",  type: "normal", render: function(w) { return '<span class="cmp-val-sub">' + w.blend + '</span>'; } },
          { label: "Categoría", type: "normal", render: function(w) { return '<span class="badge badge-subtle">' + w.category + '</span>'; } },
          { label: "Alcohol",   type: "normal", render: function(w) { return '<span class="cmp-val-main">' + w.alcohol + '</span>'; } },
          { label: "Crianza",   type: "normal", render: function(w) { return '<span class="cmp-val-sub">' + w.aging + '</span>'; } },
          { label: "Guarda",    type: "normal", render: function(w) { return '<span class="cmp-val-main">' + w.agingPotential + '</span>'; } }
        ]
      },
      {
        key: "PUNTUACIONES", label: "Puntuaciones", emoji: "🏅",
        rows: [
          { label: "Puntaje Máx.",   type: "normal", render: function(w) { return '<span class="cmp-top-score">' + w.topScore + '<small>pts</small></span>'; } },
          { label: "James Suckling", type: "score",  render: function(w) { return self._scoreBar(w.scores.jamesSuckling); } },
          { label: "Descorchados",   type: "score",  render: function(w) { return self._scoreBar(w.scores.descorchados); } },
          { label: "Robert Parker",  type: "score",  render: function(w) { return self._scoreBar(w.scores.robertParker); } }
        ]
      },
      {
        key: "SERVICIO", label: "Servicio", emoji: "🍽️",
        rows: [
          { label: "Temperatura", type: "normal", render: function(w) { return '<span class="cmp-val-gold">' + w.servingTemp + '</span>'; } },
          { label: "Decantación", type: "normal", render: function(w) { return '<span class="cmp-val-sub">' + w.decantTime + '</span>'; } },
          { label: "Maridaje",    type: "normal", render: function(w) { return '<span class="cmp-val-sub">' + w.pairings.slice(0, 2).join(" · ") + '</span>'; } },
          { label: "Precio",      type: "normal", render: function(w) { return self._priceBadge(w.priceTier); } }
        ]
      }
    ];

    // ─── Panel izquierdo: solo etiquetas ─────────────────────────────────
    let labelsHtml = '';
    // Celda cabecera del panel de etiquetas
    labelsHtml += '<div class="cmp-lp-header" style="height:' + H.header + 'px;">';
    labelsHtml += '<span class="cmp-header-icon">⚖️</span><span>Atributo</span>';
    labelsHtml += '</div>';

    sections.forEach(function(sec) {
      // Separador de sección
      labelsHtml += '<div class="cmp-lp-divider" style="height:' + H.divider + 'px;">';
      labelsHtml += '<span>' + sec.emoji + '</span>' + sec.label;
      labelsHtml += '</div>';
      // Filas de la sección
      sec.rows.forEach(function(row) {
        var h = H[row.type] || H.normal;
        labelsHtml += '<div class="cmp-lp-cell" style="height:' + h + 'px;">' + row.label + '</div>';
      });
    });

    // ─── Panel derecho: columnas de vinos (scrollable) ────────────────────
    let winesHtml = '';
    wines.forEach(function(w) {
      const isFav = self.isFavorite(w.id);
      let colHtml = '<div class="cmp-wine-col">';

      // Cabecera del vino
      colHtml += '<div class="cmp-wc-header" style="height:' + H.header + 'px;">';
      colHtml += '<div class="cmp-wine-actions">';
      colHtml += '<button class="cmp-fav-btn' + (isFav ? " is-fav" : "") + '" title="' + (isFav ? "Quitar favorito" : "Guardar") + '" onclick="CompareEngine.toggleFavorite(\'' + w.id + '\')">' + (isFav ? "⭐" : "☆") + '</button>';
      colHtml += '<button class="cmp-remove-btn" title="Quitar" onclick="CompareEngine.toggleCompare(\'' + w.id + '\');if(CompareEngine.comparedWineIds.length>=2){CompareEngine.openCompareModal();}else{CompareEngine.closeCompareModal();}">✕</button>';
      colHtml += '</div>';
      colHtml += '<div class="cmp-wine-name">' + w.name + '</div>';
      colHtml += '<div class="cmp-wine-meta">' + w.vintage + ' &middot; ' + w.category + '</div>';
      colHtml += '<div class="cmp-wine-winery">' + w.winery + '</div>';
      colHtml += '</div>';

      sections.forEach(function(sec) {
        // Separador (vacío, solo altura)
        colHtml += '<div class="cmp-wc-divider" style="height:' + H.divider + 'px;"></div>';
        // Celdas de datos
        sec.rows.forEach(function(row) {
          var h = H[row.type] || H.normal;
          colHtml += '<div class="cmp-wc-cell" style="height:' + h + 'px;">' + row.render(w) + '</div>';
        });
      });

      colHtml += '</div>';
      winesHtml += colHtml;
    });

    // ─── Ensamblado final ─────────────────────────────────────────────────
    container.innerHTML =
      '<div class="cmp-layout">' +
        '<div class="cmp-label-pane">' + labelsHtml + '</div>' +
        '<div class="cmp-wines-pane">' +
          '<div class="cmp-wines-inner" style="--cmp-cols:' + wines.length + ';">' +
            winesHtml +
          '</div>' +
        '</div>' +
      '</div>';

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

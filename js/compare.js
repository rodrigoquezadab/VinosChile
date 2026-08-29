/**
 * Terruño Chileno - Módulo de Comparación de Vinos y Gestión de Favoritos
 * Layout: columnas flex con alturas fijas sincronizadas. Todo scrollea junto.
 */
const CompareEngine = {
  comparedWineIds: [],
  favoriteIds: [],

  ROW_H: {
    header:  90,
    divider: 34,
    bottle:  160,
    normal:  52,
    score:   46,
  },

  init() {
    this.loadFavorites();
    this.bindEvents();
    this.updateCompareFloatingBar();
  },

  bindEvents() {
    const modal = document.getElementById("compare-modal");
    const closeBtn = document.getElementById("close-compare-modal-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeCompareModal());
    if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) this.closeCompareModal(); });
  },

  loadFavorites() {
    try { this.favoriteIds = JSON.parse(localStorage.getItem("terruno_favorites") || "[]"); }
    catch (e) { this.favoriteIds = []; }
  },

  saveFavorites() {
    try { localStorage.setItem("terruno_favorites", JSON.stringify(this.favoriteIds)); }
    catch (e) {}
  },

  toggleFavorite(wineId) {
    const i = this.favoriteIds.indexOf(wineId);
    const added = i === -1;
    if (added) this.favoriteIds.push(wineId); else this.favoriteIds.splice(i, 1);
    this.saveFavorites();
    App.updateWineCardFavorites();
    App.showToast(added ? "Guardado en favoritos" : "Removido de favoritos");
    this.openCompareModal();
  },

  isFavorite(wineId) { return this.favoriteIds.includes(wineId); },

  toggleCompare(wineId) {
    const i = this.comparedWineIds.indexOf(wineId);
    if (i > -1) {
      this.comparedWineIds.splice(i, 1);
      App.showToast("Vino removido del comparador");
    } else {
      if (this.comparedWineIds.length >= 3) {
        App.showToast(typeof I18n !== "undefined" ? I18n.t("toast_compare_max") : "Máximo 3 vinos", "warning");
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
    const cnt = document.getElementById("compare-count");
    if (!bar || !cnt) return;
    cnt.textContent = this.comparedWineIds.length;
    bar.classList.toggle("visible", this.comparedWineIds.length > 0);
  },

  _scoreBar(score) {
    if (!score || score === "N/A" || score === 0) return '<span class="cmp-na">—</span>';
    const pct = Math.max(0, Math.min(100, Math.round(((score - 80) / 20) * 100)));
    const c = score >= 97 ? "#F0C040" : score >= 94 ? "#D4AF37" : score >= 90 ? "#C87941" : "#9E9E9E";
    return '<div class="cmp-bar-wrap"><span class="cmp-bar-num" style="color:' + c + '">' + score + '</span><div class="cmp-bar"><div class="cmp-bar-fill" style="width:' + pct + '%;background:' + c + ';"></div></div></div>';
  },

  _priceBadge(tier) {
    const m = { "$": "pt1", "$$": "pt2", "$$$": "pt3", "$$$$": "pt4" };
    return '<span class="cmp-price ' + (m[tier] || "pt2") + '">' + (tier || "—") + '</span>';
  },

  openCompareModal() {
    if (this.comparedWineIds.length < 2) {
      App.showToast("Selecciona al menos 2 vinos para comparar", "warning");
      return;
    }
    const wines = this.comparedWineIds.map(id => WINES_DATA.find(w => w.id === id)).filter(Boolean);
    const modal = document.getElementById("compare-modal");
    const container = document.getElementById("compare-table-container");
    if (!modal || !container) return;

    const self = this;
    const H = this.ROW_H;

    // Definición de secciones
    const sections = [
      { title: "🍾 Botella", rows: [
        { label: "Etiqueta", h: "bottle",
          render: w => '<div class="cmp-img-wrap"><img src="' + w.bottleImage + '" alt="' + w.name + '" onerror="this.src=\'assets/images/wines/almaviva.jpg\'"></div>' }
      ]},
      { title: "🗺️ Terroir", rows: [
        { label: "Viña",         h: "normal", render: w => '<span class="v-main">' + w.winery + '</span>' },
        { label: "Valle / D.O.", h: "normal", render: w => '<span class="v-main">' + w.valleyName + '</span>' },
        { label: "Zona",         h: "normal", render: w => '<span class="badge badge-gold">' + w.zone + '</span>' },
        { label: "Añada",        h: "normal", render: w => '<span class="v-main">' + w.vintage + '</span>' }
      ]},
      { title: "🍷 Enología", rows: [
        { label: "Variedad",  h: "normal", render: w => '<span class="v-sub">' + w.blend + '</span>' },
        { label: "Categoría", h: "normal", render: w => '<span class="badge badge-subtle">' + w.category + '</span>' },
        { label: "Alcohol",   h: "normal", render: w => '<span class="v-main">' + w.alcohol + '</span>' },
        { label: "Crianza",   h: "normal", render: w => '<span class="v-sub">' + w.aging + '</span>' },
        { label: "Guarda",    h: "normal", render: w => '<span class="v-main">' + w.agingPotential + '</span>' }
      ]},
      { title: "🏅 Puntuaciones", rows: [
        { label: "Puntaje Máx.",   h: "normal", render: w => '<span class="cmp-top">' + w.topScore + '<small>pts</small></span>' },
        { label: "James Suckling", h: "score",  render: w => self._scoreBar(w.scores.jamesSuckling) },
        { label: "Descorchados",   h: "score",  render: w => self._scoreBar(w.scores.descorchados) },
        { label: "Robert Parker",  h: "score",  render: w => self._scoreBar(w.scores.robertParker) }
      ]},
      { title: "🍽️ Servicio", rows: [
        { label: "Temperatura", h: "normal", render: w => '<span class="v-gold">' + w.servingTemp + '</span>' },
        { label: "Decantación", h: "normal", render: w => '<span class="v-sub">' + w.decantTime + '</span>' },
        { label: "Maridaje",    h: "normal", render: w => '<span class="v-sub">' + w.pairings.slice(0,2).join(" · ") + '</span>' },
        { label: "Precio",      h: "normal", render: w => self._priceBadge(w.priceTier) }
      ]}
    ];

    // ── Columna de etiquetas ──────────────────────────────────────────
    let labelCol = '<div class="cmp-col cmp-lbl">';
    labelCol += '<div class="cmp-cell cmp-hdr-cell" style="height:' + H.header + 'px"><span class="cmp-hdr-ico">⚖️</span><span class="cmp-hdr-txt">Atributo</span></div>';
    sections.forEach(function(sec) {
      labelCol += '<div class="cmp-cell cmp-sec-cell" style="height:' + H.divider + 'px">' + sec.title + '</div>';
      sec.rows.forEach(function(row) {
        labelCol += '<div class="cmp-cell" style="height:' + H[row.h] + 'px">' + row.label + '</div>';
      });
    });
    labelCol += '</div>';

    // ── Columnas de vinos ─────────────────────────────────────────────
    let wineCols = '';
    wines.forEach(function(w) {
      const isFav = self.isFavorite(w.id);
      let col = '<div class="cmp-col cmp-wcol">';
      // Cabecera
      col += '<div class="cmp-cell cmp-whdr" style="height:' + H.header + 'px">';
      col += '<div class="cmp-wactions">';
      col += '<button class="cmp-fav-btn' + (isFav ? " is-fav" : "") + '" onclick="CompareEngine.toggleFavorite(\'' + w.id + '\')">' + (isFav ? "⭐" : "☆") + '</button>';
      col += '<button class="cmp-rm-btn" onclick="CompareEngine.toggleCompare(\'' + w.id + '\');if(CompareEngine.comparedWineIds.length>=2){CompareEngine.openCompareModal();}else{CompareEngine.closeCompareModal();}">✕</button>';
      col += '</div>';
      col += '<div class="cmp-wname">' + w.name + '</div>';
      col += '<div class="cmp-wmeta">' + w.vintage + ' · ' + w.category + '</div>';
      col += '<div class="cmp-wwinery">' + w.winery + '</div>';
      col += '</div>';
      // Filas de sección
      sections.forEach(function(sec) {
        col += '<div class="cmp-cell cmp-sec-cell cmp-sec-blank" style="height:' + H.divider + 'px"></div>';
        sec.rows.forEach(function(row) {
          col += '<div class="cmp-cell" style="height:' + H[row.h] + 'px">' + row.render(w) + '</div>';
        });
      });
      col += '</div>';
      wineCols += col;
    });

    container.innerHTML = '<div class="cmp-table">' + labelCol + wineCols + '</div>';
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeCompareModal() {
    const modal = document.getElementById("compare-modal");
    if (modal) { modal.classList.remove("active"); document.body.style.overflow = ""; }
  }
};

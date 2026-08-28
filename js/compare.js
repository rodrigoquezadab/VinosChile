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

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeCompareModal());
    }

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
    } catch (e) {
      this.favoriteIds = [];
    }
  },

  saveFavorites() {
    try {
      localStorage.setItem("terruno_favorites", JSON.stringify(this.favoriteIds));
    } catch (e) {
      console.warn("No se pudo guardar en localStorage", e);
    }
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
  },

  isFavorite(wineId) {
    return this.favoriteIds.includes(wineId);
  },

  toggleCompare(wineId) {
    const index = this.comparedWineIds.indexOf(wineId);
    if (index > -1) {
      this.comparedWineIds.splice(index, 1);
      App.showToast("Vino removido del comparador");
    } else {
      if (this.comparedWineIds.length >= 3) {
        App.showToast("Puedes comparar un máximo de 3 vinos a la vez", "warning");
        return;
      }
      this.comparedWineIds.push(wineId);
      App.showToast("Vino añadido al comparador");
    }

    this.updateCompareFloatingBar();
    App.updateWineCardCompareButtons();
  },

  isInCompare(wineId) {
    return this.comparedWineIds.includes(wineId);
  },

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

    if (this.comparedWineIds.length > 0) {
      bar.classList.add("visible");
    } else {
      bar.classList.remove("visible");
    }
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

    container.innerHTML = `
      <div class="compare-grid" style="grid-template-columns: 180px repeat(${wines.length}, minmax(220px, 1fr));">
        <!-- Columna de Etiquetas de Atributos -->
        <div class="compare-col compare-labels-col">
          <div class="compare-cell cell-header"><strong>Atributo</strong></div>
          <div class="compare-cell"><strong>Botella / Etiqueta</strong></div>
          <div class="compare-cell"><strong>Viña</strong></div>
          <div class="compare-cell"><strong>Valle / D.O.</strong></div>
          <div class="compare-cell"><strong>Zona</strong></div>
          <div class="compare-cell"><strong>Variedad / Blend</strong></div>
          <div class="compare-cell"><strong>Grado Alcohólico</strong></div>
          <div class="compare-cell"><strong>Crianza</strong></div>
          <div class="compare-cell"><strong>Puntaje Máximo</strong></div>
          <div class="compare-cell"><strong>Puntajes Críticos</strong></div>
          <div class="compare-cell"><strong>Temperatura</strong></div>
          <div class="compare-cell"><strong>Decantación</strong></div>
          <div class="compare-cell"><strong>Potencial de Guarda</strong></div>
          <div class="compare-cell"><strong>Maridaje Clave</strong></div>
          <div class="compare-cell"><strong>Rango de Precio</strong></div>
        </div>

        <!-- Columnas de Vinos -->
        ${wines.map((w) => `
          <div class="compare-col compare-wine-col">
            <div class="compare-cell cell-header">
              <button class="remove-compare-item-btn" onclick="CompareEngine.toggleCompare('${w.id}'); CompareEngine.openCompareModal();" title="Quitar">×</button>
              <h4 class="compare-wine-name">${w.name}</h4>
              <small class="text-gold font-serif">${w.vintage} • ${w.category}</small>
            </div>
            <div class="compare-cell text-center" style="justify-content: center; height: 110px;">
              <img src="${w.bottleImage}" alt="${w.name}" style="max-height: 95px; width: auto; border-radius: 6px; border: 1px solid var(--border-glass);" onerror="this.src='assets/images/wines/almaviva.jpg'">
            </div>
            <div class="compare-cell">${w.winery}</div>
            <div class="compare-cell">${w.valleyName}</div>
            <div class="compare-cell"><span class="badge badge-gold">${w.zone}</span></div>
            <div class="compare-cell"><small>${w.blend}</small></div>
            <div class="compare-cell">${w.alcohol}</div>
            <div class="compare-cell"><small>${w.aging}</small></div>
            <div class="compare-cell"><span class="score-highlight">${w.topScore} Pts</span></div>
            <div class="compare-cell">
              <div class="d-flex flex-wrap gap-1">
                <span class="badge badge-subtle">JS: ${w.scores.jamesSuckling}</span>
                <span class="badge badge-subtle">Desc: ${w.scores.descorchados}</span>
                <span class="badge badge-subtle">RP: ${w.scores.robertParker}</span>
              </div>
            </div>
            <div class="compare-cell text-gold">${w.servingTemp}</div>
            <div class="compare-cell"><small>${w.decantTime}</small></div>
            <div class="compare-cell">${w.agingPotential}</div>
            <div class="compare-cell"><small>${w.pairings.slice(0, 2).join(", ")}</small></div>
            <div class="compare-cell text-accent">${w.priceTier}</div>
          </div>
        `).join("")}
      </div>
    `;

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

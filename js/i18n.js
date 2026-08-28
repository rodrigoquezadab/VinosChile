/**
 * Terruño Chileno — Sistema de Internacionalización Multilingüe (i18n)
 * Soporta 8 idiomas:
 * 1. Español (es) - Base
 * 2. English (en)
 * 3. Français (fr)
 * 4. Português (pt)
 * 5. Italiano (it)
 * 6. 中文 (zh)
 * 7. 日本語 (ja)
 * 8. हिन्दी (hi)
 */

const I18n = {
  currentLang: "es",

  languages: [
    { code: "es", name: "Español", flag: "🇨🇱", native: "Español" },
    { code: "en", name: "English", flag: "🇬🇧", native: "English" },
    { code: "fr", name: "Français", flag: "🇫🇷", native: "Français" },
    { code: "pt", name: "Português", flag: "🇧🇷", native: "Português" },
    { code: "it", name: "Italiano", flag: "🇮🇹", native: "Italiano" },
    { code: "zh", name: "中文", flag: "🇨🇳", native: "简体中文" },
    { code: "ja", name: "日本語", flag: "🇯🇵", native: "日本語" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳", native: "हिन्दी" }
  ],

  translations: {
    // =========================================================================
    // ESPAÑOL (Base)
    // =========================================================================
    es: {
      brand_title: "TERRUÑO CHILENO",
      brand_subtitle: "Gran Enciclopedia del Vino",
      nav_catalog: "Catálogo & Vinos",
      nav_map: "Valles & Mapa",
      nav_varieties: "Bóveda de Cepas",
      nav_sommelier: "Sommelier & Maridaje",
      nav_scores: "Puntajes & Medallas",
      nav_producers: "Viñas & Tiendas",
      nav_mobile_wines: "Vinos",
      nav_mobile_valleys: "Valles",
      nav_mobile_grapes: "Cepas",
      nav_mobile_sommelier: "Sommelier",
      nav_mobile_scores: "Puntajes",
      nav_mobile_producers: "Viñas",

      hero_badge: "Santuario Fitofiltro Mundial • Pie Franco Prefiloxérico",
      hero_title_prefix: "El Universo del ",
      hero_title_highlight: "Vino Chileno",
      hero_description: "Desde el desierto costero de Atacama hasta la fría Patagonia austral. Explora terruños únicos, cepas históricas, puntajes de la crítica internacional y maridajes perfectos.",

      stat_wines_num: "115+",
      stat_wines_label: "Vinos en Catálogo",
      stat_producers_num: "29",
      stat_producers_label: "Viñas Líderes & MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "Valles D.O. Oficiales",
      stat_scores_num: "100",
      stat_scores_label: "Pts Históricos JS",

      search_placeholder: "Buscar por vino, viña, cepa, valle, supermercado...",
      filters_btn: "Filtros Avanzados",

      chip_all: "Todos los Vinos",
      chip_icons: "🏆 Íconos & Culto",
      chip_gran_reserva: "⭐ Gran Reserva",
      chip_patrimonial: "🌿 Patrimoniales & MOVI",
      chip_supermarket: "🛒 Supermercados & Botillerías",
      chip_sparkling: "🥂 Espumantes",
      chip_desert: "🌵 Clima Extremo / Desierto",

      filter_drawer_title: "Filtros Avanzados",
      filter_channel_lbl: "Canal de Compra en Chile",
      filter_channel_all: "Todos los Canales",
      filter_channel_super: "Supermercados (Jumbo, Líder)",
      filter_channel_boti: "Botillerías & Mayoristas (El Cielo)",
      filter_channel_spec: "Tienda Especializada (Diez, CAV, Vinoteca)",
      filter_channel_direct: "Venta Directa de Viña",

      filter_price_lbl: "Rango de Precios (CLP)",
      filter_price_all: "Todos los Precios",
      filter_price_under_5k: "Económico (< $5.000)",
      filter_price_5k_12k: "Reserva Diario ($5.000 – $12.000)",
      filter_price_12k_25k: "Gran Reserva Clásico ($12.000 – $25.000)",
      filter_price_25k_60k: "Premium Alta Gama ($25.000 – $60.000)",
      filter_price_over_60k: "Íconos de Culto (> $60.000)",

      filter_style_lbl: "Segmento / Estilo",
      filter_style_all: "Todos los Estilos",

      filter_valley_lbl: "Valle de Origen (D.O.)",
      filter_valley_all: "Todos los Valles",

      filter_grape_lbl: "Variedad / Cepa Principal",
      filter_grape_all: "Todas las Cepas",

      filter_type_lbl: "Tipo de Vino",
      filter_type_all: "Todos los Tipos",
      filter_type_red: "Tinto",
      filter_type_white: "Blanco",
      filter_type_rose: "Rosé",
      filter_type_sparkling: "Espumante",

      filter_score_lbl: "Puntaje Mínimo de Crítica",
      filter_score_any: "Cualquier Puntaje",
      filter_score_90: "90+ Puntos (Excelente)",
      filter_score_93: "93+ Puntos (Sobresaliente)",
      filter_score_95: "95+ Puntos (Excepcional)",

      filter_organic_lbl: "Solo Orgánico / Biodinámico / Natural",
      filter_favorites_lbl: "Solo Mis Favoritos",
      reset_filters_btn: "Restablecer Filtros",

      results_count_suffix: "vinos encontrados",
      no_results_title: "No encontramos vinos con esos criterios",
      no_results_desc: "Prueba ajustando los filtros o utilizando términos de búsqueda más generales.",

      card_view_details: "Ver Ficha & Cata",
      card_compare: "Comparar",
      card_comparing: "Comparando",
      card_where_buy: "Dónde Comprar:",
      card_approx_usd: "aprox.",

      modal_badge_photo: "📷 FOTOGRAFÍA REAL VERIFICADA",
      modal_market_price: "Precio Promedio Mercado Chileno:",
      modal_where_title: "Canales de Compra y Disponibilidad en Chile",
      modal_where_sub: "Disponible para compra física y online en territorio chileno:",
      modal_online_store: "Comprar en Tienda Oficial / Retail",
      modal_radar_title: "Radar Organoléptico de Degustación",
      modal_tasting_notes_title: "Nota de Cata Sensorial",
      modal_tech_title: "Ficha Técnica y Enológica",
      modal_service_title: "Guía de Servicio del Sommelier",
      modal_serving_temp: "Temperatura:",
      modal_decant_time: "Decantación:",
      modal_glassware: "Cristalería:",
      modal_potential: "Potencial Guarda:",
      modal_pairings_title: "Maridaje Enogastronómico Sugerido",
      modal_critic_scores: "Puntajes de la Crítica Especializada",
      modal_close: "Cerrar",

      radar_aroma: "Intensidad Aromática",
      radar_body: "Cuerpo y Estructura",
      radar_tannins: "Textura y Taninos",
      radar_acidity: "Acidez y Tensión",
      radar_finish: "Persistencia / Final",

      compare_bar_selected: "vinos seleccionados para comparar",
      compare_bar_btn: "Comparar Ahora",
      compare_bar_clear: "Limpiar",
      compare_modal_title: "Comparador Enológico Lado a Lado",

      sommelier_title: "Asistente Sommelier & Asesor de Servicio",
      sommelier_subtitle: "Maridaje enogastronómico con gastronomía chilena e internacional, cálculo de temperatura ideal y cristalería perfecta.",

      varieties_title: "Bóveda Ampelográfica de Cepas",
      varieties_subtitle: "Historia, ADN prefiloxérico, características organolépticas y los terruños chilenos donde cada variedad alcanza su máxima expresión.",

      scores_title: "Puntajes & Guía de la Crítica Internacional",
      scores_subtitle: "Comprensión de los 100 puntos y las diferencias entre Tim Atkin, Descorchados, James Suckling y Robert Parker.",

      producers_title: "Directorio de Viñas & Bodegas Chilenas",
      producers_subtitle: "Historia, valles de producción, enoturismo y canales de compra directa de las bodegas más destacadas de Chile.",

      toast_filters_reset: "Filtros restablecidos",
      toast_compare_max: "Puedes comparar un máximo de 3 vinos simultáneamente",
      toast_lang_changed: "Idioma actualizado",

      lang_select_lbl: "Idioma"
    },

    // =========================================================================
    // ENGLISH
    // =========================================================================
    en: {
      brand_title: "CHILEAN TERROIR",
      brand_subtitle: "The Great Wine Encyclopedia",
      nav_catalog: "Catalog & Wines",
      nav_map: "Valleys & Map",
      nav_varieties: "Grape Vault",
      nav_sommelier: "Sommelier & Pairings",
      nav_scores: "Scores & Medals",
      nav_producers: "Wineries & Stores",
      nav_mobile_wines: "Wines",
      nav_mobile_valleys: "Valleys",
      nav_mobile_grapes: "Grapes",
      nav_mobile_sommelier: "Sommelier",
      nav_mobile_scores: "Scores",
      nav_mobile_producers: "Wineries",

      hero_badge: "World Phytosanitary Sanctuary • Pre-Phylloxera Ungrafted Vines",
      hero_title_prefix: "The Universe of ",
      hero_title_highlight: "Chilean Wine",
      hero_description: "From the coastal desert of Atacama to the cold southern Patagonia. Explore unique terroirs, historic grape varieties, international critical scores, and perfect culinary pairings.",

      stat_wines_num: "115+",
      stat_wines_label: "Wines in Catalog",
      stat_producers_num: "29",
      stat_producers_label: "Leading & MOVI Wineries",
      stat_valleys_num: "17",
      stat_valleys_label: "Official D.O. Valleys",
      stat_scores_num: "100",
      stat_scores_label: "Historic JS Points",

      search_placeholder: "Search by wine, winery, grape, valley, store...",
      filters_btn: "Advanced Filters",

      chip_all: "All Wines",
      chip_icons: "🏆 Icons & Cult",
      chip_gran_reserva: "⭐ Gran Reserva",
      chip_patrimonial: "🌿 Heritage & MOVI",
      chip_supermarket: "🛒 Supermarkets & Retail",
      chip_sparkling: "🥂 Sparkling Wines",
      chip_desert: "🌵 Extreme Climate / Desert",

      filter_drawer_title: "Advanced Filters",
      filter_channel_lbl: "Retail Channel in Chile",
      filter_channel_all: "All Channels",
      filter_channel_super: "Supermarkets (Jumbo, Líder)",
      filter_channel_boti: "Wholesalers & Bottle Shops (El Cielo)",
      filter_channel_spec: "Specialty Wine Shops (Diez, CAV, Vinoteca)",
      filter_channel_direct: "Direct Winery Sales",

      filter_price_lbl: "Price Range (CLP)",
      filter_price_all: "All Prices",
      filter_price_under_5k: "Budget (< $5,000 CLP)",
      filter_price_5k_12k: "Daily Reserve ($5,000 – $12,000 CLP)",
      filter_price_12k_25k: "Classic Gran Reserva ($12,000 – $25,000 CLP)",
      filter_price_25k_60k: "High-End Premium ($25,000 – $60,000 CLP)",
      filter_price_over_60k: "Cult Icons (> $60,000 CLP)",

      filter_style_lbl: "Segment / Style",
      filter_style_all: "All Styles",

      filter_valley_lbl: "Valley of Origin (D.O.)",
      filter_valley_all: "All Valleys",

      filter_grape_lbl: "Main Grape Variety",
      filter_grape_all: "All Grapes",

      filter_type_lbl: "Wine Type",
      filter_type_all: "All Types",
      filter_type_red: "Red Wine",
      filter_type_white: "White Wine",
      filter_type_rose: "Rosé Wine",
      filter_type_sparkling: "Sparkling Wine",

      filter_score_lbl: "Minimum Critic Score",
      filter_score_any: "Any Score",
      filter_score_90: "90+ Points (Excellent)",
      filter_score_93: "93+ Points (Outstanding)",
      filter_score_95: "95+ Points (Exceptional)",

      filter_organic_lbl: "Organic / Biodynamic / Natural Only",
      filter_favorites_lbl: "My Favorites Only",
      reset_filters_btn: "Reset Filters",

      results_count_suffix: "wines found",
      no_results_title: "No wines match your criteria",
      no_results_desc: "Try adjusting filters or using broader search terms.",

      card_view_details: "View Profile & Tasting",
      card_compare: "Compare",
      card_comparing: "Comparing",
      card_where_buy: "Where to Buy:",
      card_approx_usd: "approx.",

      modal_badge_photo: "📷 VERIFIED AUTHENTIC PHOTO",
      modal_market_price: "Average Chilean Market Price:",
      modal_where_title: "Retail Channels & Availability in Chile",
      modal_where_sub: "Available for in-store and online purchase in Chile:",
      modal_online_store: "Buy at Official Winery / Retail",
      modal_radar_title: "Organoleptic Tasting Radar",
      modal_tasting_notes_title: "Sensory Tasting Notes",
      modal_tech_title: "Technical & Oenological Sheet",
      modal_service_title: "Sommelier Serving Guide",
      modal_serving_temp: "Serving Temp:",
      modal_decant_time: "Decanting:",
      modal_glassware: "Glassware:",
      modal_potential: "Cellaring Potential:",
      modal_pairings_title: "Suggested Food Pairings",
      modal_critic_scores: "Specialized Critic Scores",
      modal_close: "Close",

      radar_aroma: "Aromatic Intensity",
      radar_body: "Body & Structure",
      radar_tannins: "Texture & Tannins",
      radar_acidity: "Acidity & Freshness",
      radar_finish: "Persistence / Finish",

      compare_bar_selected: "wines selected for comparison",
      compare_bar_btn: "Compare Now",
      compare_bar_clear: "Clear",
      compare_modal_title: "Side-by-Side Oenological Comparison",

      sommelier_title: "Sommelier Assistant & Service Advisor",
      sommelier_subtitle: "Food pairings with Chilean and global cuisine, ideal temperature calculation, and glassware selection.",

      varieties_title: "Ampelographic Grape Vault",
      varieties_subtitle: "History, pre-phylloxera genetics, organoleptic profile, and Chilean terroirs where each variety thrives.",

      scores_title: "Scores & International Critical Guide",
      scores_subtitle: "Understanding the 100-point scale and differences between Tim Atkin, Descorchados, James Suckling, and Robert Parker.",

      producers_title: "Directory of Chilean Wineries & Producers",
      producers_subtitle: "History, production valleys, wine tourism, and official purchasing channels for Chile's most prominent wineries.",

      toast_filters_reset: "Filters reset",
      toast_compare_max: "You can compare up to 3 wines simultaneously",
      toast_lang_changed: "Language updated",

      lang_select_lbl: "Language"
    },

    // =========================================================================
    // FRANÇAIS
    // =========================================================================
    fr: {
      brand_title: "TERROIR CHILIEN",
      brand_subtitle: "La Grande Encyclopédie du Vin",
      nav_catalog: "Catalogue & Vins",
      nav_map: "Vallées & Carte",
      nav_varieties: "Caveau des Cépages",
      nav_sommelier: "Sommelier & Accords",
      nav_scores: "Notes & Médailles",
      nav_producers: "Domaines & Boutiques",
      nav_mobile_wines: "Vins",
      nav_mobile_valleys: "Vallées",
      nav_mobile_grapes: "Cépages",
      nav_mobile_sommelier: "Sommelier",
      nav_mobile_scores: "Notes",
      nav_mobile_producers: "Domaines",

      hero_badge: "Sanctuaire Phytosanitaire Mondial • Vignes Franches de Pied Pré-Phylloxériques",
      hero_title_prefix: "L'Univers du ",
      hero_title_highlight: "Vin Chilien",
      hero_description: "Du désert côtier d'Atacama à la froide Patagonie australe. Découvrez des terroirs uniques, des cépages historiques, les notes de la critique internationale et des accords parfaits.",

      stat_wines_num: "115+",
      stat_wines_label: "Vins au Catalogue",
      stat_producers_num: "29",
      stat_producers_label: "Domaines Leaders & MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "Vallées D.O. Officielles",
      stat_scores_num: "100",
      stat_scores_label: "Pts Historiques JS",

      search_placeholder: "Rechercher par vin, domaine, cépage, vallée, magasin...",
      filters_btn: "Filtres Avancés",

      chip_all: "Tous les Vins",
      chip_icons: "🏆 Icônes & Vins de Culte",
      chip_gran_reserva: "⭐ Gran Reserva",
      chip_patrimonial: "🌿 Patrimoine & MOVI",
      chip_supermarket: "🛒 Supermarchés & Distribution",
      chip_sparkling: "🥂 Effervescents",
      chip_desert: "🌵 Climat Extrême / Désert",

      filter_drawer_title: "Filtres Avancés",
      filter_channel_lbl: "Canal de Distribution au Chili",
      filter_channel_all: "Tous les Canaux",
      filter_channel_super: "Supermarchés (Jumbo, Líder)",
      filter_channel_boti: "Grossistes & Cavistes Populaires (El Cielo)",
      filter_channel_spec: "Cavistes Spécialisés (Diez, CAV, Vinoteca)",
      filter_channel_direct: "Vente Directe au Domaine",

      filter_price_lbl: "Gamme de Prix (CLP)",
      filter_price_all: "Tous les Prix",
      filter_price_under_5k: "Économique (< 5.000 $ CLP)",
      filter_price_5k_12k: "Réserve Quotidienne (5.000 – 12.000 $ CLP)",
      filter_price_12k_25k: "Gran Reserva Classique (12.000 – 25.000 $ CLP)",
      filter_price_25k_60k: "Haut de Gamme Premium (25.000 – 60.000 $ CLP)",
      filter_price_over_60k: "Vins de Culte (> 60.000 $ CLP)",

      filter_style_lbl: "Segment / Style",
      filter_style_all: "Tous les Styles",

      filter_valley_lbl: "Vallée d'Origine (D.O.)",
      filter_valley_all: "Toutes les Vallées",

      filter_grape_lbl: "Cépage Principal",
      filter_grape_all: "Tous les Cépages",

      filter_type_lbl: "Type de Vin",
      filter_type_all: "Tous les Types",
      filter_type_red: "Rouge",
      filter_type_white: "Blanc",
      filter_type_rose: "Rosé",
      filter_type_sparkling: "Effervescent",

      filter_score_lbl: "Note Critique Minimale",
      filter_score_any: "Toutes les Notes",
      filter_score_90: "90+ Points (Excellent)",
      filter_score_93: "93+ Points (Remarquable)",
      filter_score_95: "95+ Points (Exceptionnel)",

      filter_organic_lbl: "Biologique / Biodynamique / Nature Uniquement",
      filter_favorites_lbl: "Mes Favoris Uniquement",
      reset_filters_btn: "Réinitialiser les Filtres",

      results_count_suffix: "vins trouvés",
      no_results_title: "Aucun vin ne correspond à vos critères",
      no_results_desc: "Essayez d'ajuster les filtres ou d'utiliser des termes de recherche plus larges.",

      card_view_details: "Fiche & Dégustation",
      card_compare: "Comparer",
      card_comparing: "Comparaison",
      card_where_buy: "Où Acheter :",
      card_approx_usd: "env.",

      modal_badge_photo: "📷 PHOTOGRAPHIE AUTHENTIQUE VÉRIFIÉE",
      modal_market_price: "Prix Moyen Marché Chilien :",
      modal_where_title: "Canaux d'Achat et Disponibilité au Chili",
      modal_where_sub: "Disponible en boutique et en ligne au Chili :",
      modal_online_store: "Acheter au Domaine / Boutique Officielle",
      modal_radar_title: "Radar Organoleptique de Dégustation",
      modal_tasting_notes_title: "Notes Sensorielles de Dégustation",
      modal_tech_title: "Fiche Technique et Œnologique",
      modal_service_title: "Guide de Service du Sommelier",
      modal_serving_temp: "Température :",
      modal_decant_time: "Aération :",
      modal_glassware: "Verre Recommandé :",
      modal_potential: "Potentiel de Garde :",
      modal_pairings_title: "Accords Mets & Vins Suggérés",
      modal_critic_scores: "Notes de la Critique Spécialisée",
      modal_close: "Fermer",

      radar_aroma: "Intensité Aromatique",
      radar_body: "Corps & Structure",
      radar_tannins: "Texture & Teneur en Tanins",
      radar_acidity: "Acidité & Fraîcheur",
      radar_finish: "Longueur en Bouche",

      compare_bar_selected: "vins sélectionnés pour comparer",
      compare_bar_btn: "Comparer Maintenant",
      compare_bar_clear: "Effacer",
      compare_modal_title: "Comparateur Œnologique Côte à Côte",

      sommelier_title: "Assistant Sommelier & Conseils de Service",
      sommelier_subtitle: "Accords mets-vins avec la cuisine chilienne et internationale, calcul de température idéale et choix de verrerie.",

      varieties_title: "Conservatoire Ampélographique des Cépages",
      varieties_subtitle: "Histoire, génétique pré-phylloxérique, profil sensoriel et terroirs chiliens d'excellence.",

      scores_title: "Notes & Guide de la Critique Internationale",
      scores_subtitle: "Comprendre l'échelle des 100 points et les spécificités de Tim Atkin, Descorchados, James Suckling et Robert Parker.",

      producers_title: "Répertoire des Domaines & Vignerons Chiliens",
      producers_subtitle: "Histoire, terroirs de production, œnotourisme et canaux de vente des plus grandes maisons chiliennes.",

      toast_filters_reset: "Filtres réinitialisés",
      toast_compare_max: "Vous pouvez comparer jusqu'à 3 vins simultanément",
      toast_lang_changed: "Langue mise à jour",

      lang_select_lbl: "Langue"
    },

    // =========================================================================
    // PORTUGUÊS
    // =========================================================================
    pt: {
      brand_title: "TERROIR CHILENO",
      brand_subtitle: "A Grande Enciclopédia do Vinho",
      nav_catalog: "Catálogo & Vinhos",
      nav_map: "Vales & Mapa",
      nav_varieties: "Cofre de Castas",
      nav_sommelier: "Sommelier & Harmonização",
      nav_scores: "Pontuações & Medalhas",
      nav_producers: "Vinícolas & Lojas",
      nav_mobile_wines: "Vinhos",
      nav_mobile_valleys: "Vales",
      nav_mobile_grapes: "Castas",
      nav_mobile_sommelier: "Sommelier",
      nav_mobile_scores: "Pontos",
      nav_mobile_producers: "Vinícolas",

      hero_badge: "Santuário Fitossanitário Mundial • Pé Franco Pré-Filoxérico",
      hero_title_prefix: "O Universo do ",
      hero_title_highlight: "Vinho Chileno",
      hero_description: "Do deserto costeiro do Atacama à fria Patagônia austral. Explore terroirs únicos, castas históricas, pontuações da crítica mundial e harmonizações perfeitas.",

      stat_wines_num: "115+",
      stat_wines_label: "Vinhos no Catálogo",
      stat_producers_num: "29",
      stat_producers_label: "Vinícolas Líderes & MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "Vales D.O. Oficiais",
      stat_scores_num: "100",
      stat_scores_label: "Pontos Históricos JS",

      search_placeholder: "Pesquise por vinho, vinícola, casta, vale, loja...",
      filters_btn: "Filtros Avançados",

      chip_all: "Todos os Vinhos",
      chip_icons: "🏆 Ícones & Vinhos de Culto",
      chip_gran_reserva: "⭐ Gran Reserva",
      chip_patrimonial: "🌿 Patrimoniais & MOVI",
      chip_supermarket: "🛒 Supermercados & Varejo",
      chip_sparkling: "🥂 Espumantes",
      chip_desert: "🌵 Clima Extremo / Deserto",

      filter_drawer_title: "Filtros Avançados",
      filter_channel_lbl: "Canal de Venda no Chile",
      filter_channel_all: "Todos os Canais",
      filter_channel_super: "Supermercados (Jumbo, Líder)",
      filter_channel_boti: "Atacadistas & Bebidas (El Cielo)",
      filter_channel_spec: "Lojas Especializadas (Diez, CAV, Vinoteca)",
      filter_channel_direct: "Venda Direta da Vinícola",

      filter_price_lbl: "Faixa de Preço (CLP)",
      filter_price_all: "Todos os Preços",
      filter_price_under_5k: "Econômico (< $5.000 CLP)",
      filter_price_5k_12k: "Reserva Diário ($5.000 – $12.000 CLP)",
      filter_price_12k_25k: "Gran Reserva Clássico ($12.000 – $25.000 CLP)",
      filter_price_25k_60k: "Alta Gama Premium ($25.000 – $60.000 CLP)",
      filter_price_over_60k: "Ícones de Culto (> $60.000 CLP)",

      filter_style_lbl: "Segmento / Estilo",
      filter_style_all: "Todos os Estilos",

      filter_valley_lbl: "Vale de Origem (D.O.)",
      filter_valley_all: "Todos os Vales",

      filter_grape_lbl: "Casta Principal",
      filter_grape_all: "Todas as Castas",

      filter_type_lbl: "Tipo de Vinho",
      filter_type_all: "Todos os Tipos",
      filter_type_red: "Tinto",
      filter_type_white: "Branco",
      filter_type_rose: "Rosé",
      filter_type_sparkling: "Espumante",

      filter_score_lbl: "Pontuação Mínima da Crítica",
      filter_score_any: "Qualquer Pontuação",
      filter_score_90: "90+ Pontos (Excelente)",
      filter_score_93: "93+ Pontos (Notável)",
      filter_score_95: "95+ Pontos (Excepcional)",

      filter_organic_lbl: "Apenas Orgânico / Biodinâmico / Natural",
      filter_favorites_lbl: "Apenas Meus Favoritos",
      reset_filters_btn: "Redefinir Filtros",

      results_count_suffix: "vinhos encontrados",
      no_results_title: "Nenhum vinho encontrado com esses critérios",
      no_results_desc: "Tente ajustar os filtros ou utilizar termos mais amplos de busca.",

      card_view_details: "Ver Ficha & Degustação",
      card_compare: "Comparar",
      card_comparing: "Comparando",
      card_where_buy: "Onde Comprar:",
      card_approx_usd: "aprox.",

      modal_badge_photo: "📷 FOTOGRAFIA REAL VERIFICADA",
      modal_market_price: "Preço Médio no Mercado Chileno:",
      modal_where_title: "Canais de Compra e Disponibilidade no Chile",
      modal_where_sub: "Disponível para compra física e online no Chile:",
      modal_online_store: "Comprar na Loja Oficial / Varejo",
      modal_radar_title: "Radar Organoléptico de Degustação",
      modal_tasting_notes_title: "Notas Sensoriais de Degustação",
      modal_tech_title: "Ficha Técnica e Enológica",
      modal_service_title: "Guia de Serviço do Sommelier",
      modal_serving_temp: "Temperatura:",
      modal_decant_time: "Decantação:",
      modal_glassware: "Taça Recomendada:",
      modal_potential: "Potencial de Guarda:",
      modal_pairings_title: "Harmonizações Enogastronômicas",
      modal_critic_scores: "Pontuações da Crítica Especializada",
      modal_close: "Fechar",

      radar_aroma: "Intensidade Aromática",
      radar_body: "Corpo & Estrutura",
      radar_tannins: "Textura & Taninos",
      radar_acidity: "Acidez & Frescor",
      radar_finish: "Persistência / Final",

      compare_bar_selected: "vinhos selecionados para comparar",
      compare_bar_btn: "Comparar Agora",
      compare_bar_clear: "Limpar",
      compare_modal_title: "Comparador Enológico Lado a Lado",

      sommelier_title: "Assistente Sommelier & Consultor de Serviço",
      sommelier_subtitle: "Harmonização enogastronômica com culinária chilena e internacional, cálculo de temperatura ideal e taças recomendadas.",

      varieties_title: "Cofre Ampelográfico de Castas",
      varieties_subtitle: "História, genética pré-filoxérica, perfil organoléptico e os terroirs chilenos ideais para cada variedade.",

      scores_title: "Pontuações & Guia da Crítica Internacional",
      scores_subtitle: "Entendendo a escala de 100 pontos e as diferenças entre Tim Atkin, Descorchados, James Suckling e Robert Parker.",

      producers_title: "Diretório de Vinícolas & Produtores Chilenos",
      producers_subtitle: "História, vales de produção, enoturismo e lojas oficiais das vinícolas mais emblemáticas do Chile.",

      toast_filters_reset: "Filtros redefinidos",
      toast_compare_max: "Você pode comparar no máximo 3 vinhos simultaneamente",
      toast_lang_changed: "Idioma atualizado",

      lang_select_lbl: "Idioma"
    },

    // =========================================================================
    // ITALIANO
    // =========================================================================
    it: {
      brand_title: "TERROIR CILENO",
      brand_subtitle: "La Grande Enciclopedia del Vino",
      nav_catalog: "Catalogo & Vini",
      nav_map: "Valli & Mappa",
      nav_varieties: "Caveau dei Vitigni",
      nav_sommelier: "Sommelier & Abbinamenti",
      nav_scores: "Punteggi & Medaglie",
      nav_producers: "Cantine & Negozi",
      nav_mobile_wines: "Vini",
      nav_mobile_valleys: "Valli",
      nav_mobile_grapes: "Vitigni",
      nav_mobile_sommelier: "Sommelier",
      nav_mobile_scores: "Punti",
      nav_mobile_producers: "Cantine",

      hero_badge: "Santuario Fitosanitario Mondiale • Piede Franco Pre-Fillosserico",
      hero_title_prefix: "L'Universo del ",
      hero_title_highlight: "Vino Cileno",
      hero_description: "Dal deserto costiero di Atacama alla fredda Patagonia australe. Esplora terroir unici, vitigni storici, punteggi della critica internazionale e abbinamenti perfetti.",

      stat_wines_num: "115+",
      stat_wines_label: "Vini in Catalogo",
      stat_producers_num: "29",
      stat_producers_label: "Cantine Leader & MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "Valli D.O. Ufficiali",
      stat_scores_num: "100",
      stat_scores_label: "Punti Storici JS",

      search_placeholder: "Cerca per vino, cantina, vitigno, valle, negozio...",
      filters_btn: "Filtri Avanzati",

      chip_all: "Tutti i Vini",
      chip_icons: "🏆 Icone & Vini di Culto",
      chip_gran_reserva: "⭐ Gran Reserva",
      chip_patrimonial: "🌿 Tradizione & MOVI",
      chip_supermarket: "🛒 Supermercati & Distribuzione",
      chip_sparkling: "🥂 Spumanti",
      chip_desert: "🌵 Clima Estremo / Deserto",

      filter_drawer_title: "Filtri Avanzati",
      filter_channel_lbl: "Canale di Vendita in Cile",
      filter_channel_all: "Tutti i Canali",
      filter_channel_super: "Supermercati (Jumbo, Líder)",
      filter_channel_boti: "Grossisti & Enoteche Popolari (El Cielo)",
      filter_channel_spec: "Enoteche Specializzate (Diez, CAV, Vinoteca)",
      filter_channel_direct: "Vendita Diretta in Cantina",

      filter_price_lbl: "Fascia di Prezzo (CLP)",
      filter_price_all: "Tutti i Prezzi",
      filter_price_under_5k: "Economico (< 5.000 $ CLP)",
      filter_price_5k_12k: "Riserva Quotidiana (5.000 – 12.000 $ CLP)",
      filter_price_12k_25k: "Gran Reserva Classico (12.000 – 25.000 $ CLP)",
      filter_price_25k_60k: "Alta Gamma Premium (25.000 – 60.000 $ CLP)",
      filter_price_over_60k: "Icone di Culto (> 60.000 $ CLP)",

      filter_style_lbl: "Segmento / Stile",
      filter_style_all: "Tutti gli Stili",

      filter_valley_lbl: "Valle d'Origine (D.O.)",
      filter_valley_all: "Tutte le Valli",

      filter_grape_lbl: "Vitigno Principale",
      filter_grape_all: "Tutti i Vitigni",

      filter_type_lbl: "Tipologia di Vino",
      filter_type_all: "Tutte le Tipologie",
      filter_type_red: "Rosso",
      filter_type_white: "Bianco",
      filter_type_rose: "Rosato",
      filter_type_sparkling: "Spumante",

      filter_score_lbl: "Punteggio Minimo Critica",
      filter_score_any: "Qualsiasi Punteggio",
      filter_score_90: "90+ Punti (Eccellente)",
      filter_score_93: "93+ Punti (Straordinario)",
      filter_score_95: "95+ Punti (Eccezionale)",

      filter_organic_lbl: "Solo Biologico / Biodinamico / Naturale",
      filter_favorites_lbl: "Solo i Miei Preferiti",
      reset_filters_btn: "Reimposta Filtri",

      results_count_suffix: "vini trovati",
      no_results_title: "Nessun vino trovato con questi criteri",
      no_results_desc: "Prova a modificare i filtri o a usare termini di ricerca più generici.",

      card_view_details: "Scheda & Degustazione",
      card_compare: "Confronta",
      card_comparing: "In Confronto",
      card_where_buy: "Dove Acquistare:",
      card_approx_usd: "circa",

      modal_badge_photo: "📷 FOTOGRAFIA AUTENTICA VERIFICATA",
      modal_market_price: "Prezzo Medio Mercato Cileno:",
      modal_where_title: "Canali d'Acquisto e Disponibilità in Cile",
      modal_where_sub: "Disponibile per acquisto fisico e online in Cile:",
      modal_online_store: "Acquista presso Negozio Ufficiale / Retail",
      modal_radar_title: "Radar Organolettico di Degustazione",
      modal_tasting_notes_title: "Note Sensoriali di Degustazione",
      modal_tech_title: "Scheda Tecnica ed Enologica",
      modal_service_title: "Guida di Servizio del Sommelier",
      modal_serving_temp: "Temperatura:",
      modal_decant_time: "Decantazione:",
      modal_glassware: "Bicchiere Consigliato:",
      modal_potential: "Potenziale d'Invecchiamento:",
      modal_pairings_title: "Abbinamenti Enogastronomici Suggeriti",
      modal_critic_scores: "Punteggi della Critica Specializzata",
      modal_close: "Chiudi",

      radar_aroma: "Intensità Aromatica",
      radar_body: "Corpo & Struttura",
      radar_tannins: "Consistenza & Tannini",
      radar_acidity: "Acidità & Freschezza",
      radar_finish: "Persistenza / Finale",

      compare_bar_selected: "vini selezionati per il confronto",
      compare_bar_btn: "Confronta Ora",
      compare_bar_clear: "Svuota",
      compare_modal_title: "Confronto Enologico Fianco a Fianco",

      sommelier_title: "Assistente Sommelier & Consulente di Servizio",
      sommelier_subtitle: "Abbinamenti con piatti cileni e internazionali, calcolo della temperatura ideale e scelta del calice perfetto.",

      varieties_title: "Caveau Ampelografico dei Vitigni",
      varieties_subtitle: "Storia, genoma pre-fillosserico, profilo sensoriale e i terroir cileni in cui ogni vitigno esprime il meglio.",

      scores_title: "Punteggi & Guida della Critica Internazionale",
      scores_subtitle: "Comprendere la scala dei 100 punti e le peculiarità di Tim Atkin, Descorchados, James Suckling e Robert Parker.",

      producers_title: "Elenco delle Cantine & Produttori Cileni",
      producers_subtitle: "Storia, valli di produzione, enoturismo e negozi ufficiali delle aziende vinicole più prestigiose del Cile.",

      toast_filters_reset: "Filtri reimpostati",
      toast_compare_max: "Puoi confrontare fino a 3 vini contemporaneamente",
      toast_lang_changed: "Lingua aggiornata",

      lang_select_lbl: "Lingua"
    },

    // =========================================================================
    // 中文 (CHINESE)
    // =========================================================================
    zh: {
      brand_title: "智利风土",
      brand_subtitle: "智利葡萄酒大百科",
      nav_catalog: "名酒大全",
      nav_map: "产区地图",
      nav_varieties: "葡萄品种库",
      nav_sommelier: "侍酒师与配餐",
      nav_scores: "国际评分与奖项",
      nav_producers: "名庄与购买渠道",
      nav_mobile_wines: "葡萄酒",
      nav_mobile_valleys: "产区",
      nav_mobile_grapes: "品种",
      nav_mobile_sommelier: "侍酒师",
      nav_mobile_scores: "评分",
      nav_mobile_producers: "酒庄",

      hero_badge: "全球植物检疫圣地 • 未受根瘤蚜侵害的原生根老藤",
      hero_title_prefix: "探索卓越的 ",
      hero_title_highlight: "智利葡萄酒世界",
      hero_description: "从阿塔卡马的滨海沙漠到寒冷的巴塔哥尼亚南部。探索无与伦比的风土、历史悠久的纯正葡萄品种、国际顶级酒评家评分与完美美食搭配。",

      stat_wines_num: "115+",
      stat_wines_label: "收录名酒",
      stat_producers_num: "29",
      stat_producers_label: "领军名庄与独立酿造者",
      stat_valleys_num: "17",
      stat_valleys_label: "法定产区 (D.O.)",
      stat_scores_num: "100",
      stat_scores_label: "JS历史满分",

      search_placeholder: "按葡萄酒名、酒庄、葡萄品种、山谷或零售商搜索...",
      filters_btn: "高级筛选",

      chip_all: "全部酒款",
      chip_icons: "🏆 膜拜名酒与膜拜级",
      chip_gran_reserva: "⭐ 特级珍藏 (Gran Reserva)",
      chip_patrimonial: "🌿 传统风土与独立酿造",
      chip_supermarket: "🛒 畅销超市与零售名品",
      chip_sparkling: "🥂 传统法起泡酒",
      chip_desert: "🌵 极限风土 / 沙漠产区",

      filter_drawer_title: "高级筛选器",
      filter_channel_lbl: "智利购买渠道",
      filter_channel_all: "所有渠道",
      filter_channel_super: "大型超市 (Jumbo, Líder)",
      filter_channel_boti: "酒类批发与专卖 (El Cielo)",
      filter_channel_spec: "精品酒窖与名庄店 (Diez, CAV, Vinoteca)",
      filter_channel_direct: "酒庄官方直营",

      filter_price_lbl: "价格区间 (智利比索 CLP)",
      filter_price_all: "所有价格",
      filter_price_under_5k: "大众实惠款 (< 5,000 CLP)",
      filter_price_5k_12k: "日常珍藏级 (5,000 – 12,000 CLP)",
      filter_price_12k_25k: "经典特级珍藏 (12,000 – 25,000 CLP)",
      filter_price_25k_60k: "高端精选级 (25,000 – 60,000 CLP)",
      filter_price_over_60k: "顶级膜拜酒 (> 60,000 CLP)",

      filter_style_lbl: "风格与类别",
      filter_style_all: "所有风格",

      filter_valley_lbl: "法定原产地 (D.O.)",
      filter_valley_all: "所有产区",

      filter_grape_lbl: "主要葡萄品种",
      filter_grape_all: "所有品种",

      filter_type_lbl: "葡萄酒类型",
      filter_type_all: "所有类型",
      filter_type_red: "红葡萄酒",
      filter_type_white: "白葡萄酒",
      filter_type_rose: "桃红葡萄酒",
      filter_type_sparkling: "起泡酒",

      filter_score_lbl: "酒评家最低评分",
      filter_score_any: "不限评分",
      filter_score_90: "90分以上 (卓越)",
      filter_score_93: "93分以上 (出类拔萃)",
      filter_score_95: "95分以上 (顶级杰作)",

      filter_organic_lbl: "仅看有机 / 生物动力法 / 自然酒",
      filter_favorites_lbl: "仅看我的收藏",
      reset_filters_btn: "重置筛选",

      results_count_suffix: "款葡萄酒",
      no_results_title: "未找到符合条件的葡萄酒",
      no_results_desc: "请尝试调整筛选条件或使用更通用的搜索词。",

      card_view_details: "查看品鉴与详情",
      card_compare: "对比",
      card_comparing: "对比中",
      card_where_buy: "购买渠道：",
      card_approx_usd: "约",

      modal_badge_photo: "📷 真实官方正品摄影",
      modal_market_price: "智利市场参考均价：",
      modal_where_title: "智利购买渠道与销售网络",
      modal_where_sub: "支持在智利各大实体店和线上渠道购买：",
      modal_online_store: "前往酒庄官网 / 在线购买",
      modal_radar_title: "感官品鉴五维雷达图",
      modal_tasting_notes_title: "品酒笔记与风味特质",
      modal_tech_title: "技术与酿造参数",
      modal_service_title: "侍酒师专业侍酒建议",
      modal_serving_temp: "侍酒温度：",
      modal_decant_time: "醒酒时间：",
      modal_glassware: "推荐酒杯：",
      modal_potential: "陈年潜力：",
      modal_pairings_title: "推荐佐餐美食搭配",
      modal_critic_scores: "世界著名酒评家权威评分",
      modal_close: "关闭",

      radar_aroma: "香气浓郁度",
      radar_body: "酒体与结构",
      radar_tannins: "单宁质感",
      radar_acidity: "酸度与张力",
      radar_finish: "余韵与回味",

      compare_bar_selected: "款已选葡萄酒对比",
      compare_bar_btn: "立即对比",
      compare_bar_clear: "清空",
      compare_modal_title: "并排专业酿酒参数对比",

      sommelier_title: "智能侍酒师与配餐顾问",
      sommelier_subtitle: "精准搭配智利与国际美食、精确计算理想饮用温度并推荐适合的品酒杯型。",

      varieties_title: "葡萄品种全书",
      varieties_subtitle: "品种起源、未经嫁接的纯正老藤基因、感官特征以及智利最佳产区风土表现。",

      scores_title: "国际酒评家评分体系指南",
      scores_subtitle: "深度解析百份制评分，了解Tim Atkin、Descorchados、James Suckling与Robert Parker的不同评价特色。",

      producers_title: "智利名庄与酒商名录",
      producers_subtitle: "百年酒庄历史、种植产区、酒庄旅游以及各酒庄的官方销售渠道。",

      toast_filters_reset: "筛选条件已重置",
      toast_compare_max: "同时最多只能对比3款葡萄酒",
      toast_lang_changed: "已切换语言",

      lang_select_lbl: "语言选择"
    },

    // =========================================================================
    // 日本語 (JAPANESE)
    // =========================================================================
    ja: {
      brand_title: "チリのテロワール",
      brand_subtitle: "チリワイン大百科事典",
      nav_catalog: "ワイン図鑑",
      nav_map: "産地マップ",
      nav_varieties: "品種アーカイブ",
      nav_sommelier: "ソムリエ＆ペアリング",
      nav_scores: "評価・メダル",
      nav_producers: "ワイナリー＆購入",
      nav_mobile_wines: "ワイン",
      nav_mobile_valleys: "産地",
      nav_mobile_grapes: "ブドウ品種",
      nav_mobile_sommelier: "ソムリエ",
      nav_mobile_scores: "評価",
      nav_mobile_producers: "ワイナリー",

      hero_badge: "世界的植物検疫の聖地 • フィロキセラ禍のない自根のブドウ古木",
      hero_title_prefix: "魅惑の ",
      hero_title_highlight: "チリワインの世界",
      hero_description: "アタカマの海岸砂漠から極寒のパタゴニア南部まで。類まれなテロワール、歴史的ブドウ品種、世界的批評家スコア、至高の料理ペアリングをご堪能ください。",

      stat_wines_num: "115+",
      stat_wines_label: "収録銘柄数",
      stat_producers_num: "29",
      stat_producers_label: "名門生産者＆MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "原産地呼称 (D.O.)",
      stat_scores_num: "100",
      stat_scores_label: "JS歴代満点評価",

      search_placeholder: "ワイン名、ワイナリー、品種、産地、店舗名で検索...",
      filters_btn: "詳細フィルター",

      chip_all: "すべてのワイン",
      chip_icons: "🏆 カルト・最高峰ワイン",
      chip_gran_reserva: "⭐ グラン・レセルバ",
      chip_patrimonial: "🌿 伝統製法＆独立生産者",
      chip_supermarket: "🛒 スーパー＆人気銘柄",
      chip_sparkling: "🥂 スパークリング",
      chip_desert: "🌵 極限テロワール / 砂漠",

      filter_drawer_title: "詳細フィルター",
      filter_channel_lbl: "チリ国内の取扱販売チャネル",
      filter_channel_all: "すべてのチャネル",
      filter_channel_super: "大手スーパー (Jumbo, Líder)",
      filter_channel_boti: "酒類卸売・専門店 (El Cielo)",
      filter_channel_spec: "ワイン専門店・カーヴ (Diez, CAV, Vinoteca)",
      filter_channel_direct: "ワイナリー直営販売",

      filter_price_lbl: "価格帯 (チリペソ CLP)",
      filter_price_all: "すべての価格帯",
      filter_price_under_5k: "デイリーお手頃 (< 5,000 CLP)",
      filter_price_5k_12k: "デイリー・レセルバ (5,000 – 12,000 CLP)",
      filter_price_12k_25k: "王道グラン・レセルバ (12,000 – 25,000 CLP)",
      filter_price_25k_60k: "プレミアム高価格帯 (25,000 – 60,000 CLP)",
      filter_price_over_60k: "カルト級至高ワイン (> 60,000 CLP)",

      filter_style_lbl: "カテゴリー・スタイル",
      filter_style_all: "すべてのスタイル",

      filter_valley_lbl: "原産地ヴァレー (D.O.)",
      filter_valley_all: "すべての産地",

      filter_grape_lbl: "主要ブドウ品種",
      filter_grape_all: "すべての品種",

      filter_type_lbl: "ワインの種類",
      filter_type_all: "すべてのタイプ",
      filter_type_red: "赤ワイン",
      filter_type_white: "白ワイン",
      filter_type_rose: "ロゼワイン",
      filter_type_sparkling: "スパークリング",

      filter_score_lbl: "専門家最低評価スコア",
      filter_score_any: "すべてのスコア",
      filter_score_90: "90点以上 (秀逸)",
      filter_score_93: "93点以上 (傑出)",
      filter_score_95: "95点以上 (至高の傑作)",

      filter_organic_lbl: "オーガニック／ビオディナミ／自然派のみ",
      filter_favorites_lbl: "お気に入りのみ",
      reset_filters_btn: "フィルターをリセット",

      results_count_suffix: "件のワインが見つかりました",
      no_results_title: "条件に一致するワインがありません",
      no_results_desc: "検索条件を変更するか、より一般的な単語で検索してください。",

      card_view_details: "詳細・テイスティング",
      card_compare: "比較する",
      card_comparing: "比較中",
      card_where_buy: "主な購入場所:",
      card_approx_usd: "約",

      modal_badge_photo: "📷 公式ボトル実写画像",
      modal_market_price: "チリ国内平均市場価格:",
      modal_where_title: "チリ国内の取扱店舗・購入先",
      modal_where_sub: "チリ国内の実店舗およびオンラインで購入可能です:",
      modal_online_store: "公式ストア・販売サイトで購入",
      modal_radar_title: "官能評価レーダーチャート",
      modal_tasting_notes_title: "テイスティングノートと風味特徴",
      modal_tech_title: "醸造・テクニカルシート",
      modal_service_title: "ソムリエのサーヴィス指針",
      modal_serving_temp: "最適温度:",
      modal_decant_time: "デキャンタージュ:",
      modal_glassware: "推奨グラス:",
      modal_potential: "熟成ポテンシャル:",
      modal_pairings_title: "おすすめの料理ペアリング",
      modal_critic_scores: "世界的権威による専門評価",
      modal_close: "閉じる",

      radar_aroma: "アロマの強さ",
      radar_body: "ボディと骨格",
      radar_tannins: "タンニンのきめ細かさ",
      radar_acidity: "酸味とフレッシュ感",
      radar_finish: "余韻の長さ",

      compare_bar_selected: "銘柄を選択中",
      compare_bar_btn: "今すぐ比較",
      compare_bar_clear: "クリア",
      compare_modal_title: "ワイン詳細スペック並行比較",

      sommelier_title: "ソムリエ・アシスタント＆サーヴィス指南",
      sommelier_subtitle: "チリ料理および世界の美食とのマリアージュ、最適提供温度とグラス選びをアドバイスします。",

      varieties_title: "ブドウ品種アーカイブ",
      varieties_subtitle: "歴史、フィロキセラ無縁の遺伝的純度、官能特性、チリにおける理想のテロワール。",

      scores_title: "世界基準のワイン評価ガイド",
      scores_subtitle: "100点満点評価の読み解き方と、ティム・アトキン、デスコルチャードス、ジェームス・サックリングらの特徴。",

      producers_title: "チリ名門ワイナリー・生産者名鑑",
      producers_subtitle: "ワイナリーの歴史、銘醸畑、ワイナリーツアー、直営オンラインショップ情報。",

      toast_filters_reset: "フィルターを初期化しました",
      toast_compare_max: "同時に比較できるワインは最大3種類までです",
      toast_lang_changed: "言語を変更しました",

      lang_select_lbl: "言語"
    },

    // =========================================================================
    // हिन्दी (HINDI)
    // =========================================================================
    hi: {
      brand_title: "चिली का टेरॉयर",
      brand_subtitle: "चिली वाइन का महान विश्वकोश",
      nav_catalog: "कैटलॉग और वाइन",
      nav_map: "घाटियाँ और मानचित्र",
      nav_varieties: "अंगूर की किस्में",
      nav_sommelier: "सोमेलियर और भोजन संगति",
      nav_scores: "रेटिंग और पदक",
      nav_producers: "वाइनरी और स्टोर",
      nav_mobile_wines: "वाइन",
      nav_mobile_valleys: "घाटियाँ",
      nav_mobile_grapes: "किस्में",
      nav_mobile_sommelier: "सोमेलियर",
      nav_mobile_scores: "रेटिंग",
      nav_mobile_producers: "वाइनरी",

      hero_badge: "वैश्विक फाइटोसैनिटरी अभयारण्य • गैर-कलमी ऐतिहासिक अंगूर की बेलें",
      hero_title_prefix: "चिली वाइन की ",
      hero_title_highlight: "अद्भुत दुनिया",
      hero_description: "अटाकामा के तटीय रेगिस्तान से लेकर ठंडे पेटागोनिया तक। अद्वितीय टेरॉयर, ऐतिहासिक अंगूर की किस्में, अंतरराष्ट्रीय विशेषज्ञों की रेटिंग और भोजन के साथ बेहतरीन संगति का अन्वेषण करें।",

      stat_wines_num: "115+",
      stat_wines_label: "कैटलॉग में वाइन",
      stat_producers_num: "29",
      stat_producers_label: "प्रमुख वाइनरी और MOVI",
      stat_valleys_num: "17",
      stat_valleys_label: "आधिकारिक D.O. घाटियाँ",
      stat_scores_num: "100",
      stat_scores_label: "ऐतिहासिक JS अंक",

      search_placeholder: "वाइन, वाइनरी, अंगूर, घाटी, दुकान से खोजें...",
      filters_btn: "विस्तृत फ़िल्टर",

      chip_all: "सभी वाइन",
      chip_icons: "🏆 आइकॉन और कल्ट वाइन",
      chip_gran_reserva: "⭐ ग्रैन रिज़र्वा",
      chip_patrimonial: "🌿 पारंपरिक और MOVI",
      chip_supermarket: "🛒 सुपरमार्केट और लोकप्रिय",
      chip_sparkling: "🥂 स्पार्कलिंग वाइन",
      chip_desert: "🌵 चरम जलवायु / रेगिस्तान",

      filter_drawer_title: "विस्तृत फ़िल्टर",
      filter_channel_lbl: "चिली में बिक्री माध्यम",
      filter_channel_all: "सभी माध्यम",
      filter_channel_super: "सुपरमार्केट (Jumbo, Líder)",
      filter_channel_boti: "थोक विक्रेता और शराब की दुकानें (El Cielo)",
      filter_channel_spec: "विशेष वाइन स्टोर (Diez, CAV, Vinoteca)",
      filter_channel_direct: "वाइनरी से सीधी बिक्री",

      filter_price_lbl: "मूल्य सीमा (चिली पेसो CLP)",
      filter_price_all: "सभी मूल्य",
      filter_price_under_5k: "किफायती (< $5,000 CLP)",
      filter_price_5k_12k: "दैनिक रिज़र्व ($5,000 – $12,000 CLP)",
      filter_price_12k_25k: "क्लासिक ग्रैन रिज़र्वा ($12,000 – $25,000 CLP)",
      filter_price_25k_60k: "प्रीमियम हाई-एंड ($25,000 – $60,000 CLP)",
      filter_price_over_60k: "कल्ट आइकॉन वाइन (> $60,000 CLP)",

      filter_style_lbl: "श्रेणी / शैली",
      filter_style_all: "सभी शैलियाँ",

      filter_valley_lbl: "उत्पत्ति की घाटी (D.O.)",
      filter_valley_all: "सभी घाटियाँ",

      filter_grape_lbl: "प्रमुख अंगूर की किस्म",
      filter_grape_all: "सभी किस्में",

      filter_type_lbl: "वाइन का प्रकार",
      filter_type_all: "सभी प्रकार",
      filter_type_red: "रेड वाइन",
      filter_type_white: "व्हाइट वाइन",
      filter_type_rose: "रोज़े वाइन",
      filter_type_sparkling: "स्पार्कलिंग वाइन",

      filter_score_lbl: "न्यूनतम विशेषज्ञ रेटिंग",
      filter_score_any: "कोई भी रेटिंग",
      filter_score_90: "90+ अंक (उत्कृष्ट)",
      filter_score_93: "93+ अंक (असाधारण)",
      filter_score_95: "95+ अंक (सर्वश्रेष्ठ)",

      filter_organic_lbl: "केवल जैविक / बायोडानेमिक / प्राकृतिक",
      filter_favorites_lbl: "केवल मेरी पसंदीदा",
      reset_filters_btn: "फ़िल्टर रीसेट करें",

      results_count_suffix: "वाइन मिलीं",
      no_results_title: "कोई वाइन नहीं मिली",
      no_results_desc: "फ़िल्टर बदलकर या अधिक सामान्य शब्दों से खोजें।",

      card_view_details: "विवरण और चखने के नोट्स",
      card_compare: "तुलना करें",
      card_comparing: "तुलना जारी",
      card_where_buy: "कहाँ से खरीदें:",
      card_approx_usd: "लगभग",

      modal_badge_photo: "📷 सत्यापित वास्तविक फ़ोटो",
      modal_market_price: "चिली के बाज़ार में औसत मूल्य:",
      modal_where_title: "चिली में उपलब्धता और स्टोर",
      modal_where_sub: "चिली में दुकानों और ऑनलाइन उपलब्ध:",
      modal_online_store: "आधिकारिक स्टोर / ऑनलाइन खरीदें",
      modal_radar_title: "संवेदी स्वाद रडार चार्ट",
      modal_tasting_notes_title: "चखने के संवेदी नोट्स",
      modal_tech_title: "तकनीकी और वाइन निर्माण विवरण",
      modal_service_title: "सोमेलियर सेवा निर्देश",
      modal_serving_temp: "परोसने का तापमान:",
      modal_decant_time: "डिकेंटिंग समय:",
      modal_glassware: "उचित ग्लास:",
      modal_potential: "सहेजने की क्षमता:",
      modal_pairings_title: "सुझाए गए भोजन संयोजन",
      modal_critic_scores: "विश्वस्तरीय आलोचकों की रेटिंग",
      modal_close: "बंद करें",

      radar_aroma: "सुगंध की तीव्रता",
      radar_body: "बॉडी और संरचना",
      radar_tannins: "टैनिन बनावट",
      radar_acidity: "ताज़गी और अम्लता",
      radar_finish: "स्वाद का ठहराव",

      compare_bar_selected: "वाइन तुलना के लिए चुनी गईं",
      compare_bar_btn: "अभी तुलना करें",
      compare_bar_clear: "हटाएं",
      compare_modal_title: "वाइन की आमने-सामने तुलना",

      sommelier_title: "स्मार्ट सोमेलियर और सेवा सलाहकार",
      sommelier_subtitle: "चिली और वैश्विक व्यंजनों के साथ वाइन का सही मेल, आदर्श तापमान और उपयुक्त ग्लास का चयन।",

      varieties_title: "अंगूर किस्मों का भंडार",
      varieties_subtitle: "इतिहास, मूल जीनोम, संवेदी विशेषताएं और चिली के टेरॉयर जहां प्रत्येक किस्म निखरती है।",

      scores_title: "रेटिंग और अंतरराष्ट्रीय आलोचक गाइड",
      scores_subtitle: "100-अंक पैमाने और टिम एटकिन, जेम्स सकलिंग, रॉबर्ट पार्कर के मूल्यांकन को समझें।",

      producers_title: "चिली वाइनरी और उत्पादक निर्देशिका",
      producers_subtitle: "इतिहास, उत्पादन घाटियाँ, वाइन पर्यटन और प्रमुख उत्पादकों के खरीद माध्यम।",

      toast_filters_reset: "फ़िल्टर रीसेट किए गए",
      toast_compare_max: "आप एक साथ अधिकतम 3 वाइन की तुलना कर सकते हैं",
      toast_lang_changed: "भाषा सफलतापूर्वक बदल दी गई",

      lang_select_lbl: "भाषा चुनें"
    }
  },

  /**
   * Obtener traducción por clave con fallback a español
   */
  t(key) {
    const lang = this.currentLang;
    if (this.translations[lang] && this.translations[lang][key] !== undefined) {
      return this.translations[lang][key];
    }
    if (this.translations.es && this.translations.es[key] !== undefined) {
      return this.translations.es[key];
    }
    return key;
  },

  /**
   * Inicializar i18n
   */
  init() {
    const saved = localStorage.getItem("terruno_lang");
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
    } else {
      // Intentar detectar idioma del navegador
      const browserLang = (navigator.language || navigator.userLanguage || "es").split("-")[0];
      if (this.translations[browserLang]) {
        this.currentLang = browserLang;
      } else {
        this.currentLang = "es";
      }
    }

    this.renderLanguageSelector();
    this.applyTranslations();
  },

  /**
   * Cambiar idioma activo
   */
  setLanguage(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("terruno_lang", lang);

    document.documentElement.lang = lang;
    this.renderLanguageSelector();
    this.applyTranslations();

    // Actualizar elementos dinámicos
    if (typeof App !== "undefined") {
      App.updateCategoryChipCounts();
      App.renderCatalog();
      if (App.activeTab === "varieties") App.renderVarieties();
      if (App.activeTab === "scores") App.renderScoresTab();
      if (App.activeTab === "producers") App.renderProducersTab();
      if (App.showToast) App.showToast(this.t("toast_lang_changed"));
    }

    // Disparar evento personalizado
    window.dispatchEvent(new CustomEvent("terruno:languageChanged", { detail: { lang } }));
  },

  /**
   * Renderizar el selector de idioma en el header
   */
  renderLanguageSelector() {
    const container = document.getElementById("language-selector-mount");
    if (!container) return;

    const current = this.languages.find((l) => l.code === this.currentLang) || this.languages[0];

    container.innerHTML = `
      <div class="lang-selector-dropdown">
        <button class="lang-selector-btn" id="lang-menu-trigger" aria-label="${this.t('lang_select_lbl')}" aria-expanded="false">
          <span class="lang-flag">${current.flag}</span>
          <span class="lang-code">${current.code.toUpperCase()}</span>
          <span class="lang-arrow">▾</span>
        </button>
        <div class="lang-dropdown-menu" id="lang-dropdown-menu">
          ${this.languages.map((l) => `
            <button class="lang-dropdown-item ${l.code === this.currentLang ? 'active' : ''}" data-lang-code="${l.code}">
              <span class="item-flag">${l.flag}</span>
              <span class="item-native">${l.native}</span>
              ${l.code === this.currentLang ? '<span class="item-check">✓</span>' : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Bindings
    const trigger = document.getElementById("lang-menu-trigger");
    const menu = document.getElementById("lang-dropdown-menu");

    if (trigger && menu) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains("show");
        if (isOpen) {
          menu.classList.remove("show");
          trigger.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("show");
          trigger.setAttribute("aria-expanded", "true");
        }
      });

      document.addEventListener("click", () => {
        menu.classList.remove("show");
        trigger.setAttribute("aria-expanded", "false");
      });

      menu.querySelectorAll(".lang-dropdown-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          const selectedCode = item.getAttribute("data-lang-code");
          this.setLanguage(selectedCode);
          menu.classList.remove("show");
        });
      });
    }
  },

  /**
   * Aplicar traducciones a todos los elementos con data-i18n
   */
  applyTranslations() {
    // 1. Textos directos
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // 2. Placeholders de inputs
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = this.t(key);
      if (translation) {
        el.placeholder = translation;
      }
    });

    // 3. Titles / Aria labels
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const translation = this.t(key);
      if (translation) {
        el.title = translation;
      }
    });
  }
};

// Exportar globalmente
if (typeof window !== "undefined") {
  window.I18n = I18n;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = I18n;
}

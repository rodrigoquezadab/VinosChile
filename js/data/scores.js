/**
 * Terruño Chileno - Sistemas de Medición, Puntajes y Medallas del Vino
 * Críticos internacionales y nacionales, escalas de puntuación, medallas y criterios enológicos.
 */
const SCORING_SYSTEMS_DATA = [
  {
    id: "descorchados",
    name: "Guía Descorchados (Patricio Tapia)",
    origin: "Chile / Sudamérica",
    scale: "Escala 100 puntos",
    description: "La guía especializada más influyente e histórica de Sudamérica, dirigida por el periodista y crítico chileno Patricio Tapia. Evalúa miles de vinos de Chile, Argentina, Brasil y Uruguay con foco en la identidad de terroir y autenticidad varietal.",
    icon: "🍷",
    categories: [
      { name: "Vino Ícono / Mejor del Año", range: "97 - 100 pts", desc: "Cumbre de la vitivinicultura sudamericana, vinos con personalidad inolvidable y gran capacidad de guarda." },
      { name: "Vino Revelación / Excepcional", range: "94 - 96 pts", desc: "Proyectos audaces, rescate de parras patrimoniales o nuevas fronteras geográficas." },
      { name: "Super Precio-Calidad", range: "90 - 93 pts", desc: "Vinos destacados de gran tipicidad y accesibilidad." }
    ],
    specialAwards: [
      "Mejor Blanco de Chile",
      "Mejor Tinto de Chile",
      "Mejor Espumante",
      "Mejor Cepa País",
      "Mejor Carménère",
      "Mejor Cabernet Sauvignon",
      "Enólogo del Año",
      "Viña Revelación"
    ]
  },
  {
    id: "tim_atkin",
    name: "Tim Atkin MW (Chile Special Report)",
    origin: "Reino Unido / Global",
    scale: "Escala 100 puntos & Clasificación Cru",
    description: "Reporte anual exhaustivo elaborado por el Master of Wine británico Tim Atkin. Clasifica anualmente a las mejores viñas de Chile bajo una jerarquía inspirada en Burdeos (First Growths chilenos).",
    icon: "🇬🇧",
    categories: [
      { name: "First Growths (Primeros Grandes Pagos)", range: "96 - 100 pts", desc: "Las bodegas y etiquetas consagradas en la cúspide mundial (Almaviva, Seña, Chadwick, Sol de Sol, etc.)." },
      { name: "Second & Third Growths", range: "93 - 95 pts", desc: "Productores de consistencia impecable y calidad superlativa." },
      { name: "Crus Bourgeois / Discovery", range: "90 - 92 pts", desc: "Vinos de excelente factura y proyectos emergentes." }
    ],
    specialAwards: [
      "Overall Wine of the Year",
      "Red Wine of the Year",
      "White Wine of the Year",
      "Winemaker of the Year",
      "Young Winemaker of the Year",
      "Legend Award"
    ]
  },
  {
    id: "james_suckling",
    name: "James Suckling (JS)",
    origin: "Estados Unidos / Hong Kong",
    scale: "Escala 100 puntos",
    description: "Uno de los críticos más influyentes a nivel comercial global. Ha calificado múltiples vinos chilenos con la máxima distinción histórica de 100 PUNTOS PERFECTOS (Viñedo Chadwick 2014, Seña 2015, Almaviva 2015/2017, Clos Apalta 2014/2015/2017).",
    icon: "⭐",
    categories: [
      { name: "100 Puntos Perfectos", range: "100 pts", desc: "Obra de arte enológica absoluta. Equilibrio, profundidad y emoción insuperables." },
      { name: "Obra Maestra (Must Buy)", range: "96 - 99 pts", desc: "Vino extraordinario que redefine su categoría." },
      { name: "Destacado Internacional", range: "92 - 95 pts", desc: "Vino con complejidad, cuerpo y gran expresión aromática." },
      { name: "Recomendado", range: "88 - 91 pts", desc: "Excelente compra cotidiana." }
    ],
    specialAwards: ["Wine of the Year Global", "Top 100 Wines of Chile"]
  },
  {
    id: "robert_parker",
    name: "Robert Parker's Wine Advocate (RP / WA)",
    origin: "Estados Unidos / Global",
    scale: "Escala 100 puntos (Luis Gutiérrez / Joaquín Hidalgo)",
    description: "La publicación de referencia que inventó el estándar moderno de 100 puntos. Sus revisores para Chile valoran especialmente la pureza del suelo, la frescura atlántica/pacífica y los vinos de mínima intervención.",
    icon: "📜",
    categories: [
      { name: "Extraordinario (Classic)", range: "96 - 100 pts", desc: "Vino de referencia mundial, profundo y longevo." },
      { name: "Sobresaliente (Outstanding)", range: "90 - 95 pts", desc: "Vino con notable complejidad y carácter de terroir." },
      { name: "Muy Bueno (Above Average)", range: "85 - 89 pts", desc: "Vino sólido sin defectos, muy disfrutable." }
    ],
    specialAwards: ["Best of Sub-Regions", "Heritage & Ancestral Highlights"]
  },
  {
    id: "decanter",
    name: "Decanter World Wine Awards (DWWA)",
    origin: "Londres, Reino Unido",
    scale: "Medallas & 100 puntos a ciegas",
    description: "El certamen de cata a ciegas más grande y riguroso del planeta. Un panel compuesto por decenas de Masters of Wine y Master Sommeliers juzga miles de muestras de todo el mundo.",
    icon: "🏅",
    categories: [
      { name: "Best in Show (Mejor del Certamen)", range: "97 - 100 pts", desc: "Solo los 50 mejores vinos del mundo absoluto en cada edición anual." },
      { name: "Medalla Platinum (Platino)", range: "97 - 100 pts", desc: "Ganadores de medalla de oro reclasificados en segunda ronda." },
      { name: "Medalla Gold (Oro)", range: "95 - 96 pts", desc: "Vinos excelentes de calidad soberbia." },
      { name: "Medalla Silver (Plata)", range: "90 - 94 pts", desc: "Vinos muy recomendados con gran balance." },
      { name: "Medalla Bronze (Bronce)", range: "86 - 89 pts", desc: "Vinos agradables y bien elaborados." }
    ],
    specialAwards: ["Regional Trophy", "Platinum Best Value"]
  },
  {
    id: "la_cav",
    name: "Guía Mesa de Cata La CAV",
    origin: "Chile",
    scale: "Escala 100 puntos (Cata a Ciegas)",
    description: "El panel de cata a ciegas permanente del Club de Amantes del Vino de Chile, integrado por destacados sommeliers y enólogos chilenos. Evalúa la totalidad del mercado local.",
    icon: "🇨🇱",
    categories: [
      { name: "Top Ícono Nacional", range: "96 - 100 pts", desc: "Los vinos más galardonados de la industria chilena." },
      { name: "Gran Medalla / Premium", range: "92 - 95 pts", desc: "Vinos con sobresaliente balance y elegancia." },
      { name: "Mejor Relación Precio/Calidad", range: "88 - 91 pts", desc: "Vinos recomendados de consumo habitual." }
    ],
    specialAwards: ["Mejor Carménère del Año", "Mejor Ensamblaje Tinto", "Mejor Vino Revelación"]
  }
];

const SCORE_INTERPRETER = {
  getQualityTier(score) {
    if (score >= 98) return { label: "Legendario / Perfección Enológica", color: "#FFD700", badge: "🌟 98-100 Pts" };
    if (score >= 95) return { label: "Sobresaliente / Calidad Suprema", color: "#E5C158", badge: "🏆 95-97 Pts" };
    if (score >= 92) return { label: "Excelente / Alta Gama", color: "#C0C0C0", badge: "✨ 92-94 Pts" };
    if (score >= 90) return { label: "Muy Bueno / Destacado", color: "#CD7F32", badge: "🍷 90-91 Pts" };
    return { label: "Bueno / Clásico", color: "#A0A0A0", badge: "🍇 85-89 Pts" };
  }
};

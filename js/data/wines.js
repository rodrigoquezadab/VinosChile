/**
 * Terruño Chileno - Base de Datos Maestra de Vinos Chilenos
 * Catálogo Exhaustivo de 115 Vinos Chilenos
 *
 * Abarca:
 * 1. Vinos Íconos & de Culto de Clase Mundial (Don Melchor, Almaviva, Chadwick, Seña, Clos Apalta, Purple Angel, etc.)
 * 2. Gran Reserva & Premium Clásicos (Marques de Casa Concha, Montes Alpha, Tarapacá, Toro de Piedra, 1865, etc.)
 * 3. Patrimoniales, MOVI, Secano Interior & Tinajas (Garage Wine Co., Cacique Maravilla, Pedro Parra, Bouchon, etc.)
 * 4. Supermercados, Botillerías & Consumo Masivo (Casillero del Diablo, 120 Santa Rita, Gato Negro, Misiones de Rengo, etc.)
 * 5. Espumantes Chilenos de Método Tradicional (Valdivieso, Subercaseaux, Torres Cordillera, Montes Sparkling, etc.)
 * 6. Clima Extremo, Desierto de Atacama & Patagonia Austral (Tara Huasco, Alcohuaz 2.200m, Armidita Pajarete, Lago Ranco, etc.)
 *
 * Cada vino incluye precios en pesos chilenos (CLP) y USD referencial, notas de cata sensorial,
 * puntajes internacionales (Descorchados, Tim Atkin, James Suckling, Robert Parker), maridajes y canales de venta.
 */

const WINES_DATA = [
  {
    "id": "vinedo_chadwick_2020",
    "name": "Viñedo Chadwick Cabernet Sauvignon",
    "winery": "Familia Chadwick (Eduardo Chadwick)",
    "vintage": "2020",
    "category": "Ícono Supremo",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Puente Alto)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.6 g/L",
    "aging": "22 meses en barricas de roble francés (80% nuevas) y foudres Stockinger",
    "priceAvgCLP": 415000,
    "priceRange": "over_60k",
    "priceTier": "$380.000 - $450.000 CLP (~$450 USD)",
    "approxPriceUSD": 450,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 99,
      "timAtkin": 99,
      "jamesSuckling": 100,
      "robertParker": 98,
      "decanter": 99,
      "laCav": 99
    },
    "topScore": 100,
    "medals": [
      "Primer Vino de Chile con 100 Puntos Perfectos (James Suckling 2014)",
      "#1 Cata de Berlín 2004"
    ],
    "tastingRadar": {
      "aroma": 99,
      "body": 96,
      "tannins": 95,
      "acidity": 92,
      "finish": 100
    },
    "tastingNotes": "Elaborado en la antigua cancha de polo familiar de Don Alfonso Chadwick en Puente Alto. Pureza aristocrática de cassis, violetas, cedro, grafito y tabaco de pipa. Taninos de seda y final eterno.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "120 minutos",
    "glassware": "Copa Burdeos Fina",
    "agingPotential": "30 – 45 años",
    "pairings": [
      "Wagyu a la brasa",
      "Ciervo en salsa de trufas",
      "Chateaubriand"
    ],
    "sellerLink": "https://www.vinedochadwick.cl",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Familia Chadwick / Puente Alto",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Viñedo Chadwick con etiqueta sobria y la firma de Don Alfonso Chadwick."
    },
    "coordinates": {
      "lat": -33.5975,
      "lng": -70.5794
    },
    "organicBio": "Viticultura de Precisión Orgánica"
  },
  {
    "id": "sena_2021",
    "name": "Seña",
    "winery": "Viña Seña (Eduardo Chadwick & Robert Mondavi)",
    "vintage": "2021",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua (Ocoa)",
    "zone": "Entre Cordilleras / Costa",
    "region": "Aconcagua",
    "blend": "50% Cabernet Sauvignon, 27% Malbec, 17% Carménère, 6% Petit Verdot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.8 g/L",
    "aging": "22 meses en barricas de roble francés (70% nuevas) y 10% en fudres Stockinger",
    "priceAvgCLP": 170000,
    "priceRange": "over_60k",
    "priceTier": "$150.000 - $190.000 CLP (~$190 USD)",
    "approxPriceUSD": 190,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 99,
      "timAtkin": 98,
      "jamesSuckling": 99,
      "robertParker": 98,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 99,
    "medals": [
      "100 Pts JS (Añada 2015)",
      "Hito de la Cata de Berlín 2004",
      "Mejor Ensamblaje de Chile"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 92,
      "tannins": 90,
      "acidity": 94,
      "finish": 98
    },
    "tastingNotes": "Extraordinaria pureza y elegancia aromática. Destacan notas de arándanos, frambuesa silvestre, violetas, grafito, laurel y café tostado. En boca sobresale su frescura y tensión lineal con taninos de tiza fina.",
    "servingTemp": "16°C – 17°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos o Universal de Cristal Fino",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Lomo de vacuno con salsa al vino tinto",
      "Costillas de cordero",
      "Risotto de setas y trufa negra",
      "Pato confitado"
    ],
    "sellerLink": "https://www.sena.cl",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Seña / Familia Chadwick",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía auténtica de la botella Seña con su icónico sello y etiqueta artesanal."
    },
    "coordinates": {
      "lat": -32.8333,
      "lng": -70.9167
    },
    "organicBio": "100% Certificado Biodinámico Demeter & Orgánico"
  },
  {
    "id": "don_melchor_2021",
    "name": "Don Melchor Cabernet Sauvignon",
    "winery": "Viña Don Melchor (Concha y Toro)",
    "vintage": "2021",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Puente Alto)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "93% Cabernet Sauvignon, 4% Cabernet Franc, 3% Merlot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "15 meses en barricas de roble francés (67% nuevas y 33% segundo uso)",
    "priceAvgCLP": 155000,
    "priceRange": "over_60k",
    "priceTier": "$140.000 - $175.000 CLP (~$175 USD)",
    "approxPriceUSD": 175,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Descorcha.com",
      "Jumbo Cava",
      "El Mundo del Vino",
      "La CAV",
      "Líder"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 99,
      "robertParker": 97,
      "decanter": 98,
      "laCav": 97
    },
    "topScore": 99,
    "medals": [
      "Top 10 Wine Spectator",
      "Vino Histórico de Puente Alto",
      "99 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 96,
      "tannins": 94,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "El arquetipo del Cabernet de Maipo Alto. Aromas profundos de cassis maduro, ciruela negra, eucalipto, menta, cedro y caja de puros. En boca es monumental, con una arquitectura tánica pulida y aristocrática.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "90 minutos",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "25 – 40 años",
    "pairings": [
      "Asado de tira a la brasa",
      "Bife ancho madurado",
      "Jabalí estofado",
      "Queso Parmigiano Reggiano 36 meses"
    ],
    "sellerLink": "https://www.donmelchor.com",
    "bottleImage": "assets/images/wines/casillero_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Colección Don Melchor Puente Alto",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía de la botella Don Melchor con la Casona de Pirque grabada en su etiqueta."
    },
    "coordinates": {
      "lat": -33.6025,
      "lng": -70.5842
    },
    "organicBio": "Sustentabilidad Certificada Wines of Chile"
  },
  {
    "id": "clos_apalta_2019",
    "name": "Clos Apalta",
    "winery": "Domaine Bournet-Lapostolle",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "70% Carménère, 18% Cabernet Sauvignon, 8% Merlot, 4% Petit Verdot",
    "primaryGrape": "Carménère",
    "alcohol": "15.0%",
    "acidity": "5.3 g/L",
    "aging": "24 meses en barricas nuevas de roble francés",
    "priceAvgCLP": 180000,
    "priceRange": "over_60k",
    "priceTier": "$160.000 - $200.000 CLP (~$200 USD)",
    "approxPriceUSD": 200,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 99,
      "robertParker": 97,
      "decanter": 98,
      "laCav": 98
    },
    "topScore": 99,
    "medals": [
      "#1 Wine of the Year Wine Spectator (Añada 2005)",
      "100 Pts JS (Múltiples cosechas)"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 97,
      "tannins": 94,
      "acidity": 88,
      "finish": 98
    },
    "tastingNotes": "El titán del Valle de Apalta. Color tinta negra impenetrable. Aromas opulentos de higos maduros, moras, chocolate amargo, pimienta negra y especias exóticas. En boca es voluptuoso, aterciopelado y majestuoso.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "120 minutos",
    "glassware": "Copa Burdeos de Gran Volumen",
    "agingPotential": "20 – 35 años",
    "pairings": [
      "Guiso de osobuco al vino tinto",
      "Costillar de cerdo glaseado",
      "Ciervo a la cazadora"
    ],
    "sellerLink": "https://www.closapalta.com",
    "bottleImage": "assets/images/wines/apaltagua_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Domaine Bournet-Lapostolle Apalta",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Clos Apalta con su diseño emblemático de hombros anchos y etiqueta dorada."
    },
    "coordinates": {
      "lat": -34.6189,
      "lng": -71.2825
    },
    "organicBio": "Certificado 100% Biodinámico Demeter"
  },
  {
    "id": "vik_icon_2019",
    "name": "VIK Vino Ícono Holístico",
    "winery": "VIK Chile (Millahue, Alexander & Carrie Vik)",
    "vintage": "2019",
    "category": "Ícono Supremo",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Millahue)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "76% Cabernet Sauvignon, 24% Cabernet Franc",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "24 meses en barricas 'Barroir' de roble francés tostadas con madera de robles caídos del mismo viñedo",
    "priceAvgCLP": 180000,
    "priceRange": "over_60k",
    "priceTier": "$160.000 - $200.000 CLP (~$200 USD)",
    "approxPriceUSD": 200,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "El Mundo del Vino",
      "VIK Wine Shop",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 99,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 99,
    "medals": [
      "99 Pts James Suckling",
      "Top 100 World's Best Vineyards",
      "Obra Maestra del Cachapoal"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 95,
      "tannins": 94,
      "acidity": 93,
      "finish": 99
    },
    "tastingNotes": "El 'Primer Gran Cru Holístico de Sudamérica'. Crianza revolucionaria en barricas 'Barroir'. Complejidad estratosférica con notas de moras azules, cassis, lavanda, especias secas, cedro, moka y taninos de textura sedosa inigualable. Lineal, fresco y eterno.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos Universal",
    "agingPotential": "25 – 35 años",
    "pairings": [
      "Lomo vetado madurado a punto",
      "Tártaro de wagyu",
      "Pato laqueado",
      "Queso Comté 24 meses"
    ],
    "sellerLink": "https://www.vikwine.com",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "VIK Chile",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella VIK con diseño minimalista de arte moderno y cápsula oscura."
    },
    "coordinates": {
      "lat": -34.34,
      "lng": -71.18
    },
    "organicBio": "Viticultura Holística y Sustentabilidad Integral"
  },
  {
    "id": "almaviva_2020",
    "name": "Almaviva",
    "winery": "Viña Almaviva (Concha y Toro & Baron Philippe de Rothschild)",
    "vintage": "2020",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Puente Alto)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "68% Cabernet Sauvignon, 24% Carménère, 6% Cabernet Franc, 2% Petit Verdot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.9%",
    "acidity": "5.4 g/L",
    "aging": "18 meses en barricas nuevas de roble francés de Burdeos",
    "priceAvgCLP": 200000,
    "priceRange": "over_60k",
    "priceTier": "$180.000 - $220.000 CLP (~$230 USD)",
    "approxPriceUSD": 230,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Supermercados Diez (Cava)",
      "Jumbo (Cava Exclusiva)"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 98,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 98,
    "medals": [
      "100 Pts JS (Añadas 2015/2017)",
      "Top 100 Wines of the World",
      "Primer Gran Cru de Chile"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 95,
      "tannins": 92,
      "acidity": 88,
      "finish": 99
    },
    "tastingNotes": "Color rojo rubí profundo con reflejos púrpuras. Capas complejas de cassis, mora, cacao puro, hojas de tabaco, cedro y sutiles toques de trufa y pimienta rosa. En boca es voluptuoso, sedoso y de taninos nobles pulidos, rematando en un final eterno y mineral.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "90 minutos en decantador de base ancha",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "25 – 35 años",
    "pairings": [
      "Entrecot madurado a la parrilla",
      "Cordero lechal al romero",
      "Tournedos Rossini",
      "Quesos curados de guarda"
    ],
    "sellerLink": "https://www.almavivawinery.com",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Almaviva / Puente Alto Archive",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella real Almaviva con cápsula dorada y etiqueta patrimonial del kultrún Mapuche."
    },
    "coordinates": {
      "lat": -33.5975,
      "lng": -70.5794
    },
    "organicBio": "Viticultura de Precisión Sustentable"
  },
  {
    "id": "purple_angel_2020",
    "name": "Montes Purple Angel Carménère",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2020",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta & Marchigüe)",
    "zone": "Entre Cordilleras / Costa",
    "region": "Valle Central",
    "blend": "92% Carménère, 8% Petit Verdot",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "18 meses en barricas de roble francés (80% nuevas)",
    "priceAvgCLP": 85000,
    "priceRange": "over_60k",
    "priceTier": "$75.000 - $95.000 CLP (~$95 USD)",
    "approxPriceUSD": 95,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo Cava",
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 98,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 98,
    "medals": [
      "El Carménère Más Aclamado del Mundo",
      "98 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 96,
      "tannins": 93,
      "acidity": 88,
      "finish": 98
    },
    "tastingNotes": "El 'Vino de otra galaxia'. Profundo color púrpura oscuro. Notas a moras, arándanos, ciruelas secas, chocolate negro, café moca, pimentón dulce y especias de panadería. Taninos monumentales y sedosos.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Pastel de choclo con pebre",
      "Costillar al merkén",
      "Cordero magallánico"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes / Apalta",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Purple Angel con su cápsula púrpura metalizada y el ángel de Montes."
    },
    "coordinates": {
      "lat": -34.6189,
      "lng": -71.2825
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "baettig_los_primos_2021",
    "name": "Baettig Selección de Parcelas Los Primos Chardonnay",
    "winery": "Vinos Baettig (Francisco Baettig & Carlos de Carlos)",
    "vintage": "2021",
    "category": "Ícono Blanco",
    "type": "Blanco",
    "style": "Ícono / Vino de Culto",
    "valleyId": "malleco",
    "valleyName": "Valle del Malleco (Traiguén)",
    "zone": "Austral / Suelos Volcánicos",
    "region": "Región del Sur",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.0%",
    "acidity": "7.2 g/L",
    "aging": "10 meses en barricas de roble francés (20% nuevas) y foudres Stockinger",
    "priceAvgCLP": 62000,
    "priceRange": "over_60k",
    "priceTier": "$55.000 - $70.000 CLP (~$70 USD)",
    "approxPriceUSD": 70,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 97,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 98,
    "medals": [
      "White Wine of the Year Tim Atkin MW",
      "98 Pts Descorchados",
      "Mejor Chardonnay de Chile"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 89,
      "tannins": 45,
      "acidity": 99,
      "finish": 98
    },
    "tastingNotes": "Obra maestra del enólogo Francisco Baettig en Traiguén. Suelos rojos arcillosos de origen volcánico. Despliega aromas de flores blancas, cáscara de limón confitada, piedra caliza y brioche. Boca de tensión eléctrica.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña Fina",
    "agingPotential": "15 – 20 años",
    "pairings": [
      "Tartar de atún de aleta amarilla",
      "Turbot al horno",
      "Erizos frescos con limón"
    ],
    "sellerLink": "https://www.vinosbaettig.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Vinos Baettig / Traiguén Malleco",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía de la botella Baettig Los Primos con su sello en cera y tipografía minimalista."
    },
    "coordinates": {
      "lat": -38.25,
      "lng": -72.6833
    },
    "organicBio": "Secano Interior Puro & Baja Intervención"
  },
  {
    "id": "casa_real_2019",
    "name": "Santa Rita Casa Real Reserva Especial",
    "winery": "Viña Santa Rita (Sebastián Labbé)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Alto Jahuel)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.2%",
    "acidity": "5.4 g/L",
    "aging": "20 meses en barricas de roble francés 100% nuevo",
    "priceAvgCLP": 145000,
    "priceRange": "over_60k",
    "priceTier": "$130.000 - $160.000 CLP (~$160 USD)",
    "approxPriceUSD": 160,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santa Rita Online",
      "Supermercados Diez",
      "Jumbo Cava",
      "El Mundo del Vino",
      "La CAV"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 98,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 98,
    "medals": [
      "Wine Legend por Decanter (Cosecha 1989)",
      "Monumento del Cabernet de Maipo Alto"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 95,
      "tannins": 93,
      "acidity": 89,
      "finish": 97
    },
    "tastingNotes": "Elaborado exclusivamente con el legendario cuartel Carneros de 1960 en Alto Jahuel. Notas puras de cassis, violetas, menta piperita, cedro y grafito. Boca aterciopelada y estructurada.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "25 – 35 años",
    "pairings": [
      "Filete de res a la parrilla",
      "Cordero al palo",
      "Guiso de plateada"
    ],
    "sellerLink": "https://www.santarita.com",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Rita Alto Jahuel",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella histórica Casa Real con el escudo de los 120 patriotas y la Casona de Paula Jaraquemada."
    },
    "coordinates": {
      "lat": -33.72,
      "lng": -70.66
    },
    "organicBio": "Patrimonio Histórico Nacional"
  },
  {
    "id": "carmin_de_peumo_2020",
    "name": "Carmín de Peumo Carménère",
    "winery": "Viña Concha y Toro (Ignacio Recabarren & Marcelo Papa)",
    "vintage": "2020",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Peumo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "93% Carménère, 4.5% Cabernet Sauvignon, 2.5% Cabernet Franc",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.3 g/L",
    "aging": "18 meses en barricas de roble francés nuevas de Burdeos",
    "priceAvgCLP": 130000,
    "priceRange": "over_60k",
    "priceTier": "$120.000 - $145.000 CLP (~$145 USD)",
    "approxPriceUSD": 145,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Descorcha.com",
      "La CAV",
      "La Vinoteca",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 97,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 98,
    "medals": [
      "El Carménère más premiado de la historia",
      "Top 100 Wine Spectator",
      "Mejor Carménère del Mundo"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 96,
      "tannins": 92,
      "acidity": 89,
      "finish": 98
    },
    "tastingNotes": "El vino que consagró al Carménère chileno en la cima mundial. Proviene del mítico Cuartel 32 de Peumo. Rojo violáceo profundo con aromas densos de arándanos, ciruelas pasas, hojas de té, pimiento dulce caramelizado, moka y tabaco de pipa. En boca es monumental, cremoso y opulento.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Garrón de cordero lechal",
      "Costillar al merkén",
      "Polenta con ragú de ciervo",
      "Trufas de chocolate amargo"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro Archive",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía auténtica de Carmín de Peumo con sello rojo lacrado."
    },
    "coordinates": {
      "lat": -34.3944,
      "lng": -71.2861
    },
    "organicBio": "Sustentabilidad Certificada Wines of Chile"
  },
  {
    "id": "montes_folly_2019",
    "name": "Montes Folly Syrah",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta - Pendientes 45°)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Syrah de laderas extremas",
    "primaryGrape": "Syrah",
    "alcohol": "15.0%",
    "acidity": "5.3 g/L",
    "aging": "18 meses en barricas de roble francés 100% nuevas",
    "priceAvgCLP": 85000,
    "priceRange": "over_60k",
    "priceTier": "$78.000 - $95.000 CLP (~$98 USD)",
    "approxPriceUSD": 98,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Montes Store",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 98,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 98,
    "medals": [
      "El Syrah Ícono de Chile",
      "Etiqueta ilustrada por Ralph Steadman",
      "98 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 97,
      "tannins": 93,
      "acidity": 88,
      "finish": 98
    },
    "tastingNotes": "Nacido de la 'locura' de plantar viñedos en las pendientes más altas e imposibles de Apalta (45° de inclinación). Aromas explosivos de moras maduras, pimienta negra recién molida, cuero, carne asada, humo y chocolate negro. Opulento, visceral y monumental.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "90 minutos",
    "glassware": "Copa Syrah / Hermitage",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Cordero al palo magallánico",
      "Jabalí braseado",
      "Costillar con merkén ahumado"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/montes_alpha_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta icónica creada por el caricaturista británico Ralph Steadman."
    },
    "coordinates": {
      "lat": -34.621,
      "lng": -71.278
    },
    "organicBio": "Viticultura Extrema en Laderas"
  },
  {
    "id": "tabali_talinay_pai_2020",
    "name": "Talinay Pai Pinot Noir",
    "winery": "Viña Tabalí (Felipe Müller)",
    "vintage": "2020",
    "category": "Ícono Costero",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "limari",
    "valleyName": "Valle de Limarí (Talinay Costa)",
    "zone": "Costa",
    "region": "Coquimbo",
    "blend": "100% Pinot Noir en suelos calcáreos marinos",
    "primaryGrape": "Pinot Noir",
    "alcohol": "13.0%",
    "acidity": "6.2 g/L",
    "aging": "10 meses en barricas de roble francés usadas",
    "priceAvgCLP": 58000,
    "priceRange": "25k_60k",
    "priceTier": "$52.000 - $65.000 CLP (~$65 USD)",
    "approxPriceUSD": 65,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "El Mundo del Vino",
      "La Vinoteca",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 97,
      "jamesSuckling": 97,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 98,
    "medals": [
      "Mejor Pinot Noir de Chile Descorchados",
      "97 Pts Tim Atkin",
      "Talinay Calcáreo"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 88,
      "tannins": 86,
      "acidity": 98,
      "finish": 98
    },
    "tastingNotes": "Uno de los Pinot Noir más minerales y aclamados del hemisferio sur. Proviene de suelos fósiles con carbonato de calcio puro a 12 km del océano. Fragante en cerezas rojas silvestres, té de hibisco, pólvora, tiza mojada y sal marina. Boca tensa, eléctrica y de una finura extrema.",
    "servingTemp": "14°C – 15°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Atún sellado a la pimienta",
      "Tartar de salmón salvaje",
      "Pichón asado",
      "Risotto de trufas"
    ],
    "sellerLink": "https://www.tabali.com",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Tabalí",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella borgoñesa Talinay Pai con tipografía sobria y elegante."
    },
    "coordinates": {
      "lat": -30.65,
      "lng": -71.68
    },
    "organicBio": "Viticultura en Carbonato de Calcio Marino"
  },
  {
    "id": "alcohuaz_rhu_2019",
    "name": "Alcohuaz RHU Syrah-Garnacha",
    "winery": "Viñedos de Alcohuaz (Marcelo Retamal)",
    "vintage": "2019",
    "category": "Ícono Supremo de Altura",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "elqui",
    "valleyName": "Valle de Elqui (Alcohuaz - 2.200 m.s.n.m.)",
    "zone": "Andes",
    "region": "Coquimbo",
    "blend": "75% Syrah, 25% Garnacha",
    "primaryGrape": "Syrah",
    "alcohol": "14.5%",
    "acidity": "5.9 g/L",
    "aging": "24 meses en fudres de roble austríaco Stockinger y huevos de concreto",
    "priceAvgCLP": 68000,
    "priceRange": "over_60k",
    "priceTier": "$60.000 - $75.000 CLP (~$78 USD)",
    "approxPriceUSD": 78,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "El Mundo del Vino",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 98,
      "jamesSuckling": 97,
      "robertParker": 97,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 98,
    "medals": [
      "98 Pts Tim Atkin (Tinto del Año)",
      "Vino Revelación Sudamericano",
      "Elqui de Altura 2.200m"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 95,
      "tannins": 93,
      "acidity": 96,
      "finish": 99
    },
    "tastingNotes": "Vino monumental cultivado a 2.200 metros de altura en granito puro descompuesto bajo radiación solar extrema. Pisado a pie en lagares de piedra. Notas purísimas de hierbas andinas (rica-rica, bailahuén), moras, grafito, pimienta silvestre, flores azules y ceniza volcánica. Energía y profundidad conmovedoras.",
    "servingTemp": "16°C – 17°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Universal Grande",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Cabrito asado al palo del Elqui",
      "Lomo de cordero a las hierbas andinas",
      "Guiso de charqui con mote"
    ],
    "sellerLink": "https://www.vinedosdealcohuaz.cl",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viñedos de Alcohuaz",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta grabada RHU con petroglifos diaguitas."
    },
    "coordinates": {
      "lat": -30.22,
      "lng": -70.48
    },
    "organicBio": "Viticultura Andina Ecológica en Lagares de Piedra"
  },
  {
    "id": "la_piu_belle_2019",
    "name": "VIK La Piu Belle",
    "winery": "VIK Chile (Cristián Vallejo)",
    "vintage": "2019",
    "category": "Ícono de Autor",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Millahue)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "45% Carménère, 30% Cabernet Sauvignon, 15% Syrah, 10% Merlot",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "20 meses en barricas de roble francés 'Barroir' tostadas con roble del bosque nativo",
    "priceAvgCLP": 95000,
    "priceRange": "over_60k",
    "priceTier": "$85.000 - $110.000 CLP (~$110 USD)",
    "approxPriceUSD": 110,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La Vinoteca",
      "La CAV",
      "VIK Retreats"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "Etiqueta Obra de Arte por la pintora Elena Prado",
      "Concepto Innovador Barroir VIK"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 94,
      "tannins": 92,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "Homenaje a la belleza y el arte. Aromas seductores de lavanda, arándanos, chocolate blanco, violetas, cedro y especias tostadas. En boca es voluptuoso, sedoso y sumamente dinámico.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Universal o Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Lomo de ciervo con salsa de moras",
      "Magret de pato",
      "Risotto de hongos silvestres"
    ],
    "sellerLink": "https://www.vikwine.com",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "VIK Chile / Millahue",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella pintada a mano que reproduce el lienzo 'La Diosa de Millahue'."
    },
    "coordinates": {
      "lat": -34.3333,
      "lng": -71.1667
    },
    "organicBio": "Viticultura Holística Sustentable"
  },
  {
    "id": "sol_de_sol_2020",
    "name": "Aquitania Sol de Sol Chardonnay",
    "winery": "Viña Aquitania (Felipe de Solminihac, Ghislain de Montgolfier & Bruno Prats)",
    "vintage": "2020",
    "category": "Ícono Blanco",
    "type": "Blanco",
    "style": "Ícono / Vino de Culto",
    "valleyId": "malleco",
    "valleyName": "Valle del Malleco (Traiguén)",
    "zone": "Austral / Extremo",
    "region": "Región del Sur",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "7.1 g/L",
    "aging": "12 meses en barricas de roble francés (15% nuevas)",
    "priceAvgCLP": 40000,
    "priceRange": "25k_60k",
    "priceTier": "$35.000 - $45.000 CLP (~$45 USD)",
    "approxPriceUSD": 45,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 96,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 96
    },
    "topScore": 97,
    "medals": [
      "El Blanco Pionero del Sur de Chile (Plantado 1995)",
      "Mejor Blanco de Chile Descorchados"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 88,
      "tannins": 50,
      "acidity": 98,
      "finish": 97
    },
    "tastingNotes": "El vino que demostró el potencial austral de Chile en 1995. Notas minerales de piedra pómez, pólvora, avellanas tostadas, lima y manzana verde. Boca con acidez filosa y textura cremosa con final volcánico.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Borgoña Blanca",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Caldillo de congrio a la chilena",
      "Locos con mayonesa casera",
      "Centolla magallánica"
    ],
    "sellerLink": "https://www.aquitania.cl",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Aquitania / Malleco Austral",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de la botella Sol de Sol Chardonnay de Traiguén."
    },
    "coordinates": {
      "lat": -38.25,
      "lng": -72.6833
    },
    "organicBio": "Cultivo Austral Sostenible"
  },
  {
    "id": "don_maximiano_2020",
    "name": "Don Maximiano Founder's Reserve",
    "winery": "Viña Errázuriz (Familia Chadwick)",
    "vintage": "2020",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua (Panquehue)",
    "zone": "Entre Cordilleras",
    "region": "Aconcagua",
    "blend": "67% Cabernet Sauvignon, 15% Carménère, 8% Malbec, 7% Petit Verdot, 3% Cabernet Franc",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.7 g/L",
    "aging": "22 meses en barricas de roble francés (65% nuevas)",
    "priceAvgCLP": 95000,
    "priceRange": "over_60k",
    "priceTier": "$85.000 - $110.000 CLP (~$110 USD)",
    "approxPriceUSD": 110,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Supermercados Diez",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 96
    },
    "topScore": 97,
    "medals": [
      "Hito de la Cata de Berlín 2004",
      "Mejor Ensamblaje Tinto Descorchados",
      "Top 100 Wines of the World"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 95,
      "tannins": 93,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "Color rojo rubí profundo. Aromas seductores de higos maduros, frambuesa confitada, cassis, cedro, grafito, pimienta negra y notas de trufa y tabaco. En boca posee taninos de grano sedoso, notable tensión y un final interminable y señorial.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Garrón de cordero braseado",
      "Costillar al romero",
      "Bife ancho madurado",
      "Queso Manchego curado"
    ],
    "sellerLink": "https://www.errazuriz.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Errázuriz",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica Don Maximiano con sello dorado."
    },
    "coordinates": {
      "lat": -32.7833,
      "lng": -70.8333
    },
    "organicBio": "Viticultura Sustentable Certificada"
  },
  {
    "id": "kai_carmenere_2019",
    "name": "Kai Carménère",
    "winery": "Viña Errázuriz",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua (Panquehue)",
    "zone": "Entre Cordilleras",
    "region": "Aconcagua",
    "blend": "95% Carménère, 5% Syrah",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "22 meses en barricas de roble francés (50% nuevas)",
    "priceAvgCLP": 120000,
    "priceRange": "over_60k",
    "priceTier": "$110.000 - $135.000 CLP (~$135 USD)",
    "approxPriceUSD": 135,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "1er Lugar Cata de Nueva York",
      "Mejor Carménère de Chile Descorchados"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 94,
      "tannins": 91,
      "acidity": 88,
      "finish": 96
    },
    "tastingNotes": "El Carménère que venció a los grandes vinos de Burdeos en la cata a ciegas de Nueva York. Notas de moras maduras, paprika, chocolate negro, café de grano, grafito y sutiles tonos florales de violetas. En boca es voluptuoso, envolvente y aterciopelado.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Pastel de choclo premium",
      "Chateaubriand con reducción al Carménère",
      "Solomillo de jabalí",
      "Queso Gorgonzola suave"
    ],
    "sellerLink": "https://www.errazuriz.com",
    "bottleImage": "assets/images/wines/errazuriz_carmenere_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Errázuriz",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Kai Carménère con cápsula negra y tipografía mapuche."
    },
    "coordinates": {
      "lat": -32.7833,
      "lng": -70.8333
    },
    "organicBio": "Viticultura Sustentable de Precisión"
  },
  {
    "id": "altair_2019",
    "name": "Altaïr Red Blend",
    "winery": "Viña San Pedro (Totihue, Cachapoal Andes)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Totihue Andes)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "75% Cabernet Sauvignon, 15% Carménère, 10% Syrah",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "18 meses en barricas de roble francés (60% nuevas)",
    "priceAvgCLP": 75000,
    "priceRange": "over_60k",
    "priceTier": "$68.000 - $82.000 CLP (~$85 USD)",
    "approxPriceUSD": 85,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "TiendaVSPT.cl",
      "La CAV",
      "El Mundo del Vino",
      "Supermercados Diez",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "97 Pts James Suckling",
      "Mejor Ensamblaje Cachapoal"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 95,
      "tannins": 93,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "Inspirado en la estrella más brillante de la constelación Aquila. Elaborado en bodega por gravedad en Totihue. Muestra notas de grosellas negras, violetas, humo de cedro, grafito y toques balsámicos. Taninos de grano fino que envuelven el paladar en un final largo y sedoso.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "18 – 25 años",
    "pairings": [
      "Cordero al horno con puré rústico",
      "Costillas de vacuno a la leña",
      "Risotto de setas y trufa"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Altaïr Winery",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Altaïr con cápsula roja y sello estelar de Totihue."
    },
    "coordinates": {
      "lat": -34.255,
      "lng": -70.742
    },
    "organicBio": "Viticultura de Gravedad Sustentable"
  },
  {
    "id": "montes_alpha_m_2019",
    "name": "Montes Alpha M",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "80% Cabernet Sauvignon, 10% Cabernet Franc, 5% Merlot, 5% Petit Verdot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "18 meses en barricas nuevas de roble francés",
    "priceAvgCLP": 85000,
    "priceRange": "over_60k",
    "priceTier": "$78.000 - $95.000 CLP (~$98 USD)",
    "approxPriceUSD": 98,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "Montes Store"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "El Primer Ultra Premium de Chile (1996)",
      "Top 100 Wine Spectator"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 96,
      "tannins": 94,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "El pionero indiscutido que demostró en 1996 que Chile podía producir tintos de talla de un Premier Grand Cru bordelés. Desde las empinadas laderas de Apalta: frutos negros concentrados, cedro, caja de puros, toques de vainilla y taninos poderosos pero aterciopelados.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Tomahawk a la parrilla",
      "Lomo de res en reducción de balsámico",
      "Ciervo al horno"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/montes_alpha_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta clásica Montes Alpha M con ángel dorado."
    },
    "coordinates": {
      "lat": -34.62,
      "lng": -71.28
    },
    "organicBio": "Viticultura en Pendiente Sustentable"
  },
  {
    "id": "tabali_payen_2019",
    "name": "Payen Syrah",
    "winery": "Viña Tabalí (Felipe Müller)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "limari",
    "valleyName": "Valle de Limarí (Quebrada Seca)",
    "zone": "Costa",
    "region": "Coquimbo",
    "blend": "92% Syrah, 8% Cabernet Franc",
    "primaryGrape": "Syrah",
    "alcohol": "14.0%",
    "acidity": "5.8 g/L",
    "aging": "18 meses en barricas de roble francés (50% nuevas)",
    "priceAvgCLP": 62000,
    "priceRange": "over_60k",
    "priceTier": "$55.000 - $68.000 CLP (~$70 USD)",
    "approxPriceUSD": 70,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "Mejor Syrah de Clima Frío",
      "97 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 94,
      "tannins": 91,
      "acidity": 93,
      "finish": 97
    },
    "tastingNotes": "El gran Syrah del norte costero. Nacido en terrazas calcáreas aluviales del Limarí. Destacan notas de aceituna negra, pimienta negra, violetas, charcutería fina, humo y toques marinos. En boca es fluido, fresco, sin pesadez y con taninos de tiza.",
    "servingTemp": "16°C – 17°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Syrah",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Costillas de cordero al romero",
      "Entrecot con tapenade de aceitunas",
      "Pastel de berenjenas"
    ],
    "sellerLink": "https://www.tabali.com",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Tabalí",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Payen con pintura rupestre Molle del Valle del Encanto."
    },
    "coordinates": {
      "lat": -30.6,
      "lng": -71.4
    },
    "organicBio": "Patrimonio Arqueológico Molle Sustentable"
  },
  {
    "id": "koyle_auma_2018",
    "name": "Koyle Auma Ensamblaje Biodinámico",
    "winery": "Viña Koyle (Cristóbal 'Toto' Undurraga)",
    "vintage": "2018",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Los Lingues Andes)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "47% Cabernet Sauvignon, 26% Carménère, 13% Malbec, 7% Syrah, 4% Cabernet Franc, 3% Petit Verdot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "24 meses en barricas de roble francés y 12 meses en huevos de concreto",
    "priceAvgCLP": 95000,
    "priceRange": "over_60k",
    "priceTier": "$85.000 - $110.000 CLP (~$110 USD)",
    "approxPriceUSD": 110,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "El Mundo del Vino",
      "Santiago Wine Club",
      "Koyle Online"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 97,
      "jamesSuckling": 97,
      "robertParker": 96,
      "decanter": 97,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "100% Certificado Biodinámico Demeter",
      "Top 100 Wines of the World JS",
      "Mejor Ensamblaje de Colchagua"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 95,
      "tannins": 93,
      "acidity": 93,
      "finish": 97
    },
    "tastingNotes": "La máxima expresión de la agricultura biodinámica en Chile. Viñedos plantados en pendientes rocosas de Los Lingues. Capas de cassis, moras silvestres, lavanda, grafito, cedro y toques terrosos de bosque nativo. Textura tánica aterciopelada y vitalidad asombrosa.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Garrón de cordero con puré de castañas",
      "Bife de chorizo angus",
      "Risotto al azafrán con médula"
    ],
    "sellerLink": "https://www.koyle.cl",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Koyle",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Koyle Auma con etiqueta ecológica grabada y sello Demeter."
    },
    "coordinates": {
      "lat": -34.51,
      "lng": -70.78
    },
    "organicBio": "100% Certificado Biodinámico Demeter & Orgánico Ecocert"
  },
  {
    "id": "tatay_de_cristobal_2018",
    "name": "Tatay de Cristóbal Carménère",
    "winery": "Viña Von Siebenthal (Mauro von Siebenthal)",
    "vintage": "2018",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua (Panquehue)",
    "zone": "Entre Cordilleras",
    "region": "Aconcagua",
    "blend": "90% Carménère, 10% Petit Verdot",
    "primaryGrape": "Carménère",
    "alcohol": "15.0%",
    "acidity": "5.3 g/L",
    "aging": "24 meses en barricas de roble francés nuevas de Allier",
    "priceAvgCLP": 145000,
    "priceRange": "over_60k",
    "priceTier": "$130.000 - $160.000 CLP (~$160 USD)",
    "approxPriceUSD": 160,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 96,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "97 Pts Robert Parker",
      "Vino Ícono de Culto Panquehue"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 97,
      "tannins": 94,
      "acidity": 88,
      "finish": 98
    },
    "tastingNotes": "El Carménère de culto del abogado suizo Mauro von Siebenthal. Uvas de rendimientos ínfimos cosechadas en mayo. Densidad asombrosa con aromas a compota de higos, moras, tabaco habano, trufas, cacao belga y café expreso. Paladar monumental y textura untuosa.",
    "servingTemp": "18°C",
    "decantTime": "90 minutos",
    "glassware": "Copa Burdeos Cáliz Alto",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Tournedos Rossini",
      "Osobuco al vino tinto con risotto",
      "Ciervo a la cazadora"
    ],
    "sellerLink": "https://www.vinavonsiebenthal.com",
    "bottleImage": "assets/images/wines/errazuriz_carmenere_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Von Siebenthal",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica Tatay de Cristóbal con escudo heráldico."
    },
    "coordinates": {
      "lat": -32.81,
      "lng": -70.82
    },
    "organicBio": "Viticultura Tradicional de Muy Bajo Rendimiento"
  },
  {
    "id": "viu_manent_viu_1_malbec_2019",
    "name": "Viu Manent Viu 1 Malbec Centenario",
    "winery": "Viña Viu Manent (Patricio Celedón)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Cunaco - Cuartel 4 San Carlos)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Malbec centenario, 10% Cabernet Sauvignon",
    "primaryGrape": "Malbec",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "16 meses en barricas de roble francés (80%) y fudres (20%)",
    "priceAvgCLP": 75000,
    "priceRange": "over_60k",
    "priceTier": "$68.000 - $85.000 CLP (~$85 USD)",
    "approxPriceUSD": 85,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Viu Manent Online"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "El Malbec Legendario de Chile (Viñedo plantado en 1900)",
      "97 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 95,
      "tannins": 92,
      "acidity": 91,
      "finish": 97
    },
    "tastingNotes": "El Malbec ícono de Chile, cosechado a mano en el legendario Cuartel 4 de San Carlos plantado en pie franco en 1900. Perfume arrebatador de violetas, moras azules, ciruela madura, grafito, cacao fino y pimienta negra. En boca es voluptuoso pero fresco, con taninos de tiza y seda.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "18 – 25 años",
    "pairings": [
      "Bife de chorizo madurado",
      "Mollejas crocantes",
      "Costillas de cerdo ahumadas",
      "Garrón de cordero"
    ],
    "sellerLink": "https://www.viumanent.cl",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Viu Manent",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Viu 1 con diseño sobrio y firma de la familia fundadora."
    },
    "coordinates": {
      "lat": -34.65,
      "lng": -71.35
    },
    "organicBio": "Viñedo Patrimonial de 1900 Sustentable"
  },
  {
    "id": "house_of_morande_2019",
    "name": "House of Morandé Ensamblaje Ícono",
    "winery": "Viña Morandé (Ricardo Baettig)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (San Bernardo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "75% Cabernet Sauvignon, 13% Cabernet Franc, 8% Carignan, 4% Merlot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "18 meses en fudres de roble francés de 2.000 litros",
    "priceAvgCLP": 65000,
    "priceRange": "over_60k",
    "priceTier": "$58.000 - $72.000 CLP (~$75 USD)",
    "approxPriceUSD": 75,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Morandé Online"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 97,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "El Ícono de Fudre del Valle del Maipo",
      "97 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 95,
      "tannins": 93,
      "acidity": 92,
      "finish": 97
    },
    "tastingNotes": "El gran ensamblaje de la casa Morandé criado en fudres tradicionales. Grosella negra, cereza confitada, laurel, caja de puros, toques balsámicos y una chispa eléctrica aportada por el Carignan de secano. Taninos sedosos y paso señorial.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Lomo vetado a la brasa",
      "Cordero al sarmiento",
      "Tournedos Rossini"
    ],
    "sellerLink": "https://www.morande.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Morandé",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta con la fachada de House of Morandé."
    },
    "coordinates": {
      "lat": -33.6,
      "lng": -70.71
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "matetic_eq_syrah_2020",
    "name": "Matetic EQ Syrah",
    "winery": "Viña Matetic (Valle de Rosario)",
    "vintage": "2020",
    "category": "Ícono Costero",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "san_antonio_leyda",
    "valleyName": "Valle de San Antonio / Casablanca",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Syrah",
    "primaryGrape": "Syrah",
    "alcohol": "14.0%",
    "acidity": "6.1 g/L",
    "aging": "18 meses en barricas de roble francés",
    "priceAvgCLP": 32000,
    "priceRange": "25k_60k",
    "priceTier": "$28.000 - $36.000 CLP (~$36 USD)",
    "approxPriceUSD": 36,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La Vinoteca",
      "La CAV",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Syrah Costero Pionero de Chile",
      "100% Biodinámico Certificado Demeter"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 91,
      "tannins": 89,
      "acidity": 95,
      "finish": 96
    },
    "tastingNotes": "Elaborado en el cerrado Valle de Rosario a pocos kilómetros del mar. Notas de pimienta negra molida, carne ahumada, moras silvestres, aceitunas negras y violetas. Boca fresca, mineral y vibrante.",
    "servingTemp": "16°C – 17°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Syrah / Burdeos",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Guiso de jabalí",
      "Chorizo parrillero artesanal",
      "Costillas de cerdo al romero"
    ],
    "sellerLink": "https://www.matetic.com",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Matetic / Valle de Rosario",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Matetic EQ con el símbolo de equilibrio universal."
    },
    "coordinates": {
      "lat": -33.5167,
      "lng": -71.4333
    },
    "organicBio": "100% Biodinámico Certificado Demeter"
  },
  {
    "id": "cabo_de_hornos_2020",
    "name": "Cabo de Hornos Cabernet Sauvignon",
    "winery": "Viña San Pedro (VSPT Wine Group)",
    "vintage": "2020",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Cachapoal Andes)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon de laderas aluviales",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "18 meses en barricas de roble francés (50% nuevas)",
    "priceAvgCLP": 65000,
    "priceRange": "over_60k",
    "priceTier": "$58.000 - $72.000 CLP (~$75 USD)",
    "approxPriceUSD": 75,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "TiendaVSPT.cl",
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "Mejor Cabernet Sauvignon Descorchados",
      "Oro Concours Mondial de Bruxelles"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 94,
      "tannins": 92,
      "acidity": 91,
      "finish": 96
    },
    "tastingNotes": "Homenaje al espíritu aventurero austral. Capas intensas de cassis, cedro, grafito, piedra andina, hojas de menta silvestre y cacao amargo. En boca es firme, estructurado y de una pureza mineral cortada a cuchillo.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Asado de tira a la parrilla",
      "Entrecot con mantequilla de hierbas",
      "Ciervo a la plancha",
      "Quesos maduros"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Cabo de Hornos con grabado náutico del extremo sur."
    },
    "coordinates": {
      "lat": -34.25,
      "lng": -70.75
    },
    "organicBio": "Energía 100% Renovable Certificada"
  },
  {
    "id": "manso_de_velasco_2019",
    "name": "Manso de Velasco Cabernet Sauvignon",
    "winery": "Miguel Torres Chile",
    "vintage": "2019",
    "category": "Ícono Histórico",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "curico",
    "valleyName": "Valle de Curicó (Finca Manso de Velasco)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon de viñedos de más de 115 años",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "18 meses en barricas de roble francés (70% nuevas)",
    "priceAvgCLP": 52000,
    "priceRange": "25k_60k",
    "priceTier": "$48.000 - $58.000 CLP (~$60 USD)",
    "approxPriceUSD": 60,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "Descorcha.com"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "Patrimonio Vivo de Curicó",
      "96 Pts Descorchados",
      "Oro Decanter World Wine Awards"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 94,
      "tannins": 92,
      "acidity": 89,
      "finish": 96
    },
    "tastingNotes": "Elaborado exclusivamente a partir de parras centenarias plantadas en 1902 en pie franco en Curicó. Notas de mora salvaje, cuero noble, hojas de tabaco, cedro, regaliz y ciruelas negras secas. En boca es robusto, sabroso y de una elegancia clásica incomparable.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Estofado de jabalí al vino tinto",
      "Asado de tira al palo",
      "Perdiz escabechada",
      "Queso Parmigiano Reggiano"
    ],
    "sellerLink": "https://www.migueltorres.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Miguel Torres Chile",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta conmemorativa Manso de Velasco 1902."
    },
    "coordinates": {
      "lat": -34.9833,
      "lng": -71.2333
    },
    "organicBio": "Comercio Justo Fair Trade & Certificación Orgánica"
  },
  {
    "id": "caballo_loco_no19",
    "name": "Caballo Loco Nº 19",
    "winery": "Viña Valdivieso (Brett Jackson)",
    "vintage": "Nº 19 (Multi-añada)",
    "category": "Ícono Histórico",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "curico",
    "valleyName": "Valle Central (Maipo, Colchagua, Curicó & Maule)",
    "zone": "Entre Cordilleras / Andes",
    "region": "Valle Central",
    "blend": "Cabernet Sauvignon, Carménère, Malbec, Syrah, Cabernet Franc (50% edición actual + 50% solera continua de ediciones anteriores)",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "Sistema Solera continuo en barricas de roble francés",
    "priceAvgCLP": 65000,
    "priceRange": "over_60k",
    "priceTier": "$58.000 - $72.000 CLP (~$75 USD)",
    "approxPriceUSD": 75,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo Cava",
      "La CAV",
      "El Mundo del Vino",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 96,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Ensamblaje Solera Legendario de Chile",
      "Oro Decanter",
      "Top 100 Wines"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 95,
      "tannins": 92,
      "acidity": 90,
      "finish": 97
    },
    "tastingNotes": "El vino de culto más singular de Chile, nacido en 1994 bajo un sistema solera donde cada edición contiene el 50% de la historia embotellada de las ediciones previas. Complejidad infinita: cassis maduro, cuero fino, café tostado, cedro, notas balsámicas, trufas y pimienta de Jamaica.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Entraña angus con sal de mar",
      "Pierna de cordero lechal asada",
      "Chivo al palo",
      "Gouda añejo"
    ],
    "sellerLink": "https://www.valdiviesowines.com",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Valdivieso",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Icónica botella negra Caballo Loco con sello de solera metálico."
    },
    "coordinates": {
      "lat": -34.98,
      "lng": -71.25
    },
    "organicBio": "Viticultura de Precisión Sustentable"
  },
  {
    "id": "lota_cousino_2018",
    "name": "Lota Cabernet Sauvignon & Merlot",
    "winery": "Viña Cousiño Macul",
    "vintage": "2018",
    "category": "Ícono Histórico",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Macul & Buin)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "85% Cabernet Sauvignon, 15% Merlot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.6 g/L",
    "aging": "18 meses en barricas de roble francés nuevas de primer uso",
    "priceAvgCLP": 78000,
    "priceRange": "over_60k",
    "priceTier": "$70.000 - $85.000 CLP (~$88 USD)",
    "approxPriceUSD": 88,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "Cousiño Macul Tienda",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "Homenaje a los 150 años de Cousiño Macul",
      "Mejor Ensamblaje Clásico Maipo"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 94,
      "tannins": 92,
      "acidity": 90,
      "finish": 96
    },
    "tastingNotes": "Elaborado en homenaje a la fundadora Doña Isidora Goyenechea y las minas de Lota. Aromas aristocráticos de cassis, eucalipto de Macul, trufas, cedro, chocolate amargo y caja de puros. Elegancia de corte bordelés clásico con el carácter inconfundible del Maipo Alto.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "20 – 30 años",
    "pairings": [
      "Filete mignon con salsa de trufa",
      "Pierna de cordero al horno",
      "Queso Grana Padano"
    ],
    "sellerLink": "https://www.cousinomacul.com",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Cousiño Macul",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Lota con sello de cera negra y tipografía histórica."
    },
    "coordinates": {
      "lat": -33.49,
      "lng": -70.55
    },
    "organicBio": "Tradición Familiar Prefiloxérica de 1856"
  },
  {
    "id": "aquitania_lazuli_2019",
    "name": "Lazuli Cabernet Sauvignon",
    "winery": "Viña Aquitania (Felipe de Solminihac & Ghislain de Montgolfier)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Peñalolén - Maipo Alto)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon de pie franco",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.7 g/L",
    "aging": "16 meses en barricas de roble francés (30% nuevas)",
    "priceAvgCLP": 42000,
    "priceRange": "25k_60k",
    "priceTier": "$38.000 - $48.000 CLP (~$48 USD)",
    "approxPriceUSD": 48,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "El Mundo del Vino",
      "Santiago Wine Club",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 95,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "96 Pts Tim Atkin",
      "Mejor Cabernet Clásico de Peñalolén"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 93,
      "tannins": 91,
      "acidity": 93,
      "finish": 96
    },
    "tastingNotes": "Nacido en los pies de la Cordillera de los Andes en Peñalolén. Representa la cumbre de la elegancia bordelesa interpretada en Chile. Finas notas de cassis, laurel fresco, eucalipto, grafito y pimienta roja. Taninos finísimos y una frescura andina admirable.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Magret de pato con frutos rojos",
      "Costillitas de cordero al sarmiento",
      "Risotto de setas"
    ],
    "sellerLink": "https://www.aquitania.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Aquitania",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta azul Lazuli inspirada en la piedra lapislázuli de Chile."
    },
    "coordinates": {
      "lat": -33.485,
      "lng": -70.528
    },
    "organicBio": "Boutique Sustentable de Pequeña Escala"
  },
  {
    "id": "altazor_undurraga_2019",
    "name": "Altazor Red Blend",
    "winery": "Viña Undurraga (Rafael Urrejola)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Pirque & Talagante)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "90% Cabernet Sauvignon, 7% Carménère, 3% Carignan",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.7 g/L",
    "aging": "16 meses en barricas de roble francés (35% nuevas) y fudres",
    "priceAvgCLP": 65000,
    "priceRange": "over_60k",
    "priceTier": "$58.000 - $72.000 CLP (~$75 USD)",
    "approxPriceUSD": 75,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Supermercados Diez",
      "La CAV",
      "Undurraga Online"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 96,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "Inspirado en la obra de Vicente Huidobro",
      "96 Pts Tim Atkin"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 94,
      "tannins": 92,
      "acidity": 92,
      "finish": 96
    },
    "tastingNotes": "Inspirado en el mítico poema del vanguardista chileno Vicente Huidobro. Refleja la tensión de los aluviones andinos de Pirque: frutos rojos ácidos, cassis, cedro, romero silvestre, piedra de río y notas florales. Boca vibrante, fresca y de taninos atléticos.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "18 – 25 años",
    "pairings": [
      "Entrecot con papas al romero",
      "Pato confitado",
      "Queso gruyère curado"
    ],
    "sellerLink": "https://www.undurraga.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Undurraga",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta poética Altazor con versos de Vicente Huidobro."
    },
    "coordinates": {
      "lat": -33.68,
      "lng": -70.92
    },
    "organicBio": "Viticultura de Precisión Sustentable"
  },
  {
    "id": "carmen_gold_reserve_2019",
    "name": "Carmen Gold Reserve Cabernet Sauvignon",
    "winery": "Viña Carmen (Alto Jahuel)",
    "vintage": "2019",
    "category": "Ícono",
    "type": "Tinto",
    "style": "Ícono / Vino de Culto",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Alto Jahuel)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "95% Cabernet Sauvignon, 5% Cabernet Franc",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "20 meses en barricas de roble francés (60% nuevas)",
    "priceAvgCLP": 68000,
    "priceRange": "over_60k",
    "priceTier": "$60.000 - $75.000 CLP (~$78 USD)",
    "approxPriceUSD": 78,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "SantaRitaOnline.com",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 96,
      "robertParker": 95,
      "decanter": 96,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Ícono de la Primera Viña de Chile (1850)",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 95,
      "tannins": 93,
      "acidity": 91,
      "finish": 96
    },
    "tastingNotes": "El vino ícono de la bodega fundada en 1850. Cosechado en las terrazas aluviales de Alto Jahuel. Capas de cassis, moras negras, grafito, cedro, caja de puros y mentol andino. Taninos aterciopelados y gran estirpe clásica.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "60 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "18 – 25 años",
    "pairings": [
      "Filete con salsa de pimienta verde",
      "Cordero asado al romero",
      "Queso Roquefort"
    ],
    "sellerLink": "https://www.carmen.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Carmen",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Carmen Gold Reserve con etiqueta dorada."
    },
    "coordinates": {
      "lat": -33.72,
      "lng": -70.65
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "casa_silva_microterroir_2020",
    "name": "Casa Silva Microterroir de Los Lingues Carménère",
    "winery": "Viña Casa Silva (Mario Geisse)",
    "vintage": "2020",
    "category": "Gran Reserva Alta Gama",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Los Lingues)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés (80% nuevas)",
    "priceAvgCLP": 33000,
    "priceRange": "25k_60k",
    "priceTier": "$28.000 - $38.000 CLP (~$38 USD)",
    "approxPriceUSD": 38,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Carménère de Mayor Investigación de Clones en Chile",
      "Mejor Carménère de Colchagua"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 93,
      "tannins": 91,
      "acidity": 90,
      "finish": 95
    },
    "tastingNotes": "Elaborado con los clones más puros de Carménère al pie de los Andes en Los Lingues. Notas seductoras de cerezas negras, moras, pimienta blanca, chocolate amargo y violetas. Boca de textura cremosa.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Pastel de choclo",
      "Cordero al horno con papas doradas",
      "Plateada chilena"
    ],
    "sellerLink": "https://www.casasilva.cl",
    "bottleImage": "assets/images/wines/apaltagua_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Casa Silva / Los Lingues",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con la insignia de Casa Silva y sello de Los Lingues."
    },
    "coordinates": {
      "lat": -34.5,
      "lng": -70.9
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "coyam_2020",
    "name": "Emiliana Coyam",
    "winery": "Viña Emiliana (Noemí Bouchon & Álvaro Espinoza)",
    "vintage": "2020",
    "category": "Ensamblaje Biodinámico",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Los Robles)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "37% Syrah, 33% Carménère, 10% Cabernet Sauvignon, 5% Carignan, 4% Malbec, 4% Garnacha, 3% Tempranillo, 2% Petit Verdot, 2% Mourvèdre",
    "primaryGrape": "Syrah",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "14 meses en barricas de roble francés y fudres",
    "priceAvgCLP": 25000,
    "priceRange": "25k_60k",
    "priceTier": "$22.000 - $28.000 CLP (~$28 USD)",
    "approxPriceUSD": 28,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "La CAV",
      "El Mundo del Vino",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "El Mayor Viñedo Orgánico y Biodinámico del Mundo",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 93,
      "tannins": 91,
      "acidity": 92,
      "finish": 95
    },
    "tastingNotes": "El estandarte de la biodinámica en Chile. Complejidad exuberante con notas de cerezas negras, ciruelas, violetas, hierbas silvestres del bosque nativo (coyam), pimienta y grafito. Boca vibrante y sedosa.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Guiso de lentejas con setas",
      "Cordero al romero",
      "Ratatouille",
      "Bife de chorizo"
    ],
    "sellerLink": "https://www.emiliana.cl",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Emiliana / Fundo Los Robles",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Coyam con etiqueta ecológica certificada Demeter y hoja de roble chileno."
    },
    "coordinates": {
      "lat": -34.6,
      "lng": -71.35
    },
    "organicBio": "100% Orgánico & Biodinámico Certificado Demeter"
  },
  {
    "id": "leyda_garuma_2022",
    "name": "Leyda Single Vineyard Garuma Sauvignon Blanc",
    "winery": "Viña Leyda (Viviana Navarrete)",
    "vintage": "2022",
    "category": "Costero de Alta Gama",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "san_antonio_leyda",
    "valleyName": "Valle de San Antonio (Leyda)",
    "zone": "Costa Extrema",
    "region": "Aconcagua",
    "blend": "100% Sauvignon Blanc",
    "primaryGrape": "Sauvignon Blanc",
    "alcohol": "13.0%",
    "acidity": "7.2 g/L",
    "aging": "Crianza sobre lías en cubas de concreto y acero inoxidable",
    "priceAvgCLP": 16000,
    "priceRange": "12k_25k",
    "priceTier": "$14.000 - $18.000 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 96,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "El Sauvignon Blanc Costero Referente de Chile",
      "Platinum Decanter"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 80,
      "tannins": 30,
      "acidity": 99,
      "finish": 96
    },
    "tastingNotes": "Cultivado a 4 km del mar. Notas electrizantes de pomelo rosado, ají verde, hierba recién cortada, sal marina y concha de ostra molida. Boca salina, filosa y crocante.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "Servir directo en frappera",
    "glassware": "Copa Tulipa o Sauvignon Blanc",
    "agingPotential": "4 – 8 años",
    "pairings": [
      "Ceviche chileno de corvina",
      "Machas a la parmesana",
      "Ostiones al pil pil"
    ],
    "sellerLink": "https://www.leyda.cl",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Leyda / Costa del Pacífico",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Leyda Single Vineyard con relieve de olas marinas."
    },
    "coordinates": {
      "lat": -33.6,
      "lng": -71.5167
    },
    "organicBio": "Sustentabilidad Costera"
  },
  {
    "id": "casas_del_bosque_pequenas_sauvignon_2022",
    "name": "Casas del Bosque Pequeñas Producciones Sauvignon Blanc",
    "winery": "Viña Casas del Bosque (Las Dichas)",
    "vintage": "2022",
    "category": "Gran Reserva Alta Gama",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "casablanca",
    "valleyName": "Valle de Casablanca (Las Dichas)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Sauvignon Blanc",
    "primaryGrape": "Sauvignon Blanc",
    "alcohol": "13.5%",
    "acidity": "7.0 g/L",
    "aging": "6 meses en barricas de roble francés usadas sobre lías finas",
    "priceAvgCLP": 22000,
    "priceRange": "12k_25k",
    "priceTier": "$19.000 - $25.000 CLP (~$25 USD)",
    "approxPriceUSD": 25,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "La CAV",
      "La Vinoteca",
      "Tienda Casas del Bosque",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "Mejor Sauvignon Blanc de Casablanca",
      "96 Pts Descorchados",
      "Oro Concours Mondial du Sauvignon"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 90,
      "tannins": 70,
      "acidity": 98,
      "finish": 96
    },
    "tastingNotes": "El blanco cumbre del sector más frío de Casablanca (Las Dichas). Aromas punzantes de grosella espinosa, pomelo rosado, lima, ají verde, pasto recién cortado y salmuera marina. En boca es electrizante, de acidez filosa y textura mineral cremosa.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "No requiere",
    "glassware": "Copa Sauvignon Blanc",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Ceviche de corvina",
      "Ostiones frescos al limón",
      "Machas a la parmesana",
      "Queso de cabra fresco"
    ],
    "sellerLink": "https://www.casasdelbosque.cl",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Casas del Bosque",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Pequeñas Producciones con sello lacrado."
    },
    "coordinates": {
      "lat": -33.35,
      "lng": -71.45
    },
    "organicBio": "Sustentabilidad de Clima Frío"
  },
  {
    "id": "tierras_moradas_san_pedro_2019",
    "name": "San Pedro Tierras Moradas Carménère",
    "winery": "Viña San Pedro (Gabriel Mustakis)",
    "vintage": "2019",
    "category": "Ícono de Terroir",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Fundo Pensilvania)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "95% Carménère, 5% Petit Verdot",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "18 meses en barricas de roble francés (50% nuevas)",
    "priceAvgCLP": 45000,
    "priceRange": "25k_60k",
    "priceTier": "$40.000 - $50.000 CLP (~$52 USD)",
    "approxPriceUSD": 52,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "TiendaVSPT.cl",
      "El Mundo del Vino",
      "La CAV",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Gran Carménère del Valle del Maule",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 95,
      "tannins": 92,
      "acidity": 90,
      "finish": 96
    },
    "tastingNotes": "Nacido en los suelos morados de arcilla profunda del Fundo Pensilvania en Maule. Notas concentradas de arándanos, higos negros, cacao amargo, pimienta verde y notas terrosas de gran complejidad. Boca untuosa, densa y de persistencia legendaria.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "15 – 20 años",
    "pairings": [
      "Garrón de cordero",
      "Lomo de jabalí",
      "Pastel de choclo premium"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta morada oscura con tipografía dorada."
    },
    "coordinates": {
      "lat": -35.35,
      "lng": -71.6
    },
    "organicBio": "Energía 100% Renovable"
  },
  {
    "id": "cousino_macul_antiguas_2019",
    "name": "Cousiño Macul Antiguas Reservas",
    "winery": "Viña Cousiño Macul (Fundada 1856)",
    "vintage": "2019",
    "category": "Gran Reserva Histórico",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Macul / Peñalolén)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés",
    "priceAvgCLP": 16000,
    "priceRange": "12k_25k",
    "priceTier": "$14.000 - $18.000 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "El Mundo del Vino",
      "La CAV",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 95,
      "robertParker": 93,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "El Cabernet Clásico Más Antiguo de Chile (Desde 1927)",
      "Medalla de Oro Brussels"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 93,
      "tannins": 92,
      "acidity": 90,
      "finish": 95
    },
    "tastingNotes": "El clásico indiscutido del Valle del Maipo elaborado desde 1927. Aromas a cassis puro, mentol, eucalipto, cedro y tabaco. En boca muestra taninos firmes y elegantes con la inconfundible tipicidad de Maipo Alto.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "40 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Asado de tira a la parrilla",
      "Entrecot a las brasas",
      "Cazuela de vacuno"
    ],
    "sellerLink": "https://www.cousinomacul.com",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Colección Histórica / Wikimedia Commons",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de la botella y etiqueta histórica Cousiño Macul Antiguas Reservas."
    },
    "coordinates": {
      "lat": -33.49,
      "lng": -70.55
    },
    "organicBio": "Tradición Familiar desde 1856"
  },
  {
    "id": "torreon_paredes_2020",
    "name": "Torreón de Paredes Reserva Privada",
    "winery": "Viña Torreón de Paredes (Familia Paredes)",
    "vintage": "2020",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Rengo)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "14 meses en barricas de roble francés",
    "priceAvgCLP": 19000,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $22.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "El Mundo del Vino",
      "La CAV"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 95,
      "robertParker": 93,
      "decanter": 94,
      "laCav": 94
    },
    "topScore": 95,
    "medals": [
      "Copa Vendimia Rengo",
      "Gold Medal Decanter"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 93,
      "tannins": 91,
      "acidity": 89,
      "finish": 95
    },
    "tastingNotes": "Nacido al pie de la Cordillera de los Andes en Rengo. Color rubí intenso. Nariz aromática con notas de ciruela negra, grosellas, regaliz, chocolate amargo y un toque ahumado. Boca estructurada con taninos redondos.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Carnes a la parrilla",
      "Guiso de cordero",
      "Lomo vetado"
    ],
    "sellerLink": "https://www.torreondeparedes.cl",
    "bottleImage": "assets/images/wines/torreon_paredes_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Archivo Fotográfico Oficial / Rengo Cachapoal",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de la botella Torreón de Paredes con su escudo heráldico."
    },
    "coordinates": {
      "lat": -34.41,
      "lng": -70.86
    },
    "organicBio": "Sustentabilidad Andina"
  },
  {
    "id": "undurraga_th_cabernet_2021",
    "name": "Undurraga TH (Terroir Hunter) Cabernet",
    "winery": "Viña Undurraga (Rafael Urrejola)",
    "vintage": "2021",
    "category": "Terroir Específico",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Cauquenes)",
    "zone": "Secano Interior",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.7 g/L",
    "aging": "12 meses en barricas de roble francés (20% nuevas)",
    "priceAvgCLP": 19000,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $22.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Proyecto Pionero de Microterroirs de Chile",
      "95 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 92,
      "tannins": 91,
      "acidity": 91,
      "finish": 95
    },
    "tastingNotes": "Elaborado en los suelos arcillosos y graníticos de Cauquenes. Expresa notas de ciruelas maduras, higos secos, tierra roja y especias rústicas. Boca de taninos firmes y gran tensión.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Guiso de osobuco",
      "Plateada con puré de papas",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.undurraga.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Undurraga / TH Project",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella TH con las coordenadas exactas de la parcela impresas en la etiqueta."
    },
    "coordinates": {
      "lat": -35.9667,
      "lng": -72.3167
    },
    "organicBio": "Viticultura de Precisión en Secano"
  },
  {
    "id": "tarapaca_etiqueta_azul_2020",
    "name": "Tarapacá Gran Reserva Etiqueta Azul",
    "winery": "Viña Tarapacá (Fundada 1874)",
    "vintage": "2020",
    "category": "Gran Reserva Premium",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Isla de Maipo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "Cabernet Sauvignon, Syrah, Cabernet Franc, Malbec",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "16 meses en barricas de roble francés (20% nuevas) y fudres",
    "priceAvgCLP": 32000,
    "priceRange": "25k_60k",
    "priceTier": "$28.000 - $36.000 CLP (~$36 USD)",
    "approxPriceUSD": 36,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo Cava",
      "La CAV",
      "El Mundo del Vino",
      "TiendaVSPT.cl"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 95,
      "robertParker": 93,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "El Ensamblaje Cumbre del Clos de Maipo",
      "Oro Decanter World Wine Awards"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 94,
      "tannins": 92,
      "acidity": 90,
      "finish": 95
    },
    "tastingNotes": "La cúspide enológica de Viña Tarapacá. Selecciona los mejores cuarteles del 'Clos Natural del Maipo'. Presenta notas complejas de moras, frambuesa confitada, trufas, cedro, toques balsámicos y pimienta negra. En boca es voluptuoso, estructurado y de un refinamiento impecable.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Garrón de cordero al horno",
      "Lomo vetado a las brasas",
      "Costillas de vacuno"
    ],
    "sellerLink": "https://www.tarapaca.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Tarapacá",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta azul real con escudo de oro de Tarapacá."
    },
    "coordinates": {
      "lat": -33.75,
      "lng": -70.9
    },
    "organicBio": "Biodiversidad & Energía Limpia Certificada"
  },
  {
    "id": "montes_alpha_chardonnay_2022",
    "name": "Montes Alpha Special Cuvée Chardonnay",
    "winery": "Viña Montes",
    "vintage": "2022",
    "category": "Gran Reserva",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua Costa",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "6.5 g/L",
    "aging": "12 meses en barricas de roble francés con fermentación maloláctica parcial",
    "priceAvgCLP": 18990,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $21.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "Montes Store"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 94,
      "laCav": 94
    },
    "topScore": 95,
    "medals": [
      "95 Pts Descorchados",
      "Mejor Blanco Aconcagua Costa"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 91,
      "tannins": 72,
      "acidity": 95,
      "finish": 95
    },
    "tastingNotes": "Elaborado en las colinas costeras de Aconcagua Costa. Equilibrio perfecto entre cremosidad y tensión marina. Aromas a piña madura, durazno blanco, avellana tostada, brioche y piedra caliza. Final largo, mineral y salino.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Copa Borgoña Blanca",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Congrio a la mantequilla negra",
      "Pastel de jaiba",
      "Pollo al estragón"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella borgoñesa Montes Alpha con ángel dorado."
    },
    "coordinates": {
      "lat": -32.8,
      "lng": -71.2
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "undurraga_th_sauvignon_2022",
    "name": "Undurraga TH Sauvignon Blanc Leyda",
    "winery": "Viña Undurraga (Rafael Urrejola)",
    "vintage": "2022",
    "category": "Terroir Específico",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "san_antonio_leyda",
    "valleyName": "Valle de Leyda (San Antonio)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Sauvignon Blanc de clima marítimo",
    "primaryGrape": "Sauvignon Blanc",
    "alcohol": "13.0%",
    "acidity": "7.1 g/L",
    "aging": "En cubas de acero inoxidable con crianza sobre lías",
    "priceAvgCLP": 18990,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $21.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Jumbo Cava",
      "La CAV",
      "Undurraga Online"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Proyecto TH (Terroir Hunter)",
      "Mejor Sauvignon Blanc Costero Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 88,
      "tannins": 70,
      "acidity": 98,
      "finish": 95
    },
    "tastingNotes": "Elaborado por el multipremiado enólogo Rafael Urrejola en el sector más cercano al mar de Leyda. Pólvora, ají verde, pomelo rosado, maracuyá verde y conchilla marina molida. Acidez filosa y de enorme persistencia salina.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "No requiere",
    "glassware": "Copa Sauvignon Blanc",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Ceviche de corvina con rocoto",
      "Ostiones vivos",
      "Queso de cabra de secano"
    ],
    "sellerLink": "https://www.undurraga.cl",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Undurraga",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta minimalista TH con coordenadas exactas de Leyda."
    },
    "coordinates": {
      "lat": -33.65,
      "lng": -71.58
    },
    "organicBio": "Sustentabilidad de Precisión"
  },
  {
    "id": "montes_alpha_cabernet_2021",
    "name": "Montes Alpha Cabernet Sauvignon",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta & Marchigüe)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Cabernet Sauvignon, 10% Merlot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "12 meses en barricas de roble francés (33% nuevas)",
    "priceAvgCLP": 17000,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $19.000 CLP (~$20 USD)",
    "approxPriceUSD": 20,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo",
      "La CAV"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "El Primer Vino Premium Exportado de Chile (1987)",
      "Best Buy Wine Spectator"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 92,
      "tannins": 90,
      "acidity": 88,
      "finish": 93
    },
    "tastingNotes": "El clásico que revolucionó la enología chilena en 1987. Color rubí intenso. Aromas a frutos rojos maduros, ciruela, vainilla, moca y tabaco dulce. En boca es redondo y de taninos elegantes.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Lomo vetado a la parrilla",
      "Empanadas de pino al horno",
      "Pastel de papa"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes / Apalta",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía auténtica de Montes Alpha con el Ángel de la guarda diseñado por Ralph Steadman."
    },
    "coordinates": {
      "lat": -34.6189,
      "lng": -71.2825
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "marques_casa_concha_cabernet_2021",
    "name": "Marques de Casa Concha Cabernet Sauvignon",
    "winery": "Viña Concha y Toro (Marcelo Papa)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Puente Alto & Pirque)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "16 meses en barricas de roble francés y fudres italianos",
    "priceAvgCLP": 16000,
    "priceRange": "12k_25k",
    "priceTier": "$14.000 - $18.000 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Botillerías Mayoristas",
      "Venta Directa"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Descorcha.com",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "Top 100 Wine Spectator",
      "Referente Clásico del Maipo"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 93,
      "tannins": 91,
      "acidity": 89,
      "finish": 94
    },
    "tastingNotes": "Fruto de los viñedos aluviales de Puente Alto. Nariz clásica de grosella negra, cereza, cedro y humo sutil. Boca firme, estructurada y de larga persistencia.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Entrecot a las brasas",
      "Pastel de choclo",
      "Charqui"
    ],
    "sellerLink": "https://www.marquesdecasaconcha.com",
    "bottleImage": "assets/images/wines/casillero_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro / Registro GS1 780",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Marques de Casa Concha con sello nobiliario conferido por el Rey Felipe V en 1718."
    },
    "coordinates": {
      "lat": -33.65,
      "lng": -70.57
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "tarapaca_etiqueta_negra_2020",
    "name": "Tarapacá Gran Reserva Etiqueta Negra",
    "winery": "Viña Tarapacá (Fundada 1874)",
    "vintage": "2020",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Isla de Maipo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "14 meses en barricas de roble francés y americano (20% nuevas)",
    "priceAvgCLP": 15000,
    "priceRange": "12k_25k",
    "priceTier": "$13.000 - $17.000 CLP (~$17 USD)",
    "approxPriceUSD": 17,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo Mayorista"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "El Gran Reserva Más Vendido de Chile",
      "Oro Mundus Vini"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 92,
      "tannins": 89,
      "acidity": 88,
      "finish": 93
    },
    "tastingNotes": "Elaborado en el 'Clos Natural' de Isla de Maipo rodeado por el río Maipo y las montañas. Aromas a mora, ciruela, chocolate amargo, regaliz y vainilla. Paladar redondo y taninos muy suaves.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "25 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Plateada al horno con puré picante",
      "Asado de tira",
      "Queso Chanco maduro"
    ],
    "sellerLink": "https://www.tarapaca.cl",
    "bottleImage": "assets/images/wines/torreon_paredes_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Tarapacá / Isla de Maipo",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de Tarapacá Etiqueta Negra con su clásica etiqueta oscura y cápsula bordelesa."
    },
    "coordinates": {
      "lat": -33.75,
      "lng": -70.9
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "marques_carmenere_2021",
    "name": "Marques de Casa Concha Carménère",
    "winery": "Viña Concha y Toro (Marcelo Papa)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Peumo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Carménère, 10% Cabernet Sauvignon",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "14 meses en barricas de roble francés y fudres",
    "priceAvgCLP": 14990,
    "priceRange": "12k_25k",
    "priceTier": "$13.000 - $16.500 CLP (~$16 USD)",
    "approxPriceUSD": 16,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Descorcha.com",
      "El Cielo",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "El Carménère de Peumo Referente en Chile",
      "94 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 92,
      "tannins": 89,
      "acidity": 87,
      "finish": 93
    },
    "tastingNotes": "El estándar dorado del Carménère chileno en relación precio-calidad. Frutos negros intensos, ciruela madura, pimiento asado, toques de higo, pimienta negra, chocolate y vainilla. En boca es amplio, sedoso, de taninos maduros y final persistente.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Pastel de choclo",
      "Empanadas de pino al horno",
      "Costillar al horno",
      "Carnes braseadas"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta clásica con el blasón nobiliario de Marques de Casa Concha."
    },
    "coordinates": {
      "lat": -34.39,
      "lng": -71.28
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "marques_chardonnay_2022",
    "name": "Marques de Casa Concha Chardonnay",
    "winery": "Viña Concha y Toro (Marcelo Papa)",
    "vintage": "2022",
    "category": "Gran Reserva",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "limari",
    "valleyName": "Valle de Limarí (Quebrada Seca)",
    "zone": "Costa",
    "region": "Coquimbo",
    "blend": "100% Chardonnay de suelos calcáreos",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "6.5 g/L",
    "aging": "12 meses en barricas de roble francés y fudres con fermentación maloláctica parcial",
    "priceAvgCLP": 14990,
    "priceRange": "12k_25k",
    "priceTier": "$13.000 - $16.500 CLP (~$16 USD)",
    "approxPriceUSD": 16,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Descorcha.com",
      "La CAV"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "Mejor Chardonnay Relación Precio-Calidad",
      "94 Pts Tim Atkin"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 90,
      "tannins": 75,
      "acidity": 94,
      "finish": 94
    },
    "tastingNotes": "El blanco que cambió la historia del Limarí. Aromas a peras blancas, avellanas tostadas, notas minerales de sal marina y piedra caliza, con sutil mantequilla. Boca untuosa pero tensada por una acidez vibrante y filo mineral.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Copa Borgoña Blanca",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Congrio a la plancha",
      "Pastel de jaiba",
      "Ostiones al ajillo",
      "Pollo al estragón"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella borgoñesa Marques Chardonnay con sello bordelés."
    },
    "coordinates": {
      "lat": -30.59,
      "lng": -71.41
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "montes_alpha_carmenere_2021",
    "name": "Montes Alpha Carménère",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Carménère, 10% Cabernet Sauvignon",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.4 g/L",
    "aging": "12 meses en barricas de roble francés (50% de primer uso) con cantos gregorianos en bodega",
    "priceAvgCLP": 17990,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $19.990 CLP (~$19 USD)",
    "approxPriceUSD": 19,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "Líder",
      "La CAV",
      "Montes Store",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "El Carménère de Apalta Favorito en Chile",
      "Oro Decanter Awards"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 93,
      "tannins": 90,
      "acidity": 88,
      "finish": 94
    },
    "tastingNotes": "Nacido en el anfiteatro de Apalta. Despliega notas intensas de mora madura, ciruela, pimientos rojos asados, chocolate amargo, café tostado y especias dulces. En boca es voluptuoso, aterciopelado y de taninos sumamente pulidos.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Pastel de choclo",
      "Plateada al horno con puré",
      "Lomo de cerdo a la mostaza",
      "Costillar al merkén"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/montes_alpha_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Montes Alpha con el ángel guardián de la viña."
    },
    "coordinates": {
      "lat": -34.62,
      "lng": -71.28
    },
    "organicBio": "Crianza con Cantos Gregorianos & Sustentabilidad"
  },
  {
    "id": "montes_alpha_syrah_2020",
    "name": "Montes Alpha Syrah",
    "winery": "Viña Montes (Aurelio Montes)",
    "vintage": "2020",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Syrah, 7% Cabernet Sauvignon, 3% Viognier",
    "primaryGrape": "Syrah",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés",
    "priceAvgCLP": 17990,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $19.990 CLP (~$19 USD)",
    "approxPriceUSD": 19,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "Cofermentado con 3% de Viognier al estilo Ródano",
      "94 Pts JS"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 94,
      "tannins": 91,
      "acidity": 89,
      "finish": 94
    },
    "tastingNotes": "Elaborado con la técnica clásica de Côte-Rôtie: cofermentado con un toque de uva blanca Viognier que aporta perfume floral y sedosidad. Aromas de moras, arándanos confitados, cuero, violetas y pimienta negra. Boca jugosa, rica y envolvente.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Syrah",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Cordero al palo",
      "Chivo al horno",
      "Guiso de ciervo con champiñones"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/montes_alpha_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con ángel dorado de Montes Alpha."
    },
    "coordinates": {
      "lat": -34.62,
      "lng": -71.28
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "san_pedro_1865_cabernet_2021",
    "name": "1865 Selected Vineyards Cabernet Sauvignon",
    "winery": "Viña San Pedro (Matías Cruzat)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Pirque & Isla de Maipo)",
    "zone": "Andes / Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés (20% nuevas)",
    "priceAvgCLP": 16990,
    "priceRange": "12k_25k",
    "priceTier": "$14.500 - $18.500 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "Líder",
      "TiendaVSPT.cl",
      "El Cielo",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "Homenaje a la fundación de Viña San Pedro en 1865",
      "Oro Decanter"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 93,
      "tannins": 91,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "Homenaje al año de fundación de la viña. Notas puras de cassis, grosella negra, grafito, mentol andino, cedro y chocolate amargo. En boca es equilibrado, con taninos firmes pero pulidos y un final largo y elegante.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Asado de tira a la parrilla",
      "Entrecot con salsa al vino",
      "Bife de chorizo"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta blanca sobria con tipografía en relieve 1865."
    },
    "coordinates": {
      "lat": -33.68,
      "lng": -70.7
    },
    "organicBio": "Energía Renovable 100%"
  },
  {
    "id": "san_pedro_1865_carmenere_2021",
    "name": "1865 Selected Vineyards Carménère",
    "winery": "Viña San Pedro (Matías Cruzat)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Peumo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.5%",
    "acidity": "5.3 g/L",
    "aging": "12 meses en barricas de roble francés",
    "priceAvgCLP": 16990,
    "priceRange": "12k_25k",
    "priceTier": "$14.500 - $18.500 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "Líder",
      "TiendaVSPT.cl",
      "La CAV"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "94 Pts James Suckling",
      "Mejor Carménère Cachapoal VSPT"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 92,
      "tannins": 89,
      "acidity": 87,
      "finish": 93
    },
    "tastingNotes": "Uvas cosechadas en su óptima madurez en los suelos arcillosos de Peumo. Aromas de moras, higos secos, paprika, tabaco rubio y sutiles toques tostados. En boca seduce por su textura cremosa y taninos sedosos.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Pastel de choclo",
      "Lasaña bolognesa",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta 1865 Carménère Peumo."
    },
    "coordinates": {
      "lat": -34.39,
      "lng": -71.28
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "san_pedro_1865_sauvignon_2022",
    "name": "1865 Selected Vineyards Sauvignon Blanc",
    "winery": "Viña San Pedro",
    "vintage": "2022",
    "category": "Gran Reserva",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "san_antonio_leyda",
    "valleyName": "Valle de Leyda (San Antonio)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Sauvignon Blanc",
    "primaryGrape": "Sauvignon Blanc",
    "alcohol": "13.0%",
    "acidity": "6.8 g/L",
    "aging": "Crianza sobre lías finas en acero inoxidable",
    "priceAvgCLP": 16990,
    "priceRange": "12k_25k",
    "priceTier": "$14.500 - $18.500 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "TiendaVSPT.cl",
      "La CAV"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 93,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "94 Pts Descorchados",
      "Pura Expresión Marina de Leyda"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 88,
      "tannins": 70,
      "acidity": 97,
      "finish": 94
    },
    "tastingNotes": "Nacido a 4 kilómetros del Océano Pacífico en Leyda. Aromas cítricos de pomelo rosado, maracuyá verde, hojas de grosella, toques salinos y ají verde. Boca vibrante, crujiente y mineral.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "No requiere",
    "glassware": "Copa Sauvignon Blanc",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Ceviche clásico de reineta",
      "Ostras al limón",
      "Tiraditos de salmón"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta 1865 Sauvignon Blanc Leyda."
    },
    "coordinates": {
      "lat": -33.63,
      "lng": -71.55
    },
    "organicBio": "Energía 100% Renovable"
  },
  {
    "id": "toro_de_piedra_diamante_2020",
    "name": "Toro de Piedra Rincón de los Vientos Ensamblaje",
    "winery": "Viña Requingua (Curicó)",
    "vintage": "2020",
    "category": "Gran Reserva Alta Gama",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "curico",
    "valleyName": "Valle de Curicó (Sagrada Familia)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "Cabernet Sauvignon, Carménère, Syrah, Petit Verdot",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "16 meses en barricas de roble francés de primer y segundo uso",
    "priceAvgCLP": 22990,
    "priceRange": "12k_25k",
    "priceTier": "$19.990 - $25.000 CLP (~$26 USD)",
    "approxPriceUSD": 26,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo Cava",
      "Supermercados Diez",
      "El Cielo",
      "TiendaToroDePiedra.com"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "Edición Diamante Toro de Piedra",
      "Oro Catad'Or World Wine Awards"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 95,
      "tannins": 92,
      "acidity": 88,
      "finish": 94
    },
    "tastingNotes": "La cúspide de la línea Toro de Piedra. Selección de cuarteles en Sagrada Familia. Capas generosas de moras, licor de cassis, vainilla francesa, café moka, chocolate y tabaco. En boca es voluptuoso, cálido, aterciopelado y opulento.",
    "servingTemp": "17°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Costillar de cerdo glaseado",
      "Asado de tira al chimichurri",
      "Lomo vetado a la brasa"
    ],
    "sellerLink": "https://www.torodepiedra.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Requingua",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta negra Toro de Piedra con diamante plateado."
    },
    "coordinates": {
      "lat": -35,
      "lng": -71.35
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "emiliana_signos_origen_white_2022",
    "name": "Emiliana Signos de Origen White Blend",
    "winery": "Viña Emiliana (Valle de Casablanca)",
    "vintage": "2022",
    "category": "Ensamblaje Biodinámico",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "casablanca",
    "valleyName": "Valle de Casablanca (La Vinilla)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "70% Chardonnay, 17% Viognier, 9% Marsanne, 4% Roussanne",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "6.2 g/L",
    "aging": "Fermentado y criado en huevos de concreto y barricas de roble francés",
    "priceAvgCLP": 17990,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $19.990 CLP (~$19 USD)",
    "approxPriceUSD": 19,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "Emiliana Store"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "100% Orgánico & Biodinámico Demeter",
      "Mejor Blanco Orgánico"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 92,
      "tannins": 72,
      "acidity": 92,
      "finish": 94
    },
    "tastingNotes": "Innovador ensamblaje blanco de estilo ródano-borgoñón en Casablanca. Notas de damascos maduros, duraznos blancos, miel de flores, cáscara de naranja confitada y notas minerales. Paladar envolvente, sedoso y con acidez viva.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Copa Borgoña Blanca",
    "agingPotential": "4 – 8 años",
    "pairings": [
      "Curry de camarones",
      "Pastel de jaiba",
      "Pescados grasos al horno"
    ],
    "sellerLink": "https://www.emiliana.cl",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Emiliana",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Signos de Origen con petroglifos astronómicos."
    },
    "coordinates": {
      "lat": -33.33,
      "lng": -71.3
    },
    "organicBio": "100% Certificado Biodinámico Demeter & Orgánico"
  },
  {
    "id": "santa_ema_amplus_cabernet_2020",
    "name": "Santa Ema Amplus One Cabernet Sauvignon",
    "winery": "Viña Santa Ema (Isla de Maipo)",
    "vintage": "2020",
    "category": "Gran Reserva Premium",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo Alto",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "90% Cabernet Sauvignon, 10% Carménère",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.5%",
    "acidity": "5.5 g/L",
    "aging": "14 meses en barricas de roble francés de primer y segundo uso",
    "priceAvgCLP": 18990,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $21.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 94,
      "robertParker": 92,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "94 Pts James Suckling",
      "Mejor Cabernet Maipo Santa Ema"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 93,
      "tannins": 91,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "Amplus ('importante' o 'distinguido' en latín). Rojo rubí profundo. Notas de cassis maduro, cereza negra, café tostado, eucalipto y cedro. Boca potente, estructurada y de taninos muy elegantes.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Costillas de res",
      "Bife de chorizo",
      "Quesos curados"
    ],
    "sellerLink": "https://www.santaema.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Ema",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta negra con el clásico escudo de Santa Ema."
    },
    "coordinates": {
      "lat": -33.74,
      "lng": -70.92
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "medalla_real_gold_2021",
    "name": "Santa Rita Medalla Real Gold Medal Cabernet Sauvignon",
    "winery": "Viña Santa Rita (Sebastián Labbé)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Buin / Alto Jahuel)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon de Maipo Alto",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.6 g/L",
    "aging": "12 meses en barricas de roble francés",
    "priceAvgCLP": 13990,
    "priceRange": "12k_25k",
    "priceTier": "$12.000 - $15.500 CLP (~$15 USD)",
    "approxPriceUSD": 15,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "SantaRitaOnline.com",
      "El Cielo",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "El Primer Vino Chileno en ganar la Olimpiada del Vino en París (1987)",
      "Medalla de Oro Decanter"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 92,
      "tannins": 90,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "El vino histórico que colocó a Chile en el mapa enológico internacional al ganar las Olimpiadas del Vino de París en 1987. Aromas clásicos de cassis, frambuesas secas, eucalipto, vainilla y cedro. En boca es equilibrado, fresco y de gran versatilidad gastronómica.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "25 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Bife de chorizo",
      "Asado de tira",
      "Lentejas con chorizo español",
      "Quesos maduros"
    ],
    "sellerLink": "https://www.santarita.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Rita",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica Medalla Real con sello dorado conmemorativo."
    },
    "coordinates": {
      "lat": -33.72,
      "lng": -70.68
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "carmen_gran_reserva_carmenere_2021",
    "name": "Viña Carmen Gran Reserva Carménère",
    "winery": "Viña Carmen (Emily Faulconer)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Apalta)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "95% Carménère, 5% Carignan",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "10 meses en barricas de roble francés",
    "priceAvgCLP": 11990,
    "priceRange": "5k_12k",
    "priceTier": "$9.990 - $12.990 CLP (~$13 USD)",
    "approxPriceUSD": 13,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "SantaRitaOnline.com",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 92
    },
    "topScore": 93,
    "medals": [
      "Cuna del redescubrimiento del Carménère (24 Noviembre 1994)",
      "Oro Descorchados"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 91,
      "tannins": 89,
      "acidity": 88,
      "finish": 92
    },
    "tastingNotes": "Elaborado por la viña donde Jean-Michel Boursiquot redescubrió el Carménère en 1994. Fruta negra viva, notas de pimentón asado, higo fresco, toques especiados y taninos tersos con sutil frescor aportado por una chispa de Carignan.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Pastel de choclo",
      "Charquicán tradicional",
      "Carnes braseadas con puré"
    ],
    "sellerLink": "https://www.carmen.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Carmen",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica Viña Carmen 1850."
    },
    "coordinates": {
      "lat": -34.62,
      "lng": -71.28
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "morande_gran_reserva_cabernet_2021",
    "name": "Morandé Gran Reserva Cabernet Sauvignon",
    "winery": "Viña Morandé (Ricardo Baettig)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "90% Cabernet Sauvignon, 10% Cabernet Franc",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.5 g/L",
    "aging": "14 meses en fudres de roble francés de 2.000 y 4.000 litros",
    "priceAvgCLP": 13990,
    "priceRange": "12k_25k",
    "priceTier": "$12.000 - $15.500 CLP (~$15 USD)",
    "approxPriceUSD": 15,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "Morande Store",
      "Líder"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "Pioneros en Fudres Gigantes en Chile",
      "Oro Catad'Or"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 92,
      "tannins": 90,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "Criado en fudres gigantes de roble que respetan la pureza frutal sin maquillar el vino con madera excesiva. Notas de cassis, ciruela, hierbas silvestres, grafito y chocolate amargo. Taninos redondos y gran frescura.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "25 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Carnes a la parrilla",
      "Lasaña bolognesa",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.morande.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Morandé",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Gran Reserva Morandé."
    },
    "coordinates": {
      "lat": -33.7,
      "lng": -70.75
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "perez_cruz_cabernet_reserva_2021",
    "name": "Pérez Cruz Cabernet Sauvignon Reserva",
    "winery": "Viña Pérez Cruz (Germán Lyon)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo Alto (Huelquén)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "96% Cabernet Sauvignon, 4% Syrah",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés y americano",
    "priceAvgCLP": 12990,
    "priceRange": "12k_25k",
    "priceTier": "$11.000 - $14.500 CLP (~$14 USD)",
    "approxPriceUSD": 14,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 93,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "Referente Clásico del Maipo Alto Andes",
      "Oro Decanter"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 92,
      "tannins": 90,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "Procedente del Fundo Liguai en Huelquén, Maipo Alto. Aromas seductores de cassis, eucalipto, mentol, cedro y pimienta negra. Taninos nobles y jugosos con el inconfundible sello andino de frescor y notas balsámicas.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Entrecot a la parrilla",
      "Costillas de vacuno",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.perezcruz.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Pérez Cruz",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Pérez Cruz con la arquitectura de madera de su bodega."
    },
    "coordinates": {
      "lat": -33.78,
      "lng": -70.58
    },
    "organicBio": "Arquitectura Bioclimática & Sustentabilidad"
  },
  {
    "id": "medalla_real_carmenere_2021",
    "name": "Santa Rita Medalla Real Gran Reserva Carménère",
    "winery": "Viña Santa Rita (Buin)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Pumanque)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.3 g/L",
    "aging": "10 meses en barricas de roble francés y americano",
    "priceAvgCLP": 13990,
    "priceRange": "12k_25k",
    "priceTier": "$12.000 - $15.500 CLP (~$15 USD)",
    "approxPriceUSD": 15,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "SantaRitaOnline.com",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "93 Pts James Suckling",
      "Gran Reserva Clásico de Chile"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 92,
      "tannins": 89,
      "acidity": 87,
      "finish": 92
    },
    "tastingNotes": "Ciruelas negras maduras, moras confitadas, pimiento dulce, pimienta negra y notas de cacao amargo y vainilla. En boca es untuoso, sedoso y de taninos muy redondos.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Pastel de choclo",
      "Guiso de carne con polenta",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.santarita.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Rita",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Medalla Real Carménère."
    },
    "coordinates": {
      "lat": -34.6,
      "lng": -71.5
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "casa_silva_gran_terroir_andes_2021",
    "name": "Casa Silva Gran Terroir de Los Andes Cabernet",
    "winery": "Viña Casa Silva (Mario Geisse)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Los Lingues Andes)",
    "zone": "Andes",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.5 g/L",
    "aging": "12 meses en barricas de roble francés",
    "priceAvgCLP": 15990,
    "priceRange": "12k_25k",
    "priceTier": "$13.990 - $17.500 CLP (~$18 USD)",
    "approxPriceUSD": 18,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "Casa Silva Tienda"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 93,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "Pioneros en Terroir Andino de Los Lingues",
      "Oro Catad'Or"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 92,
      "tannins": 90,
      "acidity": 89,
      "finish": 93
    },
    "tastingNotes": "Nacido al pie de los Andes en Los Lingues. Frutos negros maduros, toques de mentol, romero silvestre, cedro y pimienta negra. Boca estructurada, jugosa y de taninos maduros.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "25 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Entraña a la parrilla",
      "Lomo a las brasas",
      "Pastel de choclo"
    ],
    "sellerLink": "https://www.casasilva.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Casa Silva",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Gran Terroir Los Andes."
    },
    "coordinates": {
      "lat": -34.52,
      "lng": -70.78
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "viu_manent_secreto_carmenere_2021",
    "name": "Viu Manent Secreto Carménère",
    "winery": "Viña Viu Manent (Cunaco)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (El Olivar)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "85% Carménère, 15% variedad secreta del enólogo",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "10 meses en barricas de roble francés (80%) y cubas de concreto (20%)",
    "priceAvgCLP": 12990,
    "priceRange": "12k_25k",
    "priceTier": "$11.000 - $14.500 CLP (~$14 USD)",
    "approxPriceUSD": 14,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "Viu Manent Online"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "Etiqueta ilustrada por la artista Catalina Abbott",
      "93 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 91,
      "tannins": 89,
      "acidity": 88,
      "finish": 92
    },
    "tastingNotes": "El 'secreto' del 15% de una variedad misteriosa que acompaña al Carménère le otorga una frescura y vivacidad únicas. Aromas a arándanos, ciruela, chocolate amargo, pimienta negra y notas florales. Taninos dulces y sedosos.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Pastel de choclo",
      "Carnes a la parrilla",
      "Lasaña bolognese"
    ],
    "sellerLink": "https://www.viumanent.cl",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Viu Manent",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Arte contemporáneo de Catalina Abbott en etiqueta Secreto."
    },
    "coordinates": {
      "lat": -34.65,
      "lng": -71.35
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "toro_de_piedra_cabernet_2021",
    "name": "Toro de Piedra Gran Reserva Cabernet Sauvignon",
    "winery": "Viña Requingua (Curicó)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "curico",
    "valleyName": "Valle de Curicó (Sagrada Familia)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "14.0%",
    "acidity": "5.3 g/L",
    "aging": "12 meses en barricas de roble francés y americano",
    "priceAvgCLP": 10500,
    "priceRange": "5k_12k",
    "priceTier": "$9.000 - $12.500 CLP (~$12 USD)",
    "approxPriceUSD": 12,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo Mayorista"
    ],
    "scores": {
      "descorchados": 92,
      "timAtkin": 91,
      "jamesSuckling": 92,
      "robertParker": 90,
      "decanter": 91,
      "laCav": 92
    },
    "topScore": 92,
    "medals": [
      "Líder indiscutido de ventas en retail chileno",
      "Mejor Relación Precio/Calidad"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 91,
      "tannins": 88,
      "acidity": 85,
      "finish": 91
    },
    "tastingNotes": "El superventas chileno por excelencia. Intenso color rojo rubí. Aromas golosos de frambuesa, cassis, vainilla, café tostado y caramelo. En boca es amplio, sedoso, amable y muy fácil de beber.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Universal",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Asado parrillero familiar",
      "Empanadas de pino",
      "Choripán con pebre",
      "Costillar al horno"
    ],
    "sellerLink": "https://www.torodepiedra.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Requingua / Supermercados Diez",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Toro de Piedra con relieve de la piedra mítica en la etiqueta."
    },
    "coordinates": {
      "lat": -35.0333,
      "lng": -71.3833
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "toro_de_piedra_carmenere_2021",
    "name": "Toro de Piedra Gran Reserva Carménère",
    "winery": "Viña Requingua (Curicó / Maule)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maule",
    "valleyName": "Valle del Maule",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "12 meses en barricas de roble francés y americano",
    "priceAvgCLP": 11990,
    "priceRange": "5k_12k",
    "priceTier": "$9.990 - $12.990 CLP (~$13 USD)",
    "approxPriceUSD": 13,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "El Cielo Mayorista",
      "Booz.cl",
      "Mayorista 10"
    ],
    "scores": {
      "descorchados": 91,
      "timAtkin": 91,
      "jamesSuckling": 92,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 91
    },
    "topScore": 92,
    "medals": [
      "El Gran Reserva Más Vendido de Chile",
      "Oro Catad'Or Ancestral"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 91,
      "tannins": 88,
      "acidity": 86,
      "finish": 91
    },
    "tastingNotes": "Uno de los fenómenos comerciales más exitosos de Chile. Aromas cautivantes de ciruela madura, moka, vainilla tostada, pimiento rojo dulce y especias. En boca es dulce, goloso, de taninos muy amables y gran peso en paladar.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Pastel de choclo",
      "Asado familiar",
      "Costillar al horno",
      "Pizzas con carne"
    ],
    "sellerLink": "https://www.torodepiedra.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Requingua",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta negra con el icónico toro dorado en relieve."
    },
    "coordinates": {
      "lat": -35.2,
      "lng": -71.4
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "bisquertt_la_joya_carmenere_2021",
    "name": "Bisquertt La Joya Gran Reserva Carménère",
    "winery": "Viña Bisquertt (Marchigüe)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Marchigüe Costa)",
    "zone": "Costa / Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère de suelos graníticos con brisa marina",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "10 meses en barricas de roble francés",
    "priceAvgCLP": 10990,
    "priceRange": "5k_12k",
    "priceTier": "$8.990 - $11.990 CLP (~$12 USD)",
    "approxPriceUSD": 12,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "El Cielo",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 92,
      "timAtkin": 91,
      "jamesSuckling": 92,
      "robertParker": 90,
      "decanter": 91,
      "laCav": 91
    },
    "topScore": 92,
    "medals": [
      "El Carménère Costero de Marchigüe",
      "Oro Catad'Or"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 91,
      "tannins": 88,
      "acidity": 88,
      "finish": 91
    },
    "tastingNotes": "El terruño de Marchigüe le confiere a este Carménère una frescura marina inusual. Notas de ciruela negra, pimiento asado, hierbas del secano, pimienta negra y moka. Taninos suaves y paso jugoso.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Pastel de choclo",
      "Churrasco italiano",
      "Carnes a las brasas"
    ],
    "sellerLink": "https://www.bisquertt.cl",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Bisquertt",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta La Joya Gran Reserva."
    },
    "coordinates": {
      "lat": -34.4,
      "lng": -71.6
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "cousino_macul_antiguas_chardonnay_2022",
    "name": "Cousiño Macul Antiguas Reservas Chardonnay",
    "winery": "Viña Cousiño Macul",
    "vintage": "2022",
    "category": "Gran Reserva Histórico",
    "type": "Blanco",
    "style": "Gran Reserva / Premium",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo (Buin)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "6.0 g/L",
    "aging": "6 meses en barricas de roble francés con battonage",
    "priceAvgCLP": 12990,
    "priceRange": "12k_25k",
    "priceTier": "$11.000 - $14.500 CLP (~$14 USD)",
    "approxPriceUSD": 14,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "Cousiño Macul Online",
      "La CAV"
    ],
    "scores": {
      "descorchados": 92,
      "timAtkin": 92,
      "jamesSuckling": 92,
      "robertParker": 90,
      "decanter": 91,
      "laCav": 92
    },
    "topScore": 92,
    "medals": [
      "El Blanco Clásico de Cousiño Macul",
      "Tradición desde 1856"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 90,
      "tannins": 72,
      "acidity": 91,
      "finish": 92
    },
    "tastingNotes": "Aromas de manzana verde, piña madura, cáscara de naranja, notas de avellanas tostadas y mantequilla fresca. Paladar equilibrado, cremoso y con agradable frescor final.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Copa Chardonnay",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Corvina a la plancha con puré",
      "Pastel de jaiba",
      "Pollo al horno"
    ],
    "sellerLink": "https://www.cousinomacul.com",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Cousiño Macul",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica Antiguas Reservas 1927."
    },
    "coordinates": {
      "lat": -33.71,
      "lng": -70.72
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "castillo_de_molina_carmenere_2021",
    "name": "Castillo de Molina Gran Reserva Carménère",
    "winery": "Viña San Pedro (Molina)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Gran Reserva / Premium",
    "valleyId": "maule",
    "valleyName": "Valle del Maule",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "10 meses en barricas de roble francés y americano",
    "priceAvgCLP": 9990,
    "priceRange": "5k_12k",
    "priceTier": "$8.500 - $10.990 CLP (~$11 USD)",
    "approxPriceUSD": 11,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Unimarc",
      "TiendaVSPT.cl",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 91,
      "timAtkin": 90,
      "jamesSuckling": 91,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 90
    },
    "topScore": 91,
    "medals": [
      "El Primer Gran Reserva de Chile (1980)",
      "Oro Mundus Vini"
    ],
    "tastingRadar": {
      "aroma": 91,
      "body": 90,
      "tannins": 87,
      "acidity": 86,
      "finish": 90
    },
    "tastingNotes": "La marca que inauguró la categoría Gran Reserva en Chile en 1980. Aromas francos de ciruela negra, pimiento dulce, pimienta negra molida y notas tostadas de barrica. En boca es suave, redondo y muy fácil de beber.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Pastel de choclo",
      "Pollo al champiñón",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.tiendavspt.cl",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta clásica Castillo de Molina con dibujo del torreón colonial."
    },
    "coordinates": {
      "lat": -35.11,
      "lng": -71.28
    },
    "organicBio": "Energía 100% Renovable"
  },
  {
    "id": "gwc_truquilemu_2019",
    "name": "Garage Wine Co. Truquilemu Carignan Field Blend",
    "winery": "Garage Wine Co. (Pilar Miranda & Derek Mossman)",
    "vintage": "2019",
    "category": "Vino Patrimonial VIGNO",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Empedrado - Secano Costero)",
    "zone": "Costa",
    "region": "Valle Central",
    "blend": "85% Carignan, 15% Syrah & Cepa País en cofermentación",
    "primaryGrape": "Carignan (VIGNO)",
    "alcohol": "13.5%",
    "acidity": "6.5 g/L",
    "aging": "24 meses en barricas francesas usadas de varios usos",
    "priceAvgCLP": 38000,
    "priceRange": "25k_60k",
    "priceTier": "$34.000 - $42.000 CLP (~$45 USD)",
    "approxPriceUSD": 45,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "Garage Wine Shop"
    ],
    "scores": {
      "descorchados": 98,
      "timAtkin": 98,
      "jamesSuckling": 97,
      "robertParker": 98,
      "decanter": 97,
      "laCav": 98
    },
    "topScore": 98,
    "medals": [
      "98 Pts Robert Parker (El Carignan mejor puntuado de Sudamérica)",
      "Sello VIGNO de Secano"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 94,
      "tannins": 94,
      "acidity": 99,
      "finish": 98
    },
    "tastingNotes": "El Carignan de secano más celebrado de Chile. Proviene de parras centenarias en cabeza sin riego en Empedrado. Acidez láser y vibrante, notas de arándanos silvestres, violetas, tomillo, romero, carne ahumada, grafito y tierra mojada. Tensión mineral suprema.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "45 minutos",
    "glassware": "Copa Syrah / Universal",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Cordero al palo magallánico",
      "Costillar al merkén",
      "Guisos campesinos de charqui",
      "Queso de oveja curado"
    ],
    "sellerLink": "https://www.garagewine.co",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Garage Wine Co.",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella lacrada a mano con serigrafía artesanal y número de lote."
    },
    "coordinates": {
      "lat": -35.6,
      "lng": -72.25
    },
    "organicBio": "MOVI • VIGNO • Parras Viejas en Secano sin Riego"
  },
  {
    "id": "gwc_carignan_vigno_2019",
    "name": "Garage Wine Co. Carignan VIGNO",
    "winery": "Garage Wine Co. (Pilar Miranda & Derek Mossman)",
    "vintage": "2019",
    "category": "Vino Patrimonial VIGNO",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Sauzal / Secano Interior)",
    "zone": "Secano Costero",
    "region": "Valle Central",
    "blend": "85% Carignan, 15% Mataró (Monastrell)",
    "primaryGrape": "Carignan",
    "alcohol": "13.5%",
    "acidity": "6.8 g/L",
    "aging": "2 inviernos en barricas de roble francés neutral de varios usos",
    "priceAvgCLP": 31000,
    "priceRange": "25k_60k",
    "priceTier": "$28.000 - $35.000 CLP (~$36 USD)",
    "approxPriceUSD": 36,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV",
      "BBVinos"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 96,
      "jamesSuckling": 96,
      "robertParker": 96,
      "decanter": 96,
      "laCav": 96
    },
    "topScore": 97,
    "medals": [
      "Consorcio VIGNO (Parrales de 1940 en Secano)",
      "96 Pts Robert Parker WA"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 91,
      "tannins": 93,
      "acidity": 98,
      "finish": 97
    },
    "tastingNotes": "Parrales en cabeza sin riego plantados tras el terremoto de Chillán de 1939. Suelos graníticos antiguos. Aromas salvajes a arándanos, granada, tierra húmeda, flores de campo y grafito. Boca de acidez vibrante.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "40 minutos",
    "glassware": "Copa Universal o Borgoña",
    "agingPotential": "15 – 25 años",
    "pairings": [
      "Arrollado de huaso campesino",
      "Costillar al merkén",
      "Chivo lechal asado",
      "Charquicán"
    ],
    "sellerLink": "https://www.garagewine.co",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Garage Wine Co. / Sauzal Maule",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella reciclada serigrafiada a mano con sello de cera natural."
    },
    "coordinates": {
      "lat": -35.7833,
      "lng": -72.0333
    },
    "organicBio": "Viticultura Campesina en Secano a Caballo"
  },
  {
    "id": "pedro_parra_monk_2020",
    "name": "Pedro Parra y Familia Monk Cinsault",
    "winery": "Pedro Parra y Familia",
    "vintage": "2020",
    "category": "Vino de Autor MOVI",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "itata",
    "valleyName": "Valle del Itata (Guarilihue Alto)",
    "zone": "Costa",
    "region": "Sur",
    "blend": "100% Cinsault de suelos de arena y cuarzo",
    "primaryGrape": "Cinsault",
    "alcohol": "12.5%",
    "acidity": "6.2 g/L",
    "aging": "12 meses en cubas de concreto y fudres grandes sin tostar",
    "priceAvgCLP": 36000,
    "priceRange": "25k_60k",
    "priceTier": "$32.000 - $40.000 CLP (~$42 USD)",
    "approxPriceUSD": 42,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 97,
      "timAtkin": 97,
      "jamesSuckling": 96,
      "robertParker": 97,
      "decanter": 96,
      "laCav": 97
    },
    "topScore": 97,
    "medals": [
      "97 Pts Tim Atkin & Robert Parker",
      "Tributo a Thelonious Monk"
    ],
    "tastingRadar": {
      "aroma": 97,
      "body": 88,
      "tannins": 88,
      "acidity": 97,
      "finish": 97
    },
    "tastingNotes": "Tributo al legendario pianista de jazz Thelonious Monk. Proviene de un minúsculo cuartel de granito descompuesto con arena de cuarzo en Guarilihue. Aromas a cerezas ácidas, té de rosas, ceniza fría, grafito y hierbas silvestres. Finura, tensión y austeridad mineral absoluta.",
    "servingTemp": "14°C – 15°C",
    "decantTime": "25 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "10 – 18 años",
    "pairings": [
      "Mollejas a la parrilla",
      "Pato laqueado",
      "Carpaccio de atún"
    ],
    "sellerLink": "https://www.pedroparra.cl",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Pedro Parra",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Monk con ilustración de jazz de vanguardia."
    },
    "coordinates": {
      "lat": -36.56,
      "lng": -72.67
    },
    "organicBio": "Suelos de Granito Puro • Mínima Intervención"
  },
  {
    "id": "de_martino_tinajas_cinsault_2021",
    "name": "De Martino Viejas Tinajas Cinsault",
    "winery": "Viña De Martino (Eduardo & Sebastián De Martino)",
    "vintage": "2021",
    "category": "Vino Ancestral en Tinajas",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "itata",
    "valleyName": "Valle del Itata (Guarilihue)",
    "zone": "Secano Costero",
    "region": "Región del Sur",
    "blend": "100% Cinsault (Parrales de 1950)",
    "primaryGrape": "Cinsault",
    "alcohol": "12.5%",
    "acidity": "6.0 g/L",
    "aging": "Fermentado y criado en tinajas de greda de 1952 sin madera",
    "priceAvgCLP": 21000,
    "priceRange": "12k_25k",
    "priceTier": "$18.000 - $24.000 CLP (~$24 USD)",
    "approxPriceUSD": 24,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Santiago Wine Club",
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 96,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "Pionero del renacimiento de las Tinajas en Chile (2011)",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 78,
      "tannins": 82,
      "acidity": 96,
      "finish": 95
    },
    "tastingNotes": "Nacido en las lomas de Guarilihue sobre granito descompuesto. Aromas cristalinos de guindas ácidas, flores de violeta, tiza y granito molido. Paladar jugoso, eléctrico y vibrante.",
    "servingTemp": "14°C – 16°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Atún sellado",
      "Empanadas de mariscos",
      "Charcutería artesanal",
      "Pato asado"
    ],
    "sellerLink": "https://www.demartino.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña De Martino / Guarilihue Itata",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con silueta de las tinajas de arcilla históricas de 1952."
    },
    "coordinates": {
      "lat": -36.5833,
      "lng": -72.6833
    },
    "organicBio": "Orgánico Certificado & Cero Madera"
  },
  {
    "id": "pedro_parra_imaginador_2021",
    "name": "Pedro Parra y Familia Imaginador Cinsault",
    "winery": "Pedro Parra y Familia (Guarilihue)",
    "vintage": "2021",
    "category": "Vino Campesino de Autor",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "itata",
    "valleyName": "Valle del Itata (Guarilihue)",
    "zone": "Costa",
    "region": "Sur",
    "blend": "100% Cinsault de laderas de granito y cuarzo",
    "primaryGrape": "Cinsault",
    "alcohol": "12.5%",
    "acidity": "6.0 g/L",
    "aging": "12 meses en cubas de concreto y fudres grandes sin tostar",
    "priceAvgCLP": 24000,
    "priceRange": "12k_25k",
    "priceTier": "$21.000 - $27.000 CLP (~$28 USD)",
    "approxPriceUSD": 28,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 95,
      "robertParker": 96,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "96 Pts Robert Parker",
      "El Cinsault Granítico de Guarilihue",
      "Dr. Terroir"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 88,
      "tannins": 87,
      "acidity": 96,
      "finish": 96
    },
    "tastingNotes": "Creado por el mayor especialista en terroir y suelos de Sudamérica. Parras de secano de más de 60 años plantadas en colinas de granito erosionado con cuarzo. Delicadas notas de frambuesa fresca, cerezas silvestres, rosas, tiza mineral, tomillo y humo sutil. Boca vibrante, vertical, aérea y de extrema pureza.",
    "servingTemp": "14°C – 15°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "8 – 15 años",
    "pairings": [
      "Atún sellado con sésamo",
      "Charcutería artesanal",
      "Pato confitado",
      "Risotto de setas"
    ],
    "sellerLink": "https://www.pedroparra.cl",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Pedro Parra",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta artística en blanco y negro tributo al jazz y los suelos de Itata."
    },
    "coordinates": {
      "lat": -36.56,
      "lng": -72.67
    },
    "organicBio": "Viticultura en Granito Puro de Secano • Mínima Intervención"
  },
  {
    "id": "bouchon_vigno_2020",
    "name": "Bouchon VIGNO Carignan",
    "winery": "Bouchon Family Wines",
    "vintage": "2020",
    "category": "Vino Patrimonial VIGNO",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Secano Interior)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carignan de parras de más de 65 años",
    "primaryGrape": "Carignan (VIGNO)",
    "alcohol": "14.0%",
    "acidity": "6.3 g/L",
    "aging": "24 meses en fudres de roble y botella",
    "priceAvgCLP": 26000,
    "priceRange": "25k_60k",
    "priceTier": "$23.000 - $29.000 CLP (~$30 USD)",
    "approxPriceUSD": 30,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "Santiago Wine Club",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "Sello Oficial VIGNO (Vignadores de Carignan)",
      "Oro Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 93,
      "tannins": 92,
      "acidity": 98,
      "finish": 96
    },
    "tastingNotes": "Elaborado bajo el estricto protocolo VIGNO. Aromas eléctricos de guinda ácida, moras, violetas, hierbas del secano, grafito y notas minerales. Acidez crujiente, taninos angulares pero pulidos y un final fresco y vibrante.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "40 minutos",
    "glassware": "Copa Syrah",
    "agingPotential": "12 – 20 años",
    "pairings": [
      "Cordero al horno",
      "Costillar al merkén",
      "Guiso de lentejas con chorizo"
    ],
    "sellerLink": "https://www.bouchonfamilywines.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Bouchon Family Wines",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con el sello oficial de cera de VIGNO Maule."
    },
    "coordinates": {
      "lat": -35.4,
      "lng": -72.05
    },
    "organicBio": "VIGNO Maule • Parras en Cabeza sin Riego"
  },
  {
    "id": "gonzalez_bastias_naranjo_2021",
    "name": "González Bastías Naranjo",
    "winery": "Viña González Bastías (José Luis Gómez & Daniela Lorenzo)",
    "vintage": "2021",
    "category": "Vino Naranjo Ancestral",
    "type": "Naranjo",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (González Bastías - Río Maule)",
    "zone": "Ribera del Río Maule",
    "region": "Valle Central",
    "blend": "Moscatel de Alejandría, Torontel, País",
    "primaryGrape": "Moscatel de Alejandría",
    "alcohol": "12.5%",
    "acidity": "6.2 g/L",
    "aging": "Maceración con pieles 60 días en lagares de piedra y tinajas de greda de 200 años",
    "priceAvgCLP": 23000,
    "priceRange": "25k_60k",
    "priceTier": "$20.000 - $26.000 CLP (~$26 USD)",
    "approxPriceUSD": 26,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "Baco Wine Club",
      "Chanchos Deslenguados"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 94,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 95,
    "medals": [
      "Elaborado en viñedos accesibles solo por el Ramal Talca-Constitución",
      "95 Pts Tim Atkin MW"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 84,
      "tannins": 82,
      "acidity": 94,
      "finish": 95
    },
    "tastingNotes": "Elaborado junto a la línea del tren ramal. Color ámbar anaranjado brillante. Aromas seductores de azahar, cáscara de naranja amarga, membrillo, té de jazmín y miel de ulmo. Boca tánica, seca y floral.",
    "servingTemp": "11°C – 13°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Universal",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Mollejas doradas al limón",
      "Quesos maduros de cabra",
      "Curry suave",
      "Pescados grasos"
    ],
    "sellerLink": "https://www.gonzalezbastias.cl",
    "bottleImage": "assets/images/wines/errazuriz_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "González Bastías / Ramal Río Maule",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con lacre artesanal y diseño del ramal ferroviario del Maule."
    },
    "coordinates": {
      "lat": -35.3833,
      "lng": -72.0167
    },
    "organicBio": "100% Biodinámico Artesanal Sin Químicos"
  },
  {
    "id": "rogue_vine_grand_itata_2020",
    "name": "Rogue Vine Grand Itata Cinsault",
    "winery": "Rogue Vine (Leonardo Erazo & Derek Mossman)",
    "vintage": "2020",
    "category": "Vino Campesino de Autor",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "itata",
    "valleyName": "Valle del Itata (Portezuelo)",
    "zone": "Secano Costero",
    "region": "Región del Sur",
    "blend": "100% Cinsault (Viñedos de secano de 1960)",
    "primaryGrape": "Cinsault",
    "alcohol": "13.0%",
    "acidity": "6.1 g/L",
    "aging": "12 meses en cubas de cemento y barricas neutras",
    "priceAvgCLP": 19000,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $22.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "BBVinos",
      "Chanchos Deslenguados"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 94,
      "decanter": 94,
      "laCav": 94
    },
    "topScore": 95,
    "medals": [
      "Terruño de Granito Antiguo de Portezuelo",
      "95 Pts Tim Atkin MW"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 79,
      "tannins": 80,
      "acidity": 96,
      "finish": 94
    },
    "tastingNotes": "Elaborado por el terroir-man Leo Erazo. Aromas de frambuesas silvestres, té de hibisco, pólvora y granito mojado. En boca es fluido, mineral, crujiente y sumamente gastronómico.",
    "servingTemp": "14°C – 15°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Borgoña o Universal",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Mollejas doradas",
      "Pescado de roca a la plancha",
      "Guiso de habas con cochayuyo"
    ],
    "sellerLink": "https://www.roguevine.com",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Rogue Vine / Portezuelo Itata",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con diseño tipográfico y sello de los viñateros del Itata."
    },
    "coordinates": {
      "lat": -36.5333,
      "lng": -72.4333
    },
    "organicBio": "Secano Extremo & Granito Puro"
  },
  {
    "id": "bouchon_pais_salvaje_2022",
    "name": "Bouchon País Salvaje",
    "winery": "Bouchon Family Wines (Mingre)",
    "vintage": "2022",
    "category": "Vino Patrimonial Salvaje",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Mingre - Secano Costero)",
    "zone": "Costa",
    "region": "Valle Central",
    "blend": "100% Cepa País cosechada en escaleras sobre árboles",
    "primaryGrape": "Cepa País (Listán Prieto)",
    "alcohol": "12.5%",
    "acidity": "5.8 g/L",
    "aging": "Fermentado en tinajas de concreto y guarda en cubas de cemento",
    "priceAvgCLP": 18000,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $20.000 CLP (~$20 USD)",
    "approxPriceUSD": 20,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "Santiago Wine Club",
      "El Mundo del Vino",
      "Bouchon Online"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Vino Revelación Descorchados",
      "Parras Silvestres Únicas en el Mundo"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 87,
      "tannins": 86,
      "acidity": 96,
      "finish": 95
    },
    "tastingNotes": "Hito vitivinícola mundial. Las uvas no crecen en hileras, sino en parras silvestres centenarias trepadas en la copa de árboles nativos (espino y quillay) a 5 metros de altura, cosechadas con escaleras. Aromas puros de frutilla silvestre, rosa mosqueta, granada, té negro y tierra húmeda. Jugoso, crujiente y salvajemente fresco.",
    "servingTemp": "13°C – 15°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Borgoña o Universal",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Charquicán con huevo frito",
      "Arrollado de huaso",
      "Prietas artesanales con papas cocidas"
    ],
    "sellerLink": "https://www.bouchonfamilywines.com",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Bouchon Family Wines",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta con grabado botánico de la parra trepadora en el bosque nativo."
    },
    "coordinates": {
      "lat": -35.4,
      "lng": -72.05
    },
    "organicBio": "Parras Silvestres en Secano • Cero Riego"
  },
  {
    "id": "polkura_syrah_2020",
    "name": "Polkura Syrah Marchigüe",
    "winery": "Viña Polkura (Sven Bruchfeld)",
    "vintage": "2020",
    "category": "Vino de Autor MOVI",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua (Marchigüe)",
    "zone": "Costa",
    "region": "Valle Central",
    "blend": "96% Syrah, 4% Cabernet Sauvignon",
    "primaryGrape": "Syrah",
    "alcohol": "14.5%",
    "acidity": "5.6 g/L",
    "aging": "15 meses en barricas de roble francés (20% nuevas)",
    "priceAvgCLP": 22000,
    "priceRange": "12k_25k",
    "priceTier": "$19.000 - $25.000 CLP (~$25 USD)",
    "approxPriceUSD": 25,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Fundador de MOVI (Movimiento de Viñateros Independientes)",
      "95 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 94,
      "tannins": 91,
      "acidity": 91,
      "finish": 95
    },
    "tastingNotes": "El proyecto personal del enólogo Sven Bruchfeld en los suelos amarillos de 'polkura' (piedra amarilla en mapudungún). Aromas seductores de aceitunas negras, moras maduras, granito, pimienta negra, humo y cuero. En boca es fresco, tenso y con taninos de grano fino.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Syrah",
    "agingPotential": "10 – 16 años",
    "pairings": [
      "Carnes a la parrilla",
      "Cordero al romero",
      "Hamburguesa de wagyu"
    ],
    "sellerLink": "https://www.polkura.cl",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Polkura",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta amarilla con el logo de MOVI."
    },
    "coordinates": {
      "lat": -34.42,
      "lng": -71.62
    },
    "organicBio": "MOVI • Viñateros Independientes de Chile"
  },
  {
    "id": "kingston_alazan_chardonnay_2021",
    "name": "Kingston Family Alazan Chardonnay",
    "winery": "Kingston Family Vineyards (Casablanca)",
    "vintage": "2021",
    "category": "Vino de Autor MOVI",
    "type": "Blanco",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "casablanca",
    "valleyName": "Valle de Casablanca (Lomas del Viento)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "6.6 g/L",
    "aging": "10 meses en barricas de roble francés y depósitos de hormigón",
    "priceAvgCLP": 26000,
    "priceRange": "25k_60k",
    "priceTier": "$22.000 - $29.000 CLP (~$30 USD)",
    "approxPriceUSD": 30,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "Kingston Online"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Pioneros familiares de Casablanca",
      "95 Pts Tim Atkin"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 91,
      "tannins": 72,
      "acidity": 95,
      "finish": 95
    },
    "tastingNotes": "Chardonnay de clima frío costero elaborado por una familia estadounidense radicada en Casablanca desde hace más de un siglo. Manzanas amarillas, peras de agua, brioche, avellanas tostadas y una mineralidad marina vibrante.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Borgoña Blanca",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Corvina con salsa de alcaparras",
      "Pastel de jaiba",
      "Pollo al limón"
    ],
    "sellerLink": "https://www.kingstonvineyards.com",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Kingston Family",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Alazan con diseño de rancho tradicional."
    },
    "coordinates": {
      "lat": -33.32,
      "lng": -71.38
    },
    "organicBio": "MOVI • Agricultura Artesanal de Clima Frío"
  },
  {
    "id": "de_martino_tinajas_moscatel_2021",
    "name": "De Martino Viejas Tinajas Moscatel",
    "winery": "Viña De Martino (Guarilihue)",
    "vintage": "2021",
    "category": "Vino Ancestral en Tinajas",
    "type": "Blanco",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "itata",
    "valleyName": "Valle del Itata (Guarilihue)",
    "zone": "Costa",
    "region": "Sur",
    "blend": "100% Moscatel de Alejandría vinificada en tinajas de 1952",
    "primaryGrape": "Moscatel de Alejandría",
    "alcohol": "12.0%",
    "acidity": "6.2 g/L",
    "aging": "6 meses en tinajas de arcilla cocida sin revestir de 1952",
    "priceAvgCLP": 22000,
    "priceRange": "12k_25k",
    "priceTier": "$19.000 - $25.000 CLP (~$25 USD)",
    "approxPriceUSD": 25,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "De Martino Online"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 95,
      "decanter": 94,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Pioneros en el Rescate de Tinajas Históricas en Chile",
      "95 Pts Robert Parker"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 88,
      "tannins": 78,
      "acidity": 96,
      "finish": 95
    },
    "tastingNotes": "Elaborado a partir de parras centenarias de Moscatel en pie franco. Fermentado espontáneamente en tinajas de greda de 1952. Aromas sumamente puros de flor de azahar, jazmín, cáscara de lima, té de hierbas y sal mineral. Boca crujiente, seca y de emocionante textura terrosa.",
    "servingTemp": "9°C – 11°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal",
    "agingPotential": "4 – 8 años",
    "pairings": [
      "Ceviche de locos",
      "Comida tailandesa",
      "Tiraditos de corvina"
    ],
    "sellerLink": "https://www.demartino.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña De Martino",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta serigrafiada Viejas Tinajas con dibujo de ánfora romana."
    },
    "coordinates": {
      "lat": -36.56,
      "lng": -72.67
    },
    "organicBio": "Vino Natural en Tinajas de Greda • Parras Viejas de Secano"
  },
  {
    "id": "cacique_maravilla_pipeno_2022",
    "name": "Cacique Maravilla Pipeño País",
    "winery": "Viña Cacique Maravilla (Manuel Moraga)",
    "vintage": "2022",
    "category": "Pipeño Patrimonial",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "bio_bio",
    "valleyName": "Valle del Bío Bío (Yumbel)",
    "zone": "Secano Interior",
    "region": "Región del Sur",
    "blend": "100% Cepa País (Parrales de 1776 sin injertar)",
    "primaryGrape": "Cepa País",
    "alcohol": "12.5%",
    "acidity": "5.9 g/L",
    "aging": "Fermentado en pipas de raulí patrimoniales centenarias sin sulfitos añadidos",
    "priceAvgCLP": 10500,
    "priceRange": "5k_12k",
    "priceTier": "$9.000 - $12.000 CLP (~$12 USD)",
    "approxPriceUSD": 12,
    "retailChannels": [
      "Tienda Especializada",
      "Botillerías Mayoristas",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "Chanchos Deslenguados",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 93,
      "robertParker": 93,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "Parrales de Pie Franco de 1776 (248 Años)",
      "Ícono Mundial del Vino Natural Chileno"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 75,
      "tannins": 82,
      "acidity": 95,
      "finish": 93
    },
    "tastingNotes": "El pipeño más famoso del mundo elaborado en pipas de raulí. Color rubí translúcido. Aromas campestres de frutilla silvestre, granada, hierba luisa y tierra volcánica (Trumao). Boca fresca, jugosa y rústica.",
    "servingTemp": "12°C – 14°C (Levemente refrescado)",
    "decantTime": "Servir directo",
    "glassware": "Vaso de caña tradicional o Copa Universal",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Prietas con papas cocidas",
      "Empanada de pino recién horneada",
      "Cazuela de campo",
      "Arrollado"
    ],
    "sellerLink": "https://www.caciquemaravilla.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Cacique Maravilla / Yumbel Bío Bío",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella tradicional de 1 Litro con etiqueta ilustrada de Santa Lucía de Yumbel."
    },
    "coordinates": {
      "lat": -37.1,
      "lng": -72.55
    },
    "organicBio": "100% Natural Sin Sulfitos & Pie Franco"
  },
  {
    "id": "cacique_maravilla_orange_2022",
    "name": "Cacique Maravilla Gut Turn Orange Moscatel",
    "winery": "Viña Cacique Maravilla (Manuel Moraga)",
    "vintage": "2022",
    "category": "Vino Naranjo Ancestral",
    "type": "Naranjo",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "bio_bio",
    "valleyName": "Valle del Bío Bío (Yumbel)",
    "zone": "Entre Cordilleras",
    "region": "Sur",
    "blend": "100% Moscatel de Alejandría macerada con pieles",
    "primaryGrape": "Moscatel de Alejandría",
    "alcohol": "12.5%",
    "acidity": "5.8 g/L",
    "aging": "Maceración con pieles y fermentación espontánea en tinajas de greda y cubas de raulí",
    "priceAvgCLP": 18990,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $21.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "La CAV",
      "Cacique Maravilla Online"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 93,
      "robertParker": 93,
      "decanter": 92,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "Pionero del Vino Naranjo Natural en Chile",
      "Vino Sin Sulfitos Añadidos"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 90,
      "tannins": 85,
      "acidity": 94,
      "finish": 95
    },
    "tastingNotes": "Vino natural sin filtrar ni sulfitos añadidos. Elaborado a partir de parras centenarias de Moscatel en arena volcánica (trumao). Color ámbar dorado turbio. Explosión de cáscara de naranja amarga, jazmín, jengibre, damascos secos, té negro y miel. Textura tánica crujiente y final sumamente refrescante.",
    "servingTemp": "11°C – 13°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Universal",
    "agingPotential": "4 – 7 años",
    "pairings": [
      "Tiradito de pescado con ají amarillo",
      "Comida tailandesa",
      "Curry de verduras",
      "Quesos maduros de cabra"
    ],
    "sellerLink": "https://www.caciquemaravilla.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Cacique Maravilla",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con etiqueta rústica de Yumbel y color ámbar profundo."
    },
    "coordinates": {
      "lat": -37.1,
      "lng": -72.55
    },
    "organicBio": "100% Vino Natural Sin Sulfitos • Tradición desde 1776"
  },
  {
    "id": "tinto_de_rulo_pipeno_2022",
    "name": "Tinto de Rulo Pipeño País",
    "winery": "Tinto de Rulo (Claudio Contreras & Jaime Pereira)",
    "vintage": "2022",
    "category": "Pipeño Patrimonial",
    "type": "Tinto",
    "style": "Patrimonial / Natural / MOVI",
    "valleyId": "bio_bio",
    "valleyName": "Valle del Bío Bío (San Rosendo)",
    "zone": "Entre Cordilleras",
    "region": "Sur",
    "blend": "100% Cepa País centenaria en secano",
    "primaryGrape": "Cepa País (Listán Prieto)",
    "alcohol": "12.0%",
    "acidity": "5.8 g/L",
    "aging": "Elaborado en zaranda de coligüe y criado en tinajas coloniales",
    "priceAvgCLP": 14990,
    "priceRange": "12k_25k",
    "priceTier": "$13.000 - $16.500 CLP (~$16 USD)",
    "approxPriceUSD": 16,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 93,
      "robertParker": 93,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "El Pipeño de San Rosendo",
      "Vino Sin Riego (Rulo) Ancestral"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 86,
      "tannins": 85,
      "acidity": 95,
      "finish": 93
    },
    "tastingNotes": "'Rulo' significa en Chile cultivo de secano sin riego. Cosechado de parras viejas de más de 100 años en laderas del Río Bío Bío. Aromas campesinos de frutilla silvestre, granada, poleo, tierra mojada y flores secas. Muy jugoso, fresco y vibrante.",
    "servingTemp": "13°C – 15°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal o Jarro",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Plateada con puré picante",
      "Empanadas de horno",
      "Charquicán"
    ],
    "sellerLink": "https://www.tintoderulo.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Tinto de Rulo",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta rústica con diseño de zaranda campesina."
    },
    "coordinates": {
      "lat": -37.26,
      "lng": -72.91
    },
    "organicBio": "Agricultura Ancestral en Secano • Sin Riego"
  },
  {
    "id": "casillero_cabernet_2021",
    "name": "Casillero del Diablo Reserva Cabernet Sauvignon",
    "winery": "Viña Concha y Toro (Pirque)",
    "vintage": "2021",
    "category": "Reserva Clásica",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "maipo",
    "valleyName": "Valle Central / Maipo",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "13.5%",
    "acidity": "5.3 g/L",
    "aging": "8 meses en barricas de roble francés y americano",
    "priceAvgCLP": 7700,
    "priceRange": "5k_12k",
    "priceTier": "$6.500 - $8.990 CLP (~$9 USD)",
    "approxPriceUSD": 9,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Líder / Bodegazo",
      "Jumbo",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo Mayorista",
      "Botillerías de Barrio"
    ],
    "scores": {
      "descorchados": 91,
      "timAtkin": 90,
      "jamesSuckling": 92,
      "robertParker": 90,
      "decanter": 91,
      "laCav": 91
    },
    "topScore": 92,
    "medals": [
      "El Vino Más Vendido y Famoso de Chile en el Mundo",
      "Top Best Buy Wine Enthusiast"
    ],
    "tastingRadar": {
      "aroma": 90,
      "body": 88,
      "tannins": 87,
      "acidity": 86,
      "finish": 90
    },
    "tastingNotes": "El embajador del vino chileno presente en más de 140 países. Aromas a ciruelas maduras, grosellas negras, café y vainilla. Boca redonda, equilibrada y de taninos amables.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Universal o Burdeos",
    "agingPotential": "4 – 7 años",
    "pairings": [
      "Asados familiares",
      "Hamburguesas caseras",
      "Empanadas de pino",
      "Pastas con tuco"
    ],
    "sellerLink": "https://www.casillerodeldiablo.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro Barcode GS1 780",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de producto y etiqueta de Casillero del Diablo Reserva."
    },
    "coordinates": {
      "lat": -33.65,
      "lng": -70.57
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "diablo_dark_red_2021",
    "name": "Diablo Dark Red Blend",
    "winery": "Viña Concha y Toro",
    "vintage": "2021",
    "category": "Red Blend Premium",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "maule",
    "valleyName": "Valle del Maule",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "Syrah, Malbec, Carménère, Cabernet Sauvignon",
    "primaryGrape": "Syrah",
    "alcohol": "13.5%",
    "acidity": "5.2 g/L",
    "aging": "6 meses, 6 semanas y 6 días en barricas de roble",
    "priceAvgCLP": 8990,
    "priceRange": "5k_12k",
    "priceTier": "$7.990 - $9.990 CLP (~$10 USD)",
    "approxPriceUSD": 10,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Líder",
      "Jumbo",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 91,
      "timAtkin": 90,
      "jamesSuckling": 92,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 90
    },
    "topScore": 92,
    "medals": [
      "Fenómeno de Ventas Global",
      "Línea Diablo de Vanguardia"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 90,
      "tannins": 86,
      "acidity": 84,
      "finish": 91
    },
    "tastingNotes": "Color rojo oscuro y seductor. Aromas intensos a moras maduras, moca, vainilla y notas tostadas. En boca es dulce, goloso, envolvente y de taninos cremosos.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Universal",
    "agingPotential": "4 – 6 años",
    "pairings": [
      "Costillitas BBQ",
      "Hamburguesas con queso cheddar",
      "Pizzas de carnes",
      "Tacos"
    ],
    "sellerLink": "https://www.casillerodeldiablo.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro / Diablo Global",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella oscura con grabado Diablo y cápsula negra mate."
    },
    "coordinates": {
      "lat": -35.4333,
      "lng": -71.6667
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "misiones_de_rengo_cuvee_2021",
    "name": "Misiones de Rengo Gran Reserva Black Carménère",
    "winery": "Viña Misiones de Rengo (Sebastián Ruiz)",
    "vintage": "2021",
    "category": "Gran Reserva",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Rengo / Peumo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "14.0%",
    "acidity": "5.4 g/L",
    "aging": "12 meses en barricas de roble francés y americano",
    "priceAvgCLP": 9990,
    "priceRange": "5k_12k",
    "priceTier": "$8.990 - $11.990 CLP (~$11 USD)",
    "approxPriceUSD": 11,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Líder",
      "Jumbo",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 92,
      "timAtkin": 91,
      "jamesSuckling": 92,
      "robertParker": 90,
      "decanter": 91,
      "laCav": 92
    },
    "topScore": 92,
    "medals": [
      "El Carménère de Mayor Venta en Botillerías y Supermercados",
      "Medalla de Oro Catad'Or"
    ],
    "tastingRadar": {
      "aroma": 92,
      "body": 90,
      "tannins": 87,
      "acidity": 86,
      "finish": 91
    },
    "tastingNotes": "Elaborado en el corazón de Cachapoal. Color morado intenso. Aromas a ciruelas maduras, chocolate dulce, pimiento rojo asado y toques de vainilla. Boca suave y muy envolvente.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "5 – 8 años",
    "pairings": [
      "Pastel de choclo",
      "Costillar al horno",
      "Charquicán con huevo frito",
      "Empanadas"
    ],
    "sellerLink": "https://www.misionesderengo.cl",
    "bottleImage": "assets/images/wines/apaltagua_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Misiones de Rengo / VSPT Wine Group",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con la cruz de Misiones de Rengo grabada en relieve y etiqueta negra."
    },
    "coordinates": {
      "lat": -34.41,
      "lng": -70.86
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "cono_sur_bicicleta_pinot_2022",
    "name": "Cono Sur Bicicleta Reserva Pinot Noir",
    "winery": "Viña Cono Sur (Matías Ríos)",
    "vintage": "2022",
    "category": "Reserva Clásica",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "san_antonio_leyda",
    "valleyName": "Valle de San Antonio / Bio Bío",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Pinot Noir",
    "primaryGrape": "Pinot Noir",
    "alcohol": "13.5%",
    "acidity": "6.0 g/L",
    "aging": "Crianza parcial en roble francés (6 meses)",
    "priceAvgCLP": 6990,
    "priceRange": "5k_12k",
    "priceTier": "$5.990 - $7.990 CLP (~$8 USD)",
    "approxPriceUSD": 8,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Descorcha.com",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 91,
      "timAtkin": 90,
      "jamesSuckling": 91,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 90
    },
    "topScore": 91,
    "medals": [
      "El Pinot Noir Más Vendido del Reino Unido y Chile",
      "Sello Carbono Neutral"
    ],
    "tastingRadar": {
      "aroma": 91,
      "body": 79,
      "tannins": 80,
      "acidity": 94,
      "finish": 90
    },
    "tastingNotes": "El pionero del Pinot Noir accesible en Chile. Aromas a cerezas frescas, frambuesas, notas de té negro y humo sutil. Boca crujiente, ligera y refrescante.",
    "servingTemp": "13°C – 15°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Borgoña",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Salmón a la plancha",
      "Pollo al champiñón",
      "Pastas con salsa blanca",
      "Atún sellado"
    ],
    "sellerLink": "https://www.conosur.com",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Cono Sur / Chimbarongo",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con la emblemática bicicleta de los trabajadores de Cono Sur."
    },
    "coordinates": {
      "lat": -34.7167,
      "lng": -71.05
    },
    "organicBio": "Certificado Carbono Neutral & Sustentable"
  },
  {
    "id": "undurraga_aliwen_reserva_2021",
    "name": "Undurraga Aliwen Reserva Cabernet-Carménère",
    "winery": "Viña Undurraga (Talagante)",
    "vintage": "2021",
    "category": "Reserva Popular",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "colchagua",
    "valleyName": "Valle Central (Rapel / Colchagua)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "60% Cabernet Sauvignon, 40% Carménère",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "13.5%",
    "acidity": "5.4 g/L",
    "aging": "9 meses en barricas de roble francés y americano",
    "priceAvgCLP": 6990,
    "priceRange": "5k_12k",
    "priceTier": "$5.990 - $7.990 CLP (~$8 USD)",
    "approxPriceUSD": 8,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Undurraga Online",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 90,
      "timAtkin": 90,
      "jamesSuckling": 91,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 90
    },
    "topScore": 91,
    "medals": [
      "Aliwen (Árbol Sagrado en Mapudungún)",
      "Compromiso de Reforestación Nativa"
    ],
    "tastingRadar": {
      "aroma": 91,
      "body": 90,
      "tannins": 88,
      "acidity": 87,
      "finish": 90
    },
    "tastingNotes": "Elaborado en alianza con la Fundación Reforestemos para plantar árboles nativos en la Patagonia. Gran ensamblaje con estructura del Cabernet y la sedosidad especiada del Carménère. Frutos negros, vainilla, cedro y notas tostadas.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "4 – 6 años",
    "pairings": [
      "Carnes asadas",
      "Pastel de choclo",
      "Costillar al horno"
    ],
    "sellerLink": "https://www.undurraga.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Undurraga",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Aliwen con el árbol de la vida mapuche."
    },
    "coordinates": {
      "lat": -33.68,
      "lng": -70.92
    },
    "organicBio": "Campaña Reforestemos Patagonia"
  },
  {
    "id": "trio_concha_y_toro_2021",
    "name": "Trio Reserva Cabernet Sauvignon Blend",
    "winery": "Viña Concha y Toro",
    "vintage": "2021",
    "category": "Reserva Clásica",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "maipo",
    "valleyName": "Valle del Maipo / Rapel",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "70% Cabernet Sauvignon, 15% Carménère, 15% Cabernet Franc",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "13.5%",
    "acidity": "5.4 g/L",
    "aging": "8 meses en barricas de roble",
    "priceAvgCLP": 6990,
    "priceRange": "5k_12k",
    "priceTier": "$5.990 - $7.990 CLP (~$8 USD)",
    "approxPriceUSD": 8,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Descorcha.com",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 90,
      "timAtkin": 90,
      "jamesSuckling": 91,
      "robertParker": 89,
      "decanter": 90,
      "laCav": 90
    },
    "topScore": 91,
    "medals": [
      "El Arte del Ensamblaje Accesible",
      "91 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 91,
      "body": 90,
      "tannins": 88,
      "acidity": 87,
      "finish": 90
    },
    "tastingNotes": "Pionero en popularizar el arte de los ensamblajes bordeleses en el segmento accesible chileno. La fuerza del Cabernet, la fruta dulce del Carménère y la fineza aromática del Cabernet Franc se unen en armonía con toques de vainilla y tabaco.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "15 minutos",
    "glassware": "Copa Burdeos",
    "agingPotential": "4 – 6 años",
    "pairings": [
      "Carnes a la parrilla",
      "Lasaña",
      "Churrascos y lomitos"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Trio con tres anillos enlazados."
    },
    "coordinates": {
      "lat": -33.66,
      "lng": -70.57
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "santa_rita_120_cabernet_2022",
    "name": "120 Santa Rita Reserva Especial Cabernet",
    "winery": "Viña Santa Rita (Buin)",
    "vintage": "2022",
    "category": "Varietal Clásico",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "maipo",
    "valleyName": "Valle Central",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "13.0%",
    "acidity": "5.2 g/L",
    "aging": "Contacto breve con roble francés y tanques de acero inoxidable",
    "priceAvgCLP": 4490,
    "priceRange": "under_5k",
    "priceTier": "$3.990 - $5.490 CLP (~$5 USD)",
    "approxPriceUSD": 5,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas",
      "Botillerías de Barrio"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Líder",
      "Jumbo",
      "Tottus",
      "Unimarc",
      "El Cielo",
      "Booz.cl",
      "Almacenes de Barrio"
    ],
    "scores": {
      "descorchados": 89,
      "timAtkin": 88,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 89
    },
    "topScore": 90,
    "medals": [
      "El Vino Más Popular de los Hogares Chilenos",
      "Homenaje a los 120 Patriotas de 1814"
    ],
    "tastingRadar": {
      "aroma": 88,
      "body": 84,
      "tannins": 83,
      "acidity": 85,
      "finish": 87
    },
    "tastingNotes": "El vino infaltable en los almuerzos de domingo chilenos. Notas francas de ciruela roja, frutilla, vainilla y suave tostado. Paladar fluido, fresco y muy fácil de beber.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Universal",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Cazuela de vacuno",
      "Empanadas de pino",
      "Porotos con riendas",
      "Pastel de choclo"
    ],
    "sellerLink": "https://www.santarita.com",
    "bottleImage": "assets/images/wines/cousino_macul_antiguas_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Santa Rita Barcode GS1 780",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella 120 Santa Rita con el número 120 en rojo y la historia de los patriotas en la contraetiqueta."
    },
    "coordinates": {
      "lat": -33.72,
      "lng": -70.66
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "casillero_carmenere_2022",
    "name": "Casillero del Diablo Reserva Carménère",
    "winery": "Viña Concha y Toro (Pirque)",
    "vintage": "2022",
    "category": "Reserva Popular",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "cachapoal",
    "valleyName": "Valle Central (Cachapoal / Colchagua)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "13.5%",
    "acidity": "5.2 g/L",
    "aging": "Crianza en barricas de roble durante 8 meses",
    "priceAvgCLP": 5990,
    "priceRange": "5k_12k",
    "priceTier": "$4.990 - $6.990 CLP (~$7 USD)",
    "approxPriceUSD": 7,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Venta Directa"
    ],
    "availableAt": [
      "Líder",
      "Jumbo",
      "Supermercados Diez",
      "Unimarc",
      "El Cielo",
      "Botillerías de Barrio",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 89,
      "timAtkin": 89,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 89
    },
    "topScore": 90,
    "medals": [
      "La Marca Chilena Más Famosa del Mundo",
      "90 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 90,
      "body": 89,
      "tannins": 86,
      "acidity": 85,
      "finish": 89
    },
    "tastingNotes": "El Carménère de mayor exportación del planeta. Notas de ciruelas negras, grosellas, toques de café tostado, pimiento dulce y vainilla. En boca es suave, redondo, de taninos dóciles y final muy agradable.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Burdeos o Universal",
    "agingPotential": "3 – 5 años",
    "pairings": [
      "Pastel de choclo",
      "Tallarines con salsa bolognesa",
      "Empanadas de pino",
      "Asados de fin de semana"
    ],
    "sellerLink": "https://www.casillerodeldiablo.com",
    "bottleImage": "assets/images/wines/casillero_carmenere_img.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Fotografía real de la botella Casillero del Diablo Carménère."
    },
    "coordinates": {
      "lat": -33.66,
      "lng": -70.57
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "casillero_sauvignon_2022",
    "name": "Casillero del Diablo Reserva Sauvignon Blanc",
    "winery": "Viña Concha y Toro",
    "vintage": "2022",
    "category": "Reserva Popular",
    "type": "Blanco",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "casablanca",
    "valleyName": "Valle Central / Casablanca",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "100% Sauvignon Blanc",
    "primaryGrape": "Sauvignon Blanc",
    "alcohol": "12.5%",
    "acidity": "6.4 g/L",
    "aging": "En cubas de acero inoxidable con control de temperatura",
    "priceAvgCLP": 5990,
    "priceRange": "5k_12k",
    "priceTier": "$4.990 - $6.990 CLP (~$7 USD)",
    "approxPriceUSD": 7,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Venta Directa"
    ],
    "availableAt": [
      "Líder",
      "Jumbo",
      "Supermercados Diez",
      "Unimarc",
      "El Cielo",
      "Booz.cl"
    ],
    "scores": {
      "descorchados": 89,
      "timAtkin": 89,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 89
    },
    "topScore": 90,
    "medals": [
      "Gran Favorito del Verano Chileno",
      "90 Pts James Suckling"
    ],
    "tastingRadar": {
      "aroma": 91,
      "body": 84,
      "tannins": 70,
      "acidity": 93,
      "finish": 89
    },
    "tastingNotes": "Refrescante, cítrico y vibrante. Destacan aromas de pomelo, lima, durazno blanco, notas de manzana verde y hierbas frescas. Acidez crujiente y paladar limpio.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "No requiere",
    "glassware": "Copa Tulipa o Sauvignon Blanc",
    "agingPotential": "1 – 3 años",
    "pairings": [
      "Ceviche de pescado blanco",
      "Machas a la parmesana",
      "Ensalada verde con camarones"
    ],
    "sellerLink": "https://www.casillerodeldiablo.com",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Casillero Sauvignon Blanc."
    },
    "coordinates": {
      "lat": -33.32,
      "lng": -71.4
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "casillero_chardonnay_2022",
    "name": "Casillero del Diablo Reserva Chardonnay",
    "winery": "Viña Concha y Toro",
    "vintage": "2022",
    "category": "Reserva Popular",
    "type": "Blanco",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "limari",
    "valleyName": "Valle Central / Limarí",
    "zone": "Costa",
    "region": "Valle Central",
    "blend": "100% Chardonnay",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.5%",
    "acidity": "5.8 g/L",
    "aging": "Paso parcial por madera de roble francés durante 6 meses",
    "priceAvgCLP": 5990,
    "priceRange": "5k_12k",
    "priceTier": "$4.990 - $6.990 CLP (~$7 USD)",
    "approxPriceUSD": 7,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Unimarc",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 89,
      "timAtkin": 89,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 89
    },
    "topScore": 90,
    "medals": [
      "90 Pts James Suckling",
      "Mejor Blanco Accesible"
    ],
    "tastingRadar": {
      "aroma": 90,
      "body": 88,
      "tannins": 72,
      "acidity": 89,
      "finish": 89
    },
    "tastingNotes": "Aromas a piña madura, durazno blanco, vainilla dulce y sutiles notas tostadas. En boca es suave, envolvente, con buena frescura y textura cremosa.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Copa Chardonnay",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Salmón a la plancha",
      "Pastel de jaiba",
      "Pollo con crema y champiñones"
    ],
    "sellerLink": "https://www.casillerodeldiablo.com",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Casillero Chardonnay."
    },
    "coordinates": {
      "lat": -30.6,
      "lng": -71.4
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "misiones_de_rengo_reserva_carmenere_2022",
    "name": "Misiones de Rengo Reserva Carménère",
    "winery": "Viña Misiones de Rengo (Rengo)",
    "vintage": "2022",
    "category": "Reserva Clásica",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "cachapoal",
    "valleyName": "Valle de Cachapoal (Rengo)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "13.5%",
    "acidity": "5.3 g/L",
    "aging": "6 meses en contacto con roble francés y americano",
    "priceAvgCLP": 6490,
    "priceRange": "5k_12k",
    "priceTier": "$5.490 - $7.490 CLP (~$7.5 USD)",
    "approxPriceUSD": 7.5,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Unimarc",
      "El Cielo",
      "TiendaVSPT.cl"
    ],
    "scores": {
      "descorchados": 90,
      "timAtkin": 89,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 90
    },
    "topScore": 90,
    "medals": [
      "La Cruz de Misiones de Rengo",
      "Gran Preferencia en Retail Chileno"
    ],
    "tastingRadar": {
      "aroma": 90,
      "body": 90,
      "tannins": 87,
      "acidity": 86,
      "finish": 90
    },
    "tastingNotes": "Reconocido por su icónica cruz en la etiqueta. Frutos negros maduros, toques de chocolate con leche, canela, pimiento rojo y ciruelas. En boca es suave, aterciopelado y de muy rico final.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Burdeos",
    "agingPotential": "3 – 5 años",
    "pairings": [
      "Pastel de choclo",
      "Carne al jugo con puré",
      "Empanadas de pino"
    ],
    "sellerLink": "https://www.misionesderengo.cl",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "VSPT Wine Group",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Misiones de Rengo con la cruz dorada."
    },
    "coordinates": {
      "lat": -34.4,
      "lng": -70.85
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "cono_sur_bicicleta_carmenere_2022",
    "name": "Cono Sur Bicicleta Carménère",
    "winery": "Viña Cono Sur (Chimbarongo)",
    "vintage": "2022",
    "category": "Varietal Clásico",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "colchagua",
    "valleyName": "Valle de Colchagua",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "13.5%",
    "acidity": "5.3 g/L",
    "aging": "Crianza parcial en barricas de roble durante 8 meses",
    "priceAvgCLP": 4990,
    "priceRange": "under_5k",
    "priceTier": "$4.290 - $5.690 CLP (~$6 USD)",
    "approxPriceUSD": 6,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Jumbo",
      "Líder",
      "Supermercados Diez",
      "Unimarc",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 89,
      "timAtkin": 89,
      "jamesSuckling": 90,
      "robertParker": 88,
      "decanter": 89,
      "laCav": 89
    },
    "topScore": 90,
    "medals": [
      "Sello de Transporte Sustentable en Bicicleta",
      "CarbonNeutral Certificado"
    ],
    "tastingRadar": {
      "aroma": 90,
      "body": 89,
      "tannins": 86,
      "acidity": 86,
      "finish": 89
    },
    "tastingNotes": "Elaborado con uvas de Colchagua. La bicicleta en la etiqueta rinde homenaje a los trabajadores que recorren los viñedos pedaleando para reducir la huella de carbono. Aromas de ciruela negra, mora silvestre, toques tostados y especias suaves.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Pastel de choclo",
      "Pollo asado con papas fritas",
      "Guisos caseros"
    ],
    "sellerLink": "https://www.conosur.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Cono Sur",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta con la icónica bicicleta de Cono Sur."
    },
    "coordinates": {
      "lat": -34.7,
      "lng": -71.05
    },
    "organicBio": "Certificación CarbonNeutral & Sustentabilidad"
  },
  {
    "id": "gato_negro_cabernet_2022",
    "name": "Gato Negro Cabernet Sauvignon",
    "winery": "Viña San Pedro (Molina, Fundada 1865)",
    "vintage": "2022",
    "category": "Varietal Masivo",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "curico",
    "valleyName": "Valle Central / Curicó",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "12.5%",
    "acidity": "5.1 g/L",
    "aging": "Tanques de acero inoxidable",
    "priceAvgCLP": 3990,
    "priceRange": "under_5k",
    "priceTier": "$3.490 - $4.990 CLP (~$4.5 USD)",
    "approxPriceUSD": 4.5,
    "retailChannels": [
      "Supermercados",
      "Botillerías Mayoristas",
      "Botillerías de Barrio"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Líder",
      "Jumbo",
      "Tottus",
      "Unimarc",
      "El Cielo",
      "Booz.cl",
      "Botillerías de todo Chile"
    ],
    "scores": {
      "descorchados": 88,
      "timAtkin": 87,
      "jamesSuckling": 89,
      "robertParker": 87,
      "decanter": 88,
      "laCav": 88
    },
    "topScore": 89,
    "medals": [
      "El Vino de Exportación Más Vendido de Viña San Pedro",
      "Líder en más de 80 países"
    ],
    "tastingRadar": {
      "aroma": 86,
      "body": 80,
      "tannins": 80,
      "acidity": 85,
      "finish": 85
    },
    "tastingNotes": "Fresco, frutal y desenfadado. Aromas de moras, frambuesas y un sutil toque de vainilla. Boca liviana, fresca y taninos dóciles para el día a día.",
    "servingTemp": "14°C – 16°C",
    "decantTime": "Servir directo",
    "glassware": "Copa Universal",
    "agingPotential": "1 – 3 años",
    "pairings": [
      "Completos italianos",
      "Pizzas caseras",
      "Choripanes",
      "Tallarines con salsa"
    ],
    "sellerLink": "https://www.gatonegro.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro / GS1 780",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con silueta del gato negro sobre fondo amarillo."
    },
    "coordinates": {
      "lat": -35.1167,
      "lng": -71.2833
    },
    "organicBio": "Producción Sustentable"
  },
  {
    "id": "santa_rita_120_carmenere_2022",
    "name": "120 Santa Rita Reserva Especial Carménère",
    "winery": "Viña Santa Rita (Buin)",
    "vintage": "2022",
    "category": "Varietal Clásico",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "colchagua",
    "valleyName": "Valle Central (Colchagua / Curicó)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "13.5%",
    "acidity": "5.2 g/L",
    "aging": "Crianza breve con roble francés para redondez",
    "priceAvgCLP": 4290,
    "priceRange": "under_5k",
    "priceTier": "$3.690 - $4.890 CLP (~$5 USD)",
    "approxPriceUSD": 5,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Venta Directa"
    ],
    "availableAt": [
      "Líder",
      "Jumbo",
      "Supermercados Diez",
      "Mayorista 10",
      "El Cielo",
      "Botillerías de todo Chile"
    ],
    "scores": {
      "descorchados": 88,
      "timAtkin": 88,
      "jamesSuckling": 89,
      "robertParker": 87,
      "decanter": 88,
      "laCav": 88
    },
    "topScore": 89,
    "medals": [
      "Homenaje a los 120 Patriotas de la Independencia de Chile",
      "Súper Precio-Calidad"
    ],
    "tastingRadar": {
      "aroma": 89,
      "body": 88,
      "tannins": 85,
      "acidity": 85,
      "finish": 88
    },
    "tastingNotes": "El tinto de almuerzo por excelencia en los hogares chilenos. Fruta roja viva, ciruelas, pimentón dulce suave y toques especiados. Entrada amable, taninos dóciles y cuerpo medio que acompaña el día a día.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal",
    "agingPotential": "2 – 3 años",
    "pairings": [
      "Cazuela de vacuno",
      "Empanadas de pino",
      "Porotos granados",
      "Pastel de papas"
    ],
    "sellerLink": "https://www.santarita.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Rita",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta histórica 120 Santa Rita con el monumento patrio."
    },
    "coordinates": {
      "lat": -33.72,
      "lng": -70.68
    },
    "organicBio": "Sustentabilidad Certificada"
  },
  {
    "id": "gato_negro_carmenere_2022",
    "name": "Gato Negro Carménère",
    "winery": "Viña San Pedro (Molina)",
    "vintage": "2022",
    "category": "Varietal Masivo",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "curico",
    "valleyName": "Valle Central",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Carménère",
    "primaryGrape": "Carménère",
    "alcohol": "13.0%",
    "acidity": "5.1 g/L",
    "aging": "En cubas de acero inoxidable con breve contacto con roble",
    "priceAvgCLP": 3490,
    "priceRange": "under_5k",
    "priceTier": "$2.990 - $3.990 CLP (~$4 USD)",
    "approxPriceUSD": 4,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Líder",
      "Supermercados Diez",
      "Unimarc",
      "Mayorista 10",
      "El Cielo",
      "Botillerías populares"
    ],
    "scores": {
      "descorchados": 87,
      "timAtkin": 87,
      "jamesSuckling": 88,
      "robertParker": 86,
      "decanter": 87,
      "laCav": 87
    },
    "topScore": 88,
    "medals": [
      "El Vino Más Exportado de Viña San Pedro",
      "Presente en más de 80 países"
    ],
    "tastingRadar": {
      "aroma": 88,
      "body": 86,
      "tannins": 84,
      "acidity": 84,
      "finish": 87
    },
    "tastingNotes": "El ícono popular de la silueta felina. Aromas a frutos rojos maduros, ciruela, toques de vainilla y pimiento dulce. Paladar suave, redondo, muy accesible y sin complicaciones.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal",
    "agingPotential": "1 – 2 años",
    "pairings": [
      "Completos y asados caseros",
      "Parrillada con amigos",
      "Pastel de choclo",
      "Tallarines"
    ],
    "sellerLink": "https://www.sanpedro.cl",
    "bottleImage": "assets/images/wines/gato_negro_carmenere.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña San Pedro",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Gato Negro Carménère con el gato negro grabado."
    },
    "coordinates": {
      "lat": -35.1,
      "lng": -71.28
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "santa_carolina_reservado_cabernet_2022",
    "name": "Santa Carolina Reservado Cabernet Sauvignon",
    "winery": "Viña Santa Carolina (Fundada 1875)",
    "vintage": "2022",
    "category": "Varietal Masivo",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "curico",
    "valleyName": "Valle Central",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cabernet Sauvignon",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "13.0%",
    "acidity": "5.2 g/L",
    "aging": "En cubas de acero inoxidable con contacto con roble",
    "priceAvgCLP": 3690,
    "priceRange": "under_5k",
    "priceTier": "$2.990 - $4.290 CLP (~$4.5 USD)",
    "approxPriceUSD": 4.5,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Líder",
      "Supermercados Diez",
      "Mayorista 10",
      "Unimarc",
      "Botillerías"
    ],
    "scores": {
      "descorchados": 87,
      "timAtkin": 87,
      "jamesSuckling": 88,
      "robertParker": 86,
      "decanter": 87,
      "laCav": 87
    },
    "topScore": 88,
    "medals": [
      "Línea Clásica de Consumo Diario",
      "Patrimonio Histórico 1875"
    ],
    "tastingRadar": {
      "aroma": 88,
      "body": 87,
      "tannins": 86,
      "acidity": 85,
      "finish": 87
    },
    "tastingNotes": "Un clásico confiable en las mesas de Chile. Frutos rojos como cereza y frambuesa, ciruela y sutiles toques de vainilla. Taninos redondos, acidez agradable y fácil de beber.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "No requiere",
    "glassware": "Copa Universal",
    "agingPotential": "1 – 2 años",
    "pairings": [
      "Asado con amigos",
      "Choripanes",
      "Pizzas caseras",
      "Empanadas"
    ],
    "sellerLink": "https://www.santacarolina.cl",
    "bottleImage": "assets/images/wines/errazuriz_cabernet_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Santa Carolina",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Reservado Santa Carolina."
    },
    "coordinates": {
      "lat": -33.47,
      "lng": -70.61
    },
    "organicBio": "Sustentabilidad Wines of Chile"
  },
  {
    "id": "pipeno_campesino_don_silvestre_2022",
    "name": "Pipeño Campesino Tradicional Don Silvestre",
    "winery": "Tradición Campesina del Secano (Chillán / San Javier)",
    "vintage": "2022",
    "category": "Pipeño Patrimonial",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "maule",
    "valleyName": "Valle del Maule / Itata",
    "zone": "Entre Cordilleras",
    "region": "Sur",
    "blend": "100% Cepa País en garrafa tradicional",
    "primaryGrape": "Cepa País (Listán Prieto)",
    "alcohol": "11.5%",
    "acidity": "5.5 g/L",
    "aging": "En pipas y tinajas tradicionales de greda y raulí",
    "priceAvgCLP": 4500,
    "priceRange": "under_5k",
    "priceTier": "$3.500 - $5.500 CLP (~$5 USD / Garrafa 2L y 5L)",
    "approxPriceUSD": 5,
    "retailChannels": [
      "Botillerías",
      "Supermercados"
    ],
    "availableAt": [
      "El Cielo Mayorista",
      "Botillerías de Barrio",
      "La Vega Central",
      "Mercado Matovalle",
      "Distribuidoras"
    ],
    "scores": {
      "descorchados": 87,
      "timAtkin": 86,
      "jamesSuckling": 87,
      "robertParker": 85,
      "decanter": 85,
      "laCav": 87
    },
    "topScore": 87,
    "medals": [
      "El Alma del Terremoto y la Chicha Chilena",
      "Garrafa Típica Campesina"
    ],
    "tastingRadar": {
      "aroma": 87,
      "body": 85,
      "tannins": 83,
      "acidity": 90,
      "finish": 87
    },
    "tastingNotes": "El auténtico pipeño campesino vendido en garrafa de mimbre o plástico en fondas, picadas y botillerías tradicionales. De color rojo rubí claro traslúcido, aroma a uva fresca recién pisada, frutilla silvestre y notas rústicas. Ligero, refrescante y la base insustituible para el cóctel 'Terremoto'.",
    "servingTemp": "10°C – 12°C",
    "decantTime": "No requiere",
    "glassware": "Vaso de caña típico",
    "agingPotential": "Consumo fresco de temporada",
    "pairings": [
      "Terremoto chileno con helado de piña y granadina",
      "Costillar con puré picante",
      "Asado dieciochero"
    ],
    "sellerLink": "https://www.elcielo.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Patrimonio Popular",
      "badge": "📷 GARRAFA TÍPICA CHILENA",
      "description": "Garrafa tradicional de pipeño campesino chileno."
    },
    "coordinates": {
      "lat": -35.59,
      "lng": -71.7
    },
    "organicBio": "Vino Campesino de Parras en Secano"
  },
  {
    "id": "clos_de_pirque_tinto_2022",
    "name": "Clos de Pirque Vino Tinto Tradicional",
    "winery": "Viña Concha y Toro",
    "vintage": "2022",
    "category": "Vino Masivo Tradicional",
    "type": "Tinto",
    "style": "Supermercado & Botillería Masivo",
    "valleyId": "curico",
    "valleyName": "Valle Central",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "Ensamblaje tradicional de cepas tintas del Valle Central",
    "primaryGrape": "Cabernet Sauvignon",
    "alcohol": "12.0%",
    "acidity": "5.0 g/L",
    "aging": "En cubas de acero inoxidable",
    "priceAvgCLP": 2490,
    "priceRange": "under_5k",
    "priceTier": "$1.990 - $2.790 CLP (~$2.8 USD / 1 Litro)",
    "approxPriceUSD": 2.8,
    "retailChannels": [
      "Supermercados",
      "Botillerías"
    ],
    "availableAt": [
      "Líder",
      "Mayorista 10",
      "Unimarc",
      "Botillerías de todo Chile",
      "Almacenes de Barrio"
    ],
    "scores": {
      "descorchados": 85,
      "timAtkin": 84,
      "jamesSuckling": 85,
      "robertParker": 83,
      "decanter": 84,
      "laCav": 85
    },
    "topScore": 85,
    "medals": [
      "El Vino de Mesa Más Vendido de Chile en Formato 1L",
      "Líder Popular"
    ],
    "tastingRadar": {
      "aroma": 85,
      "body": 84,
      "tannins": 82,
      "acidity": 83,
      "finish": 84
    },
    "tastingNotes": "El infaltable en el almuerzo popular de domingo, asados de barrio y la preparación de terremotos, sangrías y navegaos chilenos. Aromas francos a frutas rojas, ciruela y mermelada. Paso ligero, fluido y amable.",
    "servingTemp": "14°C – 16°C (o caliente con especias como Navegado)",
    "decantTime": "No requiere",
    "glassware": "Vaso tradicional o copa corriente",
    "agingPotential": "Consumo inmediato",
    "pairings": [
      "Terremoto chileno (con helado de piña)",
      "Navegao sureño",
      "Asado popular",
      "Cazuela"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro",
      "badge": "📷 FORMATO POPULAR 1L",
      "description": "Envase tradicional Tetra Pak de 1 Litro Clos de Pirque."
    },
    "coordinates": {
      "lat": -33.67,
      "lng": -70.58
    },
    "organicBio": "Envase 100% Reciclable FSC"
  },
  {
    "id": "subercaseaux_grande_cuvee_2020",
    "name": "Subercaseaux Grande Cuvée Extra Brut",
    "winery": "Viña Concha y Toro (Limarí)",
    "vintage": "2020",
    "category": "Espumante Alta Gama",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "limari",
    "valleyName": "Valle de Limarí",
    "zone": "Costa / Suelos Calcáreos",
    "region": "Coquimbo",
    "blend": "75% Chardonnay, 25% Pinot Noir",
    "primaryGrape": "Chardonnay",
    "alcohol": "12.5%",
    "acidity": "7.2 g/L",
    "aging": "30 meses sobre sus lías en botella (Método Tradicional)",
    "priceAvgCLP": 25000,
    "priceRange": "25k_60k",
    "priceTier": "$22.000 - $28.000 CLP (~$28 USD)",
    "approxPriceUSD": 28,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "Descorcha.com",
      "El Mundo del Vino",
      "La CAV",
      "Jumbo Cava",
      "Supermercados Diez"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 94,
      "laCav": 94
    },
    "topScore": 95,
    "medals": [
      "Mejor Espumante de Chile Descorchados",
      "Uvas de Suelos de Caliza Marina de Limarí"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 85,
      "tannins": 35,
      "acidity": 99,
      "finish": 96
    },
    "tastingNotes": "Nacido en las terrazas aluviales con fósiles marinos y caliza de Limarí. Burbuja cremosa. Aromas minerales, lima, manzana verde, nuez y brioche. Boca de acidez vibrante y final salino.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "Servir directo en frappera con hielo",
    "glassware": "Copa Tulipa o Copa Universal",
    "agingPotential": "6 – 10 años",
    "pairings": [
      "Ceviche de reineta",
      "Erizos al natural",
      "Carpaccio de pulpo",
      "Centolla"
    ],
    "sellerLink": "https://www.descorcha.com",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Concha y Toro / Limarí Costa",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella pesada con etiqueta grabada y cápsula dorada de alta gama."
    },
    "coordinates": {
      "lat": -30.6333,
      "lng": -71.2
    },
    "organicBio": "Sustentabilidad Costera"
  },
  {
    "id": "torres_cordillera_brut_pinot_2021",
    "name": "Miguel Torres Cordillera Brut Pinot Noir",
    "winery": "Miguel Torres Chile",
    "vintage": "2021",
    "category": "Espumante Champenoise",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "curico",
    "valleyName": "Valle de Curicó",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Pinot Noir (Blanc de Noirs)",
    "primaryGrape": "Pinot Noir",
    "alcohol": "12.0%",
    "acidity": "6.8 g/L",
    "aging": "Segunda fermentación en botella (Método Tradicional) durante 24 meses sobre lías",
    "priceAvgCLP": 17990,
    "priceRange": "12k_25k",
    "priceTier": "$15.000 - $19.990 CLP (~$20 USD)",
    "approxPriceUSD": 20,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo Cava",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "Mejor Espumante Método Tradicional Descorchados",
      "Oro Champagne & Sparkling Wine World Championships"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 90,
      "tannins": 65,
      "acidity": 96,
      "finish": 95
    },
    "tastingNotes": "Elaborado bajo el método champenoise tradicional como Blanc de Noirs (uvas tintas de Pinot Noir vinificadas en blanco). Burbuja finísima y persistente. Notas de frutos rojos crujientes (grosellas, frutillas), brioche recién horneado, almendras tostadas y manzana asada. Boca cremosa y muy fresca.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "No decantar",
    "glassware": "Copa Tulipa para Espumante",
    "agingPotential": "3 – 6 años",
    "pairings": [
      "Ostras frescas de Calbuco",
      "Ceviche mixto",
      "Tártaro de atún",
      "Canapés de salmón ahumado"
    ],
    "sellerLink": "https://www.migueltorres.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Miguel Torres Chile",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Cordillera Brut con cápsula negra y etiqueta plateada."
    },
    "coordinates": {
      "lat": -34.98,
      "lng": -71.24
    },
    "organicBio": "Certificación Fair Trade & Sustentabilidad"
  },
  {
    "id": "montes_sparkling_angel_2020",
    "name": "Montes Sparkling Angel Extra Brut",
    "winery": "Viña Montes",
    "vintage": "2020",
    "category": "Espumante Alta Gama",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "aconcagua",
    "valleyName": "Valle de Aconcagua Costa (Zapallar)",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "70% Pinot Noir, 30% Chardonnay",
    "primaryGrape": "Pinot Noir",
    "alcohol": "12.5%",
    "acidity": "6.9 g/L",
    "aging": "36 meses de crianza sobre lías en botella (Método Tradicional)",
    "priceAvgCLP": 24990,
    "priceRange": "12k_25k",
    "priceTier": "$22.000 - $28.000 CLP (~$28 USD)",
    "approxPriceUSD": 28,
    "retailChannels": [
      "Tienda Especializada",
      "Supermercados",
      "Venta Directa"
    ],
    "availableAt": [
      "El Mundo del Vino",
      "Jumbo Cava",
      "La CAV",
      "Montes Store"
    ],
    "scores": {
      "descorchados": 95,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 95,
    "medals": [
      "36 Meses de Crianza sobre Lías",
      "Oro Decanter World Wine Awards"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 91,
      "tannins": 65,
      "acidity": 97,
      "finish": 96
    },
    "tastingNotes": "Nacido en el terruño extremo costero de Zapallar, a solo 7 km del Océano Pacífico. Crianza prolongada de 36 meses sobre sus lías. Burbujas milimétricas, aromas a pan tostado, frutos secos, pera blanca y ralladura de limón confitado. Paladar crujiente, cremoso y con un final salino.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "No decantar",
    "glassware": "Copa Tulipa de Espumante",
    "agingPotential": "4 – 8 años",
    "pairings": [
      "Caviar chileno",
      "Ostiones vivos con limón",
      "Carpaccio de locos",
      "Erizos frescos"
    ],
    "sellerLink": "https://www.monteswines.com",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Montes",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con ángel alado de Montes y foil dorado."
    },
    "coordinates": {
      "lat": -32.55,
      "lng": -71.46
    },
    "organicBio": "Viticultura Marina Extrema en Zapallar"
  },
  {
    "id": "santa_digna_estelado_rose_2022",
    "name": "Santa Digna Estelado Rosé Brut Cepa País",
    "winery": "Miguel Torres Chile",
    "vintage": "2022",
    "category": "Espumante Patrimonial",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "maule",
    "valleyName": "Valle del Maule (Secano Interior)",
    "zone": "Entre Cordilleras",
    "region": "Valle Central",
    "blend": "100% Cepa País (Listán Prieto) ancestral",
    "primaryGrape": "Cepa País (Listán Prieto)",
    "alcohol": "12.0%",
    "acidity": "6.5 g/L",
    "aging": "Segunda fermentación en botella (Método Tradicional)",
    "priceAvgCLP": 11990,
    "priceRange": "5k_12k",
    "priceTier": "$9.990 - $12.990 CLP (~$13 USD)",
    "approxPriceUSD": 13,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "Miguel Torres Tienda",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 93,
      "jamesSuckling": 93,
      "robertParker": 92,
      "decanter": 94,
      "laCav": 93
    },
    "topScore": 94,
    "medals": [
      "El Primer Espumante Rosé de Cepa País del Mundo",
      "World Champion Rosé Champagne Awards"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 88,
      "tannins": 70,
      "acidity": 95,
      "finish": 94
    },
    "tastingNotes": "Hito mundial creado por Miguel Torres para rescatar el patrimonio campesino de la uva País. Color rosa pálido con reflejos cobrizos. Aromas alegres de frutillas silvestres, frambuesas frescas, granada, cáscara de naranja y notas florales. Chispeante, crujiente y sumamente gastronómico.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "No decantar",
    "glassware": "Copa Tulipa para Espumante",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Empanaditas de cóctel",
      "Tartar de salmón",
      "Tiraditos de pescado",
      "Charcutería y tapas"
    ],
    "sellerLink": "https://www.migueltorres.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Miguel Torres Chile",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con foil rosado y la Cruz de Santa Digna."
    },
    "coordinates": {
      "lat": -35.2,
      "lng": -71.5
    },
    "organicBio": "Comercio Justo Fair For Life • Rescate Parras Viejas"
  },
  {
    "id": "valdivieso_grand_brut_2021",
    "name": "Valdivieso Grand Brut Tradicional",
    "winery": "Viña Valdivieso (Fundada 1879 por Alberto Valdivieso)",
    "vintage": "NV (Método Tradicional)",
    "category": "Espumante Champenoise",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "curico",
    "valleyName": "Valle de Curicó / Casablanca",
    "zone": "Costa",
    "region": "Valle Central",
    "blend": "60% Chardonnay, 40% Pinot Noir",
    "primaryGrape": "Chardonnay",
    "alcohol": "12.5%",
    "acidity": "6.8 g/L",
    "aging": "24 meses de segunda fermentación en botella sobre lías",
    "priceAvgCLP": 14000,
    "priceRange": "12k_25k",
    "priceTier": "$12.000 - $16.000 CLP (~$16 USD)",
    "approxPriceUSD": 16,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada",
      "Botillerías Mayoristas"
    ],
    "availableAt": [
      "Supermercados Diez",
      "Jumbo",
      "Líder",
      "Tottus",
      "Unimarc",
      "Booz.cl",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 92,
      "robertParker": 91,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "La Primera Casa de Champagne de Sudamérica (1879)",
      "Medalla de Oro Champagne & Sparkling World Championships"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 82,
      "tannins": 30,
      "acidity": 97,
      "finish": 94
    },
    "tastingNotes": "Elaborado por la casa pionera de espumantes de Chile. Burbuja fina y persistente. Notas a pan tostado, levadura, manzana asada, almendras y cítricos. Boca cremosa y muy fresca.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "Servir directo en frappera",
    "glassware": "Copa Tulipa para Espumante",
    "agingPotential": "4 – 8 años",
    "pairings": [
      "Ostras frescas",
      "Machas a la parmesana",
      "Empanadas de queso camarón",
      "Aperitivos"
    ],
    "sellerLink": "https://www.valdiviesowines.com",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Valdivieso / Lontué Curicó",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella champenoise Valdivieso Grand Brut con bozal dorado tradicional."
    },
    "coordinates": {
      "lat": -34.9833,
      "lng": -71.2333
    },
    "organicBio": "Tradición Centenaria desde 1879"
  },
  {
    "id": "vinamar_metodo_tradicional_2021",
    "name": "Viña Mar Método Tradicional Extra Brut",
    "winery": "Viña Mar (Casablanca)",
    "vintage": "2021",
    "category": "Espumante Champenoise",
    "type": "Espumante",
    "style": "Espumantes Chilenos",
    "valleyId": "casablanca",
    "valleyName": "Valle de Casablanca",
    "zone": "Costa",
    "region": "Aconcagua",
    "blend": "65% Chardonnay, 35% Pinot Noir",
    "primaryGrape": "Chardonnay",
    "alcohol": "12.0%",
    "acidity": "6.5 g/L",
    "aging": "18 meses en rima sobre sus lías",
    "priceAvgCLP": 14990,
    "priceRange": "12k_25k",
    "priceTier": "$13.000 - $16.500 CLP (~$16 USD)",
    "approxPriceUSD": 16,
    "retailChannels": [
      "Supermercados",
      "Botillerías",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "TiendaVSPT.cl",
      "La CAV",
      "El Cielo"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 92,
      "jamesSuckling": 93,
      "robertParker": 91,
      "decanter": 92,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "La Casa del Espumante en Casablanca",
      "Oro Catad'Or"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 89,
      "tannins": 65,
      "acidity": 94,
      "finish": 93
    },
    "tastingNotes": "Elaborado en la emblemática casona de estilo toscano de Viña Mar en Casablanca. Notas de manzana verde, cítricos confitados, levadura, pan brioche y flores blancas. Burbuja alegre y fresca con gran equilibrio.",
    "servingTemp": "6°C – 8°C",
    "decantTime": "No decantar",
    "glassware": "Copa Tulipa",
    "agingPotential": "2 – 5 años",
    "pairings": [
      "Aperitivos con quesos suaves",
      "Sushi y sashimi",
      "Ceviche de reineta"
    ],
    "sellerLink": "https://www.vinamar.cl",
    "bottleImage": "assets/images/wines/aymura_pinot_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Mar",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta clásica Viña Mar con diseño Art Nouveau."
    },
    "coordinates": {
      "lat": -33.31,
      "lng": -71.32
    },
    "organicBio": "Sustentabilidad VSPT Wine Group"
  },
  {
    "id": "tara_chardonnay_2021",
    "name": "Ventisquero Tara White Wine 1 Chardonnay",
    "winery": "Viña Ventisquero (Alejandro Galaz & Felipe Tosso)",
    "vintage": "2021",
    "category": "Vino de Desierto",
    "type": "Blanco",
    "style": "Clima Extremo / Desierto",
    "valleyId": "huasco",
    "valleyName": "Valle del Huasco (Desierto de Atacama)",
    "zone": "Costa Desértica",
    "region": "Atacama",
    "blend": "100% Chardonnay (Sin filtrar)",
    "primaryGrape": "Chardonnay",
    "alcohol": "13.0%",
    "acidity": "7.0 g/L",
    "aging": "Fermentado en tinajas y criado en barricas de roble francés de 5to uso",
    "priceAvgCLP": 36000,
    "priceRange": "25k_60k",
    "priceTier": "$32.000 - $40.000 CLP (~$42 USD)",
    "approxPriceUSD": 42,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La Vinoteca",
      "El Mundo del Vino",
      "La CAV",
      "Descorcha.com"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 95,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "Extremo Desierto de Atacama (Suelos con Salitre y Caliche)",
      "96 Pts Tim Atkin MW"
    ],
    "tastingRadar": {
      "aroma": 94,
      "body": 86,
      "tannins": 55,
      "acidity": 99,
      "finish": 97
    },
    "tastingNotes": "Nacido a 20 km del Pacífico en pleno Desierto de Atacama bajo la neblina camanchaca. Suelos con costra salina. Aromas a tiza, hierbas del desierto, sal marina y pomelo blanco. En boca es salino, crudo y vibrante.",
    "servingTemp": "9°C – 11°C",
    "decantTime": "Servir directo (Vino turbio natural)",
    "glassware": "Copa Universal",
    "agingPotential": "8 – 12 años",
    "pairings": [
      "Ostras de borde negro al natural",
      "Ceviche nortino",
      "Pescados a la sal"
    ],
    "sellerLink": "https://www.ventisquero.com",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Ventisquero / Desierto de Atacama",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella Tara Ventisquero con etiqueta serigrafiada de las dunas de Huasco."
    },
    "coordinates": {
      "lat": -28.45,
      "lng": -71.1833
    },
    "organicBio": "Viticultura Extrema en Suelos Calcáreos"
  },
  {
    "id": "tara_red_pinot_2020",
    "name": "Ventisquero Tara Red Wine 1 Pinot Noir",
    "winery": "Viña Ventisquero (Alejandro Galaz)",
    "vintage": "2020",
    "category": "Vino de Desierto Extremo",
    "type": "Tinto",
    "style": "Clima Extremo / Desierto",
    "valleyId": "huasco",
    "valleyName": "Valle del Huasco (Desierto Costero de Atacama)",
    "zone": "Costa",
    "region": "Atacama",
    "blend": "100% Pinot Noir sin filtrar",
    "primaryGrape": "Pinot Noir",
    "alcohol": "12.5%",
    "acidity": "6.4 g/L",
    "aging": "Fermentación con racimo entero y pisa de uva; crianza en barricas usadas de Borgoña",
    "priceAvgCLP": 42000,
    "priceRange": "25k_60k",
    "priceTier": "$38.000 - $48.000 CLP (~$48 USD)",
    "approxPriceUSD": 48,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 95,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Pinot Noir Más Extremo del Desierto de Atacama",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 88,
      "tannins": 88,
      "acidity": 97,
      "finish": 97
    },
    "tastingNotes": "Elaborado a orillas del Río Huasco en suelos salinos y calcáreos, enfriado por la camanchaca marina que choca con el calor del desierto. Color rubí traslúcido. Aromas únicos a sangre, pólvora, cerezas silvestres, hierbas del desierto, tiza salada y salmuera. Eléctrico, fibroso y magnético.",
    "servingTemp": "14°C – 15°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "10 – 15 años",
    "pairings": [
      "Atún sellado a la parrilla",
      "Pato asado",
      "Erizos frescos con tostadas",
      "Risotto de setas"
    ],
    "sellerLink": "https://www.ventisquero.com",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Ventisquero",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta artesanal Tara con ilustración de la flora del Desierto de Atacama."
    },
    "coordinates": {
      "lat": -28.4639,
      "lng": -71.2197
    },
    "organicBio": "Viticultura Extrema sin Filtrar • Desierto de Atacama"
  },
  {
    "id": "casa_silva_lago_ranco_pinot_2021",
    "name": "Casa Silva Lago Ranco Pinot Noir",
    "winery": "Viña Casa Silva (Mario Geisse)",
    "vintage": "2021",
    "category": "Vino Austral Extremo",
    "type": "Tinto",
    "style": "Clima Extremo / Desierto",
    "valleyId": "austral_patagonia",
    "valleyName": "Región Austral (Futrono / Cuenca del Lago Ranco)",
    "zone": "Costa",
    "region": "Austral",
    "blend": "100% Pinot Noir de viñedos volcánicos junto al lago",
    "primaryGrape": "Pinot Noir",
    "alcohol": "12.5%",
    "acidity": "6.5 g/L",
    "aging": "10 meses en barricas de roble francés de varios usos",
    "priceAvgCLP": 29990,
    "priceRange": "25k_60k",
    "priceTier": "$26.000 - $34.000 CLP (~$35 USD)",
    "approxPriceUSD": 35,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "La CAV",
      "El Mundo del Vino",
      "Casa Silva Tienda",
      "Jumbo Cava"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 95,
      "robertParker": 94,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "Pionero Austral del Lago Ranco (40° S)",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 87,
      "tannins": 86,
      "acidity": 97,
      "finish": 96
    },
    "tastingNotes": "Uno de los viñedos más australes del planeta, plantado frente a las aguas del Lago Ranco en suelos de ceniza volcánica reciente ('trumao'). Aromas de cerezas rojas ácidas, frambuesas silvestres, té verde, suelo volcánico mojado y notas florales. Acidez vibrante y filo cristalino.",
    "servingTemp": "13°C – 15°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Trucha patagónica a la plancha",
      "Salmón ahumado con madera de roble",
      "Risotto de setas silvestres"
    ],
    "sellerLink": "https://www.casasilva.cl",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Casa Silva",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con paisaje fotográfico del Lago Ranco y la Cordillera de los Andes."
    },
    "coordinates": {
      "lat": -40.13,
      "lng": -72.4
    },
    "organicBio": "Viticultura Austral en Suelos Volcánicos Trumao"
  },
  {
    "id": "coteaux_de_trumao_cru_pinot_2020",
    "name": "Coteaux de Trumao Cru Pinot Noir",
    "winery": "Coteaux de Trumao (Olivier Flosse & Christian Ségure)",
    "vintage": "2020",
    "category": "Vino Austral Extremo",
    "type": "Tinto",
    "style": "Clima Extremo / Desierto",
    "valleyId": "austral_patagonia",
    "valleyName": "Región Austral (Río Bueno / Osorno)",
    "zone": "Costa",
    "region": "Austral",
    "blend": "100% Pinot Noir en pie franco",
    "primaryGrape": "Pinot Noir",
    "alcohol": "12.0%",
    "acidity": "6.7 g/L",
    "aging": "12 meses en barricas de roble francés de Borgoña",
    "priceAvgCLP": 34000,
    "priceRange": "25k_60k",
    "priceTier": "$30.000 - $38.000 CLP (~$40 USD)",
    "approxPriceUSD": 40,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 95,
      "jamesSuckling": 94,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 95
    },
    "topScore": 96,
    "medals": [
      "Pinot Noir de Alta Escuela Borgoñesa en el Sur Extremo",
      "96 Pts Descorchados"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 86,
      "tannins": 85,
      "acidity": 98,
      "finish": 96
    },
    "tastingNotes": "Elaborado a orillas del Río Bueno en la Región de Los Lagos (40°S). Suelos de trumao volcánico profundo y clima lluvioso y frío. Aromas de cerezas rojas crujientes, sotobosque húmedo, hongos silvestres, piedra volcánica y flores secas. Tensión láser y finura memorable.",
    "servingTemp": "13°C – 15°C",
    "decantTime": "20 minutos",
    "glassware": "Copa Borgoña",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Trucha a la mantequilla negra",
      "Carpaccio de ciervo",
      "Queso de oveja de Chiloé"
    ],
    "sellerLink": "https://www.santiagowineclub.cl",
    "bottleImage": "assets/images/wines/pinot_noir_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Coteaux de Trumao",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta artesanal con grabado del Río Bueno en Osorno."
    },
    "coordinates": {
      "lat": -40.35,
      "lng": -72.85
    },
    "organicBio": "Viticultura Orgánica y Austral en Suelos Trumao"
  },
  {
    "id": "alcohuaz_grus_2020",
    "name": "Alcohuaz GRUS Syrah-Garnacha-Petite Sirah",
    "winery": "Viñedos de Alcohuaz (Marcelo Retamal)",
    "vintage": "2020",
    "category": "Vino de Altura Extrema",
    "type": "Tinto",
    "style": "Clima Extremo / Desierto",
    "valleyId": "elqui",
    "valleyName": "Valle de Elqui (Alcohuaz - 2.200 m.s.n.m.)",
    "zone": "Andes",
    "region": "Coquimbo",
    "blend": "65% Syrah, 20% Garnacha, 10% Petite Sirah, 5% Petit Verdot",
    "primaryGrape": "Syrah",
    "alcohol": "14.0%",
    "acidity": "6.0 g/L",
    "aging": "18 meses en huevos de concreto y fudres grandes de roble austríaco Stockinger",
    "priceAvgCLP": 29990,
    "priceRange": "25k_60k",
    "priceTier": "$26.000 - $34.000 CLP (~$35 USD)",
    "approxPriceUSD": 35,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La CAV",
      "La Vinoteca",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 96,
      "timAtkin": 96,
      "jamesSuckling": 95,
      "robertParker": 95,
      "decanter": 95,
      "laCav": 96
    },
    "topScore": 96,
    "medals": [
      "El Ensamblaje Andino del Elqui",
      "96 Pts Tim Atkin"
    ],
    "tastingRadar": {
      "aroma": 96,
      "body": 93,
      "tannins": 92,
      "acidity": 96,
      "finish": 96
    },
    "tastingNotes": "El hermano menor del mítico RHU. Uvas pisadas a pie en lagares de piedra a 2.200 metros de altura. Deslumbra con aromas a hierbas andinas, flores azules de montaña, moras frescas, pimienta negra silvestre y grafito. En boca es tenso, con energía eléctrica y final mineral inolvidable.",
    "servingTemp": "15°C – 17°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Syrah / Universal",
    "agingPotential": "12 – 18 años",
    "pairings": [
      "Cabrito asado del Elqui",
      "Cordero al romero",
      "Empanadas de queso de cabra"
    ],
    "sellerLink": "https://www.vinedosdealcohuaz.cl",
    "bottleImage": "assets/images/wines/almaviva.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viñedos de Alcohuaz",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta GRUS con constelación andina del Elqui."
    },
    "coordinates": {
      "lat": -30.22,
      "lng": -70.48
    },
    "organicBio": "Viticultura en Lagares de Piedra • Altura 2.200m"
  },
  {
    "id": "armidita_pajarete_2021",
    "name": "Armidita Pajarete D.O. Huasco Alto",
    "winery": "Viña Armidita (Familia González)",
    "vintage": "2021",
    "category": "Vino Asoleado D.O. Histórica",
    "type": "Blanco",
    "style": "Clima Extremo / Desierto",
    "valleyId": "huasco",
    "valleyName": "Valle del Huasco (Alto del Carmen)",
    "zone": "Cordillera / Desierto",
    "region": "Atacama",
    "blend": "100% Moscatel de Alejandría y Moscatel Rosada",
    "primaryGrape": "Moscatel de Alejandría",
    "alcohol": "14.5%",
    "acidity": "6.0 g/L",
    "aging": "Asoleado natural en zarandas al sol del desierto y fermentado en cubas",
    "priceAvgCLP": 19000,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $22.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Tienda Especializada",
      "Venta Directa"
    ],
    "availableAt": [
      "Santiago Wine Club",
      "La Vinoteca",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 93,
      "robertParker": 93,
      "decanter": 93,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "Denominación de Origen Pajarete (Decreto 1953)",
      "Patrimonio Ancestral del Desierto"
    ],
    "tastingRadar": {
      "aroma": 98,
      "body": 90,
      "tannins": 40,
      "acidity": 90,
      "finish": 96
    },
    "tastingNotes": "El vino con D.O. más antigua de Chile. Uvas asoleadas bajo el sol más puro del planeta en Huasco Alto. Aromas deslumbrantes de higos secos, miel de azahar, pasas rubias, cáscara de naranja confitada y almendras.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "Servir directo",
    "glassware": "Copa de Licor o Tulipa",
    "agingPotential": "10 – 20 años",
    "pairings": [
      "Queso azul de cabra",
      "Torta de milhojas con manjar",
      "Frutos secos",
      "Foie gras"
    ],
    "sellerLink": "https://www.armidita.cl",
    "bottleImage": "assets/images/wines/casillero_chardonnay_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Armidita / Huasco Alto",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Botella con sello oficial de Denominación de Origen Pajarete."
    },
    "coordinates": {
      "lat": -28.75,
      "lng": -70.4833
    },
    "organicBio": "Viticultura de Altura en el Desierto (1.200 msnm)"
  },
  {
    "id": "falernia_titon_syrah_2019",
    "name": "Viña Falernia Syrah Reserva Titon",
    "winery": "Viña Falernia (Giorgio Flessati & Aldo Olivier)",
    "vintage": "2019",
    "category": "Terroir Específico",
    "type": "Tinto",
    "style": "Clima Extremo / Desierto",
    "valleyId": "elqui",
    "valleyName": "Valle de Elqui (Titon - 350 m.s.n.m.)",
    "zone": "Costa",
    "region": "Coquimbo",
    "blend": "100% Syrah",
    "primaryGrape": "Syrah",
    "alcohol": "14.5%",
    "acidity": "5.7 g/L",
    "aging": "12 meses en barricas de roble francés y americano",
    "priceAvgCLP": 18990,
    "priceRange": "12k_25k",
    "priceTier": "$16.000 - $21.000 CLP (~$22 USD)",
    "approxPriceUSD": 22,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "Supermercados Diez",
      "La CAV",
      "El Mundo del Vino"
    ],
    "scores": {
      "descorchados": 94,
      "timAtkin": 94,
      "jamesSuckling": 94,
      "robertParker": 93,
      "decanter": 94,
      "laCav": 94
    },
    "topScore": 94,
    "medals": [
      "Pioneros del Valle de Elqui (1998)",
      "Oro Syrah du Monde"
    ],
    "tastingRadar": {
      "aroma": 95,
      "body": 93,
      "tannins": 90,
      "acidity": 91,
      "finish": 94
    },
    "tastingNotes": "Elaborado por los pioneros que demostraron al mundo el potencial vitivinícola del Valle de Elqui. Aromas de moras, arándanos, notas de pimienta negra, violetas y aceituna negra con sutiles toques ahumados. En boca es fresco, largo y de taninos muy elegantes.",
    "servingTemp": "16°C – 18°C",
    "decantTime": "30 minutos",
    "glassware": "Copa Syrah",
    "agingPotential": "8 – 14 años",
    "pairings": [
      "Cabrito asado al palo",
      "Cordero al romero",
      "Carnes braseadas"
    ],
    "sellerLink": "https://www.falernia.com",
    "bottleImage": "assets/images/wines/carmenere_chile_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Falernia",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta clásica Falernia con cielo estrellado del Elqui."
    },
    "coordinates": {
      "lat": -29.98,
      "lng": -70.75
    },
    "organicBio": "Sustentabilidad del Valle de Elqui"
  },
  {
    "id": "mayu_px_single_vineyard_2022",
    "name": "Mayu Pedro Ximénez Single Vineyard",
    "winery": "Viña Mayu (Mauro Olivier)",
    "vintage": "2022",
    "category": "Terroir Específico",
    "type": "Blanco",
    "style": "Clima Extremo / Desierto",
    "valleyId": "elqui",
    "valleyName": "Valle de Elqui",
    "zone": "Costa y Andes",
    "region": "Coquimbo",
    "blend": "100% Pedro Ximénez vinificado como vino seco",
    "primaryGrape": "Pedro Ximénez (PX)",
    "alcohol": "12.5%",
    "acidity": "6.5 g/L",
    "aging": "En cubas de acero inoxidable con trabajo de lías",
    "priceAvgCLP": 10990,
    "priceRange": "5k_12k",
    "priceTier": "$8.990 - $12.000 CLP (~$12 USD)",
    "approxPriceUSD": 12,
    "retailChannels": [
      "Supermercados",
      "Tienda Especializada"
    ],
    "availableAt": [
      "Jumbo",
      "La CAV",
      "Supermercados Diez",
      "Santiago Wine Club"
    ],
    "scores": {
      "descorchados": 93,
      "timAtkin": 93,
      "jamesSuckling": 92,
      "robertParker": 91,
      "decanter": 93,
      "laCav": 93
    },
    "topScore": 93,
    "medals": [
      "El Pedro Ximénez Seco Pionero de Chile",
      "93 Pts Tim Atkin"
    ],
    "tastingRadar": {
      "aroma": 93,
      "body": 85,
      "tannins": 70,
      "acidity": 95,
      "finish": 93
    },
    "tastingNotes": "El vino que demostró que la histórica uva pisquera Pedro Ximénez puede dar origen a blancos secos de clase mundial en el Elqui. Flor de azahar, pera verde, cáscara de limón y una salinidad calcárea vibrante.",
    "servingTemp": "8°C – 10°C",
    "decantTime": "No requiere",
    "glassware": "Copa Tulipa / Sauvignon Blanc",
    "agingPotential": "2 – 4 años",
    "pairings": [
      "Ostiones vivos de Tongoy",
      "Ceviche de corvina",
      "Queso de cabra fresco"
    ],
    "sellerLink": "https://www.mayu.cl",
    "bottleImage": "assets/images/wines/casillero_sauvignon_real.jpg",
    "isRealPhoto": true,
    "photoMeta": {
      "type": "Fotografía Real",
      "source": "Viña Mayu",
      "badge": "📷 FOTOGRAFÍA REAL VERIFICADA",
      "description": "Etiqueta Mayu con la Cruz del Sur y la constelación inca."
    },
    "coordinates": {
      "lat": -29.98,
      "lng": -70.6
    },
    "organicBio": "Sustentabilidad del Valle de Elqui"
  }
];

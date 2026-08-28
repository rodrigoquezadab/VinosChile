const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images', 'wines');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const realPhotos = [
  {
    target: 'errazuriz_carmenere_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Errazuriz_Carmenere.jpg',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Errazuriz_Carmenere.jpg/500px-Errazuriz_Carmenere.jpg'
  },
  {
    target: 'apaltagua_carmenere_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Apaltagua_Carmenere_wine_-_Santiago%2C_Chile_%285278064260%29.jpg',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Apaltagua_Carmenere_wine_-_Santiago%2C_Chile_%285278064260%29.jpg/500px-Apaltagua_Carmenere_wine_-_Santiago%2C_Chile_%285278064260%29.jpg'
  },
  {
    target: 'cousino_macul_antiguas_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Antiguas_reservas_wine.jpg/500px-Antiguas_reservas_wine.jpg'
  },
  {
    target: 'torreon_paredes_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/20250405_Torreon_de_Paredes.jpg/500px-20250405_Torreon_de_Paredes.jpg'
  },
  {
    target: 'pinot_noir_chile_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Pinot_Noir_from_Chile.jpg/500px-Pinot_Noir_from_Chile.jpg'
  },
  {
    target: 'aymura_pinot_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Aymura_Pinot_Noir_Reserva.jpg/500px-Aymura_Pinot_Noir_Reserva.jpg'
  },
  {
    target: 'carmenere_volcanes_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Carmenere_volcanes.jpg/500px-Carmenere_volcanes.jpg'
  },
  {
    target: 'carmenere_chile_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Carmenere_from_Chile.jpg/500px-Carmenere_from_Chile.jpg'
  },
  {
    target: 'casillero_cabernet_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Casillero_del_Diablo_wine.jpg/500px-Casillero_del_Diablo_wine.jpg'
  },
  {
    target: 'casillero_ankara_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Casillero_del_Diablo_in_Ankara.jpg/500px-Casillero_del_Diablo_in_Ankara.jpg'
  },
  {
    target: 'conosur_bicicleta_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/6_juillet_2014_2e_%C3%A9tape_du_Tour_de_France%2C_vin_du_Chili_Cono_Sur_Bicicleta.jpg/500px-6_juillet_2014_2e_%C3%A9tape_du_Tour_de_France%2C_vin_du_Chili_Cono_Sur_Bicicleta.jpg'
  },
  {
    target: 'cabernet_carmenere_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cabernet_Carmenere_-_Chile.jpg/500px-Cabernet_Carmenere_-_Chile.jpg'
  },
  {
    target: 'gwc_carignan_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gwc-bot-cab-futures-vert-2007.jpg/210px-Gwc-bot-cab-futures-vert-2007.jpg'
  },
  {
    target: 'gato_negro_real.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Chile_-_Gato_negro_wine.jpg/500px-Chile_-_Gato_negro_wine.jpg'
  },
  {
    target: 'errazuriz_cabernet_real.jpg',
    url: 'https://images.openfoodfacts.org/images/products/780/430/410/4807/front_es.3.400.jpg'
  },
  {
    target: 'casillero_carmenere_real.jpg',
    url: 'https://images.openfoodfacts.org/images/products/780/432/008/7016/front_fr.3.400.jpg'
  },
  {
    target: 'casillero_sauvignon_real.jpg',
    url: 'https://images.openfoodfacts.org/images/products/780/432/030/1174/front_en.5.400.jpg'
  },
  {
    target: 'casillero_chardonnay_real.jpg',
    url: 'https://images.openfoodfacts.org/images/products/780/432/025/6900/front_en.5.400.jpg'
  }
];

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

realPhotos.forEach(p => {
  const dest = path.join(dir, p.target);
  try {
    console.log(`Downloading ${p.target}...`);
    execSync(`curl.exe -L -s -A "${userAgent}" -o "${dest}" "${p.url}"`);
    let sz = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
    if (sz < 5000 && p.fallback) {
      console.log(`Retrying with fallback for ${p.target}...`);
      execSync(`curl.exe -L -s -A "${userAgent}" -o "${dest}" "${p.fallback}"`);
      sz = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
    }
    console.log(`-> OK: ${p.target} (${(sz / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`-> Failed: ${p.target}`, err.message);
  }
});

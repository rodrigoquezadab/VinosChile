const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TerrunoChilenoBot/1.0 (https://terrunochileno.org; info@terrunochileno.org)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

const list = [
  { file: 'pinot_noir_chile_real.jpg', title: 'File:Pinot_Noir_from_Chile.jpg' },
  { file: 'aymura_pinot_real.jpg', title: 'File:Aymura_Pinot_Noir_Reserva.jpg' },
  { file: 'carmenere_volcanes_real.jpg', title: 'File:Carmenere_volcanes.jpg' },
  { file: 'carmenere_chile_real.jpg', title: 'File:Carmenere_from_Chile.jpg' },
  { file: 'casillero_cabernet_real.jpg', title: 'File:Casillero_del_Diablo_wine.jpg' },
  { file: 'casillero_ankara_real.jpg', title: 'File:Casillero_del_Diablo_in_Ankara.jpg' },
  { file: 'conosur_bicicleta_real.jpg', title: 'File:6_juillet_2014_2e_étape_du_Tour_de_France,_vin_du_Chili_Cono_Sur_Bicicleta.jpg' },
  { file: 'cabernet_carmenere_real.jpg', title: 'File:Cabernet_Carmenere_-_Chile.jpg' },
  { file: 'gato_negro_real.jpg', title: 'File:Chile_-_Gato_negro_wine.jpg' },
  { file: 'gwc_carignan_real.jpg', title: 'File:Gwc-bot-cab-futures-vert-2007.jpg' }
];

async function run() {
  const dir = path.join(__dirname, 'assets', 'images', 'wines');
  for (const item of list) {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(item.title) + '&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json';
    const json = await fetchJson(url);
    if (json && json.query && json.query.pages) {
      const page = Object.values(json.query.pages)[0];
      if (page && page.imageinfo && page.imageinfo[0]) {
        const thumbUrl = page.imageinfo[0].thumburl;
        const dest = path.join(dir, item.file);
        console.log(`Downloading ${item.file} from ${thumbUrl}...`);
        try {
          execSync(`curl.exe -L -s -A "Mozilla/5.0" -o "${dest}" "${thumbUrl}"`);
          const sz = fs.statSync(dest).size;
          console.log(`-> OK: ${item.file} (${(sz / 1024).toFixed(1)} KB)`);
        } catch(e) {
          console.error(`-> Error: ${item.file}`, e.message);
        }
      }
    }
  }
}

run();

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TerrunoChilenoBot/1.0 (info@terrunochileno.org)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const dir = path.join(__dirname, 'assets', 'images', 'wines');
  const brands = [
    { query: 'montes alpha', target: 'montes_alpha_real.jpg' },
    { query: 'santa rita 120', target: 'santa_rita_real.jpg' },
    { query: 'miguel torres cordillera', target: 'miguel_torres_real.jpg' },
    { query: 'undurraga carmenere', target: 'undurraga_carmenere_real.jpg' },
    { query: 'vina carmen gran reserva', target: 'vina_carmen_real.jpg' },
    { query: 'tarapaca gran reserva', target: 'tarapaca_real.jpg' },
    { query: 'gato negro cabernet', target: 'gato_negro_real.jpg' },
    { query: 'valdivieso cabernet', target: 'valdivieso_real.jpg' },
    { query: 'concha y toro marques', target: 'marques_casa_concha_real.jpg' },
    { query: 'concha y toro trio', target: 'trio_conchaytoro_real.jpg' },
    { query: 'concha y toro diablo', target: 'diablo_dark_red_real.jpg' }
  ];

  for (const b of brands) {
    const url = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=' + encodeURIComponent(b.query) + '&search_simple=1&action=process&json=1&page_size=5';
    const json = await fetchJson(url);
    if (json && json.products && json.products.length > 0) {
      const p = json.products.find(x => x.image_front_url || x.image_url) || json.products[0];
      const img = p.image_front_url || p.image_url;
      if (img) {
        const dest = path.join(dir, b.target);
        console.log(`Downloading ${b.target} from ${img}...`);
        try {
          execSync(`curl.exe -L -s -A "Mozilla/5.0" -o "${dest}" "${img}"`);
          const sz = fs.statSync(dest).size;
          console.log(`-> OK: ${b.target} (${(sz / 1024).toFixed(1)} KB) - Product: ${p.product_name || b.query}`);
        } catch (e) {
          console.error(`-> Error: ${b.target}`, e.message);
        }
      }
    }
  }
}

run();

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images', 'wines');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TerrunoChilenoApp/1.0 (contact@terrunochileno.cl)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const url = 'https://world.openfoodfacts.org/api/v2/search?countries_tags_en=chile&categories_tags_en=wines&fields=code,product_name,brands,image_front_url,image_url&page_size=50';
  const data = await fetchJson(url);
  if (data && data.products) {
    console.log(`Found ${data.products.length} Chilean wines on Open Food Facts.`);
    data.products.forEach((p, idx) => {
      const img = p.image_front_url || p.image_url;
      if (img) {
        const brand = (p.brands || 'chile').toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 15);
        const name = (p.product_name || 'wine').toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 15);
        const target = `real_${brand}_${name}_${p.code.substring(0, 8)}.jpg`;
        const dest = path.join(dir, target);
        console.log(`Downloading ${target}...`);
        try {
          execSync(`curl.exe -L -s -A "Mozilla/5.0" -o "${dest}" "${img}"`);
          const sz = fs.statSync(dest).size;
          console.log(`-> Saved: ${target} (${(sz / 1024).toFixed(1)} KB) - ${p.product_name} (${p.brands})`);
        } catch (e) {
          console.error('Error:', e.message);
        }
      }
    });
  }
}

run();

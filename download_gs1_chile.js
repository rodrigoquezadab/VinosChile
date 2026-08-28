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
  console.log('Searching Chilean GS1 Barcode 780 wines on Open Food Facts...');
  const searchUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=780+wine&search_simple=1&action=process&json=1&page_size=40';
  const data = await fetchJson(searchUrl);
  if (data && data.products) {
    console.log(`Found ${data.products.length} products.`);
    data.products.forEach((p, idx) => {
      const frontImg = p.image_front_url || p.image_url;
      const brand = (p.brands || 'chile_wine').toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 20);
      const name = (p.product_name || 'vino').toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 20);
      const targetName = `${brand}_${name}_${idx}_real.jpg`;
      
      if (frontImg) {
        const dest = path.join(dir, targetName);
        console.log(`Downloading real image for: ${p.product_name || p.brands}...`);
        try {
          execSync(`curl.exe -L -s -A "Mozilla/5.0" -o "${dest}" "${frontImg}"`);
          const sz = fs.statSync(dest).size;
          console.log(`-> Saved ${targetName} (${(sz / 1024).toFixed(1)} KB) - ${p.product_name}`);
        } catch (e) {
          console.error(`-> Error:`, e.message);
        }
      }
    });
  }
}

run();

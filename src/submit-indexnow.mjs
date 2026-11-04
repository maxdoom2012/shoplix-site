// Submits all site URLs to the IndexNow API (Bing, Yandex, Seznam, Naver).
// Usage: node submit-indexnow.mjs (or npm run indexnow from docs/src)

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SRC = dirname(fileURLToPath(import.meta.url));
const SITEMAP_PATH = join(SRC, '..', 'sitemap.xml');

const HOST = 'shoplix.app';
const KEY = '16b41ed77811418989f22b2fe62e0852';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow',
];

async function main() {
  console.log(`[IndexNow] Reading URLs from ${SITEMAP_PATH}...`);
  const sitemapXml = await readFile(SITEMAP_PATH, 'utf8');

  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls = new Set();

  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    urls.add(match[1]);
  }

  // Also include root domain
  urls.add(`https://${HOST}/`);

  const urlList = Array.from(urls);
  console.log(`[IndexNow] Found ${urlList.length} unique URLs to submit:`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  for (const endpoint of ENDPOINTS) {
    console.log(`\n[IndexNow] Sending POST request to ${endpoint}...`);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] ${endpoint} -> ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`[IndexNow] Success on ${endpoint}`);
      } else {
        const text = await res.text();
        console.warn(`[IndexNow] Warning from ${endpoint}: ${text}`);
      }
    } catch (err) {
      console.error(`[IndexNow] Failed to ping ${endpoint}:`, err.message);
    }
  }
}

main().catch((err) => {
  console.error('[IndexNow] Uncaught exception:', err);
  process.exit(1);
});

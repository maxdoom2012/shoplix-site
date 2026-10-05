// SEO and GEO metadata auditor for Shoplix docs site.
// Usage: node audit-seo.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.join(SRC, '..');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') {
        files = files.concat(walk(full));
      }
    } else if (f.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = walk(DOCS);
const results = htmlFiles.map((f) => {
  const content = fs.readFileSync(f, 'utf8');
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const text = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = text ? text.split(' ').length : 0;
  const rel = path.relative(DOCS, f).replace(/\\/g, '/');

  return {
    path: rel,
    titleLen: titleMatch ? titleMatch[1].length : 0,
    descLen: descMatch ? descMatch[1].length : 0,
    words,
    title: titleMatch ? titleMatch[1].slice(0, 45) + '...' : 'NONE',
  };
});

console.table(results);

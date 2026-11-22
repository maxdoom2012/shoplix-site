import { join } from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import {
  SITE,
  LANGS,
  ARTICLE_SLUGS,
  getArticleSlug,
  getArticlePath,
  getBlogIndexPath,
  getLandingPath,
} from '../i18n/languages.mjs';
import { upgradeExistingBlogPage } from './blog-layout.mjs';
import { renderBlogIndexPage } from './blog-index-data-b.mjs';
import { renderReceiptPost } from './post-receipt-d.mjs';
import { renderSpendingPost } from './post-spending-d.mjs';
import { renderBestAppsPost } from './post-best-f.mjs';
import { renderListonicPost } from './post-listonic-d.mjs';

const NEW_LANGS = ['de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ro', 'cs', 'sk', 'fi', 'hr'];
const ARTICLE_KEYS = Object.keys(ARTICLE_SLUGS);

const RENDERERS = {
  receipt: renderReceiptPost,
  spending: renderSpendingPost,
  bestApps: renderBestAppsPost,
  listonic: renderListonicPost,
};

function buildSitemapXml() {
  const xhtmlLinks = (pathForLang) => {
    const links = LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${pathForLang(l)}" />`
    );
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pathForLang('en')}" />`);
    return links.join('\n');
  };

  const entries = [];
  const addCluster = (pathForLang, lastmod, changefreq, priority) => {
    const alts = xhtmlLinks(pathForLang);
    for (const l of LANGS) {
      entries.push(`  <url>\n    <loc>${SITE}${pathForLang(l)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n${alts}\n  </url>`);
    }
  };

  addCluster(getLandingPath, '2026-11-22', 'weekly', '1.0');
  addCluster(getBlogIndexPath, '2026-11-22', 'weekly', '0.8');
  addCluster((l) => getArticlePath('receipt', l), '2026-11-04', 'monthly', '0.8');
  addCluster((l) => getArticlePath('spending', l), '2026-08-26', 'monthly', '0.8');
  addCluster((l) => getArticlePath('bestApps', l), '2026-08-25', 'monthly', '0.8');
  addCluster((l) => getArticlePath('listonic', l), '2026-11-22', 'monthly', '0.8');

  for (const staticPath of ['/privacy-policy.html', '/terms.html']) {
    entries.push(`  <url>\n    <loc>${SITE}${staticPath}</loc>\n    <lastmod>2026-08-25</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
}

export async function buildBlogAndSitemap(docsDir) {
  for (const lang of ['en', 'uk']) {
    const idxFile = join(docsDir, lang, 'blog', 'index.html');
    const rawIdx = await readFile(idxFile, 'utf8');
    await writeFile(idxFile, upgradeExistingBlogPage(rawIdx, lang, getBlogIndexPath), 'utf8');

    for (const key of ARTICLE_KEYS) {
      const slug = getArticleSlug(key, lang);
      const artFile = join(docsDir, lang, 'blog', slug, 'index.html');
      const rawArt = await readFile(artFile, 'utf8');
      await writeFile(artFile, upgradeExistingBlogPage(rawArt, lang, (l) => getArticlePath(key, l)), 'utf8');
    }
    console.log(`upgraded /${lang}/blog/ index + 4 articles with ${LANGS.length}-language switcher & hreflang`);
  }

  for (const lang of NEW_LANGS) {
    const blogDir = join(docsDir, lang, 'blog');
    await mkdir(blogDir, { recursive: true });
    await writeFile(join(blogDir, 'index.html'), renderBlogIndexPage(lang), 'utf8');

    for (const key of ARTICLE_KEYS) {
      const slug = getArticleSlug(key, lang);
      const artDir = join(blogDir, slug);
      await mkdir(artDir, { recursive: true });
      await writeFile(join(artDir, 'index.html'), RENDERERS[key](lang), 'utf8');
    }
    console.log(`built /${lang}/blog/ index + 4 articles`);
  }

  await writeFile(join(docsDir, 'sitemap.xml'), buildSitemapXml(), 'utf8');
  console.log(`built /sitemap.xml (${LANGS.length * 6 + 2} URLs with ${LANGS.length}-language hreflang clusters)`);
}

// Build-time static site generator for the Shoplix landing page.
//
// Renders the existing React mockup components (components.jsx) and page
// (page.jsx) to static HTML with ReactDOMServer, then wraps each language in a
// full HTML document with its own <head> (title, description, canonical,
// reciprocal hreflang, Open Graph, JSON-LD). NO client-side React or Babel is
// shipped — output is plain static HTML + CSS + a tiny scroll-reveal script.
//
//   Usage:  npm install && npm run build     (run from docs/src)
//   Output: docs/en/index.html, docs/uk/index.html, docs/index.html (redirect)

import { build as esbuild } from 'esbuild';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir, writeFile, rm } from 'node:fs/promises';

const SRC = dirname(fileURLToPath(import.meta.url));
const DOCS = join(SRC, '..');
const SITE = 'https://shoplix.app';
const OG_IMAGE = `${SITE}/app-icon.png`; // TODO: replace with a dedicated 1200x630 og-image.png

// ── Per-language <head> copy ─────────────────────────────────────────
const META = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Shoplix — Shared shopping list app that syncs in real time',
    description:
      'Free shared shopping list app for families and events. Add, claim, and check off items in real time so nobody buys twice — on iOS, Android, and the web.',
    ogTitle: 'Shoplix — Shared shopping list, in real time',
  },
  uk: {
    htmlLang: 'uk',
    ogLocale: 'uk_UA',
    title: 'Shoplix — спільний список покупок із синхронізацією в реальному часі',
    description:
      'Безкоштовний спільний список покупок для сім’ї та подій. Додавайте, бронюйте і відмічайте куплене в реальному часі, щоб ніхто не купив двічі. iOS, Android, веб.',
    ogTitle: 'Shoplix — спільний список покупок у реальному часі',
  },
};

const LANGS = ['en', 'uk'];

function attr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function hreflangLinks() {
  return [
    `<link rel="alternate" hreflang="en" href="${SITE}/en/" />`,
    `<link rel="alternate" hreflang="uk" href="${SITE}/uk/" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}/en/" />`,
  ].join('\n  ');
}

function jsonLd(lang) {
  const m = META[lang];
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Shoplix',
      url: `${SITE}/${lang}/`,
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Shoplix',
      description: m.description,
      applicationCategory: 'ShoppingApplication',
      operatingSystem: 'iOS, Android, Web',
      url: `${SITE}/${lang}/`,
      image: OG_IMAGE,
      // Free app: an Offer with price 0. No aggregateRating — never fabricate ratings.
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      installUrl: [
        'https://apps.apple.com/app/id6759987277',
        'https://play.google.com/store/apps/details?id=com.shoplix.app',
      ],
    },
  ];
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

const FONTS =
  'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap';

const REVEAL_SCRIPT = `<script>
(function(){
  var sel = '.dp-section-head,.dp-mode-card,.dp-live-feature,.dp-catalog-left,.dp-catalog-right,.dp-hero-copy,.dp-phone-stage,.dp-cta,.dp-footer';
  if (!('IntersectionObserver' in window)) { return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll(sel).forEach(function(el){ io.observe(el); });
})();
</script>`;

function documentHtml(lang, bodyHtml) {
  const m = META[lang];
  return `<!DOCTYPE html>
<html lang="${m.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>document.documentElement.classList.add('js')</script>
  <title>${attr(m.title)}</title>
  <meta name="description" content="${attr(m.description)}" />
  <link rel="canonical" href="${SITE}/${lang}/" />
  ${hreflangLinks()}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shoplix" />
  <meta property="og:locale" content="${m.ogLocale}" />
  <meta property="og:title" content="${attr(m.ogTitle)}" />
  <meta property="og:description" content="${attr(m.description)}" />
  <meta property="og:url" content="${SITE}/${lang}/" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${attr(m.ogTitle)}" />
  <meta name="twitter:description" content="${attr(m.description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="icon" type="image/png" href="/app-icon.png" />
  <link rel="apple-touch-icon" href="/app-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${FONTS}" rel="stylesheet" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
  <link rel="stylesheet" href="/prototype/shoplix-ui.css" />
  <link rel="stylesheet" href="/landing.css" />
  ${jsonLd(lang)}
</head>
<body>
${bodyHtml}
${REVEAL_SCRIPT}
</body>
</html>
`;
}

function rootRedirectHtml() {
  const m = META.en;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${attr(m.title)}</title>
  <meta name="description" content="${attr(m.description)}" />
  <link rel="canonical" href="${SITE}/en/" />
  ${hreflangLinks()}
  <link rel="icon" type="image/png" href="/app-icon.png" />
  <meta http-equiv="refresh" content="0; url=/en/" />
  <script>
    (function () {
      var l = (navigator.language || navigator.userLanguage || '').toLowerCase();
      location.replace(l.indexOf('uk') === 0 ? '/uk/' : '/en/');
    })();
  </script>
</head>
<body>
  <p style="font-family:system-ui,sans-serif;padding:24px">
    Redirecting to Shoplix — <a href="/en/">English</a> · <a href="/uk/">Українською</a>.
  </p>
</body>
</html>
`;
}

async function main() {
  const tmp = join(SRC, '.tmp');
  const outfile = join(tmp, 'page.mjs');

  // 1) Transpile + bundle page.jsx (react/react-dom kept external so the build
  //    script and the bundle share one React instance).
  await esbuild({
    entryPoints: [join(SRC, 'page.jsx')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    external: ['react', 'react-dom'],
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    outfile,
    logLevel: 'warning',
  });

  const { LandingPage } = await import('file://' + outfile.replace(/\\/g, '/'));

  // 2) Render each language to a static-HTML document.
  for (const lang of LANGS) {
    const body = ReactDOMServer.renderToStaticMarkup(React.createElement(LandingPage, { lang }));
    const dir = join(DOCS, lang);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), documentHtml(lang, body), 'utf8');
    console.log(`built /${lang}/index.html  (${body.length} bytes of body markup)`);
  }

  // 3) Root redirect shell.
  await writeFile(join(DOCS, 'index.html'), rootRedirectHtml(), 'utf8');
  console.log('built /index.html (redirect shell)');

  // 4) Clean up.
  await rm(tmp, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

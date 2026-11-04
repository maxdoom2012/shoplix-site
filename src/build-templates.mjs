import { SITE, OG_IMAGE, LANGS, LANG_INFO, getLandingPath, buildHreflangLinks } from './i18n/languages.mjs';
import { getLandingStrings } from './i18n/index.mjs';

export { LANGS };

const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function jsonLd(lang) {
  const m = getLandingStrings(lang).meta;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Shoplix',
      url: `${SITE}/`,
      logo: OG_IMAGE,
      email: 'support@shoplix.app',
      sameAs: ['https://x.com/ShoplixApp', 'https://apps.apple.com/app/id6759987277', 'https://play.google.com/store/apps/details?id=com.shoplix.app'],
    },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Shoplix', url: `${SITE}/${lang}/`, inLanguage: lang },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Shoplix',
      description: m.description,
      applicationCategory: 'ShoppingApplication',
      operatingSystem: 'iOS, Android, Web',
      url: `${SITE}/${lang}/`,
      image: OG_IMAGE,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      installUrl: ['https://apps.apple.com/app/id6759987277', 'https://play.google.com/store/apps/details?id=com.shoplix.app'],
    },
  ];
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

const FONTS = 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap';

const REVEAL_SCRIPT = `<script>(function(){document.addEventListener('click',function(e){document.querySelectorAll('details.dp-lang-menu[open]').forEach(function(d){if(!d.contains(e.target))d.removeAttribute('open');});});var sel='.dp-section-head,.dp-mode-card,.dp-live-feature,.dp-catalog-left,.dp-catalog-right,.dp-hero-copy,.dp-phone-stage,.dp-cta,.dp-footer';if(!('IntersectionObserver' in window)){return;}var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll(sel).forEach(function(el){io.observe(el);});})();</script>`;

export function documentHtml(lang, bodyHtml) {
  const info = LANG_INFO[lang] || LANG_INFO.en;
  const m = getLandingStrings(lang).meta;
  return `<!DOCTYPE html>
<html lang="${info.code}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>document.documentElement.classList.add('js')</script>
  <title>${attr(m.title)}</title>
  <meta name="description" content="${attr(m.description)}" />
  <link rel="canonical" href="${SITE}/${lang}/" />
  <meta name="apple-itunes-app" content="app-id=6759987277, app-argument=${SITE}/${lang}/" />
  ${buildHreflangLinks(getLandingPath)}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shoplix" />
  <meta property="og:locale" content="${info.ogLocale}" />
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

export function rootRedirectHtml() {
  const m = getLandingStrings('en').meta;
  const langBtns = LANGS.map((l) => `<a class="dp-btn ${l === 'en' ? 'dp-btn-primary' : 'dp-btn-ghost'}" href="/${l}/" hreflang="${l}">${LANG_INFO[l].name}</a>`).join('');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${attr(m.title)}</title>
  <meta name="description" content="${attr(m.description)}" />
  <link rel="canonical" href="${SITE}/en/" />
  ${buildHreflangLinks(getLandingPath)}
  <link rel="icon" type="image/png" href="/app-icon.png" />
  <link rel="apple-touch-icon" href="/app-icon.png" />
  <meta http-equiv="refresh" content="0; url=/en/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${FONTS}" rel="stylesheet" />
  <link rel="stylesheet" href="/landing.css" />
  <script>(function(){var sup=${JSON.stringify(LANGS)};var raw=(navigator.language||navigator.userLanguage||'en').toLowerCase().split('-')[0];var dest=sup.indexOf(raw)!==-1?raw:'en';location.replace('/'+dest+'/');})();</script>
  <style>.root-gateway{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:48px 24px;max-width:760px;margin:0 auto;text-align:center}.root-gateway h1{font-size:clamp(28px,4vw,42px);font-weight:600;color:#fff;margin:20px 0 14px;line-height:1.15}.root-gateway p{font-size:16px;line-height:1.65;color:var(--dp-fg-2);margin:0 0 24px}.root-features{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;text-align:left;margin:28px 0;width:100%}.root-feat-card{background:rgba(255,255,255,0.03);border:1px solid var(--dp-line);border-radius:14px;padding:16px 18px}.root-feat-card strong{display:block;color:#fff;font-size:14px;margin-bottom:6px}.root-feat-card span{font-size:13px;color:var(--dp-fg-3);line-height:1.5}.root-btn-group{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:24px}</style>
  ${jsonLd('en')}
</head>
<body>
  <div class="dp-page">
    <div class="dp-bg-orbs" aria-hidden="true"><span class="dp-orb dp-orb-blue"></span><span class="dp-orb dp-orb-violet"></span></div>
    <main class="root-gateway">
      <div class="dp-brand-mark" style="width:56px;height:56px;margin:0 auto" aria-label="Shoplix"></div>
      <h1>Shoplix — Real-Time Shared Shopping List App</h1>
      <p>Free, real-time shared shopping list application for families, couples, and events. Add, claim, and check off items in real time, or scan receipts to fill in exact prices and weights automatically — on iOS, Android, and the web.</p>
      <div class="root-btn-group">${langBtns}</div>
      <div class="root-features">
        <div class="root-feat-card"><strong>⚡ Real-Time Sync</strong><span>Instant WebSocket updates across all phones with &ldquo;I&rsquo;ll grab it&rdquo; item claiming.</span></div>
        <div class="root-feat-card"><strong>🧾 Receipt Scanning</strong><span>Snap a paper receipt or digital screenshot to auto-reconcile exact prices, weights &amp; quantities.</span></div>
        <div class="root-feat-card"><strong>📊 Budget Intelligence</strong><span>Track grocery inflation and spending by member, category, and product over time.</span></div>
        <div class="root-feat-card"><strong>🔒 Anonymous-First</strong><span>Start immediately without accounts or passwords. 100% offline-first reliability with SQLite.</span></div>
      </div>
      <div class="dp-meta-row" style="margin-top:12px"><a href="https://apps.apple.com/app/id6759987277" target="_blank" rel="noopener">App Store</a><span>·</span><a href="https://play.google.com/store/apps/details?id=com.shoplix.app" target="_blank" rel="noopener">Google Play</a><span>·</span><a href="https://app.shoplix.app/" target="_blank" rel="noopener">Web App</a><span>·</span><a href="/en/blog/">Blog</a></div>
    </main>
  </div>
</body>
</html>
`;
}

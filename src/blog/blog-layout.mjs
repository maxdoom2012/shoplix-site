import {
  SITE,
  OG_IMAGE,
  LANG_INFO,
  getArticlePath,
  getBlogIndexPath,
  buildHreflangLinks,
  renderLangDropdownHtml,
} from '../i18n/languages.mjs';
import { getLandingStrings } from '../i18n/index.mjs';

const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const CLOSE_MENU_SCRIPT = `<script>(function(){document.addEventListener('click',function(e){document.querySelectorAll('details.dp-lang-menu[open]').forEach(function(d){if(!d.contains(e.target))d.removeAttribute('open');});});})();</script>`;

const CTA_BTNS = (lang, campaign) => {
  const nav = getLandingStrings(lang).nav;
  return `<div class="dp-cta-row" style="justify-content:center">
    <a class="dp-btn dp-btn-primary" href="https://apps.apple.com/app/apple-store/id6759987277?pt=128613636&ct=shoplix-site&mt=8" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/></svg> App Store</a>
    <a class="dp-btn dp-btn-ghost" href="https://play.google.com/store/apps/details?id=com.shoplix.app&referrer=utm_source%3Dshoplix.app%26utm_medium%3Dweb%26utm_campaign%3D${lang}-${campaign}" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg> Google Play</a>
    <a class="dp-btn dp-btn-ghost" href="https://app.shoplix.app/" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> ${nav.openWeb}</a>
  </div>`;
};

function renderNavAndFooter(lang, pathForLang, mainHtml) {
  const nav = getLandingStrings(lang).nav;
  return `<div class="dp-page">
  <div class="dp-bg-orbs" aria-hidden="true"><span class="dp-orb dp-orb-blue"></span><span class="dp-orb dp-orb-violet"></span></div>
  <nav class="dp-nav">
    <a class="dp-brand" href="/${lang}/"><span class="dp-brand-mark" aria-label="Shoplix"></span><span>Shoplix</span></a>
    <div class="dp-nav-links"><a href="/${lang}/">${nav.home}</a><a href="/${lang}/blog/">${nav.blog}</a><a href="/${lang}/#download">${nav.getApp}</a></div>
    <div class="dp-nav-right">
      ${renderLangDropdownHtml(lang, pathForLang)}
      <a class="dp-nav-cta" href="/${lang}/#download">${nav.download}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></a>
    </div>
  </nav>
  <main class="ar-main">
${mainHtml}
  </main>
  <footer class="dp-footer">
    <div>SHOPLIX · 2026 · UA</div>
    <div class="dp-footer-links"><a href="/${lang}/blog/">${nav.blog}</a><a href="/privacy-policy.html">${nav.privacy}</a><a href="/terms.html">${nav.terms}</a><a href="https://x.com/ShoplixApp" target="_blank" rel="me noopener">X</a><a href="mailto:support@shoplix.app">support@shoplix.app</a></div>
  </footer>
</div>`;
}

export function renderBlogDocument({ lang, pathForLang, title, description, ogType = 'article', publishedTime, jsonLdObj, needsMockupCss = false, mainHtml }) {
  const info = LANG_INFO[lang] || LANG_INFO.en;
  const pageUrl = `${SITE}${pathForLang(lang)}`;
  const mockCss = needsMockupCss
    ? `\n  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />\n  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />\n  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />\n  <link rel="stylesheet" href="/prototype/shoplix-ui.css" />`
    : '';
  const pubMeta = publishedTime
    ? `\n  <meta property="article:published_time" content="${publishedTime}" />\n  <meta property="article:modified_time" content="${publishedTime}" />`
    : '';
  return `<!DOCTYPE html>
<html lang="${info.code}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>document.documentElement.classList.add('js')</script>
  <title>${attr(title)}</title>
  <meta name="description" content="${attr(description)}" />
  <link rel="canonical" href="${pageUrl}" />
  <meta name="apple-itunes-app" content="app-id=6759987277, app-argument=${pageUrl}" />
  ${buildHreflangLinks(pathForLang)}
  <meta property="og:type" content="${ogType}" />
  <meta property="og:site_name" content="Shoplix" />
  <meta property="og:locale" content="${info.ogLocale}" />
  <meta property="og:title" content="${attr(title)}" />
  <meta property="og:description" content="${attr(description)}" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:image" content="${OG_IMAGE}" />${pubMeta}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${attr(title)}" />
  <meta name="twitter:description" content="${attr(description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="icon" type="image/png" href="/app-icon.png" />
  <link rel="apple-touch-icon" href="/app-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />${mockCss}
  <link rel="stylesheet" href="/landing.css" />
  <link rel="stylesheet" href="/article.css" />
  <script type="application/ld+json">${JSON.stringify(jsonLdObj)}</script>
</head>
<body>
${renderNavAndFooter(lang, pathForLang, mainHtml)}
${CLOSE_MENU_SCRIPT}
</body>
</html>
`;
}

export function renderArticlePage(lang, key, d) {
  const pathForLang = (l) => getArticlePath(key, l);
  const pageUrl = `${SITE}${pathForLang(lang)}`;
  const nav = getLandingStrings(lang).nav;
  const faqEntities = d.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }));
  const jsonLdObj = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Shoplix', item: `${SITE}/${lang}/` }, { '@type': 'ListItem', position: 2, name: nav.blog, item: `${SITE}${getBlogIndexPath(lang)}` }, { '@type': 'ListItem', position: 3, name: d.crumb }] },
      { '@type': 'BlogPosting', headline: d.title, description: d.description, image: OG_IMAGE, datePublished: d.dateIso, dateModified: d.dateIso, inLanguage: lang, mainEntityOfPage: pageUrl, author: { '@type': 'Organization', name: 'Shoplix Team', url: `${SITE}/${lang}/` }, publisher: { '@type': 'Organization', name: 'Shoplix', url: `${SITE}/${lang}/`, logo: { '@type': 'ImageObject', url: OG_IMAGE } } },
      { '@type': 'FAQPage', mainEntity: faqEntities },
    ],
  };
  const faqHtml = d.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n        ');
  const mainHtml = `    <nav class="ar-crumbs" aria-label="Breadcrumb"><a href="/${lang}/">Shoplix</a><span class="sep">/</span><a href="/${lang}/blog/">${nav.blog}</a><span class="sep">/</span><span>${d.crumb}</span></nav>
    <header>
      <span class="ar-eyebrow">${d.eyebrow}</span>
      <h1 class="ar-h1">${d.h1}</h1>
      <p class="ar-lead">${d.lead}</p>
      <div class="ar-byline"><span>${d.byline}</span><span class="dot">${d.dateLabel}</span></div>
    </header>
    <div class="ar-prose">
      ${d.bodyHtml}
      <div class="ar-cta">
        <p class="ar-cta-title">${d.ctaTitle}</p>
        <p>${d.ctaDesc}</p>
        ${CTA_BTNS(lang, `blog-${key}`)}
      </div>
      <h2 id="faq">${d.faqTitle}</h2>
      <div class="ar-faq">
        ${faqHtml}
      </div>
      <p>${d.relatedHtml}</p>
    </div>`;
  return renderBlogDocument({ lang, pathForLang, title: d.title, description: d.description, ogType: 'article', publishedTime: d.dateIso, jsonLdObj, needsMockupCss: Boolean(d.needsMockupCss), mainHtml });
}

export function upgradeExistingBlogPage(html, lang, pathForLang) {
  let out = html.replace(
    /(?:<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\s*)+/,
    buildHreflangLinks(pathForLang) + '\n  '
  );
  out = out.replace(
    /<div class="dp-lang">[\s\S]*?<\/div>|<details class="dp-lang-menu">[\s\S]*?<\/details>/,
    renderLangDropdownHtml(lang, pathForLang)
  );
  if (!out.includes('details.dp-lang-menu[open]')) {
    out = out.replace('</body>', `${CLOSE_MENU_SCRIPT}\n</body>`);
  }
  return out;
}
export { CTA_BTNS };

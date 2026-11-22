export const SITE = 'https://shoplix.app';
export const OG_IMAGE = `${SITE}/app-icon.png`;

export const LANGS = ['en', 'uk', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ro', 'cs', 'sk', 'fi', 'hr'];

export const LANG_INFO = {
  en: { code: 'en', label: 'EN', name: 'English', ogLocale: 'en_US', country: 'US' },
  uk: { code: 'uk', label: 'UK', name: 'Українська', ogLocale: 'uk_UA', country: 'UA' },
  de: { code: 'de', label: 'DE', name: 'Deutsch', ogLocale: 'de_DE', country: 'DE' },
  es: { code: 'es', label: 'ES', name: 'Español', ogLocale: 'es_ES', country: 'ES' },
  fr: { code: 'fr', label: 'FR', name: 'Français', ogLocale: 'fr_FR', country: 'FR' },
  it: { code: 'it', label: 'IT', name: 'Italiano', ogLocale: 'it_IT', country: 'IT' },
  nl: { code: 'nl', label: 'NL', name: 'Nederlands', ogLocale: 'nl_NL', country: 'NL' },
  pl: { code: 'pl', label: 'PL', name: 'Polski', ogLocale: 'pl_PL', country: 'PL' },
  pt: { code: 'pt', label: 'PT', name: 'Português', ogLocale: 'pt_PT', country: 'PT' },
  ro: { code: 'ro', label: 'RO', name: 'Română', ogLocale: 'ro_RO', country: 'RO' },
  cs: { code: 'cs', label: 'CS', name: 'Čeština', ogLocale: 'cs_CZ', country: 'CZ' },
  sk: { code: 'sk', label: 'SK', name: 'Slovenčina', ogLocale: 'sk_SK', country: 'SK' },
  fi: { code: 'fi', label: 'FI', name: 'Suomi', ogLocale: 'fi_FI', country: 'FI' },
  hr: { code: 'hr', label: 'HR', name: 'Hrvatski', ogLocale: 'hr_HR', country: 'HR' },
};

export const ARTICLE_SLUGS = {
  receipt: {
    default: 'receipt-scanning-shopping-list',
    uk: 'skanuvannia-chekiv-spysok-pokupok',
  },
  spending: {
    default: 'grocery-list-app-that-tracks-spending',
    uk: 'dodatok-oblik-vytrat-na-produkty',
  },
  bestApps: {
    default: 'best-shared-shopping-list-apps',
    uk: 'naikrashchi-dodatky-spysok-pokupok',
  },
  listonic: {
    default: 'shoplix-vs-listonic',
    uk: 'shoplix-chy-listonic',
  },
};

export function getArticleSlug(key, lang) {
  const entry = ARTICLE_SLUGS[key];
  return (entry && entry[lang]) || entry.default;
}

export function getArticlePath(key, lang) {
  return `/${lang}/blog/${getArticleSlug(key, lang)}/`;
}

export function getBlogIndexPath(lang) {
  return `/${lang}/blog/`;
}

export function getLandingPath(lang) {
  return `/${lang}/`;
}

export function buildHreflangLinks(pathForLang) {
  const links = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${l}" href="${SITE}${pathForLang(l)}" />`
  );
  links.push(`<link rel="alternate" hreflang="x-default" href="${SITE}${pathForLang('en')}" />`);
  return links.join('\n  ');
}

export function renderLangDropdownHtml(currentLang, pathForLang) {
  const cur = LANG_INFO[currentLang] || LANG_INFO.en;
  const items = LANGS.map((l) => {
    const info = LANG_INFO[l];
    const active = l === currentLang ? ' active' : '';
    return `<a class="dp-lang-item${active}" href="${pathForLang(l)}" hreflang="${l}"><span>${info.name}</span><span class="dp-lang-code">${info.label}</span></a>`;
  }).join('');
  return `<details class="dp-lang-menu"><summary class="dp-lang-btn" aria-label="Language"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>${cur.label}</span><svg class="dp-lang-caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary><div class="dp-lang-list">${items}</div></details>`;
}

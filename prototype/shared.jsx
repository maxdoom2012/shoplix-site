// Shared bits: i18n hook, store badges, language toggle, brand mark, shared icons.

const { useState: useS, useEffect: useE, createContext, useContext } = React;

// ── Copy ──────────────────────────────────────────
const COPY = {
  // shared / nav
  webapp: { en: 'Web app', uk: 'Веб-додаток' },
  download: { en: 'Get the app', uk: 'Завантажити' },
  features: { en: 'Features', uk: 'Можливості' },
  how: { en: 'How it works', uk: 'Як це працює' },
  bento: { en: 'Everything', uk: 'Усе' },

  // hero
  heroEyebrow: { en: 'Shared shopping lists', uk: 'Спільні списки покупок' },
  heroTitleA: { en: 'Lists that finally', uk: 'Списки, які нарешті' },
  heroTitleB: { en: 'shop the way you do.', uk: 'розуміють, як ви купуєте.' },
  heroSub: {
    en: 'Two list types — one for the fridge, one for the party. Real-time sync, item claiming, and ghost items so nothing ever gets duplicated or quietly deleted.',
    uk: 'Два типи списків — один для холодильника, один для вечірки. Синхронізація в реальному часі, резервування товарів і примарні видалення.',
  },
  heroBadge1: { en: 'No sign-up needed', uk: 'Без реєстрації' },
  heroBadge2: { en: 'iOS · Android · Web', uk: 'iOS · Android · Веб' },
  heroBadge3: { en: 'Free, forever', uk: 'Безкоштовно' },
  heroLive: { en: 'Live · 4 members', uk: 'Наживо · 4 учасники' },

  // showcases
  showHouseTag: { en: 'Household', uk: 'Домашній' },
  showHouseTitle: { en: 'A weekly list that empties itself.', uk: 'Тижневий список, який очищається сам.' },
  showHouseDesc: {
    en: 'Buy an item and it slips away — clean list, every shop. The catalog quietly remembers what you usually buy so adding "milk" again takes one tap.',
    uk: 'Купив товар — він зникає. Чистий список після кожного походу. А каталог тихо памʼятає, що ви зазвичай купуєте.',
  },
  showEventTag: { en: 'Event', uk: 'Подія' },
  showEventTitle: { en: 'A party list that knows who’s bringing what.', uk: 'Список вечірки, що знає, хто що несе.' },
  showEventDesc: {
    en: 'Tap to claim the cake. Your face shows up next to it so nobody else duplicates the run. Bought items stay on the list — perfect for receipts later.',
    uk: 'Натисніть, щоб зарезервувати торт. Ваше обличчя зʼявиться поруч — ніхто не купить вдруге. Куплене залишається — зручно для чеків.',
  },

  // bento titles
  bentoTitle: { en: 'Small details that add up.', uk: 'Маленькі деталі, які складаються в ціле.' },
  bentoSub: { en: 'Pieced together from years of cooking with one fridge and four people.', uk: 'Зібрано з років готування з одним холодильником на чотирьох.' },

  // CTA
  ctaTitle: { en: 'Your fridge has been waiting.', uk: 'Холодильник давно чекає.' },
  ctaSub: { en: 'Free for everyone. No account required to start.', uk: 'Безкоштовно для всіх. Акаунт не обовʼязковий.' },

  // footer
  privacy: { en: 'Privacy', uk: 'Конфіденційність' },
  terms: { en: 'Terms', uk: 'Умови' },
};

const t = (key, lang) => (COPY[key] && COPY[key][lang]) || key;

// ── Language toggle ───────────────────────────────
function LangToggle({ lang, setLang, style }) {
  return (
    <div className="lang-toggle" style={style}>
      {['EN', 'UK'].map(l => (
        <button
          key={l}
          className={lang === l.toLowerCase() ? 'active' : ''}
          onClick={() => setLang(l.toLowerCase())}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ── Brand mark ────────────────────────────────────
function BrandMark({ size = 32, withWord = true, color = 'currentColor' }) {
  return (
    <a href="#" className="brand-mark" style={{ color }}>
      <img src="assets/app-icon.png" alt="" style={{ width: size, height: size, borderRadius: size * 0.28 }} />
      {withWord && <span style={{ fontSize: size * 0.62, letterSpacing: '-0.02em' }}>Shoplix</span>}
    </a>
  );
}

// ── Store badges ──────────────────────────────────
function StoreBadges({ size = 'md', dark = false }) {
  const h = size === 'lg' ? 56 : size === 'sm' ? 40 : 48;
  return (
    <div className="store-row" style={{ '--badge-h': `${h}px` }}>
      <a href="https://apps.apple.com/app/id6759987277" target="_blank" rel="noopener" className="store-btn store-apple">
        <i className="ph-fill ph-apple-logo" />
        <div>
          <span className="sb-tiny">Download on the</span>
          <span className="sb-big">App Store</span>
        </div>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.shoplix.app" target="_blank" rel="noopener" className="store-btn store-google">
        <i className="ph-fill ph-google-play-logo" />
        <div>
          <span className="sb-tiny">Get it on</span>
          <span className="sb-big">Google Play</span>
        </div>
      </a>
    </div>
  );
}

// ── Footer (shared) ───────────────────────────────
function SiteFooter({ lang }) {
  return (
    <footer className="site-footer">
      <div className="sf-inner">
        <div className="sf-brand">
          <BrandMark size={28} />
          <span className="sf-tagline">
            {lang === 'en'
              ? 'Made with patience, by a small team.'
              : 'Зроблено з терпінням, маленькою командою.'}
          </span>
        </div>
        <div className="sf-links">
          <a href="https://app.shoplix.app/" target="_blank" rel="noopener">{t('webapp', lang)}</a>
          <a href="../docs/privacy-policy.html">{t('privacy', lang)}</a>
          <a href="../docs/terms.html">{t('terms', lang)}</a>
          <a href="mailto:support@shoplix.app">support@shoplix.app</a>
        </div>
        <div className="sf-copy">© 2026 Shoplix</div>
      </div>
    </footer>
  );
}

window.COPY = COPY;
window.t = t;
window.LangToggle = LangToggle;
window.BrandMark = BrandMark;
window.StoreBadges = StoreBadges;
window.SiteFooter = SiteFooter;

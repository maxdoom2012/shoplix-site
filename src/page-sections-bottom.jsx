import React from 'react';
import { PhoneShell, ScreenStatistics, ScreenReceipt, ScreenTemplates, ScreenRecipes } from './components.jsx';
import { LANG_INFO, getArticlePath, getBlogIndexPath } from './i18n/languages.mjs';
import { getLandingStrings } from './i18n/index.mjs';

export function CatalogSection({ lang }) {
  const t = getLandingStrings(lang);
  return (
    <section className="dp-section" id="catalog">
      <div className="dp-catalog">
        <div className="dp-catalog-left">
          <div className="dp-section-eyebrow" style={{ marginBottom: 14 }}>04 · {t.catalog.eyebrow}</div>
          <h3>{t.catalog.h3a}<em style={{ background: 'linear-gradient(135deg, var(--dp-violet), var(--dp-blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontStyle: 'normal' }}>{t.catalog.h3Em}</em></h3>
          <p>{t.catalog.desc}</p>
          <div className="dp-catalog-stats">
            <div className="dp-stat"><strong><i className="ph-fill ph-users-three" style={{ fontSize: 24 }} /></strong><span>{t.catalog.s1}</span></div>
            <div className="dp-stat"><strong><i className="ph-fill ph-tag" style={{ fontSize: 24 }} /></strong><span>{t.catalog.s2}</span></div>
            <div className="dp-stat"><strong><i className="ph-fill ph-package" style={{ fontSize: 24 }} /></strong><span>{t.catalog.s3}</span></div>
            <div className="dp-stat"><strong><i className="ph-fill ph-chart-line-up" style={{ fontSize: 24 }} /></strong><span>{t.catalog.s4}</span></div>
          </div>
        </div>
        <div className="dp-catalog-right"><PhoneShell theme="ocean" size="md"><ScreenStatistics lang={lang} /></PhoneShell></div>
      </div>
    </section>
  );
}

export function ReceiptSection({ lang }) {
  const t = getLandingStrings(lang);
  const blogHref = getArticlePath('receipt', lang);
  return (
    <section className="dp-section" id="receipts">
      <div className="dp-section-head">
        <div className="dp-section-eyebrow">05 · {t.receipts.eyebrow}</div>
        <h2 className="dp-h2">
          {t.receipts.h2a}
          <em>{t.receipts.h2Em}</em>
        </h2>
        <p className="dp-section-sub">{t.receipts.sub}</p>
      </div>
      <div className="dp-live-grid">
        <div>
          <div className="dp-live-feature">
            <i className="ph-fill ph-receipt" />
            <div>
              <h4>{t.receipts.f1Title}</h4>
              <p>{t.receipts.f1Desc}</p>
            </div>
          </div>
          <div className="dp-live-feature">
            <i className="ph-fill ph-arrows-merge" />
            <div>
              <h4>{t.receipts.f2Title}</h4>
              <p>{t.receipts.f2Desc}</p>
            </div>
          </div>
          <div className="dp-live-feature">
            <i className="ph-fill ph-seal-check" />
            <div>
              <h4>{t.receipts.f3Title}</h4>
              <p>{t.receipts.f3Desc} <a href={blogHref} style={{ color: '#A3B6FF', fontWeight: 500 }}>{t.receipts.more}</a></p>
            </div>
          </div>
        </div>
        <div className="dp-phone-stage" style={{ minHeight: 'auto' }}>
          <PhoneShell theme="aurora" size="lg"><ScreenReceipt lang={lang} /></PhoneShell>
        </div>
      </div>
    </section>
  );
}

export function ReuseSection({ lang }) {
  const t = getLandingStrings(lang);
  return (
    <section className="dp-section" id="reuse">
      <div className="dp-section-head">
        <div className="dp-section-eyebrow">06 · {t.reuse.eyebrow}</div>
        <h2 className="dp-h2">{t.reuse.h2a}<em>{t.reuse.h2Em}</em></h2>
        <p className="dp-section-sub">{t.reuse.sub}</p>
      </div>
      <div className="dp-modes-grid">
        <div className="dp-mode-card">
          <div className="dp-mode-tag"><i className="ph-fill ph-copy-simple" /> {t.reuse.t1Tag}</div>
          <h3 className="dp-mode-title">{t.reuse.t1Title}</h3>
          <p className="dp-mode-desc">{t.reuse.t1Desc}</p>
          <div className="dp-mode-phone"><PhoneShell theme="ocean" size="md"><ScreenTemplates lang={lang} /></PhoneShell></div>
        </div>
        <div className="dp-mode-card event">
          <div className="dp-mode-tag"><i className="ph-fill ph-book-open" /> {t.reuse.t2Tag}</div>
          <h3 className="dp-mode-title">{t.reuse.t2Title}</h3>
          <p className="dp-mode-desc">{t.reuse.t2Desc}</p>
          <div className="dp-mode-phone"><PhoneShell theme="lavender" size="md"><ScreenRecipes lang={lang} /></PhoneShell></div>
        </div>
      </div>
    </section>
  );
}

export function SpeedAndFooterSection({ lang, appStoreUrl, playUrl }) {
  const t = getLandingStrings(lang);
  return (
    <>
      <section className="dp-section" id="speed">
        <div className="dp-section-head">
          <div className="dp-section-eyebrow">07 · {t.speed.eyebrow}</div>
          <h2 className="dp-h2">{t.speed.h2a}<em>{t.speed.h2Em}</em></h2>
          <p className="dp-section-sub">{t.speed.sub}</p>
        </div>
        <div className="dp-catalog-stats" style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="dp-stat"><strong><i className="ph-fill ph-microphone" style={{ fontSize: 24 }} /></strong><span>{t.speed.s1}</span></div>
          <div className="dp-stat"><strong><i className="ph-fill ph-barcode" style={{ fontSize: 24 }} /></strong><span>{t.speed.s2}</span></div>
          <div className="dp-stat"><strong><i className="ph-fill ph-cloud-slash" style={{ fontSize: 24 }} /></strong><span>{t.speed.s3}</span></div>
          <div className="dp-stat"><strong><i className="ph-fill ph-squares-four" style={{ fontSize: 24 }} /></strong><span>{t.speed.s4}</span></div>
        </div>
      </section>
      <section className="dp-cta" id="download">
        <h2>{t.speed.ctaA}<em>{t.speed.ctaEm}</em></h2>
        <div className="dp-cta-row" style={{ justifyContent: 'center' }}>
          <a className="dp-btn dp-btn-primary" href={appStoreUrl} target="_blank" rel="noopener" aria-label="Download on the App Store"><i className="ph-bold ph-apple-logo" /> App Store</a>
          <a className="dp-btn dp-btn-ghost" href={playUrl} target="_blank" rel="noopener" aria-label="Get it on Google Play"><i className="ph-bold ph-google-play-logo" /> Google Play</a>
          <a className="dp-btn dp-btn-ghost" href="https://app.shoplix.app/" target="_blank" rel="noopener" aria-label="Open Shoplix Web App"><i className="ph-bold ph-globe" /> {t.nav.openWeb}</a>
        </div>
      </section>
      <footer className="dp-footer">
        <div>SHOPLIX · 2026 · UA</div>
        <div className="dp-footer-links">
          <a href={getBlogIndexPath(lang)}>{t.nav.blog}</a>
          <a href="/privacy-policy.html">{t.nav.privacy}</a>
          <a href="/terms.html">{t.nav.terms}</a>
          <a href="https://x.com/ShoplixApp" target="_blank" rel="me noopener">X</a><a href="mailto:support@shoplix.app">support@shoplix.app</a>
        </div>
      </footer>
    </>
  );
}

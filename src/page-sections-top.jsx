import React from 'react';
import { PhoneShell, ScreenHome, ScreenParty } from './components.jsx';
import { LANGS, LANG_INFO, getBlogIndexPath, getLandingPath } from './i18n/languages.mjs';
import { getLandingStrings } from './i18n/index.mjs';

export function NavSection({ lang }) {
  const t = getLandingStrings(lang);
  const cur = LANG_INFO[lang] || LANG_INFO.en;
  return (
    <nav className="dp-nav">
      <div className="dp-brand">
        <div className="dp-brand-mark" aria-label="Shoplix"></div>
        <span>Shoplix</span>
      </div>
      <div className="dp-nav-links">
        <a href="#modes">{t.nav.modes}</a>
        <a href="#live">{t.nav.live}</a>
        <a href="#catalog">{t.nav.stats}</a>
        <a href="#receipts">{t.nav.receipts}</a>
        <a href="#reuse">{t.nav.recipes}</a>
        <a href={getBlogIndexPath(lang)}>{t.nav.blog}</a>
        <a href="#download">{t.nav.getApp}</a>
      </div>
      <div className="dp-nav-right">
        <details className="dp-lang-menu">
          <summary className="dp-lang-btn" aria-label="Language">
            <i className="ph ph-globe" style={{ fontSize: 14 }} />
            <span>{cur.label}</span>
            <i className="ph-bold ph-caret-down dp-lang-caret" style={{ fontSize: 10 }} />
          </summary>
          <div className="dp-lang-list">
            {LANGS.map((l) => (
              <a
                key={l}
                className={`dp-lang-item${l === lang ? ' active' : ''}`}
                href={getLandingPath(l)}
                hrefLang={l}
              >
                <span>{LANG_INFO[l].name}</span>
                <span className="dp-lang-code">{LANG_INFO[l].label}</span>
              </a>
            ))}
          </div>
        </details>
        <a className="dp-nav-cta" href="#download">
          {t.nav.download}
          <i className="ph-bold ph-arrow-up-right" />
        </a>
      </div>
    </nav>
  );
}

export function HeroSection({ lang, appStoreUrl, playUrl }) {
  const t = getLandingStrings(lang);
  return (
    <section className="dp-hero">
      <div className="dp-hero-grid">
        <div className="dp-hero-copy">
          <div className="dp-eyebrow">
            <span className="dp-eyebrow-dot" />
            {t.hero.eyebrow}
          </div>
          <h1 className="dp-h1">
            {t.hero.h1a}<br />
            {t.hero.h1b}<em>{t.hero.h1Em}</em>.
          </h1>
          <p className="dp-keyword-sub">{t.hero.kw}</p>
          <p className="dp-sub">{t.hero.sub}</p>
          <div className="dp-cta-row">
            <a className="dp-btn dp-btn-primary" href={appStoreUrl} target="_blank" rel="noopener" aria-label="Download on the App Store"><i className="ph-bold ph-apple-logo" /> App Store</a>
            <a className="dp-btn dp-btn-ghost" href={playUrl} target="_blank" rel="noopener" aria-label="Get it on Google Play"><i className="ph-bold ph-google-play-logo" /> Google Play</a>
            <a className="dp-btn dp-btn-ghost" href="https://app.shoplix.app/" target="_blank" rel="noopener" aria-label="Shoplix Web App"><i className="ph-bold ph-globe" /> Web</a>
          </div>
          <div className="dp-meta-row">
            <span>{t.hero.free}</span>
            <span>{t.hero.noSignup}</span>
            <span className="muted">iOS · Android · Web</span>
          </div>
        </div>
        <div className="dp-phone-stage">
          <div className="dp-callout dp-callout-1"><i className="ph-fill ph-users-three" /><div><strong>{t.hero.c1Title}</strong><div><span>{t.hero.c1Sub}</span></div></div></div>
          <div className="dp-callout dp-callout-2"><i className="ph-fill ph-user-circle-check" /><div><strong>{t.hero.c2Title}</strong><div><span>{t.hero.c2Sub}</span></div></div></div>
          <PhoneShell theme="aurora" size="lg"><ScreenHome lang={lang} /></PhoneShell>
        </div>
      </div>
    </section>
  );
}

export function ModesSection({ lang }) {
  const t = getLandingStrings(lang);
  return (
    <section className="dp-section" id="modes">
      <div className="dp-section-head">
        <div className="dp-section-eyebrow">02 · {t.modes.eyebrow}</div>
        <h2 className="dp-h2">{t.modes.h2a}<em>{t.modes.h2Em}</em></h2>
        <p className="dp-section-sub">{t.modes.sub}</p>
      </div>
      <div className="dp-modes-grid">
        <div className="dp-mode-card">
          <div className="dp-mode-tag"><i className="ph-fill ph-house" /> {t.modes.m1Tag}</div>
          <h3 className="dp-mode-title">{t.modes.m1Title}</h3>
          <p className="dp-mode-desc">{t.modes.m1Desc}</p>
          <div className="dp-mode-phone"><PhoneShell theme="aurora" size="md"><ScreenHome lang={lang} variant="b" /></PhoneShell></div>
        </div>
        <div className="dp-mode-card event">
          <div className="dp-mode-tag"><i className="ph-fill ph-confetti" /> {t.modes.m2Tag}</div>
          <h3 className="dp-mode-title">{t.modes.m2Title}</h3>
          <p className="dp-mode-desc">{t.modes.m2Desc}</p>
          <div className="dp-mode-phone"><PhoneShell theme="lavender" size="md"><ScreenParty lang={lang} /></PhoneShell></div>
        </div>
      </div>
    </section>
  );
}

export function LiveSection({ lang }) {
  const t = getLandingStrings(lang);
  return (
    <section className="dp-section" id="live">
      <div className="dp-section-head">
        <div className="dp-section-eyebrow">03 · {t.live.eyebrow}</div>
        <h2 className="dp-h2">{t.live.h2a}<em>{t.live.h2Em}</em></h2>
        <p className="dp-section-sub">{t.live.sub}</p>
      </div>
      <div className="dp-live-grid">
        <div>
          <div className="dp-live-feature"><i className="ph-fill ph-user-circle" /><div><h4>{t.live.f1Title}</h4><p>{t.live.f1Desc}</p></div></div>
          <div className="dp-live-feature"><i className="ph-fill ph-eye" /><div><h4>{t.live.f2Title}</h4><p>{t.live.f2Desc}</p></div></div>
          <div className="dp-live-feature"><i className="ph-fill ph-bell-ringing" /><div><h4>{t.live.f3Title}</h4><p>{t.live.f3Desc}</p></div></div>
        </div>
        <div className="dp-phone-stage" style={{ minHeight: 'auto' }}><PhoneShell theme="aurora" size="lg"><ScreenHome lang={lang} variant="c" /></PhoneShell></div>
      </div>
    </section>
  );
}

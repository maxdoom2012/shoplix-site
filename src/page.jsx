import React from 'react';
import { NavSection, HeroSection, ModesSection, LiveSection } from './page-sections-top.jsx';
import { CatalogSection, ReceiptSection, ReuseSection, SpeedAndFooterSection } from './page-sections-bottom.jsx';

export function LandingPage({ lang }) {
  const appStoreUrl = 'https://apps.apple.com/app/apple-store/id6759987277?pt=128613636&ct=shoplix-site&mt=8';
  const playUrl = `https://play.google.com/store/apps/details?id=com.shoplix.app&referrer=utm_source%3Dshoplix.app%26utm_medium%3Dweb%26utm_campaign%3D${lang}-landing`;

  return (
    <div className="dp-page">
      <div className="dp-bg-orbs" aria-hidden="true">
        <span className="dp-orb dp-orb-blue"></span>
        <span className="dp-orb dp-orb-violet"></span>
      </div>
      <NavSection lang={lang} />
      <HeroSection lang={lang} appStoreUrl={appStoreUrl} playUrl={playUrl} />
      <ModesSection lang={lang} />
      <LiveSection lang={lang} />
      <CatalogSection lang={lang} />
      <ReceiptSection lang={lang} />
      <ReuseSection lang={lang} />
      <SpeedAndFooterSection lang={lang} appStoreUrl={appStoreUrl} playUrl={playUrl} />
    </div>
  );
}

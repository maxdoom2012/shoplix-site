import React from 'react';
import { getLandingStrings } from './i18n/index.mjs';

export function PhoneShell({ theme = 'aurora', size = 'md', tilt = '0deg', children, className = '' }) {
  const widths = { xs: 200, sm: 240, md: 280, lg: 320, xl: 360 };
  const w = widths[size] || widths.md;
  const h = Math.round(w * 2.16);
  return (
    <div
      className={`sx-phone sx-theme-${theme} ${className}`}
      style={{ width: w + 'px', height: h + 'px', transform: `rotate(${tilt})` }}
    >
      <div className="sx-pinhole" />
      <div className="sx-screen">
        <div className="sx-statusbar">
          <span>9:41</span>
          <div className="sx-status-icons">
            <i className="ph-fill ph-cell-signal-high" />
            <i className="ph-fill ph-wifi-high" />
            <span className="sx-batt" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function SectionChip({ emoji, label, count, active }) {
  return (
    <div className={`sx-section ${active ? 'sx-section-active' : ''}`}>
      <span className="sx-section-emoji">{emoji}</span>
      <span className="sx-section-label">{label}</span>
      <span className="sx-section-count">{count}</span>
    </div>
  );
}

export function ItemRow({ name, qty, claimed, by, byColor, bought, onClick, animateClaim, removing }) {
  return (
    <div
      className={`sx-item ${bought ? 'sx-item-bought' : ''} ${claimed ? 'sx-item-with-stripe' : ''} ${animateClaim ? 'sx-item-claim-anim' : ''} ${removing ? 'sx-item-removing' : ''}`}
      onClick={onClick}
    >
      {bought ? (
        <div className="sx-cart sx-check"><i className="ph-bold ph-check" /></div>
      ) : (
        <div className="sx-cart"><i className="ph ph-shopping-cart" /></div>
      )}
      <div className="sx-item-name">{name}</div>
      {qty && <div className="sx-item-qty">{qty}</div>}
      {!claimed && !bought && <i className="ph ph-user-circle sx-item-userbtn" />}
      {(claimed || bought) && <div className="sx-item-claim" style={{ background: byColor || '#7c5cff' }}>{by}</div>}
    </div>
  );
}

export function TitleBar({ icon, title, subtitle, right }) {
  return (
    <div className="sx-titlebar">
      <i className="ph ph-arrow-left sx-tb-back" />
      <div className="sx-tb-icon">{icon}</div>
      <div className="sx-tb-text">
        <div className="sx-tb-title">{title}</div>
        {subtitle && <div className="sx-tb-sub">{subtitle}</div>}
      </div>
      <div className="sx-tb-right">
        {right || <><i className="ph ph-arrows-left-right" /><i className="ph ph-dots-three-vertical" /></>}
      </div>
    </div>
  );
}

export function ListMetaPills({ items }) {
  return (
    <div className="sx-meta-pills">
      {items.map((it, i) => (
        <div key={i} className="sx-meta-pill"><i className={`ph ${it.icon}`} />{it.label}</div>
      ))}
    </div>
  );
}

export function AddItemBar({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  return (
    <div className="sx-add-bar">
      <i className="ph ph-plus" />
      <span>{m.addPlaceholder}</span>
    </div>
  );
}

export function BottomTabs({ active = 'lists', lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  const tabs = [
    { id: 'lists', icon: 'ph-list-checks', label: m.listsTab },
    { id: 'templates', icon: 'ph-copy-simple', label: m.templatesTab },
    { id: 'recipes', icon: 'ph-cooking-pot', label: m.recipesTab },
  ];
  return (
    <div className="sx-bottom-tabs">
      {tabs.map(t => (
        <div key={t.id} className={`sx-tab ${active === t.id ? 'sx-tab-active' : ''}`}>
          <i className={`ph ${t.icon}`} />
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

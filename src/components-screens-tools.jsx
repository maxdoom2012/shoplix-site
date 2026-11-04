import React from 'react';
import { TitleBar, BottomTabs } from './components-primitives.jsx';
import { getLandingStrings } from './i18n/index.mjs';

export function ScreenStatistics({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  const cats = [
    { emoji: '🥩', name: m.meat, amount: m.catAmounts[0], pct: 100 },
    { emoji: '🥬', name: m.veg, amount: m.catAmounts[1], pct: 82 },
    { emoji: '🌾', name: m.cereals, amount: m.catAmounts[2], pct: 66 },
    { emoji: '🍞', name: m.bakery, amount: m.catAmounts[3], pct: 15 },
    { emoji: '🍿', name: m.snacks, amount: m.catAmounts[4], pct: 13 },
    { emoji: '🥛', name: m.dairy, amount: m.catAmounts[5], pct: 8 },
  ];
  return (
    <>
      <TitleBar title={m.statsTitle} right={<i className="ph ph-calendar-blank" />} />
      <div className="sx-stat-tabs">
        <span className="sx-stat-tab sx-stat-tab-active">{m.week}</span>
        <span className="sx-stat-tab">{m.month}</span>
        <span className="sx-stat-tab">{m.year}</span>
        <i className="ph ph-calendar-blank" />
      </div>
      <div className="sx-stat-summary">
        <div>
          <div className="sx-stat-label">{m.spent}</div>
          <div className="sx-stat-spent">{m.spentVal}</div>
        </div>
        <div>
          <div className="sx-stat-label">{m.planned}</div>
          <div className="sx-stat-planned">{m.plannedVal}</div>
        </div>
      </div>
      <div className="sx-stat-subtabs">
        <span>{m.byMember}</span>
        <span className="sx-stat-subtab-active">{m.byCat}</span>
        <span>{m.byProd}</span>
      </div>
      <div className="sx-stat-list">
        {cats.map((c, i) => (
          <div key={i} className="sx-stat-row">
            <span className="sx-stat-emoji">{c.emoji}</span>
            <div className="sx-stat-row-main">
              <div className="sx-stat-row-name">{c.name}</div>
              <div className="sx-stat-bar"><span style={{ width: c.pct + '%' }} /></div>
            </div>
            <div className="sx-stat-row-amount">{c.amount}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function ScreenReceipt({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  const rowStyle = { display: 'flex', alignItems: 'center', gap: 6, background: 'var(--sx-card)', borderRadius: 11, padding: '6px 8px', marginBottom: 4 };
  const secStyle = { fontSize: 9, fontWeight: 600, color: 'var(--sx-accent)', padding: '6px 4px 3px' };
  const chk = <div className="sx-cart sx-check" style={{ width: 20, height: 20, borderRadius: 6 }}><i className="ph-bold ph-check" style={{ fontSize: 11 }} /></div>;
  const rows = [
    { sec: m.secHist, name: m.r1Name, oldQ: m.r1OldQ, newQ: m.r1NewQ, oldP: m.r1OldP, newP: m.r1NewP, raw: m.r1Raw },
    { name: m.r2Name, newQ: m.r2NewQ, oldP: m.r2OldP, newP: m.r2NewP, raw: m.r2Raw },
    { sec: m.secActive, name: m.r3Name, newQ: m.r3NewQ, newP: m.r3NewP, raw: m.r3Raw },
    { name: m.r4Name, newQ: m.r4NewQ, newP: m.r4NewP, raw: m.r4Raw },
    { sec: m.secUnplanned, name: m.r5Name, newQ: m.r5NewQ, newP: m.r5NewP, raw: m.r5Raw },
  ];
  return (
    <>
      <TitleBar title={m.recTitle} right={<i className="ph ph-receipt" />} />
      <div style={{ margin: '0 10px 6px', padding: '8px 10px', background: 'var(--sx-card)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--sx-border)' }}>
        <div>
          <div style={{ fontSize: 8.5, color: 'var(--sx-text-dim)' }}>{m.selTotal}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--sx-accent)' }}>{m.recTotalVal}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 8.5, color: 'var(--sx-text-dim)' }}>{m.recTotalLabel}</div>
          <div style={{ fontSize: 8.5, fontWeight: 600, color: '#4ade80' }}>✓ {m.recMatches}</div>
        </div>
      </div>
      <div className="sx-list-body" style={{ gap: 0 }}>
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            {r.sec && <div style={secStyle}>{r.sec}</div>}
            <div style={rowStyle}>
              {chk}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: 8.5, color: 'var(--sx-text-dim)' }}>
                  {r.oldQ && <><s>{r.oldQ}</s> → </>}{r.newQ} • {r.oldP && <><s>{r.oldP}</s> → </>}<strong style={{ color: 'var(--sx-accent)' }}>{r.newP}</strong>
                </div>
                <div style={{ fontSize: 7.5, color: 'var(--sx-text-mute)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.raw}</div>
              </div>
              <i className="ph ph-pencil-simple" style={{ fontSize: 11, color: 'var(--sx-text-dim)' }} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div style={{ margin: 'auto 10px 10px', padding: '8px 12px', borderRadius: 12, background: 'var(--sx-accent)', color: '#081120', fontWeight: 700, fontSize: 10.5, textAlign: 'center' }}>
        ✓ {m.applyBtn}
      </div>
    </>
  );
}

export function ScreenTemplates({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  const tpls = [
    { name: m.tpl1, count: 6 },
    { name: m.tpl2, count: 6 },
    { name: m.tpl3, count: 8 },
  ];
  return (
    <>
      <div className="sx-app-header"><i className="ph ph-question" /><span className="sx-app-title">Shoplix</span><div className="sx-app-right"><i className="ph ph-users-three" /><div className="sx-app-avatar">MA<span className="sx-app-dot" /></div></div></div>
      <div className="sx-page-head"><h2><i className="ph ph-copy-simple" /> {m.templatesTab}</h2><p>{m.tplDesc}</p></div>
      <div className="sx-lists">
        {tpls.map((t, i) => (
          <div key={i} className="sx-list-card sx-tpl-card"><div className="sx-tpl-icon"><i className="ph ph-copy-simple" /></div><div className="sx-list-text"><div className="sx-list-name">{t.name}</div><div className="sx-list-meta">{t.count} {m.itemsWord}</div></div><i className="ph ph-dots-three-vertical" /></div>
        ))}
      </div>
      <button className="sx-fab sx-fab-mint"><i className="ph-bold ph-plus" /> {m.newTpl}</button>
      <BottomTabs active="templates" lang={lang} />
    </>
  );
}

export function ScreenRecipes({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  const recipes = [
    { name: m.rec1, meta: m.rec1Meta, color: '#dc2626', emoji: '🥣' },
    { name: m.rec2, meta: m.rec2Meta, color: '#fbbf24', emoji: '🍚' },
    { name: 'Carbonara', meta: m.rec3Meta, color: '#fb923c', emoji: '🍝' },
  ];
  return (
    <>
      <div className="sx-app-header"><i className="ph ph-question" /><span className="sx-app-title">Shoplix</span><div className="sx-app-right"><i className="ph ph-users-three" /><div className="sx-app-avatar">MA<span className="sx-app-dot" /></div></div></div>
      <div className="sx-page-head"><h2><i className="ph ph-book-open" /> {m.recipesTab}</h2><p>{m.recDesc}</p></div>
      <div className="sx-lists">
        {recipes.map((r, i) => (
          <div key={i} className="sx-list-card sx-recipe-card"><div className="sx-recipe-thumb" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}>{r.emoji}</div><div className="sx-list-text"><div className="sx-list-name">{r.name}</div><div className="sx-list-meta">{r.meta}</div></div><i className="ph ph-dots-three-vertical" /></div>
        ))}
      </div>
      <button className="sx-fab sx-fab-coral"><i className="ph-bold ph-plus" /> {m.newRec}</button>
      <BottomTabs active="recipes" lang={lang} />
    </>
  );
}

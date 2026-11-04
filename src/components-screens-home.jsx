import React from 'react';
import { SectionChip, ItemRow, TitleBar, ListMetaPills, AddItemBar } from './components-primitives.jsx';
import { getLandingStrings } from './i18n/index.mjs';

export function ScreenHome({ lang = 'en', variant = 'a' }) {
  const m = getLandingStrings(lang).mock;

  if (variant === 'c') {
    const unseenBar = (
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#c084fc', borderRadius: '0 2px 2px 0', zIndex: 2 }} />
    );
    return (
      <>
        <TitleBar icon="🏡" title={m.homeTitle} />
        <ListMetaPills items={[
          { icon: 'ph-house', label: m.household },
          { icon: 'ph-bell-ringing', label: m.new3 },
          { icon: 'ph-users-three', label: m.part3 },
        ]} />
        <div className="sx-list-body">
          <SectionChip emoji="🥛" label={m.dairy} count={3} active />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={m.cheese} claimed by="MA" byColor="#7c5cff" />
          </div>
          <ItemRow name={m.yogurt} />
          <ItemRow name={m.milk} bought by="MA" byColor="#7c5cff" />

          <SectionChip emoji="🍞" label={m.bakery} count={2} />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={m.bread} claimed by="OL" byColor="#0ea5e9" />
          </div>
          <ItemRow name={m.croissants} bought by="OL" byColor="#0ea5e9" />

          <SectionChip emoji="🍎" label={m.fruits} count={1} />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={m.apples} claimed by="AN" byColor="#f59e0b" />
          </div>
        </div>
        <AddItemBar lang={lang} />
      </>
    );
  }

  if (variant === 'b') {
    return (
      <>
        <TitleBar icon="🛒" title={m.weeklyTitle} />
        <ListMetaPills items={[
          { icon: 'ph-house', label: m.household },
          { icon: 'ph-list-numbers', label: m.items7 },
          { icon: 'ph-users-three', label: m.part3 },
        ]} />
        <div className="sx-list-body">
          <SectionChip emoji="🍞" label={m.bakery} count={2} active />
          <ItemRow name={m.bread} claimed by="TA" byColor="#f59e0b" />
          <ItemRow name={m.croissants} claimed by="TA" byColor="#f59e0b" />
          <SectionChip emoji="🥩" label={m.meat} count={2} />
          <ItemRow name={m.chicken} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={m.mince} claimed by="OL" byColor="#0ea5e9" />
          <SectionChip emoji="🥬" label={m.veg} count={3} />
          <ItemRow name={m.potatoes} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={m.onions} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={m.carrots} claimed by="OL" byColor="#0ea5e9" />
        </div>
        <AddItemBar lang={lang} />
      </>
    );
  }

  return (
    <>
      <TitleBar icon="🏡" title={m.homeTitle} />
      <ListMetaPills items={[
        { icon: 'ph-house', label: m.household },
        { icon: 'ph-list-numbers', label: m.items8 },
        { icon: 'ph-users-three', label: m.part2 },
      ]} />
      <div className="sx-list-body">
        <SectionChip emoji="🥛" label={m.dairy} count={3} active />
        <div className="sx-row-anchor">
          <ItemRow name={m.milk} by="MA" byColor="#7c5cff" />
        </div>
        <ItemRow name={m.eggs} by="MA" byColor="#7c5cff" />
        <ItemRow name={m.butter} />
        <SectionChip emoji="🍎" label={m.fruits} count={2} />
        <ItemRow name={m.apples} claimed by="AP" byColor="#22c55e" />
        <ItemRow name={m.bananas} claimed by="AP" byColor="#22c55e" />
        <SectionChip emoji="🥬" label={m.veg} count={3} />
        <ItemRow name={m.cucumbers} />
        <ItemRow name={m.tomatoes} />
      </div>
      <AddItemBar lang={lang} />
    </>
  );
}

export function ScreenParty({ lang = 'en' }) {
  const m = getLandingStrings(lang).mock;
  return (
    <>
      <TitleBar icon="🎉" title={m.partyTitle} />
      <ListMetaPills items={[
        { icon: 'ph-confetti', label: m.event },
        { icon: 'ph-check-circle', label: '3/6' },
        { icon: 'ph-users-three', label: m.part1 },
      ]} />
      <div className="sx-list-body">
        <SectionChip emoji="🍷" label={m.alcohol} count={2} active />
        <ItemRow name={m.beer} />
        <ItemRow name={m.wine} />
        <SectionChip emoji="🥩" label={m.meat} count={1} />
        <ItemRow name={m.ribs} qty={m.ribsQty} claimed by="MA" byColor="#7c5cff" />
        <div className="sx-bought-header">
          <i className="ph ph-check-circle" />
          <span>{m.bought}</span>
          <span className="sx-bought-count">3</span>
          <i className="ph ph-caret-up" />
        </div>
        <ItemRow name={m.chips} bought by="MA" byColor="#7c5cff" />
        <ItemRow name={m.potatoes} bought by="MA" byColor="#7c5cff" />
        <ItemRow name={m.tomatoes} bought by="MA" byColor="#7c5cff" />
      </div>
      <AddItemBar lang={lang} />
    </>
  );
}

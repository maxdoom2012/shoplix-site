// Shoplix UI — drawn-from-scratch React components mimicking the real app.
// Each screen is a self-contained component that renders inside <PhoneShell>.
// Designed to be easily themed via CSS vars set on the shell.
//
// Components:
//   <PhoneShell theme="aurora|lavender|ember" size="lg|md|sm" tilt="-2deg" animated>{children}</PhoneShell>
//   <ScreenHome animated lang> — household list with claimed/bought items
//   <ScreenParty lang> — event list with bought section + progress
//   <ScreenMyLists theme lang> — list of lists with themed cards
//   <ScreenStatistics lang>
//   <ScreenTemplates lang>
//   <ScreenRecipes lang>
//   <ScreenHistory lang>
//   <ScreenSettings lang>

const { useEffect: useEffSx, useState: useStateSx } = React;

// ── PhoneShell — the device frame with status bar and themed background ──
function PhoneShell({ theme = 'aurora', size = 'md', tilt = '0deg', children, className = '' }) {
  // size scales the whole phone
  const widths = { xs: 200, sm: 240, md: 280, lg: 320, xl: 360 };
  const w = widths[size] || widths.md;
  const h = Math.round(w * 2.16); // roughly 9:19.5 + bezel
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

// ── Generic helpers ─────────────────────────
function SectionChip({ emoji, label, count, active }) {
  return (
    <div className={`sx-section ${active ? 'sx-section-active' : ''}`}>
      <span className="sx-section-emoji">{emoji}</span>
      <span className="sx-section-label">{label}</span>
      <span className="sx-section-count">{count}</span>
    </div>
  );
}

function ItemRow({ name, qty, claimed, by, byColor, bought, onClick, animateClaim, removing }) {
  return (
    <div className={`sx-item ${bought ? 'sx-item-bought' : ''} ${claimed ? 'sx-item-with-stripe' : ''} ${animateClaim ? 'sx-item-claim-anim' : ''} ${removing ? 'sx-item-removing' : ''}`} onClick={onClick}>
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

function TitleBar({ icon, title, subtitle, right }) {
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

function ListMetaPills({ items }) {
  return (
    <div className="sx-meta-pills">
      {items.map((it, i) => (
        <div key={i} className="sx-meta-pill"><i className={`ph ${it.icon}`} />{it.label}</div>
      ))}
    </div>
  );
}

function AddItemBar({ lang }) {
  return (
    <div className="sx-add-bar">
      <i className="ph ph-plus" />
      <span>{lang === 'uk' ? 'Додати товар…' : 'Add item…'}</span>
    </div>
  );
}

function BottomTabs({ active = 'lists', lang }) {
  const tabs = [
    { id: 'lists', icon: 'ph-list-checks', label: lang === 'uk' ? 'Списки' : 'Lists' },
    { id: 'templates', icon: 'ph-copy-simple', label: lang === 'uk' ? 'Шаблони' : 'Templates' },
    { id: 'recipes', icon: 'ph-cooking-pot', label: lang === 'uk' ? 'Рецепти' : 'Recipes' },
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

// ── Screen: Home (Household) — animated for hero ───────
function ScreenHome({ lang = 'en', animated = false, variant = 'a' }) {
  const [milkClaimed, setMilkClaimed] = useStateSx(false);
  const [eggsBought, setEggsBought] = useStateSx(false);
  const [eggsRemoved, setEggsRemoved] = useStateSx(false);
  const [showToast, setShowToast] = useStateSx(false);
  const [showCallout, setShowCallout] = useStateSx(false);

  useEffSx(() => {
    if (!animated) return;
    let timers = [];
    const loop = () => {
      setMilkClaimed(false); setEggsBought(false); setEggsRemoved(false); setShowToast(false); setShowCallout(false);
      timers.push(setTimeout(() => { setMilkClaimed(true); setShowToast(true); setShowCallout(true); }, 1800));
      timers.push(setTimeout(() => setShowToast(false), 4200));
      timers.push(setTimeout(() => setShowCallout(false), 5200));
      timers.push(setTimeout(() => setEggsBought(true), 5800));
      timers.push(setTimeout(() => setEggsRemoved(true), 7000));
      timers.push(setTimeout(loop, 9800));
    };
    loop();
    return () => { timers.forEach(clearTimeout); };
  }, [animated]);

  // Variant C — Realtime section: 3 freshly added (unseen) + 2 just-bought (ghost) inline
  if (variant === 'c') {
    const unseenBar = (
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#c084fc', borderRadius: '0 2px 2px 0', zIndex: 2 }} />
    );
    return (
      <>
        <TitleBar icon="🏡" title={lang === 'uk' ? 'Домашній' : 'Home'} />
        <ListMetaPills items={[
          { icon: 'ph-house', label: lang === 'uk' ? 'Домашній' : 'Household' },
          { icon: 'ph-bell-ringing', label: lang === 'uk' ? '3 нових' : '3 new' },
          { icon: 'ph-users-three', label: lang === 'uk' ? '3 учасники' : '3 participants' },
        ]} />
        <div className="sx-list-body">
          <SectionChip emoji="🥛" label={lang === 'uk' ? 'Молочне' : 'Dairy'} count={3} active />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={lang === 'uk' ? 'Сир' : 'Cheese'} claimed by="MA" byColor="#7c5cff" />
          </div>
          <ItemRow name={lang === 'uk' ? 'Йогурт' : 'Yogurt'} />
          <ItemRow name={lang === 'uk' ? 'Молоко' : 'Milk'} bought by="MA" byColor="#7c5cff" />

          <SectionChip emoji="🍞" label={lang === 'uk' ? 'Випічка' : 'Bakery'} count={2} />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={lang === 'uk' ? 'Хліб' : 'Sourdough'} claimed by="OL" byColor="#0ea5e9" />
          </div>
          <ItemRow name={lang === 'uk' ? 'Круасани' : 'Croissants'} bought by="OL" byColor="#0ea5e9" />

          <SectionChip emoji="🍎" label={lang === 'uk' ? 'Фрукти' : 'Fruits'} count={1} />
          <div style={{ position: 'relative' }}>
            {unseenBar}
            <ItemRow name={lang === 'uk' ? 'Яблука' : 'Apples'} claimed by="AN" byColor="#f59e0b" />
          </div>
        </div>
        <AddItemBar lang={lang} />
      </>
    );
  }

  // Variant B — different products, different claimers (for Two Modes section)
  if (variant === 'b') {
    return (
      <>
        <TitleBar icon="🛒" title={lang === 'uk' ? 'Закупи на тиждень' : 'Weekly run'} />
        <ListMetaPills items={[
          { icon: 'ph-house', label: lang === 'uk' ? 'Домашній' : 'Household' },
          { icon: 'ph-list-numbers', label: lang === 'uk' ? '7 товарів' : '7 items' },
          { icon: 'ph-users-three', label: lang === 'uk' ? '3 учасники' : '3 participants' },
        ]} />
        <div className="sx-list-body">
          <SectionChip emoji="🍞" label={lang === 'uk' ? 'Випічка' : 'Bakery'} count={2} active />
          <ItemRow name={lang === 'uk' ? 'Хліб' : 'Sourdough'} claimed by="TA" byColor="#f59e0b" />
          <ItemRow name={lang === 'uk' ? 'Круасани' : 'Croissants'} claimed by="TA" byColor="#f59e0b" />

          <SectionChip emoji="🥩" label={lang === 'uk' ? "М'ясо" : 'Meat'} count={2} />
          <ItemRow name={lang === 'uk' ? 'Куряче філе' : 'Chicken'} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={lang === 'uk' ? 'Фарш' : 'Mince'} claimed by="OL" byColor="#0ea5e9" />

          <SectionChip emoji="🥬" label={lang === 'uk' ? 'Овочі' : 'Vegetables'} count={3} />
          <ItemRow name={lang === 'uk' ? 'Картопля' : 'Potatoes'} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={lang === 'uk' ? 'Цибуля' : 'Onions'} claimed by="OL" byColor="#0ea5e9" />
          <ItemRow name={lang === 'uk' ? 'Морква' : 'Carrots'} claimed by="OL" byColor="#0ea5e9" />
        </div>
        <AddItemBar lang={lang} />
      </>
    );
  }

  return (
    <>
      <TitleBar icon="🏡" title={lang === 'uk' ? 'Домашній' : 'Home'} />
      <ListMetaPills items={[
        { icon: 'ph-house', label: lang === 'uk' ? 'Домашній' : 'Household' },
        { icon: 'ph-list-numbers', label: lang === 'uk' ? '8 товарів' : '8 items' },
        { icon: 'ph-users-three', label: lang === 'uk' ? '2 учасники' : '2 participants' },
      ]} />

      <div className="sx-list-body">
        <SectionChip emoji="🥛" label={lang === 'uk' ? 'Молочне' : 'Dairy'} count={3} active />
        <div className="sx-row-anchor">
          <ItemRow name={lang === 'uk' ? 'Молоко' : 'Milk'} claimed={milkClaimed} by="MA" byColor="#7c5cff" animateClaim={milkClaimed} />
          {milkClaimed && !eggsBought && (
            <div className="sx-callout">
              <div className="sx-callout-title">{lang === 'uk' ? 'Маша взяла на себе' : 'Maria claimed it'}</div>
              <div className="sx-callout-sub">{lang === 'uk' ? 'Не купуй друге' : "Don't grab another"}</div>
            </div>
          )}
        </div>
        <ItemRow name={lang === 'uk' ? 'Яйця' : 'Eggs'} bought={eggsBought} removing={eggsRemoved} by="MA" byColor="#7c5cff" />
        <ItemRow name={lang === 'uk' ? 'Масло' : 'Butter'} />

        <SectionChip emoji="🍎" label={lang === 'uk' ? 'Фрукти' : 'Fruits'} count={2} />
        <ItemRow name={lang === 'uk' ? 'Яблука' : 'Apples'} claimed by="AP" byColor="#22c55e" />
        <ItemRow name={lang === 'uk' ? 'Банани' : 'Bananas'} claimed by="AP" byColor="#22c55e" />

        <SectionChip emoji="🥬" label={lang === 'uk' ? 'Овочі' : 'Vegetables'} count={3} />
        <ItemRow name={lang === 'uk' ? 'Огірки' : 'Cucumbers'} />
        <ItemRow name={lang === 'uk' ? 'Помідори' : 'Tomatoes'} />
      </div>

      {showToast && (
        <div className="sx-live-toast" style={{ display: 'none' }}>
          <span className="sx-toast-avatar" style={{ background: '#7c5cff' }}>MA</span>
          <span>{lang === 'uk' ? 'Маша взяла молоко' : 'Maria claimed Milk'}</span>
        </div>
      )}

      <AddItemBar lang={lang} />
    </>
  );
}

// ── Screen: Party (Event) ─────────────────
function ScreenParty({ lang = 'en' }) {
  return (
    <>
      <TitleBar icon="🎉" title={lang === 'uk' ? 'Вечірка' : 'Party'} />
      <ListMetaPills items={[
        { icon: 'ph-confetti', label: 'Event' },
        { icon: 'ph-check-circle', label: '3/6' },
        { icon: 'ph-users-three', label: lang === 'uk' ? '1 учасник' : '1 participant' },
      ]} />

      <div className="sx-list-body">
        <SectionChip emoji="🍷" label={lang === 'uk' ? 'Алкоголь' : 'Alcohol'} count={2} active />
        <ItemRow name={lang === 'uk' ? 'Пиво' : 'Beer'} />
        <ItemRow name={lang === 'uk' ? 'Вино' : 'Wine'} />

        <SectionChip emoji="🥩" label={lang === 'uk' ? 'Мʼясо' : 'Meat'} count={1} />
        <ItemRow name={lang === 'uk' ? 'Свинячі реберця' : 'Pork ribs'} qty={lang === 'uk' ? '3 кг' : '3 kg'} claimed by="MA" byColor="#7c5cff" />

        <div className="sx-bought-header">
          <i className="ph ph-check-circle" />
          <span>{lang === 'uk' ? 'Куплено' : 'Bought'}</span>
          <span className="sx-bought-count">3</span>
          <i className="ph ph-caret-up" />
        </div>
        <ItemRow name={lang === 'uk' ? 'Чипси' : 'Chips'} bought by="MA" byColor="#7c5cff" />
        <ItemRow name={lang === 'uk' ? 'Картопля' : 'Potatoes'} bought by="MA" byColor="#7c5cff" />
        <ItemRow name={lang === 'uk' ? 'Помідори' : 'Tomatoes'} bought by="MA" byColor="#7c5cff" />
      </div>

      <AddItemBar lang={lang} />
    </>
  );
}

// ── Screen: My Lists — themed ─────────────────
function ScreenMyLists({ lang = 'en', theme = 'aurora' }) {
  return (
    <>
      <div className="sx-app-header">
        <i className="ph ph-question" />
        <span className="sx-app-title">Shoplix</span>
        <div className="sx-app-right">
          <i className="ph ph-users-three" />
          <div className="sx-app-avatar">MA<span className="sx-app-dot" /></div>
        </div>
      </div>

      <div className="sx-page-head">
        <h2><i className="ph ph-list-checks" /> {lang === 'uk' ? 'Мої списки' : 'My Lists'}</h2>
        <p>{lang === 'uk' ? 'Створи новий або приєднайся' : 'Create a new one or join an existing list'}</p>
      </div>

      <div className="sx-lists">
        <div className="sx-list-card sx-list-christmas">
          <span className="sx-list-emoji">❄️</span>
          <div className="sx-list-text">
            <div className="sx-list-name">{lang === 'uk' ? 'Різдво' : 'Christmas'}</div>
            <div className="sx-list-meta">{lang === 'uk' ? 'Порожньо' : 'Empty'} · Event</div>
          </div>
          <i className="ph ph-dots-three-vertical" />
          <div className="sx-snow"><span>❄</span><span>❄</span><span>·</span><span>❄</span><span>✦</span></div>
        </div>

        <div className="sx-list-card">
          <span className="sx-list-emoji">🎉</span>
          <div className="sx-list-text">
            <div className="sx-list-name">{lang === 'uk' ? 'Вечірка' : 'Party'}</div>
            <div className="sx-list-meta">3/6 · Event</div>
            <div className="sx-list-progress"><span style={{ width: '50%' }} /></div>
          </div>
          <i className="ph ph-dots-three-vertical" />
        </div>

        <div className="sx-list-card">
          <span className="sx-list-emoji">🏡</span>
          <div className="sx-list-text">
            <div className="sx-list-name">{lang === 'uk' ? 'Домашній' : 'Home'}</div>
            <div className="sx-list-meta">{lang === 'uk' ? '3 товари' : '3 items'} · Household</div>
          </div>
          <i className="ph ph-dots-three-vertical" />
        </div>
      </div>

      <button className="sx-fab"><i className="ph-bold ph-plus" /> {lang === 'uk' ? 'Створити' : 'Create'}</button>

      <BottomTabs active="lists" lang={lang} />
    </>
  );
}

// ── Screen: Statistics ─────────────────
function ScreenStatistics({ lang = 'en' }) {
  const cats = [
    { emoji: '🥩', name: lang === 'uk' ? 'Мʼясо' : 'Meat', amount: lang === 'uk' ? '₴4000' : '$99', pct: 100 },
    { emoji: '🥬', name: lang === 'uk' ? 'Овочі' : 'Vegetables', amount: lang === 'uk' ? '₴3300' : '$81.99', pct: 82 },
    { emoji: '🌾', name: lang === 'uk' ? 'Крупи та паста' : 'Cereals & Pasta', amount: lang === 'uk' ? '₴2600' : '$66', pct: 66 },
    { emoji: '🍞', name: lang === 'uk' ? 'Випічка' : 'Bakery', amount: lang === 'uk' ? '₴600' : '$15', pct: 15 },
    { emoji: '🍿', name: lang === 'uk' ? 'Снеки' : 'Snacks', amount: lang === 'uk' ? '₴500' : '$12.5', pct: 13 },
    { emoji: '🥛', name: lang === 'uk' ? 'Молочне' : 'Dairy', amount: lang === 'uk' ? '₴300' : '$7.5', pct: 8 },
  ];
  return (
    <>
      <TitleBar title={lang === 'uk' ? 'Статистика' : 'Statistics'} right={<i className="ph ph-calendar-blank" />} />

      <div className="sx-stat-tabs">
        <span className="sx-stat-tab sx-stat-tab-active">{lang === 'uk' ? 'Тиждень' : 'Week'}</span>
        <span className="sx-stat-tab">{lang === 'uk' ? 'Місяць' : 'Month'}</span>
        <span className="sx-stat-tab">{lang === 'uk' ? 'Рік' : 'Year'}</span>
        <i className="ph ph-calendar-blank" />
      </div>

      <div className="sx-stat-summary">
        <div>
          <div className="sx-stat-label">{lang === 'uk' ? 'Витрачено' : 'Spent'}</div>
          <div className="sx-stat-spent">{lang === 'uk' ? '₴11 500' : '$286.99'}</div>
        </div>
        <div>
          <div className="sx-stat-label">{lang === 'uk' ? 'Заплановано' : 'Planned'}</div>
          <div className="sx-stat-planned">{lang === 'uk' ? '₴200' : '$5'}</div>
        </div>
      </div>

      <div className="sx-stat-subtabs">
        <span>{lang === 'uk' ? 'За учасником' : 'By member'}</span>
        <span className="sx-stat-subtab-active">{lang === 'uk' ? 'За категорією' : 'By category'}</span>
        <span>{lang === 'uk' ? 'За товаром' : 'By product'}</span>
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

// ── Screen: Templates ─────────────────
function ScreenTemplates({ lang = 'en' }) {
  const tpls = [
    { name: lang === 'uk' ? 'Офісні снеки' : 'Office snacks', count: 6 },
    { name: 'BBQ', count: 6 },
    { name: lang === 'uk' ? 'Тиждень' : 'Weekly groceries', count: 8 },
  ];
  return (
    <>
      <div className="sx-app-header">
        <i className="ph ph-question" />
        <span className="sx-app-title">Shoplix</span>
        <div className="sx-app-right">
          <i className="ph ph-users-three" />
          <div className="sx-app-avatar">MA<span className="sx-app-dot" /></div>
        </div>
      </div>
      <div className="sx-page-head">
        <h2><i className="ph ph-copy-simple" /> {lang === 'uk' ? 'Шаблони' : 'Templates'}</h2>
        <p>{lang === 'uk' ? 'Створи шаблон для швидкого додавання' : 'Create a template to quickly add products to any list'}</p>
      </div>
      <div className="sx-lists">
        {tpls.map((t, i) => (
          <div key={i} className="sx-list-card sx-tpl-card">
            <div className="sx-tpl-icon"><i className="ph ph-copy-simple" /></div>
            <div className="sx-list-text">
              <div className="sx-list-name">{t.name}</div>
              <div className="sx-list-meta">{t.count} {lang === 'uk' ? 'товарів' : 'items'}</div>
            </div>
            <i className="ph ph-dots-three-vertical" />
          </div>
        ))}
      </div>
      <button className="sx-fab sx-fab-mint"><i className="ph-bold ph-plus" /> {lang === 'uk' ? 'Новий шаблон' : 'New Template'}</button>
      <BottomTabs active="templates" lang={lang} />
    </>
  );
}

// ── Screen: Recipes ─────────────────
function ScreenRecipes({ lang = 'en' }) {
  const recipes = [
    { name: lang === 'uk' ? 'Борщ' : 'Borscht', meta: lang === 'uk' ? '4 порції · 90 хв' : '4 servings · 90 min', color: '#dc2626', emoji: '🥣' },
    { name: lang === 'uk' ? 'Рис' : 'Fried rice', meta: lang === 'uk' ? '1 порція · 30 хв' : '1 serving · 30 min', color: '#fbbf24', emoji: '🍚' },
    { name: 'Carbonara', meta: lang === 'uk' ? '1 порція · 60 хв' : '1 serving · 60 min', color: '#fb923c', emoji: '🍝' },
  ];
  return (
    <>
      <div className="sx-app-header">
        <i className="ph ph-question" />
        <span className="sx-app-title">Shoplix</span>
        <div className="sx-app-right">
          <i className="ph ph-users-three" />
          <div className="sx-app-avatar">MA<span className="sx-app-dot" /></div>
        </div>
      </div>
      <div className="sx-page-head">
        <h2><i className="ph ph-book-open" /> {lang === 'uk' ? 'Рецепти' : 'Recipes'}</h2>
        <p>{lang === 'uk' ? 'Збережи улюблені та додавай інгредієнти у списки' : 'Save your favorite recipes and add ingredients to any list'}</p>
      </div>
      <div className="sx-lists">
        {recipes.map((r, i) => (
          <div key={i} className="sx-list-card sx-recipe-card">
            <div className="sx-recipe-thumb" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}>{r.emoji}</div>
            <div className="sx-list-text">
              <div className="sx-list-name">{r.name}</div>
              <div className="sx-list-meta">{r.meta}</div>
            </div>
            <i className="ph ph-dots-three-vertical" />
          </div>
        ))}
      </div>
      <button className="sx-fab sx-fab-coral"><i className="ph-bold ph-plus" /> {lang === 'uk' ? 'Новий рецепт' : 'New Recipe'}</button>
      <BottomTabs active="recipes" lang={lang} />
    </>
  );
}

// ── Screen: History ─────────────────
function ScreenHistory({ lang = 'en' }) {
  const items = [
    { emoji: '🧊', name: lang === 'uk' ? 'Котлети' : 'Frozen cutlets', price: lang === 'uk' ? '₴200' : '$5', time: '15:20' },
    { emoji: '🌭', name: lang === 'uk' ? 'Ковбаса' : 'Sausage', price: lang === 'uk' ? '₴4000' : '$99', qty: '99', time: '15:20' },
    { emoji: '🌾', name: lang === 'uk' ? 'Вівсянка' : 'Oatmeal', price: lang === 'uk' ? '₴2600' : '$66', time: '15:20' },
    { emoji: '🥔', name: lang === 'uk' ? 'Картопля' : 'Potatoes', price: lang === 'uk' ? '₴1050' : '$25.99', time: '15:18' },
  ];
  return (
    <>
      <TitleBar title={lang === 'uk' ? 'Історія' : 'History'} right={null} />
      <div className="sx-history-search">
        <i className="ph ph-magnifying-glass" />
        <span>{lang === 'uk' ? 'Пошук' : 'Search by name'}</span>
      </div>
      <div className="sx-history-tabs">
        <span>All</span>
        <span className="sx-history-tab-active">{lang === 'uk' ? 'Куплено' : 'Bought'}</span>
        <span>{lang === 'uk' ? 'Видалено' : 'Deleted'}</span>
      </div>
      <div className="sx-history-day">{lang === 'uk' ? 'Сьогодні' : 'Today'}</div>
      <div className="sx-history-list">
        {items.map((it, i) => (
          <div key={i} className="sx-history-item">
            <span className="sx-history-emoji">{it.emoji}</span>
            <div className="sx-history-main">
              <div className="sx-history-name">{it.name}</div>
              <div className="sx-history-meta">
                <span className="sx-history-price">{it.price}</span>
                {it.qty && <span> · {it.qty}</span>}
              </div>
            </div>
            <div className="sx-history-tag">{lang === 'uk' ? 'Куплено' : 'Bought'}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Screen: List Settings ─────────────────
function ScreenSettings({ lang = 'en' }) {
  const rows = [
    { icon: 'ph-house', label: lang === 'uk' ? 'Назва списку' : 'List Name', value: lang === 'uk' ? 'Домашній' : 'Home', arrow: true },
    { icon: 'ph-palette', label: lang === 'uk' ? 'Іконка' : 'Icon', value: '🏡' },
    { icon: 'ph-paint-brush', label: lang === 'uk' ? 'Тема' : 'Theme', value: '🌌' },
    { icon: 'ph-users-three', label: lang === 'uk' ? 'Учасники' : 'Members', value: '2', arrow: true },
    { icon: 'ph-bell', label: lang === 'uk' ? 'Сповіщення' : 'Notifications', sub: lang === 'uk' ? 'Push сповіщення' : 'Push notifications about list changes', expand: true },
    { icon: 'ph-eye', label: lang === 'uk' ? 'Зміни від інших' : 'Highlight changes from others', sub: lang === 'uk' ? 'Увімкнено' : 'Enabled', toggle: true },
  ];
  return (
    <>
      <TitleBar title={lang === 'uk' ? 'Налаштування списку' : 'List Settings'} right={null} />
      <div className="sx-settings">
        {rows.map((r, i) => (
          <div key={i} className="sx-setting-row">
            <i className={`ph ${r.icon}`} />
            <div className="sx-setting-text">
              <div className="sx-setting-label">{r.label}</div>
              {r.sub && <div className="sx-setting-sub">{r.sub}</div>}
              {r.value && !r.toggle && <div className="sx-setting-value">{r.value}</div>}
            </div>
            {r.arrow && <i className="ph ph-caret-right" />}
            {r.expand && <i className="ph ph-caret-down" />}
            {r.toggle && <div className="sx-toggle"><span /></div>}
          </div>
        ))}
      </div>
    </>
  );
}

// Back-compat aliases for older variants
function UIScreenHousehold({ lang = 'en', accent }) {
  return (
    <PhoneShell theme="blue" w={300} h={620}>
      <ScreenHome lang={lang} animated={false} />
    </PhoneShell>
  );
}
function UIScreenEvent({ lang = 'en', accent }) {
  return (
    <PhoneShell theme="orange" w={300} h={620}>
      <ScreenParty lang={lang} />
    </PhoneShell>
  );
}

// Export all
Object.assign(window, {
  PhoneShell,
  ScreenHome, ScreenParty, ScreenMyLists, ScreenStatistics,
  UIScreenHousehold, UIScreenEvent,
  ScreenTemplates, ScreenRecipes, ScreenHistory, ScreenSettings,
});

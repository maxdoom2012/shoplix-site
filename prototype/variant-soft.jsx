// Variant 1 — Soft & Warm — REWRITTEN with FAQ-driven narrative.
// Structure:
//   1. Nav
//   2. Hero — "Not just a list. Smart shopping for groups."
//   3. Two modes — Household vs Event
//   4. Claim (works in any list) — biggest differentiator
//   5. Smart Input — autofill, quantity chips, smart price
//   6. Smart recipe import
//   7. Stats + price history (Premium)
//   8. Live Awareness — see who did what
//   9. Customization — 3-phone theme showcase
//  11. Privacy + Offline strip
//  12. CTA + Footer

const { useState: useS1 } = React;

function VariantSoft({ lang, setLang, accent = '#2F6BFF' }) {
  const tr = (en, uk) => lang === 'uk' ? uk : en;

  return (
    <div className="v1-root">
      {/* ── Nav ── */}
      <nav className="v1-nav">
        <BrandMark size={32} />
        <div className="v1-nav-links">
          <a href="#claim">{tr('Claim', 'Claim')}</a>
          <a href="#smart">{tr('Smart input', 'Розумне введення')}</a>
          <a href="#stats">{tr('Statistics', 'Статистика')}</a>
          <a href="https://app.shoplix.app/" target="_blank" rel="noopener">{tr('Web app', 'Веб-додаток')}</a>
        </div>
        <div className="v1-nav-right">
          <LangToggle lang={lang} setLang={setLang} />
          <a href="#download" className="v1-nav-cta">{tr('Download', 'Завантажити')}</a>
        </div>
      </nav>

      {/* ── 1. HERO ── */}
      <section className="v1-hero">
        <div className="v1-hero-text">
          <div className="v1-eyebrow">
            <span className="v1-eyebrow-dot" />
            {tr('Made for families, flatmates and friends', 'Для сімей, сусідів і друзів')}
          </div>
          <h1 className="v1-h1">
            {tr('Buy groceries together.', 'Купуй продукти разом.')}
            <br />
            <span className="v1-h1-italic">{tr('Without buying them twice.', 'Не купуючи двічі.')}</span>
          </h1>
          <p className="v1-sub">
            {tr(
              'A shopping list both of you actually trust. Claim what you\u2019re grabbing on the way home, see what changed, keep a real budget — without spreadsheets.',
              'Список покупок, якому довіряють обидва. Бронюй що береш дорогою додому, бачиш що змінилось, ведеш реальний бюджет — без таблиць.'
            )}
          </p>
          <StoreBadges size="md" />
          <div className="v1-trust">
            <div className="v1-trust-item">
              <i className="ph ph-gift" />
              <span>{tr('Free, no ads', 'Безкоштовно, без реклами')}</span>
            </div>
            <div className="v1-trust-item">
              <i className="ph ph-fingerprint-simple" />
              <span>{tr('No sign-up', 'Без реєстрації')}</span>
            </div>
            <div className="v1-trust-item">
              <i className="ph ph-cloud-slash" />
              <span>{tr('Works offline', 'Працює офлайн')}</span>
            </div>
          </div>
        </div>

        <div className="v1-hero-visual">
          <div className="v1-phone-wrap">
            <div className="v1-real-bg-glow" />
            <div className="v1-phone-real">
              <PhoneShell theme="aurora" size="lg">
                <ScreenHome lang={lang} />
              </PhoneShell>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TWO MODES side-by-side ── */}
      <section className="v1-modes" id="modes">
        <div className="v1-modes-head">
          <div className="v1-eyebrow" style={{ display: 'inline-flex' }}>
            <span className="v1-eyebrow-dot" />
            {tr('Two modes for two needs', 'Два режими для двох задач')}
          </div>
          <h2 className="v1-h2">
            {tr('Different lists, ', 'Різні списки, ')}
            <span className="v1-h1-italic">{tr('different rules.', 'різні правила.')}</span>
          </h2>
          <p className="v1-modes-sub">
            {tr(
              'A weekly fridge run isn’t the same as a birthday party. Pick the mode and the app behaves accordingly — what stays, what disappears, what counts.',
              'Закупи на тиждень — не те саме, що вечірка. Обираєш режим — додаток поводиться відповідно: що лишається, що зникає, що рахується.'
            )}
          </p>
        </div>

        <div className="v1-modes-grid">
          <div className="v1-mode-card v1-mode-house">
            <div className="v1-mode-tag v1-tag-house">
              <i className="ph ph-house" /> {tr('Household', 'Домашній')}
            </div>
            <h3 className="v1-mode-title">{tr('Always tidy.', 'Завжди прибраний.')}</h3>
            <p className="v1-mode-desc">{tr('Bought items disappear so the list shows only what’s left to grab.', 'Куплене зникає — у списку лише те, що ще треба взяти.')}</p>
            <div className="v1-mode-phone-wrap">
              <PhoneShell theme="aurora" size="md">
                <ScreenHome lang={lang} />
              </PhoneShell>
            </div>
            <ul className="v1-mode-bullets">
              <li><i className="ph ph-broom" />{tr('Bought → hidden', 'Куплене ховається')}</li>
              <li><i className="ph ph-magic-wand" />{tr('Catalog remembers your products', 'Каталог пам’ятає товари')}</li>
              <li><i className="ph ph-arrows-clockwise" />{tr('Recurring weekly run', 'Повторювані щотижневі покупки')}</li>
            </ul>
          </div>

          <div className="v1-mode-card v1-mode-event">
            <div className="v1-mode-tag v1-tag-event">
              <i className="ph ph-confetti" /> {tr('Event', 'Подія')}
            </div>
            <h3 className="v1-mode-title">{tr('Full receipts.', 'Повний звіт.')}</h3>
            <p className="v1-mode-desc">{tr('Bought items stay so you can see who brought what — and split costs after.', 'Куплене лишається — видно хто що приніс, легко поділити витрати.')}</p>
            <div className="v1-mode-phone-wrap">
              <PhoneShell theme="lavender" size="md">
                <ScreenParty lang={lang} />
              </PhoneShell>
            </div>
            <ul className="v1-mode-bullets">
              <li><i className="ph ph-clock-counter-clockwise" />{tr('Bought → stays in record', 'Куплене лишається в історії')}</li>
              <li><i className="ph ph-receipt" />{tr('Auto split by member', 'Автоподіл по учасниках')}</li>
              <li><i className="ph ph-calendar-blank" />{tr('Stats locked to the event', 'Статистика прив’язана до події')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* (old showcase sections removed — replaced by Two Modes side-by-side above) */}

      {/* ── 3. CLAIM (works in any list) ── */}
      <section className="lv2-claim" id="claim">
        <div className="lv2-claim-text">
          <div className="lv2-eyebrow">
            <i className="ph ph-user-circle-check" />
            {tr('The differentiator', 'Те, чого нема в інших')}
          </div>
          <h2>
            {tr('"I\u2019ll grab it."', '«Я візьму це.»')}
            <br />
            <em>{tr('No more duplicate runs.', 'Більше жодних дублів.')}</em>
          </h2>
          <p>
            {tr(
              'Tap the avatar slot on any item — your face shows up there so the rest of your group sees you\u2019re bringing it. Works in every list, not just events. Save your partner from buying milk you already grabbed.',
              'Натисни на слот аватара будь-якого товару — твоє фото з\u2019явиться там і всі побачать, що ти береш. Працює у будь-якому списку, не лише в подіях. Партнер не купить молоко, яке ти вже взяв.'
            )}
          </p>
        </div>

        <div className="lv2-claim-phone">
          <div className="lv2-claim-annot lv2-claim-annot-1">
            <i className="ph-fill ph-arrow-bend-left-down" />
            <span>{tr('Tap the avatar slot \u2014', 'Натисни на слот аватара \u2014')}<br /><strong>{tr('claim it for yourself', 'він стає твоїм')}</strong></span>
          </div>
          <div className="lv2-claim-annot lv2-claim-annot-2">
            <span><strong>{tr('Already claimed by Maria', 'Вже взяла Марія')}</strong><br />{tr('nobody buys a duplicate', 'дубль ніхто не купить')}</span>
            <i className="ph-fill ph-arrow-bend-right-up" />
          </div>
          <PhoneShell theme="aurora" size="lg" tilt="-1.5deg">
            <ScreenParty lang={lang} />
          </PhoneShell>
        </div>
      </section>

      {/* ── 4. SMART INPUT ── */}
      <section className="lv2-smart" id="smart">
        <div className="lv2-smart-head">
          <h2>{tr('Smarter than autocomplete. ', 'Розумніший за автокомпліт. ')}<em>{tr('It remembers.', 'Він запам\u2019ятовує.')}</em></h2>
          <p>
            {tr(
              'Three small things you only notice once you\u2019ve used a dumber app for a year.',
              'Три маленькі речі, які помічаєш тільки після року в простому додатку.'
            )}
          </p>
        </div>

        <div className="lv2-smart-grid">
          <div className="lv2-card lv2-card-autofill">
            <div className="lv2-card-icon"><i className="ph ph-sparkle" /></div>
            <h3>{tr('Autofill from last time', 'Автозаповнення з історії покупок')}</h3>
            <p>
              {tr(
                'Bought milk at 1.2L for $2.40 with a photo? Next time you add Milk, those fields populate themselves. ✨ marker shows what was filled — touch any field to override.',
                'Купував молоко 1.2 л за ₴100 із фото? Наступного разу всі ці поля заповняться самі. Мітка ✨ — те, що підставилось.'
              )}
            </p>
            <div className="lv2-autofill-demo">
              <div className="lv2-autofill-row">
                <span className="lv2-autofill-key">{tr('Item', 'Товар')}</span>
                <span className="lv2-autofill-val">{tr('Milk', 'Молоко')}</span>
              </div>
              <div className="lv2-autofill-row">
                <span className="lv2-autofill-key">{tr('Quantity', 'Кількість')}</span>
                <span className="lv2-autofill-val">1.2 L <i className="ph-fill ph-sparkle lv2-autofill-spark" /></span>
              </div>
              <div className="lv2-autofill-row">
                <span className="lv2-autofill-key">{tr('Price', 'Ціна')}</span>
                <span className="lv2-autofill-val">{tr('$2.40', '₴100')} <i className="ph-fill ph-sparkle lv2-autofill-spark" /></span>
              </div>
              <div className="lv2-autofill-row">
                <span className="lv2-autofill-key">{tr('Photo', 'Фото')}</span>
                <span className="lv2-autofill-val">🥛 <i className="ph-fill ph-sparkle lv2-autofill-spark" /></span>
              </div>
            </div>
          </div>

          <div className="lv2-card lv2-card-chips">
            <div className="lv2-card-icon"><i className="ph ph-hand-tap" /></div>
            <h3>{tr('Quantity chips', 'Швидкі кількості')}</h3>
            <p>
              {tr(
                'Tap a chip to set quantity. Tap again to bump it. Long-press to clear. Faster than the keyboard for the 90% case.',
                'Тап — обрати. Тап ще раз — збільшити. Довгий тап — прибрати. Швидше за клавіатуру у 90% випадків.'
              )}
            </p>
            <div className="lv2-chips-demo">
              <span className="lv2-chip">{tr('1 pcs', '1 шт')}</span>
              <span className="lv2-chip">{tr('0.5 L', '0.5 л')}</span>
              <span className="lv2-chip lv2-chip-active">{tr('200 g', '200 г')}</span>
              <span className="lv2-chip">{tr('0.5 kg', '0.5 кг')}</span>
              <span className="lv2-chip">1 pack</span>
            </div>
          </div>

          <div className="lv2-card lv2-card-price">
            <div className="lv2-card-icon"><i className="ph ph-coins" /></div>
            <h3>{tr('Smart price entry', 'Розумна ціна')}</h3>
            <p>
              {tr(
                'Type the per-unit price — total fills in. Type the total — per-unit fills in. Powers per-product analytics and price history.',
                'Введи ціну за одиницю — підрахується сума. Введи суму — підрахується ціна за одиницю. Це живить аналітику.'
              )}
            </p>
            <div className="lv2-price-demo">
              <div className="lv2-price-demo-row">
                <span>{tr('Per kg', 'За кг')}</span>
                <span className="lv2-price-demo-num">{tr('$3.20', '₴130')}</span>
              </div>
              <div className="lv2-price-demo-row">
                <span>{tr('Quantity', 'Кількість')}</span>
                <span className="lv2-price-demo-num">2.5 kg</span>
              </div>
              <div className="lv2-price-demo-row">
                <span>{tr('Total', 'Сума')}</span>
                <span className="lv2-price-demo-num calc">{tr('$8.00', '₴320')}</span>
              </div>
              <div className="lv2-price-demo-eq">{tr('Auto-calculated', 'Підраховано автоматично')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SMART RECIPES ── */}
      <section className="lv2-recipes">
        <div className="lv2-recipes-text">
          <div className="lv2-eyebrow">
            <i className="ph ph-cooking-pot" />
            {tr('Smart recipe import', 'Розумний імпорт рецептів')}
          </div>
          <h2>{tr('Paste a recipe. ', 'Встав рецепт. ')}<em>{tr('Get a list.', 'Отримай список.')}</em></h2>
          <p>
            {tr(
              'From any food blog or random text in a messenger — Shoplix parses ingredients, normalizes units, detects categories. Scale by servings, add to any list in a tap.',
              'З будь-якого фуд-блогу чи текстового повідомлення — Shoplix розпарсить інгредієнти, нормалізує одиниці, визначить категорії. Шкалюй під порції, додавай у список одним тапом.'
            )}
          </p>
          <div className="lv2-recipes-feats">
            <div className="lv2-feat-row">
              <i className="ph ph-link" />
              <div>
                <strong>{tr('From URL', 'З посилання')}</strong>
                <span>{tr('Paste any recipe link — fetches ingredients, steps, serving size automatically.', 'Встав посилання — підтягне інгредієнти, кроки, кількість порцій.')}</span>
              </div>
            </div>
            <div className="lv2-feat-row">
              <i className="ph ph-robot" />
              <div>
                <strong>{tr('From free-form text', 'З вільного тексту')}</strong>
                <span>{tr('Paste anything — a friend\u2019s message, a forum post, a snippet from a cookbook. Shoplix figures out the ingredients.', 'Встав будь-що — повідомлення друга, пост з форуму, шматок з кулінарної книги. Shoplix сам розпізнає інгредієнти.')}</span>
              </div>
            </div>
            <div className="lv2-feat-row">
              <i className="ph ph-arrows-counter-clockwise" />
              <div>
                <strong>{tr('Scale to servings', 'Шкалювання порцій')}</strong>
                <span>{tr('Change "4 servings" → "10". All quantities recompute. Then add to your list.', 'Зміни «4 порції» → «10». Всі кількості перерахуються. Тоді — у список.')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lv2-recipes-mock">
          <div className="lv2-mock-url-bar">
            <i className="ph ph-link" />
            <span className="url">smittenkitchen.com/2024/02/.../carbonara</span>
            <span className="btn">{tr('Import', 'Імпорт')}</span>
          </div>
          <div className="lv2-arrow-down"><i className="ph ph-arrow-down" /></div>
          <div className="lv2-mock-result">
            <div className="lv2-mock-result-title">{tr('Pasta Carbonara', 'Паста Карбонара')}</div>
            <div className="lv2-mock-result-meta">{tr('4 servings \u00b7 30 min \u00b7 6 ingredients', '4 порції \u00b7 30 хв \u00b7 6 інгредієнтів')}</div>
            <div className="lv2-mock-result-row"><span>{tr('Spaghetti', 'Спагеті')}</span><span>{tr('400 g', '400 г')}</span></div>
            <div className="lv2-mock-result-row"><span>{tr('Pancetta', 'Панчета')}</span><span>{tr('150 g', '150 г')}</span></div>
            <div className="lv2-mock-result-row"><span>{tr('Eggs', 'Яйця')}</span><span>{tr('4 pcs', '4 шт')}</span></div>
            <div className="lv2-mock-result-row"><span>{tr('Pecorino', 'Пекоріно')}</span><span>{tr('80 g', '80 г')}</span></div>
            <div className="lv2-mock-result-row"><span>{tr('Black pepper', 'Чорний перець')}</span><span>{tr('to taste', 'за смаком')}</span></div>
            <div className="lv2-mock-result-foot">
              <span className="pill"><i className="ph ph-plus" /> {tr('Add to list', 'У список')}</span>
              <span className="pill" style={{ background: 'var(--ink-100)', color: 'var(--ink-700)' }}><i className="ph ph-pencil-simple" /> {tr('Edit', 'Редагувати')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. STATS + PRICE HISTORY ── */}
      <section className="lv2-stats" id="stats">
        <div className="lv2-price-history">
          <div className="lv2-ph-head">
            <div>
              <div className="lv2-ph-title">{tr('Oat milk \u2014 price over time', 'Вівсяне молоко \u2014 ціна')}</div>
              <div className="lv2-ph-sub">{tr('Last 12 months \u00b7 per litre', 'Останні 12 міс \u00b7 за літр')}</div>
            </div>
            <div className="lv2-ph-current">{tr('$2.40', '₴100')}</div>
          </div>
          <div className="lv2-ph-summary">
            <div className="lv2-ph-tile">
              <div className="lv2-ph-tile-label">{tr('Lowest', 'Мін')}</div>
              <div className="lv2-ph-tile-value" style={{ color: '#4ade80' }}>{tr('$2.10', '₴85')}</div>
            </div>
            <div className="lv2-ph-tile">
              <div className="lv2-ph-tile-label">{tr('Average', 'Середня')}</div>
              <div className="lv2-ph-tile-value" style={{ color: '#e6edf7' }}>{tr('$2.35', '₴95')}</div>
            </div>
            <div className="lv2-ph-tile">
              <div className="lv2-ph-tile-label">{tr('Last', 'Остання')}</div>
              <div className="lv2-ph-tile-value" style={{ color: '#38bdf8' }}>{tr('$2.40', '₴100')}</div>
            </div>
            <div className="lv2-ph-tile">
              <div className="lv2-ph-tile-label">{tr('Highest', 'Макс')}</div>
              <div className="lv2-ph-tile-value" style={{ color: '#f87171' }}>{tr('$2.60', '₴105')}</div>
            </div>
          </div>
          <svg className="lv2-ph-svg" viewBox="0 0 360 180" preserveAspectRatio="none">
            {[19, 66, 103, 140].map(y => <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" />)}
            <line x1="40" y1="75" x2="360" y2="75" stroke="rgba(56,189,248,0.45)" strokeDasharray="4 3" strokeWidth="1" />
            <text x="36" y="78" fontSize="8.5" fill="#38bdf8" textAnchor="end" style={{ fontFamily: 'Geist Mono, monospace' }}>avg</text>
            <text x="36" y="22" fontSize="9" fill="#8b9bb4" textAnchor="end" style={{ fontFamily: 'Geist Mono, monospace' }}>{tr('$2.60', '₴105')}</text>
            <text x="36" y="69" fontSize="9" fill="#8b9bb4" textAnchor="end" style={{ fontFamily: 'Geist Mono, monospace' }}>{tr('$2.40', '₴100')}</text>
            <text x="36" y="106" fontSize="9" fill="#8b9bb4" textAnchor="end" style={{ fontFamily: 'Geist Mono, monospace' }}>{tr('$2.20', '₴90')}</text>
            <text x="36" y="143" fontSize="9" fill="#8b9bb4" textAnchor="end" style={{ fontFamily: 'Geist Mono, monospace' }}>{tr('$2.00', '₴80')}</text>
            {[
              { p: 2.10, m: tr('Nov', 'Лис') }, { p: 2.20, m: tr('Dec', 'Гру') }, { p: 2.15, m: tr('Jan', 'Січ') },
              { p: 2.30, m: tr('Feb', 'Лют') }, { p: 2.25, m: tr('Mar', 'Бер') }, { p: 2.40, m: tr('Apr', 'Кві') },
              { p: 2.35, m: tr('May', 'Тра') }, { p: 2.50, m: tr('Jun', 'Чер') }, { p: 2.45, m: tr('Jul', 'Лип') },
              { p: 2.60, m: tr('Aug', 'Сер') }, { p: 2.55, m: tr('Sep', 'Вер') }, { p: 2.40, m: tr('Oct', 'Жов') },
            ].map((d, i) => {
              const x = 44 + i * 26.7;
              const y = (2.70 - d.p) / 0.70 * 130 + 10;
              const above = d.p > 2.35;
              return (
                <g key={i}>
                  <rect x={x} y={y} width="18" height={140 - y} rx="2" fill={above ? '#f87171' : '#38bdf8'} opacity={i === 11 ? 1 : 0.85} />
                  {i % 3 === 0 && <text x={x + 9} y="158" fontSize="9" fill="#8b9bb4" textAnchor="middle" style={{ fontFamily: 'Geist Mono, monospace' }}>{d.m}</text>}
                </g>
              );
            })}
          </svg>
          <div className="lv2-ph-legend">
            <span><span className="dot" style={{ background: '#38bdf8' }} />{tr('At or below avg', 'На середній або нижче')}</span>
            <span><span className="dot" style={{ background: '#f87171' }} />{tr('Above', 'Вище')}</span>
            <span style={{ marginLeft: 'auto', color: '#4ade80', fontWeight: 600 }}>+18% {tr('vs last year', 'до минулого року')}</span>
          </div>
        </div>

        <div className="lv2-stats-text">
          <div className="lv2-eyebrow">
            <i className="ph ph-chart-line-up" />
            {tr('Real budget intelligence', 'Справжня аналітика витрат')}
          </div>
          <h2>{tr('Where the money ', 'Куди йдуть ')}<em>{tr('actually went.', 'твої гроші.')}</em></h2>
          <p>
            {tr(
              'Not just lists \u2014 Shoplix tracks how much you spend per category, per member, per product. See price-per-litre creep across a year. Compare months. Catch the $99-a-week deli habit before it hits the bank statement.',
              'Не просто списки \u2014 Shoplix рахує скільки витрачаєш по категоріях, по учасниках, по товарах. Бачиш як росте ціна за літр за рік. Порівнюєш місяці. Ловиш звичку на ковбасу за ₴4000/тиждень.'
            )}
          </p>
          <div className="lv2-stats-features">
            <div className="lv2-mini-feat">
              <i className="ph ph-users-three" />
              <strong>{tr('By member', 'По учаснику')}</strong>
              <span>{tr('Who bought how much', 'Хто скільки купив')}</span>
            </div>
            <div className="lv2-mini-feat">
              <i className="ph ph-tag" />
              <strong>{tr('By category', 'По категорії')}</strong>
              <span>{tr('Dairy, produce, meat\u2026', 'Молочне, овочі, м\u2019ясо\u2026')}</span>
            </div>
            <div className="lv2-mini-feat">
              <i className="ph ph-package" />
              <strong>{tr('By product', 'По товару')}<span className="lv2-premium-pill">Premium</span></strong>
              <span>{tr('What you spend the most on', 'На що витрачаєш найбільше')}</span>
            </div>
            <div className="lv2-mini-feat">
              <i className="ph ph-chart-line-up" />
              <strong>{tr('Price history', 'Історія цін')}<span className="lv2-premium-pill">Premium</span></strong>
              <span>{tr('Track inflation per item', 'Інфляція по товарах')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. LIVE AWARENESS ── */}
      <section className="lv2-live">
        <div className="lv2-live-head">
          <h2>{tr('You always know ', 'Ти завжди знаєш ')}<em>{tr('what changed while you were away.', 'що змінилось без тебе.')}</em></h2>
          <p>
            {tr(
              'Three signals so you don\u2019t walk into the store thinking the list is one thing while it\u2019s actually another.',
              'Три сигнали щоб не зайти в магазин з застарілим уявленням про список.'
            )}
          </p>
        </div>

        <div className="lv2-live-grid">
          <div className="lv2-live-card">
            <div className="lv2-live-badge">3</div>
            <div className="lv2-live-mock">
              <div className="lv2-live-row new">
                <i className="ph ph-plus-circle" />
                <span className="lv2-live-name">{tr('Olive oil', 'Олія оливкова')}</span>
                <span className="lv2-live-meta">{tr('Maria', 'Марія')}</span>
              </div>
              <div className="lv2-live-row">
                <i className="ph ph-shopping-cart-simple" />
                <span className="lv2-live-name">{tr('Bread', 'Хліб')}</span>
              </div>
            </div>
            <h3>{tr('New items glow', 'Нові підсвічуються')}</h3>
            <p>{tr('A colored border on items added by others — fades after you see them.', 'Кольорова рамка на товарах від інших — згасає після перегляду.')}</p>
          </div>

          <div className="lv2-live-card">
            <div className="lv2-live-mock">
              <div className="lv2-live-row bought-other">
                <i className="ph ph-check" />
                <span className="lv2-live-name">{tr('Eggs', 'Яйця')}</span>
                <span className="lv2-live-meta">{tr('by Dan', 'купив Дан')}</span>
              </div>
              <div className="lv2-live-row bought-other">
                <i className="ph ph-trash" />
                <span className="lv2-live-name">{tr('Cucumbers', 'Огірки')}</span>
                <span className="lv2-live-meta">{tr('removed', 'видалив')}</span>
              </div>
            </div>
            <h3>{tr('Ghost states', 'Прозорі стани')}</h3>
            <p>{tr('Bought or deleted by someone else? It stays visible, faded, with a tag.', 'Куплене або видалене кимось іншим — лишається видимим, прозорим, з міткою.')}</p>
          </div>

          <div className="lv2-live-card">
            <div className="lv2-live-mock">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#111a2e', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, fontSize: 13 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(56,189,248,0.12)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph ph-list" /></span>
                <span style={{ flex: 1, fontWeight: 500, color: '#e6edf7' }}>{tr('Weekly groceries', 'Закупи на тиждень')}</span>
                <span style={{ background: '#38bdf8', color: '#0a1525', borderRadius: 999, padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>3</span>
              </div>
            </div>
            <h3>{tr('Unseen badge', 'Бейдж непереглянутих')}</h3>
            <p>{tr('A counter on the list tile shows how many changes you haven\u2019t looked at.', 'Лічильник на плитці списку показує скільки змін ти ще не бачив.')}</p>
          </div>
        </div>
      </section>

      {/* ── 8. CUSTOMIZATION (existing themes section, kept) ── */}
      <section className="v1-themes">
        <div className="v1-themes-head">
          <div className="v1-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="v1-eyebrow-dot" />
            {tr('Per-list customization', 'Кастомізація для кожного списку')}
          </div>
          <h2 className="v1-h2">
            {tr('Every list ', 'Кожен список ')}
            <span className="v1-h1-italic">{tr('feels like its own world.', '\u2014 свій світ.')}</span>
          </h2>
          <p className="v1-show-desc" style={{ textAlign: 'center', margin: '16px auto 0', maxWidth: 640 }}>
            {tr(
              'Each list has its own catalog, palette, icon, sort order, and notification rules. Christmas snow for the holiday list, party purple for the birthday one, autumn warmth for the everyday fridge.',
              'Кожен список має свій каталог, палітру, іконку, порядок, правила сповіщень. Сніжна тема для свят, фіолетова для вечірки, тепла осінь для буднів.'
            )}
          </p>
        </div>
        <div className="v1-themes-row">
          <div className="v1-themes-item">
            <div className="v1-themes-label"><span className="v1-themes-dot" style={{ background: '#3B82F6' }} />{tr('Aurora', 'Аврора')}</div>
            <PhoneShell theme="aurora" size="md" tilt="-3deg">
              <ScreenMyLists lang={lang} theme="aurora" />
            </PhoneShell>
          </div>
          <div className="v1-themes-item">
            <div className="v1-themes-label"><span className="v1-themes-dot" style={{ background: '#A855F7' }} />{tr('Lavender', 'Лаванда')}</div>
            <PhoneShell theme="lavender" size="md">
              <ScreenMyLists lang={lang} theme="lavender" />
            </PhoneShell>
          </div>
          <div className="v1-themes-item">
            <div className="v1-themes-label"><span className="v1-themes-dot" style={{ background: '#F97316' }} />{tr('Ember', 'Янтар')}</div>
            <PhoneShell theme="ember" size="md" tilt="3deg">
              <ScreenMyLists lang={lang} theme="ember" />
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── 9. PRIVACY + OFFLINE ── */}
      <section className="lv2-privacy">
        <div className="lv2-privacy-item">
          <i className="ph ph-cloud-slash" />
          <h3>{tr('Offline-first, not offline-as-fallback', 'Офлайн-перший, не fallback')}</h3>
          <p>{tr('Add, edit, check off — all of it works without internet. A status banner tells you what\u2019s syncing. Nothing is lost.', 'Додаєш, редагуєш, відмічаєш — все працює без інтернету. Банер показує статус синхронізації. Нічого не пропадає.')}</p>
        </div>
        <div className="lv2-privacy-item">
          <i className="ph ph-shield-check" />
          <h3>{tr('Private by default', 'Приватність за замовчуванням')}</h3>
          <p>{tr('Use the app anonymously \u2014 your device is your identity. Link Apple or Google later if you want cross-device sync. Your call.', 'Користуйся анонімно \u2014 пристрій і є твоя ідентичність. Підключиш Apple/Google пізніше якщо захочеш мульти-девайс. Твій вибір.')}</p>
        </div>
        <div className="lv2-privacy-item">
          <i className="ph ph-link-simple" />
          <h3>{tr('Share with a 6-digit code', 'Шеринг 6-значним кодом')}</h3>
          <p>{tr('No emails, no friend requests. Send the code via any messenger, the recipient joins instantly. Real-time from there on.', 'Без емейлів і friend requests. Відправ код у будь-який месенджер, людина приєдналась миттєво. Далі — наживо.')}</p>
        </div>
      </section>

      {/* ── 11. CTA ── */}
      <section className="v1-cta" id="download">
        <div className="v1-cta-inner">
          <img src="assets/mascot.png" alt="" className="v1-cta-mascot" />
          <h2 className="v1-h2">
            {tr('Make every shop ', 'Зроби кожні покупки ')}
            <span className="v1-h1-italic">{tr('a team sport.', 'командною грою.')}</span>
          </h2>
          <p>{tr('Free to start. No account needed. Real-time sync across iOS, Android, and web.', 'Безкоштовно. Без реєстрації. Синхр. наживо на iOS, Android, web.')}</p>
          <StoreBadges size="lg" />
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}

window.VariantSoft = VariantSoft;

// Shoplix landing page — ported from the inline DarkProLanding component in the
// old index.html, adapted to a pure function of `lang` for build-time static
// rendering. No client React: markup is emitted to static HTML by ReactDOMServer.
import React from 'react';
import { PhoneShell, ScreenHome, ScreenParty, ScreenStatistics, ScreenTemplates, ScreenRecipes } from './components.jsx';

export function LandingPage({ lang }) {
  const tr = (en, uk) => (lang === 'uk' ? uk : en);
  const other = lang === 'uk' ? '/en/' : '/uk/';

  return (
    <div className="dp-page">
      {/* ── Animated background orbs ── */}
      <div className="dp-bg-orbs" aria-hidden="true">
        <span className="dp-orb dp-orb-blue"></span>
        <span className="dp-orb dp-orb-violet"></span>
      </div>
      {/* ── Nav ── */}
      <nav className="dp-nav">
        <div className="dp-brand">
          <div className="dp-brand-mark" aria-label="Shoplix"></div>
          <span>Shoplix</span>
        </div>
        <div className="dp-nav-links">
          <a href="#modes">{tr('Modes', 'Режими')}</a>
          <a href="#live">{tr('Realtime', 'Наживо')}</a>
          <a href="#catalog">{tr('Stats', 'Аналітика')}</a>
          <a href="#reuse">{tr('Recipes', 'Рецепти')}</a>
          <a href={lang === 'uk' ? '/uk/blog/' : '/en/blog/'}>{tr('Blog', 'Блог')}</a>
          <a href="#download">{tr('Get app', 'Завантажити')}</a>
        </div>
        <div className="dp-nav-right">
          <div className="dp-lang">
            <a href="/en/" className={lang === 'en' ? 'active' : ''} hrefLang="en">EN</a>
            <span>·</span>
            <a href="/uk/" className={lang === 'uk' ? 'active' : ''} hrefLang="uk">UK</a>
          </div>
          <a className="dp-nav-cta" href="#download">
            {tr('Download', 'Завантажити')}
            <i className="ph-bold ph-arrow-up-right" />
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="dp-hero">
        <div className="dp-hero-grid">
          <div className="dp-hero-copy">
            <div className="dp-eyebrow">
              <span className="dp-eyebrow-dot" />
              REAL-TIME · {tr('SHARED LISTS', 'СПІЛЬНІ СПИСКИ')}
            </div>
            <h1 className="dp-h1">
              {tr('Shop together.', 'Купуй разом.')}<br />
              {tr('Don’t buy ', 'Не купуй ')}<em>{tr('twice', 'двічі')}</em>.
            </h1>
            <p className="dp-keyword-sub">
              {tr(
                'Shoplix is a shared shopping list app for families & events — real-time sync across every phone.',
                'Shoplix — спільний список покупок для сім’ї та подій із синхронізацією в реальному часі на всіх телефонах.'
              )}
            </p>
            <p className="dp-sub">
              {tr(
                'A shopping list the whole household sees at once. Everyone adds, claims, and checks off in real time — no calls, no spreadsheets, no duplicate runs.',
                'Список покупок, який вся родина бачить одночасно. Кожен додає, бронює і відмічає куплене наживо — без дзвінків, без таблиць, без дублів у магазині.'
              )}
            </p>
            <div className="dp-cta-row">
              <a className="dp-btn dp-btn-primary" href="https://apps.apple.com/app/id6759987277" target="_blank" rel="noopener" aria-label="Download on the App Store">
                <i className="ph-bold ph-apple-logo" /> App Store
              </a>
              <a className="dp-btn dp-btn-ghost" href="https://play.google.com/store/apps/details?id=com.shoplix.app" target="_blank" rel="noopener" aria-label="Get it on Google Play">
                <i className="ph-bold ph-google-play-logo" /> Google Play
              </a>
              <a className="dp-btn dp-btn-ghost" href="https://app.shoplix.app/" target="_blank" rel="noopener" aria-label={tr('Open Shoplix Web App', 'Відкрити веб-застосунок Shoplix')}>
                <i className="ph-bold ph-globe" /> Web
              </a>
            </div>
            <div className="dp-meta-row">
              <span>{tr('Free', 'Безкоштовно')}</span>
              <span>{tr('No sign-up', 'Без реєстрації')}</span>
              <span className="muted">iOS · Android · Web</span>
            </div>
          </div>
          <div className="dp-phone-stage">
            <div className="dp-callout dp-callout-1">
              <i className="ph-fill ph-users-three" />
              <div>
                <strong>{tr('Shared in real time', 'Спільний список')}</strong>
                <div><span>{tr('every device · always up to date', 'на всіх пристроях одночасно')}</span></div>
              </div>
            </div>
            <div className="dp-callout dp-callout-2">
              <i className="ph-fill ph-user-circle-check" />
              <div>
                <strong>{tr('“I’ll grab it”', '«Я візьму це»')}</strong>
                <div><span>{tr('claim items so nobody buys twice', 'бронюй товари — ніхто не купить двічі')}</span></div>
              </div>
            </div>
            <PhoneShell theme="aurora" size="lg">
              <ScreenHome lang={lang} />
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── Two modes ── */}
      <section className="dp-section" id="modes">
        <div className="dp-section-head">
          <div className="dp-section-eyebrow">02 · {tr('Two modes', 'Два режими')}</div>
          <h2 className="dp-h2">
            {tr('Different lists, ', 'Різні списки, ')}
            <em>{tr('different rules.', 'різні правила.')}</em>
          </h2>
          <p className="dp-section-sub">
            {tr(
              'Daily groceries aren’t the same as a birthday party. Pick the mode and the app behaves accordingly.',
              'Щоденні покупки — не те саме, що вечірка. Обираєш режим — додаток поводиться відповідно.'
            )}
          </p>
        </div>
        <div className="dp-modes-grid">
          <div className="dp-mode-card">
            <div className="dp-mode-tag">
              <i className="ph-fill ph-house" /> {tr('Household', 'Домашній')}
            </div>
            <h3 className="dp-mode-title">{tr('Always clean & current', 'Завжди чистий і актуальний')}</h3>
            <p className="dp-mode-desc">
              {tr(
                'Best for ongoing use. The app remembers your products, quantities, prices and photos for next time — perfect for tracking weekly and monthly spend.',
                'Найкраще підходить для постійного використання. Додаток запамʼятовує ваші товари, кількість, ціну і фото для повторного додавання — ідеально для відстеження щотижневих і щомісячних витрат.'
              )}
            </p>
            <div className="dp-mode-phone">
              <PhoneShell theme="aurora" size="md">
                <ScreenHome lang={lang} variant="b" />
              </PhoneShell>
            </div>
          </div>
          <div className="dp-mode-card event">
            <div className="dp-mode-tag">
              <i className="ph-fill ph-confetti" /> {tr('Event', 'Подія')}
            </div>
            <h3 className="dp-mode-title">{tr('Everything in plain sight', 'Все на виду')}</h3>
            <p className="dp-mode-desc">
              {tr(
                'Bought items stay in a separate section of the list — you instantly see what’s already covered. Warns you if someone adds a duplicate. Spend stats per participant.',
                'Куплене лишається в окремій секції списку — одразу видно, що вже принесли. Попереджає, якщо хтось додає дубль. Статистика витрат для кожного учасника.'
              )}
            </p>
            <div className="dp-mode-phone">
              <PhoneShell theme="lavender" size="md">
                <ScreenParty lang={lang} />
              </PhoneShell>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live awareness ── */}
      <section className="dp-section" id="live">
        <div className="dp-section-head">
          <div className="dp-section-eyebrow">03 · {tr('Realtime sync', 'Синхронізація')}</div>
          <h2 className="dp-h2">
            {tr('See changes ', 'Бачиш зміни ')}
            <em>{tr('as they happen.', 'у момент, коли вони стаються.')}</em>
          </h2>
          <p className="dp-section-sub">
            {tr(
              'Every addition, edit, and check-off shows up on every device in seconds.',
              'Кожне додавання, правка та відмітка зʼявляється на всіх пристроях за секунди.'
            )}
          </p>
        </div>
        <div className="dp-live-grid">
          <div>
            <div className="dp-live-feature">
              <i className="ph-fill ph-user-circle" />
              <div>
                <h4>{tr('“I’ll grab it.”', '«Я візьму це»')}</h4>
                <p>{tr('Tap an item’s avatar slot — your face shows up there so nobody buys the same milk on the way home.', 'Тап по слоту аватара — твоє фото зʼявляється там, і ніхто не купить те саме молоко дорогою додому.')}</p>
              </div>
            </div>
            <div className="dp-live-feature">
              <i className="ph-fill ph-eye" />
              <div>
                <h4>{tr('Nothing disappears silently', 'Нічого не зникає тишком')}</h4>
                <p>{tr('Items added, bought, or deleted by someone else stay visible the first time you open the list after changes.', 'Додане, куплене чи видалене іншими лишається видимим при першому перегляді списку після змін.')}</p>
              </div>
            </div>
            <div className="dp-live-feature">
              <i className="ph-fill ph-bell-ringing" />
              <div>
                <h4>{tr('You see what changed', 'Видно що змінилось без тебе')}</h4>
                <p>{tr('A counter on each list shows how many additions, edits, and check-offs you haven’t looked at yet.', 'Лічильник на кожному списку показує, скільки додавань, правок і відміток ти ще не переглянув.')}</p>
              </div>
            </div>
          </div>
          <div className="dp-phone-stage" style={{ minHeight: 'auto' }}>
            <PhoneShell theme="aurora" size="lg">
              <ScreenHome lang={lang} variant="c" />
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="dp-section" id="catalog">
        <div className="dp-catalog">
          <div className="dp-catalog-left">
            <div className="dp-section-eyebrow" style={{ marginBottom: 14 }}>04 · {tr('Real budget intelligence', 'Справжня аналітика витрат')}</div>
            <h3>{tr('Where the money ', 'Куди йдуть ')}<em style={{ background: 'linear-gradient(135deg, var(--dp-violet), var(--dp-blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontStyle: 'normal' }}>{tr('actually went.', 'твої гроші.')}</em></h3>
            <p>{tr(
              'Shoplix tracks spend by category, by member and by product — with a per-product price history so you can see exactly when oat milk got expensive.',
              'Shoplix рахує витрати по категоріях, по учасниках і по товарах — з історією цін для кожного товару, щоб бачити, коли твій улюблений товар подорожчав.'
            )}</p>
            <div className="dp-catalog-stats">
              <div className="dp-stat">
                <strong><i className="ph-fill ph-users-three" style={{ fontSize: 24 }} /></strong>
                <span>{tr('By member — who bought how much', 'По учаснику — хто скільки купив')}</span>
              </div>
              <div className="dp-stat">
                <strong><i className="ph-fill ph-tag" style={{ fontSize: 24 }} /></strong>
                <span>{tr('By category — dairy, produce, meat…', 'По категорії — молочне, овочі, мʼясо…')}</span>
              </div>
              <div className="dp-stat">
                <strong><i className="ph-fill ph-package" style={{ fontSize: 24 }} /></strong>
                <span>{tr('By product — what you spend the most on', 'По товару — на що витрачаєш найбільше')}</span>
              </div>
              <div className="dp-stat">
                <strong><i className="ph-fill ph-chart-line-up" style={{ fontSize: 24 }} /></strong>
                <span>{tr('Price history — inflation per item', 'Історія цін — інфляція по товару')}</span>
              </div>
            </div>
          </div>
          <div className="dp-catalog-right">
            <PhoneShell theme="ocean" size="md">
              <ScreenStatistics lang={lang} />
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── Templates & Recipes ── */}
      <section className="dp-section" id="reuse">
        <div className="dp-section-head">
          <div className="dp-section-eyebrow">05 · {tr('Templates & Recipes', 'Шаблони і рецепти')}</div>
          <h2 className="dp-h2">
            {tr('Don’t start ', 'Не починай ')}
            <em>{tr('from scratch.', 'з нуля.')}</em>
          </h2>
          <p className="dp-section-sub">
            {tr(
              'Save the lists you make every week and the recipes you cook every month — add their entire contents to any list in two taps.',
              'Зберігай списки, які робиш щотижня, і рецепти, які готуєш щомісяця — додавай весь склад в будь-який список у два тапи.'
            )}
          </p>
        </div>
        <div className="dp-modes-grid">
          <div className="dp-mode-card">
            <div className="dp-mode-tag">
              <i className="ph-fill ph-copy-simple" /> {tr('Templates', 'Шаблони')}
            </div>
            <h3 className="dp-mode-title">{tr('Your usual run, ready to go', 'Твій звичний список — одним тапом')}</h3>
            <p className="dp-mode-desc">
              {tr(
                'Create templates for the shops you repeat — weekly groceries, office snacks, your BBQ kit — and add the whole template to any list in one tap.',
                'Створи шаблони для повторюваних закупівель — тиждень, офісні снеки, набір для шашлику — і додавай весь шаблон у будь-який список одним тапом.'
              )}
            </p>
            <div className="dp-mode-phone">
              <PhoneShell theme="ocean" size="md">
                <ScreenTemplates lang={lang} />
              </PhoneShell>
            </div>
          </div>
          <div className="dp-mode-card event">
            <div className="dp-mode-tag">
              <i className="ph-fill ph-book-open" /> {tr('Recipes', 'Рецепти')}
            </div>
            <h3 className="dp-mode-title">{tr('Ingredients straight into the list', 'Інгредієнти одразу в список')}</h3>
            <p className="dp-mode-desc">
              {tr(
                'Keep your favourite recipes with full ingredient lists — or paste a URL or plain text and Shoplix imports the ingredients automatically. Tap a recipe and everything lands in your shopping list, deduped against what’s already there.',
                'Зберігай улюблені рецепти з повним складом — або встав посилання чи звичайний текст, і Shoplix розумно розпізнає інгредієнти. Тап по рецепту — все потрапляє у список, з перевіркою на те, що вже є в списку.'
              )}
            </p>
            <div className="dp-mode-phone">
              <PhoneShell theme="lavender" size="md">
                <ScreenRecipes lang={lang} />
              </PhoneShell>
            </div>
          </div>
        </div>
      </section>

      {/* ── Everyday speed: voice, barcode, offline, widgets ── */}
      <section className="dp-section" id="speed">
        <div className="dp-section-head">
          <div className="dp-section-eyebrow">06 · {tr('Everyday speed', 'Швидкість щодня')}</div>
          <h2 className="dp-h2">
            {tr('Add items ', 'Додавай ')}<em>{tr('your way.', 'як зручно.')}</em>
          </h2>
          <p className="dp-section-sub">
            {tr('Voice, barcode, autocomplete — and it all works offline.', 'Голос, штрих-код, автодоповнення — і все працює офлайн.')}
          </p>
        </div>
        <div className="dp-catalog-stats" style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="dp-stat">
            <strong><i className="ph-fill ph-microphone" style={{ fontSize: 24 }} /></strong>
            <span>{tr(
              'Voice input — say “milk, bread, two kilos of apples” and get separate items with quantities',
              'Голосове введення — скажіть «молоко, хліб, два кіло яблук», і це стануть окремі товари з кількостями'
            )}</span>
          </div>
          <div className="dp-stat">
            <strong><i className="ph-fill ph-barcode" style={{ fontSize: 24 }} /></strong>
            <span>{tr(
              'Barcode scanner — point the camera at a product and Shoplix recognizes it',
              'Сканер штрих-кодів — наведіть камеру на продукт, і Shoplix розпізнає його'
            )}</span>
          </div>
          <div className="dp-stat">
            <strong><i className="ph-fill ph-cloud-slash" style={{ fontSize: 24 }} /></strong>
            <span>{tr(
              'Works offline — the list keeps working with no signal and syncs when you’re back online',
              'Працює офлайн — навіть без мережі, а зміни синхронізуються, щойно з’явиться з’єднання'
            )}</span>
          </div>
          <div className="dp-stat">
            <strong><i className="ph-fill ph-squares-four" style={{ fontSize: 24 }} /></strong>
            <span>{tr(
              'Home-screen widgets — check off and claim items without opening the app',
              'Віджети на головному екрані — викреслюйте і бронюйте, не відкриваючи застосунок'
            )}</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dp-cta" id="download">
        <h2>
          {tr('Shop together. ', 'Купуй разом. ')}
          <em>{tr('Never twice.', 'Не купуй двічі.')}</em>
        </h2>
        <div className="dp-cta-row" style={{ justifyContent: 'center' }}>
          <a className="dp-btn dp-btn-primary" href="https://apps.apple.com/app/id6759987277" target="_blank" rel="noopener" aria-label="Download on the App Store">
            <i className="ph-bold ph-apple-logo" /> App Store
          </a>
          <a className="dp-btn dp-btn-ghost" href="https://play.google.com/store/apps/details?id=com.shoplix.app" target="_blank" rel="noopener" aria-label="Get it on Google Play">
            <i className="ph-bold ph-google-play-logo" /> Google Play
          </a>
          <a className="dp-btn dp-btn-ghost" href="https://app.shoplix.app/" target="_blank" rel="noopener" aria-label={tr('Open Shoplix Web App', 'Відкрити веб-застосунок Shoplix')}>
            <i className="ph-bold ph-globe" /> {tr('Open Web', 'Відкрити Веб')}
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="dp-footer">
        <div>SHOPLIX · 2026 · UA</div>
        <div className="dp-footer-links">
          <a href={lang === 'uk' ? '/uk/blog/' : '/en/blog/'}>{tr('Blog', 'Блог')}</a>
          <a href="/privacy-policy.html">{tr('Privacy', 'Конфіденційність')}</a>
          <a href="/terms.html">{tr('Terms', 'Умови')}</a>
          <a href="mailto:support@shoplix.app">support@shoplix.app</a>
        </div>
      </footer>
    </div>
  );
}

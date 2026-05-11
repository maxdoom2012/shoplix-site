// Variant 2 — Editorial Crisp.
// Generous whitespace, large display type, single accent blue, subtle dividers.
// Hero: side-by-side static UI screens (Household vs Event) with editorial captions.

function VariantEditorial({ lang, setLang, accent = '#1E3A8A' }) {
  return (
    <div className="v2-root">
      <nav className="v2-nav">
        <BrandMark size={28} />
        <div className="v2-nav-links">
          <a href="#chapter-1">01 — {lang === 'en' ? 'Two lists' : 'Два списки'}</a>
          <a href="#chapter-2">02 — {lang === 'en' ? 'Visibility' : 'Прозорість'}</a>
          <a href="#chapter-3">03 — {lang === 'en' ? 'Details' : 'Деталі'}</a>
        </div>
        <div className="v2-nav-right">
          <LangToggle lang={lang} setLang={setLang} />
          <a href="https://app.shoplix.app/" target="_blank" rel="noopener" className="v2-link">{t('webapp', lang)} →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="v2-hero">
        <div className="v2-hero-meta">
          <span>{lang === 'en' ? 'A field guide to' : 'Польовий путівник'}</span>
          <span className="v2-hero-issue">№ 01 · {lang === 'en' ? 'Spring 2026' : 'Весна 2026'}</span>
        </div>
        <h1 className="v2-h1">
          {lang === 'en' ? (
            <>Shopping lists,<br /><em>reconsidered</em>.</>
          ) : (
            <>Списки покупок,<br /><em>переглянуто</em>.</>
          )}
        </h1>
        <div className="v2-hero-deck">
          <p className="v2-deck-text">{t('heroSub', lang)}</p>
          <div className="v2-deck-side">
            <div className="v2-deck-row"><span>{lang === 'en' ? 'Platform' : 'Платформа'}</span><span>iOS · Android · Web</span></div>
            <div className="v2-deck-row"><span>{lang === 'en' ? 'Account' : 'Акаунт'}</span><span>{lang === 'en' ? 'Optional' : 'За бажанням'}</span></div>
            <div className="v2-deck-row"><span>{lang === 'en' ? 'Price' : 'Ціна'}</span><span>{lang === 'en' ? 'Free' : 'Безкоштовно'}</span></div>
            <div className="v2-deck-row"><span>{lang === 'en' ? 'Sync' : 'Синхронізація'}</span><span>{lang === 'en' ? 'Realtime' : 'Реальний час'}</span></div>
          </div>
        </div>

        {/* Hero spread: two phones side-by-side */}
        <div className="v2-spread">
          <figure className="v2-figure">
            <div className="v2-figure-frame">
              <UIScreenHousehold lang={lang} accent={accent} />
            </div>
            <figcaption>
              <span className="v2-fig-num">Fig. 1</span>
              <span className="v2-fig-text">{lang === 'en' ? 'Household — items vanish once bought.' : 'Домашній — товари зникають після покупки.'}</span>
            </figcaption>
          </figure>
          <figure className="v2-figure">
            <div className="v2-figure-frame">
              <UIScreenEvent lang={lang} accent={accent} />
            </div>
            <figcaption>
              <span className="v2-fig-num">Fig. 2</span>
              <span className="v2-fig-text">{lang === 'en' ? 'Event — claims, history, attendance.' : 'Подія — резерв, історія, гості.'}</span>
            </figcaption>
          </figure>
        </div>

        <div className="v2-hero-cta">
          <StoreBadges size="md" />
          <span className="v2-cta-note">{lang === 'en' ? '— or use it from the browser, no install.' : '— або відкрий у браузері, без встановлення.'}</span>
        </div>
      </section>

      <hr className="v2-rule" />

      {/* Chapter 1 — Two lists */}
      <section className="v2-chapter" id="chapter-1">
        <div className="v2-chap-head">
          <span className="v2-chap-num">01</span>
          <span className="v2-chap-tag">{lang === 'en' ? 'Two list types' : 'Два типи списків'}</span>
        </div>
        <h2 className="v2-h2">
          {lang === 'en'
            ? <>Not all shopping is the same.<br /><span className="v2-muted">So why should every list behave the same?</span></>
            : <>Не всі покупки однакові.<br /><span className="v2-muted">Чому ж усі списки поводяться однаково?</span></>
          }
        </h2>
        <div className="v2-twocol">
          <article className="v2-article">
            <h3>{t('showHouseTag', lang)}</h3>
            <p className="v2-lead">{t('showHouseTitle', lang)}</p>
            <p>{t('showHouseDesc', lang)}</p>
            <ul className="v2-ul">
              <li>{lang === 'en' ? 'Bought items dissolve away' : 'Куплене зникає'}</li>
              <li>{lang === 'en' ? 'Personal catalog learns silently' : 'Каталог тихо вчиться'}</li>
              <li>{lang === 'en' ? 'Swipe, undo, and shake gestures' : 'Свайп, скасування, тряс'}</li>
            </ul>
          </article>
          <article className="v2-article">
            <h3>{t('showEventTag', lang)}</h3>
            <p className="v2-lead">{t('showEventTitle', lang)}</p>
            <p>{t('showEventDesc', lang)}</p>
            <ul className="v2-ul">
              <li>{lang === 'en' ? 'Claim items with a tap' : 'Резервуй одним натиском'}</li>
              <li>{lang === 'en' ? 'Full history, never auto-cleared' : 'Повна історія'}</li>
              <li>{lang === 'en' ? 'Ghost items mark deletions' : 'Примарні товари позначають видалене'}</li>
            </ul>
          </article>
        </div>
      </section>

      <hr className="v2-rule" />

      {/* Chapter 2 — Visibility — animated demo as the centerpiece */}
      <section className="v2-chapter v2-chapter-demo" id="chapter-2">
        <div className="v2-chap-head">
          <span className="v2-chap-num">02</span>
          <span className="v2-chap-tag">{lang === 'en' ? 'Full visibility' : 'Повна прозорість'}</span>
        </div>
        <h2 className="v2-h2">
          {lang === 'en'
            ? <>Everyone sees the same list.<br /><span className="v2-muted">Right down to who deleted the milk.</span></>
            : <>Усі бачать той самий список.<br /><span className="v2-muted">Аж до того, хто видалив молоко.</span></>}
        </h2>
        <div className="v2-demo-spread">
          <div className="v2-demo-phone">
            <div className="v2-phone-frame">
              <PhoneListDemo variant="household" accent={accent} />
            </div>
          </div>
          <div className="v2-demo-notes">
            <DemoNote
              num="1"
              title={lang === 'en' ? 'Item claimed' : 'Зарезервовано'}
              body={lang === 'en' ? 'When someone taps to claim, their initial slides in next to the item — instantly visible to everyone.' : 'Коли хтось резервує, поруч зʼявляється його ініціал — миттєво видно всім.'} />
            <DemoNote
              num="2"
              title={lang === 'en' ? 'Bought, attributed' : 'Куплено, з підписом'}
              body={lang === 'en' ? 'Once purchased, the item shows who bought it and when. Receipts later are easy.' : 'Куплене показує хто і коли. Чеки потім — легко.'} />
            <DemoNote
              num="3"
              title={lang === 'en' ? 'Ghost items' : 'Примарні товари'}
              body={lang === 'en' ? 'Deleted items linger faintly so nobody is surprised when they’re gone.' : 'Видалене ще трохи видно — ніхто не здивується.'} />
          </div>
        </div>
      </section>

      <hr className="v2-rule" />

      {/* Chapter 3 — Bento as a reference index */}
      <section className="v2-chapter" id="chapter-3">
        <div className="v2-chap-head">
          <span className="v2-chap-num">03</span>
          <span className="v2-chap-tag">{lang === 'en' ? 'Reference' : 'Деталі'}</span>
        </div>
        <h2 className="v2-h2">{t('bentoTitle', lang)}</h2>
        <div className="v2-index">
          {[
            ['ph-shopping-cart', lang === 'en' ? 'Smart input' : 'Розумне введення', lang === 'en' ? 'Autocomplete, voice, swipe.' : 'Автодоповнення, голос, свайп.'],
            ['ph-user-plus', lang === 'en' ? 'Claim system' : 'Резервування', lang === 'en' ? 'Tap to claim, see avatars.' : 'Натисни — і всі бачать.'],
            ['ph-eye', lang === 'en' ? 'Unseen updates' : 'Непереглянуті', lang === 'en' ? 'Highlights what changed.' : 'Підсвічує зміни.'],
            ['ph-ghost', lang === 'en' ? 'Ghost items' : 'Примарні', lang === 'en' ? 'Deletions never silent.' : 'Видалене не зникає тихо.'],
            ['ph-archive', lang === 'en' ? 'Catalog' : 'Каталог', lang === 'en' ? 'Remembers what you buy.' : 'Памʼятає, що ти купуєш.'],
            ['ph-copy-simple', lang === 'en' ? 'Templates' : 'Шаблони', lang === 'en' ? 'Reusable lists, one tap.' : 'Багаторазові списки.'],
            ['ph-users-four', lang === 'en' ? 'Roles' : 'Ролі', lang === 'en' ? 'Owner, editor, viewer.' : 'Власник, редактор, глядач.'],
            ['ph-palette', lang === 'en' ? 'Themes' : 'Теми', lang === 'en' ? '10 palettes, 6 fonts.' : '10 палітр, 6 шрифтів.'],
            ['ph-wifi-slash', lang === 'en' ? 'Offline' : 'Офлайн', lang === 'en' ? 'Works on the subway.' : 'Працює у метро.'],
            ['ph-shield-check', lang === 'en' ? 'No sign-up' : 'Без реєстрації', lang === 'en' ? 'Open and go.' : 'Відкрив — почав.'],
            ['ph-bell', lang === 'en' ? 'Notifications' : 'Сповіщення', lang === 'en' ? 'Soft, not noisy.' : 'Мʼякі, не навʼязливі.'],
            ['ph-vibrate', lang === 'en' ? 'Shake to undo' : 'Тряси, щоб скасувати', lang === 'en' ? 'Old-school escape hatch.' : 'Класичний відкат.'],
          ].map(([icon, title, body], i) => (
            <div key={i} className="v2-index-row">
              <div className="v2-index-num">{String(i + 1).padStart(2, '0')}</div>
              <i className={`ph ${icon}`} />
              <div>
                <div className="v2-index-title">{title}</div>
                <div className="v2-index-body">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="v2-rule" />

      {/* CTA — quiet */}
      <section className="v2-cta" id="download">
        <div className="v2-cta-meta">{lang === 'en' ? '— Closing —' : '— Завершення —'}</div>
        <h2 className="v2-h2 v2-cta-h">{t('ctaTitle', lang)}</h2>
        <p className="v2-cta-p">{t('ctaSub', lang)}</p>
        <StoreBadges size="md" />
        <img src="assets/mascot.png" alt="" className="v2-cta-mascot" />
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}

function DemoNote({ num, title, body }) {
  return (
    <div className="v2-note">
      <div className="v2-note-num">{num}</div>
      <div>
        <div className="v2-note-title">{title}</div>
        <div className="v2-note-body">{body}</div>
      </div>
    </div>
  );
}

window.VariantEditorial = VariantEditorial;

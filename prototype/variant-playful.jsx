// Variant 3 — Playful Live Demo.
// Vivid blue + amber, mascot character moments, more motion, animated phone is the hero.

function VariantPlayful({ lang, setLang, accent = '#2563EB' }) {
  return (
    <div className="v3-root">
      <nav className="v3-nav">
        <div className="v3-nav-inner">
          <BrandMark size={32} />
          <div className="v3-nav-pill">
            <a href="#play">{t('features', lang)}</a>
            <a href="#how">{t('how', lang)}</a>
            <a href="#bento">{t('bento', lang)}</a>
          </div>
          <div className="v3-nav-right">
            <LangToggle lang={lang} setLang={setLang} />
            <a href="#download" className="v3-nav-cta">
              <i className="ph-bold ph-download-simple" />
              {t('download', lang)}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="v3-hero">
        <div className="v3-hero-blob v3-blob-1" />
        <div className="v3-hero-blob v3-blob-2" />

        <div className="v3-hero-grid">
          <div className="v3-hero-text">
            <div className="v3-eyebrow">
              <i className="ph-fill ph-lightning" />
              {lang === 'en' ? 'Real-time shopping for real households' : 'Покупки у реальному часі для справжніх родин'}
            </div>
            <h1 className="v3-h1">
              {lang === 'en' ? (
                <>The shopping list,<br /><span className="v3-h1-accent">finally alive.</span></>
              ) : (
                <>Список покупок,<br /><span className="v3-h1-accent">нарешті живий.</span></>
              )}
            </h1>
            <p className="v3-sub">{t('heroSub', lang)}</p>
            <div className="v3-hero-row">
              <StoreBadges size="md" />
            </div>
            <div className="v3-stats">
              <div><strong>2</strong><span>{lang === 'en' ? 'list types' : 'типи списків'}</span></div>
              <div><strong>0</strong><span>{lang === 'en' ? 'sign-up steps' : 'кроків реєстрації'}</span></div>
              <div><strong>10+</strong><span>{lang === 'en' ? 'themes' : 'тем'}</span></div>
              <div><strong>∞</strong><span>{lang === 'en' ? 'free' : 'безкоштовно'}</span></div>
            </div>
          </div>

          <div className="v3-hero-stage">
            <div className="v3-stage-glow" />
            <div className="v3-phone v3-phone-back">
              <div className="v3-phone-notch" />
              <div className="v3-phone-inner">
                <PhoneListDemo variant="event" accent="#F59E0B" />
              </div>
            </div>
            <div className="v3-phone v3-phone-front">
              <div className="v3-phone-notch" />
              <div className="v3-phone-inner">
                <PhoneListDemo variant="household" accent={accent} />
              </div>
            </div>
            <img src="assets/mascot.png" alt="" className="v3-mascot" />

            <div className="v3-burst v3-burst-1">
              <i className="ph-fill ph-check-circle" />
              <span>{lang === 'en' ? 'Daniel bought oat milk' : 'Данило купив молоко'}</span>
            </div>
            <div className="v3-burst v3-burst-2">
              <i className="ph-fill ph-user-circle-check" />
              <span>{lang === 'en' ? 'Mom claimed cake' : 'Мама зарезервувала торт'}</span>
            </div>
            <div className="v3-burst v3-burst-3">
              <i className="ph-fill ph-ghost" />
              <span>{lang === 'en' ? 'Milk — deleted by Sara' : 'Молоко — видалила Сара'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="v3-marquee">
        <div className="v3-marquee-row">
          {[...Array(2)].map((_, k) => (
            <div className="v3-marquee-track" key={k}>
              {[
                ['ph-house', lang === 'en' ? 'Household lists' : 'Домашні списки'],
                ['ph-confetti', lang === 'en' ? 'Event lists' : 'Списки подій'],
                ['ph-user-plus', lang === 'en' ? 'Claim items' : 'Резервування'],
                ['ph-ghost', lang === 'en' ? 'Ghost items' : 'Примарні товари'],
                ['ph-wifi-slash', lang === 'en' ? 'Works offline' : 'Працює офлайн'],
                ['ph-vibrate', lang === 'en' ? 'Shake to undo' : 'Тряси для скасування'],
                ['ph-palette', lang === 'en' ? 'Custom themes' : 'Кастомні теми'],
                ['ph-archive', lang === 'en' ? 'Smart catalog' : 'Розумний каталог'],
                ['ph-bell', lang === 'en' ? 'Soft notifications' : 'Мʼякі сповіщення'],
                ['ph-shield-check', lang === 'en' ? 'No sign-up' : 'Без реєстрації'],
              ].map(([icon, label], i) => (
                <span key={i} className="v3-pill"><i className={`ph ${icon}`} />{label}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Two-list dual showcase */}
      <section className="v3-showcase" id="play">
        <div className="v3-showcase-head">
          <h2 className="v3-h2">
            {lang === 'en'
              ? <>Two lists.<br /><span className="v3-h2-accent">One for groceries. One for parties.</span></>
              : <>Два списки.<br /><span className="v3-h2-accent">Один для продуктів. Інший — для свят.</span></>}
          </h2>
          <p className="v3-show-sub">{lang === 'en' ? 'Same app. Two completely different brains for two completely different jobs.' : 'Той самий застосунок. Два різні підходи для двох різних задач.'}</p>
        </div>

        <div className="v3-show-grid">
          <div className="v3-show-card v3-show-house">
            <div className="v3-show-tag" style={{ background: '#DCFCE7', color: '#16A34A' }}>
              <i className="ph-fill ph-house" /> {t('showHouseTag', lang)}
            </div>
            <h3 className="v3-show-h3">{t('showHouseTitle', lang)}</h3>
            <p>{t('showHouseDesc', lang)}</p>
            <div className="v3-show-screen">
              <UIScreenHousehold lang={lang} accent={accent} />
            </div>
          </div>
          <div className="v3-show-card v3-show-event">
            <div className="v3-show-tag" style={{ background: '#FEF3C7', color: '#D97706' }}>
              <i className="ph-fill ph-confetti" /> {t('showEventTag', lang)}
            </div>
            <h3 className="v3-show-h3">{t('showEventTitle', lang)}</h3>
            <p>{t('showEventDesc', lang)}</p>
            <div className="v3-show-screen">
              <UIScreenEvent lang={lang} accent="#F59E0B" />
            </div>
          </div>
        </div>
      </section>

      {/* How — playful timeline */}
      <section className="v3-how" id="how">
        <h2 className="v3-h2">{lang === 'en' ? 'A minute, tops.' : 'Максимум хвилина.'}</h2>
        <div className="v3-how-track">
          <div className="v3-how-line" />
          {[
            { i: 'ph-list-plus', t: lang === 'en' ? 'Make a list' : 'Створи список', d: lang === 'en' ? 'Pick the type, name it.' : 'Обери тип, дай імʼя.' },
            { i: 'ph-share-network', t: lang === 'en' ? 'Share the code' : 'Поділись кодом', d: lang === 'en' ? 'Six digits, any messenger.' : 'Шість цифр, будь-який месенджер.' },
            { i: 'ph-users-three', t: lang === 'en' ? 'They join' : 'Друзі заходять', d: lang === 'en' ? 'No account, no friction.' : 'Без реєстрації, без зайвого.' },
            { i: 'ph-confetti', t: lang === 'en' ? 'Shop together' : 'Купуйте разом', d: lang === 'en' ? 'Claims, buys, ghosts — live.' : 'Резерв, покупки, привиди — наживо.' },
          ].map((s, i) => (
            <div key={i} className="v3-how-step">
              <div className="v3-how-bubble"><i className={`ph ${s.i}`} /></div>
              <div className="v3-how-num">0{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento — colorful */}
      <section className="v3-bento" id="bento">
        <h2 className="v3-h2">{t('bentoTitle', lang)}</h2>
        <p className="v3-show-sub">{t('bentoSub', lang)}</p>
        <div className="v3-bento-grid">
          <div className="v3-b v3-b-blue v3-b-2x2">
            <i className="ph-fill ph-shopping-cart" />
            <h3>{lang === 'en' ? 'Add anything, fast' : 'Додавай швидко'}</h3>
            <p>{lang === 'en' ? 'Autocomplete, voice, swipe gestures, quantity chips. The catalog grows with you.' : 'Автодоповнення, голос, свайп, чіпи кількості.'}</p>
          </div>
          <div className="v3-b v3-b-amber">
            <i className="ph-fill ph-user-plus" />
            <h3>{lang === 'en' ? 'Claim system' : 'Резервування'}</h3>
            <p>{lang === 'en' ? 'Tap any item to claim it.' : 'Тап — і ти резервуєш.'}</p>
          </div>
          <div className="v3-b v3-b-violet">
            <i className="ph-fill ph-eye" />
            <h3>{lang === 'en' ? 'Unseen updates' : 'Непереглянуті'}</h3>
            <p>{lang === 'en' ? 'See what changed.' : 'Бачте, що змінилось.'}</p>
          </div>
          <div className="v3-b v3-b-rose v3-b-wide">
            <i className="ph-fill ph-ghost" />
            <h3>{lang === 'en' ? 'Ghost items — nothing vanishes silently' : 'Примарні — нічого не зникає тихо'}</h3>
            <p>{lang === 'en' ? 'Deleted items linger so you always know what disappeared.' : 'Видалене залишається на мить — ти знаєш.'}</p>
          </div>
          <div className="v3-b v3-b-green">
            <i className="ph-fill ph-shield-check" />
            <h3>{lang === 'en' ? 'No sign-up' : 'Без реєстрації'}</h3>
            <p>{lang === 'en' ? 'Open and start.' : 'Відкривай і починай.'}</p>
          </div>
          <div className="v3-b v3-b-blue v3-b-wide">
            <i className="ph-fill ph-palette" />
            <h3>{lang === 'en' ? 'Make it yours' : 'Зроби своїм'}</h3>
            <p>{lang === 'en' ? '10 palettes · 6 fonts · animated icons · left-handed mode' : '10 палітр · 6 шрифтів · анімовані іконки · режим лівші'}</p>
          </div>
          <div className="v3-b v3-b-amber">
            <i className="ph-fill ph-copy-simple" />
            <h3>{lang === 'en' ? 'Templates' : 'Шаблони'}</h3>
            <p>{lang === 'en' ? 'Reusable lists.' : 'Списки для повторного використання.'}</p>
          </div>
          <div className="v3-b v3-b-violet">
            <i className="ph-fill ph-users-four" />
            <h3>{lang === 'en' ? 'Roles' : 'Ролі'}</h3>
            <p>{lang === 'en' ? 'Owner · editor · viewer.' : 'Власник · редактор · глядач.'}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="v3-cta" id="download">
        <div className="v3-cta-card">
          <img src="assets/mascot.png" alt="" className="v3-cta-mascot" />
          <h2 className="v3-h2 v3-cta-h">{t('ctaTitle', lang)}</h2>
          <p>{t('ctaSub', lang)}</p>
          <StoreBadges size="lg" dark={true} />
          <a href="https://app.shoplix.app/" target="_blank" rel="noopener" className="v3-cta-web">
            <i className="ph ph-browser" />{t('webapp', lang)} →
          </a>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}

window.VariantPlayful = VariantPlayful;

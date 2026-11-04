import { SITE, OG_IMAGE, getArticlePath, getBlogIndexPath } from '../i18n/languages.mjs';
import { renderBlogDocument, CTA_BTNS } from './blog-layout.mjs';
import { BLOG_INDEX_DATA } from './blog-index-data.mjs';

const BLOG_INDEX_DATA_B = {
  nl: {
    title: 'Shoplix Blog — Gedeelde boodschappenlijsten, budget en huishouden',
    description: 'Praktische gidsen en eerlijke vergelijkingen over gedeelde boodschappenlijsten, kassabonnen scannen en boodschappenbudgetten.',
    eyebrow: 'Shoplix Blog', h1: 'Boodschappenlijsten, budget en <em>samenwerking thuis</em>',
    lead: 'Gidsen en eerlijke vergelijkingen van het team achter Shoplix — inclusief wanneer een andere app beter bij je past.',
    posts: [
      ['receipt', 'Functie uitgelicht · Snelheid & Budget', 'Kassabon scannen in Shoplix: typ geen prijzen en gewichten meer in de winkel', 'Hoe een foto van een papieren bon of een screenshot van een digitale kassabon exacte gewichten, aantallen en prijzen automatisch bijwerkt.', '04-11-2026'],
      ['spending', 'Gids · Budget', 'Een boodschappenlijst-app die je uitgaven bijhoudt', 'Waarom boodschappenbudgetten mislukken in bank-apps en spreadsheets — en hoe prijzen op je lijst uitgaven per persoon, categorie en product tonen.', '26-08-2026'],
      ['bestApps', 'Vergelijking · 2026', 'De 6 beste gedeelde boodschappenlijst-apps in 2026', 'Shoplix, AnyList, Bring!, Listonic, OurGroceries en Google Keep vergeleken op realtime sync, artikelen claimen en budgetstatistieken.', '25-08-2026'],
      ['listonic', 'Head-to-head · 2026', 'Shoplix vs Listonic: welke app past bij jouw huishouden?', 'Looproute-sortering en slimme suggesties tegenover artikelen claimen, budgetanalyse en een reclamevrije gratis versie.', '25-08-2026'],
    ],
    aboutH2: 'Over het Shoplix Blog',
    aboutP: 'We bouwden Shoplix om dagelijkse frustraties bij het boodschappen doen voor gezinnen, stellen en huisgenoten weg te nemen: belletjes vanuit het gangpad, vergeten producten en dubbel gekochte melk. Op dit blog delen we praktische gidsen over huishoudbudgetten en objectieve app-vergelijkingen.',
    topicsH3: 'Waar we over schrijven',
    topics: [
      '<strong>Realtime synchronisatie &amp; afstemming:</strong> Hoe live sync en “Ik neem dit mee”-badges dubbele aankopen voorkomen.',
      '<strong>Inzicht in je boodschappenbudget:</strong> Hoe kassaboncontrole en prijsgeschiedenis per kg/L echte supermarktinflatie laten zien.',
      '<strong>Eerlijke app-vergelijkingen:</strong> Uitgebreide vergelijkingen van Shoplix met Listonic, Bring!, AnyList en OurGroceries.',
    ],
    faqH2: 'Veelgestelde vragen (FAQ)',
    faqs: [
      ['Hoe voorkomt Shoplix dat twee mensen hetzelfde kopen?', 'Met realtime claimen: tik op het avatar-icoon bij een product en je foto of initialen verschijnen direct op ieders telefoon (“Ik haal dit wel”).'],
      ['Wat is het verschil tussen Huishouden- en Evenementlijsten?', 'In een Huishoudenlijst verdwijnen afgevinkte artikelen automatisch om de lijst schoon te houden. In een Evenementlijst (feestje, BBQ) blijven gekochte items zichtbaar en zie je de uitgaven per lid.'],
      ['Kan ik Shoplix gebruiken zonder een account aan te maken?', 'Ja. Dankzij de Anonymous-First architectuur kun je direct lijsten maken en delen via een link — zonder registratie of wachtwoord.'],
      ['Werkt Shoplix ook offline in de supermarkt?', 'Ja. Alle lijsten worden lokaal in SQLite opgeslagen en synchroniseren automatisch zodra je weer verbinding hebt.'],
    ],
    ctaTitle: 'Probeer Shoplix gratis', ctaDesc: 'Gedeelde boodschappenlijsten met realtime synchronisatie — geen advertenties, geen registratie, op iOS, Android en web.',
  },
  pl: {
    title: 'Blog Shoplix — Wspólne listy zakupów, budżet domowy i organizacja',
    description: 'Praktyczne poradniki i uczciwe porównania aplikacji do wspólnych list zakupów, skanowania paragonów i kontroli domowego budżetu.',
    eyebrow: 'Blog Shoplix', h1: 'Listy zakupów, budżet i <em>domowa współpraca</em>',
    lead: 'Poradniki i uczciwe porównania od zespołu Shoplix — w tym sytuacje, w których inna aplikacja sprawdzi się lepiej.',
    posts: [
      ['receipt', 'Nowa funkcja · Szybkość i budżet', 'Skanowanie paragonów w Shoplix: koniec z wpisywaniem cen i wagi w sklepie', 'Jak zdjęcie papierowego paragonu lub zrzut ekranu e-paragonu automatycznie uzupełnia dokładną wagę, ilość i ceny produktów.', '04.11.2026'],
      ['spending', 'Poradnik · Budżet', 'Aplikacja do listy zakupów, która kontroluje wydatki', 'Dlaczego budżety na jedzenie upadają w aplikacjach bankowych i arkuszach — oraz jak ceny w liście pokazują wydatki wg osoby, kategorii i produktu.', '26.08.2026'],
      ['bestApps', 'Porównanie · 2026', '6 najlepszych aplikacji do wspólnej listy zakupów w 2026 roku', 'Shoplix, AnyList, Bring!, Listonic, OurGroceries i Google Keep: synchronizacja na żywo, rezerwacja produktów, budżet i darmowe plany.', '25.08.2026'],
      ['listonic', 'Pojedynek · 2026', 'Shoplix czy Listonic: która aplikacja lepiej pasuje do Twojego domu?', 'Sortowanie według alejek i inteligentne podpowiedzi kontra rezerwowanie produktów, analityka budżetu i darmowa wersja bez reklam.', '25.08.2026'],
    ],
    aboutH2: 'O blogu Shoplix',
    aboutP: 'Stworzyliśmy Shoplix, aby wyeliminować codzienny chaos podczas zakupów w rodzinie, w parze czy ze współlokatorami: telefony spomiędzy półek, zapomniane produkty i kupione dwa razy mleko. Na blogu dzielimy się poradnikami o budżecie spożywczym oraz rzetelnymi porównaniami aplikacji.',
    topicsH3: 'Główne tematy',
    topics: [
      '<strong>Synchronizacja na żywo:</strong> Jak natychmiastowa aktualizacja i rezerwacja produktów („Ja to kupię”) zapobiegają podwójnym zakupom.',
      '<strong>Analityka wydatków i historia cen:</strong> Jak skanowanie paragonów i przeliczanie cen na kg/L pokazuje realną inflację.',
      '<strong>Obiektywne porównania aplikacji:</strong> Zestawienia Shoplix z Listonic, Bring!, AnyList i OurGroceries.',
    ],
    faqH2: 'Często zadawane pytania (FAQ)',
    faqs: [
      ['Jak Shoplix zapobiega kupowaniu tych samych rzeczy dwa razy?', 'Dzięki funkcji rezerwacji: dotknij ikony awatara przy produkcie, a Twoje zdjęcie pojawi się natychmiast na telefonach pozostałych osób („Ja to wezmę”).'],
      ['Czym różni się lista Domowa od listy Wydarzenie?', 'Na liście Domowej kupione produkty znikają po odhaczeniu, zachowując porządek. Na liście Wydarzenie (impreza, grill, wyjazd) kupione pozycje zostają w osobnej sekcji wraz z podsumowaniem wydatków każdego uczestnika.'],
      ['Czy muszę zakładać konto, aby korzystać z Shoplix?', 'Nie. Możesz zainstalować aplikację i od razu udostępniać listy przez link — bez podawania e-maila i hasła.'],
      ['Czy aplikacja działa bez internetu (offline)?', 'Tak. Wszystkie dane są zapisywane lokalnie w bazie SQLite na telefonie i synchronizują się automatycznie po odzyskaniu zasięgu.'],
    ],
    ctaTitle: 'Wypróbuj Shoplix za darmo', ctaDesc: 'Wspólne listy zakupów w czasie rzeczywistym — bez reklam, bez rejestracji, na iOS, Androidzie i w przeglądarce.',
  },
  pt: {
    title: 'Blog Shoplix — Listas de compras partilhadas, orçamento e organização',
    description: 'Guias práticos e comparações honestas sobre listas de compras partilhadas, digitalização de talões e controlo do orçamento familiar.',
    eyebrow: 'Blog Shoplix', h1: 'Listas de compras, orçamento e <em>coordenação familiar</em>',
    lead: 'Guias e comparações honestas da equipa Shoplix — incluindo quando outra aplicação é a escolha certa.',
    posts: [
      ['receipt', 'Funcionalidade em detalhe · Rapidez e Orçamento', 'Digitalização de talões na Shoplix: deixe de digitar preços e pesos na loja', 'Como fotografar o talão em papel ou fazer captura de ecrã do talão digital preenche pesos, quantidades e preços automaticamente.', '04/11/2026'],
      ['spending', 'Guia · Orçamento', 'Uma app de lista de compras que controla as despesas', 'Porque é que os orçamentos falham nas apps bancárias e folhas de cálculo — e como registar preços na lista mostra gastos por pessoa, categoria e produto.', '26/08/2026'],
      ['bestApps', 'Comparação · 2026', 'As 6 melhores apps de lista de compras partilhada em 2026', 'Shoplix, AnyList, Bring!, Listonic, OurGroceries e Google Keep comparadas em sincronização em tempo real, reserva de artigos e estatísticas.', '25/08/2026'],
      ['listonic', 'Frente a frente · 2026', 'Shoplix vs Listonic: qual é a melhor para a sua casa?', 'Ordenação por corredor e sugestões inteligentes contra reserva de artigos, controlo de orçamento e versão gratuita sem anúncios.', '25/08/2026'],
    ],
    aboutH2: 'Sobre o Blog Shoplix',
    aboutP: 'Criámos a Shoplix para eliminar os imprevistos das compras em família: chamadas do corredor do supermercado, esquecimentos e leite comprado a dobrar. Neste blog partilhamos guias práticos sobre orçamento doméstico e comparações transparentes de aplicações.',
    topicsH3: 'Tópicos principais',
    topics: [
      '<strong>Sincronização em tempo real:</strong> Como a reserva de artigos («Eu trago isto») evita compras duplicadas.',
      '<strong>Controlo de orçamento e inflação:</strong> Como a conferência de talões e o histórico de preços por kg/L mostram para onde vai o dinheiro.',
      '<strong>Comparações imparciais:</strong> Análises detalhadas da Shoplix face a Listonic, Bring!, AnyList e OurGroceries.',
    ],
    faqH2: 'Perguntas frequentes (FAQ)',
    faqs: [
      ['Como é que a Shoplix evita comprar o mesmo produto duas vezes?', 'Através da reserva de artigos em tempo real: toque no espaço de avatar do produto para mostrar a todos que já o vai comprar.'],
      ['Qual a diferença entre listas Domésticas e de Evento?', 'Na lista Doméstica os artigos comprados saem da vista para manter a lista limpa. Na lista de Evento (festa, churrasco) o que já foi comprado permanece visível com o total gasto por participante.'],
      ['Posso usar a Shoplix sem criar conta?', 'Sim. Pode instalar a app e partilhar listas por link imediatamente, sem registo obrigatório nem palavras-passe.'],
      ['A Shoplix funciona offline sem rede?', 'Sim. As listas são guardadas localmente em SQLite no telemóvel e sincronizam automaticamente assim que recupera a ligação.'],
    ],
    ctaTitle: 'Experimente a Shoplix gratuitamente', ctaDesc: 'Listas de compras partilhadas em tempo real — sem anúncios, sem registo, para iOS, Android e web.',
  },
  ro: {
    title: 'Blogul Shoplix — Liste de cumpărături comune, buget și organizare',
    description: 'Ghiduri practice și comparații oneste despre liste de cumpărături comune, scanarea bonurilor fiscale și controlul bugetului alimentar.',
    eyebrow: 'Blogul Shoplix', h1: 'Liste de cumpărături, buget și <em>coordonare în familie</em>',
    lead: 'Ghiduri și comparații oneste de la echipa Shoplix — inclusiv cazurile în care o altă aplicație ți se potrivește mai bine.',
    posts: [
      ['receipt', 'Funcție nouă · Viteză și Buget', 'Scanarea bonurilor în Shoplix: nu mai tasta prețurile și greutatea în magazin', 'Cum o poză a bonului pe hârtie sau o captură de ecran a bonului digital completează automat greutățile, cantitățile și prețurile exacte.', '04.11.2026'],
      ['spending', 'Ghid · Buget', 'O aplicație de listă de cumpărături care urmărește cheltuielile', 'De ce eșuează bugetele în aplicațiile bancare și în tabele — și cum prețurile din listă arată cheltuielile pe persoană, categorie și produs.', '26.08.2026'],
      ['bestApps', 'Comparație · 2026', 'Cele mai bune 6 aplicații pentru liste de cumpărături comune în 2026', 'Shoplix, AnyList, Bring!, Listonic, OurGroceries și Google Keep comparate: sincronizare în timp real, rezervare produse și statistici.', '25.08.2026'],
      ['listonic', 'Față în față · 2026', 'Shoplix vs Listonic: ce aplicație se potrivește familiei tale?', 'Sortare pe raioane și sugestii inteligente versus rezervarea produselor, analiza bugetului și versiune gratuită fără reclame.', '25.08.2026'],
    ],
    aboutH2: 'Despre Blogul Shoplix',
    aboutP: 'Am construit Shoplix pentru a elimina haosul cumpărăturilor în familie sau în cuplu: apeluri dintre rafturi, produse uitate și lapte cumpărat de două ori. Pe acest blog publicăm ghiduri practice despre bugetul familiei și comparații obiective între aplicații.',
    topicsH3: 'Subiecte principale',
    topics: [
      '<strong>Sincronizare în timp real:</strong> Cum rezervarea cu avatar („Iau eu asta”) previne cumpărăturile duble.',
      '<strong>Analiza bugetului și a prețurilor:</strong> Cum scanarea bonului fiscal și istoricul prețurilor pe kg/L dezvăluie scumpirile reale.',
      '<strong>Comparații obiective:</strong> Analize detaliate între Shoplix, Listonic, Bring!, AnyList și OurGroceries.',
    ],
    faqH2: 'Întrebări frecvente (FAQ)',
    faqs: [
      ['Cum previne Shoplix cumpărarea aceluiași produs de două ori?', 'Prin rezervarea în timp real: atingi pictograma de avatar a produsului, iar poza ta apare instant pe telefoanele celorlalți membri.'],
      ['Care este diferența dintre lista Casnică și lista de Eveniment?', 'În lista Casnică produsele bifate dispar pentru a păstra lista curată. În lista de Eveniment (petrecere, grătar) produsele cumpărate rămân vizibile într-o secțiune separată, cu calculul cheltuielilor per participant.'],
      ['Pot folosi Shoplix fără să îmi fac cont?', 'Da. Poți instala aplicația și partaja liste prin link imediat, fără e-mail sau parolă.'],
      ['Funcționează Shoplix și offline în magazin?', 'Da. Toate modificările sunt salvate local în SQLite și se sincronizează automat când revine conexiunea la internet.'],
    ],
    ctaTitle: 'Încearcă Shoplix gratuit', ctaDesc: 'Liste de cumpărături comune în timp real — fără reclame, fără cont obligatoriu, pe iOS, Android și web.',
  },
};

const ALL_INDEX = { ...BLOG_INDEX_DATA, ...BLOG_INDEX_DATA_B };

export function renderBlogIndexPage(lang) {
  const d = ALL_INDEX[lang];
  const pathForLang = (l) => getBlogIndexPath(l);
  const cards = d.posts.map(([key, kicker, title, desc, date]) => `      <a class="ar-post-card" href="${getArticlePath(key, lang)}"><div class="kicker">${kicker}</div><h2>${title}</h2><p>${desc}</p><span class="date">${date}</span></a>`).join('\n');
  const topics = d.topics.map((t) => `        <li>${t}</li>`).join('\n');
  const faqs = d.faqs.map(([q, a]) => `      <h3>${q}</h3>\n      <p>${a}</p>`).join('\n');
  const mainHtml = `    <header><span class="ar-eyebrow">${d.eyebrow}</span><h1 class="ar-h1">${d.h1}</h1><p class="ar-lead">${d.lead}</p></header>\n    <div class="ar-post-list">\n${cards}\n    </div>\n    <section class="ar-prose" style="margin-top:64px;border-top:1px solid var(--dp-line);padding-top:48px">\n      <h2>${d.aboutH2}</h2><p>${d.aboutP}</p><h3>${d.topicsH3}</h3><ul>\n${topics}\n      </ul><h2 style="margin-top:48px">${d.faqH2}</h2>\n${faqs}\n    </section>\n    <div class="ar-cta" style="margin-top:56px"><p class="ar-cta-title">${d.ctaTitle}</p><p>${d.ctaDesc}</p>${CTA_BTNS(lang, 'blog-index')}</div>`;
  const jsonLdObj = { '@context': 'https://schema.org', '@type': 'Blog', name: d.eyebrow, url: `${SITE}${pathForLang(lang)}`, inLanguage: lang, publisher: { '@type': 'Organization', name: 'Shoplix', url: `${SITE}/${lang}/`, logo: { '@type': 'ImageObject', url: OG_IMAGE } } };
  return renderBlogDocument({ lang, pathForLang, title: d.title, description: d.description, ogType: 'website', jsonLdObj, mainHtml });
}

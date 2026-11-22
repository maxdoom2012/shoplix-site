import { renderArticlePage } from './blog-layout.mjs';
import { POST_BEST_A } from './post-best-a.mjs';
import { POST_BEST_B } from './post-best-b.mjs';
import { POST_BEST_C } from './post-best-c.mjs';
import { POST_BEST_D } from './post-best-d.mjs';
import { POST_BEST_E } from './post-best-e.mjs';
import { POST_BEST_G } from './post-best-g.mjs';
import { POST_BEST_H } from './post-best-h.mjs';

export const POST_BEST_F = {
  pt: {
    title: 'As 6 melhores apps de lista de compras partilhada em 2026',
    description: 'As melhores aplicações de lista de compras partilhada de 2026 comparadas: Shoplix, AnyList, Bring!, Listonic, OurGroceries e Google Keep.',
    crumb: 'Melhores apps de lista de compras partilhada',
    eyebrow: 'Comparação · 2026',
    h1: 'As 6 melhores apps de <em>lista de compras partilhada</em> em 2026',
    lead: 'A melhor app de lista de compras partilhada em 2026 depende da sua casa: <strong>Shoplix</strong> para listas em tempo real com reserva de artigos, leitura de talões e estatísticas de orçamento, <strong>AnyList</strong> para planeamento de refeições, <strong>Bring!</strong> para mosaicos visuais, <strong>Listonic</strong> para ordenação por corredor, <strong>OurGroceries</strong> para assistentes de voz e <strong>Google Keep</strong> se não quiser instalar nada.',
    byline: 'Pela equipa Shoplix', dateLabel: 'Publicado a 25/08/2026',
    disclosure: '<strong>Transparência:</strong> desenvolvemos a Shoplix. Neste guia comparamos factos verificáveis de cada app e indicamos quando outra opção é mais adequada.',
    howTitle: 'Como avaliámos cada aplicação',
    howList: ['<strong>Sincronização em tempo real</strong> — as alterações surgem em segundos em todos os telemóveis?', '<strong>Coordenação</strong> — consegue ver quem vai comprar cada artigo («Eu trago isto»)?', '<strong>Zero atrito</strong> — funciona sem registo obrigatório e sem anúncios?', '<strong>Além da lista</strong> — estatísticas de gastos, digitalização de talões, receitas e voz.'],
    tblTitle: 'Apps de lista de compras partilhada comparadas',
    tblHead: ['App', 'Plano grátis', 'Reserva', 'Estatísticas', 'Voz', 'Receitas', 'Plataformas'],
    tblRows: [
      ['Shoplix', 'Completo, sem anúncios', 'Sim', 'Por membro, categoria, produto', 'Sim, vários artigos', 'Importação URL/texto', 'iOS, Android, Web'],
      ['AnyList', 'Generoso, sem anúncios', 'Não', 'Totais (pago)', 'Sim', 'Forte (completo pago)', 'iOS, Android, Watch; Web pago'],
      ['Bring!', 'Conteúdo patrocinado', 'Não', 'Não', 'Via assistentes', 'Inspiração receitas', 'iOS, Android, Web'],
      ['Listonic', 'Com anúncios', 'Não', 'Preços e total lista', 'Sim', 'Básico', 'iOS, Android, Web'],
      ['OurGroceries', 'Com anúncios', 'Não', 'Não', 'Via Alexa/Siri', 'Receitas simples', 'iOS, Android, Web, relógios'],
      ['Google Keep', 'Tudo grátis', 'Não', 'Não', 'Via Assistant', 'Não', 'iOS, Android, Web'],
    ],
    apps: [
      { id: 'shoplix', name: '1. Shoplix', badge: 'Melhor para famílias e eventos', win: true, meta: 'iOS · Android · Web — base gratuita sem anúncios ou registo; Shoplix Premium opcional', verdict: '<strong>Escolha a Shoplix se</strong> várias pessoas fazem compras para a mesma casa ou evento e quer ver em tempo real quem compra o quê, sem anúncios.', desc: 'A <a href="/pt/">Shoplix</a> evita compras duplicadas com a reserva por avatar («Eu trago isto»), inclui <a href="/pt/blog/grocery-list-app-that-tracks-spending/">estatísticas de gastos por membro, categoria e produto</a>, <a href="/pt/blog/receipt-scanning-shopping-list/">digitalização de talões</a> e dois modos (Doméstica e Evento).', pros: ['Grátis sem anúncios e sem registo obrigatório', 'Reserva de artigos com avatar', 'Estatísticas de gastos, histórico de preços e leitura de talões', 'Voz multi-artigo e modo offline'], cons: ['App mais recente do que a AnyList', 'Sem calendário semanal de refeições nem app para relógio', 'Modelos e receitas ilimitados (20 grátis) requerem Shoplix Premium'] },
      { id: 'anylist', name: '2. AnyList', badge: 'Melhor para planear refeições', meta: 'iOS · Android · Apple Watch · Web (pago)', verdict: '<strong>Escolha a AnyList se</strong> planeia as compras a partir de um calendário semanal de refeições.', desc: 'Excelente livro de receitas e calendário semanal. O acesso web e a importação ilimitada exigem subscrição paga.', pros: ['Ótima gestão de receitas e refeições', 'Versão gratuita sem anúncios'], cons: ['Web e importação de receitas pagos', 'Sem reserva de artigos ou despesas por pessoa'] },
      { id: 'bring', name: '3. Bring!', badge: 'Melhor experiência visual', meta: 'iOS · Android · Web — grátis com conteúdo patrocinado', verdict: '<strong>Escolha a Bring! se</strong> prefere uma grelha visual de mosaicos ilustrados.', desc: 'Substitui a lista de texto por mosaicos coloridos. O plano gratuito inclui ofertas patrocinadas e não tem estatísticas de orçamento.', pros: ['Interface visual bonita e rápida', 'Partilha fiável entre plataformas'], cons: ['Conteúdo patrocinado na versão gratuita', 'Sem reserva de artigos nem histórico de preços'] },
      { id: 'listonic', name: '4. Listonic', badge: 'Melhores sugestões inteligentes', meta: 'iOS · Android · Web — grátis com anúncios', verdict: '<strong>Escolha a Listonic se</strong> faz compras sozinho e quer ordenação automática por corredor.', desc: 'Excelente preenchimento automático e ~40 idiomas. Leia a nossa <a href="/pt/blog/shoplix-vs-listonic/">comparação Shoplix vs Listonic</a>.', pros: ['Ótimas sugestões e ordem por corredor', 'Cerca de 40 idiomas'], cons: ['Anúncios na versão gratuita', 'Sem reserva de artigos nem gastos por membro'] },
      { id: 'ourgroceries', name: '5. OurGroceries', badge: 'A opção mais simples', meta: 'iOS · Android · Web · Relógios — grátis com anúncios', verdict: '<strong>Escolha a OurGroceries se</strong> usa Alexa, Siri ou smartwatch.', desc: 'Muito simples de usar e compatível com colunas inteligentes e relógios, mas com aspeto datado.', pros: ['Curva de aprendizagem zero', 'Suporte Alexa, Siri e relógios'], cons: ['Visual antigo e com anúncios', 'Sem controlo de preços'] },
      { id: 'google-keep', name: '6. Google Keep', badge: 'Melhor opção sem instalar nada', meta: 'iOS · Android · Web — totalmente grátis', verdict: '<strong>Escolha o Google Keep se</strong> só precisa de uma nota partilhada simples.', desc: 'Grátis e já instalado em muitos telemóveis, mas sem categorias, quantidades ou preços.', pros: ['100% grátis', 'Suficiente para listas muito curtas'], cons: ['Sem funcionalidades de supermercado', 'Os itens marcados acumulam-se no fundo'] },
    ],
    chooseTitle: 'Como escolher rapidamente',
    chooseList: ['<strong>Família ou casal que faz compras em conjunto</strong> → Shoplix.', '<strong>Planeamento semanal de refeições</strong> → AnyList.', '<strong>Grelha visual de mosaicos</strong> → Bring!.', '<strong>Compras a solo ordenadas por corredor</strong> → Listonic.', '<strong>Festa, churrasco ou viagem de grupo</strong> → Modo Evento da Shoplix.'],
    ctaTitle: 'Experimente primeiro a opção sem atrito',
    ctaDesc: 'O plano gratuito da Shoplix cobre tudo o que uma casa partilhada precisa, sem anúncios e sem pedir registo.',
    faqTitle: 'Perguntas frequentes (FAQ)',
    faqs: [
      ['Qual é a melhor app gratuita de lista de compras partilhada?', 'A Shoplix oferece o plano gratuito mais completo em 2026: listas em tempo real, reserva de artigos, voz, leitura de talões e estatísticas — sem anúncios e sem registo.'],
      ['Duas pessoas podem editar a mesma lista ao mesmo tempo?', 'Sim. Na Shoplix, AnyList, Bring!, Listonic e OurGroceries cada alteração sincroniza em poucos segundos.'],
      ['Que app funciona em iPhone, Android e navegador?', 'Shoplix, Bring!, Listonic, OurGroceries e Google Keep funcionam gratuitamente em iOS, Android e web.'],
      ['Como evitar comprar o mesmo artigo duas vezes?', 'Com a reserva de artigos da Shoplix: toque no avatar do produto para que todos vejam que já o vai comprar.'],
    ],
    relatedHtml: 'Leia também: <a href="/pt/blog/shoplix-vs-listonic/">Shoplix vs Listonic</a> ou <a href="/pt/blog/receipt-scanning-shopping-list/">Digitalização de talões na Shoplix</a>.',
  },
  ro: {
    title: 'Cele mai bune 6 aplicații pentru liste de cumpărături comune în 2026',
    description: 'Cele mai bune aplicații pentru liste de cumpărături comune din 2026 comparate: Shoplix, AnyList, Bring!, Listonic, OurGroceries și Google Keep.',
    crumb: 'Cele mai bune aplicații pentru liste de cumpărături',
    eyebrow: 'Comparație · 2026',
    h1: 'Cele mai bune 6 aplicații pentru <em>liste de cumpărături comune</em> în 2026',
    lead: 'Cea mai bună aplicație în 2026 depinde de familia ta: <strong>Shoplix</strong> pentru liste în timp real cu rezervarea produselor, scanare de bonuri și statistici de buget, <strong>AnyList</strong> pentru planificarea meselor, <strong>Bring!</strong> pentru interfața vizuală, <strong>Listonic</strong> pentru sortare pe raioane, <strong>OurGroceries</strong> pentru ceasuri inteligente și <strong>Google Keep</strong> dacă nu vrei o aplicație nouă.',
    byline: 'De echipa Shoplix', dateLabel: 'Publicat pe 25.08.2026',
    disclosure: '<strong>Transparență:</strong> dezvoltăm Shoplix. În acest ghid prezentăm fapte verificabile și indicăm onest când o altă aplicație este mai potrivită.',
    howTitle: 'Cum am evaluat aplicațiile',
    howList: ['<strong>Sincronizare în timp real</strong> — apar modificările în câteva secunde pe toate telefoanele?', '<strong>Coordonare</strong> — poți vedea cine cumpără fiecare produs („Iau eu asta”)?', '<strong>Fără bariere</strong> — funcționează direct fără cont obligatoriu și fără reclame?', '<strong>Dincolo de listă</strong> — statistici de cheltuieli, scanare bonuri, rețete și voce.'],
    tblTitle: 'Aplicații pentru liste de cumpărături comparate',
    tblHead: ['Aplicație', 'Plan gratuit', 'Rezervare', 'Statistici buget', 'Voce', 'Rețete', 'Platforme'],
    tblRows: [
      ['Shoplix', 'Complet, fără reclame', 'Da', 'Pe membru, categorie, produs', 'Da, mai multe produse', 'Import URL/text', 'iOS, Android, Web'],
      ['AnyList', 'Generos, fără reclame', 'Nu', 'Totaluri (plătit)', 'Da', 'Avansat (plătit)', 'iOS, Android, Watch; Web plătit'],
      ['Bring!', 'Conținut sponsorizat', 'Nu', 'Nu', 'Prin asistenți', 'Idei rețete', 'iOS, Android, Web'],
      ['Listonic', 'Cu reclame', 'Nu', 'Prețuri și total listă', 'Da', 'Simplu', 'iOS, Android, Web'],
      ['OurGroceries', 'Cu reclame', 'Nu', 'Nu', 'Prin Alexa/Siri', 'Rețete de bază', 'iOS, Android, Web, ceasuri'],
      ['Google Keep', 'Totul gratuit', 'Nu', 'Nu', 'Prin Assistant', 'Nu', 'iOS, Android, Web'],
    ],
    apps: [
      { id: 'shoplix', name: '1. Shoplix', badge: 'Cea mai bună pentru familii și evenimente', win: true, meta: 'iOS · Android · Web — gratuit fără reclame sau cont; opțional Shoplix Premium', verdict: '<strong>Alege Shoplix dacă</strong> mai multe persoane fac cumpărături pentru casă sau eveniment și vrei să vezi în timp real cine ce cumpără.', desc: '<a href="/ro/">Shoplix</a> previne cumpărăturile duble prin rezervarea cu avatar („Iau eu asta”), oferă <a href="/ro/blog/grocery-list-app-that-tracks-spending/">statistici de cheltuieli pe membru, categorie și produs</a>, <a href="/ro/blog/receipt-scanning-shopping-list/">scanare de bonuri</a> și două moduri (Casnic și Eveniment).', pros: ['Gratuit fără reclame și fără cont obligatoriu', 'Rezervarea produselor cu avatar', 'Statistici de buget, istoric prețuri și scanare bonuri', 'Introducere vocală multi-produs și mod offline'], cons: ['Mai nouă decât AnyList', 'Fără calendar săptămânal de mese sau aplicație de ceas', 'Șabloane și rețete nelimitate (20 gratuite) prin Shoplix Premium'] },
      { id: 'anylist', name: '2. AnyList', badge: 'Cea mai bună pentru planificarea meselor', meta: 'iOS · Android · Apple Watch · Web (plătit)', verdict: '<strong>Alege AnyList dacă</strong> lista ta pornește de la un plan săptămânal de gătit.', desc: 'Excelentă pentru rețete și calendarul meselor; accesul web necesită abonamentul Complete.', pros: ['Colecție de rețete și planificator excelent', 'Versiune gratuită fără reclame'], cons: ['Web și import rețete contra cost', 'Fără rezervare produse sau cheltuieli pe membru'] },
      { id: 'bring', name: '3. Bring!', badge: 'Cea mai bună experiență vizuală', meta: 'iOS · Android · Web — gratuit cu conținut sponsorizat', verdict: '<strong>Alege Bring! dacă</strong> preferi o grilă vizuală cu pictograme.', desc: 'Înlocuiește lista text cu pătrate ilustrate; nu include statistici de buget.', pros: ['Interfață vizuală plăcută', 'Sincronizare rapidă'], cons: ['Oferte sponsorizate în planul gratuit', 'Fără rezervare produse sau istoric prețuri'] },
      { id: 'listonic', name: '4. Listonic', badge: 'Cele mai bune sugestii inteligente', meta: 'iOS · Android · Web — gratuit cu reclame', verdict: '<strong>Alege Listonic dacă</strong> faci cumpărături singur și vrei sortare pe raioane.', desc: 'Autocompletare matură și ~40 de limbi. Vezi <a href="/ro/blog/shoplix-vs-listonic/">comparația Shoplix vs Listonic</a>.', pros: ['Sugestii foarte bune și sortare pe raioane', 'Circa 40 de limbi'], cons: ['Reclame în versiunea gratuită', 'Fără rezervare produse sau statistici pe membru'] },
      { id: 'ourgroceries', name: '5. OurGroceries', badge: 'Cea mai simplă opțiune', meta: 'iOS · Android · Web · Ceasuri — gratuit cu reclame', verdict: '<strong>Alege OurGroceries dacă</strong> folosești Alexa, Siri sau ceasul inteligent.', desc: 'Foarte simplă și compatibilă cu boxe inteligente, dar cu design învechit.', pros: ['Ușor de folosit imediat', 'Suport Alexa, Siri și ceasuri'], cons: ['Interfață învechită și reclame', 'Fără urmărirea prețurilor'] },
      { id: 'google-keep', name: '6. Google Keep', badge: 'Fără aplicație nouă', meta: 'iOS · Android · Web — complet gratuit', verdict: '<strong>Alege Google Keep dacă</strong> vrei doar o notiță simplă cu căsuțe.', desc: 'Gratuită și preinstalată pe multe telefoane, dar fără categorii, cantități sau prețuri.', pros: ['100% gratuită', 'Bună pentru liste foarte scurte'], cons: ['Fără funcții pentru cumpărături', 'Produsele bifate rămân jos în dezordine'] },
    ],
    chooseTitle: 'Cum alegi rapid',
    chooseList: ['<strong>Familie sau cuplu care cumpără împreună</strong> → Shoplix.', '<strong>Planificare săptămânală a meselor</strong> → AnyList.', '<strong>Interfață vizuală</strong> → Bring!.', '<strong>Cumpărături solo sortate pe raioane</strong> → Listonic.', '<strong>Petrecere, grătar sau excursie</strong> → Modul Eveniment din Shoplix.'],
    ctaTitle: 'Încearcă mai întâi varianta fără bariere',
    ctaDesc: 'Planul gratuit Shoplix acoperă tot ce are nevoie o familie, fără reclame și fără cont obligatoriu.',
    faqTitle: 'Întrebări frecvente (FAQ)',
    faqs: [
      ['Care este cea mai bună aplicație gratuită pentru liste de cumpărături comune?', 'Shoplix oferă cel mai complet plan gratuit în 2026: liste în timp real, rezervare produse, voce, scanare bonuri și statistici — fără reclame și fără înregistrare.'],
      ['Pot două persoane să editeze aceeași listă simultan?', 'Da. În Shoplix, AnyList, Bring!, Listonic și OurGroceries fiecare modificare se sincronizează în câteva secunde.'],
      ['Ce aplicație funcționează pe iPhone, Android și web?', 'Shoplix, Bring!, Listonic, OurGroceries și Google Keep funcționează gratuit pe iOS, Android și în browser.'],
      ['Cum eviți cumpărarea aceluiași produs de două ori?', 'Prin rezervarea produselor în Shoplix: atingi avatarul produsului și toți ceilalți văd instant că îl iei tu.'],
    ],
    relatedHtml: 'Citește și: <a href="/ro/blog/shoplix-vs-listonic/">Shoplix vs Listonic</a> sau <a href="/ro/blog/receipt-scanning-shopping-list/">Scanarea bonurilor în Shoplix</a>.',
  },
};

const ALL_BEST = { ...POST_BEST_A, ...POST_BEST_B, ...POST_BEST_C, ...POST_BEST_D, ...POST_BEST_E, ...POST_BEST_F, ...POST_BEST_G, ...POST_BEST_H };

export function renderBestAppsPost(lang) {
  const d = ALL_BEST[lang];
  const howUl = d.howList.map((li) => `<li>${li}</li>`).join('');
  const ths = d.tblHead.map((h) => `<th>${h}</th>`).join('');
  const trs = d.tblRows.map((r, i) => `<tr${i === 0 ? ' class="hl"' : ''}><td>${r[0]}</td><td>${r[1]}</td><td class="${i === 0 ? 'yes' : 'no'}">${r[2]}</td><td class="${i === 0 ? 'yes' : 'no'}">${r[3]}</td><td class="yes">${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('');
  const appsHtml = d.apps.map((a) => `<div class="ar-app" id="${a.id}"><div class="ar-app-head"><h3>${a.name}</h3><span class="ar-app-badge${a.win ? ' win' : ''}">${a.badge}</span></div><p class="ar-app-meta">${a.meta}</p><div class="ar-verdict"><p>${a.verdict}</p></div><p>${a.desc}</p><div class="ar-proscons"><div class="ar-pros"><h4>+</h4><ul>${a.pros.map((p) => `<li>${p}</li>`).join('')}</ul></div><div class="ar-cons"><h4>−</h4><ul>${a.cons.map((c) => `<li>${c}</li>`).join('')}</ul></div></div></div>`).join('\n');
  const chooseUl = d.chooseList.map((li) => `<li>${li}</li>`).join('');
  const bodyHtml = `<p>${d.disclosure}</p><h2>${d.howTitle}</h2><ul>${howUl}</ul><h2>${d.tblTitle}</h2><div class="ar-table-wrap"><table class="ar-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>${appsHtml}<h2>${d.chooseTitle}</h2><ul>${chooseUl}</ul>`;
  return renderArticlePage(lang, 'bestApps', { ...d, dateIso: '2026-08-25', bodyHtml });
}

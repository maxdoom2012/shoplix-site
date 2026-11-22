import { renderArticlePage } from './blog-layout.mjs';
import { POST_LISTONIC_A } from './post-listonic-a.mjs';
import { POST_LISTONIC_B } from './post-listonic-b.mjs';
import { POST_LISTONIC_C } from './post-listonic-c.mjs';
import { POST_LISTONIC_E } from './post-listonic-e.mjs';
import { POST_LISTONIC_F } from './post-listonic-f.mjs';

export const POST_LISTONIC_D = {
  pt: {
    title: 'Shoplix vs Listonic (2026): qual é a melhor app de lista de compras?',
    description: 'Shoplix vs Listonic comparadas com honestidade em 2026: partilha em tempo real, reserva de artigos, leitura de talões, orçamento, voz e anúncios.',
    crumb: 'Shoplix vs Listonic',
    eyebrow: 'Frente a frente · 2026',
    h1: 'Shoplix vs Listonic: <em>qual é a melhor</em> para a sua casa?',
    lead: 'Resumo: a <strong>Listonic</strong> é um excelente assistente individual — sugestões inteligentes, ordenação por corredor e ~40 idiomas. A <strong>Shoplix</strong> é a melhor lista partilhada — reserva de artigos com avatar, digitalização de talões, gastos por membro, modo Evento e plano gratuito sem anúncios nem registo.',
    byline: 'Pela equipa Shoplix', dateLabel: 'Publicado a 25/08/2026',
    disclosure: '<strong>Transparência:</strong> criámos a Shoplix. Por isso mesmo destacamos com clareza onde a Listonic é superior.',
    tblTitle: 'Comparação lado a lado',
    tblRows: [
      ['Preço', 'Base grátis sem anúncios · Shoplix Premium opcional', 'Grátis com anúncios · Premium pago'],
      ['Registo', 'Não obrigatório, mesmo para partilhar', 'Conta necessária para partilhar'],
      ['Listas em tempo real', 'Sim', 'Sim'],
      ['Reserva de artigos', 'Sim, com avatares', 'Não'],
      ['Estatísticas de gastos', 'Por membro, categoria e produto', 'Preços e total da lista'],
      ['Histórico de preços', 'Sim, por kg/L/unidade', 'Não'],
      ['Leitor de talões e códigos', 'Sim — <a href="/pt/blog/receipt-scanning-shopping-list/">conferência de talões</a> e código de barras', 'Não disponível'],
      ['Entrada por voz', 'Sim — vários artigos com quantidades', 'Sim, muito polida'],
      ['Ordem por corredor', 'Categorização automática', 'Sim, por percurso da loja'],
      ['Plataformas', 'iOS, Android, Web (sem conta)', 'iOS, Android, Web'],
    ],
    listonicTitle: 'Onde a Listonic ganha',
    listonicList: ['<strong>Sugestões inteligentes:</strong> Preenchimento automático refinado ao longo de uma década.', '<strong>Ordenação por corredor:</strong> Organiza pela rota típica do supermercado.', '<strong>Idiomas:</strong> Cerca de 40 idiomas.'],
    shoplixTitle: 'Onde a Shoplix ganha',
    shoplixList: ['<strong>Reserva de artigos («Eu trago isto»):</strong> Toque num artigo para mostrar o seu avatar e evitar compras duplicadas.', '<strong>Leitura de talões e controlo de orçamento:</strong> Fotografe o talão e a <a href="/pt/">Shoplix</a> atualiza pesos, preços e compras extra.', '<strong>Modo Evento:</strong> Ideal para festas e churrascos com despesas calculadas por participante.', '<strong>Sem anúncios e sem conta obrigatória:</strong> Partilhe qualquer lista por link.'],
    premTitle: 'O que muda com o Shoplix Premium',
    premP: 'O plano gratuito da Shoplix não tem anúncios e inclui 20 modelos, 20 receitas e 10 leituras de talões por mês. O Shoplix Premium aumenta o limite para 150 talões/mês e desbloqueia modelos e receitas ilimitados.',
    verdict: '<strong>Faz compras sozinho e quer ordem por corredor</strong> → Listonic. <strong>Faz compras em família, casal ou grupo</strong> → Shoplix.',
    ctaTitle: 'Veja a diferença na sua própria lista',
    ctaDesc: 'Crie uma lista na Shoplix, partilhe o link e reserve um artigo — grátis e sem anúncios.',
    faqTitle: 'Perguntas frequentes (FAQ)',
    faqs: [
      ['A Shoplix ou a Listonic é melhor para famílias?', 'Para famílias onde várias pessoas vão às compras, a Shoplix adapta-se melhor graças à reserva de artigos, leitura de talões, gastos por membro e ausência de anúncios.'],
      ['A Shoplix é mesmo gratuita sem anúncios?', 'Sim. O plano gratuito não exibe publicidade nem exige registo.'],
      ['Ambas têm entrada por voz?', 'Sim. O ditado da Shoplix separa uma frase como «leite, pão, dois quilos de maçãs» em artigos individuais com quantidades.'],
      ['Posso usar no navegador web?', 'Sim. A aplicação web da Shoplix em app.shoplix.app funciona sem registo.'],
    ],
    relatedHtml: 'Quer ver mais opções? Consulte as <a href="/pt/blog/best-shared-shopping-list-apps/">6 melhores apps de lista de compras partilhada em 2026</a>.',
  },
  ro: {
    title: 'Shoplix vs Listonic (2026): ce aplicație de cumpărături ți se potrivește?',
    description: 'Shoplix vs Listonic comparate onest în 2026: partajare în timp real, rezervare produse, scanare bonuri, statistici buget, voce și reclame.',
    crumb: 'Shoplix vs Listonic',
    eyebrow: 'Față în față · 2026',
    h1: 'Shoplix vs Listonic: <em>ce aplicație</em> se potrivește familiei tale?',
    lead: 'Pe scurt: <strong>Listonic</strong> este un asistent excelent pentru cumpărături individuale — sugestii inteligente, sortare pe raioane și ~40 de limbi. <strong>Shoplix</strong> este lista comună mai bună — rezervarea produselor cu avatar, scanare de bonuri, cheltuieli pe membru, mod Eveniment și plan gratuit fără reclame sau cont.',
    byline: 'De echipa Shoplix', dateLabel: 'Publicat pe 25.08.2026',
    disclosure: '<strong>Transparență:</strong> dezvoltăm Shoplix. Tocmai de aceea arătăm clar unde câștigă Listonic.',
    tblTitle: 'Comparație directă',
    tblRows: [
      ['Preț', 'Bază gratuită fără reclame · opțional Shoplix Premium', 'Gratuit cu reclame · Premium contra cost'],
      ['Înregistrare', 'Nu este necesară, nici pentru partajare', 'Cont obligatoriu pentru partajare'],
      ['Liste în timp real', 'Da', 'Da'],
      ['Rezervare produse', 'Da, cu avatare', 'Nu'],
      ['Statistici cheltuieli', 'După membru, categorie și produs', 'Listă prețuri și total'],
      ['Istoric prețuri', 'Da, pe kg/L/bucată', 'Nu'],
      ['Scaner bonuri și coduri', 'Da — <a href="/ro/blog/receipt-scanning-shopping-list/">verificare bonuri</a> și cod de bare', 'Indisponibil'],
      ['Introducere vocală', 'Da — mai multe produse cu cantități', 'Da, foarte matură'],
      ['Sortare pe raioane', 'Categorisire automată', 'Da, după traseul din magazin'],
      ['Platforme', 'iOS, Android, Web (fără cont)', 'iOS, Android, Web'],
    ],
    listonicTitle: 'Unde câștigă Listonic',
    listonicList: ['<strong>Sugestii inteligente:</strong> Autocompletare rafinată în peste zece ani.', '<strong>Sortare pe raioane:</strong> Aranjează lista după traseul din supermarket.', '<strong>Limbi:</strong> Aproximativ 40 de limbi.'],
    shoplixTitle: 'Unde câștigă Shoplix',
    shoplixList: ['<strong>Rezervarea produselor („Iau eu asta”):</strong> Atinge un produs pentru a afișa avatarul tău și a evita cumpărăturile duble.', '<strong>Scanare bonuri și analiza bugetului:</strong> Fotografiază bonul fiscal și <a href="/ro/">Shoplix</a> actualizează greutățile, prețurile și produsele din afara listei.', '<strong>Modul Eveniment:</strong> Ideal pentru petreceri și grătare cu calculul cheltuielilor per participant.', '<strong>Fără reclame și fără cont obligatoriu:</strong> Partajează lista printr-un simplu link.'],
    premTitle: 'Ce aduce Shoplix Premium',
    premP: 'Planul gratuit Shoplix nu are reclame și include 20 de șabloane, 20 de rețete și 10 scanări de bonuri pe lună. Shoplix Premium crește limita la 150 de bonuri/lună și oferă șabloane și rețete nelimitate.',
    verdict: '<strong>Cumperi singur și vrei sortare pe raioane</strong> → Listonic. <strong>Cumpărați în familie, în cuplu sau în grup</strong> → Shoplix.',
    ctaTitle: 'Vezi diferența pe propria ta listă',
    ctaDesc: 'Creează o listă în Shoplix, trimite linkul unui membru al familiei și rezervă un produs — gratuit și fără reclame.',
    faqTitle: 'Întrebări frecvente (FAQ)',
    faqs: [
      ['Este mai bun Shoplix sau Listonic pentru familii?', 'Pentru familiile în care mai multe persoane fac cumpărături, Shoplix se potrivește mai bine datorită rezervării produselor, scanării bonurilor, cheltuielilor pe membru și lipsei reclamelor.'],
      ['Este Shoplix cu adevărat gratuit fără reclame?', 'Da. Planul gratuit nu afișează reclame și nu cere crearea unui cont.'],
      ['Ambele aplicații au introducere vocală?', 'Da. Dictarea din Shoplix împarte o frază precum „lapte, pâine, două kilograme de mere” în produse separate cu cantități.'],
      ['Pot fi folosite în browserul web?', 'Da. Aplicația web Shoplix pe app.shoplix.app funcționează direct fără înregistrare.'],
    ],
    relatedHtml: 'Vrei să compari mai multe opțiuni? Vezi <a href="/ro/blog/best-shared-shopping-list-apps/">cele mai bune 6 aplicații pentru liste de cumpărături comune în 2026</a>.',
  },
};

const ALL_LISTONIC = { ...POST_LISTONIC_A, ...POST_LISTONIC_B, ...POST_LISTONIC_C, ...POST_LISTONIC_D, ...POST_LISTONIC_E, ...POST_LISTONIC_F };

export function renderListonicPost(lang) {
  const d = ALL_LISTONIC[lang];
  const trs = d.tblRows.map((r) => `<tr><td>${r[0]}</td><td class="yes">${r[1]}</td><td>${r[2]}</td></tr>`).join('');
  const lUl = d.listonicList.map((li) => `<li>${li}</li>`).join('');
  const sUl = d.shoplixList.map((li) => `<li>${li}</li>`).join('');
  const bodyHtml = `<p>${d.disclosure}</p>
      <h2 id="table">${d.tblTitle}</h2>
      <div class="ar-table-wrap"><table class="ar-table"><thead><tr><th></th><th>Shoplix</th><th>Listonic</th></tr></thead><tbody>${trs}</tbody></table></div>
      <h2>${d.listonicTitle}</h2><ul>${lUl}</ul>
      <h2>${d.shoplixTitle}</h2><ul>${sUl}</ul>
      <h2>${d.premTitle}</h2><p>${d.premP}</p>
      <div class="ar-verdict"><p>${d.verdict}</p></div>`;
  return renderArticlePage(lang, 'listonic', { ...d, dateIso: '2026-08-25', bodyHtml });
}

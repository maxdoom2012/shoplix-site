import { renderArticlePage } from './blog-layout.mjs';
import { renderSpendingArticleMockups } from './blog-mockups.mjs';
import { POST_SPENDING_A } from './post-spending-a.mjs';
import { POST_SPENDING_B } from './post-spending-b.mjs';
import { POST_SPENDING_C } from './post-spending-c.mjs';
import { POST_SPENDING_E } from './post-spending-e.mjs';
import { POST_SPENDING_F } from './post-spending-f.mjs';

export const POST_SPENDING_D = {
  pt: {
    title: 'App de lista de compras que controla despesas e preços: Guia 2026',
    description: 'Porque é que os orçamentos falham nas apps bancárias e folhas de Excel — e como uma lista de compras com leitura de talões mostra os gastos por pessoa, categoria e produto.',
    crumb: 'App de lista de compras que controla despesas',
    eyebrow: 'Guia · Orçamento',
    h1: 'Uma app de lista de compras que <em>controla as despesas</em> — saiba para onde vai o dinheiro',
    lead: 'A forma mais simples de controlar quanto gasta no supermercado não é uma folha de Excel — é associar os preços diretamente à lista de compras partilhada ou digitalizar o talão depois de pagar.',
    byline: 'Pela equipa Shoplix', dateLabel: 'Publicado a 26/08/2026',
    disclosure: '<strong>Transparência:</strong> criámos a Shoplix, uma lista de compras partilhada com estatísticas de gastos integradas. Abaixo comparamos todas as opções com honestidade.',
    tocTitle: 'Neste guia',
    toc: ['Porque é que os orçamentos falham', 'A solução: registar no momento da compra', 'O que um bom controlo de gastos precisa', 'As opções comparadas', 'Como funciona na Shoplix', 'Comece em 3 passos', 'FAQ'],
    s1P: 'A maioria das famílias desiste de controlar os gastos de supermercado no primeiro mês por três motivos:',
    s1List: [
      '<strong>As apps bancárias juntam tudo num só valor.</strong> O banco vê apenas um pagamento no supermercado, misturando comida, detergentes e outros artigos.',
      '<strong>As folhas de Excel morrem por esquecimento.</strong> Basta uma noite sem passar o talão para que a tabela fique incompleta.',
      '<strong>Nenhuma responde às perguntas reais.</strong> Que categoria subiu este mês? Quem gastou quanto? Quando é que o leite encareceu?',
    ],
    s2P: 'A lista de compras é a única ferramenta que já usa <em>durante</em> as compras. Ao marcar artigos ou usar a <a href="/pt/blog/receipt-scanning-shopping-list/">digitalização de talões</a> após a caixa, o orçamento monta-se sozinho.',
    s3List: [
      '<strong>Preços registados na compra ou por leitura do talão</strong> — sem trabalho à noite.',
      '<strong>Divisão por categoria</strong> — carne, legumes, laticínios, snacks.',
      '<strong>Divisão por membro</strong> — essencial para famílias, casais e eventos.',
      '<strong>Histórico de preços por produto</strong> — normalizado por kg, litro ou unidade.',
    ],
    tblHead: ['Método', 'Na compra', 'Por categoria', 'Por membro', 'Histórico de preços', 'Esforço'],
    tblRows: [
      ['Shoplix', 'Sim (lista + leitura talão)', 'Sim', 'Sim', 'Sim, por kg/L/un.', 'Segundos'],
      ['AnyList (Complete)', 'Sim, total da lista', 'Não', 'Não', 'Não', 'Baixo'],
      ['Listonic', 'Sim, total da lista', 'Não', 'Não', 'Não', 'Baixo'],
      ['App bancária', 'Após o pagamento', 'Um único bloco', 'Só por cartão', 'Não', 'Zero, mas inútil'],
      ['Folha Excel', 'Introdução à noite', 'Se construir', 'Se construir', 'Se construir', 'Alto'],
    ],
    s5P: 'A <a href="/pt/">Shoplix</a> inclui estatísticas de despesas gratuitamente na versão base:',
    s5List: [
      '<strong>Introduza o preço uma vez — ou digitalize o talão.</strong> A Shoplix memoriza o último preço de cada artigo e com o <a href="/pt/blog/receipt-scanning-shopping-list/">leitor de talões</a> atualiza pesos, preços e compras fora da lista automaticamente.',
      '<strong>As estatísticas calculam-se sozinhas.</strong> Gastos por semana, mês ou ano — por membro, categoria e produto.',
      '<strong>Histórico de preços normalizado.</strong> Toque num produto para ver a evolução do preço por quilo, litro ou unidade.',
      '<strong>Contas imediatas em eventos.</strong> No modo Evento vê logo quanto gastou cada participante.',
    ],
    s6List: [
      '<strong>Crie a sua lista na Shoplix e partilhe-a</strong> por link, sem conta obrigatória.',
      '<strong>Digitalize o talão após pagar</strong> ou confirme os preços ao marcar artigos.',
      '<strong>Abra as Estatísticas no fim do mês</strong> para ver onde pode poupar.',
    ],
    ctaTitle: 'Veja para onde vai realmente o dinheiro das compras',
    ctaDesc: 'Estatísticas gratuitas por membro, categoria e produto — integradas na sua lista partilhada, sem anúncios.',
    faqTitle: 'Perguntas frequentes (FAQ)',
    faqs: [
      ['Qual é a forma mais fácil de controlar os gastos de supermercado?', 'Registar os preços diretamente na lista de compras ou digitalizar o talão na Shoplix logo após pagar.'],
      ['Que app mostra as despesas por membro da família?', 'A Shoplix divide gratuitamente os gastos por membro, por categoria e por produto.'],
      ['A Shoplix guarda os preços automaticamente?', 'Sim: memoriza o último preço de cada artigo e permite digitalizar talões em papel ou digitais para preencher pesos e preços exatos.'],
      ['O controlo de despesas é gratuito na Shoplix?', 'Sim. Todas as estatísticas e o histórico de preços estão incluídos gratuitamente e sem anúncios.'],
    ],
    relatedHtml: 'Quer comparar aplicações? Veja as <a href="/pt/blog/best-shared-shopping-list-apps/">6 melhores apps de lista de compras partilhada em 2026</a> ou <a href="/pt/blog/shoplix-vs-listonic/">Shoplix vs Listonic</a>.',
  },
  ro: {
    title: 'Aplicație de listă de cumpărături care urmărește cheltuielile și prețurile (2026)',
    description: 'De ce eșuează bugetele alimentare în aplicațiile bancare și în Excel — și cum o listă de cumpărături cu scanare de bonuri arată cheltuielile pe persoană, categorie și produs.',
    crumb: 'Listă de cumpărături cu evidența cheltuielilor',
    eyebrow: 'Ghid · Buget',
    h1: 'O aplicație de listă de cumpărături care <em>urmărește cheltuielile</em> — află unde se duc banii',
    lead: 'Cel mai simplu mod de a ține evidența banilor dați pe mâncare nu este un tabel în Excel — ci asocierea prețurilor direct în lista comună de cumpărături sau scanarea bonului după casă.',
    byline: 'De echipa Shoplix', dateLabel: 'Publicat pe 26.08.2026',
    disclosure: '<strong>Transparență:</strong> dezvoltăm Shoplix, o listă de cumpărături comună cu statistici de cheltuieli integrate. Mai jos comparăm onest toate opțiunile.',
    tocTitle: 'În acest ghid',
    toc: ['De ce eșuează bugetele de cumpărături', 'Soluția: înregistrarea la momentul achiziției', 'Ce trebuie să ofere un tracker bun', 'Opțiunile comparate', 'Cum funcționează în Shoplix', 'Începe în 3 pași', 'FAQ'],
    s1P: 'Majoritatea familiilor renunță la evidența cheltuielilor alimentare în prima lună din trei cauze:',
    s1List: [
      '<strong>Aplicațiile bancare pun totul la un loc.</strong> Banca vede o singură tranzacție la supermarket, amestecând mâncarea cu detergenții.',
      '<strong>Tabelele Excel mor prin uitare.</strong> E suficientă o seară în care nimeni nu transcrie bonul pentru ca tabelul să devină incomplet.',
      '<strong>Nicio variantă nu răspunde la întrebările reale.</strong> Ce categorie a crescut luna aceasta? Cine cât a cheltuit? Când s-a scumpit laptele?',
    ],
    s2P: 'Lista de cumpărături este singurul instrument pe care îl folosești deja <em>în timpul</em> cumpărăturilor. Bifând produsele sau folosind <a href="/ro/blog/receipt-scanning-shopping-list/">scanarea bonului</a> după casă, bugetul se construiește singur.',
    s3List: [
      '<strong>Prețuri preluate la cumpărare sau prin scanarea bonului</strong> — fără muncă seara.',
      '<strong>Defalcare pe categorii</strong> — carne, legume, lactate, gustări.',
      '<strong>Defalcare pe membru</strong> — esențial pentru familii, cupluri și evenimente.',
      '<strong>Istoric de prețuri pe produs</strong> — raportat la kg, litru sau bucată.',
    ],
    tblHead: ['Metodă', 'La cumpărare', 'Pe categorie', 'Pe membru', 'Istoric prețuri', 'Efort'],
    tblRows: [
      ['Shoplix', 'Da (listă + scanare bon)', 'Da', 'Da', 'Da, pe kg/L/buc.', 'Secunde'],
      ['AnyList (Complete)', 'Da, total listă', 'Nu', 'Nu', 'Nu', 'Redus'],
      ['Listonic', 'Da, total listă', 'Nu', 'Nu', 'Nu', 'Redus'],
      ['Aplicație bancară', 'Ulterior', 'O singură sumă', 'Doar pe card', 'Nu', 'Zero, dar inutil'],
      ['Tabel Excel', 'Seara manual', 'Dacă îl construiești', 'Dacă îl construiești', 'Dacă îl construiești', 'Mare'],
    ],
    s5P: '<a href="/ro/">Shoplix</a> oferă statisticile de cheltuieli gratuit în versiunea de bază:',
    s5List: [
      '<strong>Introdu prețul o dată — sau scanează direct bonul.</strong> Shoplix reține ultimul preț al fiecărui produs, iar <a href="/ro/blog/receipt-scanning-shopping-list/">scanerul de bonuri</a> actualizează automat greutățile, prețurile și cumpărăturile în afara listei.',
      '<strong>Statisticile se adună singure.</strong> Cheltuieli pe săptămână, lună sau an — după membru, categorie și produs.',
      '<strong>Istoric de prețuri normalizat.</strong> Atinge un produs pentru a vedea evoluția prețului pe kilogram, litru sau bucată.',
      '<strong>Decontare rapidă pentru evenimente.</strong> În modul Eveniment vezi imediat cât a cheltuit fiecare participant.',
    ],
    s6List: [
      '<strong>Creează lista în Shoplix și partajeaz-o</strong> prin link, fără cont obligatoriu.',
      '<strong>Scanează bonul după casă</strong> sau confirmă prețurile la bifare.',
      '<strong>Deschide Statistici la final de lună</strong> pentru a vedea pe ce se duc cei mai mulți bani.',
    ],
    ctaTitle: 'Vezi unde se duc cu adevărat banii pe cumpărături',
    ctaDesc: 'Statistici gratuite după membru, categorie și produs — direct în lista ta comună, fără reclame.',
    faqTitle: 'Întrebări frecvente (FAQ)',
    faqs: [
      ['Care este cel mai simplu mod de a urmări cheltuielile pe alimente?', 'Asocierea prețurilor direct în lista de cumpărături sau scanarea bonului fiscal cu Shoplix imediat după casă.'],
      ['Ce aplicație arată cheltuielile pentru fiecare membru al familiei?', 'Shoplix defalcă gratuit cheltuielile după membru, categorie și produs.'],
      ['Shoplix reține prețurile automat?', 'Da: memorează ultimul preț al fiecărui produs și permite scanarea bonurilor pe hârtie sau digitale pentru a actualiza greutățile și prețurile exacte.'],
      ['Este gratuită urmărirea bugetului în Shoplix?', 'Da. Toate statisticile și istoricul de prețuri sunt incluse gratuit și fără reclame.'],
    ],
    relatedHtml: 'Vrei să compari și alte opțiuni? Vezi <a href="/ro/blog/best-shared-shopping-list-apps/">cele mai bune 6 aplicații pentru liste de cumpărături comune în 2026</a> sau <a href="/ro/blog/shoplix-vs-listonic/">Shoplix vs Listonic</a>.',
  },
};

const ALL_SPENDING = { ...POST_SPENDING_A, ...POST_SPENDING_B, ...POST_SPENDING_C, ...POST_SPENDING_D, ...POST_SPENDING_E, ...POST_SPENDING_F };

export function renderSpendingPost(lang) {
  const d = ALL_SPENDING[lang];
  const tocItems = d.toc.map((t, i) => `<li><a href="#s${i + 1}">${t}</a></li>`).join('');
  const s1Ul = d.s1List.map((li) => `<li>${li}</li>`).join('');
  const s3Ul = d.s3List.map((li) => `<li>${li}</li>`).join('');
  const s5Ul = d.s5List.map((li) => `<li>${li}</li>`).join('');
  const s6Ol = d.s6List.map((li) => `<li>${li}</li>`).join('');
  const ths = d.tblHead.map((h) => `<th>${h}</th>`).join('');
  const trs = d.tblRows.map((r, idx) => `<tr${idx === 0 ? ' class="hl"' : ''}><td>${r[0]}</td><td class="${idx < 3 ? 'yes' : 'no'}">${r[1]}</td><td class="${idx === 0 || idx === 4 ? 'yes' : 'no'}">${r[2]}</td><td class="${idx === 0 || idx === 4 ? 'yes' : 'no'}">${r[3]}</td><td class="${idx === 0 || idx === 4 ? 'yes' : 'no'}">${r[4]}</td><td>${r[5]}</td></tr>`).join('');
  const bodyHtml = `<p>${d.disclosure}</p>
      <div class="ar-toc"><p class="ar-toc-title">${d.tocTitle}</p><ol>${tocItems}</ol></div>
      <h2 id="s1">${d.toc[0]}</h2><p>${d.s1P}</p><ul>${s1Ul}</ul>
      <h2 id="s2">${d.toc[1]}</h2><p>${d.s2P}</p>
      <h2 id="s3">${d.toc[2]}</h2><ul>${s3Ul}</ul>
      <h2 id="s4">${d.toc[3]}</h2><div class="ar-table-wrap"><table class="ar-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>
      <h2 id="s5">${d.toc[4]}</h2><p>${d.s5P}</p><ul>${s5Ul}</ul>
      ${renderSpendingArticleMockups(lang)}
      <h2 id="s6">${d.toc[5]}</h2><ol>${s6Ol}</ol>`;
  return renderArticlePage(lang, 'spending', { ...d, dateIso: '2026-08-26', needsMockupCss: true, bodyHtml });
}

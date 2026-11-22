import { renderArticlePage } from './blog-layout.mjs';
import { renderReceiptArticleMockups } from './blog-mockups.mjs';
import { POST_RECEIPT_A } from './post-receipt-a.mjs';
import { POST_RECEIPT_B } from './post-receipt-b.mjs';
import { POST_RECEIPT_C } from './post-receipt-c.mjs';
import { POST_RECEIPT_E } from './post-receipt-e.mjs';
import { POST_RECEIPT_F } from './post-receipt-f.mjs';

export const POST_RECEIPT_D = {
  pt: {
    title: 'Digitalização de talões na Shoplix: preços e pesos automáticos na lista',
    description: 'Como a digitalização de talões em papel e digitais na Shoplix evita digitar quantidades, pesos e preços no corredor do supermercado.',
    crumb: 'Digitalização de talões na Shoplix',
    eyebrow: 'Funcionalidade em detalhe · Rapidez e Orçamento',
    h1: 'Digitalização de talões na Shoplix: deixe de digitar <em>preços e pesos</em> na loja',
    lead: 'Já não precisa de adivinhar pesos em casa nem de escrever gramas e preços no supermercado com o cesto na mão. Adicione artigos à lista apenas pelo nome, faça compras à vontade e, depois da caixa, fotografe o talão em papel — ou faça uma captura de ecrã do talão digital. A Shoplix confere preços reais, quantidades exatas e pesos automaticamente.',
    byline: 'Pela equipa Shoplix', dateLabel: 'Publicado a 04/11/2026',
    tocTitle: 'Neste guia',
    toc: ['Porque é que digitar pesos e preços no corredor atrasa as compras', 'O fluxo mais rápido: compras com mãos livres, digitalizar após pagar', 'Como funciona a conferência inteligente em 3 secções', 'Nomes limpos no catálogo e indicador «O total coincide»', 'Introdução manual vs. apps de talões separadas vs. Shoplix', 'Digitalize o seu primeiro talão em 4 passos', 'Perguntas frequentes (FAQ)'],
    s1P: 'Criámos as <a href="/pt/blog/grocery-list-app-that-tracks-spending/">estatísticas de gastos na Shoplix</a> para que as famílias vejam para onde vai o orçamento sem folhas de Excel. Numa ida rápida à mercearia, o preenchimento automático do último preço chega. Mas nas compras semanais grandes, digitar preços na loja esbarra em três problemas:',
    s1List: [
      '<strong>Não sabe o peso exato de antemão.</strong> Em casa escreve «Maçãs», «Frango» ou «Queijo». Só na balança sabe se a embalagem pesa <code>0,68 kg</code> ou <code>1,34 kg</code>.',
      '<strong>Escrever no corredor dá trabalho.</strong> Parar em cada prateleira para abrir o artigo e digitar gramas e preços atrasa toda a volta.',
      '<strong>As compras por impulso ficam de fora.</strong> Se levar chocolate ou café fora da lista, ninguém o vai digitar só para acertar as contas.',
    ],
    s1End: 'Foi por isso que adicionámos a <strong>digitalização e conferência inteligente de talões</strong> à <a href="/pt/">Shoplix</a>: uma foto ou captura após a caixa transforma-se em dados completos por artigo.',
    s2P: 'Com a leitura de talões, planear e comprar continua simples:',
    s2List: [
      '<strong>Em casa — sem quantidades prévias.</strong> Adicione artigos só pelo nome (teclado ou voz). A Shoplix mostra o último preço conhecido como referência sem copiar o peso antigo.',
      '<strong>Na loja — marque com um toque.</strong> Toque no ícone do carrinho ao colocar o artigo no cesto. Com pressa? O talão marcará os artigos restantes automaticamente.',
      '<strong>Depois da caixa — foto em papel ou captura digital.</strong> Abra o menu da lista (<strong>⋮ → Digitalizar talão</strong>) ou o <strong>Histórico → ícone de talão</strong> e adicione 1 a 5 imagens: fotografe talões longos em 2–5 partes sobrepostas (unidas sem duplicados) ou carregue capturas de ecrã da app do supermercado ou banco.',
    ],
    s3P1: 'Ao contrário dos leitores de talões isolados, a Shoplix cruza o talão diretamente com a sua lista ativa e o histórico desse dia. Se a caixa registou duas unidades iguais em linhas separadas, a Shoplix agrupa-as automaticamente com a quantidade e o preço total.',
    s3P2: 'Antes de guardar, o ecrã <strong>Conferência do talão</strong> organiza tudo em três secções claras:',
    s3List: [
      '<strong>Atualizar preços no Histórico:</strong> Os artigos já marcados hoje na loja recebem o peso, quantidade e preço exatos (ex.: <code><s>1 kg</s> → 1,34 kg • <s>2,50 €</s> → 3,35 €</code>).',
      '<strong>Marcar como comprado da lista:</strong> Os artigos ainda abertos na lista que constam no talão são marcados como comprados com preço e quantidade.',
      '<strong>Adicionar ao Histórico (fora da lista):</strong> Compras extra do talão entram diretamente no Histórico na categoria certa.',
    ],
    s4P: 'O maior defeito das apps tradicionais de talões são as abreviaturas fiscais (como <code>LEITE M. GORDO 1L</code>), que criam produtos duplicados. A Shoplix resolve isto com o seu catálogo:',
    s4List: [
      '<strong>Associação automática ao catálogo limpo:</strong> As abreviaturas ligam-se ao nome claro da sua lista («Leite»).',
      '<strong>Troca de nome num toque:</strong> Toque numa linha para alternar entre <strong>«Catálogo / lista»</strong> e <strong>«Nome no talão»</strong>.',
      '<strong>Reassociar, unir ou dividir:</strong> Pode ligar a linha a outro produto, unir duas linhas ou dividir uma linha agrupada.',
      '<strong>Indicador «O total coincide»:</strong> No topo, o selo verde <strong>«✓ O total coincide»</strong> confirma que a soma selecionada bate certo com o talão.',
    ],
    tblHead: ['Capacidade', 'Digitar na loja', 'Apps de talões isoladas', 'Conferência de talão Shoplix'],
    tblRows: [
      ['Tempo gasto no corredor', 'Digitar pesos e preços na prateleira', 'Zero tempo na loja', 'Zero tempo — basta marcar a lista'],
      ['Ligado à lista de compras', 'Sim', 'Não — app separada', 'Sim — atualiza Histórico, fecha a lista e regista extras'],
      ['Nomes limpos nas estatísticas', 'Nomes limpos', 'Códigos do talão criam duplicados', 'Associa ao catálogo ou ao nome do talão'],
      ['Pesos e quantidades exatos', 'Fácil falhar os gramas exatos', 'Exato do talão', 'Exato do talão + histórico por kg/L/un.'],
      ['Talões em papel e digitais', '—', 'Varia consoante a app', '1–5 fotos (união automática) ou capturas de ecrã'],
    ],
    s6List: ['<strong>Planeie a lista só pelo nome:</strong> Adicione o que precisa sem pensar em pesos ou preços.', '<strong>Faça compras normalmente:</strong> Marque os produtos com um toque.', '<strong>Abra «Digitalizar talão»:</strong> Toque no menu <strong>⋮</strong> da lista → <strong>«Digitalizar talão»</strong>.', '<strong>Adicione fotos ou capturas e toque em «Aplicar»:</strong> As estatísticas e o histórico de preços ficam logo atualizados.'],
    ctaTitle: 'Experimente digitalizar o talão nas próximas compras',
    ctaDesc: '10 digitalizações por mês incluídas gratuitamente para todos (e até 150/mês com Shoplix Premium) — sem anúncios e sem registo.',
    faqTitle: '7. Perguntas frequentes (FAQ)',
    faqs: [
      ['Posso digitalizar talões digitais de apps de supermercado ou banco?', 'Sim. Faça 1 a 5 capturas de ecrã do talão digital e escolha-as na galeria: a Shoplix extrai artigos, pesos, quantidades e o total tal como num talão em papel.'],
      ['Como digitalizo um talão de papel muito longo?', 'Fotografe o talão em 2 a 5 secções ligeiramente sobrepostas. A Shoplix une as partes automaticamente sem duplicar linhas.'],
      ['Preciso de indicar quantidades ou preços antes de comprar?', 'Não. Basta escrever o nome dos produtos; a leitura do talão preenche o peso, a quantidade e o preço real depois da caixa.'],
      ['As abreviaturas do talão vão estragar as minhas estatísticas?', 'Não. A Shoplix liga as abreviaturas aos nomes limpos do seu catálogo para manter as estatísticas e o histórico de preços organizados.'],
      ['Quantas digitalizações estão incluídas no plano gratuito?', 'O plano gratuito inclui 10 digitalizações por mês e o Shoplix Premium inclui até 150 por mês. O contador reinicia no dia 1 de cada mês.'],
    ],
    relatedHtml: 'Quer saber mais sobre controlo de gastos? Leia o nosso guia da <a href="/pt/blog/grocery-list-app-that-tracks-spending/">app de lista de compras que controla as despesas</a> ou compare as <a href="/pt/blog/best-shared-shopping-list-apps/">6 melhores apps de lista de compras partilhada em 2026</a>.',
  },
  ro: {
    title: 'Scanarea bonurilor în Shoplix: prețuri și greutăți completate automat',
    description: 'Cum scanarea bonurilor pe hârtie și digitale în Shoplix elimină tastarea cantităților, greutăților și prețurilor printre rafturile magazinului.',
    crumb: 'Scanarea bonurilor în Shoplix',
    eyebrow: 'Funcție nouă · Viteză și Buget',
    h1: 'Scanarea bonurilor în Shoplix: nu mai tasta <em>prețurile și greutatea</em> în magazin',
    lead: 'Nu mai trebuie să ghicești greutățile acasă sau să tastezi gramele și prețurile la raft cu coșul în mână. Adaugă produsele pe listă doar după nume, cumpără liniștit, iar după casă fotografiază bonul pe hârtie — sau fă o captură de ecran a bonului digital. Shoplix verifică automat prețurile reale, cantitățile exacte și greutățile.',
    byline: 'De echipa Shoplix', dateLabel: 'Publicat pe 04.11.2026',
    tocTitle: 'În acest ghid',
    toc: ['De ce tastarea greutății și a prețurilor la raft te încetinește', 'Fluxul mai rapid: cumpărături fără bătăi de cap, scanare după casă', 'Cum funcționează verificarea inteligentă în 3 secțiuni', 'Nume curate în catalog și indicatorul „Totalul corespunde”', 'Introducere manuală vs. aplicații separate de bonuri vs. Shoplix', 'Scanează primul tău bon în 4 pași', 'Întrebări frecvente (FAQ)'],
    s1P: 'Am construit <a href="/ro/blog/grocery-list-app-that-tracks-spending/">statisticile de cheltuieli în Shoplix</a> pentru ca familiile să vadă unde se duc banii pe mâncare fără tabele Excel. Pentru trei produse de la magazinul din colț, precompletarea ultimului preț e suficientă. Dar la cumpărăturile mari săptămânale, tastarea manuală în magazin se lovește de trei obstacole:',
    s1List: [
      '<strong>Nu poți ști greutatea exactă dinainte.</strong> Acasă treci pe listă „Mere”, „Piept de pui” sau „Cașcaval”. Nu știi dacă punga va cântări <code>0,68 kg</code> sau <code>1,34 kg</code> până nu ajunge pe cântar.',
      '<strong>Tastatul printre rafturi îți ia timp.</strong> Să te oprești la fiecare raion ca să deschizi produsul și să tastezi gramele și prețul încetinește toate cumpărăturile.',
      '<strong>Cumpărăturile spontane rămân neînregistrate.</strong> Dacă iei o ciocolată sau o cafea care nu era pe listă, nimeni nu stă să o adauge manual doar pentru statistici.',
    ],
    s1End: 'De aceea am adăugat <strong>scanarea și verificarea inteligentă a bonurilor</strong> în <a href="/ro/">Shoplix</a>: o poză sau o captură de ecran după casă oferă date complete pentru fiecare produs.',
    s2P: 'Cu scanarea bonului, planificarea și cumpărăturile rămân rapide:',
    s2List: [
      '<strong>Acasă — fără cantități.</strong> Adaugă produsele doar după nume (tastat sau vocal). Shoplix afișează ultimul preț cunoscut ca reper, fără să copieze greutatea de săptămâna trecută.',
      '<strong>În magazin — bifare dintr-o atingere.</strong> Atinge doar pictograma coșului când pui produsul în cărucior. Ești pe fugă? Bonul va bifa automat și produsele rămase.',
      '<strong>După casă — poză pe hârtie sau captură digitală.</strong> Deschide meniul listei (<strong>⋮ → Scanează bonul</strong>) sau <strong>Istoric → pictograma bon</strong> și adaugă 1–5 imagini: fotografiază un bon lung în 2–5 părți suprapuse (lipite automat fără dubluri) sau încarcă capturi din aplicația supermarketului ori a băncii.',
    ],
    s3P1: 'Spre deosebire de aplicațiile OCR separate, Shoplix compară bonul direct cu lista ta activă și cu istoricul zilei respective. Dacă la casă au fost scanate două bucăți identice pe rânduri separate, Shoplix le combină automat cu cantitatea și prețul total.',
    s3P2: 'Înainte de salvare, ecranul <strong>Verificare bon</strong> împarte produsele în trei secțiuni clare:',
    s3List: [
      '<strong>Actualizează prețurile în Istoric:</strong> Produsele bifate deja azi în magazin primesc greutatea, cantitatea și prețul exact de pe bon (ex. <code><s>1 kg</s> → 1,34 kg • <s>10,50 lei</s> → 14,10 lei</code>).',
      '<strong>Marchează drept cumpărat din listă:</strong> Produsele rămase pe listă care apar pe bon sunt bifate automat drept cumpărate cu prețul exact.',
      '<strong>Adaugă în Istoric (în afara listei):</strong> Cumpărăturile neplanificate de pe bon intră direct în Istoric în categoria potrivită.',
    ],
    s4P: 'Cea mai mare problemă a scanerelor clasice sunt prescurtările fiscale (precum <code>LAPTE PROASPAT 3,5% 1L</code>), care creează produse duplicate. Shoplix rezolvă asta prin catalogul tău:',
    s4List: [
      '<strong>Asociere automată cu numele curate din catalog:</strong> Rândurile prescurtate se leagă de numele clar din lista ta („Lapte”).',
      '<strong>Schimbarea numelui dintr-o atingere:</strong> Atinge orice rând pentru a comuta între <strong>„Catalog / listă”</strong> și <strong>„Nume de pe bon”</strong>.',
      '<strong>Reasociere, unire sau împărțire:</strong> Poți lega rândul de alt produs, uni două rânduri sau împărți o poziție grupată.',
      '<strong>Indicatorul „Totalul corespunde”:</strong> Sus, insigna verde <strong>„✓ Totalul corespunde”</strong> confirmă că suma selectată este identică cu totalul bonului.',
    ],
    tblHead: ['Capabilitate', 'Tastare manuală în magazin', 'Aplicații separate de bonuri', 'Verificare bon în Shoplix'],
    tblRows: [
      ['Timp pierdut la raft', 'Tastarea greutății și a prețului la raft', 'Zero timp în magazin', 'Zero timp — doar bifezi lista'],
      ['Conectat la lista de cumpărături', 'Da', 'Nu — aplicație separată', 'Da — actualizează Istoricul, bifează lista și adaugă extra'],
      ['Nume curate în statistici', 'Nume curate', 'Codurile de pe bon creează dubluri', 'Leagă de numele din catalog sau de pe bon'],
      ['Greutăți și cantități exacte', 'Ușor să omiți gramele exacte', 'Exact de pe bon', 'Exact de pe bon + istoric preț pe kg/L/buc.'],
      ['Bonuri pe hârtie și digitale', '—', 'Depinde de aplicație', '1–5 poze (lipire automată) sau capturi de ecran'],
    ],
    s6List: ['<strong>Planifică lista doar după nume:</strong> Adaugă ce ai nevoie fără să introduci greutatea sau prețul.', '<strong>Cumpără normal:</strong> Bifează produsele dintr-o atingere.', '<strong>Deschide „Scanează bonul”:</strong> Atinge meniul <strong>⋮</strong> din listă → <strong>„Scanează bonul”</strong>.', '<strong>Adaugă poze sau capturi și apasă „Aplică”:</strong> Statisticile și istoricul de prețuri se actualizează imediat.'],
    ctaTitle: 'Încearcă scanarea bonurilor la următoarele cumpărături',
    ctaDesc: '10 scanări de bonuri pe lună sunt incluse gratuit pentru toți utilizatorii (și până la 150/lună cu Shoplix Premium) — fără reclame și fără cont obligatoriu.',
    faqTitle: '7. Întrebări frecvente (FAQ)',
    faqs: [
      ['Pot scana bonuri digitale din aplicațiile supermarketurilor sau ale băncilor?', 'Da. Fă 1–5 capturi de ecran ale bonului digital și alege-le din galerie: Shoplix extrage produsele, greutățile, cantitățile și totalul exact ca de pe un bon pe hârtie.'],
      ['Cum scanez un bon pe hârtie foarte lung?', 'Fotografiază bonul în 2 până la 5 secțiuni ușor suprapuse. Shoplix lipește automat părțile și elimină rândurile dublate.'],
      ['Trebuie să introduc cantitățile sau prețurile înainte de cumpărături?', 'Nu. Adaugă doar numele produselor pe listă, iar după scanarea bonului Shoplix completează greutatea, cantitatea și prețul real.'],
      ['Prescurtările de pe bon îmi vor strica statisticile?', 'Nu. Shoplix leagă prescurtările de pe bon de numele curate din catalogul tău, păstrând statisticile și istoricul prețurilor ordonate.'],
      ['Câte scanări sunt incluse în planul gratuit?', 'Planul gratuit include 10 scanări pe lună, iar Shoplix Premium include până la 150 de scanări pe lună. Contorul se resetează pe data de 1 a fiecărei luni.'],
    ],
    relatedHtml: 'Vrei să vezi cum se transformă prețurile în rapoarte clare? Citește ghidul despre <a href="/ro/blog/grocery-list-app-that-tracks-spending/">aplicația de listă de cumpărături care urmărește cheltuielile</a> sau compară <a href="/ro/blog/best-shared-shopping-list-apps/">cele mai bune 6 aplicații pentru liste de cumpărături comune în 2026</a>.',
  },
};

const ALL_RECEIPT = { ...POST_RECEIPT_A, ...POST_RECEIPT_B, ...POST_RECEIPT_C, ...POST_RECEIPT_D, ...POST_RECEIPT_E, ...POST_RECEIPT_F };

export function renderReceiptPost(lang) {
  const d = ALL_RECEIPT[lang];
  const tocItems = d.toc.map((t, i) => `<li><a href="#s${i + 1}">${t}</a></li>`).join('');
  const s1Ul = d.s1List.map((li) => `<li>${li}</li>`).join('');
  const s2Ul = d.s2List.map((li) => `<li>${li}</li>`).join('');
  const s3Ol = d.s3List.map((li) => `<li>${li}</li>`).join('');
  const s4Ul = d.s4List.map((li) => `<li>${li}</li>`).join('');
  const s6Ol = d.s6List.map((li) => `<li>${li}</li>`).join('');
  const ths = d.tblHead.map((h) => `<th>${h}</th>`).join('');
  const trs = d.tblRows.map((r, idx) => `<tr${idx === 0 ? ' class="hl"' : ''}><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="yes">${r[3]}</td></tr>`).join('');
  const bodyHtml = `<div class="ar-toc"><p class="ar-toc-title">${d.tocTitle}</p><ol>${tocItems}</ol></div>
      <h2 id="s1">1. ${d.toc[0]}</h2><p>${d.s1P}</p><ul>${s1Ul}</ul><p>${d.s1End}</p>
      <h2 id="s2">2. ${d.toc[1]}</h2><p>${d.s2P}</p><ul>${s2Ul}</ul>
      <h2 id="s3">3. ${d.toc[2]}</h2><p>${d.s3P1}</p><p>${d.s3P2}</p><ol>${s3Ol}</ol>
      ${renderReceiptArticleMockups(lang)}
      <h2 id="s4">4. ${d.toc[3]}</h2><p>${d.s4P}</p><ul>${s4Ul}</ul>
      <h2 id="s5">5. ${d.toc[4]}</h2><div class="ar-table-wrap"><table class="ar-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>
      <h2 id="s6">6. ${d.toc[5]}</h2><ol>${s6Ol}</ol>`;
  return renderArticlePage(lang, 'receipt', { ...d, dateIso: '2026-11-04', needsMockupCss: true, bodyHtml });
}

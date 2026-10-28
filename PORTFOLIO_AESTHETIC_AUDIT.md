# Auditoria estética — Any2Any e portfólio

**Data:** 28 de outubro de 2026

**Escopo:** análise visual, tipográfica, semântica e de movimento; sem alterações de interface.

**Tempo de investigação:** mais de 10 minutos entre inspeção ao vivo, revisão do código e síntese.

**Referência:** o site e repositório Any2Any enviados na conversa.
**Estado do portfólio:** home local em desenvolvimento, densidade *Meio-termo*, movimento *Entradas escalonadas*.

## Síntese

O Any2Any parece mais limpo porque faz o visitante resolver uma tarefa principal. O portfólio apresenta várias coisas verdadeiras ao mesmo tempo: identidade, foco técnico, stack, retrato, projetos, competências, trajetória e contato. O primeiro é um fluxo de produto com um próximo passo dominante; o segundo é uma narrativa profissional com vários tipos de prova. A diferença não é simplesmente de gosto por branco, azul, fonte ou animação.

O Any2Any organiza o campo visual em torno de um título, uma explicação curta e uma área de ação. As informações sobre formatos ficam abaixo, agrupadas em uma seção secundária. O portfólio tem boa estrutura semântica e alinhamento, mas repete uma gramática de catálogo — título de seção grande, frase introdutória, linhas separadas por bordas, rótulo, título, parágrafo e links — em várias partes da home. Isso dá consistência; a repetição faz cada seção pedir atenção com quase a mesma intensidade.

Minha hipótese principal: a sensação de “não respirar” vem mais de **quantas categorias de informação competem por atenção em cada tela** e da hierarquia entre elas do que de uma falta geral de padding. A home já usa intervalos grandes entre algumas seções; aumentar todos eles pode alongar a página sem simplificar o que o olho precisa ler. Espaço vertical segue importante, mas deve separar prioridades, não apenas aumentar a distância entre blocos igualmente densos.

A fonte é realmente IBM Plex Sans nos dois projetos. O que muda sua aparência é a escala e a distribuição dos pesos. No Any2Any há um único título de 40 px e os títulos funcionais ficam em 16–24 px. No portfólio, o nome chega a 50 px e os títulos das seções ficam em até 46 px; os títulos dos itens chegam a 34 px. Assim, há vários focos tipográficos fortes ao longo da página. O rosto, por sua luminosidade e tamanho, também disputa o primeiro foco com o nome.

## Como a análise foi feita

- Comparei o site do Any2Any em tema escuro e claro, no mesmo navegador e dimensão aproximada de desktop (cerca de 1.260 × 708 px). O tema claro foi inspecionado e depois o tema escuro foi restaurado.
- Li o CSS de tokens, layout e temas e o componente raiz do Any2Any no repositório. Isso permite diferenciar uma impressão visual da decisão de implementação que a produz.
- Inspecionei a home local do portfólio, o estado atual do painel de comparação, algumas seções após rolagem e a página de projetos como contexto. Usei captura de tela e árvore de acessibilidade para conferir a hierarquia exibida.
- Consultei as skills de antislop/UI, acessibilidade humana, layout responsivo, direção visual, auditoria de design system, acabamento de interface e movimento. O filtro DURING foi escolhido para esta sessão. Não apliquei skills de backend, bancos de dados ou CI: não ajudariam a responder à pergunta estética.
- Calculei contraste a partir das cores sólidas declaradas nos tokens, sem considerar anti-aliasing, opacidade durante transições, pixels da fotografia ou condições físicas de tela.

**Limites:** consegui observar uma dimensão desktop; não fiz captura renderizada em celular, teste com leitor de tela ou alternância dinâmica de prefers-reduced-motion. A revisão responsiva abaixo é baseada nos breakpoints do CSS, não em inspeção visual num aparelho. O site local mostrava controles exclusivos de desenvolvimento e o botão do Next DevTools, que não pertencem à composição publicada.

## O que o Any2Any faz visualmente

### A mesma estrutura nos dois temas

O layout permanece praticamente idêntico no claro e no escuro. Isso ajuda a perceber que a sensação de limpeza sobrevive à troca de tema porque a hierarquia, o espaço e o fluxo são estáveis.

1. Uma marca pequena no topo, com uma linha curta de contexto e um controle de tema.
2. Um título de página (“conversor de arquivos”) e uma descrição direta.
3. Um rótulo funcional, uma zona de envio ampla e uma ação principal.
4. Uma frase curta de privacidade, separada do controle.
5. Uma seção secundária de formatos, apresentada como lista/definições.

O visitante não precisa escolher entre quatro ações do mesmo peso. A chamada principal é “selecionar arquivos”; a tabela de formatos ajuda a decidir se o produto serve. A zona de envio funciona como um grande grupo semântico e visual. Bordas e fundo delimitam uma tarefa; não há uma borda em volta de cada informação.

### Por que o tema claro funciona

O claro usa #f4f3ef no fundo, não branco puro; texto #24262b; texto secundário #58616d; superfície #ecebe6; e azul #315a9d para a ação. A diferença entre fundo e superfície é discreta, mas dá estrutura sem fazer a tela parecer um painel de cartões. O azul é pontual: destaca a ação e estados interativos, não colore blocos decorativos.

O branco quente reduz a dureza do contraste de uma página branca pura e deixa os elementos escuros assentarem sobre uma base contínua. O azul profundo do botão ganha destaque por escassez e posição; não porque tudo o mais esteja saturado. É uma hipótese visual apoiada nas cores e na composição observadas, não uma afirmação de que qualquer usuário sempre prefira o tema claro.

### Por que o tema escuro também funciona

O fundo escuro do Any2Any é #15171b, e a área de controle usa #1b1f25. Isso é carvão levemente azulado, não preto absoluto. O texto principal é #e5e7eb, o secundário #a1a7b1, e o botão azul claro é a ação dominante. Fundo, superfície e texto mantêm separação tonal.

O fundo do portfólio, #0b0b0d, é consideravelmente mais próximo do preto. A diferença não torna o portfólio automaticamente ruim; ela muda o clima. A interface fica mais incisiva e dramática, mas também mais plana nas áreas sem cartões e divisórias. O Any2Any escuro parece mais macio porque parte de um carvão azul e oferece mais níveis tonais perceptíveis.

### Tipografia: por que a IBM parece outra fonte

Os dois sites carregam IBM Plex Sans. O Any2Any declara os pesos 400, 500 e 600 e usa um título de 40 px / 500, line-height 1.2 e tracking de −0,02 em. A área de conversão usa título de 16 px; formatos, 24 px; texto de apoio, 14–16 px. O texto tem tarefas tipográficas distintas e uma distância clara entre a manchete e os elementos funcionais.

Na home do portfólio, o nome é 50 px / 500; os títulos de seção podem chegar a 46 px; os títulos de competência e trajetória ficam entre 32 e 34 px; corpo em 15 px. O tracking negativo se repete em vários títulos. Em consequência, a fonte ocupa mais área e os títulos secundários conservam muita autoridade. O olho interpreta a mesma família como mais pesada e editorialmente enfática.

Isso explica parte da percepção descrita pelo usuário: trocar o nome da fonte não resolve se os tamanhos, pesos, tracking, largura da coluna e proporção de títulos continuarem iguais. A IBM não é inerentemente “cara de IA”; ela está muito disseminada, mas a sensação vem da composição concreta. O Any2Any usa a família com hierarquia curta e discreta; o portfólio usa uma escala expressiva e repetida.

## O que observei no portfólio

### A primeira tela

O cabeçalho oferece início, projetos, currículo e idioma. O hero mostra o nome, duas linhas de posicionamento (fullstack dev com foco em backend e engenharia de software @FIAP), um link para tecnologias e uma fotografia grande. Abaixo, há quatro destinos: projetos, contato, GitHub e LinkedIn.

Cada parte é justificável. Juntas, apresentam muitos tipos de informação e de saída antes de o visitante ver uma prova de trabalho. O retrato tem uma região clara grande e alto contraste, portanto tende a capturar o olhar antes do texto. Isso pode ser desejável para personalizar o portfólio; é uma escolha de foco, não uma falha. A pergunta a decidir depois é se a fotografia deve ser protagonista junto com o nome ou dar suporte à proposta técnica.

O Any2Any também contém marca, status, título, explicação, rótulo, limites, privacidade e controle. A diferença é que todos convergem para uma ação. No portfólio, os links conduzem a lugares diferentes e as linhas de posicionamento expressam mais de uma dimensão profissional. Não existe ainda um equivalente visual a “esta é a próxima coisa que quero que você veja”.

### O ritmo da home

A home tem hero, projetos selecionados, competências, trajetória e contato. Dentro das seções, a estrutura editorial em duas colunas organiza os itens: título/rótulo à esquerda e descrição/links à direita. As linhas horizontais ajudam a localizar as linhas e evitam caixas em volta de tudo. Essa parte é sólida.

O custo da consistência é a repetição do mesmo padrão de listagem. Projetos têm categoria, nome, descrição e link(s). Competências têm título, texto e badges de tecnologia. Trajetória tem rótulo, título e parágrafo. O visitante percebe itens e separadores sucessivos, mesmo quando os conteúdos têm funções diferentes: provas de trabalho, escopo técnico e narrativa biográfica.

O problema não é “há muitas linhas de texto” em abstrato. É que cada seção pede uma pequena leitura completa antes de oferecer uma síntese visual. O primeiro olhar encontra títulos grandes e divisórias, depois precisa percorrer parágrafos para descobrir a diferença entre os itens. As tecnologias, quando mostradas como badges, adicionam pontos de parada visual. Um portfólio de back-end não precisa de imagens de produto para ser legível, mas precisa priorizar que evidências técnicas entram na home e quais vivem na página de detalhes.

### O padding já presente

Os valores atuais não sugerem pouco espaço vertical em toda a página: competências e trajetória começam com aproximadamente 144–168 px de padding superior no desktop; as linhas de competências têm 48 px de padding; as linhas de trajetória têm 56 px acima e 64 px abaixo; o bloco de projetos usa 48 px em cada linha. Há respiro físico relevante entre blocos.

Por isso, aumentar indiscriminadamente o padding pode produzir uma página mais longa sem sensação maior de clareza. A hipótese mais forte é usar o espaço para separar **níveis**: foco principal, prova, metadados e contexto. Se todos os elementos continuarem visíveis e igualmente enfatizados, mais distância só espalha uma lista que continua pedindo a mesma quantidade de atenção. Seu incômodo com o respiro pode estar certo; a investigação sugere que o ajuste deve ser localizado junto de uma decisão de densidade.

### Cor e superfície

Tokens atuais: fundo #0b0b0d, superfície #151517, superfície elevada #1b1b1f, superfície inset #101013, texto principal #f4f4f5, secundário #b4b4be, muted #95959e e vermelho #ff4d5a.

As cores do texto têm contraste matemático alto contra o fundo; não há evidência de que “falta contraste” seja a causa central. O tema escuro, porém, concentra a maior parte da home em um campo quase preto. As superfícies alternativas aparecem em elementos específicos, não formando grandes zonas de leitura. Comparado com os dois temas do Any2Any, há menos contraste de luminosidade entre plano de página e superfícies suaves e uma tonalidade geral mais austera.

O vermelho aparece com moderação na home — por exemplo, na linha do item de navegação ativo e em sublinhados — e ganha força nos papéis e diagramas da página de projetos. Então trocar o vermelho pelo azul do Any2Any provavelmente mudaria pouco a sensação central e apagaria um traço identitário que você já disse que combina. A lição útil é restringir o acento a pontos de significado e investigar a temperatura e a distância tonal entre o fundo e os planos de conteúdo.

### Movimento

O modo escalonado que está ativo no painel é uma prévia de desenvolvimento. Pelo código, a entrada usa opacity e translateY(20px) scale(.99), duração de 700 ms e atrasos de até 280 ms. Os itens são revelados uma vez quando entram na área observada. O modo mais sutil usa deslocamento menor e 480 ms. O hero e as linhas de projetos, competências e trajetória, além de contato e rodapé, compartilham a classe de movimento.

Isso dá acabamento e estabelece uma sequência de leitura, mas aplicado a muitos blocos iguais transforma a rolagem em uma apresentação contínua. Enquanto a transição acontece, texto ainda incompleto em opacidade reduzida pode parecer apagado ou mais difícil de ler; a captura feita durante a entrada mostrou esse estado transitório. Depois da entrada, o texto voltou ao contraste normal. A sensação “clean” costuma vir de conteúdo estável que se deixa ler; a animação pode guiar o foco, mas não substitui hierarquia nem simplifica informação.

Há duas ressalvas importantes. Primeiro, o acionamento das entradas por IntersectionObserver está condicionado ao ambiente de desenvolvimento; não se deve presumir que a prévia animada seja a experiência de produção. Segundo, o CSS inclui prefers-reduced-motion e suprime transformações, transições e rolagem suave. Isso é uma boa base, embora eu não tenha alternado a configuração do sistema neste exame. A recomendação técnica, para uma futura decisão, é manter entradas curtas, pequenas e seletivas, reservadas a uma função perceptível; não fazer cada linha repetir o mesmo efeito.

### Semântica e acessibilidade

A estrutura não parece sofrer de falta de semântica. A home usa main, seções com aria-labelledby, hierarquia de h1/h2/h3, links nomeados, alternativa textual para a fotografia e rótulos/legendas para os diagramas. A página de projetos tem navegação nomeada e diagramas figure com texto explicativo. A árvore de acessibilidade mostrou a navegação, o título e as seções como conteúdo separado. O Any2Any também organiza o fluxo com header, main, seções nomeadas, lista de definições para formatos e estados de formulário como status e alert.

Portanto, uma auditoria visual não deve recomendar remover informação necessária à acessibilidade nem esconder conteúdo para parecer minimalista. Oportunidade: reduzir a quantidade de microdecisões visuais na home e continuar levando detalhes, repositórios e fatos completos para as páginas apropriadas.

## Uma diferença de intenção, não uma competição

O Any2Any é uma ferramenta: sua página inicial promete uma tarefa e permite executá-la. O portfólio é um documento de apresentação: seu objetivo é estabelecer identidade, provar capacidade e dar caminhos para aprofundar contato. Copiar a zona de upload, a aparência de formulário ou a composição em coluna única do conversor seria copiar a forma sem o motivo.

O que vale transferir é o princípio de hierarquia:

- Cada tela tem uma ideia dominante.
- Um grupo contém informações que respondem à mesma pergunta.
- Explicações auxiliares ficam subordinadas à tarefa ou prova principal.
- A superfície de fundo não compete com o conteúdo.
- Ações secundárias têm menor peso do que o próximo passo principal.
- A tipografia cria papéis com escala e peso, em vez de fazer cada seção parecer uma nova capa.

Para um portfólio com sua identidade, isso não significa torná-lo vazio. O retrato, os nomes reais dos projetos, os fluxos de backend, segurança, dados e decisões de arquitetura são provas com voz própria. São mais pessoais do que enfeites de interface. A home pode ser seletiva sem tornar inacessível qualquer fato: a página de projetos continua como o lugar de documentação mais completa.

## Diagnóstico em dez dimensões

| Dimensão | Nota indicativa | Leitura |
| --- | ---: | --- |
| Consistência de cor | 7/10 | Tokens coerentes; plano muito próximo do preto e identidade vermelha pouco perceptível na home. |
| Hierarquia tipográfica | 6/10 | A ordem semântica é clara, mas o H1, seções e títulos de item são todos grandes e enfáticos. |
| Ritmo de espaçamento | 7/10 | Há espaço real; repetição da grade e dos separadores torna o ritmo uniforme. |
| Consistência de componentes | 7/10 | Links, filetes e badges são consistentes; o mesmo tratamento aparece em conteúdo de naturezas diferentes. |
| Resposta a telas | 6/10 provisório | CSS tem breakpoints para 900, 760 e 540 px; sem inspeção visual mobile, não é uma conclusão renderizada. |
| Tema escuro | 6/10 | Contraste dos textos é forte, mas o preto quase puro dá um tom mais duro e plano que o carvão do Any2Any. |
| Movimento | 6/10 | A entrada escalonada é perceptível e reduzida por preferência do sistema; sua repetição e duração de 700 ms podem interromper leitura. |
| Acessibilidade observável | 7/10 provisório | Semântica, foco visível e redução de movimento aparecem no código; teclado e leitor de tela não foram testados. |
| Densidade informacional | 5/10 | Muitas funções e camadas aparecem por seção; é o principal desajuste em relação à referência. |
| Acabamento geral | 7/10 | Alinhamento, links, idiomas e separadores estão bem resolvidos; o próximo ganho está na edição e hierarquia, não em ornamento. |

As notas são heurísticas para organizar discussão, não certificação, benchmark ou avaliação de usabilidade com recrutadores. Confiança menor nos itens de mobile e interação porque não foram testados em viewport móvel, teclado ou leitor de tela.

## Hipóteses para a próxima conversa

1. **Primeiro reduzir competição, depois decidir o padding.** Definir que papel cada seção da home cumpre e que informação pode ser resumida ali, preservando o detalhe em /projects.
2. **Aproximar a tipografia do Any2Any por escala e peso, não só por fonte.** Experimentar títulos de seção menos dominantes, uma escala mais curta e tracking menos apertado em parte dos títulos, mantendo o nome reconhecível.
3. **Testar uma direção tonal sem copiar a paleta azul.** A referência sugere fundos não absolutos e superfícies quentes/azuladas muito suaves. Para o portfólio, vale testar um carvão menos preto ou um claro quente; decidir o destino do vermelho depois de ver a base, não substituí-lo automaticamente por azul.
4. **Manter a entrada escalonada com menos cobertura.** O movimento que você gostou pode ficar; a questão é onde ele ajuda a leitura. A home não precisa animar com o mesmo peso todas as linhas e todos os blocos.
5. **Preservar evidência técnica verdadeira.** Diagramas de fluxos e arquitetura têm conteúdo próprio e fazem sentido para projetos backend. A numeração de navegação sem função foi removida; números dentro dos diagramas podem indicar etapas técnicas, então precisam ser julgados pelo significado. A decisão sobre a página de projetos fica para a etapa posterior já combinada.

### Direção de trabalho que eu defenderia

Eu começaria a próxima rodada pela hierarquia da home, não por trocar mais uma cor. Minha preferência é dar um único primeiro plano à apresentação profissional, deixar projetos como evidência de maior peso logo depois e fazer competências/trajetória servirem de contexto, com contato como fecho claro. Preservaria o vermelho enquanto acento de identidade, reduziria a sensação de preto absoluto por meio de tons de superfície e aplicaria a escala tipográfica com menos níveis quase equivalentes.

Discordo apenas de uma solução literal de “mais padding em tudo”: os valores atuais já são amplos em vários pontos. Se o conteúdo permanecer com o mesmo número de rótulos, parágrafos, badges e links, o aumento global tende a alongar a página sem dar ao visitante uma ideia principal mais clara. Eu usaria mais respiro onde a hierarquia mudar e menos repetição de conteúdo onde a página pede leitura rápida.

## Contraste calculado dos tokens

Valores calculados pela fórmula WCAG de luminância relativa usando as cores declaradas, em pares de texto/fundo. São úteis para separar legibilidade cromática da sensação geral de clareza; não cobrem opacidade em animação ou texto sobre fotografia.

| Par de cores | Razão calculada |
| --- | ---: |
| Any2Any claro: texto #24262b / fundo #f4f3ef | 13,63:1 |
| Any2Any claro: muted #58616d / fundo #f4f3ef | 5,65:1 |
| Any2Any escuro: texto #e5e7eb / fundo #15171b | 14,49:1 |
| Any2Any escuro: muted #a1a7b1 / fundo #15171b | 7,42:1 |
| Portfólio: texto #f4f4f5 / fundo #0b0b0d | 17,89:1 |
| Portfólio: secundário #b4b4be / fundo #0b0b0d | 9,56:1 |
| Portfólio: muted #95959e / fundo #0b0b0d | 6,62:1 |
| Portfólio: vermelho #ff4d5a / fundo #0b0b0d | 6,05:1 |

Esses pares excedem o mínimo de 4,5:1 para texto comum descrito pela WCAG 2.2, mas a razão numérica não mede gosto, fadiga, densidade, hierarquia nem legibilidade de texto durante uma transição. Também não significa que toda forma de destaque vermelho seja igualmente percebida por todos; sinalização importante não deve depender só da cor.

## Referências e pontos do código

- [Any2Any em produção](https://anytoany.vercel.app/)
- [Repositório Any2Any](https://github.com/vbzt/Any2Any)
- [Tokens de tema e tipografia do Any2Any (index.css)](https://github.com/vbzt/Any2Any/blob/main/src/index.css)
- [Layout, tipos e escala do Any2Any (App.css)](https://github.com/vbzt/Any2Any/blob/main/src/App.css)
- [Composição e semântica do Any2Any (App.tsx)](https://github.com/vbzt/Any2Any/blob/main/src/App.tsx)
- [WCAG 2.2: contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- [WCAG 2.2: animação de interações](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)

No portfólio, evidências principais estão em app/globals.css (tokens, escala de espaçamento, transições e redução de movimento), components/HomeHero.tsx (hero), components/HomeContent.tsx (ordem e respiro das seções), components/PortfolioBlocks.tsx (hierarquia repetida de linhas, badges, links e contato) e components/DevDesignPanel.tsx (estado e escopo da prévia de animação).

---

**Conclusão:** o Any2Any parece mais leve porque faz poucas coisas visuais apontarem para um único objetivo e mantém a tipografia secundária claramente secundária. O portfólio já tem boas bases — conteúdo real, semântica, alinhamento, contraste e uma identidade própria — mas pede atenção de vários tipos ao mesmo tempo e repete a mesma voz editorial em seções diferentes. A próxima mudança deve editar e hierarquizar a home; aumentar padding, trocar vermelho por azul ou trocar apenas a fonte não resolveria essa causa.

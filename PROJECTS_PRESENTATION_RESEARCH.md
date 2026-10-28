# Pesquisa: apresentação dos projetos

**Data:** 28 de outubro de 2026

**Status:** pesquisa aplicada à página `/projects`; as decisões confirmadas pelo proprietário estão registradas ao final.

**Escopo:** analisar como mostrar o que cada projeto faz, o que Vitor contribuiu e quais evidências técnicas sustentam essa contribuição. A referência principal é a landing page da DeepY/Câmera Jovi, enviada por Vitor.
**Escopo aplicado:** evidências reais quando disponíveis, diagramas assumidamente conceituais para produtos sem tela adequada e cópia factual em português e inglês. Não foram criadas páginas individuais.

## Síntese executiva

A página atual informa bem a stack e alguns limites de cada projeto, mas a sua imagem dominante costuma explicar o backend. Isso é útil para quem já conhece o projeto, porém não responde tão depressa à pergunta de quem abre `/projects`: **“O que a pessoa consegue fazer com isso?”**

A landing page da DeepY mostra a diferença de maneira concreta. Ela abre com a proposta para o estudante, oferece uma ação para experimentar e usa capturas reais da Câmera Jovi para mostrar captura, resumo, flashcards, matemática e caderno. O visual não depende de uma ilustração genérica da arquitetura para provar que o produto existe. As capturas ficam junto do texto que explica aquela etapa. Essa é a evidência mais forte para a direção visual do portfólio.

Minha recomendação é uma página de projetos **produto primeiro e autoria explícita**:

1. Dizer em linguagem direta qual necessidade o projeto atende ou que resultado oferece.
2. Mostrar uma evidência visual verdadeira do produto ou do fluxo que ele suporta.
3. Separar a contribuição do Vitor do trabalho da equipe.
4. Apresentar uma ou duas decisões técnicas como prova de trabalho, em linguagem progressiva.
5. Deixar tecnologias e links visíveis, mas com menor peso que o produto e a contribuição.

Isso não exige esconder que a maior parte do trabalho é backend. Significa usar a interface real quando ela existe e, quando o projeto é uma API, tornar o fluxo da API compreensível sem fingir que existe uma aplicação visual que não foi encontrada.

## Como a análise foi feita

- Li `components/ProjectsContent.tsx`, `components/PortfolioBlocks.tsx`, `lib/portfolio.ts` e os arquivos em `public/`.
- Observei a página `/projects` local em desktop, incluindo os destaques de TrackSafe, Nomuz e DeepY, e conferi os nomes e conteúdos na árvore de acessibilidade.
- Inspecionei a landing page fornecida, no desktop, pelo texto e pelas telas renderizadas. A página se identifica visualmente como Deepy; o produto é chamado Câmera Jovi. A árvore de acessibilidade expõe os títulos, as etapas e descrições de telas reais.
- Consultei os READMEs públicos do [Nomuz](https://github.com/vbzt/Nomuz), do [repositório `kart`](https://github.com/vbzt/kart) e do [Camera Jovi](https://github.com/CameraJovi/FrontCameraJovi).
- Usei orientação da W3C para alternativas de imagens e hierarquia de títulos. Usei a documentação do GitHub sobre READMEs como referência complementar para apresentar utilidade e uso do projeto, e a pesquisa da NN/g apenas como paralelo sobre evidências visuais e artefatos de processo em portfólios de design.

**Limites:** a landing page e `/projects` foram observadas em uma dimensão desktop; não fiz auditoria renderizada em celular, não acessei a câmera da Jovi, não executei os outros projetos e não entrei em contas de demonstração. Portanto, disponibilidade de cada função no deploy não está confirmada. A presença de um frontend no repositório Nomuz e a ausência de frontend no repositório `kart` são observações desses repositórios, não prova de que não exista outro deploy ou interface separado.

## 1. Diagnóstico da página de projetos atual

### O que funciona

- A página tem um `h1` claro, navegação por âncoras com os nomes dos três destaques e uma seção compacta de arquivo.
- Os nomes dos projetos, a contribuição do Nomuz, o fato de TrackSafe ser uma API e as tecnologias estão separados e são pesquisáveis.
- As linhas editoriais, o fundo papel e o acento vermelho já combinam com a identidade aprovada. Não é preciso trocar a identidade visual para corrigir o problema de apresentação.
- Os diagramas atuais têm texto legível para tecnologia assistiva e uma legenda. Eles são diagramas explicativos, não capturas falsas do produto. O problema é de prioridade: hoje ocupam o lugar da prova visual do produto.

### O que enfraquece a leitura do produto

Os três projetos em destaque repetem praticamente a mesma composição de duas colunas: rótulo e nome à esquerda; papel, descrição, detalhe, badges e link; diagrama à direita. A figura tem espaço semelhante ao bloco textual. Assim, a composição confere o mesmo peso às duas respostas — “o que o backend faz” e “o que é o produto” — e, em alguns casos, favorece a primeira.

As três figuras representam coisas diferentes, mas todas têm aparência de painel técnico:

- **TrackSafe:** sistema, módulos numerados e relações entre autenticação, API e pagamento.
- **Nomuz:** pastas `frontend/`, `api/` e `data/` com suas tecnologias.
- **DeepY:** o caminho de uma imagem pela API até o conteúdo de estudo.

O visitante vê arquitetura antes de ver uma tela que use a plataforma jurídica ou o resultado de estudo da Jovi. O diagrama de Nomuz responde principalmente “como o repositório está separado”; o de DeepY, “por quais serviços a imagem passa”. Isso é legítimo em uma explicação técnica mais adiante, mas não substitui uma imagem que identifique a experiência do produto.

Há ainda alguns sinais de metadados redundantes: slug `/tracksafe`, `/nomuz`, `/deepy`; nome do projeto repetido no cabeçalho do diagrama; categorias curtas em letras pequenas; badges de stack em uma linha própria. Cada item tem utilidade possível, mas todos juntos consomem atenção antes de a figura provar o produto. O próximo desenho pode conservar categoria e badges, usando-os como informação secundária, e retirar o slug do bloco visual se ele não ajudar a encontrar ou identificar algo.

O arquivo pode continuar compacto e textual. A necessidade de uma captura grande se aplica aos projetos destacados. Tornar cada projeto antigo um estudo de caso visual aumentaria o comprimento e repetiria a mesma quantidade de evidência para trabalhos de pesos diferentes.

### O problema é de hierarquia editorial, não falta de semântica HTML

A página atual tem títulos e landmarks reconhecíveis (`h1` para projetos, `h2` para arquivo e `h3` para cada projeto), links nomeados e figuras com legendas. A proposta deve manter essa estrutura e organizar melhor as respostas. Uma página limpa não precisa sacrificar navegação por títulos nem tirar conteúdo necessário para entender uma imagem.

## 2. O que a landing page da DeepY ensina — e o que não devemos copiar

### Evidência de produto

A página abre com “Sua câmera. Seu próximo jeito de estudar.” e explica que a câmera leva da imagem da lousa a resumos, perguntas e revisão. A ação para experimentar a aplicação está ao lado da ação para explorar recursos. Depois, a página explica o contexto: fotos de aula acabam dispersas na galeria e precisam ser reconstruídas mais tarde.

Na seção “Na prática”, a navegação por etapas permite acompanhar captura, preparação e revisão. A galeria liga cada capacidade à sua demonstração. As telas exibidas incluem modo Estudante/câmera, resumo, flashcards, resolução matemática, caderno e SmartPix. As descrições deixam claro qual tela é real e, no caso do SmartPix, que as ações mostradas são demonstrativas. A página mostra uma ação, uma interface e o resultado correspondente, em vez de reduzir o projeto a “imagem → Gemini”.

O repositório público acrescenta fatos úteis para uma página de projeto: a aplicação usa a câmera do navegador; resumos, flashcards, matemática e análise de código passam pelo backend FastAPI/Gemini; SmartPix, associação de matéria pelo horário e armazenamento local têm comportamentos diferentes. A interface também inclui Caderno Inteligente e Jovi Code. Isso mostra por que uma descrição curta precisa priorizar o benefício, sem alegar que toda parte do produto usa IA.

### Por que isso parece mais convincente que o diagrama atual

1. **A imagem prova uma função reconhecível.** A tela de resultado mostra o que a pessoa recebe; o diagrama técnico mostra somente a passagem entre componentes.
2. **A imagem tem contexto.** O título e o parágrafo ao lado dizem que momento do uso ela representa.
3. **A escala ajuda a ler.** A interface é suficientemente grande para ser reconhecida como um produto, não como um ícone dentro de um cartão.
4. **A sequência tem um motivo.** Capturar, preparar e revisar pertencem ao fluxo real. Não são números decorativos.
5. **Os estados incompletos são nomeados.** A página não apresenta a interação demonstrativa do SmartPix como ação concluída.

### Não copiar a landing page como template

A landing page é uma apresentação de produto: tem headline grande, seção de público, chamada para experimentar e tratamento gráfico de campanha. O portfólio é uma apresentação de trabalho e autoria. Não recomendo transportar o preto e amarelo, o hero promocional, a lista completa de seis funcionalidades ou as proporções de landing page. O que vale aproveitar é a ordem **produto → prova visual → explicação**, usando o papel/vermelho e a escala tipográfica já aprovada no portfólio.

Para a página de projetos, eu escolheria uma tela de resultado da Jovi — resumo, flashcard ou resolução — como imagem principal. Uma tela isolada da câmera é fiel, mas ainda não mostra o que diferencia a aplicação. Quando a narrativa pedir, uma captura da câmera e uma do resultado podem formar uma sequência curta, desde que ambas sejam legíveis e sejam telas reais.

## 3. Modelo de conteúdo recomendado

O público provável combina recrutadores e pessoas de RH com desenvolvedores. O texto inicial precisa explicar a utilidade sem conhecimento de backend; a camada seguinte deve mostrar que o Vitor entende a implementação. O conteúdo não precisa ter tom de marketing nem se tornar uma documentação longa.

### Ordem semântica por projeto

| Ordem | Conteúdo | Pergunta que responde | Peso visual |
| --- | --- | --- | --- |
| 1 | Nome e contexto necessário (pessoal, equipe ou faculdade; API, plataforma ou aplicação) | Que projeto é este? | Alto, sem badge decorativo |
| 2 | Uma frase curta de produto | O que a pessoa consegue fazer ou que problema é atendido? | Alto |
| 3 | Captura ou artefato visual verdadeiro | Como isso se apresenta ou funciona? | Principal evidência visual |
| 4 | “Minha contribuição” ou formulação equivalente | Qual parte foi feita pelo Vitor? | Médio, explícito e separado do trabalho da equipe |
| 5 | Uma ou duas decisões técnicas relevantes | Como a contribuição sustenta o produto? | Secundário, enxuto |
| 6 | Tecnologias e links | Onde posso verificar ou explorar mais? | Visível, compacto |

Essa ordem é progressiva: a pessoa pode entender o projeto pelo nome, resumo e imagem; quem quiser comprovar a profundidade continua pela contribuição, decisão técnica e repositório. A documentação do GitHub descreve o README como primeiro contato frequente e recomenda comunicar utilidade, o que se pode fazer e como usar o projeto. Aplicar essa ideia à apresentação de portfólio é uma inferência editorial, não uma regra formal de layout.

### Direção para a página, sem criar outra rota nesta fase

Eu manteria `/projects` como página única de projetos selecionados mais arquivo. Não criaria páginas individuais até que um projeto tenha material suficiente para uma história maior que o bloco de destaque. Para cada destaque:

1. Título e frase de produto no início da linha/seção.
2. Uma imagem real de tamanho generoso antes do inventário técnico.
3. Contribuição individual e contexto de equipe fora da legenda da imagem.
4. Uma explicação técnica selecionada — não uma lista de todos os módulos ou mecanismos.
5. Badges e links ao final, sem duplicar texto do resumo.

No desktop, a imagem deve receber área suficiente para a interface ser reconhecida. A composição atual de duas colunas pode ser testada com uma captura grande e texto curto; uma faixa visual larga pode ser melhor quando o produto exigir leitura de uma tela inteira. A decisão final depende de capturas reais, não de placeholder. No celular, a leitura deve formar uma sequência natural: título, resumo, visual, contribuição, detalhe técnico e links.

## 4. Diagnóstico e direção por projeto

### DeepY — projeto DeepY, produto Câmera Jovi

**Fatos observados:** o portfólio chama o projeto de DeepY e descreve um aplicativo de estudos. A landing page usa a marca Deepy e apresenta o produto como Câmera Jovi. O repositório conectado à página também se chama `FrontCameraJovi`. O README informa resumo, flashcards, matemática, Jovi Code, organização por matéria/horário, SmartPix e Caderno Inteligente. O projeto lista cinco integrantes e é acadêmico/demonstrativo.

**Problema atual:** o visual do portfólio só apresenta um fluxo `imagem → FastAPI + Gemini → conteúdo`. Ele explica uma integração, mas não mostra o que se pode ler, rever ou salvar. O resumo atual também pode dar a entender que todas as funcionalidades são processadas por IA, embora o README separe as partes locais.

**Direção aplicada:** DeepY permanece como nome do projeto no portfólio; o repositório continua sendo `FrontCameraJovi`, conforme pedido do proprietário e exigência da faculdade. O destaque abre com a captura real do resumo de equações e da ação para salvá-lo no Caderno Inteligente. A descrição apresenta resumos, flashcards e resoluções; a organização por matéria aparece como detalhe. A landing fornecida é o link público do projeto.

**Limite de autoria:** o projeto é acadêmico e tem equipe. Como as fontes consultadas não especificam a contribuição individual do Vitor, a página não atribui a ele a autoria da interface ou de funcionalidades específicas.

### Nomuz — plataforma jurídica em equipe

**Fatos observados:** o README descreve gestão de casos e comunicação entre advogados, clientes e associados. O monorepo contém `api/`, `frontend/` e um diretório `blockchain/` incompleto. O README atribui ao Vitor arquitetura da API, modelagem Prisma, WebSockets e fluxo de criptografia; atribui ao colaborador `@vhnb` implementação da UI, arquitetura de componentes e integração de cliente. O diretório público de frontend contém um `image.jpg` genérico, não uma captura de tela do produto. O portfólio não registra link de deploy para Nomuz.

**Correção aplicada:** a descrição do portfólio diz que as mensagens são cifradas no servidor antes do armazenamento. Isso não é criptografia ponta a ponta. A camada blockchain planejada não é representada como função entregue.

**Direção aplicada:** não usar captura da interface. O proprietário esclareceu que a visualização exige iniciar backend, PostgreSQL e Prisma e que o chat existente é antigo para a representação do projeto. A página substitui a árvore de pastas por um modelo conceitual de advogados, clientes e associados ligados a um caso, com gestão e conversa em tempo real. A legenda identifica explicitamente que o modelo não é uma tela. A descrição de contribuição diz que as mensagens são cifradas no servidor antes do armazenamento; não afirma E2E nem apresenta blockchain como entregue.

**Limite da visualização:** o mapa explica o domínio, não a interface, os fluxos de autorização ou uma relação de criptografia. Esses detalhes ficam no texto e nos links do repositório.

### TrackSafe — API de agendamento para kart drift

**Fatos observados:** o portfólio chama o projeto de TrackSafe e aponta para `vbzt/kart`. O README público do repositório nomeia o projeto Kart e o descreve como API para agendar baterias de drift, gerir planos de assinatura e receber pagamentos via Pix/AbacatePay. A documentação enumera serviços, disponibilidade, reservas, planos, assinaturas e cupons. O repositório consultado é de NestJS/backend e não apresenta um frontend ou captura de interface.

**Problema atual:** a figura é uma arquitetura de caixas “Supabase Auth → TrackSafe API → AbacatePay”, seguida de três módulos técnicos. Ela informa que há autenticação, API e pagamento, mas o valor para o piloto/cliente — encontrar uma bateria, reservar um horário e pagar via Pix — está implícito. A descrição atual também fica mais abstrata que o domínio concreto documentado no repositório.

**Direção aplicada:** manter TrackSafe como nome de apresentação e o repositório `vbzt/kart` como destino do link. Não há tela autêntica do produto; telas geradas anteriormente eram experimentos de frontend, não uma interface entregue. A figura explica disponibilidade → reserva → pagamento via Pix e a legenda a chama de fluxo conceitual da API. A descrição traduz o domínio concreto do repositório: agendar baterias de drift, com horários, planos, cupons e checkout integrado.

**Limite da visualização:** o fluxo representa a API e não uma sequência de telas. O contexto da análise de segurança de uma plataforma real foi preservado da descrição aprovada pelo proprietário.

## 5. Evidência visual: autenticidade antes de acabamento

### Ordem de preferência

1. Captura atual de uma tela real e representativa do produto.
2. Duas capturas reais em sequência quando a transformação é essencial para entender o projeto.
3. Documentação ou interface real da API, se publicada.
4. Diagrama simples derivado dos fluxos e endpoints documentados, identificado como explicação da API.
5. Texto puro quando não há material visual fiel.

Não usar como primeira imagem uma árvore de pastas, um desenho genérico de arquitetura, mockups de dispositivo adicionados apenas para decorar ou uma tela inventada para “parecer mais completa”. Um diagrama técnico continua válido quando a pergunta da seção é realmente técnica — por exemplo, como uma autorização é aplicada a recursos —, mas a legenda precisa dizer o que ele explica.

### Recorte e composição

- Usar a tela que prova a proposta principal, não necessariamente a primeira tela de login ou a tela mais bonita.
- Preservar proporção, contexto e informação legível. Não cortar controles ou resultados que expliquem a ação.
- Preferir uma captura principal com uma secundária de apoio. Seis screenshots pequenas podem recriar a mesma densidade do problema atual.
- Não replicar toda a identidade da landing page do produto. Os assets mostram o que foi construído; a moldura, o fundo e a tipografia devem continuar pertencendo ao portfólio.
- A página atual não tem capturas de projeto em `public/`. O Next.js recomenda fornecer dimensões/proporção para estabilidade e otimizar tamanho/formato e carregamento das imagens; a implementação deve consultar a documentação da versão local em `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md` antes de escolher `<Image>` e configuração de imagens remotas.

### Alternativa textual

A W3C recomenda que uma imagem informativa tenha alternativa curta que comunique a informação essencial; uma imagem puramente decorativa deve usar alternativa vazia; diagramas complexos precisam de equivalente textual completo. Para estas páginas:

- Captura da Jovi: alt como “Resumo de um exercício de matemática gerado a partir da foto, com opção de salvar no caderno”, se esse conteúdo estiver visível na captura selecionada.
- Mapa do Nomuz: participantes, caso e atividades aparecem como texto legível; a legenda deixa claro que o desenho é conceitual.
- Diagrama do TrackSafe: alt/descrição equivalente indicando a sequência disponibilidade, reserva e Pix; não depender apenas de cor ou setas.
- Legenda não deve repetir literalmente o alt. Ela pode explicar em que parte do fluxo aquela imagem aparece ou se a captura usa dados de demonstração.

## 6. Semântica de conteúdo e acessibilidade

- Preservar o `h1` da página e usar um título de seção de mesmo nível para cada projeto; subtemas técnicos ficam abaixo do título do projeto. A W3C explica que títulos descrevem a organização, dão navegação por seção e devem refletir a hierarquia do conteúdo.
- Manter navegação por âncoras com nomes claros dos projetos. Não adicionar números aos títulos: eles não ajudam a localizar nem descrevem etapas do produto.
- Usar `figure` e `figcaption` para relacionar cada prova visual à explicação correspondente. Para screenshots sem informação nova, marcar como decorativas somente quando o mesmo conteúdo já está explicado no texto.
- Escrever links com ação e destino compreensíveis (“Abrir demonstração”, “Ver repositório”). Evitar depender apenas de ícones ou setas.
- As traduções em português e inglês devem comunicar a mesma função e o mesmo nível de autoria; evitar tradução literal que mude o que a pessoa entende sobre experiência, segurança ou maturidade.
- Em celular, não deixar a imagem ficar antes do nome do projeto nem comprimir o conteúdo da tela. Verificar orientação vertical, largura estreita, foco, contraste, zoom/reflow e ausência de rolagem horizontal quando a implementação acontecer.
- Manter imagens carregando em proporção estável para o texto não saltar; screenshots abaixo da dobra podem usar carregamento nativo preguiçoso. Não transformar imagem em único lugar onde uma função ou fato é anunciado.

## 7. Limites de conteúdo: o que torna a página honesta e leve

**Sem métricas inventadas.** Se não existem usuários, volumes, economia de tempo ou resultados medidos, não criar números. O resultado demonstrável pode ser a aplicação que roda, o fluxo implementado, uma decisão de arquitetura ou uma limitação reconhecida.

**Sem lista de tecnologia como primeiro argumento.** A stack ajuda a conferir o trabalho, mas “NestJS, Prisma, PostgreSQL, WebSockets” não explica por que um produto existe. Manter os badges compactos como contexto, como já ocorre na home.

**Sem termos de segurança vagos.** “Seguro”, “criptografia ponta a ponta” ou “à prova de adulteração” não são ornamentos. Usar a descrição exata da implementação e seu limite, principalmente no Nomuz.

**Sem confundir intenção e entrega.** O layer blockchain do Nomuz é planejado, mas não entregue; o SmartPix da Jovi tem ações demonstrativas; a API Kart não é uma interface visual. Cada estado deve aparecer como o repositório o descreve, em vez de ganhar aparência de produto final sem suporte.

**Sem atribuir o produto inteiro a uma pessoa.** Para projetos em equipe, a página deve dar contexto de equipe e distinguir contribuição individual. Uma tela pode mostrar o produto inteiro sem alegar que uma pessoa desenhou e implementou tudo.

## 8. Resultado e checagens

- DeepY aparece primeiro apenas em `/projects`; a sequência dos projetos na home não muda.
- A captura de resumo é local, tem dimensões intrínsecas e texto alternativo que descreve o resultado visível.
- TrackSafe apresenta um fluxo de API sem captura de dashboard; Nomuz mostra um mapa conceitual sem fingir uma interface.
- As descrições e legendas estão traduzidas nos dois idiomas e distinguem o que é tela real do que é diagrama.
- A revisão manual foi feita no desktop e em um viewport de 390 px. A página não apresenta overflow horizontal nessa largura.
- A navegação por âncoras e as cópias em português e inglês foram conferidas na árvore de acessibilidade; a captura local da DeepY carregou.
- As páginas dos projetos foram conferidas visualmente. Não foi iniciada nenhuma das aplicações de backend para produzir capturas.

## Decisões consolidadas

| Decisão | Recomendação | Confiança |
| --- | --- | --- |
| O que deve vir primeiro | Produto e resultado compreensível, depois contribuição, decisões e stack | Alta: leitura atual e landing page sustentam a diferença |
| O que deve substituir os diagramas | Capturas verdadeiras quando há interface; fluxo documentado quando só há API | Alta |
| DeepY versus Câmera Jovi | Manter DeepY como nome do portfólio; manter `FrontCameraJovi` como nome do repositório | Confirmado por Vitor |
| Claim de Nomuz | Remover “ponta a ponta” e blockchain como função concluída; o README afirma o contrário | Alta para o estado que o README descreve |
| TrackSafe sem captura | Não desenhar UI fictícia; explicar um fluxo real da API ou usar documentação interativa caso exista | Alta com as evidências atuais |
| Rotas individuais | Não criar ainda; `/projects` consegue apresentar os três destaques e um arquivo | Média: reavaliar se os estudos de caso crescerem |
| Ordem dos destaques | DeepY → TrackSafe → Nomuz apenas na página dedicada, porque DeepY tem captura autêntica | Confirmado por Vitor |
| Visualização do Nomuz | Mapa conceitual; a UI existente exige o ambiente completo e não representa bem a experiência atual | Confirmado por Vitor |
| Visualização do TrackSafe | Fluxo conceitual da API; telas geradas em experimento não contam como interface do produto | Confirmado por Vitor |

## Referências

- [Landing page DeepY / Câmera Jovi](https://landingpage-iota-indol.vercel.app/) — fonte fornecida por Vitor e observada no navegador.
- [Repositório Camera Jovi](https://github.com/CameraJovi/FrontCameraJovi) — funções, fluxos, tecnologias, equipe e estado demonstrativo de algumas ações.
- [Repositório Nomuz](https://github.com/vbzt/Nomuz) — descrição do produto, divisão de contribuição, estado real da criptografia e camada blockchain não entregue.
- [Repositório `kart` usado pelo TrackSafe](https://github.com/vbzt/kart) — API para agenda de kart drift, planos, pagamentos e endpoints documentados.
- [GitHub Docs: sobre arquivos README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) — contexto de explicar utilidade, possibilidades e uso de um projeto.
- [W3C WAI: Images Tutorial](https://www.w3.org/WAI/tutorials/images/) — alternativas para imagens informativas, decorativas, funcionais e complexas.
- [W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) — hierarquia e navegação por títulos.
- [Nielsen Norman Group: User Experience Careers, 2nd Edition](https://media.nngroup.com/media/reports/free/UserExperienceCareers_2nd_Edition.pdf) — paralelo limitado a portfólios de UX: entrevistas apontam valor em mostrar designs concluídos junto de artefatos de processo. Isso não é uma exigência de portfólios backend e não foi tratado como regra para estes projetos.
- Documentação local da versão do Next.js: `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`.

---

**Conclusão:** a mudança central não é “colocar uma imagem em cada card”. É escolher a prova certa para cada tipo de projeto e dar a ela a posição devida. DeepY mostra uma tela real de resultado; TrackSafe explica o fluxo de uma API; Nomuz comunica o domínio do produto por um mapa conceitual. A distinção mantém a página mais visual sem atribuir telas inexistentes ou exagerar a contribuição técnica.

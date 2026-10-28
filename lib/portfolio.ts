export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type Localized = Record<Locale, string>;

export const site = {
  url: "https://bzt.vercel.app",
  name: "Vitor de Castro Buzato",
  email: "vitorcastrobuzato@gmail.com",
  github: "https://github.com/vbzt",
  linkedin: "https://linkedin.com/in/vitor-buzato",
  resume: "/curriculo-vitor-buzato.pdf",
  portrait: "/673314_007(1).jpg",
};

export type Project = {
  slug: string;
  name: string;
  category: Localized;
  role?: Localized;
  description: Localized;
  detail?: Localized;
  tech: string[];
  github: string;
  deploy?: string;
  visual?: "tracksafe" | "nomuz" | "deepy";
};

// Keep project facts and individual contributions tied to confirmed repository or owner-provided evidence.
export const selectedProjects: Project[] = [
  {
    slug: "tracksafe",
    name: "TrackSafe",
    category: { pt: "API · projeto autoral", en: "API · independent project" },
    role: { pt: "desenvolvimento integral", en: "built independently" },
    description: {
      pt: "API para agendar baterias de kart drift, criada após a análise de segurança de uma plataforma real.",
      en: "An API for booking drift kart sessions, created after a security review of a real platform.",
    },
    detail: {
      pt: "O backend organiza horários, planos, cupons e pagamentos via Pix. A autenticação usa Supabase, e o checkout integra com AbacatePay.",
      en: "The backend handles schedules, plans, coupons, and Pix payments. Authentication uses Supabase, and checkout is integrated with AbacatePay.",
    },
    tech: ["NestJS", "TypeScript", "Prisma", "Supabase Auth", "AbacatePay"],
    github: "https://github.com/vbzt/kart",
    visual: "tracksafe",
  },
  {
    slug: "nomuz",
    name: "Nomuz",
    category: { pt: "plataforma jurídica · equipe", en: "legal platform · team" },
    role: { pt: "arquitetura da API e backend", en: "API architecture and backend" },
    description: {
      pt: "Plataforma jurídica para gestão de casos e comunicação entre advogados, clientes e associados.",
      en: "A legal platform for managing cases and communication between lawyers, clients, and associates.",
    },
    detail: {
      pt: "Contribuí na modelagem com Prisma, nas atualizações em tempo real e na criptografia das mensagens no servidor antes do armazenamento.",
      en: "I contributed to Prisma data modeling, real-time updates, and server-side message encryption before storage.",
    },
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "WebSockets"],
    github: "https://github.com/vbzt/Nomuz",
    visual: "nomuz",
  },
  {
    slug: "deepy",
    name: "DeepY",
    category: { pt: "aplicativo de estudos · faculdade", en: "study app · university project" },
    description: {
      pt: "Aplicativo de estudos que transforma fotos de anotações e exercícios em resumos, flashcards e resoluções.",
      en: "A study app that turns photos of class notes and exercises into summaries, flashcards, and step-by-step solutions.",
    },
    detail: {
      pt: "O caderno organiza as capturas por matéria; no momento da foto, o app sugere a disciplina com base no horário.",
      en: "The notebook groups captures by subject; when a photo is taken, the app suggests a class based on the time.",
    },
    tech: ["Next.js", "FastAPI", "Python", "Google Gemini"],
    github: "https://github.com/CameraJovi/FrontCameraJovi",
    deploy: "https://landingpage-iota-indol.vercel.app/",
    visual: "deepy",
  },
];

// The home keeps its approved order; the dedicated project page leads with its only real product screenshot.
export const projectPageOrder = ["deepy", "tracksafe", "nomuz"] as const;
export const projectPageProjects = projectPageOrder
  .map((slug) => selectedProjects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined);

export const archiveProjects: Project[] = [
  {
    slug: "crumbly",
    name: "Crumbly",
    category: { pt: "pessoal · 2024", en: "personal · 2024" },
    role: { pt: "solo", en: "solo" },
    description: {
      pt: "API para gestão de padarias, com autenticação, controle de estoque, vendas e rastreamento de pedidos.",
      en: "An API for bakery management, with authentication, stock control, sales, and order tracking.",
    },
    tech: ["NestJS", "Prisma ORM", "MySQL", "TypeScript"],
    github: "https://github.com/vbzt/Crumbly",
  },
  {
    slug: "any2any",
    name: "Any2Any",
    category: { pt: "pessoal · 2024", en: "personal · 2024" },
    role: { pt: "solo", en: "solo" },
    description: {
      pt: "Ferramenta que converte arquivos multimídia com processamento local no navegador.",
      en: "A tool that converts multimedia files locally in the browser.",
    },
    tech: ["Vite", "TypeScript", "FFmpeg"],
    github: "https://github.com/vbzt/Any2Any",
    deploy: "https://anytoany.vercel.app/",
  },
  {
    slug: "ecoleaf",
    name: "EcoLeaf",
    category: { pt: "escola · 2024", en: "school · 2024" },
    role: { pt: "tech lead e backend", en: "tech lead and backend" },
    description: {
      pt: "Plataforma para uma empresa de jardinagem, com um formulário que usa IA para recomendar plantas.",
      en: "A platform for a gardening company, with a form that uses AI to recommend plants.",
    },
    tech: ["Node.js", "React", "MongoDB", "Gemini API"],
    github: "https://github.com/vbzt/EcoLeaf",
  },
];

export const copy = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: { home: "Início", projects: "Projetos", capabilities: "Competências", about: "Trajetória", contact: "Contato", resume: "currículo", language: "Idioma" },
    hero: {
      title: "Vitor de Castro Buzato",
      lead: ["desenvolvedor de software", "engenharia de software @FIAP"],
      projects: "Explorar projetos", contact: "Entrar em contato",
    },
    sections: {
      projects: { title: "projetos selecionados", intro: "uma API de agendamentos, uma plataforma jurídica e um aplicativo de estudos.", all: "Ver arquivo completo" },
      capabilities: { title: "o que eu construo", intro: "áreas que exploro em projetos com APIs, dados e interfaces." },
      about: { title: "trajetória", all: "Conhecer a trajetória" },
      contact: { title: "vamos conversar?", intro: "busco oportunidades de estágio ou posições de início de carreira em desenvolvimento de software." },
    },
    capabilities: [
      { title: "APIs e arquitetura", text: "Construo APIs com serviços, regras de negócio e integrações organizados em módulos.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { title: "dados e acesso", text: "Também exploro armazenamento de dados, autenticação e permissões de acesso.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { title: "produto completo", text: "No frontend, desenvolvo interfaces e conecto os fluxos de uso ao backend.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "E-mail", copy: "copiar e-mail", copied: "e-mail copiado", failed: "não foi possível copiar; selecione o endereço acima.", message: "uma conversa pode começar por aqui.", resumeDownload: "baixar currículo (PDF)", external: "Abrir", repo: "Repositório", live: "Acessar projeto", details: "Detalhes", more: "mais projetos", archive: "arquivo", selected: "selecionados" },
    journey: [
        { label: "origem", title: "bots, lógica e SQL", text: "Comecei aos 13 anos, durante a pandemia, criando bots de Discord em Python. Aprendi lógica e SQL enquanto resolvia bugs e procurava respostas no YouTube e no Stack Overflow." },
        { label: "formação", title: "desenvolvimento web na FIAP School", text: "Cursei Técnico em Informática na FIAP School de 2023 a 2025. No primeiro ano, conheci desenvolvimento web e comecei a construir aplicações completas fora da escola. Um dos primeiros projetos foi um clone do Twitter/X." },
        { label: "hoje", title: "desenvolvimento de software", text: "No segundo ano do técnico, conheci o NestJS e comecei a usá-lo em projetos como Crumbly e Nomuz. Hoje estudo Engenharia de Software na FIAP, com conclusão prevista para 2029. Nos projetos, também venho explorando arquitetura de software, CI/CD e ferramentas DevOps." },
    ],
    projectsPage: { title: "projetos", indexLabel: "Navegação pelos projetos" },
    footer: "Projetado e desenvolvido por Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Desenvolvimento de software",
      homeDescription: "Portfólio de Vitor Buzato, estudante de Engenharia de Software na FIAP e desenvolvedor de software.",
      projects: "Projetos | Vitor Buzato",
      projectsDescription: "DeepY, TrackSafe, Nomuz e outros projetos de software de Vitor Buzato.",
    },
  },
  en: {
    skip: "Skip to content",
    nav: { home: "Home", projects: "Projects", capabilities: "Skills", about: "About", contact: "Contact", resume: "résumé (PT)", language: "Language" },
    hero: {
      title: "Vitor de Castro Buzato",
      lead: ["software developer", "software engineering @FIAP"],
      projects: "Explore projects", contact: "Get in touch",
    },
    sections: {
      projects: { title: "selected projects", intro: "a booking API, a legal platform, and a study app.", all: "View all projects" },
      capabilities: { title: "what I build", intro: "areas I explore through projects with APIs, data, and interfaces." },
      about: { title: "about", all: "Read more" },
      contact: { title: "let's talk?", intro: "open to internships and early-career software development roles." },
    },
    capabilities: [
      { title: "APIs and architecture", text: "I build APIs with services, business rules, and integrations organized into modules.", tech: ["TypeScript", "Node.js", "NestJS", "FastAPI"] },
      { title: "data and access", text: "I also explore data storage, authentication, and access permissions.", tech: ["PostgreSQL", "Prisma", "JWT", "Supabase Auth"] },
      { title: "complete products", text: "On the frontend, I build interfaces and connect user flows to the backend.", tech: ["React", "Next.js", "WebSockets", "Docker"] },
    ],
    contact: { email: "Email", copy: "copy email", copied: "email copied", failed: "could not copy; select the address above.", message: "a conversation can start here.", resumeDownload: "download résumé (PDF, PT)", external: "Open", repo: "Repository", live: "Visit project", details: "Details", more: "more projects", archive: "archive", selected: "selected" },
    journey: [
        { label: "origin", title: "bots, logic, and SQL", text: "I started at 13, during the pandemic, building Discord bots in Python. I learned programming logic and SQL while fixing bugs and searching YouTube and Stack Overflow for answers." },
        { label: "education", title: "web development at FIAP School", text: "I studied Information Technology at FIAP School from 2023 to 2025. In my first year, I discovered web development and began building complete applications outside school. One of my first projects was a Twitter/X clone." },
        { label: "today", title: "software development", text: "In my second year at FIAP School, I discovered NestJS and started using it in projects such as Crumbly and Nomuz. I now study Software Engineering at FIAP and expect to graduate in 2029. My projects have also let me explore software architecture, CI/CD, and DevOps tools." },
    ],
    projectsPage: { title: "projects", indexLabel: "Project navigation" },
    footer: "Designed and developed by Vitor Buzato.",
    metadata: {
      home: "Vitor Buzato | Software development",
      homeDescription: "Portfolio of Vitor Buzato, a Software Engineering student at FIAP and software developer.",
      projects: "Projects | Vitor Buzato",
      projectsDescription: "DeepY, TrackSafe, Nomuz, and other software projects by Vitor Buzato.",
    },
  },
} as const;

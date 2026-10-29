import Link from "next/link";
import { EmailCopy } from "./EmailCopy";
import { copy, site, type Locale, type Project } from "@/lib/portfolio";
import { ArrowDown, ArrowRight, ArrowUpRight } from "./Icons";


export function SectionHeading({ id, title, intro, action, href }: { id: string; title: string; intro?: string; action?: string; href?: string }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-9 max-[540px]:mb-8 max-[540px]:flex-col max-[540px]:items-start max-[540px]:gap-3">
      <div>
        <h2 className="home-section-title mb-[14px]" id={id}>{title}</h2>
        {intro && <p className="description">{intro}</p>}
      </div>
      {action && href && <Link className="inline-flex min-h-11 shrink-0 items-center gap-[6px] border-b border-accent text-[13px] font-[650] text-foreground hover:text-accent-hover" href={href}>{action}<ArrowRight /></Link>}
    </div>
  );
}

export function TechBadge({ name }: { name: string }) {
  return <span className="inline-flex min-h-[29px] items-center whitespace-nowrap rounded-[7px] border border-line bg-surface-inset px-[9px] py-[5px] text-[11px] font-semibold text-copy-secondary">{name}</span>;
}

export function HomeProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].contact;

  return (
    <article className="editorial-row motion-item border-b border-line py-12 max-[540px]:py-10" data-motion-item id={"project-" + project.slug}>
      <div>
        <span className="home-project-category text-[11px] font-bold tracking-[0.07em] text-copy-muted">{project.category[locale]}</span>
        <h3 className="home-item-title mt-4">{project.name}</h3>
      </div>
      <div className="flex flex-col items-start">
        {project.role && <p className="home-project-role mb-[9px] text-xs font-[650] text-accent-hover">{project.role[locale]}</p>}
        <p className="description">{project.description[locale]}</p>
        <Link className="home-project-details-link mt-[10px] min-h-10 items-center gap-[6px] border-b border-accent text-xs font-semibold text-foreground hover:text-accent-hover" href={"/projects#project-" + project.slug} aria-label={project.name + ": " + t.details}>{t.details} <ArrowRight /></Link>
      </div>
    </article>
  );
}

function ProjectVisual({ project, locale }: { project: Project; locale: Locale }) {
  const isPt = locale === "pt";
  const visualClass = "project-visual my-6 flex min-h-[270px] min-w-0 flex-col rounded-[16px] border border-line bg-surface-inset px-[30px] pt-[27px] pb-5 max-[900px]:mt-[22px] max-[900px]:mb-9 max-[540px]:min-h-[260px] max-[540px]:p-[22px]";
  if (!project.visual) return null;

  if (project.visual === "tracksafe") {
    const steps = isPt
      ? [
          { title: "Disponibilidade", detail: "horários e planos" },
          { title: "Reserva", detail: "bateria de drift" },
          { title: "Pagamento", detail: "Pix via AbacatePay" },
        ]
      : [
          { title: "Availability", detail: "schedules and plans" },
          { title: "Booking", detail: "drift kart session" },
          { title: "Payment", detail: "Pix via AbacatePay" },
        ];
    return (
      <figure className={`${visualClass} project-visual--tracksafe`} aria-labelledby="tracksafe-visual-caption">
        <ol className="project-flow">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div><strong>{step.title}</strong><small>{step.detail}</small></div>
              {index < steps.length - 1 && <span className="project-flow__arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
        <figcaption id="tracksafe-visual-caption">
          {isPt
            ? "Fluxo conceitual da API: consultar horários, reservar uma bateria e seguir ao pagamento."
            : "Conceptual API flow: check schedules, book a session, then continue to payment."}
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "nomuz") {
    return (
      <figure className={`${visualClass} project-visual--nomuz`} aria-labelledby="nomuz-visual-caption">
        <div className="nomuz-map">
          <div className="nomuz-map__people">
            <span>{isPt ? "advogados" : "lawyers"}</span>
            <span>{isPt ? "clientes" : "clients"}</span>
            <span>{isPt ? "associados" : "associates"}</span>
          </div>
          <span className="nomuz-map__connector" aria-hidden="true">↓</span>
          <strong className="nomuz-map__case">{isPt ? "caso jurídico" : "legal case"}</strong>
          <div className="nomuz-map__outcomes">
            <span>{isPt ? "gestão do caso" : "case management"}</span>
            <span>{isPt ? "conversa em tempo real" : "real-time conversation"}</span>
          </div>
        </div>
        <figcaption id="nomuz-visual-caption">
          {isPt
            ? "Modelo conceitual das pessoas e atividades ligadas a um caso; não representa uma tela do produto."
            : "Conceptual map of the people and activities around a case; this is not a product screenshot."}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={`${visualClass} project-visual--deepy`} aria-labelledby="deepy-visual-caption">
      <video
        className="project-visual__video"
        controls
        preload="auto"
        playsInline
        aria-label={isPt ? "Vídeo de apresentação do DeepY" : "DeepY presentation video"}
      >
        <source src="/projects/deepy-demo-mobile.mp4" type="video/mp4" media="(max-width: 540px)" />
        <source src="/projects/deepy-demo.mp4" type="video/mp4" />
        {isPt ? "Seu navegador não oferece suporte à reprodução de vídeo." : "Your browser does not support video playback."}
      </video>
      <figcaption id="deepy-visual-caption">
        {isPt ? "Vídeo de apresentação do DeepY." : "DeepY presentation video."}
      </figcaption>
    </figure>
  );
}

export function ProjectCard({ project, locale, variant }: { project: Project; locale: Locale; variant: "featured" | "archive" }) {
  const t = copy[locale].contact;
  const featured = variant === "featured";
  const linksClass = "flex flex-wrap gap-[18px] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-2 [&_a]:border-b [&_a]:border-accent [&_a]:text-[13px] [&_a]:font-bold [&_a]:text-foreground [&_a:hover]:text-accent-hover";
  return (
    <article data-motion-item className={`${featured ? "grid min-w-0 scroll-mt-24 grid-cols-[minmax(0,1fr)_minmax(330px,0.86fr)] items-center gap-[clamp(24px,4vw,64px)] border-b border-line max-[900px]:grid-cols-1 max-[900px]:gap-0" : "block min-w-0 scroll-mt-24 border-b border-line"} motion-item`} id={`project-${project.slug}`}>
      <div className={featured ? "flex min-w-0 flex-col py-[42px] max-[900px]:pb-0" : "grid min-w-0 grid-cols-[minmax(170px,0.55fr)_minmax(0,1fr)] gap-x-[42px] gap-y-3 py-7 max-[540px]:grid-cols-1"}>
        <div className="col-span-full"><span className="project-category text-[11px] font-bold tracking-[0.09em] text-copy-muted">{project.category[locale]}</span></div>
        <h3 className={featured ? "mt-5 mb-[7px] text-[clamp(28px,2.7vw,38px)] leading-[1.1] font-[650] tracking-[-0.065em] max-[540px]:text-4xl" : "m-0 text-[clamp(28px,2.7vw,38px)] leading-[1.1] font-[650] tracking-[-0.065em] max-[540px]:text-4xl"}>{project.name}</h3>
        {project.role && <p className={featured ? "mb-5 text-[13px] font-bold text-accent" : "col-start-1 m-0 text-[13px] font-bold text-accent"}>{project.role[locale]}</p>}
        <p className={featured ? "description" : "description col-start-2 max-[540px]:col-start-1"}>{project.description[locale]}</p>
        {project.detail && <p className={featured ? "description-detail mt-[10px] mb-0 max-w-[640px]" : "description-detail col-start-2 mt-[10px] mb-0 max-w-[640px] max-[540px]:col-start-1"}>{project.detail[locale]}</p>}
        <div className={featured ? "pt-6" : "col-start-2 pt-1 max-[540px]:col-start-1"}>
          <div className="flex flex-wrap gap-[7px]" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>{project.tech.map((tech) => <TechBadge name={tech} key={tech} />)}</div>
          <div className={`${featured ? "mt-[26px]" : "mt-3"} ${linksClass}`}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.repo}`}>{t.repo} <ArrowUpRight /></a>
            {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.live}`}>{t.live} <ArrowUpRight /></a>}
          </div>
        </div>
      </div>
      <ProjectVisual project={project} locale={locale} />
    </article>
  );
}

export function ContactPanel({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <div data-motion-item className="contact-panel motion-item grid grid-cols-[1fr_230px] overflow-hidden rounded-[24px] border border-line bg-surface-elevated max-[760px]:grid-cols-1">
      <div className="relative min-w-0 p-[clamp(28px,4vw,52px)] max-[540px]:p-[26px]">
        <div className="mb-4"><p className="description">{t.contact.message}</p></div>
        <a className="inline-block max-w-full border-b-2 border-accent pb-2 text-[clamp(22px,3.2vw,42px)] font-medium tracking-[-0.035em] [overflow-wrap:anywhere] hover:text-accent-hover max-[540px]:text-[clamp(19px,5.8vw,29px)]" href={`mailto:${site.email}`}>{site.email}</a>
        <EmailCopy locale={locale} />
      </div>
      <div className="flex flex-col justify-end border-l border-line p-6 [&_a]:flex [&_a]:min-h-[54px] [&_a]:items-center [&_a]:justify-between [&_a]:gap-3 [&_a]:border-b [&_a]:border-line [&_a]:text-sm [&_a]:font-semibold [&_a:last-child]:border-0 [&_a:hover]:text-accent-hover max-[760px]:border-t max-[760px]:border-l-0">
        <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
        <a href={site.resume} download="Curriculo-Vitor-de-Castro-Buzato.pdf">{t.contact.resumeDownload} <ArrowDown /></a>
      </div>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer data-motion-item className="motion-item shell flex min-h-[94px] flex-wrap items-center justify-between gap-[15px] border-t border-line-soft text-xs text-copy-muted max-[540px]:py-[26px]">
      <p className="m-0">{t.footer}</p>
      <nav className="flex gap-[22px] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a:hover]:text-foreground" aria-label={locale === "pt" ? "Links do rodapé" : "Footer links"}>
        <Link href="/">{t.nav.home}</Link>
        <Link href="/projects">{t.nav.projects}</Link>
        <a href={`mailto:${site.email}`}>{t.nav.contact}</a>
      </nav>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

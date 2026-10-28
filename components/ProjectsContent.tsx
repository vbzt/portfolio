"use client";

import { ProjectCard } from "@/components/PortfolioBlocks";
import { archiveProjects, copy, projectPageProjects } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

export function ProjectsContent() {
  const { locale: lang } = useLanguage();
  const t = copy[lang];
  return (
    <main id="main-content" className="projects-page shell pt-[72px] pb-[120px] max-[760px]:pt-[54px]">
      <header data-motion-item className="motion-item pb-9">
        <h1 className="m-0 text-[clamp(40px,4.5vw,64px)] leading-[1.1] font-semibold tracking-[-0.04em] max-[540px]:text-[clamp(36px,9vw,46px)]">{t.projectsPage.title}</h1>
      </header>

      <nav data-motion-item className="motion-item flex flex-wrap gap-x-8 border-t border-line [&_a]:inline-flex [&_a]:min-h-[54px] [&_a]:items-center [&_a]:text-[13px] [&_a]:font-semibold [&_a]:text-copy-secondary [&_a:hover]:text-foreground max-[540px]:gap-x-[19px] max-[540px]:[&_a]:min-h-[46px]" aria-label={t.projectsPage.indexLabel}>
        {projectPageProjects.map((project) => (
          <a href={`#project-${project.slug}`} key={project.slug}>{project.name}</a>
        ))}
        <a href="#archive">{t.contact.archive}</a>
      </nav>

      <section aria-labelledby="selected-heading">
        <h2 id="selected-heading" className="sr-only">{t.sections.projects.title}</h2>
        <div className="min-w-0 border-t border-line">
          {projectPageProjects.map((project) => <ProjectCard project={project} locale={lang} variant="featured" key={project.slug} />)}
        </div>
      </section>

      <section id="archive" aria-labelledby="archive-heading" className="scroll-mt-24 pt-[104px]">
        <div className="mb-[26px]"><h2 className="m-0 text-[clamp(30px,3.2vw,44px)] leading-[1.14] tracking-[-0.035em]" id="archive-heading">{t.contact.archive}</h2></div>
        <div className="border-t border-line">{archiveProjects.map((project) => <ProjectCard project={project} locale={lang} variant="archive" key={project.slug} />)}</div>
      </section>
    </main>
  );
}

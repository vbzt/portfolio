"use client";

import { ContactPanel, HomeProjectRow, SectionHeading, TechBadge } from "@/components/PortfolioBlocks";
import { HomeHero } from "./HomeHero";
import { copy, selectedProjects, site } from "@/lib/portfolio";
import { useLanguage } from "./LanguageProvider";

const sectionClass = "scroll-mt-[100px] pt-[168px] max-[760px]:scroll-mt-[125px] max-[760px]:pt-[120px]";
const shortSectionClass = "scroll-mt-[100px] pt-36 max-[760px]:scroll-mt-[125px] max-[540px]:pt-28";
const projectsSectionClass = "scroll-mt-[100px] pt-20 max-[760px]:scroll-mt-[125px] max-[540px]:pt-14";

export function HomeContent() {
  const { locale: lang } = useLanguage();
  const t = copy[lang];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.github, site.linkedin],
    alumniOf: { "@type": "EducationalOrganization", name: "FIAP" },
    knowsAbout: ["Software development", "Backend development", "TypeScript", "NestJS", "APIs"],
  };

  return (
    <main id="main-content" className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <HomeHero locale={lang} />

      <section className={`home-section ${projectsSectionClass}`} id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" title={t.sections.projects.title} intro={t.sections.projects.intro} action={t.sections.projects.all} href="/projects" />
        <div className="border-t border-line">
          {selectedProjects.map((project) => <HomeProjectRow key={project.slug} project={project} locale={lang} />)}
        </div>
      </section>

      <section className={`home-section ${shortSectionClass}`} id="capabilities" aria-labelledby="capabilities-title">
        <SectionHeading id="capabilities-title" title={t.sections.capabilities.title} intro={t.sections.capabilities.intro} />
        <div className="border-t border-line">
          {t.capabilities.map((capability) => (
            <article data-motion-item className="editorial-row motion-item border-b border-line py-12 max-[540px]:py-9" key={capability.title}>
              <div className="flex items-start">
                <h3 className="home-item-title min-w-0">{capability.title}</h3>
              </div>
              <div className="min-w-0">
                <p className="description">{capability.text}</p>
                <ul className="home-tech-badges" aria-label={lang === "pt" ? "Tecnologias" : "Technologies"}>
                  {capability.tech.map((tech) => <li key={tech}><TechBadge name={tech} /></li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`home-section ${sectionClass}`} id="about" aria-labelledby="about-title">
        <SectionHeading id="about-title" title={t.sections.about.title} />
        <div className="border-t border-line">
          {t.journey.map((item) => (
            <article data-motion-item className="editorial-row motion-item border-b border-line pt-14 pb-16 max-[540px]:pt-10 max-[540px]:pb-12" key={item.label}>
              <div>
                <span className="text-xs font-medium text-copy-muted">{item.label}</span>
                <h3 className="home-item-title mt-4 max-w-[480px] max-[540px]:mt-3">{item.title}</h3>
              </div>
              <p className="description">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`home-section ${sectionClass} pb-[118px]`} id="contact" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" title={t.sections.contact.title} intro={t.sections.contact.intro} />
        <ContactPanel locale={lang} />
      </section>
    </main>
  );
}

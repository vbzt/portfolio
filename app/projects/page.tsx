"use client"
import Card from "@/components/Card";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

const Projects = () => {
  const { lang } = useLang();
  const text = t[lang].projectsPage;

  return (
    <div className="min-h-screen flex items-center justify-center px-3 py-8">
      <div className="grid gap-2.5 max-w-[950px] w-full">

        <Card variant="project" {...text.nomuz} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
          <Card variant="project" {...text.crumbly} className="h-full" />
          <Card variant="project" {...text.any2any} className="h-full" />
        </div>  

        <Card variant="project" {...text.ecoleaf} />

      </div>
    </div>
  )
}

export default Projects
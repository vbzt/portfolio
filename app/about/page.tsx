"use client"
import Card from "@/components/Card";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

const About = () => {
  const { lang } = useLang();
  const text = t[lang].aboutPage;

  return (
  <div className="min-h-screen flex items-center justify-center px-3 py-8">
    <div className="grid gap-2.5 max-w-[950px] w-full">

      <Card variant="nav" category={text.intro.category} title={text.intro.title} description={text.intro.description} />

      <div className="grid grid-cols-2 gap-2.5 items-stretch">
        <Card variant="nav" category={text.start.category} title={text.start.title} description={text.start.description} className="h-full" />
        <div className="flex flex-col gap-2.5">
          <Card variant="nav" category={text.passion.category} title={text.passion.title} description={text.passion.description} />
          <Card variant="nav" category={text.nestjs.category} title={text.nestjs.title} description={text.nestjs.description} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Card variant="nav" category={text.web.category} title={text.web.title} description={text.web.description} />
        <Card variant="nav" category={text.education.category} title={text.education.title} description={text.education.description} />
      </div>

    </div>
  </div>
)
}

export default About
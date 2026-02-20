"use client"
import { FiCode, FiFileText, FiMail, FiUser } from "react-icons/fi";
import Card from "@/components/Card";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

const Portfolio = () => {
  const { lang } = useLang();
  const text = t[lang];

  const handleEmailCopy = async () => {
    await navigator.clipboard.writeText('vitorcastrobuzato@gmail.com')
    toast.success(text.emailCopied, { duration: 1800 })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="grid gap-2.5 max-w-[950px] w-full">
        <Card
          variant="main"
          name="Vitor de C. Buzato"
          description={text.description}
          github="https://github.com/vbzt"
          linkedin="https://linkedin.com/in/vitor-buzato"
        />
        <div className="grid grid-cols-2 gap-2.5 items-stretch">
          <div className="flex flex-col gap-2.5">
            <Card
              variant="nav"
              icon={<FiUser/>}
              category={text.about.category}
              title={text.about.title}
              description={text.about.description}
              href="/about"
            />
            <Card
              variant="nav"
              icon={<FiFileText />}
              category={text.resume.category}
              title={text.resume.title}
              description={text.resume.description}
              href={text.resume.url}
              target="_blank"

            />
          </div>
          <Card
            variant="nav"
            icon={<FiCode />}
            category={text.projects.category}
            title={text.projects.title}
            description={text.projects.description}
            href="/projects"
            className="h-full"
          />
        </div>
        <Card
          variant="nav"
          icon={<FiMail />}
          category={text.contact.category}
          title={text.contact.title}
          description={text.contact.description}
          onClick={handleEmailCopy}
        />
      </div>
    </div>
  )
}

export default Portfolio
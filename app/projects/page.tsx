"use client"
import Card from "@/components/Card";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";

const Projects = () => {
  const { lang } = useLang();
  const text = t[lang].projectsPage;
  const { ref, isVisible, staggerDelay } = useStaggerAnimation();

  return (
    <div className="min-h-screen flex items-center justify-center px-3 py-8">
      <div ref={ref} className="grid gap-2.5 max-w-[1200px] w-full">
        <div
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 400ms ease-out ${staggerDelay * 0}ms, transform 400ms ease-out ${staggerDelay * 0}ms`
          }}
        >
          <Card variant="project" {...text.nomuz} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 400ms ease-out ${staggerDelay * 1}ms, transform 400ms ease-out ${staggerDelay * 1}ms`
            }}
          >
            <Card variant="project" {...text.crumbly} className="h-full" />
          </div>
          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 400ms ease-out ${staggerDelay * 2}ms, transform 400ms ease-out ${staggerDelay * 2}ms`
            }}
          >
            <Card variant="project" {...text.any2any} className="h-full" />
          </div>
        </div>

        <div
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 400ms ease-out ${staggerDelay * 3}ms, transform 400ms ease-out ${staggerDelay * 3}ms`
          }}
        >
          <Card variant="project" {...text.ecoleaf} />
        </div>
      </div>
    </div>
  )
}

export default Projects
"use client"
import Card from "@/components/Card";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";

const About = () => {
  const { lang } = useLang();
  const text = t[lang].aboutPage;
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
          <Card 
            variant="nav" 
            category={text.intro.category} 
            title={text.intro.title} 
            description={text.intro.description} 
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 items-stretch">
          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 400ms ease-out ${staggerDelay * 1}ms, transform 400ms ease-out ${staggerDelay * 1}ms`
            }}
          >
            <Card 
              variant="nav" 
              category={text.start.category} 
              title={text.start.title} 
              description={text.start.description} 
              className="h-full" 
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 400ms ease-out ${staggerDelay * 2}ms, transform 400ms ease-out ${staggerDelay * 2}ms`
              }}
            >
              <Card 
                variant="nav" 
                category={text.passion.category} 
                title={text.passion.title} 
                description={text.passion.description} 
              />
            </div>
            <div
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 400ms ease-out ${staggerDelay * 3}ms, transform 400ms ease-out ${staggerDelay * 3}ms`
              }}
            >
              <Card 
                variant="nav" 
                category={text.nestjs.category} 
                title={text.nestjs.title} 
                description={text.nestjs.description} 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 400ms ease-out ${staggerDelay * 4}ms, transform 400ms ease-out ${staggerDelay * 4}ms`
            }}
          >
            <Card 
              variant="nav" 
              category={text.web.category} 
              title={text.web.title} 
              description={text.web.description} 
            />
          </div>
          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 400ms ease-out ${staggerDelay * 5}ms, transform 400ms ease-out ${staggerDelay * 5}ms`
            }}
          >
            <Card 
              variant="nav" 
              category={text.education.category} 
              title={text.education.title} 
              description={text.education.description} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
"use client"
import { useLang } from "@/context/LanguageContext"
import { t } from "@/lib/i18n"
import { usePathname, useRouter } from "next/navigation"
import { FiChevronLeft } from "react-icons/fi"

const Header = () => {
  const { lang, toggleLang } = useLang()
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 px-4 py-4 sm:px-12 sm:py-6 z-50 flex items-center justify-between">
      {!isHome
        ? (
          <button 
            onClick={() => router.back()} 
            className="flex cursor-pointer items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer group"
          >
            <FiChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="hidden sm:inline">{t[lang].back}</span>
          </button>
        )
        : <span />
      }
      <button 
        onClick={toggleLang} 
        className="px-3 cursor-pointer py-1.5 text-sm text-neutral-400 hover:text-white border border-[#2e2e2e] hover:border-[#3a3a3a] rounded-lg transition-all duration-200 hover:bg-gradient-to-br hover:from-[#212121] hover:via-[#1c1c1c] hover:to-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-md"
      >
        {lang === "en" ? "PT-BR" : "EN"}
      </button>
    </header>
  )
}

export default Header
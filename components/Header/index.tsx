"use client"
import { useLang } from "@/context/LanguageContext"
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
        ? <button onClick={() => router.back()} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"><FiChevronLeft size={18} /></button>
        : <span />
      }
      <button onClick={toggleLang} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
        {lang === "en" ? "PT-BR" : "EN"}
      </button>
    </header>
  )
}

export default Header
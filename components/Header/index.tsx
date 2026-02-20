"use client"
import { useLang } from "@/context/LanguageContext"

const Header = () => {
  const { lang, toggleLang } = useLang()

  return (
    <header className="fixed top-0 right-0 p-4 z-50">
      <button
        onClick={toggleLang}
        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
      >
        {lang === "en" ? "PT-BR" : "EN"}
      </button>
    </header>
  )
}

export default Header
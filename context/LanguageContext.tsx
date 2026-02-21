"use client"
import { createContext, useContext, useState, useEffect } from "react"

type Lang = "en" | "pt"
type LanguageContextType = { lang: Lang; toggleLang: () => void }

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType)

export const LanguageProvider = ({ children, defaultLang }: { children: React.ReactNode, defaultLang: Lang }) => {
  const [lang, setLang] = useState<Lang>(defaultLang)

  const toggleLang = () => {
    const next = lang === "en" ? "pt" : "en"
    setLang(next)
    document.cookie = `lang=${next}; path=/; max-age=31536000`
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
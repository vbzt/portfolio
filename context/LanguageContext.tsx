"use client"
import { createContext, useContext, useState, useEffect } from "react"

type Lang = "en" | "pt"
type LanguageContextType = { lang: Lang; toggleLang: () => void }

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang
    if (stored) setLang(stored)
  }, [])

  const toggleLang = () => {
    const next = lang === "en" ? "pt" : "en"
    setLang(next)
    localStorage.setItem("lang", next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
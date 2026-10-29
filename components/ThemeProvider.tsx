"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ColorMode = "light" | "dark";

type ThemeContextValue = {
  mode: ColorMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const modeStorageKey = "portfolio-theme";

function isColorMode(value: string | null): value is ColorMode {
  return value === "light" || value === "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let savedMode: ColorMode = "light";
    const root = document.documentElement;

    if (isColorMode(root.dataset.theme)) {
      savedMode = root.dataset.theme;
    } else {
      try {
        const modeValue = window.localStorage.getItem(modeStorageKey);
        if (isColorMode(modeValue)) savedMode = modeValue;
      } catch {
        // Keep the default theme when browser storage is unavailable.
      }
    }

    root.dataset.theme = savedMode;
    delete root.dataset.darkPalette;
    setMode(savedMode);
    setReady(true);
    const timer = window.setTimeout(() => { delete root.dataset.themePending; }, 220);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = document.documentElement;
    root.dataset.theme = mode;
    delete root.dataset.darkPalette;

    try {
      window.localStorage.setItem(modeStorageKey, mode);
    } catch {
      // Keep the current theme usable when browser storage is unavailable.
    }
  }, [mode, ready]);

  function toggleMode() {
    setMode((current) => current === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className="theme-content">{children}</div>
      <div className="theme-loading" role="status" aria-label="Carregando portfólio">
        <span className="theme-loading__spinner" aria-hidden="true" />
        <span className="sr-only">Carregando portfólio</span>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}

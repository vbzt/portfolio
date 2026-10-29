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

    try {
      const modeValue = window.localStorage.getItem(modeStorageKey);
      if (isColorMode(modeValue)) savedMode = modeValue;
    } catch {
      // Keep the default theme when browser storage is unavailable.
    }

    document.documentElement.dataset.theme = savedMode;
    delete document.documentElement.dataset.darkPalette;
    setMode(savedMode);
    setReady(true);
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
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}

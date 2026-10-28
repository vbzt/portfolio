"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/portfolio";

type Density = "focus" | "airy" | "hybrid";
type Motion = "feedback" | "gentle" | "staggered";
type Settings = { density: Density; motion: Motion };
type DesignContextValue = { settings: Settings; update: <K extends keyof Settings>(key: K, value: Settings[K]) => void };

const settingsKey = "portfolio-design-preview-v2";
const defaults: Settings = { density: "hybrid", motion: "staggered" };
const DesignContext = createContext<DesignContextValue>({ settings: defaults, update: () => {} });
let currentSettings = defaults;
let initialized = false;
const listeners = new Set<() => void>();

function isDensity(value: unknown): value is Density { return value === "focus" || value === "airy" || value === "hybrid"; }
function isMotion(value: unknown): value is Motion { return value === "feedback" || value === "gentle" || value === "staggered"; }
function getClientSettings(): Settings {
  if (process.env.NODE_ENV !== "development") return defaults;
  if (initialized) return currentSettings;
  initialized = true;
  try {
    const stored = JSON.parse(window.localStorage.getItem(settingsKey) ?? "{}") as Partial<Settings>;
    currentSettings = {
      density: isDensity(stored.density) ? stored.density : defaults.density,
      motion: isMotion(stored.motion) ? stored.motion : defaults.motion,
    };
  } catch {
    currentSettings = defaults;
  }
  return currentSettings;
}

function getServerSettings() { return defaults; }
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function updateStoredSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
  currentSettings = { ...getClientSettings(), [key]: value };
  try {
    window.localStorage.setItem(settingsKey, JSON.stringify(currentSettings));
  } catch {
    // Keep the current preview usable when local storage is unavailable.
  }
  listeners.forEach((listener) => listener());
}

export function usePortfolioDesign() {
  return useContext(DesignContext);
}

export function PortfolioDesignProvider({ children }: { children: ReactNode }) {
  const settings = useSyncExternalStore(subscribe, getClientSettings, getServerSettings);
  const pathname = usePathname();
  const development = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!development) return;
    const root = document.documentElement;
    delete root.dataset.theme;
    root.dataset.density = settings.density;
    root.dataset.motion = settings.motion;
  }, [development, settings.density, settings.motion]);

  useEffect(() => {
    if (!development) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-item]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (settings.motion === "feedback" || reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => { node.dataset.revealed = "true"; });
      return;
    }
    nodes.forEach((node) => { node.dataset.revealed = "false"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.revealed = "true";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -4% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [development, pathname, settings.motion]);

  const update = updateStoredSetting;
  return <DesignContext.Provider value={{ settings, update }}>{children}</DesignContext.Provider>;
}

export function DevDesignPanel({ locale }: { locale: Locale }) {
  const { settings, update } = usePortfolioDesign();
  if (process.env.NODE_ENV !== "development") return null;

  const pt = locale === "pt";
  return (
    <details className="dev-design-panel">
      <summary>{pt ? "Comparar visual" : "Design preview"}</summary>
      <div className="dev-design-panel__controls">
        <label>
          <span>{pt ? "Densidade" : "Density"}</span>
          <select value={settings.density} onChange={(event) => update("density", event.target.value as Density)}>
            <option value="focus">{pt ? "Mais seletiva" : "Focused"}</option>
            <option value="hybrid">{pt ? "Meio-termo" : "Balanced"}</option>
            <option value="airy">{pt ? "Mais respiro" : "Airier"}</option>
          </select>
        </label>
        <label>
          <span>{pt ? "Movimento" : "Motion"}</span>
          <select value={settings.motion} onChange={(event) => update("motion", event.target.value as Motion)}>
            <option value="feedback">{pt ? "Só feedback" : "Feedback only"}</option>
            <option value="gentle">{pt ? "Entradas sutis" : "Subtle reveals"}</option>
            <option value="staggered">{pt ? "Entradas escalonadas" : "Staggered reveals"}</option>
          </select>
        </label>
      </div>
      <p className="dev-design-panel__note">{pt ? "Somente desenvolvimento · preferências salvas neste navegador" : "Development only · saved in this browser"}</p>
    </details>
  );
}

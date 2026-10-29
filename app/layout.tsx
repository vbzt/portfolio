import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/portfolio";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-ibm-plex-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-motion="staggered" suppressHydrationWarning>
      <body className={ibmPlexSans.variable}>
        <Script id="portfolio-theme-bootstrap" strategy="beforeInteractive">
          {`try {
            const savedTheme = localStorage.getItem("portfolio-theme");
            if (savedTheme === "light" || savedTheme === "dark") {
              document.documentElement.dataset.theme = savedTheme;
            }
          } catch {}
          document.documentElement.dataset.themePending = "true";`}
        </Script>
        <ThemeProvider>
          <LanguageProvider><SiteChrome>{children}</SiteChrome></LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

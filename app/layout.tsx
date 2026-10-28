import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";
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
    <html lang="pt-BR">
      <body className={ibmPlexSans.variable}>
        <LanguageProvider><SiteChrome>{children}</SiteChrome></LanguageProvider>
      </body>
    </html>
  );
}

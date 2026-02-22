import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitor Buzato",
  description: "Full-Stack developer & Software Engineering student @FIAP.",
  openGraph: {
    title: "Vitor Buzato",
    description: "Full-Stack developer & Software Engineering student @FIAP.",
    url: "https://bzt.vercel.app",
    siteName: "Vitor Buzato",
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const lang = (cookieStore.get("lang")?.value ?? "en") as "en" | "pt"

  return (
    <html lang={lang}>
      <body className={`${workSans.variable} antialiased`}>
        <Toaster
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#a1a1aa',
              border: '1px solid #2e2e2e',
              borderRadius: '12px',
              padding: '8px 12px',
              boxShadow: 'none',
              fontSize: '13px',
              maxWidth: 'fit-content',
            },
            success: {
              iconTheme: {
                primary: '#2e2e2e',
                secondary: '#a1a1aa',
              },
            },
          }}
          position="bottom-right"
          reverseOrder={false}
        />
        <LanguageProvider defaultLang={lang}>
          <Header />
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
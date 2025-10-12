import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://summari.fi"),
  title: {
    default: "Summari - Ainutlaatuiset Korut",
    template: "%s | Summari",
  },
  description:
    "Löydä täydellinen koru Summari-kokoelmasta. Laadukkaat ja tyylikkäät korut jokaiseen hetkeen. Nopea toimitus Suomeen.",
  keywords: ["korut", "kaulakorut", "jewelry", "necklaces", "summari", "verkkokauppa"],
  authors: [{ name: "Summari" }],
  creator: "Summari",
  publisher: "Summari",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://summari.fi",
    siteName: "Summari",
    title: "Summari - Ainutlaatuiset Korut",
    description: "Löydä täydellinen koru Summari-kokoelmasta. Laadukkaat ja tyylikkäät korut jokaiseen hetkeen.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summari Korut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summari - Ainutlaatuiset Korut",
    description: "Löydä täydellinen koru Summari-kokoelmasta. Laadukkaat ja tyylikkäät korut jokaiseen hetkeen.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

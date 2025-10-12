"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/20 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              SUMMARI
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t("footerDescription")}</p>
          </div>

          <div id="meista">
            <h4 className="font-semibold mb-6 text-lg">{t("aboutUs")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-accent inline-flex items-center gap-2">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-accent inline-flex items-center gap-2">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div id="yhteystiedot">
            <h4 className="font-semibold mb-6 text-lg">{t("contactInfo")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:tuki@summari.fi" className="hover:text-accent transition-colors">
                  tuki@summari.fi
                </a>
              </li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="transition-all hover:text-accent hover:scale-110 inline-flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="transition-all hover:text-accent hover:scale-110 inline-flex items-center gap-2">
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Summari. {t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

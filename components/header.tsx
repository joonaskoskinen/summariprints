"use client"

import { ShoppingCart, Languages, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const { totalItems, openCart } = useCart()
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <h1
              className="font-serif text-3xl font-bold tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-gold group-hover:bg-clip-text"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              SUMMARI
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#tuotteet"
            className="text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-accent after:to-gold after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("products")}
          </a>
          <Link
            href="/about"
            className="text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-accent after:to-gold after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("about")}
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-accent after:to-gold after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("faq")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "fi" ? "en" : "fi")}
            className="gap-2 hover:bg-accent/10 hover:text-accent transition-all duration-300"
          >
            <Languages className="h-4 w-4" />
            <span className="text-xs font-semibold">{language.toUpperCase()}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-accent/10 hover:text-accent transition-all duration-300"
            onClick={openCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-gold text-xs font-bold text-white shadow-lg animate-pulse">
                {totalItems}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent/10 hover:text-accent transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="/#tuotteet"
              className="text-lg font-medium transition-colors hover:text-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("products")}
            </a>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/faq"
              className="text-lg font-medium transition-colors hover:text-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("faq")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

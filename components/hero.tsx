"use client"

import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-gold/5" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80 font-medium mb-8 fade-in">
            {t("heroSubtitle")}
          </p>

          <h2
            className="font-serif text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl mb-8 fade-in-up bg-gradient-to-br from-foreground via-foreground to-accent/80 bg-clip-text"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.2s" }}
          >
            {t("heroTitle")}
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl lg:text-2xl leading-relaxed mb-12 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("heroDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#tuotteet"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary via-primary to-accent/90 px-12 py-5 text-base font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden"
            >
              <span className="relative z-10">{t("viewCollection")}</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

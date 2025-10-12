"use client"

import { useLanguage } from "@/contexts/language-context"
import { Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div
        className="absolute inset-0 -z-10 gradient-mesh opacity-40"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-gold/10 rounded-full blur-3xl float-animation" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-warm-gold/10 rounded-full blur-3xl float-animation"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-gold/20 to-warm-gold/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-accent mb-8 shine-effect ${isVisible ? "scale-in" : "opacity-0"}`}
          >
            <Sparkles className="h-4 w-4" />
            {t("newArrivals")}
          </div>

          <h2
            className={`font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl mb-6 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.1s" }}
          >
            {t("heroTitle")}
          </h2>
          <p
            className={`mx-auto max-w-2xl text-base text-muted-foreground text-pretty md:text-lg lg:text-xl leading-relaxed mb-10 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {t("heroDescription")}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#tuotteet"
              className="ripple-effect shine-effect inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-gold to-warm-gold px-10 py-4 text-base font-medium text-white transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              {t("viewCollection")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

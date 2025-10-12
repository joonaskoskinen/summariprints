"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"

export function ProductGrid() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tuotteet" className="py-16 md:py-24 texture-dots relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2
            className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 ${isVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t("productsTitle")}
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            {t("heroDescription")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

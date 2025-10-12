"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { useLanguage } from "@/contexts/language-context"

export function ProductGrid() {
  const { t } = useLanguage()

  return (
    <section id="tuotteet" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2
            className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t("productsTitle")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("heroDescription")}</p>
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

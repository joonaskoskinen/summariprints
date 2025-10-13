"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import { ShoppingBag } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const productName = t(`product${product.id}Name`)
  const productDesc = t(`product${product.id}Desc`)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={cardRef}
      className={`shine-effect group overflow-hidden transition-all hover:shadow-xl hover:shadow-rose-gold/20 border-border/50 hover:border-rose-gold/30 ${isVisible ? "fade-in-up" : "opacity-0"}`}
    >
      <Link href={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-soft-pink to-muted/30">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={productName}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div className="w-full space-y-2">
          <Link href={`/product/${product.id}`}>
            <h3
              className="font-serif text-2xl font-semibold hover:text-rose-gold transition-colors"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {productName}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{productDesc}</p>
          <p className="text-2xl font-bold text-rose-gold pt-2">
            {t("priceFrom")} {product.price}
          </p>
        </div>
        <Button
          className="w-full bg-gradient-to-r from-rose-gold to-warm-gold text-white hover:shadow-lg hover:shadow-rose-gold/30 h-11 gap-2 transition-all hover:scale-[1.02]"
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          {t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  )
}

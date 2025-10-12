"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import { ShoppingBag, Eye } from "lucide-react"
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
      className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 border-border/50 hover:border-accent/30 ${isVisible ? "fade-in-up" : "opacity-0"}`}
    >
      <Link href={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/30 to-accent/5">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={productName}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                <Eye className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div className="w-full space-y-2">
          <Link href={`/product/${product.id}`}>
            <h3
              className="font-serif text-2xl font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-gold group-hover:bg-clip-text"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {productName}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{productDesc}</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent pt-2">
            {product.price}
          </p>
        </div>
        <Button
          className="w-full bg-gradient-to-r from-primary to-accent/90 text-primary-foreground hover:from-accent hover:to-gold h-12 gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 group/btn"
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
          {t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  )
}

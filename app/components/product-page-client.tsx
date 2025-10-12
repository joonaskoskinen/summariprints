"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Check, Package, Truck, Shield, Heart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import type { Product, ProductDetails } from "@/lib/types"
import { ProductImageGallery } from "@/components/product-image-gallery"

interface ProductPageClientProps {
  product: Product
  details: ProductDetails
}

export function ProductPageClient({ product, details }: ProductPageClientProps) {
  const { addItem } = useCart()
  const { t, language } = useLanguage()
  const [isAdded, setIsAdded] = useState(false)

  const productName = t(`product${product.id}Name`)
  const productDesc = t(`product${product.id}Desc`)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {language === "fi" ? "Takaisin kauppaan" : "Back to shop"}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ProductImageGallery images={details.images} productName={productName} />

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1
                className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {productName}
              </h1>
              <p className="text-3xl lg:text-4xl font-bold text-accent mb-6">{product.price}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{productDesc}</p>
            </div>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full text-base h-12 transition-all"
              disabled={isAdded}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  {language === "fi" ? "Lisätty!" : "Added!"}
                </>
              ) : (
                t("addToCart")
              )}
            </Button>

            <div className="grid grid-cols-3 gap-4 py-6 border-y">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-accent" />
                <span className="text-xs text-muted-foreground">
                  {language === "fi" ? "Nopea toimitus" : "Fast shipping"}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-xs text-muted-foreground">
                  {language === "fi" ? "Turvallinen maksu" : "Secure payment"}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                <span className="text-xs text-muted-foreground">{language === "fi" ? "Laadukas" : "Quality"}</span>
              </div>
            </div>

            <Card className="p-6 space-y-6 bg-muted/30">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Package className="h-4 w-4 text-accent" />
                  {language === "fi" ? "Materiaalit" : "Materials"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{details.materials}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{language === "fi" ? "Hoito-ohjeet" : "Care Instructions"}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{details.care}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{language === "fi" ? "Toimitus" : "Shipping"}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{details.shipping}</p>
              </div>
            </Card>

            <div>
              <h3 className="font-semibold mb-4">{language === "fi" ? "Ominaisuudet" : "Features"}</h3>
              <ul className="space-y-3">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

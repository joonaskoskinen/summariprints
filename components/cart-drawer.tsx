"use client"

import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, X, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart()
  const { t } = useLanguage()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {t("cart")}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <div className="rounded-full bg-muted p-6 mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("emptyCartTitle")}</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">{t("emptyCartMessage")}</p>
            <div className="space-y-3 w-full max-w-xs">
              <Button onClick={closeCart} className="w-full" size="lg">
                <Sparkles className="mr-2 h-4 w-4" />
                {t("discoverProducts")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.selectedSize || ""}-${index}`} className="flex gap-4 border-b pb-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{t(`product${item.id}Name`)}</h3>
                          {item.selectedSize && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {t("size")}: {item.selectedSize}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeItem(item.id, item.selectedSize)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1">
                        {(item.priceInCents / 100).toFixed(2).replace(".", ",")} €
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>{t("total")}</span>
                <span>{totalPrice.toFixed(2).replace(".", ",")} €</span>
              </div>

              <Link href="/checkout" onClick={closeCart}>
                <Button className="w-full" size="lg">
                  {t("checkout")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
"use client"

import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, X, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart()
  const { t } = useLanguage()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {t("cart")}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <div className="rounded-full bg-muted p-6 mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("emptyCartTitle")}</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">{t("emptyCartMessage")}</p>
            <div className="space-y-3 w-full max-w-xs">
              <Button onClick={closeCart} className="w-full" size="lg">
                <Sparkles className="mr-2 h-4 w-4" />
                {t("discoverProducts")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.selectedSize || ""}-${index}`} className="flex gap-4 border-b pb-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{t(`product${item.id}Name`)}</h3>
                          {item.selectedSize && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {t("size")}: {item.selectedSize}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeItem(item.id, item.selectedSize)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1">
                        {(item.priceInCents / 100).toFixed(2).replace(".", ",")} €
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>{t("total")}</span>
                <span>{totalPrice.toFixed(2).replace(".", ",")} €</span>
              </div>

              <Link href="/checkout" onClick={closeCart}>
                <Button className="w-full" size="lg">
                  {t("checkout")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

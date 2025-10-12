"use client"

import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, X, ShoppingBag, Sparkles, Truck, Gift, Tag, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    shippingCost,
    totalPrice,
    isFreeShipping,
    amountUntilFreeShipping,
    discountCode,
    discountAmount,
    applyDiscountCode,
    removeDiscountCode,
    isOpen,
    closeCart,
  } = useCart()
  const { t } = useLanguage()
  const [codeInput, setCodeInput] = useState("")
  const [codeError, setCodeError] = useState(false)

  const handleApplyCode = () => {
    const success = applyDiscountCode(codeInput)
    if (success) {
      setCodeInput("")
      setCodeError(false)
    } else {
      setCodeError(true)
    }
  }

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
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1">{item.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
              {!isFreeShipping && amountUntilFreeShipping > 0 && (
                <div className="bg-gradient-to-r from-rose-gold/10 to-warm-gold/10 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Truck className="h-4 w-4 text-rose-gold" />
                    <span>Lisää {amountUntilFreeShipping.toFixed(2).replace(".", ",")} € ilmaiseen toimitukseen!</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-gold to-warm-gold transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / 40) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {isFreeShipping && (
                <div className="bg-gradient-to-r from-rose-gold/10 to-warm-gold/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-rose-gold">
                    <Gift className="h-4 w-4" />
                    <span>Ilmainen toimitus aktivoitu! 🎉</span>
                  </div>
                </div>
              )}

              {!discountCode ? (
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Alennuskoodi
                  </label>
                  <p className="text-xs text-muted-foreground">
                    💡 Kokeile koodia <span className="font-semibold text-rose-gold">SUMMARI10</span> saadaksesi 10%
                    alennuksen!
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Syötä koodi"
                      value={codeInput}
                      onChange={(e) => {
                        setCodeInput(e.target.value.toUpperCase())
                        setCodeError(false)
                      }}
                      className={codeError ? "border-red-500" : ""}
                    />
                    <Button onClick={handleApplyCode} variant="outline">
                      Käytä
                    </Button>
                  </div>
                  {codeError && <p className="text-sm text-red-500">Virheellinen alennuskoodi</p>}
                </div>
              ) : (
                <div className="bg-gradient-to-r from-rose-gold/10 to-warm-gold/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-rose-gold">
                      <Check className="h-4 w-4" />
                      <span>Koodi {discountCode} käytössä</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removeDiscountCode} className="h-8 text-xs">
                      Poista
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Välisumma</span>
                  <span>{subtotal.toFixed(2).replace(".", ",")} €</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-gold">
                    <span>Alennus (10%)</span>
                    <span>-{discountAmount.toFixed(2).replace(".", ",")} €</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Toimitus</span>
                  <span className={isFreeShipping ? "text-green-600 font-medium" : ""}>
                    {isFreeShipping ? "Ilmainen" : `${shippingCost.toFixed(2).replace(".", ",")} €`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold border-t pt-2">
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

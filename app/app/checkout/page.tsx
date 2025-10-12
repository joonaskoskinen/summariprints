"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useCart } from "@/contexts/cart-context"
import { createCheckoutSession } from "@/app/actions/stripe"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { items, totalPrice } = useCart()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (items.length === 0) {
      router.push("/")
      return
    }

    createCheckoutSession(items).then((secret) => {
      if (secret) {
        setClientSecret(secret)
      } else {
        setError("Virhe maksusession luomisessa. Yritä uudelleen.")
      }
    })
  }, [items, router])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Takaisin
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Kassa
          </h1>
          <p className="text-muted-foreground">Yhteensä: {totalPrice.toFixed(2).replace(".", ",")} €</p>
        </div>

        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Virhe</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : clientSecret ? (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        ) : (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getCheckoutSession } from "@/app/actions/stripe"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import type Stripe from "stripe"

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart, items } = useCart()
  const [session, setSession] = useState<Stripe.Checkout.Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      router.push("/")
      return
    }

    // Get session details and save order
    getCheckoutSession(sessionId).then((sessionData) => {
      if (!sessionData) {
        setLoading(false)
        return
      }

      setSession(sessionData)
      setLoading(false)

      // Save order to localStorage for admin panel
      if (sessionData.status === "complete") {
        const order = {
          id: sessionData.id,
          date: new Date().toISOString(),
          customerEmail: sessionData.customer_details?.email || "",
          customerName: sessionData.customer_details?.name || "",
          shippingAddress: sessionData.shipping_details?.address,
          items: items,
          total: sessionData.amount_total ? sessionData.amount_total / 100 : 0,
          status: "pending" as const,
        }

        // Get existing orders
        const existingOrders = JSON.parse(localStorage.getItem("summari-orders") || "[]")
        existingOrders.push(order)
        localStorage.setItem("summari-orders", JSON.stringify(existingOrders))

        // Clear cart
        clearCart()
      }
    })
  }, [searchParams, router, clearCart, items])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session || session.status !== "complete") {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Maksua ei voitu vahvistaa</p>
        <Link href="/">
          <Button>Palaa etusivulle</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-600" />
      </div>

      <h1 className="font-serif text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
        Kiitos tilauksestasi!
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Tilausvahvistus on lähetetty sähköpostiosoitteeseen{" "}
        <span className="font-medium text-foreground">{session.customer_details?.email}</span>
      </p>

      <div className="bg-muted rounded-lg p-6 mb-8 text-left">
        <h2 className="font-semibold mb-4">Tilauksen tiedot</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tilausnumero:</span>
            <span className="font-mono">{session.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Yhteensä:</span>
            <span className="font-semibold">
              {session.amount_total ? (session.amount_total / 100).toFixed(2).replace(".", ",") : "0,00"} €
            </span>
          </div>
          {session.shipping_details?.address && (
            <div className="pt-2 border-t">
              <p className="text-muted-foreground mb-1">Toimitusosoite:</p>
              <p className="font-medium">{session.customer_details?.name}</p>
              <p>{session.shipping_details.address.line1}</p>
              {session.shipping_details.address.line2 && <p>{session.shipping_details.address.line2}</p>}
              <p>
                {session.shipping_details.address.postal_code} {session.shipping_details.address.city}
              </p>
              <p>{session.shipping_details.address.country}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-900">
          <strong>Toimitusaika:</strong> Tilauksesi käsitellään 1-2 arkipäivän kuluessa. Toimitus kestää yleensä 2-4
          viikkoa. Saat seurantanumeron sähköpostitse, kun tilaus on lähetetty.
        </p>
      </div>

      <Link href="/">
        <Button size="lg">Palaa etusivulle</Button>
      </Link>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  )
}

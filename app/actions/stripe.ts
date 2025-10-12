"use server"

import { stripe } from "@/lib/stripe-client"
import { products } from "@/lib/products"
import type { CartItem } from "@/lib/types"

export async function createCheckoutSession(items: CartItem[]) {
  try {
    // Convert cart items to Stripe line items with server-side price validation
    const lineItems = items.map((item) => {
      // Look up product from secure products array
      const product = products.find((p) => p.id === item.id)
      if (!product) {
        throw new Error(`Product with id "${item.id}" not found`)
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
          },
          unit_amount: product.priceInCents, // Use server-side price
        },
        quantity: item.quantity,
      }
    })

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: lineItems,
      mode: "payment",
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      shipping_address_collection: {
        allowed_countries: ["FI", "SE", "NO", "DK", "EE", "LV", "LT"],
      },
    })

    return session.client_secret
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return null
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error("Error retrieving checkout session:", error)
    return null
  }
}

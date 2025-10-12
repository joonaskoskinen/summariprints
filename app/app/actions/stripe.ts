"use server"

import { stripe } from "@/lib/stripe-client"
import type { CartItem } from "@/lib/types"
import { products } from "@/lib/products"

const FREE_SHIPPING_THRESHOLD = 40 // €40
const SHIPPING_COST = 490 // €4.90 in cents

export async function createCheckoutSession(items: CartItem[]) {
  try {
    if (!stripe) {
      console.error("Stripe is not configured")
      return null
    }

    const subtotal = items.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.id)
      return sum + (product?.priceInCents || 0) * item.quantity
    }, 0)

    const subtotalInEuros = subtotal / 100
    const isFreeShipping = subtotalInEuros >= FREE_SHIPPING_THRESHOLD

    // Convert cart items to Stripe line items
    const lineItems = items.map((item) => {
      const product = products.find((p) => p.id === item.id)

      if (!product) {
        throw new Error(`Product with id ${item.id} not found`)
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: item.quantity,
      }
    })

    if (!isFreeShipping) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Toimitus",
            description: "Toimitus Suomeen 3-5 arkipäivää",
          },
          unit_amount: SHIPPING_COST,
        },
        quantity: 1,
      })
    }

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
    if (!stripe) {
      console.error("Stripe is not configured")
      return null
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error("Error retrieving checkout session:", error)
    return null
  }
}

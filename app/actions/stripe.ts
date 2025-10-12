"use server"

import { stripe } from "@/lib/stripe-client"
import type { CartItem } from "@/lib/types"

export async function createCheckoutSession(items: CartItem[]) {
  try {
    const lineItems = items.map((item) => {
      // Validate that the item has required price information
      if (!item.priceInCents || !item.name) {
        throw new Error(`Invalid cart item: missing price or name`)
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: `${item.name}${item.selectedSize ? ` - ${item.selectedSize}` : ""}`,
          },
          unit_amount: item.priceInCents, // Use the price from cart item (includes selected size)
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

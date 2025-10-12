"use server"

import { stripe } from "@/lib/stripe-client"
import type { CartItem } from "@/lib/types"

export async function createCheckoutSession(items: CartItem[], customerEmail?: string) {
  // Convert cart items to Stripe line items
  const lineItems = items.map((item) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: item.name,
        description: item.description,
        images: item.image ? [`${process.env.NEXT_PUBLIC_BASE_URL || ""}${item.image}`] : [],
      },
      unit_amount: Math.round(item.priceNumber * 100), // Convert to cents
    },
    quantity: item.quantity,
  }))

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: lineItems,
    mode: "payment",
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    customer_email: customerEmail,
    shipping_address_collection: {
      allowed_countries: ["FI", "SE", "NO", "DK", "EE", "LV", "LT"],
    },
  })

  return session.client_secret
}

export async function getCheckoutSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return session
}

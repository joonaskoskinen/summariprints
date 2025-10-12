"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product, CartItem } from "@/lib/types"
import { products } from "@/lib/products"

const FREE_SHIPPING_THRESHOLD = 40 // €40
const SHIPPING_COST = 4.9 // €4.90

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  subtotal: number
  shippingCost: number
  isFreeShipping: boolean
  amountUntilFreeShipping: number
  discountCode: string
  discountAmount: number
  applyDiscountCode: (code: string) => boolean
  removeDiscountCode: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [discountCode, setDiscountCode] = useState("")

  useEffect(() => {
    setMounted(true)
    try {
      const savedCart = localStorage.getItem("summari-cart")
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
      const savedDiscount = localStorage.getItem("summari-discount")
      if (savedDiscount) {
        setDiscountCode(savedDiscount)
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("summari-cart", JSON.stringify(items))
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error)
      }
    }
  }, [items, mounted])

  useEffect(() => {
    if (mounted) {
      try {
        if (discountCode) {
          localStorage.setItem("summari-discount", discountCode)
        } else {
          localStorage.removeItem("summari-discount")
        }
      } catch (error) {
        console.error("Failed to save discount to localStorage:", error)
      }
    }
  }, [discountCode, mounted])

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((currentItems) => currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    setDiscountCode("")
  }

  const applyDiscountCode = (code: string): boolean => {
    if (code.toUpperCase() === "SUMMARI10") {
      setDiscountCode(code.toUpperCase())
      return true
    }
    return false
  }

  const removeDiscountCode = () => {
    setDiscountCode("")
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const subtotal = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    const priceInEuros = (product?.priceInCents || 0) / 100
    return sum + priceInEuros * item.quantity
  }, 0)

  const discountAmount = discountCode === "SUMMARI10" ? subtotal * 0.1 : 0

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shippingCost = isFreeShipping ? 0 : SHIPPING_COST
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const totalPrice = subtotal - discountAmount + shippingCost

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        subtotal,
        shippingCost,
        isFreeShipping,
        amountUntilFreeShipping,
        discountCode,
        discountAmount,
        applyDiscountCode,
        removeDiscountCode,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

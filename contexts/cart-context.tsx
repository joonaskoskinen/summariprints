"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product, CartItem } from "@/lib/types"

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: number, size?: string) => void
  updateQuantity: (productId: number, quantity: number, size?: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  discountCode: string
  applyDiscount: (code: string) => boolean
  removeDiscount: () => void
  subtotal: number
  discountAmount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [discountCode, setDiscountCode] = useState("")

  useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem("summari-cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
    const savedDiscount = localStorage.getItem("summari-discount")
    if (savedDiscount) {
      setDiscountCode(savedDiscount)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("summari-cart", JSON.stringify(items))
    }
  }, [items, mounted])

  useEffect(() => {
    if (mounted) {
      if (discountCode) {
        localStorage.setItem("summari-discount", discountCode)
      } else {
        localStorage.removeItem("summari-discount")
      }
    }
  }, [discountCode, mounted])

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize,
      )
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId: number, size?: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === productId && (!size || item.selectedSize === size))),
    )
  }

  const updateQuantity = (productId: number, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(productId, size)
      return
    }
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && (!size || item.selectedSize === size) ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const applyDiscount = (code: string): boolean => {
    if (code.toUpperCase() === "SUMMARI10") {
      setDiscountCode(code.toUpperCase())
      return true
    }
    return false
  }

  const removeDiscount = () => {
    setDiscountCode("")
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const subtotal = items.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace("€", "").replace(",", ".").trim())
    return sum + price * item.quantity
  }, 0)

  const discountAmount = discountCode === "SUMMARI10" ? subtotal * 0.1 : 0
  const totalPrice = subtotal - discountAmount

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
        isOpen,
        openCart,
        closeCart,
        discountCode,
        applyDiscount,
        removeDiscount,
        subtotal,
        discountAmount,
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

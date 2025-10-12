export interface Product {
  id: number
  name: string
  image: string
  price: string
  priceInCents: number
  description: string
  size?: string // Added size field for print variants
}

export interface ProductDetails {
  images: string[]
  materials: string
  dimensions: string
  care: string
  shipping: string
  features: string[]
  sizes: {
    name: string
    dimensions: string
    price: string
    priceInCents: number
  }[] // Added sizes array for different print size options
}

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string // Added selectedSize to track which size was added to cart
}

export interface Order {
  id: string
  customerEmail: string
  items: CartItem[]
  total: string
  shippingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    country: string
  }
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: string
}

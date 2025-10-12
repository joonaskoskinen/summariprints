import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <TrustBadges />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

import { notFound } from "next/navigation"
import { products, productDetails } from "@/lib/products"
import { ProductPageClient } from "@/components/product-page-client"
import { generateSEO, generateProductSchema } from "@/lib/seo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)
  const details = productDetails[productId]

  if (!product || !details) {
    return {}
  }

  return generateSEO({
    title: product.name,
    description: details.description,
    image: details.images[0],
    url: `https://summari.fi/product/${productId}`,
  })
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)
  const details = productDetails[productId]

  if (!product || !details) {
    notFound()
  }

  const schema = generateProductSchema({
    name: product.name,
    description: details.description,
    image: details.images[0],
    price: product.price,
    currency: "EUR",
    url: `https://summari.fi/product/${productId}`,
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: "Tuotteet", href: "/#tuotteet" }, { label: product.name }]} />
        </div>
        <ProductPageClient product={product} details={details} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}

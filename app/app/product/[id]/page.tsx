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

const getProductName = (productId: number): string => {
  const productNames: Record<number, string> = {
    1: "Pysähdy Hetkeksi",
    2: "Punainen Piste",
    3: "Honey Power 1968",
    4: "Niseko Mountain Resort",
    5: "Yoshino Kirsikankukat",
    6: "Kaksoisaurinko",
    7: "Kukkien Tuoksu",
    8: "Mind Maze",
    9: "Filosofinen Kissa",
    10: "Surrealistinen Kollaasi",
    11: "Tangerine",
    12: "Kintsugi",
    13: "Muotojen Maailma",
  }
  return productNames[productId] || `Product ${productId}`
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)
  const details = productDetails[productId]

  if (!product || !details) {
    return {}
  }

  const productName = getProductName(productId)

  return generateSEO({
    title: productName,
    description: details.materials,
    image: details.images[0],
    url: `https://summari.fi/product/${productId}`,
    type: "product",
    price: product.price,
  })
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)
  const details = productDetails[productId]

  if (!product || !details) {
    notFound()
  }

  const productName = getProductName(productId)

  const schema = generateProductSchema({
    name: productName,
    description: details.materials,
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
          <Breadcrumbs items={[{ label: "Tuotteet", href: "/#tuotteet" }, { label: productName }]} />
        </div>
        <ProductPageClient product={product} details={details} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}

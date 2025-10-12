import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  price?: string
  currency?: string
}

export function generateSEO({
  title,
  description,
  image = "/og-image.jpg",
  url = "https://summari.fi",
  price,
  currency = "EUR",
}: SEOProps): Metadata {
  const siteName = "Summari"
  const fullTitle = `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fi_FI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(price
      ? {
          other: {
            "product:price:amount": price,
            "product:price:currency": currency,
          },
        }
      : {}),
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  price: string
  currency: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9.,]/g, ""),
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      url: product.url,
    },
  }
}

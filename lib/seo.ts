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
    alternates: {
      canonical: url,
    },
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
      seller: {
        "@type": "Organization",
        name: "Summari",
      },
    },
    brand: {
      "@type": "Brand",
      name: "Summari",
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Summari",
    url: "https://summari.fi",
    logo: "https://summari.fi/logo.png",
    description:
      "Summari on suomalainen taidejulistekauppa, joka tarjoaa laadukkaita printtejä moderniin sisustukseen.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "tuki@summari.fi",
      contactType: "Customer Service",
      availableLanguage: ["Finnish", "English"],
    },
    sameAs: [],
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Summari",
    url: "https://summari.fi",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://summari.fi/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

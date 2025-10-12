"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fi" | "en"

interface Translations {
  [key: string]: string
}

const translations: Record<Language, Translations> = {
  fi: {
    // Navigation
    home: "Etusivu",
    products: "Tuotteet",
    about: "Meistä",
    contact: "Yhteystiedot",
    faq: "UKK",
    admin: "Admin",

    // Hero
    newArrivals: "Uutuudet saapuneet",
    heroTitle: "Ainutlaatuiset Korut",
    heroSubtitle: "Jokaiseen Hetkeen",
    heroDescription: "Löydä täydellinen koru Summari-kokoelmasta. Laadukkaat ja tyylikkäät korut jokaiseen hetkeen.",
    shopNow: "Tutustu Koruihin",
    viewCollection: "Tutustu Kokoelmaan",

    // Products
    productsTitle: "Kokoelmamme",
    addToCart: "Lisää Ostoskoriin",

    // Product 1 - Crystal Droplet
    product1Name: "Kristallipisara",
    product1Desc:
      "Minimalistinen ja ajaton kaulakoru kristallipisan muotoisella riipuksella. Täydellinen valinta arkeen ja juhlaan.",

    // Product 2 - Heart Romance
    product2Name: "Sydämen Romanssi",
    product2Desc: "Romanttinen choker-kaulakoru vaaleanpunaisella sydänriipuksella. Tuo ripauksen rakkautta tyyliin.",

    // Product 3 - Layered Elegance
    product3Name: "Kerrostettu Eleganssi",
    product3Desc:
      "Trendikäs kerrostettu kaulakoru kultaisella pinnoitteella ja kimaltelevilla kristalleilla. Luo hienostuneen lookin.",

    // Cart
    cart: "Ostoskori",
    emptyCart: "Ostoskorisi on tyhjä",
    cartEmpty: "Ostoskorisi on tyhjä",
    continueShopping: "Jatka Ostoksia",
    checkout: "Kassalle",
    quantity: "Määrä",
    remove: "Poista",
    total: "Yhteensä",

    // Footer
    footerDescription: "Summari on suomalainen korukauppa, joka tarjoaa laadukkaita ja tyylikkäitä koruja.",
    aboutUs: "Tietoa Meistä",
    ourStory: "Tarinmme",
    terms: "Käyttöehdot",
    returns: "Palautukset",
    contactInfo: "Yhteystiedot",
    phone: "Puhelin",
    copyright: "Kaikki oikeudet pidätetään.",

    // Trust Badges
    freeShipping: "Ilmainen Toimitus",
    freeShippingDesc: "Yli 40€ tilauksiin",
    securePayment: "Turvallinen Maksu",
    securePaymentDesc: "Stripe-suojattu maksu",
    returnPolicy: "Palautusoikeus",
    returnPolicyDesc: "14 päivän palautus",

    // Empty Cart
    emptyCartTitle: "Ostoskorisi on tyhjä",
    emptyCartMessage: "Lisää kauniita koruja ostoskoriisi ja luo oma tyylisi",
    discoverProducts: "Tutustu Tuotteisiin",

    // About Page
    welcomeToSummari: "Tervetuloa Summariin",
    aboutIntro:
      "Olemme suomalainen korukauppa, joka tuo sinulle kauneimmat ja laadukkaimmat koruyksilöt ympäri maailmaa.",
    ourStoryTitle: "Tarinmme",
    ourValuesTitle: "Arvomme",
    whyChooseUsTitle: "Miksi Valita Summari?",
    qualityFirst: "Laatu Ensin",
    reliability: "Luotettavuus",
    customerFocus: "Asiakaslähtöisyys",
    community: "Yhteisö",
    finnishCustomerService: "Suomalainen Asiakaspalvelu",
    qualityCheckedSuppliers: "Laatutarkastetut Toimittajat",
    securePaymentMethods: "Turvalliset Maksutavat",
    freeReturns: "Ilmainen Palautus",
    startYourJourney: "Aloita Matkasi Kanssamme",
  },
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    admin: "Admin",

    // Hero
    newArrivals: "New Arrivals",
    heroTitle: "Unique Jewelry",
    heroSubtitle: "For Every Moment",
    heroDescription:
      "Discover the perfect piece from the Summari collection. Quality and stylish jewelry for every occasion.",
    shopNow: "Shop Now",
    viewCollection: "View Collection",

    // Products
    productsTitle: "Our Collection",
    addToCart: "Add to Cart",

    // Product 1 - Crystal Droplet
    product1Name: "Crystal Droplet",
    product1Desc:
      "Minimalist and timeless necklace with a crystal droplet pendant. Perfect choice for everyday and special occasions.",

    // Product 2 - Heart Romance
    product2Name: "Heart Romance",
    product2Desc: "Romantic choker necklace with a pink heart pendant. Add a touch of love to your style.",

    // Product 3 - Layered Elegance
    product3Name: "Layered Elegance",
    product3Desc: "Trendy layered necklace with gold plating and sparkling crystals. Create a sophisticated look.",

    // Cart
    cart: "Shopping Cart",
    emptyCart: "Your cart is empty",
    cartEmpty: "Your cart is empty",
    continueShopping: "Continue Shopping",
    checkout: "Checkout",
    quantity: "Quantity",
    remove: "Remove",
    total: "Total",

    // Footer
    footerDescription: "Summari is a Finnish jewelry store offering quality and stylish jewelry.",
    aboutUs: "About Us",
    ourStory: "Our Story",
    terms: "Terms of Service",
    returns: "Returns",
    contactInfo: "Contact Information",
    phone: "Phone",
    copyright: "All rights reserved.",

    // Trust Badges
    freeShipping: "Free Shipping",
    freeShippingDesc: "On orders over 40€",
    securePayment: "Secure Payment",
    securePaymentDesc: "Stripe-protected payment",
    returnPolicy: "Return Policy",
    returnPolicyDesc: "14-day returns",

    // Empty Cart
    emptyCartTitle: "Your cart is empty",
    emptyCartMessage: "Add beautiful jewelry to your cart and create your own style",
    discoverProducts: "Discover Products",

    // About Page
    welcomeToSummari: "Welcome to Summari",
    aboutIntro:
      "We are a Finnish jewelry store bringing you the most beautiful and highest quality jewelry pieces from around the world.",
    ourStoryTitle: "Our Story",
    ourValuesTitle: "Our Values",
    whyChooseUsTitle: "Why Choose Summari?",
    qualityFirst: "Quality First",
    reliability: "Reliability",
    customerFocus: "Customer Focus",
    community: "Community",
    finnishCustomerService: "Finnish Customer Service",
    qualityCheckedSuppliers: "Quality-Checked Suppliers",
    securePaymentMethods: "Secure Payment Methods",
    freeReturns: "Free Returns",
    startYourJourney: "Start Your Journey With Us",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fi")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

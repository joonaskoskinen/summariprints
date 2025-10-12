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
    heroTitle: "Taidejulisteet Kotiisi",
    heroSubtitle: "Moderneja Tauluja",
    heroDescription: "Löydä täydellinen taidejuliste Summari-kokoelmasta. Laadukkaat printit moderniin sisustukseen.",
    shopNow: "Tutustu Julisteisiin",
    viewCollection: "Tutustu Kokoelmaan",

    // Products
    productsTitle: "Kokoelmamme",
    addToCart: "Lisää Ostoskoriin",
    size: "Koko",

    // Products - Art Prints
    product1Name: "Auringonlasku Abstrakti",
    product1Desc: "Lämmin abstrakti auringonlasku geometrisilla muodoilla",

    product2Name: "Sininen Aalto",
    product2Desc: "Minimalistinen sininen aalto-abstraktio",

    product3Name: "Kultainen Geometria",
    product3Desc: "Tyylikäs kultainen geometrinen taide",

    product4Name: "Vihreä Harmonia",
    product4Desc: "Rauhoittava vihreä kasviaiheinen abstraktio",

    product5Name: "Terrakotta Muodot",
    product5Desc: "Lämpimät terrakotta-sävyt modernissa muotoilussa",

    product6Name: "Mustavalkoinen Eleganssi",
    product6Desc: "Ajaton mustavalkoinen minimalistinen taide",

    product7Name: "Koralli Unelma",
    product7Desc: "Pehmeät korallinsävyt orgaanisissa muodoissa",

    product8Name: "Tummansininen Yö",
    product8Desc: "Syvä tummansininen yötaivas abstraktiona",

    product9Name: "Beige Minimalismi",
    product9Desc: "Neutraali beige minimalistinen taide",

    product10Name: "Ruosteinen Teollisuus",
    product10Desc: "Teollinen ruosteinen tekstuuri abstraktiona",

    product11Name: "Laventeli Kenttä",
    product11Desc: "Pehmeä laventelinvioletti kenttämaisema",

    product12Name: "Oranssi Energia",
    product12Desc: "Energinen oranssi dynaaminen abstraktio",

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
    footerDescription:
      "Summari on suomalainen taidejulistekauppa, joka tarjoaa laadukkaita printtejä moderniin sisustukseen.",
    aboutUs: "Tietoa Meistä",
    ourStory: "Tarinmme",
    terms: "Käyttöehdot",
    returns: "Palautukset",
    contactInfo: "Yhteystiedot",
    phone: "Puhelin",
    copyright: "Kaikki oikeudet pidätetään.",

    // Trust Badges
    freeShipping: "Ilmainen Toimitus",
    freeShippingDesc: "Yli 40€ ostoksiin",
    securePayment: "Turvallinen Maksu",
    securePaymentDesc: "Stripe-suojattu maksu",
    returnPolicy: "Palautusoikeus",
    returnPolicyDesc: "14 päivän palautus",

    // Empty Cart
    emptyCartTitle: "Ostoskorisi on tyhjä",
    emptyCartMessage: "Lisää kauniita taidejulisteita ostoskoriisi ja luo oma tyylisi",
    discoverProducts: "Tutustu Tuotteisiin",

    // About Page
    welcomeToSummari: "Tervetuloa Summariin",
    aboutIntro:
      "Olemme suomalainen taidejulistekauppa, joka tuo sinulle kauneimmat ja laadukkaimmat printit moderniin kotiisi.",
    ourStoryTitle: "Tarinmme",
    ourValuesTitle: "Arvomme",
    whyChooseUsTitle: "Miksi Valita Summari?",
    qualityFirst: "Laatu Ensin",
    reliability: "Luotettavuus",
    customerFocus: "Asiakaslähtöisyys",
    community: "Yhteisö",
    finnishCustomerService: "Suomalainen Asiakaspalvelu",
    qualityCheckedSuppliers: "Laadukkaat Printit",
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
    heroTitle: "Art Prints for Your Home",
    heroSubtitle: "Modern Posters",
    heroDescription:
      "Discover the perfect art print from the Summari collection. Quality prints for modern interior design.",
    shopNow: "Shop Prints",
    viewCollection: "View Collection",

    // Products
    productsTitle: "Our Collection",
    addToCart: "Add to Cart",
    size: "Size",

    // Products - Art Prints
    product1Name: "Abstract Sunset",
    product1Desc: "Warm abstract sunset with geometric shapes",

    product2Name: "Blue Wave",
    product2Desc: "Minimalist blue wave abstraction",

    product3Name: "Golden Geometry",
    product3Desc: "Stylish golden geometric art",

    product4Name: "Green Harmony",
    product4Desc: "Calming green botanical abstraction",

    product5Name: "Terracotta Shapes",
    product5Desc: "Warm terracotta tones in modern design",

    product6Name: "Black & White Elegance",
    product6Desc: "Timeless black and white minimalist art",

    product7Name: "Coral Dream",
    product7Desc: "Soft coral tones in organic shapes",

    product8Name: "Dark Blue Night",
    product8Desc: "Deep dark blue night sky abstraction",

    product9Name: "Beige Minimalism",
    product9Desc: "Neutral beige minimalist art",

    product10Name: "Rusty Industrial",
    product10Desc: "Industrial rusty texture abstraction",

    product11Name: "Lavender Field",
    product11Desc: "Soft lavender purple field landscape",

    product12Name: "Orange Energy",
    product12Desc: "Energetic orange dynamic abstraction",

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
    footerDescription: "Summari is a Finnish art print store offering quality prints for modern interior design.",
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
    emptyCartMessage: "Add beautiful art prints to your cart and create your own style",
    discoverProducts: "Discover Products",

    // About Page
    welcomeToSummari: "Welcome to Summari",
    aboutIntro:
      "We are a Finnish art print store bringing you the most beautiful and highest quality prints for your modern home.",
    ourStoryTitle: "Our Story",
    ourValuesTitle: "Our Values",
    whyChooseUsTitle: "Why Choose Summari?",
    qualityFirst: "Quality First",
    reliability: "Reliability",
    customerFocus: "Customer Focus",
    community: "Community",
    finnishCustomerService: "Finnish Customer Service",
    qualityCheckedSuppliers: "Quality Prints",
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

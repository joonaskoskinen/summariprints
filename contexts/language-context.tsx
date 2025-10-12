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

    // Product 1 - Pause for a Moment
    product1Name: "Pysähdy Hetkeksi",
    product1Desc: "Mustavalkoinen taidejuliste, jossa nainen pysäyttää hetken käsillään",

    // Product 2 - Red Dot
    product2Name: "Punainen Piste",
    product2Desc: "Minimalistinen violetti taulu punaisella keskipisteellä",

    // Product 3 - Honey Power 1968
    product3Name: "Honey Power 1968",
    product3Desc: "Japanilainen vintage hedelmäjuliste retro-tyylillä",

    // Product 4 - Niseko Mountain Resort
    product4Name: "Niseko Mountain Resort",
    product4Desc: "Punainen vintage hiihtojuliste japanilaisesta vuoristokohteesta",

    // Product 5 - Yoshino Cherry Blossoms
    product5Name: "Yoshino Kirsikankukat",
    product5Desc: "Kaunis japanilainen kirsikankukkavuori-juliste",

    // Product 6 - Double Sun
    product6Name: "Kaksoisaurinko",
    product6Desc: "Abstrakti Cerberus-hahmo kahden auringon alla",

    // Product 7 - Flower Scent
    product7Name: "Kukkien Tuoksu",
    product7Desc: "Vihreä kukkajuliste hauskalla tekstillä",

    // Product 8 - Mind Maze
    product8Name: "Mind Maze",
    product8Desc: "Hypnoottinen abstrakti taidejuliste",

    // Product 9 - Philosophical Cat
    product9Name: "Filosofinen Kissa",
    product9Desc: "Kissajuliste filosofisella tekstillä",

    // Product 10 - Surrealist Collage
    product10Name: "Surrealistinen Kollaasi",
    product10Desc: "Ainutlaatuinen kollaasi tupakka-askista, banaaneista ja sudenkorennoista",

    // Product 11 - Tangerine
    product11Name: "Tangerine",
    product11Desc: "Japanilainen elokuvajuliste mustavalkoisella estetiikalla",

    // Product 12 - Kintsugi
    product12Name: "Kintsugi",
    product12Desc: "Japanilainen kulhojuliste - kauniimpi korjattuna",

    // Product 13 - World of Shapes
    product13Name: "Muotojen Maailma",
    product13Desc: "Abstrakti juliste muodoista ja silmistä",

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

    // Product 1 - Pause for a Moment
    product1Name: "Pause for a Moment",
    product1Desc: "Black and white art print with woman pausing time with her hands",

    // Product 2 - Red Dot
    product2Name: "Red Dot",
    product2Desc: "Minimalist purple poster with red center dot",

    // Product 3 - Honey Power 1968
    product3Name: "Honey Power 1968",
    product3Desc: "Japanese vintage fruit poster with retro style",

    // Product 4 - Niseko Mountain Resort
    product4Name: "Niseko Mountain Resort",
    product4Desc: "Red vintage ski poster from Japanese mountain resort",

    // Product 5 - Yoshino Cherry Blossoms
    product5Name: "Yoshino Cherry Blossoms",
    product5Desc: "Beautiful Japanese cherry blossom mountain poster",

    // Product 6 - Double Sun
    product6Name: "Double Sun",
    product6Desc: "Abstract Cerberus figure under two suns",

    // Product 7 - Flower Scent
    product7Name: "Flower Scent",
    product7Desc: "Green flower poster with playful text",

    // Product 8 - Mind Maze
    product8Name: "Mind Maze",
    product8Desc: "Hypnotic abstract art poster",

    // Product 9 - Philosophical Cat
    product9Name: "Philosophical Cat",
    product9Desc: "Cat poster with philosophical text",

    // Product 10 - Surrealist Collage
    product10Name: "Surrealist Collage",
    product10Desc: "Unique collage of cigarette pack, bananas, and dragonflies",

    // Product 11 - Tangerine
    product11Name: "Tangerine",
    product11Desc: "Japanese movie poster with black and white aesthetic",

    // Product 12 - Kintsugi
    product12Name: "Kintsugi",
    product12Desc: "Japanese bowl poster - more beautiful for having been broken",

    // Product 13 - World of Shapes
    product13Name: "World of Shapes",
    product13Desc: "Abstract poster about shapes and eyes",

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

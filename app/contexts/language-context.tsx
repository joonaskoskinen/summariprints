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
    product1Desc:
      "Mustavalkoinen taidejuliste, jossa nainen pysäyttää hetken käsillään. Minimalistinen ja ajaton design moderniin sisustukseen.",

    // Product 2 - Red Dot
    product2Name: "Punainen Piste",
    product2Desc:
      "Minimalistinen violetti taulu punaisella keskipisteellä. Abstrakti taidejuliste, joka luo rauhallisen tunnelman.",

    // Product 3 - Honey Power 1968
    product3Name: "Honey Power 1968",
    product3Desc:
      "Japanilainen vintage hedelmäjuliste retro-tyylillä. Ainutlaatuinen 60-luvun inspiroima design sisustukseen.",

    // Product 4 - Niseko Mountain Resort
    product4Name: "Niseko Mountain Resort",
    product4Desc:
      "Punainen vintage hiihtojuliste japanilaisesta vuoristokohteesta. Klassinen talviurheilujuliste retro-estetiikalla.",

    // Product 5 - Yoshino Cherry Blossoms
    product5Name: "Yoshino Kirsikankukat",
    product5Desc:
      "Kaunis japanilainen kirsikankukkavuori-juliste. Rauhallinen ja harmoninen taidejuliste luonnon kauneudesta.",

    // Product 6 - Double Sun
    product6Name: "Kaksoisaurinko",
    product6Desc:
      "Abstrakti Cerberus-hahmo kahden auringon alla. Rohkea ja ainutlaatuinen taidejuliste moderniin kotiin.",

    // Product 7 - Flower Scent
    product7Name: "Kukkien Tuoksu",
    product7Desc: "Vihreä kukkajuliste hauskalla tekstillä. Leikkisä ja raikas taidejuliste, joka tuo hymyn huulille.",

    // Product 8 - Mind Maze
    product8Name: "Mind Maze",
    product8Desc: "Hypnoottinen abstrakti taidejuliste. Kiehtova ja syvällinen design, joka herättää ajatuksia.",

    // Product 9 - Philosophical Cat
    product9Name: "Filosofinen Kissa",
    product9Desc: "Kissajuliste filosofisella tekstillä. Hauska ja ajatuksia herättävä taidejuliste kissanystäville.",

    // Product 10 - Surrealist Collage
    product10Name: "Surrealistinen Kollaasi",
    product10Desc:
      "Ainutlaatuinen kollaasi tupakka-askista, banaaneista ja sudenkorennoista. Surrealistinen taidejuliste rohkeaan sisustukseen.",

    // Product 11 - Tangerine
    product11Name: "Tangerine",
    product11Desc:
      "Japanilainen elokuvajuliste mustavalkoisella estetiikalla. Dramaattinen ja tyylikäs vintage-juliste.",

    // Product 12 - Kintsugi
    product12Name: "Kintsugi",
    product12Desc:
      "Japanilainen kulhojuliste - kauniimpi korjattuna. Inspiroiva taidejuliste japanilaisesta kintsugi-filosofiasta.",

    // Product 13 - World of Shapes
    product13Name: "Muotojen Maailma",
    product13Desc:
      "Abstrakti juliste muodoista ja silmistä. Leikkisä ja ajatuksia herättävä taidejuliste moderniin kotiin.",

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
    product1Desc:
      "Black and white art print with woman pausing time with her hands. Minimalist and timeless design for modern interiors.",

    // Product 2 - Red Dot
    product2Name: "Red Dot",
    product2Desc: "Minimalist purple poster with red center dot. Abstract art print that creates a calm atmosphere.",

    // Product 3 - Honey Power 1968
    product3Name: "Honey Power 1968",
    product3Desc: "Japanese vintage fruit poster with retro style. Unique 60s-inspired design for your interior.",

    // Product 4 - Niseko Mountain Resort
    product4Name: "Niseko Mountain Resort",
    product4Desc:
      "Red vintage ski poster from Japanese mountain resort. Classic winter sports poster with retro aesthetic.",

    // Product 5 - Yoshino Cherry Blossoms
    product5Name: "Yoshino Cherry Blossoms",
    product5Desc:
      "Beautiful Japanese cherry blossom mountain poster. Peaceful and harmonious art print of nature's beauty.",

    // Product 6 - Double Sun
    product6Name: "Double Sun",
    product6Desc: "Abstract Cerberus figure under two suns. Bold and unique art print for modern homes.",

    // Product 7 - Flower Scent
    product7Name: "Flower Scent",
    product7Desc: "Green flower poster with playful text. Fun and fresh art print that brings a smile to your face.",

    // Product 8 - Mind Maze
    product8Name: "Mind Maze",
    product8Desc: "Hypnotic abstract art poster. Captivating and profound design that sparks thoughts.",

    // Product 9 - Philosophical Cat
    product9Name: "Philosophical Cat",
    product9Desc: "Cat poster with philosophical text. Fun and thought-provoking art print for cat lovers.",

    // Product 10 - Surrealist Collage
    product10Name: "Surrealist Collage",
    product10Desc:
      "Unique collage of cigarette pack, bananas, and dragonflies. Surrealist art print for bold interiors.",

    // Product 11 - Tangerine
    product11Name: "Tangerine",
    product11Desc: "Japanese movie poster with black and white aesthetic. Dramatic and stylish vintage poster.",

    // Product 12 - Kintsugi
    product12Name: "Kintsugi",
    product12Desc:
      "Japanese bowl poster - more beautiful for having been broken. Inspiring art print about Japanese kintsugi philosophy.",

    // Product 13 - World of Shapes
    product13Name: "World of Shapes",
    product13Desc: "Abstract poster about shapes and eyes. Playful and thought-provoking art print for modern homes.",

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

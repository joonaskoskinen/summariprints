"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"
import { generateFAQSchema } from "@/lib/seo"
import { useEffect } from "react"

export function FAQClient() {
  const { language } = useLanguage()

  const faqData = {
    fi: [
      {
        question: "Valmistatteko julisteet itse?",
        answer:
          "Summari on jälleenmyyjä, emme valmista julisteita itse. Valitsemme huolellisesti kauneimmat ja laadukkaimmat taideprintit luotettavilta toimittajilta. Jokainen juliste käy läpi tiukan laatutarkastuksen ennen kuin se päätyy valikoimaamme. Näin voimme tarjota sinulle parhaan mahdollisen laadun ja hinnan yhdistelmän.",
      },
      {
        question: "Hei, löysin saman tuotteen halvemmalla muualta!",
        answer:
          "Ymmärrämme, että hinta on tärkeä tekijä ostopäätöksessä. Summarin kautta ostaessasi saat kuitenkin paljon enemmän: suomalaisen asiakaspalvelun joka vastaa kysymyksiisi nopeasti, laatutarkastetut toimittajat joiden kanssa olemme rakentaneet luottamuksen, turvalliset maksutavat Stripen kautta, sekä ilmaisen palautuksen 14 päivän ajan. Lisäksi jokainen tuote käy läpi laatutarkastuksen ennen toimitusta. Meille on tärkeää, että saat parhaan mahdollisen ostokokemuksen alusta loppuun.",
      },
      {
        question: "Mikä on palautusoikeuteni?",
        answer:
          "Sinulla on 14 päivän palautusoikeus kuluttajansuojalain mukaisesti. Voit palauttaa tuotteen ilman perusteluja 14 päivän kuluessa vastaanottamisesta. Tuotteen tulee olla käyttämätön ja alkuperäispakkauksessa. Palautuskulut ovat asiakkaan vastuulla.",
      },
      {
        question: "Kuinka kauan toimitus kestää?",
        answer:
          "Toimitusaika on 2-4 viikkoa. Saat seurantanumeron heti kun tilaus on lähetetty. Voit seurata pakettisi kulkua sähköpostitse saamasi linkin kautta. Julisteet pakataan huolellisesti suojaputkeen.",
      },
      {
        question: "Onko toimitus ilmainen?",
        answer: "Kyllä, tarjoamme ilmaisen toimituksen kaikkiin maihin.",
      },
      {
        question: "Miten maksan tilaukseni?",
        answer:
          "Hyväksymme kaikki yleisimmät maksutavat Stripen kautta: Visa, Mastercard, American Express, Apple Pay ja Google Pay. Maksut käsitellään turvallisesti Stripen kautta.",
      },
      {
        question: "Mitä materiaalia julisteet ovat?",
        answer:
          "Kaikki julisteemme ovat laadukkaita puuvillakangasprinttejä, jotka on tulostettu ympäristöystävällisellä Giclee-musteella. Kangas on kestävä ja värit ovat eloisia ja pitkäikäisiä. Tuotteet toimitetaan rullalle rullattuina ilman kehystä.",
      },
      {
        question: "Tulevatko julisteet kehyksissä?",
        answer:
          "Julisteet toimitetaan rullalle rullattuina ilman kehystä. Näin voit valita itse kehykset, jotka sopivat parhaiten sisustukseesi. Kangas sopii standardikokoisiin kehyksiin.",
      },
      {
        question: "Miten hoidan julisteitani?",
        answer:
          "Suojaa julisteet suoralta auringonvalolta ja kosteudelta. Suosittelemme kehystämistä, joka suojaa kangasta pölystä ja vaurioilta. Älä taita tai rullaa kangasta liian tiukasti.",
      },
      {
        question: "Entä jos tuote on viallinen?",
        answer:
          "Jos tuote on viallinen tai vaurioitunut toimituksessa, ota yhteyttä asiakaspalveluumme 14 päivän kuluessa. Lähetämme uuden tuotteen tai palautamme rahat täysimääräisesti. Ota kuvia viasta reklamaatiota varten.",
      },
      {
        question: "Voiko tilauksen peruuttaa?",
        answer:
          "Voit peruuttaa tilauksen ennen kuin se on lähetetty. Ota yhteyttä asiakaspalveluumme mahdollisimman pian tilauksen jälkeen. Kun tilaus on lähetetty, voit käyttää 14 päivän palautusoikeutta.",
      },
      {
        question: "Miten saan yhteyden asiakaspalveluun?",
        answer:
          "Voit ottaa yhteyttä sähköpostitse osoitteeseen tuki@summari.fi. Vastaamme kaikkiin kyselyihin 1-2 arkipäivän kuluessa.",
      },
    ],
    en: [
      {
        question: "Do you make the prints yourself?",
        answer:
          "Summari is a reseller, we don't manufacture prints ourselves. We carefully select the most beautiful and highest quality art prints from trusted suppliers. Each print goes through a strict quality inspection before it enters our collection. This way we can offer you the best possible combination of quality and price.",
      },
      {
        question: "Hey, I found the same product cheaper elsewhere!",
        answer:
          "We understand that price is an important factor in your purchase decision. However, when you buy through Summari, you get much more: Finnish customer service that responds to your questions quickly, quality-checked suppliers with whom we have built trust, secure payment methods through Stripe, and free returns for 14 days. Additionally, each product goes through quality inspection before delivery. It's important to us that you get the best possible shopping experience from start to finish.",
      },
      {
        question: "What is my right of return?",
        answer:
          "You have a 14-day right of return according to consumer protection law. You can return the product without giving a reason within 14 days of receipt. The product must be unused and in its original packaging. Return shipping costs are the customer's responsibility.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time is 2-4 weeks. You will receive a tracking number as soon as your order is shipped. You can track your package through the link sent to your email. Prints are carefully packed in a protective tube.",
      },
      {
        question: "Is shipping free?",
        answer: "Yes, we offer free shipping to all countries.",
      },
      {
        question: "How do I pay for my order?",
        answer:
          "We accept all major payment methods through Stripe: Visa, Mastercard, American Express, Apple Pay, and Google Pay. Payments are processed securely through Stripe.",
      },
      {
        question: "What material are the prints?",
        answer:
          "All our prints are high-quality cotton canvas prints, printed with environmentally friendly Giclee ink. The canvas is durable and the colors are vibrant and long-lasting. Products are delivered rolled without a frame.",
      },
      {
        question: "Do the prints come framed?",
        answer:
          "Prints are delivered rolled without a frame. This way you can choose frames that best suit your interior. The canvas fits standard frame sizes.",
      },
      {
        question: "How do I care for my prints?",
        answer:
          "Protect prints from direct sunlight and moisture. We recommend framing, which protects the canvas from dust and damage. Do not fold or roll the canvas too tightly.",
      },
      {
        question: "What if the product is defective?",
        answer:
          "If the product is defective or damaged during delivery, contact our customer service within 14 days. We will send a new product or refund your money in full. Take photos of the defect for the complaint.",
      },
      {
        question: "Can I cancel my order?",
        answer:
          "You can cancel your order before it has been shipped. Contact our customer service as soon as possible after placing your order. Once the order is shipped, you can use the 14-day right of return.",
      },
      {
        question: "How do I contact customer service?",
        answer: "You can contact us by email at tuki@summari.fi. We respond to all inquiries within 1-2 business days.",
      },
    ],
  }

  const currentFAQ = language === "fi" ? faqData.fi : faqData.en

  useEffect(() => {
    const faqSchema = generateFAQSchema(currentFAQ)
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(faqSchema)
    script.id = "faq-schema"

    // Remove old schema if exists
    const oldScript = document.getElementById("faq-schema")
    if (oldScript) {
      oldScript.remove()
    }

    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById("faq-schema")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [currentFAQ])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          {language === "fi" ? "Takaisin kauppaan" : "Back to shop"}
        </Link>

        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {language === "fi" ? "Usein Kysytyt Kysymykset" : "Frequently Asked Questions"}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {language === "fi"
              ? "Löydä vastaukset yleisimpiin kysymyksiin tilauksista, toimituksista ja palautuksista."
              : "Find answers to the most common questions about orders, shipping, and returns."}
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {currentFAQ.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h2 className="font-semibold mb-2">
            {language === "fi" ? "Etkö löytänyt vastausta?" : "Didn't find an answer?"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {language === "fi"
              ? "Ota yhteyttä asiakaspalveluumme sähköpostitse: tuki@summari.fi"
              : "Contact our customer service by email: tuki@summari.fi"}
          </p>
        </div>
      </div>
    </div>
  )
}

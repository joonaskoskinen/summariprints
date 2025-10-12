"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

export function FAQClient() {
  const { language } = useLanguage()

  const faqData = {
    fi: [
      {
        question: "Valmistatteko korut itse?",
        answer:
          "Summari on jälleenmyyjä, emme valmista koruja itse. Valitsemme huolellisesti kauneimmat ja laadukkaimmat koruyksilöt luotettavilta toimittajilta. Jokainen koru käy läpi tiukan laatutarkastuksen ennen kuin se päätyy valikoimaamme. Näin voimme tarjota sinulle parhaan mahdollisen laadun ja hinnan yhdistelmän.",
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
          "Toimitusaika Suomeen on 2-4 viikkoa. Saat seurantanumeron heti kun tilaus on lähetetty. Voit seurata pakettisi kulkua sähköpostitse saamasi linkin kautta.",
      },
      {
        question: "Miten maksan tilaukseni?",
        answer:
          "Hyväksymme kaikki yleisimmät maksutavat Stripen kautta: Visa, Mastercard, American Express, Apple Pay ja Google Pay. Maksut käsitellään turvallisesti Stripen kautta.",
      },
      {
        question: "Voiko koruja käyttää päivittäin?",
        answer:
          "Kyllä, korumme sopivat päivittäiseen käyttöön. Suosittelemme kuitenkin välttämään kosketusta veden, parfyymien ja kemikaalien kanssa korujen kunnon säilyttämiseksi pidempään.",
      },
      {
        question: "Miten hoidan korujani?",
        answer:
          "Puhdista korut pehmeällä liinalla käytön jälkeen. Säilytä kuivassa paikassa, mieluiten pehmeässä pussissa tai korulaatikossa. Vältä kosketusta kemikaalien, parfyymien ja veden kanssa.",
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
        question: "Do you make the jewelry yourself?",
        answer:
          "Summari is a reseller, we don't manufacture jewelry ourselves. We carefully select the most beautiful and highest quality jewelry pieces from trusted suppliers. Each piece goes through a strict quality inspection before it enters our collection. This way we can offer you the best possible combination of quality and price.",
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
          "Delivery time to Finland is 2-4 weeks. You will receive a tracking number as soon as your order is shipped. You can track your package through the link sent to your email.",
      },
      {
        question: "How do I pay for my order?",
        answer:
          "We accept all major payment methods through Stripe: Visa, Mastercard, American Express, Apple Pay, and Google Pay. Payments are processed securely through Stripe.",
      },
      {
        question: "Can I wear the jewelry daily?",
        answer:
          "Yes, our jewelry is suitable for daily wear. However, we recommend avoiding contact with water, perfumes, and chemicals to maintain the jewelry's condition longer.",
      },
      {
        question: "How do I care for my jewelry?",
        answer:
          "Clean jewelry with a soft cloth after use. Store in a dry place, preferably in a soft pouch or jewelry box. Avoid contact with chemicals, perfumes, and water.",
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

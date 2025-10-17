import type { Metadata } from "next"
import { Heart, Shield, Sparkles, Users } from "lucide-react"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Meistä - Summari",
  description:
    "Summari on suomalainen taidejulistekauppa, joka tarjoaa huolellisesti valittuja, laadukkaita moderneja printejä. Tutustu tarinaamme ja arvoihimme.",
  url: "https://summari.fi/about",
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-accent/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              Tervetuloa Summariin
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olemme suomalainen taidejulistekauppa, joka tuo sinulle kauneimmat ja laadukkaimmat printit moderniin
              kotiisi. Jokainen juliste on huolellisesti valittu ja tarkastettu, jotta voit nauttia kauniista
              taidejulisteista huolettomasti.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">Tarinamme</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Summari syntyi rakkaudesta kauniisiin taidejulisteisiin ja halusta tehdä laadukkaat printit helposti
                saavutettaviksi kaikille. Ymmärrämme, että taidejulisteet ovat enemmän kuin pelkkiä sisustustuotteita –
                ne ovat ilmaisun väline, muistoja ja tunteita kantavia aarteita, jotka tekevät kodista henkilökohtaisen.
              </p>
              <p>
                Emme valmista julisteita itse, vaan olemme huolellisesti valitsevia jälleenmyyjiä. Työskentelemme vain
                luotettavien ja laatutarkastettujen toimittajien kanssa, jotta voimme taata jokaiselle asiakkaallemme
                parhaan mahdollisen ostokokemuksen ja laadukkaat tuotteet.
              </p>
              <p>
                Jokainen kokoelmaamme päätyvä juliste käy läpi tiukan laaduntarkastuksen. Etsimme jatkuvasti uusia,
                ainutlaatuisia kappaleita, jotka yhdistävät tyylin, laadun ja kohtuullisen hinnan. Haluamme, että
                jokainen asiakas löytää julisteen, joka puhuu hänelle henkilökohtaisesti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Arvomme</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Laatu Ensin</h3>
              <p className="text-sm text-muted-foreground">
                Valitsemme vain kauneimmat ja laadukkaimmat taidejulisteet huolellisesti tarkastetuilta toimittajilta.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Luotettavuus</h3>
              <p className="text-sm text-muted-foreground">
                Tarjoamme turvallisen ostokokemuksen suomalaisella asiakaspalvelulla ja 14 päivän palautusoikeudella.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Asiakaslähtöisyys</h3>
              <p className="text-sm text-muted-foreground">
                Asiakkaamme ovat toimintamme keskiössä. Haluamme tarjota parhaan mahdollisen palvelun ja kokemuksen.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Yhteisö</h3>
              <p className="text-sm text-muted-foreground">
                Rakennamme yhteisöä taidejulisteiden ystävien kanssa, jotka arvostavat laatua ja tyyliä.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Miksi Valita Summari?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg mb-2">Suomalainen Asiakaspalvelu</h3>
                <p className="text-muted-foreground">
                  Olemme täällä sinua varten suomeksi. Vastaamme kysymyksiin nopeasti ja autamme mielellämme kaikissa
                  tilanteissa.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg mb-2">Laatutarkastetut Toimittajat</h3>
                <p className="text-muted-foreground">
                  Työskentelemme vain luotettavien kumppaneiden kanssa. Jokainen juliste tarkastetaan ennen kuin se
                  lähetetään sinulle.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg mb-2">Turvalliset Maksutavat</h3>
                <p className="text-muted-foreground">
                  Käytämme Stripe-maksujärjestelmää, joka takaa turvallisen ja luotettavan maksutapahtuman.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg mb-2">Ilmainen Palautus</h3>
                <p className="text-muted-foreground">
                  Tarjoamme 14 päivän palautusoikeuden. Jos tuote ei vastaa odotuksiasi, voit palauttaa sen
                  vaivattomasti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Aloita Matkasi Kanssamme</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tutustu kokoelmaamme ja löydä täydellinen taidejuliste juuri sinulle. Olemme täällä auttamassa sinua joka
            askeleella.
          </p>
          <a
            href="/#tuotteet"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
          >
            Tutustu Kokoelmaan
          </a>
        </div>
      </section>
    </div>
  )
}

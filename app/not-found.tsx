import Link from "next/link"
import { Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="font-serif text-8xl font-bold text-accent">404</h1>
          <h2 className="font-serif text-3xl font-bold">Sivua Ei Löytynyt</h2>
          <p className="text-muted-foreground">
            Oho! Näyttää siltä, että etsimäsi sivu on kadonnut tai sitä ei ole olemassa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Takaisin Etusivulle
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <Link href="/#tuotteet">
              <Search className="h-4 w-4" />
              Selaa Tuotteita
            </Link>
          </Button>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          <p>Tarvitsetko apua? Ota yhteyttä asiakaspalveluumme:</p>
          <a href="mailto:info@summari.fi" className="text-accent hover:underline">
            info@summari.fi
          </a>
        </div>
      </div>
    </div>
  )
}

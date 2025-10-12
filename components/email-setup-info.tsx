import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function EmailSetupInfo() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          Sähköposti-ilmoitukset
        </CardTitle>
        <CardDescription>Tietoa sähköpostien lähettämisestä</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription>
            <strong>Nykyinen toiminta:</strong> Kun klikkaat "Lähetä seurantatieto asiakkaalle" -painiketta,
            sähköpostiohjelmasi avautuu valmiiksi täytetyllä viestillä. Voit muokata viestiä ennen lähettämistä.
          </AlertDescription>
        </Alert>

        <div className="text-sm space-y-2">
          <p className="font-semibold">Automaattiset sähköpostit:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>Tilausvahvistus:</strong> Stripe lähettää automaattisesti tilausvahvistuksen asiakkaalle maksun
              jälkeen
            </li>
            <li>
              <strong>Seurantatieto:</strong> Voit lähettää seurantatiedon manuaalisesti admin-paneelista
            </li>
          </ul>
        </div>

        <div className="bg-muted p-4 rounded-lg text-sm">
          <p className="font-semibold mb-2">Haluat automatisoida sähköpostit?</p>
          <p className="text-muted-foreground">
            Voit integroida sähköpostipalvelun kuten Resend tai SendGrid lähettämään automaattisia sähköposteja
            tilausten tilasta. Tämä vaatii lisäkonfiguraatiota ja API-avaimen.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

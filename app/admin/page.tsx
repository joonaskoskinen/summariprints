"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Copy, Check, Mail } from "lucide-react"
import type { Order } from "@/lib/types"
import { EmailSetupInfo } from "@/components/email-setup-info"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [trackingNumber, setTrackingNumber] = useState("")
  const [notes, setNotes] = useState("")
  const [copiedAddress, setCopiedAddress] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("admin-auth")
    if (auth === "true") {
      setIsAuthenticated(true)
      loadOrders()
    }
  }, [])

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem("summari-orders") || "[]")
    setOrders(savedOrders.sort((a: Order, b: Order) => new Date(b.date).getTime() - new Date(a.date).getTime()))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production, use proper authentication
    if (password === "summari2024") {
      sessionStorage.setItem("admin-auth", "true")
      setIsAuthenticated(true)
      loadOrders()
    } else {
      alert("Väärä salasana")
    }
  }

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    const updatedOrders = orders.map((order) => (order.id === orderId ? { ...order, status } : order))
    setOrders(updatedOrders)
    localStorage.setItem("summari-orders", JSON.stringify(updatedOrders))
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status })
    }
  }

  const updateOrderTracking = (orderId: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, trackingNumber, notes, status: "shipped" as const } : order,
    )
    setOrders(updatedOrders)
    localStorage.setItem("summari-orders", JSON.stringify(updatedOrders))
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, trackingNumber, notes, status: "shipped" })
    }
  }

  const copyAddress = (order: Order) => {
    const address = order.shippingAddress
    const addressText = `${order.customerName}
${address?.line1 || ""}
${address?.line2 || ""}
${address?.postal_code || ""} ${address?.city || ""}
${address?.country || ""}`

    navigator.clipboard.writeText(addressText)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const sendTrackingEmail = (order: Order) => {
    const subject = `Summari - Tilauksesi ${order.id.slice(-8)} on lähetetty!`
    const body = `Hei ${order.customerName},

Tilauksesi on lähetetty!

Tilausnumero: ${order.id.slice(-8)}
Seurantanumero: ${order.trackingNumber || "Ei vielä saatavilla"}

Voit seurata lähetystäsi seurantanumerolla.

Toimitusaika on yleensä 2-4 viikkoa.

Kiitos tilauksestasi!

Ystävällisin terveisin,
Summari`

    const mailtoLink = `mailto:${order.customerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "Odottaa"
      case "processing":
        return "Käsittelyssä"
      case "shipped":
        return "Lähetetty"
      case "delivered":
        return "Toimitettu"
      default:
        return status
    }
  }

  const pendingOrdersCount = orders.filter((o) => o.status === "pending").length

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-serif text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Admin-kirjautuminen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Salasana</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Syötä salasana"
                />
              </div>
              <Button type="submit" className="w-full">
                Kirjaudu
              </Button>
              <p className="text-xs text-muted-foreground text-center">Demo-salasana: summari2024</p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Tilausten hallinta
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">Yhteensä {orders.length} tilausta</p>
              {pendingOrdersCount > 0 && (
                <Badge className="bg-red-500 text-white">{pendingOrdersCount} uutta tilausta</Badge>
              )}
            </div>
          </div>
          <Button variant="outline" onClick={() => router.push("/")}>
            Takaisin etusivulle
          </Button>
        </div>

        {orders.length === 0 ? (
          <>
            <EmailSetupInfo />
            <Card>
              <CardContent className="py-12 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Ei tilauksia vielä</p>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <EmailSetupInfo />
            <div className="grid gap-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">Tilaus #{order.id.slice(-8)}</h3>
                          <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>
                            <strong>Asiakas:</strong> {order.customerName || "Ei nimeä"} ({order.customerEmail})
                          </p>
                          <p>
                            <strong>Päivämäärä:</strong> {new Date(order.date).toLocaleDateString("fi-FI")}
                          </p>
                          <p>
                            <strong>Yhteensä:</strong> {order.total.toFixed(2).replace(".", ",")} €
                          </p>
                          <p>
                            <strong>Tuotteet:</strong>{" "}
                            {order.items.map((item) => `${item.name} (${item.quantity})`).join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSelectedOrder(order)
                                setTrackingNumber(order.trackingNumber || "")
                                setNotes(order.notes || "")
                              }}
                            >
                              Näytä tiedot
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Tilaus #{order.id.slice(-8)}</DialogTitle>
                              <DialogDescription>Tilauksen tiedot ja hallinta</DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold mb-2">Asiakastiedot</h4>
                                <div className="text-sm space-y-1">
                                  <p>
                                    <strong>Nimi:</strong> {order.customerName}
                                  </p>
                                  <p>
                                    <strong>Sähköposti:</strong> {order.customerEmail}
                                  </p>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">Toimitusosoite</h4>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyAddress(order)}
                                    className="gap-2"
                                  >
                                    {copiedAddress ? (
                                      <>
                                        <Check className="h-4 w-4" />
                                        Kopioitu!
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-4 w-4" />
                                        Kopioi osoite
                                      </>
                                    )}
                                  </Button>
                                </div>
                                <div className="text-sm bg-muted p-3 rounded-md">
                                  <p>{order.customerName}</p>
                                  <p>{order.shippingAddress?.line1}</p>
                                  {order.shippingAddress?.line2 && <p>{order.shippingAddress.line2}</p>}
                                  <p>
                                    {order.shippingAddress?.postal_code} {order.shippingAddress?.city}
                                  </p>
                                  <p>{order.shippingAddress?.country}</p>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Tuotteet</h4>
                                <div className="space-y-2">
                                  {order.items.map((item) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                      <span>
                                        {item.name} x {item.quantity}
                                      </span>
                                      <span>{(item.priceNumber * item.quantity).toFixed(2).replace(".", ",")} €</span>
                                    </div>
                                  ))}
                                  <div className="border-t pt-2 flex justify-between font-semibold">
                                    <span>Yhteensä</span>
                                    <span>{order.total.toFixed(2).replace(".", ",")} €</span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="status">Tilauksen tila</Label>
                                <Select
                                  value={order.status}
                                  onValueChange={(value) => updateOrderStatus(order.id, value as Order["status"])}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Odottaa</SelectItem>
                                    <SelectItem value="processing">Käsittelyssä</SelectItem>
                                    <SelectItem value="shipped">Lähetetty</SelectItem>
                                    <SelectItem value="delivered">Toimitettu</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div>
                                <Label htmlFor="tracking">Seurantanumero</Label>
                                <Input
                                  id="tracking"
                                  value={trackingNumber}
                                  onChange={(e) => setTrackingNumber(e.target.value)}
                                  placeholder="Syötä seurantanumero"
                                />
                              </div>

                              <div>
                                <Label htmlFor="notes">Muistiinpanot</Label>
                                <Textarea
                                  id="notes"
                                  value={notes}
                                  onChange={(e) => setNotes(e.target.value)}
                                  placeholder="Lisää muistiinpanoja..."
                                  rows={3}
                                />
                              </div>

                              <Button onClick={() => updateOrderTracking(order.id)} className="w-full">
                                Tallenna tiedot
                              </Button>

                              {order.trackingNumber && (
                                <Button
                                  variant="outline"
                                  onClick={() => sendTrackingEmail(order)}
                                  className="w-full gap-2"
                                >
                                  <Mail className="h-4 w-4" />
                                  Lähetä seurantatieto asiakkaalle
                                </Button>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button variant="outline" size="sm" onClick={() => copyAddress(order)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Kopioi osoite
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

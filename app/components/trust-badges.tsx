"use client"

import { Truck, Shield, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"

export function TrustBadges() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      icon: Truck,
      title: t("freeShipping"),
      description: t("freeShippingDesc"),
    },
    {
      icon: Shield,
      title: t("securePayment"),
      description: t("securePaymentDesc"),
    },
    {
      icon: RefreshCw,
      title: t("returnPolicy"),
      description: t("returnPolicyDesc"),
    },
  ]

  return (
    <section className="py-12 border-y bg-muted/30 texture-luxury texture-noise relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-3 ${isVisible ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary/20">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

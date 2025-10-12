"use client"

import { Truck, Shield, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const PaymentLogos = () => (
  <div className="flex items-center justify-center gap-1.5 mt-2">
    {/* Visa */}
    <div className="bg-white rounded px-1.5 py-0.5 shadow-sm border border-gray-200">
      <svg className="h-3 w-auto" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 2.5L15.8 13.5H13.2L15.9 2.5H18.5Z" fill="#1434CB" />
        <path
          d="M27.2 2.7C26.6 2.5 25.6 2.3 24.4 2.3C21.8 2.3 20 3.6 20 5.5C20 7 21.3 7.8 22.3 8.3C23.3 8.8 23.7 9.1 23.7 9.6C23.7 10.3 22.9 10.6 22.1 10.6C21 10.6 20.4 10.5 19.5 10.1L19.1 9.9L18.7 12.3C19.4 12.6 20.7 12.9 22 12.9C24.8 12.9 26.5 11.6 26.5 9.6C26.5 8.4 25.7 7.5 24 6.8C23.1 6.3 22.6 6 22.6 5.5C22.6 5 23.2 4.5 24.3 4.5C25.3 4.5 26 4.7 26.6 4.9L26.9 5L27.2 2.7Z"
          fill="#1434CB"
        />
        <path
          d="M31.8 2.5C31.2 2.5 30.7 2.8 30.5 3.4L26.3 13.5H29.1L29.7 11.8H33L33.3 13.5H35.8L33.6 2.5H31.8ZM30.5 9.6L31.7 5.9L32.4 9.6H30.5Z"
          fill="#1434CB"
        />
        <path d="M11.5 2.5L8.9 10.2L8.6 8.7C8.1 7.1 6.5 5.4 4.7 4.5L7 13.5H9.8L14.3 2.5H11.5Z" fill="#1434CB" />
        <path d="M6.2 2.5H2L2 2.7C5.2 3.5 7.3 5.5 8.2 8.1L7.3 3.4C7.2 2.8 6.7 2.5 6.2 2.5Z" fill="#FAA61A" />
      </svg>
    </div>

    {/* Mastercard */}
    <div className="bg-white rounded px-1.5 py-0.5 shadow-sm border border-gray-200">
      <svg className="h-3 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="16" r="10" fill="#EB001B" />
        <circle cx="30" cy="16" r="10" fill="#F79E1B" />
        <path
          d="M24 8.5C22.2 10 21 12.3 21 15C21 17.7 22.2 20 24 21.5C25.8 20 27 17.7 27 15C27 12.3 25.8 10 24 8.5Z"
          fill="#FF5F00"
        />
      </svg>
    </div>

    {/* Klarna */}
    <div className="bg-[#FFB3C7] rounded px-1.5 py-0.5 shadow-sm border border-gray-200">
      <svg className="h-3 w-auto" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
          x="0"
          y="9"
          fontFamily="Arial, sans-serif"
          fontSize="8"
          fontWeight="700"
          fill="#000000"
          letterSpacing="0.5"
        >
          Klarna
        </text>
      </svg>
    </div>
  </div>
)

export function TrustBadges() {
  const { t } = useLanguage()

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
      paymentLogos: true,
    },
    {
      icon: RefreshCw,
      title: t("returnPolicy"),
      description: t("returnPolicyDesc"),
    },
  ]

  return (
    <section className="py-16 border-y bg-gradient-to-r from-muted/30 via-accent/5 to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 fade-in group cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-gradient-to-br from-accent/20 to-gold/20 p-5 border border-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:border-accent/50">
                <badge.icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-accent">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{badge.description}</p>
                {badge.paymentLogos && <PaymentLogos />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://www.elementusmarcas.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: '', // substituir pelo código do Google Search Console
  },
  title: {
    default: 'Elementus Marcas e Patentes — Proteção Intelectual',
    template: '%s | Elementus Marcas e Patentes',
  },
  description:
    'Registro de marcas, patentes e propriedade intelectual com agilidade, transparência e sem burocracia. Depósito junto ao INPI com acompanhamento completo.',
  keywords: [
    'registro de marcas',
    'patentes',
    'propriedade intelectual',
    'INPI',
    'proteção de marca',
    'registro de patente',
    'marcas e patentes',
    'escritório de marcas',
    'propriedade industrial',
  ],
  authors: [{ name: 'Elementus Marcas e Patentes', url: siteUrl }],
  creator: 'Elementus Marcas e Patentes',
  publisher: 'Elementus Marcas e Patentes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Elementus Marcas e Patentes',
    title: 'Elementus Marcas e Patentes — Proteção Intelectual',
    description:
      'Registro de marcas, patentes e propriedade intelectual com agilidade, transparência e sem burocracia. Depósito junto ao INPI com acompanhamento completo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elementus Marcas e Patentes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elementus Marcas e Patentes — Proteção Intelectual',
    description:
      'Registro de marcas, patentes e propriedade intelectual com agilidade, transparência e sem burocracia. Depósito junto ao INPI com acompanhamento completo.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/icon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/logo-5.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
    shortcut: '/icon.ico',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Elementus Marcas e Patentes',
  description:
    'Registro de marcas, patentes e propriedade intelectual com agilidade, transparência e sem burocracia. Depósito junto ao INPI com acompanhamento completo.',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/og-image.png`,
  telephone: '+55-16-99143-5330',
  email: 'contato@elementusmarcas.com.br',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  areaServed: 'BR',
  serviceType: ['Registro de Marcas', 'Registro de Patentes', 'Propriedade Intelectual', 'Propriedade Industrial'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} bg-[#0A1628] scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MP6TMS2L');`,
          }}
        />
        {/* Google Analytics */}
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4G7T52KPC2"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4G7T52KPC2');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MP6TMS2L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

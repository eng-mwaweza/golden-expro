import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://golden-expro.vercel.app'),
  title: {
    default: 'GOLDEN EXPRO - Procurement & Mining Solutions',
    template: '%s | GOLDEN EXPRO'
  },
  description: 'GOLDEN EXPRO is a premier mining exploration and consulting company based in Tanzania, specializing in exploration project management, 3D geological modelling, geometallurgical modelling, and mining studies for international investors.',
  keywords: [
    'mining',
    'exploration',
    'geology',
    'Tanzania mining',
    'mining consulting',
    'geological modelling',
    'mining strategy',
    'hydrogeology',
    'mining training',
    'gold exploration',
    'mineral resources',
    'African mining'
  ],
  authors: [{ name: 'GOLDEN EXPRO' }],
  creator: 'GOLDEN EXPRO',
  publisher: 'GOLDEN EXPRO',
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
    title: 'GOLDEN EXPRO - Procurement & Mining Solutions',
    description: 'Your trusted partner in mining exploration, geological modelling, and strategic consulting in Tanzania and beyond.',
    url: 'https://golden-expro.vercel.app',
    siteName: 'GOLDEN EXPRO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GOLDEN EXPRO - Mining Solutions',
      },
    ],
    locale: 'en_TZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOLDEN EXPRO - Procurement & Mining Solutions',
    description: 'Your trusted partner in mining exploration and consulting in Tanzania.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://golden-expro.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
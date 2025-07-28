import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ClementineFilms - Blog de Cine Nacional',
  description: 'Descubre las mejores películas, cortos e historias del cine nacional. Un blog dedicado al cine independiente y las nuevas voces del séptimo arte.',
  keywords: 'cine nacional, películas, cortos, streaming, cine independiente, blog de cine',
  authors: [{ name: 'ClementineFilms' }],
  openGraph: {
    title: 'ClementineFilms - Blog de Cine Nacional',
    description: 'Descubre las mejores películas, cortos e historias del cine nacional.',
    url: 'https://clementinefilms.com',
    siteName: 'ClementineFilms',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClementineFilms - Blog de Cine Nacional',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClementineFilms - Blog de Cine Nacional',
    description: 'Descubre las mejores películas, cortos e historias del cine nacional.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 
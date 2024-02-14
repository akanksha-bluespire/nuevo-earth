import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nuevo-Earth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={inter.className} >
        <div>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}

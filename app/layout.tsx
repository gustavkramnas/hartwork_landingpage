import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/NavComponent'
import { Footer } from './components/FooterComponent'
import {theme} from './utils/appSettings.ts/theme'

export const metadata: Metadata = {
  title: theme.company,
  description: theme.description,
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

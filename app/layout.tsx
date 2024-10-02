import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/baseComponents/NavComponent'
import { Footer } from './components/baseComponents/FooterComponent'
import { theme } from './utils/appSettings/theme'

export const metadata: Metadata = {
  title: theme.company,
  description: theme.description
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

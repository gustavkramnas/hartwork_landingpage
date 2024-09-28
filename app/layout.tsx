import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/NavComponent'
import { Footer } from './components/FooterComponent'

export const metadata: Metadata = {
  title: 'Empty landing page',
  description: 'Remove this and write your own description'
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

import type { Metadata } from 'next'
// import { Manrope } from 'next/font/google'
import './globals.css'
import { HeaderComponent } from './components/navbarComponents/HeaderComponent'
import { Footer } from './components/footerComponents/FooterComponent'
import { theme } from './utils/appSettings/theme'
import StyledComponentsRegistry from './lib/registry'
import CookieBanner from './components/cookieBanner/CookieBanner'

// const manrope = Manrope({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800'],
//   display: 'swap'
// })

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
    //     <html lang="en" className={manrope.className}>
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <HeaderComponent />
          {children}
          <Footer />
          <CookieBanner />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}

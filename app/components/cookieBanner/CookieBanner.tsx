'use client'
import { useState, useEffect } from 'react'
import { CookieContainer, CookieWrapper } from './StyledComponents'
import { P } from '../fontComponents/fonts'
import { Button } from '../buttonComponents/ButtonComponents'

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <CookieWrapper>
      <CookieContainer>
        <P $white>
          Vi använder cookies för att förbättra din upplevelse. Genom att
          fortsätta godkänner du vår användning av cookies.
        </P>
        <Button onClick={handleAccept}>Jag förstår</Button>
      </CookieContainer>
    </CookieWrapper>
  )
}


export default CookieBanner

export const theme = {
  company: 'Hartwork',
  description: 'Hartwork agency',
  pages: {
    links: [
      { title: 'Om oss', href: '/about' },
      { title: 'Kontakt', href: '/contact' },
      { title: 'Kunduppdrag', href: '/projects' }
    ]
  },
  style: {
    colors: {
      primary: '#000000',
      secondary: '#801818',
      tertiary: '#ffffff'
    },
    font: {
      fontFamily: `'Manrope', sans-serif`,
      headerSize: '32px',
      linkButtonWithArrowSize: '17px',
      linkButtonWithArrowWeight: 'bold',
      headLineSize: '32px',
      paragraphSize: '16px',
      paddingBottom: '12px',
      paragraphLarger: '16px',
      paragraphLineHeight: '1.5',
      paragraphProjectSize: '14px',
      smallParagraphSize: '12px'
    },
    layout: {
      sizes: {
        maxWidth: '1200px',
        mobileQueries: '768px'
      },
      mobileSectionPadding: '24px',
      desktopSectionPadding: '48px',
      desktopEdgePadding: '24px',
      mobileEdgePadding: '6px',
      buttonsPadding: '12px 24px',
      buttonRadius: '100px',
      gap: '12px',
      desktopPaddingTop: '180px',
      mobilePaddingTop: '80px',
      mobileContainerNavPadding: '60px'
    },
    graphicsRendering: {
      strokeWeight: '1px'
    }
  }
}

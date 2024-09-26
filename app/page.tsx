import { ATitle } from './components/AStyledComponent'
import Image from 'next/image'
import { fetchExample } from './utils/contentful/queries/home'

type ImageFile = {
  url: string
}

type ExampleResponse = {
  fields: {
    title: string
    image: {
      fields: {
        file: ImageFile
        title: string
      }
    }
  }
}

// Serverkomponent som hämtar data och visar den
export default async function Home() {
  // Hämta data från Contentful
  const responseExample = (await fetchExample()) as ExampleResponse
  console.log('Fetched data:', responseExample)
  // Hämta titel och bilddata
  const title = responseExample.fields.title
  const imageUrl = responseExample.fields.image?.fields.file.url || ''

  const absoluteImageUrl = imageUrl ? `https:${imageUrl}` : ''

  return (
    <>
      <ATitle>{title}</ATitle>
      {imageUrl ? (
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>
          <Image
            src={absoluteImageUrl}
            alt={'bajs'}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : (
        <>KUK</>
      )}
    </>
  )
}

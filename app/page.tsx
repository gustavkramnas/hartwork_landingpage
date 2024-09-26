import { ATitle } from './components/AStyledComponent'
import Image from 'next/image'
import { fetchExample } from './utils/contentful/queries/home'

type ExampleResponse = {
  fields: {
    title: string
    image: {
      fields: {
        file: { url: string }
        title: string
      }
    }
  }
}

export default async function Home() {
  const responseExample = (await fetchExample()) as ExampleResponse
  console.log('Fetched data:', responseExample)

  const absoluteImageUrl = `https:${
    responseExample.fields.image?.fields.file.url || ''
  }`

  return (
    <>
      <ATitle>{responseExample.fields.title}</ATitle>
      {absoluteImageUrl ? (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image
            src={absoluteImageUrl}
            alt={'Alt text'}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : (
        <ATitle>No image</ATitle>
      )}
    </>
  )
}

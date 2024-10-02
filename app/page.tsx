import { ATitle } from './components/AStyledComponent'
import Image from 'next/image'
import { fetchExample } from './utils/contentful/queries/home'

import { fetchPosts } from './utils/contentful/queries/posts'

import { Post } from './types/Types'
import { PostComponent } from './components/PostComponent'
import { H1, Heading3 } from './components/fontComponents/fonts'
import { TestComponent } from './components/pageComponents/PageComponents'

export default async function Home() {
  const responseExample = await fetchExample()

  const absoluteImageUrl = `https:${
    responseExample.fields.image?.fields.file.url || ''
  }`

  const posts = await fetchPosts()
  console.log('posts:', posts)

  return (
    <>
      <H1 text={responseExample.fields.title} />
      <TestComponent text={'Test Component'} />
      <Heading3>{responseExample.fields.title}</Heading3>
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

      <div>
        {posts.map((post: Post) => {
          const thumbnailUrl = `https:${
            post.fields.thumbnail?.fields.file.url || ''
          }`
          const title = post.fields.title || 'No Title'
          const slug = post.fields.slug || 'no-slug'

          return (
            <PostComponent
              key={post.sys.id}
              title={title}
              thumbnailUrl={thumbnailUrl}
              slug={slug}
            />
          )
        })}
      </div>
    </>
  )
}

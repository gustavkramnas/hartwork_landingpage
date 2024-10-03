import { fetchPosts } from '../utils/contentful/queries/posts'
import Image from 'next/image'
import { Post } from '../types/Types'
import { H1 } from '../components/fontComponents/fonts'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const posts = await fetchPosts()

  const post = posts.find((post: Post) => post.fields.slug === params.slug)

  if (!post) {
    return <H1>No Post Found</H1>
  }

  const thumbnailUrl = post.fields.thumbnail?.fields.file.url
    ? `https:${post.fields.thumbnail.fields.file.url}`
    : ''

  return (
    <div>
      {thumbnailUrl && (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image
            src={thumbnailUrl}
            alt={post.fields.title || 'Alt text'}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <H1>{post.fields.title}</H1>
    </div>
  )
}

export default SlugPage

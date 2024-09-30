import { fetchPosts } from '../utils/contentful/queries/posts'
import { ATitle } from '../components/AStyledComponent'
import Image from 'next/image'
import { Post } from '../types/Types'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const posts = await fetchPosts()

  const post = posts.find((post: Post) => post.fields.slug === params.slug)

  if (!post) {
    return <ATitle>No Post Found</ATitle>
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
      <ATitle>{post.fields.title}</ATitle>
    </div>
  )
}
//test commit

export default SlugPage

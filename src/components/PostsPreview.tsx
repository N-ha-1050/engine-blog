import { Post } from '@/lib/post'
import { PostPreview } from './PostPreview'

export type PostsPreviewProps = {
  posts: Post[]
}

export const PostsPreview: React.FC<PostsPreviewProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

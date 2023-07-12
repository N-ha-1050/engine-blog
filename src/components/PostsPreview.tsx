import { Post } from '@/lib/post'
import { PostPreview } from './PostPreview'

export type PostsPreviewProps = {
  posts: Post[]
}

export const PostsPreview: React.FC<PostsPreviewProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

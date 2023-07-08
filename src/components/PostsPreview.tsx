import { Post } from '@/lib/post'
import { PostPreview } from './PostPreview'

export type PostsPreviewProps = {
  posts: Post[]
}

export const PostsPreview: React.FC<PostsPreviewProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 content-around">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

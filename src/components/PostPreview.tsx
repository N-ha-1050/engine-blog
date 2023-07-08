import { Post } from '@/lib/post'
import Link from 'next/link'

export type PostPreviewProps = {
  post: Post
}

export const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </Link>
  )
}

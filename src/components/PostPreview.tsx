import { Post } from '@/lib/post'
import Link from 'next/link'

export type PostPreviewProps = {
  post: Post
}

export const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="p-8 border-2 rounded-xl border-blue-950 duration-200 hover:border-blue-700 hover:bg-blue-50"
    >
      <h1 className="text-xl truncate">{post.title}</h1>
      <div className="truncate indent-4">{post.content}</div>
    </Link>
  )
}

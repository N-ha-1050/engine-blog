import { Post } from '@/types/post'
import Link from 'next/link'

export type PostPreviewProps = {
  post: Post
}

export const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const createdAtDate = new Date(post.createdAt)
  return (
    <Link
      href={`/posts/${post.id}`}
      className="rounded-xl border-2 border-blue-950 p-8 duration-200 hover:border-blue-700 hover:bg-blue-50"
    >
      <div className="flex items-end gap-4">
        <h2 className="truncate text-xl">{post.title}</h2>
        <p>{createdAtDate.toLocaleDateString()}</p>
      </div>
      <div className="truncate indent-4">{post.content}</div>
    </Link>
  )
}

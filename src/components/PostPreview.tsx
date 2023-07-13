import { Post } from '@/lib/post'
import Link from 'next/link'

export type PostWithPlainTextAndLocalDate = Post & {
  plainText: string
  createdAtLocalDate: string
}

export type PostPreviewProps = {
  postWithPlainText: PostWithPlainTextAndLocalDate
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  postWithPlainText: post,
}) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="rounded-xl border-2 border-blue-950 p-8 duration-200 hover:border-blue-700 hover:bg-blue-50"
    >
      <div className="flex items-end gap-4">
        <h2 className="truncate text-xl">{post.title}</h2>
        <p>{post.createdAtLocalDate}</p>
      </div>
      <p className="truncate indent-4">{post.plainText}</p>
    </Link>
  )
}

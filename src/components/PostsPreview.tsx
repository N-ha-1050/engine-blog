import { PostPreview, PostWithPlainText } from './PostPreview'

export type PostsPreviewProps = {
  postsWithPlainText: PostWithPlainText[]
}

export const PostsPreview: React.FC<PostsPreviewProps> = ({
  postsWithPlainText: posts,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostPreview key={post.id} postWithPlainText={post} />
      ))}
    </div>
  )
}

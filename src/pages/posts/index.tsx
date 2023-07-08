import { GetStaticProps, NextPage } from 'next'
import { PostsPreview } from '@/components/PostsPreview'
import { Post } from '@/lib/post'
import { getPosts } from '@/lib/getPost'

type Props = {
  posts: Post[]
}

const PostList: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>記事一覧</h1>
      <PostsPreview posts={posts} />
    </div>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPosts()
  return {
    props: {
      posts,
    },
  }
}
export default PostList

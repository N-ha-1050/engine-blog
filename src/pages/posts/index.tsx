import { GetStaticProps, NextPage } from 'next'
import { Post, PostsPreview } from '@/components/PostsPreview'

const samplePosts: Post[] = [
  { id: 1, title: 'Test', content: 'test content' },
  { id: 2, title: 'Second', content: 'second content' },
]

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
  return {
    props: {
      posts: samplePosts,
    },
  }
}
export default PostList

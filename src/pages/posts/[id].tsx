import { Post } from '@/components/PostsPreview'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const samplePosts: Post[] = [
  { id: 1, title: 'Test', content: 'test content' },
  { id: 2, title: 'Second', content: 'second content' },
]

const PostDetail: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  )
}

type Props = {
  post: Post
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { params } = ctx
  const post = samplePosts.find((post) => post.id.toString() === params?.id)

  if (!post) {
    throw new Error(`Could not find a post with id:${params?.id}`)
  }
  return {
    props: {
      post: post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = samplePosts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default PostDetail

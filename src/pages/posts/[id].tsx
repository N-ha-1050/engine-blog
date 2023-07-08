import { getPost, getPostsId } from '@/lib/getPost'
import { Post } from '@/lib/post'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import markdownit from 'markdown-it'

const PostDetail: NextPage<Props> = ({ post }) => {
  const createdAtDate = new Date(post.createdAt)
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-2">{post.title}</h1>
      <p className="mb-16">活動日: {createdAtDate.toLocaleDateString()}</p>
      <div
        className="prose m-0"
        dangerouslySetInnerHTML={{ __html: markdownit().render(post.content) }}
      />
    </div>
  )
}

type Props = {
  post: Post
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { params } = ctx
  if (!(typeof params?.id === 'string')) {
    throw new Error(`Could not get a post id from params: ${params}`)
  }
  const post = getPost(params.id)

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
  const paths = getPostsId().map((postId) => ({
    params: { id: postId.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default PostDetail

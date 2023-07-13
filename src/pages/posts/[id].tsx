import { getPost, getPostsId } from '@/lib/getPost'
import { Post } from '@/lib/post'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import MarkdownIt from 'markdown-it'

type PostWithHtml = Post & { html: string }

type Props = {
  postWithHtml: PostWithHtml
}

const PostDetail: NextPage<Props> = ({ postWithHtml: post }) => {
  const createdAtDate = new Date(post.createdAt)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-2">{post.title}</h1>
      <p className="mb-16">
        活動日: {createdAtDate.toLocaleDateString(undefined, options)}
      </p>
      <div
        className="prose m-0"
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
      />
    </div>
  )
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
  const md = new MarkdownIt()
  const postWithHtml: PostWithHtml = {
    ...post,
    html: md.render(post.content),
  }
  return {
    props: {
      postWithHtml,
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

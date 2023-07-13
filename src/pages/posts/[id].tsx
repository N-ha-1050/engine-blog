import { getPost, getPostsId } from '@/lib/getPost'
import { Post } from '@/lib/post'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import MarkdownIt from 'markdown-it'

type PostWithHtmlAndLocalDate = Post & {
  html: string
  createdAtLocalOptDate: string
}

type Props = {
  postWithHtmlAndLocalDate: PostWithHtmlAndLocalDate
}

const PostDetail: NextPage<Props> = ({ postWithHtmlAndLocalDate: post }) => {
  return (
    <div>
      <h1 className="mb-2 mt-8 text-4xl">{post?.title || 'Error'}</h1>
      <p className="mb-16">活動日: {post?.createdAtLocalOptDate || 'Error'}</p>
      <div
        className="prose m-0"
        dangerouslySetInnerHTML={{
          __html: post?.html || 'Error',
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
    throw new Error(`Could not find a post with id: ${params?.id}`)
  }
  const createdAtDate = new Date(post.createdAt)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const md = new MarkdownIt()
  const postWithHtmlAndLocalDate: PostWithHtmlAndLocalDate = {
    ...post,
    html: md.render(post.content),
    createdAtLocalOptDate: createdAtDate.toLocaleDateString(undefined, options),
  }
  return {
    props: {
      postWithHtmlAndLocalDate,
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

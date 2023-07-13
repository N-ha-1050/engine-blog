import { GetStaticProps, NextPage } from 'next'
import { PostsPreview } from '@/components/PostsPreview'
import { getPosts } from '@/lib/getPost'
import { PostWithPlainTextAndLocalDate } from '@/components/PostPreview'

import MarkdownIt from 'markdown-it'
import plainText from 'markdown-it-plain-text'

type Props = {
  postsWithPlainTextAndLocalDate: PostWithPlainTextAndLocalDate[]
}

const PostList: NextPage<Props> = ({
  postsWithPlainTextAndLocalDate: posts,
}) => {
  return (
    <div>
      <h1 className="mb-8 text-4xl">一覧</h1>
      <PostsPreview postsWithPlainText={posts} />
    </div>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPosts()
  const postsWithPlainTextAndLocalDate: PostWithPlainTextAndLocalDate[] =
    posts.map((post) => {
      const createdAtDate = new Date(post.createdAt)
      const md = new MarkdownIt()
      md.use(plainText)
      md.render(post.content)
      return {
        ...post,
        plainText: (md as any).plainText,
        createdAtLocalDate: createdAtDate.toLocaleDateString(),
      }
    })
  return {
    props: {
      postsWithPlainTextAndLocalDate,
    },
  }
}
export default PostList

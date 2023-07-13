import { GetStaticProps, NextPage } from 'next'
import { PostsPreview } from '@/components/PostsPreview'
import { getPosts } from '@/lib/getPost'
import { PostWithPlainText } from '@/components/PostPreview'

import MarkdownIt from 'markdown-it'
import plainText from 'markdown-it-plain-text'

type Props = {
  postsWithPlainText: PostWithPlainText[]
}

const PostList: NextPage<Props> = ({ postsWithPlainText: posts }) => {
  return (
    <div>
      <h1 className="mb-8 text-4xl">一覧</h1>
      <PostsPreview postsWithPlainText={posts} />
    </div>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPosts()
  const postsWithPlainText: PostWithPlainText[] = posts.map((post) => {
    const md = new MarkdownIt()
    md.use(plainText)
    md.render(post.content)
    return {
      ...post,
      plainText: (md as any).plainText,
    }
  })
  return {
    props: {
      postsWithPlainText,
    },
  }
}
export default PostList

import { Post } from '@/types/post'
import { GetStaticProps, NextPage } from 'next'
import fs from 'fs/promises'
import { PostPreview } from '@/components/PostPreview'

type Props = {
  posts: Post[]
}

const PostList: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <h1 className="mb-8 text-4xl">一覧</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsDir = './src/pages/posts'
  const filenames = await fs.readdir(postsDir)
  const posts: Post[] = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`./posts/${filename}`)
      return metadata
    })
  )
  return {
    props: {
      posts: posts.sort((post1, post2) => post2.id - post1.id),
    },
  }
}

export default PostList

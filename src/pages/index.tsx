import { SocialLink, SocialLinkProps } from '@/components/SocialLink'
import { NextPage } from 'next'
import Link from 'next/link'

const socialLinks: SocialLinkProps[] = [
  { url: 'https://github.com/N-ha-1050', displayName: 'GitHub' },
  { url: 'https://twitter.com/N_ha_1050', displayName: 'Twitter' },
  { url: 'https://atcoder.jp/users/N_ha_1050', displayName: 'AtCoder' },
]

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2 font-mono text-4xl">N_ha</h1>
      <ul className="mb-4 flex gap-4">
        {socialLinks.map((socialLink, index) => (
          <SocialLink key={index} {...socialLink} />
        ))}
      </ul>
      <p className="mb-2">プログラミングの活動記録です</p>
      <Link
        href="posts/"
        className="mb-2 border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
      >
        すべて見る
      </Link>
    </div>
  )
}

export default Home

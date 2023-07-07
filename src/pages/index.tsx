import { SocialLink, SocialLinkProps } from '@/components/SocialLink'
import { NextPage } from 'next'

const socialLinks: SocialLinkProps[] = [
  { url: 'https://github.com/N-ha-1050', displayName: 'GitHub' },
  { url: 'https://twitter.com/N_ha_ycu', displayName: 'Twitter' },
  { url: 'https://atcoder.jp/users/N_ha_1050', displayName: 'AtCoder' },
]

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl pb-8">N_ha</h1>
      <p className="pb-2">プログラミングの活動記録です</p>
      <ul className="flex gap-4">
        {socialLinks.map((socialLink, index) => (
          <SocialLink key={index} {...socialLink} />
        ))}
      </ul>
    </div>
  )
}

export default Home

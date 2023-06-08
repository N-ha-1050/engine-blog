import { NextPage } from "next";

const social_links: SocialLinkProps[] = [
  {url: 'https://github.com/N-ha-1050', display_name: 'GitHub'},
  {url: 'https://twitter.com/N_ha_ycu', display_name: 'Twitter'},
  {url: 'https://atcoder.jp/users/N_ha_1050', display_name: 'AtCoder'},
]

type SocialLinkProps = {
  url: string
  display_name: string
}
const SocialLink = ({url, display_name}: SocialLinkProps) => {
  return (
    <li><a href={url}>{display_name}</a></li>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>N_ha</h1>
      <p>Hello, World!</p>
      <ul className="flex gap-5">
        {social_links.map((social_link, index) => (
          <SocialLink
            key={index}
            {...social_link}
          />
        ))}
      </ul>
    </div>
  )
}

export default Home
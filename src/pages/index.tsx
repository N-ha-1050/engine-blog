import { NextPage } from "next";
import { ReactElement } from "react";

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
    <div>
      <h1>N_ha</h1>
      <p>Hello, World!</p>
      <ul>
        <SocialLink url='https://github.com/N-ha-1050' display_name='GitHub' />
        <SocialLink url='https://twitter.com/N_ha_ycu' display_name='Twitter' />
        <SocialLink url='https://atcoder.jp/users/N_ha_1050' display_name='AtCoder' />
      </ul>
    </div>
  )
}

export default Home
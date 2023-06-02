import { NextPage } from "next";

const Home: NextPage = () => {
  return (<div>
    <h1>N_ha</h1>
    <p>Hello, World!</p>
    <ul>
      {/* Todo: コンポーネント化 */}
      <li><a href="https://github.com/N-ha-1050">GitHub</a></li>
      <li><a href="https://twitter.com/N_ha_ycu">Twitter</a></li>
      <li><a href="https://atcoder.jp/users/N_ha_1050">AtCoder</a></li>
    </ul>
  </div>)
}

export default Home
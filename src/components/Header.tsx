import Link from 'next/link'
import React from 'react'
import { MenuLink, MenuLinkProps } from './MeunLink'
import 'material-icons/iconfont/outlined.css'

const menuLinks: MenuLinkProps[] = [
  { text: 'Home', to: '/' },
  { text: 'Posts', to: '/posts' },
]
const Header = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  return (
    <header className="bg-blue-100">
      <nav className="mx-auto max-w-7xl px-5 py-2.5 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="m-4 border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
          >
            プログラミング日記
          </Link>
          <button
            onClick={() => setOpen(!isOpen)}
            className="m-4 flex  flex-row gap-1 border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80 md:hidden"
          >
            <span className="material-icons-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
            Menu
          </button>
          {/* <Link
        href="/"
        className="text-4xl py-5 px-5 bg-blue-400 text-blue-950 rounded-full"
      >
        N_ha
      </Link> */}
          {/* <div className="flex-1" />
      <button className="text-blue-950">Menu</button> */}
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col items-center gap-4 p-2 md:flex-row">
            {menuLinks.map((menuLink) => (
              <MenuLink key={menuLink.text} {...menuLink} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

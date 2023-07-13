import Link from 'next/link'
import React from 'react'
import { MenuLink, MenuLinkProps } from './MeunLink'
const menuLinks: MenuLinkProps[] = [
  { text: 'Home', to: '/' },
  { text: 'Posts', to: '/posts' },
]
const Header = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  return (
    <header className="bg-blue-100">
      <nav className="py-2.5 px-5 max-w-7xl mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="m-4 border-b border-transparent duration-200 hover:opacity-80 hover:border-blue-950"
          >
            プログラミング日記
          </Link>
          <button
            onClick={() => setOpen(!isOpen)}
            className="m-4 flex flex-row gap-1 border-b border-transparent duration-200 hover:opacity-80 hover:border-blue-950 md:hidden"
          >
            <span className="material-symbols-outlined">
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
          <ul className="p-2 flex flex-col gap-4 md:flex-row items-center">
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

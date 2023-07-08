import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center py-2.5 px-5 max-w-7xl mx-auto">
      <Link
        href="/"
        className="border-b border-transparent duration-200 hover:opacity-80 hover:border-blue-950"
      >
        活動記録
      </Link>
      {/* <Link
        href="/"
        className="text-4xl py-5 px-5 bg-blue-400 text-blue-950 rounded-full"
      >
        N_ha
      </Link> */}
      {/* <div className="flex-1" />
      <button className="text-blue-950">Menu</button> */}
    </header>
  )
}

export default Header

import Link from 'next/link'

export type MenuLinkProps = {
  text: string
  to: string
}

export const MenuLink = ({ text, to }: MenuLinkProps) => {
  return (
    <li className="self-stretch ">
      <Link href={to}>
        <p className="rounded p-2 text-center duration-200 hover:bg-blue-50 hover:opacity-80">
          {text}
        </p>
      </Link>
    </li>
  )
}

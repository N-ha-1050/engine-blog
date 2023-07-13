import Link from 'next/link'

export type MenuLinkProps = {
  text: string
  to: string
}

export const MenuLink = ({ text, to }: MenuLinkProps) => {
  return (
    <li className="self-stretch ">
      <Link href={to}>
        <p className="text-center hover:bg-blue-50 p-2 rounded duration-200 hover:opacity-80">
          {text}
        </p>
      </Link>
    </li>
  )
}

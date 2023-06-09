import Link from 'next/link'

export type SocialLinkProps = {
  url: string
  displayName: string
}

export const SocialLink = ({ url, displayName }: SocialLinkProps) => {
  return (
    <li className="hover:opacity-80 duration-200 hover:border-b border-gray-800">
      <Link href={url}>{displayName}</Link>
    </li>
  )
}

import Link from 'next/link'

export type SocialLinkProps = {
  url: string
  displayName: string
}

export const SocialLink = ({ url, displayName }: SocialLinkProps) => {
  return (
    <li className="border-b border-transparent duration-200 hover:opacity-80 hover:border-blue-950">
      <Link href={url}>{displayName}</Link>
    </li>
  )
}

import Link from 'next/link'

export const Heading1 = ({ ...props }) => (
  <h1 className="my-4 text-center text-4xl" {...props} />
)
export const Heading2 = ({ ...props }) => (
  <h2 className="my-4 text-4xl" {...props} />
)
export const Heading3 = ({ ...props }) => <h3 className="prose" {...props} />
export const Anchor = ({ ...props }) => <Link href="/" {...props} />

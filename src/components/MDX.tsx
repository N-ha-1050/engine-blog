import Link from 'next/link'

export const Heading1 = ({ ...props }) => (
  <div className="not-prose">
    <h1 className="my-4 text-center text-4xl" {...props} />
  </div>
)
export const Heading2 = ({ ...props }) => (
  <div className="not-prose">
    <h2 className="my-4 text-4xl" {...props} />
  </div>
)
export const Heading3 = ({ ...props }) => (
  <div className="prose">
    <h3 {...props} />
  </div>
)
export const Anchor = ({ ...props }) => (
  <div className="not-prose">
    <Link className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80" href="/" {...props} />
  </div>
)

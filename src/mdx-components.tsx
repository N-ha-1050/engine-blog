import type { MDXComponents } from 'mdx/types'
import { Anchor, Heading1, Heading2, Heading3 } from './components/MDX'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: (props) => <h4 className="prose" {...props} />,
    a: Anchor,
    // p: (props) => <p className="prose" {...props} />,
    ul: (props) => <ul className="prose" {...props} />,
    li: (props) => <li className="prose" {...props} />,
    ...components,
  }
}

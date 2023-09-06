import type { MDXComponents } from 'mdx/types'
import { Anchor, Heading1, Heading2, Heading3 } from './components/MDX'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: (props) => (
      <div className="prose">
        <h4 {...props} />
      </div>
    ),
    a: Anchor,
    ul: (props) => (
      <div className="prose">
        <ul {...props} />
      </div>
    ),
    ol: (props) => (
      <div className="prose">
        <ol {...props} />
      </div>
    ),
    ...components,
  }
}

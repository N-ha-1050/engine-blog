import { ReactNode } from 'react'
import Header from './Header'
import {
  Noto_Sans_JP,
  Noto_Sans,
  Noto_Sans_Mono,
  Noto_Color_Emoji,
} from 'next/font/google'

const notoJp = Noto_Sans_JP({
  // weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})
// const noto = Noto_Sans({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-noto-sans',
// })
const notoMono = Noto_Sans_Mono({
  // weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-mono',
})
const notoEmoji = Noto_Color_Emoji({
  weight: ['400'],
  subsets: ['emoji'],
  variable: '--font-noto-color-emoji',
})

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${notoJp.variable} ${notoMono.variable} ${notoEmoji.variable}`}
    >
      <Header />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center p-16">
        {children}
      </main>
    </div>
  )
}

export default Layout

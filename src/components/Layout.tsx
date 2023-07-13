import { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center p-16">
        {children}
      </main>
    </>
  )
}

export default Layout

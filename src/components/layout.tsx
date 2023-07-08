import { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen max-w-7xl mx-auto justify-center flex-col p-4">
        {children}
      </main>
    </>
  )
}

export default Layout

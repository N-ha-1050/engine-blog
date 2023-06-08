import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: {children: ReactNode}) {
    return (
        <>
            <Header />
            <main className="flex min-h-screen max-w-7xl mx-auto justify-center flex-col p-5">
                {children}
            </main>
        </>
    )
}
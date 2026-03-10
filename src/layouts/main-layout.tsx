import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

export default function MainLayout({ children, lang }: { children: ReactNode, lang: string }) {
    return (
        <>
            <Header lang={lang} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
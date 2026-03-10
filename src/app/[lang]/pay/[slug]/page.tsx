import PayView from "@/views/pay-view";

// export const dynamic = 'force-dynamic'
export default async function ContactPage({ params }: any) {
    const { lang, slug } = (await params)
    return (
        <>
            <PayView lang={lang} slug={slug} />
        </>
    );
}



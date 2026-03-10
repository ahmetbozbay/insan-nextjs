import PayView from "@/views/pay-view";

// export const dynamic = 'force-dynamic'
export default async function ContactPage({ params }: any) {
    const lang = (await params).lang
    return (
        <>
            <PayView lang={lang} />
        </>
    );
}



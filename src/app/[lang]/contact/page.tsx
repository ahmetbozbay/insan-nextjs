import ContactView from "@/views/contact-view";
// export const dynamic = 'force-dynamic'
export default async function ContactPage({ params }: any) {
    const lang = (await params).lang
    return (
        <>
            <ContactView lang={lang} />
        </>
    );
}



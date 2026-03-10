import AboutView from "@/views/about-view";
// export const dynamic = 'force-dynamic'
export default async function AboutPage({ params }: any) {
    const lang = (await params).lang
    return (
        <>
            <AboutView lang={lang} />
        </>
    );
}

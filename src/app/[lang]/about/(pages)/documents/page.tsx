import DocumentsView from "@/views/about/documents-view";
import AboutBanner from "../about-banner";

export default async function DocumentsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
    <AboutBanner params={params}>

            <DocumentsView lang={lang} />
    </AboutBanner>
        </>
    );
}

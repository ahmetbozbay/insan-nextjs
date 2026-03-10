import BylawsView from "@/views/about/bylaws-view";
import AboutBanner from "../about-banner";

export default async function BylawsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <BylawsView lang={lang} />
        </AboutBanner>
        </>
    );
}

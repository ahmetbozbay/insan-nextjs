import AboutUsView from "@/views/about/about-us-view";
import AboutBanner from "../about-banner";
import KvkkView from "@/views/about/kvkk-view";

export default async function AboutUsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
            <AboutBanner params={params}>
                <KvkkView lang={lang} />
            </AboutBanner>
        </>
    );
}

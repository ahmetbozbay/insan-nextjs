import AboutUsView from "@/views/about/about-us-view";
import AboutBanner from "../about-banner";

export default async function AboutUsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
            <AboutBanner params={params}>
                <AboutUsView lang={lang} />
            </AboutBanner>
        </>
    );
}

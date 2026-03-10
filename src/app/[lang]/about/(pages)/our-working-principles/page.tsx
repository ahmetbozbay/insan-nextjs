import OurWorkingPrinciplesView from "@/views/about/our-working-principles-view";
import AboutBanner from "../about-banner";

export default async function OurWorkingPrinciplesPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <OurWorkingPrinciplesView lang={lang} />
        </AboutBanner>
        </>
    );
}

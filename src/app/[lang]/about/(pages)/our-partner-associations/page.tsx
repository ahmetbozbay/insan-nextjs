import OurPartnerAssociationsView from "@/views/about/our-partner-associations-view";
import AboutBanner from "../about-banner";

export default async function OurPartnerAssociationsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <OurPartnerAssociationsView lang={lang} />
        </AboutBanner>
        </>
    );
}

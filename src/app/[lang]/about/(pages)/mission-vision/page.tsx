import MissionVisionView from "@/views/about/mission-vision-view";
import AboutBanner from "../about-banner";

export default async function MissionVisionPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <MissionVisionView lang={lang} />
        </AboutBanner>
        </>
    );
}

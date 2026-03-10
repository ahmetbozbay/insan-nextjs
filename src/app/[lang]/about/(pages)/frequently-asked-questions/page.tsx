import FrequentlyAskedQuestionsView from "@/views/about/frequently-asked-questions-view";
import AboutBanner from "../about-banner";

export default async function FrequentlyAskedQuestionsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <FrequentlyAskedQuestionsView lang={lang} />
        </AboutBanner>
        </>
    );
}

import PressCoverageView from "@/views/about/press-coverage-view";
import AboutBanner from "../about-banner";

export default async function PressCoveragePage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
            <AboutBanner params={params}>
                <PressCoverageView lang={lang} />
            </AboutBanner>
        </>
    );
}

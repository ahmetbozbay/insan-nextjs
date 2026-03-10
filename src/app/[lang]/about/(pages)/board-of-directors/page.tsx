import BoardOfDirectorsView from "@/views/about/board-of-directors-view";
import AboutBanner from "../about-banner";

export default async function BoardOfDirectorsPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <BoardOfDirectorsView lang={lang} />
        </AboutBanner>
        </>
    );
}

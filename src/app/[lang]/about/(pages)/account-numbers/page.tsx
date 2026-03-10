import AccountNumbersView from "@/views/about/account-numbers-view";
import AboutBanner from "../about-banner";

export default async function AccountNumbersPage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <AccountNumbersView lang={lang} />
        </AboutBanner>
        </>
    );
}

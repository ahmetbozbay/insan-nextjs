import AuditCommitteeView from "@/views/about/audit-committee-view";
import AboutBanner from "../about-banner";

export default async function AuditCommitteePage({ params }: any) {
    const lang = (await params).lang;
    return (
        <>
        <AboutBanner params={params}>

            <AuditCommitteeView lang={lang} />
        </AboutBanner>
        </>
    );
}

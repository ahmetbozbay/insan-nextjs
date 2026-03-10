import FaqsArea from "@/components/faq";

export interface AuditCommitteeViewProps {
    lang?: string;
}

export default async function AuditCommitteeView({ lang = "en" }: AuditCommitteeViewProps) {
    const faqs = [
        {
            // title: "Insan Dernegin Misyonu ve Vizyonu",
            listItems: [
                'Sebahattin Ceyhun: Denetim Kurulu Başkanı',
                'Muhammed İkbal Gündem: Denetim Kurulu Üyesi',
                'Gürsel Özdemirel: Denetim Kurulu Üyesi',
            ]
        },
    ];

    return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

import FaqsArea from "@/components/faq";

export interface DocumentsViewProps {
    lang?: string;
}

export default async function DocumentsView({ lang = "en" }: DocumentsViewProps) {
    const faqs = [
        {
            title: [{ title: 'Yardım Toplama İzni Belgesi İndirmek İçin Tıklayınız', href: '/docs/1.pdf', download: true }],
        },
    ];

    return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

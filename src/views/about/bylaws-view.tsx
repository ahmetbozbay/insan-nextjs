import FaqsArea from "@/components/faq";

export interface BylawsViewProps {
    lang?: string;
}

export default async function BylawsView({ lang = "en" }: BylawsViewProps) {
    const faqs = [
        {
            title: [{ title: 'Tüzüğü İndirmek İçin Tıklayınız', href: '/docs/tuzuk.pdf', download: true }],
            // content: [
            //     "Indir",
            // ],
        },
    ];

    return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

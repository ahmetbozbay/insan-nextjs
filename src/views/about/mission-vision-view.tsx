import FaqsArea from "@/components/faq";

export interface MissionVisionViewProps {
    lang?: string;
}

export default async function MissionVisionView({ lang = "en" }: MissionVisionViewProps) {
    const faqs = [
        {
            // title: "Insan Dernegin Misyonu ve Vizyonu",
            additionalContent: [
                "Misyonumuz; beklemek yerine, ihtiyaç sahiplerinin hayatlarını iyileştirmek için etkin bir şekilde tam zamanında ve eksiksiz olarak disiplinli şekilde harekete geçmektir.",

                `Vizyonumuz; insana ayrım gözetmeksizin değer vermek, özellikle savaş, doğal afet vb. zor şartlara maruz kalmış insanların hayatlarını desteklemeye odaklanmaktır.`,
            ],
        },
    ];

    return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

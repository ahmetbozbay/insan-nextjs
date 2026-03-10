import { getProject } from "@/actions/projects";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import DonationPaymentSection from "@/sections/pay/donation-form";

export interface PayViewProps {
    lang?: string;
    slug?: string;
}
export default async function PayView({ lang, slug = '' }: PayViewProps) {
    const t = await getTranslations("pay");
    const project = await getProject(slug);
    const priceNumber = Number(project.price.replace('TL','').trim())
    const numbers = [...new Set([priceNumber, 200, 500, 1000, 5000])]
    return (
        <>
            <Banner
                image={project.bigImage}
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "#", text: t.pay },
                ]}
                title={`${t.title} ${project.title}`}
                rtl={lang == 'ar'}
            />
            <DonationPaymentSection
                categories={[
                    "Charity for Education",
                    "Charity for Medical",
                    "Charity for Water",
                    "Charity for Natural Disaster",
                ]}
                paymentMethods={[
                    // { id: 1, imageUrl: "/assets/images/icon/payment-method1.png" },
                    // { id: 2, imageUrl: "/assets/images/icon/payment-method2.png" },
                ]}
                // quickSelectAmounts={[20, 40, 60, 80, 100]} // Added quick select amounts
                quickSelectAmounts={numbers}
                donationTitle={project.title}
                href={`/projects/${project.slug.current}`}
                donationDetailsImage={project.image}
                donationDescription={project.description}
                initialAmount={priceNumber}
            />
            <HomeGallery />
        </>
    );
}
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import ContactFormSection from "@/sections/contact/form";
import ContactInfoSection from "@/sections/contact/info";
import HomeGallery from "@/sections/home/gallery";
export interface ContactViewProps {
    lang?: string;
}
export default async function ContactView({ lang = 'en' }: ContactViewProps) {
    const t = await getTranslations("contact");
    return (
        <>
            <Banner
                image="/assets/images-used/contact/1.png"
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "#", text: t.contact },
                ]}
                title={t.title}
                rtl={lang == 'ar'}
            />
            <div className="Contact-us-area py-110 lg:py-70 xs-to-md-max:py-50">
                <div className="container">
                    <ContactInfoSection
                        contacts={[
                            {
                                iconClass: "ri-phone-fill",
                                title: t.phone,
                                value: "+902742121212",
                                href: "tel:+902742121212",
                            },
                            {
                                iconClass: "ri-mail-fill",
                                title: t.email,
                                value: "info@insander.org",
                                href: "mailto:info@insander.org",
                            },
                            {
                                iconClass: "ri-map-pin-line",
                                title: t.address,
                                value: "Turkey, Kutahya",
                                href: "https://www.google.com/maps",
                            },
                        ]}
                    />

                    <ContactFormSection
                        t={t}
                        mapEmbedUrl="https://www.google.com/maps/embed/v1/place?q=Turkey, Kutahya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />

                </div>
            </div>
            <HomeGallery />
        </>
    );
}
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import AboutSection from "@/sections/about/about";
import LogosSection from "@/sections/about/logos";
import AboutServiceSection from "@/sections/about/services";
import TeamSection from "@/sections/about/team";
import TestimonialSection from "@/sections/about/testimonial";
import HomeBlog from "@/sections/home/blog";
import HomeGallery from "@/sections/home/gallery";

export interface AboutViewProps {
    lang?: string;
}
export default async function AboutView({ lang = "en" }: AboutViewProps) {
    const t = await getTranslations("about");
    return (
        <>
            <Banner
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "#", text: t.about },
                ]}
                title={t.title}
                image={'/assets/images-used/about/1.png'}
                rtl={lang == 'ar'}
            />
            <AboutServiceSection
                cards={
                    t.cards?.map((card: any, index: number) => ({
                        title: card.title,
                        // description: card.description,
                        href: card.href,
                        iconClass: card.iconClass,
                        bgClass: card.bgClass,
                        textColorClass: card.textColorClass
                    }))}
            />
            {/* <AboutSection
                title={t.about_section.title}
                subtitle={t.about_section.subtitle}
                description={t.about_section.description}
                imageUrl="/assets/images-used/about/2.png"
                aboutItems={t.about_section.aboutItems}
            />

            <LogosSection
                images={[
                    "/assets/images/gallery/fav-1.png",
                    "/assets/images/gallery/fav-4.png",
                    "/assets/images/gallery/fav-3.png",
                    "/assets/images/gallery/fav-4.png",
                    "/assets/images/gallery/fav-5.png",
                ]}
            />


            <TeamSection
                title={t.team.title}
                subtitle={t.team.subtitle}
                teamMembers={t.team.teamMembers}
            />

            <TestimonialSection
                rtl={lang == 'ar'}
                title={t.testimonial.title}
                subtitle={t.testimonial.subtitle}
                description={t.testimonial.description}
                testimonials={t.testimonial.testimonials}
            /> */}

            {/* <HomeBlog /> */}
            <HomeGallery />




        </>
    )
}
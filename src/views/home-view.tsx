import { getTranslations } from "@/actions/translations";
import HomeHero from "@/sections/home/hero";
import HomeOurEvents from "@/sections/home/our-events";
import HomeQuestionArea from "@/sections/home/questyions";
import HomeServices from "@/sections/home/services";
import HomeTestimonial from "@/sections/home/testimonial";
import HomeUrgentArea from "@/sections/home/urgent";
import HomeBlog from "@/sections/home/blog";
import HomeGallery from "@/sections/home/gallery";
import { getPosts } from "@/actions/posts";

export interface HomeViewProps {
    lang?: string;
}

export default async function HomeView({ lang = "en" }: HomeViewProps) {
    const t = await getTranslations("questions");
    return (
        <>
            <HomeUrgentArea />
            {/* <HomeHero /> */}
            {/* <HomeServices /> */}
            {/* <HomeQuestionArea title={t.title} description={t.description} questions={t.questions} /> */}
            {/* <HomeOurEvents /> */}
            <HomeBlog />
            <HomeTestimonial />
            <HomeGallery />
        </>
    );
}
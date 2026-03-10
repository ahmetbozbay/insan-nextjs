import { getTranslations } from "@/actions/translations";
import { HeroCaption } from "./hero-caption";
import { HeroCountsSection } from "./hero-counts-section";
import Image from "next/image";

export default async function HeroSection() {
    const t = await getTranslations('home.hero')
    const heroButtons = [
        { text: t.button_1, href: "/projects", style: "btn-primary-fill" },
        { text: t.button_2, href: "/about", style: "btn-tertiary-fill" },
    ];

    const heroCounts = [
        { count: "12+", description: t.count_1 },
        { count: "140+", description: t.count_2 },
        { count: "500+", description: t.count_3 },
    ];

    return (
        <section className="hero-area">
            <div className="pt-87 xs-to-md-max:pt-60 pb-110 lg:pb-70 xs-to-md-max:pb-50">
                <div className="container">
                    <div className="grid grid-cols-2 xs-to-md-max:grid-cols-1 items-center">
                        <HeroCaption
                            title={t.title}
                            subtitle={t.subtitle}
                            description={t.description}
                            buttons={heroButtons}
                        />
                        <div className="hidden xs-to-md-min:block">
                            <div className="flex gap-44">
                                <div className="hero-image relative">
                                    <Image
                                        src="/assets/images-used/hero/hero.png"
                                        alt="img"
                                        className="w-full tilt-effect"
                                        width={414}
                                        height={499}
                                    />
                                </div>
                                <HeroCountsSection counts={heroCounts} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

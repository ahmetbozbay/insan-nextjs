import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface HelpfulCardProps {
    iconClass: string;
    title: string;
    href?: string;
    description?: string;
    index?: number;
    bgClass: string;
    textColorClass: string;
    button?: {
        text: string;
        href: string;
    }
}

const HelpfulCard: React.FC<HelpfulCardProps> = ({
    iconClass,
    title,
    href,
    description,
    index,
    bgClass,
    textColorClass,
    button
}) => (
    <div className="group">
        <div className="helpful-card relative h-full">
            <div
                className={`min-w-70 max-w-70 h-70 rounded-full text-center ${bgClass} ${textColorClass} flex justify-center items-center m-auto transition-bundle text-6xl xs:text-3xl group-hover:bg-white`}
            >
                {/* <i className={iconClass}></i> */}
                <Icon icon={iconClass} />
            </div>
            <div className="mt-15 relative text-center z-[1]">
                <Link href={href || '#'}>
                    <h4 className="common-title text-xl xs:text-base leading-normal line-clamp-1 mb-10 transition-bundle group-hover:text-white">
                        {title}
                    </h4>
                </Link>
                {description && (
                    <p className="common-pera text-base xs:text-md mb-20  transition-bundle group-hover:text-info">
                        {description}
                    </p>
                )}
                {button && (
                    <Link href={button?.href} className="text-md text-primary font-semibold transition-bundle group-hover:text-white">
                        {button?.href} <i className="ri-arrow-right-up-line"></i>
                    </Link>
                )}
            </div>
            {/* <div className="absolute bottom-30 right-20 -z-1">
                <h4 className="text-[100px] font-[800] text-number-two transition-bundle group-hover:text-number-two-hover">
                    {index && index < 10 ? `0${index}` : index}
                </h4>
            </div> */}
        </div>
    </div>
);

interface HelpfulSectionProps {
    cards: HelpfulCardProps[];
}

const AboutServiceSection: React.FC<HelpfulSectionProps> = ({ cards }) => {
    return (
        <section className="helpful-area-three py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className={cn(
                    "grid gap-24 xs-to-lg-min:grid-cols-5 xs-to-min:grid-cols-2 xs:grid-cols-1",
                    (cards.length % 4 == 3) && 'xs-to-lg-min:grid-cols-5'
                )}
                >
                    {cards.map((card, index) => (
                        <HelpfulCard key={index} {...card} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutServiceSection;

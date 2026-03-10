import { cn } from "@/lib/utils";
import Link from "next/link";
interface BreadcrumbItemProps {
    href: string;
    text: string;
    rtl?: boolean
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ href, text, rtl }) => (
    <li className={cn(
        "breadcrumb-item",
        rtl && 'pl-0 pr-8 before:!float-right before:!pl-0 before:pr-8 before:rotate-180'

    )}>
        <Link
            href={href}
            className="text-lg font-semibold uppercase text-white xs-to-md-max:text-md leading-none"
        >
            {text}
        </Link>
    </li>
);

interface BreadcrumbSectionProps {
    breadcrumbItems: BreadcrumbItemProps[];
    title: string;
    rtl: boolean;
    image?: string
}

const Banner: React.FC<BreadcrumbSectionProps> = ({ breadcrumbItems, title, rtl = false, image = '/assets/images/gallery/breadcrumb-1.png' }) => {
    return (
        <section
            style={{
                // background: `url("${image}")`
                '--bg-banner-image': `url(${image})`
            } as React.CSSProperties}
            className="breadcrumb-section ltr:xs-to-min:bg-breadcrumb-bg ltr:xs:bg-breadcrumb-bg-light rtl:xs-to-min:bg-breadcrumb-rtl-bg rtl:xs:bg-breadcrumb-rtl-bg-light relative before:custom-bg-[var(--bg-banner-image)] ">
            <div className="container">
                <div className="py-90 xs-to-md-max:py-50">
                    <nav
                        aria-label="breadcrumb"
                        className="rounded-[10px] bg-white/20 py-14 px-26 inline-block mb-25 xs-to-md-max:mb-12 xs-to-md-max:py-7 xs-to-md-max:px-13"
                    >
                        <ul className="breadcrumb listing mb-0 flex">
                            {breadcrumbItems.map((item, index) => (
                                <BreadcrumbItem key={index} href={item.href} text={item.text} rtl={rtl} />
                            ))}
                        </ul>
                    </nav>
                    <h1 className="text-11xl font-bold uppercase leading-none text-white xs-to-md-max:text-xl">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;

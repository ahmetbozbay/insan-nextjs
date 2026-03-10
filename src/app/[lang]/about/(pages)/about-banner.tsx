import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import { headers } from "next/headers";

export default async function AboutBanner({
    children,
    params
}: {
    children: React.ReactNode;
    params: any;
}) {
    const lang = (await params).lang
    const t = await getTranslations('header')
    const url = (await headers()).get('x-url')
    const tC = (t.about_children.find((c: any) => url?.includes(c.href.toLowerCase())))

    return (
        <>
            <Banner
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "/about", text: t.about },
                    { href: "#", text: tC.label },
                ]}
                title={tC.label}
                image={'/assets/images-used/about/1.png'}
                rtl={lang == 'ar'}
            />
            {children}
            <HomeGallery />
        </>
    );
}

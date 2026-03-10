import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import MainLayout from "@/layouts/main-layout";
import HomeGallery from "@/sections/home/gallery";
import { headers } from "next/headers";
import AboutBanner from "./about-banner";

export default async function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {

    return (
        <>
            {/* <AboutBanner params={params}> */}
            {children}
            {/* </AboutBanner> */}
        </>
    );
}
// export default async function Layout({
//     children,
//     params
// }: Readonly<{
//     children: React.ReactNode;
//     params: any;
// }>) {
//     const lang = (await params).lang
//     const t = await getTranslations('header')
//     const url = (await headers()).get('x-url')
//     const tC = (t.about_children.find((c: any) => url?.includes(c.href)))

//     return (
//         <>
//             <Banner
//                 breadcrumbItems={[
//                     { href: "/", text: t.home },
//                     { href: "/about", text: t.about },
//                     { href: "#", text: tC.label },
//                 ]}
//                 title={tC.label}
//                 image={'/assets/images-used/about/1.png'}
//                 rtl={lang == 'ar'}
//             />
//             {children}
//             <HomeGallery />
//         </>
//     );
// }

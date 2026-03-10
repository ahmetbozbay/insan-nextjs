'use server'
import { getDictionary } from "@/app/[lang]/dictionaries";
import { locales } from "@/middleware";
import { cookies, headers } from "next/headers";

export const getTranslations = async (path: string, locale?: 'en' | 'ar' | 'tr') => {
    try {
        const headersList = await headers();
        const lang = locale || headersList.get("x-lang") || "en"; // Default to English
        // const lang = locale || 'en'

        // const cookieStore = await cookies()
        // const lang = cookieStore.get('c-lang')?.value || null
        // console.log({lang})



        const dictionary = await getDictionary(lang as 'en' | 'ar' | 'tr');
        if (path == '') {
            return dictionary
        }

        const keys = path.split('.');
        let result = dictionary as any;

        for (const key of keys) {
            if (result[key] !== undefined) {
                result = result[key];
            } else {
                return 'Path not found';
            }
        }
        return result;
    } catch (error) {
        console.log(error)
        return 'Error';
    }
};

export const getNavItems = async () => {
    const t = await getTranslations('header')
    const navItems = [
        { label: t.home, href: "/" },
        {
            label: t.about,
            href: "/about",
            children: t.about_children
        },
        { label: t.projects, href: "/projects" },
        { label: t.blog, href: "/blog" },
        { label: t.contact, href: "/contact" },
    ];
    return navItems
}
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { categoriesQuery } from "./queries";
import { headers } from "next/headers";

export const getCategories = async (type: string = 'category') => {
    const options = { next: { revalidate: 30 } };
    const categories = await client.fetch<SanityDocument[]>(categoriesQuery(type), {}, options);

    const headersList = await headers();
    const lang = headersList.get("x-lang") || "en"; // Default to English
    return categories.map(category => ({
        ...category,
        title: category.title[lang]
    }))
}
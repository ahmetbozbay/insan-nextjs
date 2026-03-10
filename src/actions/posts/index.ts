import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { postQuery, postsQuery } from "./quesries";
import imageUrlBuilder from '@sanity/image-url';
import { cookies, headers } from "next/headers";

const builder = imageUrlBuilder(client);

const getTextFromPortableText = (blocks: any) => {
  return blocks?.map((block: any) => block.children?.map((child: any) => child.text).join(" ")).join(" ") || "";
};


export const getPosts = async () => {
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(postsQuery('post'), {}, options);
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en"; // Default to English

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt || a._createdAt).getTime();
    const dateB = new Date(b.publishedAt || b._createdAt).getTime();
    return dateB - dateA; // Descending order
  });

  return sortedPosts.map(post => ({
    ...post,
    image: builder.image(post.mainImage).width(330).height(218).url(),
    title: post.title?.[lang],
    body: post.bod2?.[lang],
    categories: post.categories?.map((c: any) => ({ ...c, title: c.title[lang] })),
    description: getTextFromPortableText(post.body2?.[lang]).substring(0, 100) + "...",
  }))
}

export const getPost = async (slug: string) => {
  const options = { next: { revalidate: 30 } };
  const post: any = await client.fetch<SanityDocument[]>(postQuery(slug), {}, options);
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en"; // Default to English

  return ({
    ...post,
    bigImage: builder.image(post.mainImage).width(870).height(480).url(),
    image: builder.image(post.mainImage).width(330).height(218).url(),
    title: post.title?.[lang],
    categories: post.categories?.map((c: any) => ({ ...c, title: c.title[lang] })),
    description: getTextFromPortableText(post.body2?.[lang]).substring(0, 100) + "...",
    body: post.body2?.[lang],
  })
}
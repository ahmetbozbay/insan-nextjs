import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { projectQuery, projectsQuery } from "./quesries";
import imageUrlBuilder from '@sanity/image-url';
import { headers } from "next/headers";
const builder = imageUrlBuilder(client);

const getTextFromPortableText = (blocks: any) => {
  return blocks?.map((block: any) => block.children?.map((child: any) => child.text).join(" ")).join(" ") || "";
};

export const getProjects = async () => {
  const options = { next: { revalidate: 30 } };
  const project = await client.fetch<SanityDocument[]>(projectsQuery('project'), {}, options);

  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en"; // Default to English
  return project.map(project => ({
    ...project,
    categories: project?.categories?.map((c: any) => ({ ...c, title: c.title[lang] })),
    title: project?.title?.[lang],
    bigImage: project.mainImage ? builder.image(project.mainImage).width(1920).height(900).url() : 'https://placehold.co/870x460',
    image: project.mainImage ? builder.image(project.mainImage).width(350).height(230).url() : 'https://placehold.co/350x230',
    body: project.body?.[lang],
    description: getTextFromPortableText(project.body?.[lang]).substring(0, 100) + "...",
  }))
}

export const getProject = async (slug: string) => {
  const options = { next: { revalidate: 30 } };
  const project: any = await client.fetch<SanityDocument[]>(projectQuery(slug), {}, options);
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en"; // Default to English
  return {
    ...project,
    title: project?.title?.[lang],
    bigImage: project.mainImage ? builder.image(project.mainImage).width(870).height(460).url() : 'https://placehold.co/870x460',
    images: project.images ? project.images.map((image: any) => builder.image(image).width(870).height(460).url()) : [],
    originalImages: project.images ? project.images.map((image: any) => builder.image(image).url()) : [],
    image: project.mainImage ? builder.image(project.mainImage).width(350).height(230).url() : 'https://placehold.co/350x230',
    body: project.body?.[lang],
    description: getTextFromPortableText(project.body?.[lang]).substring(0, 100) + "...",
    // longDescription: getTextFromPortableText(project.body?.[lang]).substring(0, 500) + "...",
    longDescription: getTextFromPortableText(project.body?.[lang]),
  }
  // return project.map(project => ({
  //   ...project,
  //   title: project?.title?.[lang],
  //   bigImage: builder.image(project.mainImage).width(870).height(460).url(),
  //   image: builder.image(project.mainImage).width(350).height(230).url(),
  //   body: project.body?.[lang],
  //   description: getTextFromPortableText(project.body?.[lang]).substring(0, 100) + "...",
  // }))
}
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { projectsQuery } from "./quesries";
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);



export const getGallery = async () => {
  const options = { next: { revalidate: 30 } };
  const gallery = await client.fetch<SanityDocument[]>(projectsQuery('gallery'), {}, options);
  return gallery.map(item => ({
    ...item,
    url: builder.image(item.image).width(285).height(230).url(),
  }))
}
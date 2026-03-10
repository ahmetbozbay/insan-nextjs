import { getPosts } from "@/actions/posts";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import BlogGridSection from "@/sections/blog/blog-grid";
import HomeGallery from "@/sections/home/gallery";

export interface BlogViewProps {
    lang?: string;
}

export default async function BlogView({ lang = 'en' }: BlogViewProps) {
    const t = await getTranslations("blog");
    const posts: any = await getPosts();
    return (
        <>
            <Banner
                image="/assets/images-used/blog/1.png"
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "#", text: t.blog },
                ]}
                title={t.title}
                // image={'/assets/images-used/about/1.png'}
                rtl={lang == 'ar'}
            />
            <BlogGridSection
                posts={posts.map((post: any) => ({
                    description: post.description,
                    "image": post.image,
                    "url": post.url,
                    "author": "Insan",
                    "category": post.categories?.map((c: any) => c.title)?.join(', '),
                    "title": post.title,
                    "link": `/blog/${post.slug.current}`,
                    date: new Date(post.publishedAt || post._createdAt),
                    buttonText: t.readMore
                }))}

            />
            <HomeGallery />
        </>
    );
}   
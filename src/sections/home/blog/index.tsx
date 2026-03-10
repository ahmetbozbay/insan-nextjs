import { getPosts } from "@/actions/posts";
import { getTranslations } from "@/actions/translations";
import BlogItem from "@/components/blog/blog-item";
import Image from "next/image";
import Link from "next/link";

// const blogPosts = [
//     {
//         image: "/assets/images/gallery/blog-1.png",
//         author: "admin",
//         category: "Donation",
//         title: "We assure you that your donation will be used wisely.",
//         excerpt: "We understand that there are many people organization seeking support.",
//         delay: "0.2s",
//     },
//     {
//         image: "/assets/images/gallery/blog-2.png",
//         author: "admin",
//         category: "Donation",
//         title: "We assure you that your donation will be used wisely.",
//         excerpt: "We understand that there are many people organization seeking support.",
//         delay: "0.0s",
//     },
//     {
//         image: "/assets/images/gallery/blog-3.png",
//         author: "admin",
//         category: "Donation",
//         title: "We assure you that your donation will be used wisely.",
//         excerpt: "We understand that there are many people organization seeking support.",
//         delay: "0.2s",
//     },
// ];
export default async function HomeBlog({ }) {
    const t = await getTranslations("home_blog");
    const posts = await getPosts();
    console.log(posts)
    return (
        <>
            <section className="blog-section pb-110 lg:pb-70 xs-to-md-max:pb-50">
                <div className="container">
                    <div className="section-tittle text-center mb-50">
                        <p className="key-title mb-10">{t.title}</p>
                        <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl">
                            {t.description}
                        </h2>
                    </div>
                    <div className="grid gap-24 xs-to-lg-min:grid-cols-3 xs-to-min:grid-cols-2 xs:grid-cols-1">
                        {posts.map((post: any, index) => (
                            <BlogItem key={index}
                                image={post.image}
                                author={'Insan'}
                                category={post.categories?.map((c: any) => c.title).join(', ')}
                                title={post.title}
                                date={post.publishedAt ? new Date(post.publishedAt) : new Date(post._createdAt)}
                                url={post.url}
                                link="#"
                            />

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
import { getPost, getPosts } from "@/actions/posts";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import BlogDetailsSection from "@/sections/single-blog/blog-details";

export interface SingleBlogViewProps {
    lang?: string;
    slug: string;
}

export default async function SingleBlogView({ lang = 'en', slug }: SingleBlogViewProps) {
    const t = await getTranslations('blog')
    const post = await getPost(slug);
    console.log(post)

    const blogProps = {
        imageSrc: post.bigImage,
        author: 'admin',
        category: post.categories?.map((c: any) => c.title)?.join(', '),
        title: post.title,
        body: post.body,
        categories: ['Medical', 'Food'],
        socialLinks: [
            { platform: 'Facebook', iconClass: 'ri-facebook-fill', link: '#' },
            { platform: 'Twitter', iconClass: 'ri-twitter-fill', link: '#' },
            { platform: 'LinkedIn', iconClass: 'ri-linkedin-fill', link: '#' },
            { platform: 'Instagram', iconClass: 'ri-instagram-fill', link: '#' }
        ],
        relatedBlogs: [
            {
                imageSrc: '/assets/images/gallery/blog-verti.png',
                author: 'admin',
                category: 'Donation',
                title: 'You can help make a difference in the lives of these children.',
                content: 'Without access to basic necessities like food, clean water, and healthcare. Many of these children are also denied the opportunity.',
                link: '/blog-details'
            },
        ]
    };
    return (
        <>

            <Banner
                image={post.bigImage}
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "/blog", text: t.blog },
                    // { href: "#", text: project.title },
                ]}
                title={post.title}
                rtl={lang == 'ar'}
            />

            <section className="blog-section py-110 lg:py-70 xs-to-md-max:py-50">
                <div className="container">
                    <div className="grid grid-cols-12 gap-24">
                        {/* right side */}
                        <div className="col-span-12 xs-to-xl-min:col-span-9 xs-to-lg-min:col-span-8 xs-to-md-min:col-span-7">

                            <BlogDetailsSection {...blogProps} />

                        </div>
                        {/* sidebar */}
                        <div className="col-span-12 xs-to-xl-min:col-span-3 xs-to-lg-min:col-span-4 xs-to-md-min:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            <HomeGallery />
        </>
    )
} 
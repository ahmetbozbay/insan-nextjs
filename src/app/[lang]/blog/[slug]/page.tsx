import SingleBlogView from "@/views/single-blog-view";

export default async function BlogPage({ params }: any) {
    const { lang, slug } = (await params)
    return (
        <>
            <SingleBlogView lang={lang} slug={slug} />
        </>
    );
}



import BlogView from "@/views/blog-view";
// export const dynamic = 'force-dynamic'
export default async function BlogPage({ params }: any) {
    const lang = (await params).lang
    return (
        <>
            <BlogView lang={lang} />
        </>
    );
}



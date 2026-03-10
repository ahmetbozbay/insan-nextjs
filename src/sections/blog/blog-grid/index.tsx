import BlogItem, { BlogItemProps } from "@/components/blog/blog-item";

interface BlogGridSectionProps {
    posts: BlogItemProps[];
}
const BlogGridSection: React.FC<BlogGridSectionProps> = ({
    posts,
}) => {
    return (
        <section className="blog-section-three py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className="grid gap-24 xs-to-lg-min:grid-cols-3 xs-to-min:grid-cols-2 xs:grid-cols-1">
                    {posts.map((post, index: number) => (
                        <BlogItem key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGridSection;
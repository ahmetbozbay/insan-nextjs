import ProjectsView from "@/views/projects-view";
import SingleProjectView from "@/views/single-project-view";
export default async function ProjectPage({ params }: any) {
    const { lang, slug } = (await params) || {}
    return (
        <>
            <SingleProjectView lang={lang} slug={slug} />
        </>
    );
}

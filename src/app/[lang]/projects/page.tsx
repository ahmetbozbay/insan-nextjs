import ProjectsView from "@/views/projects-view";
// export const dynamic = 'force-dynamic'
export default async function ProjectPage({ params,searchParams }: any) {
    const lang = (await params).lang
    const category = (await searchParams)?.category
    return (
        <>
            <ProjectsView lang={lang} category={category} />
        </>
    );
}

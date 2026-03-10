import { getProjects } from "@/actions/projects";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import ProjectsGridSection from "@/sections/projects/projects-grid";
export interface ProjectsViewProps {
    lang?: string;
    category?: string;
}
export default async function ProjectsView({ lang = 'en', category }: ProjectsViewProps) {
    const t = await getTranslations("projects");
    let projects: any = await getProjects();
    if(category && category != ''){
        projects = projects.filter((p: any) => p.categories?.some((c: any) => c._id == category));
    }
    return (
        <>
            <Banner
                image="/assets/images-used/projects/1.png"
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "#", text: t.projects },
                ]}
                title={t.title}
                rtl={lang == 'ar'}
            />
            <ProjectsGridSection
                projects={
                    projects.map((pr: any) => (
                        {
                            imageUrl: pr.image,
                            category: pr.categories?.map((c: any) => c.title)?.join(', '),
                            title: pr.title,
                            description: pr.description,
                            detailsUrl: `/projects/${pr.slug.current}`,
                            donateUrl: `/pay/${pr.slug.current}`,
                            progressPercentage: 50,
                            goalAmount: pr.price,
                            // raisedAmount: '50$',
                        }
                    ))}
            />
            <HomeGallery />
        </>
    );
}
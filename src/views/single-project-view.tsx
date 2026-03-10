import { getCategories } from "@/actions/categories";
import { getPosts } from "@/actions/posts";
import { getProject } from "@/actions/projects";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import ProjectContentSection from "@/sections/single-project/project-content";
import ProjectDetailsSection from "@/sections/single-project/project-details";
import ProjectSidebar from "@/sections/single-project/project-sidebar";
import TopDonorsSection from "@/sections/single-project/top-donors-section";

interface SingleProjectViewProps { lang?: string, slug: string }
export default async function SingleProjectView({ lang = "en", slug }: SingleProjectViewProps) {
    const project = await getProject(slug)
    const categories = await getCategories('project_category')
    const posts: any = await getPosts()
    console.log({ categories })
    const t = await getTranslations('projects')
    console.log(project)
    console.log(posts)
    return (
        <>
            <Banner
                image={project.bigImage}
                breadcrumbItems={[
                    { href: "/", text: t.home },
                    { href: "/projects", text: t.projects },
                    // { href: "#", text: project.title },
                ]}
                title={project.title}
                rtl={lang == 'ar'}
            />

            <section className="dontaion-section py-110 lg:py-70 xs-to-md-max:py-50">
                <div className="container">
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12 xs-to-xl-min:col-span-9 xs-to-lg-min:col-span-8 xs-to-md-min:col-span-7">
                            {/* left side */}
                            <ProjectDetailsSection
                                slug={project.slug.current}
                                imageUrl={project.bigImage}
                                images={project.images}
                                title={project.title}
                                description={project.longDescription}
                                goalAmount={project.price}
                            // raisedAmount="10,500"
                            // paymentMethods={[
                            //     { id: "test-donation", label: "Test Donation" },
                            //     { id: "cardiant", label: "Cardiant Donation" },
                            // ]}
                            // quickAmounts={[150, 170, 190, 250]}
                            />


                            {/* <ProjectContentSection
                                body={project.body}
                            // paragraphs={[
                            //     "Charity refers to the act of giving resources, such as money, time, or goods to individuals, organizations, or causes in need. It is driven by the desire to alleviate suffering, support vulnerable populations, promote social welfare, or advance specific charitable objectives.",
                            //     "Charity organizations and nonprofits play a crucial role in collecting and distributing funds to address various issues including poverty, education, healthcare, disaster relief, environmental conservation, and more. People can contribute to charities by making financial donations, volunteering their time and skills, or donating goods like clothing, food, or medical supplies.",
                            // ]}
                            // sections={[
                            //     {
                            //         title: "Our Challenge & Goal",
                            //         content: [
                            //             "However, if you intended to refer to body or organ donation, that is a separate topic. Organ donation involves the voluntary donation of organs or tissues from a living or deceased person to help save or improve the lives of others in need of transplantation.",
                            //             "People can contribute to charities by making financial donations, volunteering their time and skills.",
                            //             "It is a generous act that can make a significant difference in someone's life by providing them with a chance for a healthier future.",
                            //         ],
                            //     },
                            //     {
                            //         title: "Donors",
                            //         content: [
                            //             "However, if you intended to refer to body or organ donation, that is a separate topic. Organ donation involves the voluntary donation of organs or tissues from a living or deceased person to help save or improve the lives of others in need of transplantation.",
                            //         ],
                            //     },
                            // ]}
                            /> */}

                            <TopDonorsSection
                                donors={
                                    [
                                        // { name: "David Warner", amount: 500, date: "July 09, 2023", imageUrl: "/assets/images/gallery/donor-1.png" },
                                        // { name: "Carry Jon", amount: 500, date: "July 09, 2023", imageUrl: "/assets/images/gallery/donor-2.png" },
                                        // { name: "Maxwell", amount: 500, date: "July 09, 2023", imageUrl: "/assets/images/gallery/donor-3.png" },
                                        // { name: "Cary Minuti", amount: 500, date: "July 09, 2023", imageUrl: "/assets/images/gallery/donor-4.png" },
                                    ]
                                }
                            />
                        </div>
                        {/* sidebar */}
                        <div className="col-span-12 xs-to-xl-min:col-span-3 xs-to-lg-min:col-span-4 xs-to-md-min:col-span-5">
                            <ProjectSidebar
                                images={project.originalImages}
                                categories={categories.slice(0, 5).map((cat: any) => ({
                                    name: cat.title,
                                    href: `/projects?category=${cat._id}`,
                                    isActive: project.categories.map((cat: any) => cat._id).includes(cat._id)
                                }))}
                                relatedEvents={
                                    posts.slice(0, 3).map((post: any) => ({
                                        date: new Date(post.publishedAt || post._createdAt),
                                        title: post.title,
                                        imageUrl: post.image,
                                        eventLink: `/blog/${post.slug.current}`,
                                    }))
                                }
                                tags={[]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <HomeGallery />
        </>
    );
}
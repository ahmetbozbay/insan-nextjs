import { getTranslations } from "@/actions/translations";
import CopyWrite from "./copy-write";
import FooterContactCol from "./footer-contact-col";
import FooterDivider from "./footer-divider";
import FooterHead from "./footer-head";
import FooterLinksCol from "./footer-links-col";
import FooterProjectsCol from "./footer-projects-col";
import { getProjects } from "@/actions/projects";

export default async function Footer() {
    const t = await getTranslations('footer');
    const projects = await getProjects()
    return (
        <>
            <footer>
                <div className="footer-wrapper bg-footer-bg-one z-0 relative">
                    <div className="container">
                        <FooterHead />
                        <FooterDivider />
                        <div className="py-70 grid grid-cols-12 gap-24 justify-center">
                            <FooterLinksCol
                                title={t.profile}
                                links={t.description}
                            />
                            {/* <FooterLinksCol
                                title={'Get Support'}
                                links={[
                                    {
                                        label: 'About',
                                        href: '#',
                                    },
                                    {
                                        label: 'How it Works',
                                        href: '#',
                                    },
                                    {
                                        label: 'Knowledge Hub',
                                        href: '#',
                                    },
                                    {
                                        label: 'Success Stories',
                                        href: '#',
                                    },
                                    {
                                        label: 'Contact',
                                        href: '#',
                                    },
                                ]}
                            /> */}

                            <FooterContactCol
                                title={t.support}
                                email="info@insander.org"
                                phone="05010879198 / 05523202962"
                                address="Kütahya, Türkiye"
                            />
                            <FooterProjectsCol
                                title={t.projects}
                                projects={
                                    projects.slice(0, 2).map((p: any) => ({
                                        href: `/projects/${p.slug.current}`,
                                        image: p.image,
                                        date: '10.Oct.2023',
                                        title: p.title,
                                    }))
                                }
                            />


                        </div>
                        <FooterDivider />
                    </div>
                    <CopyWrite text={t.copy} social={{
                        facebook: 'https://www.facebook.com/share/18rWLrztS9/?mibextid=wwXIfr',
                        instagram: 'https://www.instagram.com/insandernegi_',
                        tiktok: 'https://www.tiktok.com/@insanderngi?_t=ZN-8v4JChf34xa&_r=1',
                    }} />
                </div>
            </footer>
        </>
    )
}
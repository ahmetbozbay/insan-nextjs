import { getTranslations } from "@/actions/translations";
import UrgentSlides from "./urgent-slides";
import { getProjects } from "@/actions/projects";

const HomeUrgentArea =  async () => {
    const t = await getTranslations("urgent");
    const projects = await getProjects();
    return (
        // <section className="urgent-area pt-110 lg:pt-70 xs-to-md-max:pt-50 pb-110 lg:pb-70 xs-to-md-max:pb-50">
        <section className="urgent-area pt-5 lg:pt-5 xs-to-md-max:pt-5 pb-50 lg:pb-50 xs-to-md-max:pb-50">
            <div className="container">
                {/* <div className="grid col-span-7">
                    <div className="section-tittle text-center mb-50">
                        <p className="key-title mb-10">{t.title}</p>
                        <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl">
                            {t.description}
                        </h2>
                    </div>
                </div> */}
                <div className="grid grid-cols-12 xs-to-md-max:gap-24">
                    <UrgentSlides items={projects.slice(0, 5)} t={t} />
                </div>
            </div>
        </section>
    );
};

export default HomeUrgentArea;

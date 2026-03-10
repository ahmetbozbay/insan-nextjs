import { getTranslations } from "@/actions/translations";

const HelpfulCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="group">
        <div className="helpful-card h-full">
            <div className="circle-btn w-70 h-70 xs:w-50 xs:h-50 text-8xl xs:text-3xl mb-20 transition-bundle group-hover:bg-white group-hover:text-primary-title">
                <i className={icon}></i>
            </div>
            <div className="helpful-card-caption">
                <h4 className="common-title text-xl xs:text-base leading-normal mb-10 transition-bundle line-clamp-1 group-hover:text-white">
                    {title}
                </h4>
                <p className="common-pera text-tertiary-title text-base xs:text-md leading-normal  group-hover:text-info">
                    {description}
                </p>
            </div>
        </div>
    </div>
);
export default async function HomeServices() {
    const t = await getTranslations("services");

    return (
        <>
            <section className="helpful-area">
                <div className="container">
                    <div className="grid gap-24 xs-to-lg-min:grid-cols-4 xs-to-min:grid-cols-2 xs:grid-cols-1">
                        {t.cards?.map((card: any, index: number) => (
                            <HelpfulCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
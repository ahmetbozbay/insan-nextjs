import { getProjects } from "@/actions/projects";
import { getTranslations } from "@/actions/translations";
import Image from "next/image";
import Link from "next/link";

export default async function HomeOurEvents({ }) {
    const tEv = await getTranslations("events");
    const projects = await getProjects();
    const formateDate = (date: Date) => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace(',', '')
    }
    return (
        <>
            <section className="our-event pb-110 lg:pb-70 xs-to-md-max:pb-50">
                <div className="container">
                    <div className="section-tittle text-center mb-50">
                        <p className="key-title mb-10">{tEv.title}</p>
                        <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl">
                            {tEv.description}
                        </h2>
                    </div>
                    <div className="grid gap-24 xs-to-lg-min:grid-cols-3 xs-to-min:grid-cols-2 xs:grid-cols-1">
                        {projects.map((event: any, index) => (
                            <div key={index} className="group">
                                <div
                                    className="rounded-[10px] h-full cursor-pointer"
                                >
                                    <div className="event-img relative overflow-hidden rounded-t-[10px]">
                                        <Link href="/event-details">
                                            <Image
                                                src={event.image}
                                                width={500}
                                                height={300}
                                                alt="Event Image"
                                                className="w-full transition-bundle group-hover:scale-110"
                                            />
                                        </Link>
                                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-50"></div>
                                    </div>

                                    <div className="p-20 border border-primary-gray rounded-b-[10px] transition-bundle group-hover:bg-primary group-hover:border-primary">
                                        <div className="flex justify-between items-center gap-6">
                                            <div className="event-info-title">
                                                <div className="flex gap-15 mb-18 items-center flex-wrap">
                                                    <div className="date flex gap-12 items-center text-tertiary-title group-hover:text-info">
                                                        <i className="text-lg ri-time-line"></i>
                                                        <p className="text-md font-normal leading-[1]">
                                                            {formateDate(new Date(event.publishedAt || event._createdAt))}
                                                        </p>
                                                    </div>
                                                    <div className="map flex gap-12 items-center text-tertiary-title group-hover:text-info">
                                                        <i className="text-lg ri-map-pin-line"></i>
                                                        <p className="text-md font-normal leading-[1]">
                                                            {event.location || 'Palestine'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <h4>
                                                    <Link
                                                        href="/event-details"
                                                        className="common-title capitalize text-xl xs-to-sm-max:text-base line-clamp-1 leading-normal group-hover:text-white"
                                                    >
                                                        {event.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                            <Link
                                                href="/event-details"
                                                className="px-10 py-5 text-xl text-primary-title bg-transparent border border-tertiary-title rounded-[5px] group-hover:bg-secondary group-hover:border-transparent rtl:rotate-180"
                                            >
                                                <i className="ri-arrow-right-line "></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
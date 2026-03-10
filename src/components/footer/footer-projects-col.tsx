import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function FooterProjectsCol({ projects = [], title }: { projects: any[], title: string }) {
    return (
        <>
            <div className="xs-to-md-max:col-span-12 xs-to-lg-min:col-span-4 xs-to-md-min:col-span-7">
                <div className="footer-link">
                    <h4 className="text-xl xs-to-sm-max:text-base font-bold leading-normal text-white mb-20">{title}</h4>
                    <ul className="space-y-5">
                        {projects.map((project, index) => (
                            <li key={index}>
                                <div className={cn('flex gap-20 items-center', index != projects.length - 1 && 'mb-20')}>
                                    <div className="rounded-[10px]">
                                        <Link href={project.href}>
                                            <Image src={project.image} alt="image" width={109} height={90} />
                                        </Link>
                                    </div>
                                    <div className="project-info">
                                        <p className="text-base font-normal leading-none mb-10 text-secondary">{project.date}</p>
                                        <h4 className="text-xl xs-to-sm-max:text-base font-bold leading-normal text-white transition-bundle">
                                            <Link href={project.href}>{project.title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
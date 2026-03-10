import Link from "next/link";
import Image from "next/image";

interface DonationProjectProps {
    imageUrl: string;
    category: string;
    title: string;
    description: string;
    goalAmount?: string;
    raisedAmount?: string;
    progressPercentage?: number;
    detailsUrl: string;
    donateUrl: string;
}

const DonationProject: React.FC<DonationProjectProps> = ({
    imageUrl,
    category,
    title,
    description,
    goalAmount,
    raisedAmount,
    progressPercentage,
    detailsUrl,
    donateUrl,
}) => (
    <div className="group">
        <div className="p-10 rounded-[10px] border border-primary-gray cursor-pointer transition-bundle group-hover:shadow-helpful-card group-hover:border-transparent">
            {/* <div className="donate-img relative"> */}
            <div className="relative">
                <Link href={detailsUrl}>
                    <Image className="w-full rounded-[10px]" src={imageUrl} width={400} height={300} alt={title} />
                </Link>
                <div className="bg-primary py-12 px-18 absolute top-10 left-10 rounded-[5px]">
                    <p className="text-white text-sm font-bold uppercase leading-normal font-sans">{category}</p>
                </div>
            </div>
            <div className="donate-info mt-20 p-10">
                <div className="donate-info-title">
                    <h4 className="common-title text-xl xs-to-md-max:text-base mb-20 leading-normal line-clamp-1 capitalize group-hover:text-primary">
                        <Link href={detailsUrl}>{title}</Link>
                    </h4>
                    <p className="common-pera text-base xs-to-md-max:text-md line-clamp-2 leading-[1.56] mb-15">
                        {description}
                    </p>
                    <div className="progress custom-progress mt-0 w-full bg-gray-200 rounded">
                        <div
                            className="progress-bar bg-primary h-2 rounded"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-14 mb-20">
                        <div className="flex gap-20">
                            <div className="charges">
                                <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">{goalAmount}</p>
                                {/* <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Bağış Bedeli</h4> */}
                            </div>
                            {/* <div className="charges">
                                <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">{raisedAmount}</p>
                                <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Raised</h4>
                            </div> */}
                        </div>
                        <div className="w-40 h-40 rounded-[10px] bg-transparent border border-primary flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white">
                            <i className="ri-reply-fill transform -scale-x-[1]"></i>
                        </div>
                    </div>
                    <Link
                        href={donateUrl}
                        className="p-17 border border-primary-gray inline-block text-center rounded-[10px] font-semibold text-base leading-none w-full text-primary-title transition-bundle group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                    >
                        Bağış yap
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

interface ProjectsGridSectionProps {
    projects: DonationProjectProps[];
}

const ProjectsGridSection: React.FC<ProjectsGridSectionProps> = ({
    projects,
}) => {
    return (
        <section className="donate-section py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className="grid gap-24 xs-to-lg-min:grid-cols-4 xs-to-sm-min:grid-cols-2 xs-to-sm-max:grid-cols-1">
                    {projects.map((project, index) => (
                        <DonationProject key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGridSection;

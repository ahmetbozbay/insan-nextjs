import Link from "next/link";
import Image from "next/image";

interface SocialLink {
    platform: string;
    iconClass: string;
    url: string;
}

interface TeamMemberProps {
    imageUrl: string;
    name: string;
    role: string;
    detailsUrl: string;
    socialLinks: SocialLink[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageUrl, name, role, detailsUrl, socialLinks }) => (
    <div className="group">
        <div className="single-team h-calc">
            <div className="overflow-hidden rounded-[15px]">
                <Link href={detailsUrl}>
                    <Image
                        src={imageUrl}
                        width={400}
                        height={300}
                        className="w-full rounded-[15px] transition-bundle group-hover:scale-105"
                        alt={name}
                    />
                </Link>
            </div>
            <div className="team-info">
                <div className="flex justify-between items-center">
                    <div className="team-info-title mb-8 mt-30">
                        <div className="flex gap-40 items-center">
                            <div className="content relative before:absolute before:w-[1px] before:h-[70%] before:bg-primary-gray before:right-[-20px] before:top-[10px] before:z-[-1] before:content-['']">
                                <h4 className="common-title text-xl leading-normal mb-5 transition-bundle capitalize xs-to-md-max:text-base hover:text-primary">
                                    <Link href={detailsUrl}>{name}</Link>
                                </h4>
                                <p className="common-pera leading-[1.56] capitalize text-base xs-to-md-max:text-md">{role}</p>
                            </div>
                            <div className="social flex gap-10">
                                <a
                                    className="hover-icon w-40 h-40 min-w-40 rounded-full bg-about-icon text-primary-title text-base flex justify-center items-center transition-bundle hover:bg-primary hover:text-white"
                                    href="javascript:void(0)"
                                >
                                    <i className="ri-share-fill"></i>
                                </a>
                                <div className="all-social-icon flex gap-10 opacity-0">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            className="social-icon w-40 h-40 min-w-40 rounded-full bg-about-icon text-primary-title text-base flex justify-center items-center transition-bundle hover:bg-primary hover:text-white"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className={link.iconClass}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

interface TeamSectionProps {
    title: string;
    subtitle: string;
    teamMembers: TeamMemberProps[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, subtitle, teamMembers }) => {
    return (
        <section className="team-section">
            <div className="container">
                {/* Section Title */}
                <div className="section-tittle text-center mb-50">
                    <span className="key-title capitalize font-700">{title}</span>
                    <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl mb-20">{subtitle}</h2>
                </div>

                {/* Team Grid */}
                <div className="grid gap-24 xs-to-lg-min:grid-cols-3 xs-to-min:grid-cols-2 xs:grid-cols-1">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

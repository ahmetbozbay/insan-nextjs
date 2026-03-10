import Link from "next/link";
import Image from "next/image";

interface AboutInfoItemProps {
  iconClass: string;
  title: string;
  description: string;
}

const AboutInfoItem: React.FC<AboutInfoItemProps> = ({ iconClass, title, description }) => (
  <div className="col-span-10 mb-20">
    <div className="flex gap-20">
      <div className="min-w-52 h-52 rounded-full bg-about-icon flex items-center justify-center text-xl text-primary-title">
        <i className={iconClass}></i>
      </div>
      <div className="info-content">
        <h4 className="common-title text-xl xs-to-md-max:text-base text-primary-title mb-15">
          {title}
        </h4>
        <p className="common-pera text-base xs-to-md-max:text-md text-tertiary-title">
          {description}
        </p>
      </div>
    </div>
  </div>
);

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: string;
  aboutItems: AboutInfoItemProps[];
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, subtitle, description, aboutItems, imageUrl }) => {
  return (
    <section className="about-area-three">
      <div className="container">
        <div className="grid grid-cols-12 gap-24 items-center">
          {/* Left Content */}
          <div className="xs-to-md-min:col-span-6 col-span-12">
            <div className="max-w-575">
              <div className="section-tittle mb-50">
                <span className="key-title capitalize font-700">{title}</span>
                <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl mb-20">
                  {subtitle}
                </h2>
                <p className="common-pera font-sans text-primary-title text-base xs:text-md leading-normal line-clamp-3">
                  {description}
                </p>
              </div>

              {/* About Information */}
              <div className="about-info">
                <div className="grid grid-cols-12 gap-24">
                  {aboutItems.map((item, index) => (
                    <AboutInfoItem key={index} {...item} />
                  ))}
                  {/* <div className="col-span-10 mt-10">
                    <Link
                      href="/about"
                      className="py-14 px-30 capitalize text-base font-bold rounded-[10px] border border-primary bg-primary text-white transition-bundle hover:bg-transparent hover:text-primary"
                    >
                      Read More
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="xs-to-md-min:col-span-6 col-span-12">
            <div className="relative">
              {/* <div className="play-button">
                <Link id="play-video-two" className="video-play-button" href="javascript:void(0)">
                  <span></span>
                </Link>
                <div id="video-overlay" className="video-overlay">
                  <button className="video-overlay-close">&times;</button>
                </div>
              </div> */}
              <Image className="w-full" src={imageUrl} alt="About Us Image" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

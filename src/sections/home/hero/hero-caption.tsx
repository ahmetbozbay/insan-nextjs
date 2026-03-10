interface HeroCaptionProps {
    title: string;
    subtitle: string;
    description: string;
    buttons: { text: string; href: string; style: string }[];
}

export const HeroCaption: React.FC<HeroCaptionProps> = ({ title, subtitle, description, buttons }) => {
    return (
        <div className="hero-caption-one max-w-562 mb-20">
            <h4 className="key-title mb-20">{title}</h4>
            <h1 className="common-title text-21xl lg:text-12xl md:text-10xl sm:text-8xl xs:text-5xl leading-tight mb-30">
                {subtitle}
            </h1>
            <p className="common-pera text-secondary-title text-base xs:text-sm leading-normal mb-32">{description}</p>
            <div className="flex gap-20 flex-wrap">
                {buttons.map((button, index) => (
                    <a
                        key={index}
                        href={button.href}
                        className={`${button.style} rounded-full leading-tight px-30 py-14`}
                    >
                        {button.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

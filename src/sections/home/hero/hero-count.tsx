interface HeroCountProps {
    count: string;
    description: string;
}

export const HeroCount: React.FC<HeroCountProps> = ({ count, description }) => {
    return (
        <div className="hero-count">
            <h4 className="common-title text-16xl">{count}</h4>
            <p className="common-pera leading-normal text-base">{description}</p>
        </div>
    );
};

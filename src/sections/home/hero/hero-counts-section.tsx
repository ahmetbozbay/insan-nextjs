import { HeroCount } from "./hero-count";

interface HeroCountsSectionProps {
    counts: { count: string; description: string }[];
  }
  
  export const HeroCountsSection: React.FC<HeroCountsSectionProps> = ({ counts }) => {
    return (
      <div className="hero-count-section flex flex-col gap-60">
        {counts.map((item, index) => (
          <HeroCount key={index} count={item.count} description={item.description} />
        ))}
      </div>
    );
  };
  
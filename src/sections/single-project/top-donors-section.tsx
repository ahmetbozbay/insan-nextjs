import Image from "next/image";

interface DonorProps {
  name: string;
  amount: number;
  date: string;
  imageUrl: string;
}

interface TopDonorsSectionProps {
  donors: DonorProps[];
}

const DonorCard: React.FC<DonorProps> = ({ name, amount, date, imageUrl }) => {
  return (
    <div className="group">
      <div className="p-20 rounded-[10px] cursor-pointer bg-white shadow-helpful-card transition-bundle group-hover:bg-primary">
        <div className="w-50 min-w-50 h-50 mb-15 mx-auto">
          <Image className="rounded-full w-full h-full" src={imageUrl} alt={name} width={50} height={50} />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold text-primary-title mb-10 xs-to-sm-max:text-md transition-bundle group-hover:text-white">
            {name}
          </h4>
          <p className="text-base font-bold text-primary mb-10 transition-bundle xs-to-sm-max:text-md group-hover:text-secondary">
            ${amount}
          </p>
          <p className="text-base text-tertiary-title font-normal leading-[25px] transition-bundle xs-to-sm-max:text-md group-hover:text-white">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const TopDonorsSection: React.FC<TopDonorsSectionProps> = ({ donors }) => {
  return (
    <>
      {donors.length > 0 && (
        <div className="grid gap-24 grid-cols-1 xs-to-lg-min:grid-cols-4 xs-to-md-min:grid-cols-3 xs-to-sm-min:grid-cols-2">
          {donors.map((donor, index) => (
            <DonorCard key={index} {...donor} />
          ))}
        </div>
      )}
    </>
  );
};

export default TopDonorsSection;

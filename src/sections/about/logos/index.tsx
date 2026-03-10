import Image from "next/image";

interface LogosProps {
  images: string[];
}

const LogosSection: React.FC<LogosProps> = ({ images }) => {
  return (
    <div className="favourite-section py-110 lg:py-70 xs-to-md-max:py-50">
      <div className="container">
        <div className="flex justify-between items-center gap-4 overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="img-container">
              <Image src={image} alt={`Favourite Image ${index + 1}`} width={300} height={200} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <hr className="bg-primary-gray h-2 mb-0 mt-30" />
      </div>
    </div>
  );
};

export default LogosSection;

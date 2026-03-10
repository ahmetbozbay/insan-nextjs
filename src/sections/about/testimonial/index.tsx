import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
    imageUrl: string;
    name: string;
    role: string;
    rating: number;
    review: string;
    profileImage: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    rtl?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, rtl = false }) => {
    return (
        <div className={cn("absolute top-[20%] hidden xs-to-md-min:block", rtl ? 'left-[30%]' : '-right-[30%]')}>
            <div className={cn("w-350 absolute right-[20%] rounded-[10px] bg-white shadow-helpful-card p-20", rtl ? 'left-[20%]' : 'right-[20%]')}>
                <div className="rating text-ratting-color mb-15">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <i key={index} className="ri-star-fill"></i>
                    ))}
                </div>
                <div className="position-relative">
                    <p className="pera">
                        <i>{testimonial.review}</i>
                    </p>
                </div>
                <div className="flex gap-15 items-center mt-15">
                    <div className="client-image w-50 h-50">
                        <Image
                            className="w-full h-full rounded-full"
                            src={testimonial.profileImage}
                            width={50}
                            height={50}
                            alt={testimonial.name}
                        />
                    </div>
                    <div className="client-details">
                        <h3 className="text-lg xs-to-md-max:text-base font-semibold text-primary-title mb-5 leading-none">
                            {testimonial.name}
                        </h3>
                        <p className="text-md font-normal text-tertiary-title">{testimonial.role}</p>
                    </div>
                </div>
                <div className={cn("absolute bottom-35 ", rtl ? 'left-20 rotate-180' : 'right-20')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="45" viewBox="0 0 62 45" fill="none">
                        <path
                            d="M20.6667 0.75H10.3333C7.59277 0.75 4.96445 1.83869 3.02657 3.77657C1.08869 5.71445 0 8.34277 0 11.0833L0 21.4167C0 22.787 0.544345 24.1011 1.51328 25.0701C2.48222 26.039 3.79639 26.5834 5.16667 26.5834H20.4342C19.8212 30.1911 17.9528 33.4661 15.1591 35.8297C12.3654 38.1932 8.8261 39.4933 5.16667 39.5001C4.48153 39.5001 3.82445 39.7722 3.33998 40.2567C2.85551 40.7412 2.58334 41.3983 2.58334 42.0834C2.58334 42.7685 2.85551 43.4256 3.33998 43.9101C3.82445 44.3946 4.48153 44.6667 5.16667 44.6667C10.6459 44.6606 15.899 42.4812 19.7734 38.6068C23.6479 34.7324 25.8272 29.4793 25.8334 24V5.91667C25.8334 4.54639 25.289 3.23222 24.3201 2.26328C23.3511 1.29434 22.037 0.75 20.6667 0.75Z"
                            fill="#EDEDEF"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

interface TestimonialSectionProps {
    title: string;
    subtitle: string;
    description: string;
    testimonials: Testimonial[];
    rtl?: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ title, subtitle, description, testimonials, rtl = false }) => {
    return (
        <section className="testimonial-section-three py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className="grid grid-cols-12 gap-24 items-center">
                    {/* Left Section Title */}
                    <div className="xs-to-lg-min:col-span-4 col-span-12">
                        <div className="section-tittle">
                            <span className="key-title mb-10">{title}</span>
                            <h2 className="common-title text-8xl leading-[1.29] xs-to-sm-max:text-3xl mb-20">{subtitle}</h2>
                            <p className="common-pera text-base">{description}</p>
                        </div>
                    </div>

                    {/* Right Testimonials */}
                    <div className="xs-to-lg-min:col-span-6 xs-to-md-min:col-span-9 col-span-12">
                        <div className="relative">
                            <div className="testimonial-slider-three-active flex">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="testimonial-images">
                                        <Image
                                            className="w-full rounded-[10px] h-full"
                                            src={testimonial.imageUrl}
                                            width={400}
                                            height={300}
                                            alt={`Testimonial ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* First Testimonial Card */}
                            {testimonials.length > 0 && <TestimonialCard testimonial={testimonials[0]} rtl={rtl} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

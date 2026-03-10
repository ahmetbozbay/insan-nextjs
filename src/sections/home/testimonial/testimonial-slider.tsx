'use client'
import Slider from "@/components/slider";
import TestimonialItem from "./testimonial-item";

export default function TestimonialSlider({ testimonials }: { testimonials: any[] }) {
    return (
        <>
            <div className="col-lg-10 col-12 testimonial-slider">
                <Slider
                    // pervClassName="ltr:left-[calc(50%_-_130px)] rtl:right-[calc(50%_+_130px)]"
                    // nextClassName="ltr:left-[calc(50%_+_130px)] rtl:right-[calc(50%_-_130px)]"
                    navigationContainerClassName="flex absolute bottom-0 h-[40px] left-0 right-0 flex justify-center items-center gap-[12rem]"
                    navigationClassName="relative top-auto left-auto right-auto bottom-auto transform-none w-[30px] h-[30px] border-none bg-transparent text-6xl text-primary rtl:rotate-180"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem key={index} testimonial={testimonial} />
                    ))}
                </Slider>
            </div>
        </>
    )
}
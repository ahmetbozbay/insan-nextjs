export default function TestimonialItem({ testimonial }: { testimonial: any }) {
    const { name, location, rating, quote } = testimonial
    return (
        <>
            <div className="single-testimonial relative !mt-20">
                <div className="mb-18">
                    <div className="client-details">
                        <h3 className="common-title mb-5 text-xl">
                            {name}
                        </h3>
                        <p className="common-pera text-base">{location}</p>
                    </div>
                    <div className="text-ratting-color text-xl">
                        {Array.from({ length: rating }).map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <p className="common-pera text-base xs-to-min:pb-80 line-clamp-3">
                        <i>{quote}</i>
                    </p>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 xs:hidden">
                        <div className="circle-btn w-50 h-50">
                            <i className="text-11xl ri-double-quotes-r"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
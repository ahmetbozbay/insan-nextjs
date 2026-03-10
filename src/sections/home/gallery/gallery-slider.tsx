'use client'
import Slider from "@/components/slider";
import Image from "next/image";

export default function GallerySlider({ images }: { images: any[] }) {
    return (
        <>
            <div className="gallery-slider flex -mb-4">
                <Slider
                    loop
                    showDots={false}
                    showNavigation={false}
                    dragFree
                >
                    {images.map((item, index) => (
                        <div className="group select-none max-w-screen" key={index}>
                            <div className="gallery-img  select-none relative cursor-pointer">
                                <Image src={item.url} width={286} className="select-none" height={230} alt="img" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
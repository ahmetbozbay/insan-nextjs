import { cn } from "@/lib/utils";
import Image from "next/image";

export default function UrgentItem({ item, buttons }: { item: any, buttons?: (item: any) => any[] }) {
    const { bigImage: image, category, location, title } = item
    return (
        <>
            <div className="image-container relative h-full embla__slide select-none rounded-[10px] overflow-hidden bg-gradient-to-t from-30% to-50& from-black/[.5] to-transparent w-full">
                <Image
                    className="w-full h-full xs-to-sm-max:h-[400px] select-none relative z-[-1] "
                    // src="/assets/images/gallery/urgent-1.png"
                    src={image}
                    alt="img"
                    width={1920}
                    height={900}
                />
                <div className={cn(
                    "absolute bottom-70 xs-to-md-max:bottom-50 ltr:left-30 rtl:right-30 select-none"
                )}>
                    <div className="flex gap-20 mb-10">
                        <div className="edu flex items-center gap-10 text-secondary">
                            <i className="text-4xl xs:text-md ri-file-3-line"></i>
                            <p className="text-base leading-[1.6] xs:text-md select-none">{category}</p>
                        </div>
                        <div className="map flex items-center gap-10 text-white">
                            <i className="text-4xl xs:text-md ri-map-pin-line"></i>
                            <p className="text-base leading-[1.6] xs:text-md select-none">{location}</p>
                        </div>
                    </div>
                    <div className="overlay-title select-none">
                        <h4 className="text-8xl lg:text-5xl md:text-3xl select-none sm:text-lg xs:text-base text-white font-bold max-w-567">
                            {title}
                        </h4>
                    </div>
                    <div className="flex gap-20 flex-wrap mt-20">
                        {(buttons && buttons(item))?.map((button, index) => {
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    className={`${button.style} rounded-full leading-tight px-30 py-14`}
                                >
                                    {button.text}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
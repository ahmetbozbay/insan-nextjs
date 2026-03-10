'use client'
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { Children, Fragment, useCallback } from "react";
import { Dot, useDots } from "./Dot";
import { useParams } from "next/navigation";

export default function Slider({ children, emblaClassName = 'embla', showDots, pervClassName, nextClassName, navigationClassName, showNavigation = true, loop, dragFree, navigationContainerClassName = '', slideItemClass = '' }: { children: React.ReactNode, emblaClassName?: string, showDots?: boolean, pervClassName?: string, nextClassName?: string, navigationClassName?: string, showNavigation?: boolean, loop?: boolean, dragFree?: boolean, navigationContainerClassName?: string, slideItemClass?: string }) {
    const { lang } = useParams()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: !!loop, dragFree: !!dragFree, align: 'start', direction: lang === 'ar' ? 'rtl' : 'ltr' })
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDots(emblaApi)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        console.log('scrollNext')
        console.log(emblaApi)
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <>
            <div className="relative">
                <div className={cn("embla relative", emblaClassName)}>
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {Children.map(children, (child: any, index: number) => (
                                <Fragment key={index}>
                                    <div className={cn("embla__slide", slideItemClass)}>
                                        {child}
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                {!!showNavigation && (
                    <>
                        <div className={cn(navigationContainerClassName)}>
                            <button className={cn("xs-to-md-max:hidden xs-to-md-min:flex absolute z-100 top-1/2 w-[30px] h-[30px] items-center justify-center -translate-y-1/2 bg-primary text-white p-5 rounded-full left-[-3rem] embla__prev", navigationClassName, pervClassName)} onClick={scrollPrev}>
                                {/* {'<'} */}
                                <i className="ri-arrow-left-line" />
                            </button>
                            <button className={cn("xs-to-md-max:hidden xs-to-md-min:flex absolute z-100 top-1/2 w-[30px] h-[30px] items-center justify-center -translate-y-1/2 bg-primary text-white p-5 rounded-full right-[-3rem] embla__next", navigationClassName, nextClassName)} onClick={scrollNext}>
                                {/* {'>'} */}
                                <i className="ri-arrow-right-line" />
                            </button>
                        </div>
                    </>
                )}
                {!!showDots && (
                    <div className="left-1/2 transform -translate-x-1/2 flex justify-center items-center m-0 py-16 px-0 absolute bottom-20 xs-to-md-max:bottom-10 w-full list-none">
                        {
                            scrollSnaps.map((_, index) => (
                                <Dot
                                    key={index}
                                    active={index === selectedIndex}
                                    onClick={() => onDotButtonClick(index)}
                                />
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    );
}
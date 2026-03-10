'use client'
import useEmblaCarousel from "embla-carousel-react";
import UrgentItem from "./urgent-item";
import { useCallback, useEffect } from "react";
import Slider from "@/components/slider";

export default function UrgentSlides({ items,t }: { items: any[], t?: any }) {
    return (
        <>

            <div className="col-start-0 col-span-12 xs-to-md-max:col-span-12 p-0 urgent-area-slide xs-p-12 !overflow-visible">
                <Slider
                    emblaClassName="rounded-[10px]"
                    showDots
                    showNavigation={false}
                >
                    {items.map((item, index) => (
                        <UrgentItem
                            key={index}
                            item={{
                                ...item,
                                category: item.categories.map((c: any) => c.title)?.join(', '),
                                location: item.location || 'Palestine'
                            }}
                            buttons={(item: any) => {
                                return ([
                                    { text: t?.project_details, href: `/projects/${item.slug.current}`, style: "btn-primary-fill hover:bg-white" },
                                    { text: t?.donate_now, href: `/pay/${item.slug.current}`, style: "btn-tertiary-fill hover:bg-white" },
                                ])
                            }}
                        />
                    ))}
                </Slider>
            </div>
        </>
    )
}
import Image from "next/image";
import GallerySlider from "./gallery-slider";
import { getGallery } from "@/actions/gallery";

export default async function HomeGallery() {
    // const images = [
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    //     {
    //         url: "/assets/images/gallery/gallery-1.png",
    //     },
    // ]
    const images = await getGallery()
    return (
        <>
            <div className="gallery-area w-screen overflow-hidden">
                <GallerySlider images={images} />
            </div>
        </>
    )
}
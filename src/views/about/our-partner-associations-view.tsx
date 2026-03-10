import Image from "next/image";

export interface OurPartnerAssociationsViewProps {
    lang?: string;
}

export default async function OurPartnerAssociationsView({ lang = "en" }: OurPartnerAssociationsViewProps) {
    const partners = [
        { src: "/assets/images-used/about/partners/ayed.png" },
        { src: "/assets/images-used/about/partners/dost.png" },
        { src: "/assets/images-used/about/partners/hak.png" },
        { src: "/assets/images-used/about/partners/ihh.png" },
        { src: "/assets/images-used/about/partners/infak.webp" },
        { src: "/assets/images-used/about/partners/isra.png" },
        { src: "/assets/images-used/about/partners/iylik.png" },
        { src: "/assets/images-used/about/partners/kardes.png" },
        { src: "/assets/images-used/about/partners/ribat.png" }
    ];

    const Item = ({ src }: { src: string }) => {
        return (
            <>
                <div className="w-[20%] mt-[50px]">
                    <Image src={src} width={150} height={150} alt="" className=" h-[100px] mb-[20px]" />
                </div>
            </>
        )
    }
    return (
        <>
            <section className="pb-110 lg:pb-70 xs-to-md-max:pb-50">
                <div className="container">
                    <div className="flex items-center justify-center py-[5rem] bg-white flex-wrap">
                        {partners.map((partner, index) => (
                            <Item key={index} src={partner.src} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

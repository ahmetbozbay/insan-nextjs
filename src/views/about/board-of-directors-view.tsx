import FaqsArea from "@/components/faq";

export interface BoardOfDirectorsViewProps {
    lang?: string;
}

export default async function BoardOfDirectorsView({ lang = "en" }: BoardOfDirectorsViewProps) {
    const faqs = [
        {
            // title: "",
            listItems: [
                'Muhammed Ziya Afifi: Yönetim Kurulu Başkanı',
                'Abdullah Atasever: Yönetim Kurulu Bşk. Yrd.',
                'Mustafa Yenipazar: Yönetim Kurulu Üyesi',
                'İshak Gazel: Yönetim Kurulu Üyesi',
                'Mustafa Şükrü Nazlı: Yönetim Kurulu Üyesi',
                // 'Sebahattin Ceyhun: Denetim Kurulu Başkanı',
                // 'Muhammed İkbal Gündem: Denetim Kurulu Üyesi',
                // 'Gürsel Özdemirel: Denetim Kurulu Üyesi',
            ]
        },
    ];
    const faqs2 = [
        {
            // title: "",
            listItems: [
                'Sebahattin Ceyhun: Denetim Kurulu Başkanı',
                'Muhammed İkbal Gündem: Denetim Kurulu Üyesi',
                'Gürsel Özdemirel: Denetim Kurulu Üyesi',
            ]
        },
    ];

    return (
        <>
        <FaqsArea faqs={faqs} showContactInfo={false} contactEmail="info@insander.org" />
        <FaqsArea faqs={faqs2} showContactInfo contactEmail="info@insander.org" className='pt-0 lg:pt-0 xs-to-md-max:pt-0' />
        </>
    );
}

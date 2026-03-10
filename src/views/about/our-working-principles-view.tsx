import FaqsArea from "@/components/faq";

export interface OurPartnerAssociationsViewProps {
    lang?: string;
}

export default async function OurPartnerAssociationsView({ lang = "en" }: OurPartnerAssociationsViewProps) {
    const faqs = [
        {
            title: "Önce İnsan",
            content: `Derneğimiz yaratılmışların en üstünü olan insanın korunması gerekli 5 temel özelliği olan can, akıl, inanç, nesil ve mal emniyetini önemini bilerek bunların korunmasına yönelik çalışmalar yürütür.`,
        },
        {
            title: "Evrensellik",
            content: `İnsan Derneği yaptığı çalışmaları uluslararası kabul görmüş ilke ve yöntemlerle gerçekleştirir.`,
        },
        {
            title: "Şeffaflık",
            content: `Bağışçılarımızı ve partner kuruluşlarımızı yaptıkları bağışlar ve projelerle ilgili olarak nerede, ne zaman ve ne şekilde ulaştığına dair görsel veriler başta olmak üzere bilgilendirmekteyiz.`,
        },
        {
            title: "Süreklilik",
            content: `Acil durumlarda gerekli olan beslenme ve barınma gibi temel ihtiyaçları süreç boyunca hergün belirli standartlar dahilinde ulaştırmak ve insanların yaşamları destekleyici kalıcı projeler gerçekleştirmekteyiz.`,
        },
        {
            title: "İnsanlık Onuru",
            content: `Faaliyetlerimizi temel değerlerimizden olan insan onurunu incitmemek ilkesi doğrultusunda gerçekleştiriyoruz.`,
        },
        {
            title: "Öncülük",
            content: `Kim var denildiğinde sağına ve soluna bakmadan ben varım deme düsturuyla çalışmalarımıza anında başlayıp diğer kurumlara da öncülük etmek.`,
        },
    ];

    return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

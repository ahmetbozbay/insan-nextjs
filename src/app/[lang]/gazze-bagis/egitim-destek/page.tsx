import { Metadata } from "next";
import EgitimDestekView from "./egitim-destek-view";

export const metadata: Metadata = {
  title: "Gazze Eğitim Desteği & Okul Çantası Bağışı | İnsan Derneği",
  description: "Gazze'deki çadır okullarda eğitim mücadelesi veren yetim öğrencilere okul çantası ve kırtasiye seti ulaştırın. 1.500 TL ile bir çocuğun eğitimine umut olun.",
  keywords: [
    "Gazze eğitim desteği",
    "Gazze okul çantası bağışı",
    "Filistin kırtasiye yardımı",
    "Gazze çadır okul desteği",
    "Gazze yetim öğrenci bursu",
    "Filistin öğrenci seti",
    "İnsan derneği eğitim bağışı"
  ],
  alternates: {
    canonical: "https://insander.org/tr/gazze-bagis/egitim-destek",
  },
  openGraph: {
    title: "Gazze'de Bir Çocuğun Geleceğine Işık Olun | Eğitim & Çanta Bağışı",
    description: "Savaş şartlarında eğitimine devam etmeye çalışan Gazzeli yetim öğrencilere tam donanımlı okul çantası ve kırtasiye seti teslim ediyoruz.",
    url: "https://insander.org/tr/gazze-bagis/egitim-destek",
    siteName: "İnsan Derneği",
    images: [
      {
        url: "/assets/images-used/projects/gazze-kirtasiye-malzemeleri-ve-canta-bagisi.webp",
        width: 1200,
        height: 630,
        alt: "Gazze Öğrenci Okul Çantası ve Kırtasiye Dağıtımı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazze Eğitim Desteği & Kırtasiye Bağışı | İnsan Derneği",
    description: "1.500 TL ile Gazze'deki bir öğrencinin yıllık okul çantası ve kırtasiye ihtiyacını karşılayın.",
    images: ["/assets/images-used/projects/gazze-kirtasiye-malzemeleri-ve-canta-bagisi.webp"],
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function EgitimDestekPage({ params }: Props) {
  const resolvedParams = await params;
  return <EgitimDestekView lang={resolvedParams.lang || "tr"} />;
}
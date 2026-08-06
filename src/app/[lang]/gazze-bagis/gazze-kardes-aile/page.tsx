import { Metadata } from "next";
import KardesAileView from "./kardes-aile-view";

export const metadata: Metadata = {
  title: "Gazze Kardeş Aile Bağışı & Yetim Kefaleti | İnsan Derneği",
  description: "Gazze Han Yunus çadır kentinde eşini kaybeden annelerin ve yetim çocukların aylık temel gıda, barınma ve su ihtiyaçlarını karşılamak için kardeş aile kefalet sistemine katılın.",
  keywords: [
    "Gazze kardeş aile",
    "Gazze yetim kefaleti",
    "Han yunus çadır kenti yardım",
    "Gazze dul ve yetimlere yardım",
    "Filistin kardeş aile",
    "Gazze aylık düzenli yardım",
    "Gazze nakdi yardım",
    "İnsan derneği gazze bağış"
  ],
  alternates: {
    canonical: "https://insander.org/tr/gazze-bagis/gazze-kardes-aile",
  },
  openGraph: {
    title: "Gazze'de Bir Ailenin Umudu, Bir Yetimin Tebessümü Olun",
    description: "Han Yunus çadır kentinde yaşam mücadelesi veren Gazzeli bir ailenin aylık ihtiyaçlarını üstlenin. Yardımlarınız doğrudan çadırlarda, isminize özel teşekkürle teslim ediliyor.",
    url: "https://insander.org/tr/gazze-bagis/gazze-kardes-aile",
    siteName: "İnsan Derneği",
    images: [
      {
        url: "/assets/images-used/projects/gazze-kardes-aile-bagisi-hero-banner.webp", 
        width: 1200,
        height: 630,
        alt: "Gazze Kardeş Aile Bağışı Teslimatı Han Yunus",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazze Kardeş Aile Bağışı | İnsan Derneği",
    description: "Gazze'deki savaş mağduru yetim ailelerin aylık ihtiyaçlarını kardeş aile bağışı ile üstlenin.",
    images: ["/assets/images-used/projects/gazze-kardes-aile-bagisi-hero-banner.webp"],
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function KardesAilePage({ params }: Props) {
  const resolvedParams = await params;
  return <KardesAileView lang={resolvedParams.lang || "tr"} />;
}
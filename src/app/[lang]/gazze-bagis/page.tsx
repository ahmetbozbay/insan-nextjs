import ProjectsView from "@/views/projects-view";
import { Metadata } from "next";

// --- 1. MAKSİMUM SEO & İÇERİK EŞLEŞMELİ METADATA ---
export const metadata: Metadata = {
  // Başlık: Doğrudan hedef kelime ile başlar ve sayfanın ana kategorilerini özetler. (Max 65 Karakter)
  title: "Gazze Bağış: Acil Yardım, Gıda, Sağlık ve Zekat Projeleri",
  
  // Açıklama: Tıklama oranını (CTR) artıracak şekilde eylem çağrısı ve detay içerir. (Max 160 Karakter)
  description: "Gazze bağış kampanyası ile abluka altındaki Filistin, Lübnan ve Ürdün'deki mültecilere gıda, temiz su, çadır, sağlık ve zekat yardımlarınızı güvenle ulaştırın.",
  
  // Etiketler: Google doğrudan kullanmasa da, site içi arama ve bazı arama motorları (Yandex/Bing) için çok değerlidir.
  keywords: [
    "Gazze bağış", 
    "online Gazze bağış",
    "Gazze acil yardım", 
    "Gazze zekat bağışı", 
    "Gazze kurban bağışı", 
    "Gazze gıda yardımı", 
    "Gazze su bağışı",
    "Gazze çadır bağışı",
    "Filistin yardım", 
    "Lübnan mülteci yardımı",
    "İnsan Derneği"
  ],
  
  // Canonical: Kopya içerik cezasını önler, gücü tek bir linkte toplar.
  alternates: {
    canonical: 'https://insander.org/tr/gazze-bagis',
  },
  
  // OpenGraph: WhatsApp, Facebook, LinkedIn gibi yerlerde link paylaşıldığında çıkacak zengin kart.
  openGraph: {
    title: "Gazze Bağış ve Acil İnsani Yardım Seferberliği | İnsan Derneği",
    description: "Savaş mağduru Filistinli mülteciler için gıda, su, barınma ve sağlık operasyonları yürütüyoruz. Zekat ve acil bağışlarınızla umut olun.",
    url: 'https://insander.org/tr/gazze-bagis',
    siteName: 'İnsan Derneği',
    images: [
      {
        url: '/assets/images-used/projects/nakdi-yardim.webp', 
        width: 1200,
        height: 630,
        alt: 'Gazze Acil İnsani Yardım ve Bağış Kampanyası',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  
  // Twitter Card: X (Twitter) üzerinde link paylaşıldığında büyük görselle çıkmasını sağlar.
  twitter: {
    card: "summary_large_image",
    title: "Gazze Bağış: Acil Yardım, Gıda ve Sağlık Projeleri",
    description: "Gazze, Lübnan ve Ürdün'deki kardeşlerimiz için gıda, barınma ve sağlık destek kampanyaları. Online bağış yapın.",
    images: ['/assets/images-used/projects/nakdi-yardim.webp'],
  }
};

// --- 2. SAYFA BİLEŞENİ ---
export default async function ProjectPage({ params, searchParams }: any) {
  const lang = (await params).lang;
  const category = (await searchParams)?.category;

  return (
    <>
      <ProjectsView lang={lang} category={category} />
    </>
  );
}
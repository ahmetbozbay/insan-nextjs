import KurbanClient from "./KurbanClient";

export default function Page() {
  return <KurbanClient />;
}

// METADATA BURAYA GELMELİ
export const metadata = {
  title: "2026 Kurban Bağışı | Vekaletle Kurban Kesimi - İnsan Derneği",
  description: "2026 yılı vekaletle kurban bağışlarınızı Filistin, Gazze ve ihtiyaç sahibi bölgelere ulaştırıyoruz. İslami usullere uygun kesim ve video bilgilendirme.",
  alternates: {
    canonical: "https://insander.org/tr/projects/kurban-bagisi",
  },
  openGraph: {
    title: "2026 Kurban Bağışı | İnsan Derneği",
    description: "Kurban bağışınızla umut olun. Vekaletle güvenli kesim ve hızlı dağıtım.",
    images: [{ url: "/assets/images-used/projects/2026-vekaletle-kurban-bagisi.webp" }],
  },
};

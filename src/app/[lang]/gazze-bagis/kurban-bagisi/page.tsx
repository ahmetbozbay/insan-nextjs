import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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

const KurbanDonationPage = () => {
  const kurbanProjects = [
    {
      title: "Filistin Kurban Bağışı",
      price: "135.000 TL",
      priceNumeric: 135000,
      unit: "Küçükbaş Kurban",
      image: "/assets/images-used/projects/filistin.webp",
      link: "/projects/kurban-bagisi/filistin-kurban-bagisi",
      payLink: "/pay/qurbani",
      tag: "Acil Destek"
    },
    {
      title: "Lübnan Kurban Bağışı",
      price: "15.000 TL",
      priceNumeric: 15000,
      unit: "Hisse Bedeli",
      image: "/assets/images-used/projects/lübnan.webp",
      link: "/projects/kurban-bagisi/lubnan-kurban-bagisi",
      payLink: "/pay/qurbani",
      tag: "Emanetinizle Umut"
    },
    {
      title: "Mısır Kurban Bağışı",
      price: "15.000 TL",
      priceNumeric: 15000,
      unit: "Hisse Bedeli",
      image: "/assets/images-used/projects/mısır.webp",
      link: "/projects/kurban-bagisi/misir-kurban-bagisi",
      payLink: "/pay/qurbani",
      tag: "Kardeşlik Payı"
    }
  ];

  return (
    <main className="bg-white">
      <section className="relative w-full h-[520px] lg:h-[700px] overflow-hidden">

        {/* Arka Plan Görsel */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images-used/projects/banner.webp"
            alt="2026 vekaletle kurban bağışı ve islami usullere uygun kesim organizasyonu"
            fill
            priority
            className="object-cover object-right"
          />
        </div>

        {/* Gradient Overlay (Yeşil + koyu kontrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052c1a]/95 via-[#0b5331]/70 to-transparent"></div>

        {/* İçerik */}
        <div className="container mx-auto relative h-full z-10">
          <div className="flex flex-col justify-center h-full max-w-[720px] px-6 lg:px-0">

            {/* Üst Mini Başlık */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#e31e24]"></span>
              <span className="text-[#e31e24] font-bold tracking-[0.25em] text-xs uppercase">
                Güvenilir Kurban Organizasyonu
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
              2026 Kurban Bağışı <br />
              <span className="text-white">Vekaletle Güvenli Kesim</span>
            </h1>

            {/* Açıklama */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-[700px]">
              <strong>Kurban bağışı</strong> ile ibadetinizi güvenle yerine getirin. 
              Vekaletle kesilen kurbanlarınız ihtiyaç sahiplerine ulaştırılır,
              <strong> video ve SMS bildirimi</strong> ile süreci anlık takip edebilirsiniz.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#bagis-secenekleri"
                className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-[#b71c1c] transition-all duration-300"
              >
                Kurban Bağışı Yap
              </Link>

              <Link 
                href="#bagis-secenekleri"
                className="border border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0b5331] transition-all duration-300"
              >
                Bağış Bölgelerini Gör
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm backdrop-blur-md">
                <span className="text-[#e31e24] font-black">✔</span>
                İslami usullere uygun kesim
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm backdrop-blur-md">
                <span className="text-[#e31e24] font-black">✔</span>
                Video ile anlık bilgilendirme
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm backdrop-blur-md">
                <span className="text-[#e31e24] font-black">✔</span>
                Güvenli online bağış sistemi
              </span>

            </div>

          </div>
        </div>
      </section>
         {/* --- BREADCRUMB & INFO SECTION --- */}
      <section className="bg-gray-50 border-b border-gray-200">

        <nav aria-label="Breadcrumb" className="py-5">

          <div className="container mx-auto px-6">

            <ol className="flex items-center flex-wrap text-base md:text-lg font-medium">

              {/* Ana Sayfa */}
              <li>
                <Link
                  href="/tr"
                  className="text-gray-500 hover:text-[#0b5331] transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>

              <li className="mx-3 text-gray-300">/</li>

              {/* Projeler */}
              <li>
                <Link
                  href="/tr/projects"
                  className="text-gray-500 hover:text-[#0b5331] transition-colors"
                >
                  Projelerimiz
                </Link>
              </li>

              <li className="mx-3 text-gray-300">/</li>

              


              {/* Aktif sayfa (SEO TARGET PAGE) */}
              <li className="text-[#0b5331] font-bold md:text-lg">
                Kurban Bağışı
              </li>

            </ol>

          </div>

        </nav>

        {/* SEO: JSON-LD Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://insander.org/tr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projelerimiz",
                  "item": "https://insander.org/tr/projects"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Kurban Bağışı",
                  "item": "https://insander.org/tr/projects/kurban-bagisi"
                },
                // Şema içindeki 4. pozisyonu şu şekilde güncelle:
                
              ]
            })
          }}
        />
      </section>
      <section id="bagis-secenekleri" className="py-20 md:py-32 bg-[#fcfcfc] border-y border-gray-100">

        <div className="container mx-auto px-6">

          {/* SEO Başlık */}
          <div className="max-w-3xl mb-14">

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              2026 Vekaletle Kurban Bağışı Yapılabilecek Bölgeler
            </h2>

            <p className="text-gray-700 text-lg max-w-20xl">
              Vekaletle kurban bağışınızı Filistin, Gazze, Lübnan ve Mısır gibi ihtiyaç bölgelerine ulaştırarak islami usullere uygun kesim ve dağıtım sürecine destek olabilirsiniz.
            </p>

          </div>

          {/* GRID */}
          <div className="grid gap-6 lg:gap-8 pb-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">

            {kurbanProjects.map((item, idx) => {

              // SEO-friendly slug fallback (link yoksa otomatik üret)
              const slug = item.link || "#";

              return (
                <div
                  key={idx}
                  className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  {/* IMAGE */}
                  <Link href={slug} className="block relative aspect-[5/4] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={`${item.title} 2026 kurban bağışı vekaletle kesim ve ihtiyaç sahiplerine dağıtım`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded">
                      Kurban Bağışı 2026
                    </div>

                  </Link>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[#0b5331] text-2xl font-black mb-3">
                      {item.price}
                    </p>

                    {/* SEO micro description */}
                    <p className="text-gray-500 text-sm mb-4">
                      {item.title} kapsamında vekaletle kurban kesimi yapılır. Kesim süreci kayıt altına alınır ve bağışçılara video ile iletilir.
                    </p>

                    {/* CTA + Internal Link */}
                   <Link
  href={slug}
  className="
    group flex w-full items-center justify-center gap-2
    rounded-xl
    bg-[#0b5331]
    px-5 py-3.5
    text-center text-base font-bold text-white
    shadow-md
    transition-all duration-200
    hover:bg-[#084326]
    hover:shadow-lg
    focus:outline-none
    focus:ring-2 focus:ring-[#0b5331]/40
    focus:ring-offset-2
  "
  aria-label={`${item.title} bağışı sayfasına git`}
>
  <span>{item.title} bağışı yapmak için tıkla</span>

  <span
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    →
  </span>
</Link>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      <section className="py-20 bg-white border-t border-gray-100">

        <div className="container mx-auto px-6">
          

          {/* 1. SEO INTRO */}
          <div className="mb-16">

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              Vekaletle Kurban Kesimi ve Dağıtımı Nasıl Yapılır?
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-6 max-w-none">

              <p>
                <strong>Kurban bağışı 2026</strong> kapsamında, İnsan Derneği olarak vekaletle kurban kesimlerini İslami usullere uygun şekilde gerçekleştiriyoruz. 
                Kesilen kurbanlar; Filistin, Gazze, Lübnan ve Mısır başta olmak üzere ihtiyaç sahiplerine ulaştırılmaktadır.
              </p>

              <p>
                Bu süreçte yapılan <strong>vekaletle kurban bağışı</strong>, yalnızca bir ibadet değil aynı zamanda dünyanın farklı bölgelerinde yaşayan ihtiyaç sahipleri için bir yardım köprüsüdür.
              </p>

            </div>
          </div>

          {/* 2. PROCESS */}
          <div className="mb-20">

            <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">
              Kurban Bağışı Süreci Nasıl İşler?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Kurbanlık Seçimi",
                  desc: "Sağlık ve yaş kriterlerine uygun kurbanlıklar uzman ekipler tarafından seçilir."
                },
                {
                  title: "Vekalet Verme",
                  desc: "Online veya telefon üzerinden vekalet alınarak kurban bağışı süreci başlatılır."
                },
                {
                  title: "İslami Usullere Göre Kesim",
                  desc: "Kurbanlar bayram günlerinde bağışçı ismiyle birlikte dini kurallara uygun kesilir."
                },
                {
                  title: "Video Bildirimi",
                  desc: "Kesim anı kayıt altına alınır ve bağışçıya video ile bilgilendirme yapılır."
                },
                {
                  title: "Dağıtım Süreci",
                  desc: "Kurban payları savaş mağdurları, yetimler ve ihtiyaç sahiplerine ulaştırılır."
                }
              ].map((step, i) => (
                <div key={i} className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:shadow-md transition">

                  <h3 className="text-[#0b5331] font-bold text-lg mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* 3. FAQ SEO (GÜÇLENDİRİLMİŞ) */}
          <div className="mb-20 bg-[#0b5331]/5 p-8 md:p-12 rounded-2xl">

            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Kurban Bağışı Hakkında Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Kurban bağışı ne zaman yapılır?
                </h3>
                <p className="text-gray-600">
                  Kurban bağışı, bayram öncesi ve bayram günleri içinde yapılabilir. Organizasyon planlaması için erken bağış önerilir.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Vekaletle kurban kesimi nasıl yapılır?
                </h3>
                <p className="text-gray-600">
                  Bağışçıdan alınan vekalet sonrası kurbanlar İslami usullere uygun şekilde kesilir ve ihtiyaç sahiplerine dağıtılır.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Kurban bağışı nasıl takip edilir?
                </h3>
                <p className="text-gray-600">
                  Kesim işlemi sonrası bağışçılara SMS ve video bildirimi gönderilerek süreç şeffaf şekilde paylaşılır.
                </p>
              </div>

            </div>

          </div>

          {/* 4. CTA */}
          <div className="text-center">

            <h2 className="text-3xl font-black text-gray-900 mb-6">
              2026 Kurban Bağışı ile İyiliğe Katılın
            </h2>

            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Sınırlı kontenjan nedeniyle kurban bağışınızı erken yaparak ihtiyaç sahiplerine zamanında ulaşmasını sağlayabilirsiniz.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <div className="text-lg font-bold text-[#0b5331]">
                📞 +90 (555) 190 10 43
              </div>

              <div className="text-lg font-bold text-[#0b5331]">
                📧 info@insander.org
              </div>

            </div>

          </div>

        </div>

      </section>


      <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kurban bağışı ne zaman yapılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kurban bağışı bayram öncesi ve bayram günleri içinde yapılabilir. Erken bağış, organizasyon planlaması açısından tavsiye edilir."
            }
          },
          {
            "@type": "Question",
            "name": "Vekaletle kurban kesimi nasıl yapılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bağışçıdan alınan vekalet sonrası kurbanlar İslami usullere uygun şekilde kesilir ve ihtiyaç sahiplerine ulaştırılır."
            }
          },
          {
            "@type": "Question",
            "name": "Kurban bağışı nasıl takip edilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kesim sonrası bağışçılara SMS ve video ile bilgilendirme yapılır ve süreç şeffaf şekilde paylaşılır."
            }
          }
        ]
      })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Kurban Bağışı 2026",
        "description": "Vekaletle kurban bağışı hizmeti. Filistin, Gazze, Mısır ve Lübnan bölgelerine İslami usullere uygun kurban kesimi ve dağıtımı.",
        "provider": {
          "@type": "Organization",
          "name": "İnsan Derneği",
          "url": "https://insander.org" 
        },
        "areaServed": "TR",
        "serviceType": "Kurban Bağışı",
        "offers": kurbanProjects.map((item) => ({
          "@type": "Offer",
          "name": item.title,
          "price": item.priceNumeric, 
          "priceCurrency": "TRY",
          "url": `https://insander.org${item.link}`,
          "availability": "https://schema.org/InStock"
        }))
      })}
    </Script>
    <a
                href="https://wa.me/905010879198?text=Merhaba,%20İnsan%20Derneği%20hakkında%20detaylı%20bilgi%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-50 right-20 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate"
                aria-label="WhatsApp üzerinden bize ulaşın"
                >
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                </a>
    </main>
  );
};

export default KurbanDonationPage;
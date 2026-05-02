import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";
export const metadata = {
  title: "Filistin Kurban Bağışı 2026 | Gazze Vekaletle Kurban Kesimi",
  description: "2026 Filistin kurban bağışı hisse bedellerini inceleyin. Gazze ve Filistin'de vekaletle, İslami usullere uygun kurban kesimi ve video raporlama hizmeti.",
  alternates: {
    canonical: "https://insander.org/tr/projects/kurban-bagisi/filistin-kurban-bagisi",
  },
};


const KurbanDonationPage = () => {
  const kurbanProjects = [
    {
      title: "Filistin Kurban Bağışı",
      price: "135.000 TL",
      unit: "Küçükbaş Kurban",
      image: "/assets/images-used/projects/filistin.webp",
      link: "/projects/kurban-bagisi/filistin-kurban-bagisi",
      payLink: "/online-bagis/filistin",
      tag: "Acil Destek"
    },
    {
      title: "Lübnan Kurban Bağışı",
      price: "15.000 TL",
      unit: "Hisse Bedeli",
      image: "/assets/images-used/projects/lübnan.webp",
      link: "/projects/kurban-bagisi/lubnan-kurban-bagisi",
      payLink: "/online-bagis/lubnan",
      tag: "Emanetinizle Umut"
    },
    {
      title: "Mısır Kurban Bağışı",
      price: "15.000 TL",
      unit: "Hisse Bedeli",
      image: "/assets/images-used/projects/mısır.webp",
      link: "/projects/kurban-bagisi/misir-kurban-bagisi",
      payLink: "/online-bagis/misir",
      tag: "Kardeşlik Payı"
    }
  ];

  return (
    <main className="bg-white">
      <Script
        id="ngo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "İnsan Derneği",
            "url": "https://insander.org",
            "areaServed": "Global",
            "sameAs": ["https://insander.org/tr"]
          })
        }}
      />
      <section className="relative w-full h-[500px] lg:h-[720px] overflow-hidden bg-white">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images-used/projects/filistin-kurban-bagisi-banner.webp"
              alt="2026 Filistin vekaletle kurban kesimi ve Gazze kurban eti dağıtım organizasyonu"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* SEO SAFE READABILITY LAYER */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b5331]/40 via-white/40 to-white/10"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 h-full container mx-auto px-6 lg:px-0">

            <div className="flex flex-col justify-center h-full max-w-[780px]">

              {/* SEO BADGE (semantic + keyword hint) */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#e31e24]" aria-hidden="true"></span>

                <span className="text-[#e31e24] font-bold tracking-[0.1em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase">
                2026 Filistin Kurban Organizasyonu
              </span>
              </div>

              {/* H1 (PRIMARY SEO KEYWORD) */}
              <h1 className="text-[#0b5331] text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                  Gazze Filistin Kurban Bağışı 2026 <br></br><br className="hidden md:block" />
                  <span className="text-[#e31e24] text-2xl md:text-6xl">Gazze ve Filistin’de Vekaletle Kurban Kesimi</span>
                </h1>

          
              {/* SEO DESCRIPTION (LSI keywords included) */}
              <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[680px]">
                <strong>Filistin kurban bağışı</strong> ile 2026 yılı kurban ibadetinizi
                vekalet yoluyla gerçekleştirerek <strong>Gazze, Filistin ve çevre bölgelerdeki ihtiyaç sahiplerine</strong> ulaştırılmasını sağlayabilirsiniz.
                Kurban kesimleri <strong>İslami usullere uygun</strong> şekilde yapılır ve süreç video ile raporlanır.
              </p>

              {/* CTA (conversion + SEO intent match) */}
              <div className="flex flex-wrap gap-4">

                <a
                  href="#bagis-formu"
                  className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-[#b71c1c] transition"
                >
                  Filistin Kurban Bağışı Yap
                </a>

                <a
                  href="#bagis-bilgisi"
                  className="border border-[#0b5331] text-[#0b5331] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0b5331] hover:text-white transition"
                >
                  Kurban Bağışı Sürecini İncele
                </a>

              </div>

              {/* TRUST SIGNALS (E-E-A-T support) */}
              <div className="mt-8 flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm">
                  ✔ Vekaletle İslami kurban kesimi
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm">
                  ✔ Gazze ve Filistin’e dağıtım
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm">
                  ✔ Video ile şeffaf bilgilendirme
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

              {/* Kurban Bağışı Kategori */}
              <li>
                <Link
                  href="/tr/projects/kurban-bagisi"
                  className="text-gray-500 hover:text-[#0b5331] transition-colors"
                >
                  Kurban Bağışı
                </Link>
              </li>

              <li className="mx-3 text-gray-300">/</li>

              {/* Aktif sayfa (SEO TARGET PAGE) */}
              <li className="text-[#0b5331] font-bold md:text-lg">
                Filistin Kurban Bağışı
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
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Filistin Kurban Bağışı 2026", // "2026" ekleyerek metadata ile eşledik
                  "item": "https://insander.org/tr/projects/kurban-bagisi/filistin-kurban-bagisi"
                }
              ]
            })
          }}
        />

      </section>
      
      {/* --- FILISTIN SÜREÇ KARTLARI (3'LÜ GRID) --- */}
      <section id="bagis-sureci" className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          
          {/* Bölüm Başlığı */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Filistin’de Kurban İbadeti <br />
              <span className="text-[#0b5331]">Adım Adım Şeffaf Süreç</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Filistin ve Gazze'deki kardeşlerimize ulaştıracağınız her kurban, bölgedeki uzman ekiplerimiz tarafından İslami usullere uygun olarak yönetilir.
            </p>
          </div>

          {/* GRID YAPISI */}
          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            
            {/* 1. KART: SEÇİM */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurbanlıklar-filistin.webp"
                  alt="Filistin kurbanlık seçimi ve islami usullere uygun kurban hazırlığı"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 1: Hazırlık
                </div>
              </Link>
              <div className="p-6">
                <Link href="#bagis-formu">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                    Kurbanlıkların Seçimi
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-6">
                  Gazze ve Filistin bölgelerinde kurban vasıflarına en uygun, sağlıklı hayvanlar titizlikle belirlenir ve kesim gününe kadar koruma altına alınır.
                </p>
                <Link
                  href="#bagis-formu"
                  className="inline-block w-full text-center py-3 rounded-lg border border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition"
                >
                  Vekaletini Ver →
                </Link>
              </div>
            </div>

            {/* 2. KART: KESİM */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurban-kesim-sonrası-filistin.webp"
                  alt="Gazze kurban kesimi video kayıt ve SMS bilgilendirme süreci"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 2: Kesim
                </div>
              </Link>
              <div className="p-6">
                <Link href="#bagis-formu">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                    İslami Usullerle Kesim
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-6">
                  Kurbanlarınız bayramın ilk gününden itibaren isminiz okunarak vekalet yoluyla kesilir. Kesim anı video kaydıyla tarafınıza raporlanır.
                </p>
                <Link
                  href="#bagis-formu"
                  className="inline-block w-full text-center py-3 rounded-lg bg-[#e31e24] text-white font-bold hover:bg-[#b71c1c] transition"
                >
                  Bağışını Tamamla
                </Link>
              </div>
            </div>

            {/* 3. KART: DAĞITIM */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurban-yardim-tiri-filistin.webp"
                  alt="Gazze kurban yardımı tırları ve ihtiyaç sahiplerine et dağıtımı"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 3: Dağıtım
                </div>
              </Link>
              <div className="p-6">
                <Link href="#bagis-formu">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                    İhtiyaç Sahiplerine Teslim
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-6">
                  Hazırlanan kurban payları, yardım tırlarımızla Gazze’deki çadır kentlerde ve mahallelerdeki savaş mağduru ailelere bizzat teslim edilir.
                </p>
                <Link
                  href="#bagis-formu"
                  className="inline-block w-full text-center py-3 rounded-lg border border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition"
                >
                  Hemen Destek Ol →
                </Link>
              </div>
            </div>

          </div>

          {/* Alt Bilgi & Extra Link */}
          <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Filistin genel kurban hisse bedeli için bağış sayfamızı ziyaret edin.</p>
              <Link 
                  href="#bagis-formu"
                  className="text-[#e31e24] font-black text-lg hover:underline underline-offset-8"
              >
                  Tüm Kurban Bağışı Seçeneklerini Gör
              </Link>
          </div>
        </div>
      </section>
      <section id="bagis-formu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
            <div className="sticky top-24">
              <DonationPaymentSection
                categories={["Filistin", "Gazze", "Vekalet"]}
                paymentMethods={[]}
                quickSelectAmounts={[135000]}
                donationTitle="Filistin Kurban Bağışı"
                href="/tr/pay/qurbani"
                donationDetailsImage="/assets/images-used/projects/filistin.webp"
                donationDescription="Gazze ve Filistin bölgesi kurban bağışı."
                initialAmount={135000}
              />
            </div>
        </div>
      </div>
    </section>
      
        {/* --- ZENGİN SEO İÇERİK: FİLİSTİN KURBAN BAĞIŞI DETAYLARI --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* SOL KOLON: DERİNLEMESİNE SEO METİNLERİ */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                2026 Filistin ve Gazze <br />
                <span className="text-[#0b5331]">Vekaletle Kurban Organizasyonu</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-8 max-w-none">
                <p>
                  <strong>Filistin kurban bağışı</strong>, bölgedeki insani krizin derinleştiği bu dönemde sadece bir ibadet değil, aynı zamanda Gazze halkı için hayati bir destek anlamına gelmektedir. İnsan Derneği olarak, 2026 yılı kurban döneminde <strong>vekaletle kurban kesimi</strong> süreçlerimizi, bölgedeki lojistik ağımızı güçlendirerek en üst seviyeye çıkardık. 
                </p>

                <h3 className="text-2xl font-bold text-gray-800">Gazze’de Kurban Kesimi ve Şeffaflık Standartlarımız</h3>
                <p>
                  Vekalet yoluyla bizlere emanet ettiğiniz kurbanlar, <strong>İslami usullere tam riayet edilerek</strong>, veteriner kontrolünden geçmiş sağlıklı hayvanlar arasından seçilir. Filistin kurban hisse bedelleri belirlenirken, bölgedeki yerel üreticileri desteklemek ve etin en taze haliyle savaş mağduru ailelere ulaşmasını sağlamak temel önceliğimizdir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-[#f8f9fa] p-8 rounded-2xl border-l-4 border-[#e31e24]">
                    <h4 className="font-bold text-gray-900 mb-2 text-base">Video Bildirim Sistemi</h4>
                    <p className="text-l leading-relaxed">Kesim anında isminiz bizzat okunur ve bu anlar kayıt altına alınarak bayram süresince telefonunuza video mesaj olarak iletilir.</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-8 rounded-2xl border-l-4 border-[#0b5331]">
                    <h4 className="font-bold text-gray-900 mb-2 text-base">Güvenli Lojistik Ağı</h4>
                    <p className="text-l leading-relaxed">Kesilen kurban etleri,  paketleme sonrası tırlarla Gazze'nin en ücra köşelerindeki çadır kentlere ulaştırılır.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800">Filistin Kurban Hisse Bedeli 2026</h3>
                <p>
                  <strong>Filistin kurban fiyatları</strong>, bölgedeki ambargo ve lojistik zorluklar göz önüne alınarak, her bağışçımızın bu hayra ortak olabileceği makul seviyelerde tutulmaktadır. Küçükbaş kurban bağışı veya büyükbaş hisse seçenekleriyle, 2026 Kurban Bayramı'nda Filistinli kardeşlerinizin sofrasında siz de yerinizi alabilirsiniz. Yapacağınız bağışlar, <strong>İnsan Derneği</strong> güvencesiyle ilk elden teslim edilir.
                </p>
              </div>
            </div>

            {/* SAĞ KOLON: HIZLI BİLGİ VE CTA PANELİ (Görselsiz Temiz Yapı) */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Bağış Özeti</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Bölge</span>
                    <span className="font-bold text-gray-900">Filistin / Gazze</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Küçükbaş Kurban Bedeli</span>
                    <span className="font-bold text-[#0b5331]">135.000 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Kesim Zamanı</span>
                    <span className="font-bold text-gray-900">Bayram 1-3. Gün</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Raporlama</span>
                    <span className="font-bold text-gray-900">SMS & Video</span>
                  </div>
                </div>

                <Link 
                  href="#bagis-formu"
                  className="block w-full bg-[#e31e24] text-white text-center py-5 rounded-2xl font-black text-xl hover:bg-[#b71c1c] transition-all shadow-xl mb-6"
                >
                  HİSSE BAĞIŞI YAP
                </Link>

                <div className="bg-white p-4 rounded-xl border border-gray-50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-tight">
                    Bağışlarınız 256-bit SSL güvenlik sertifikası ile korunmaktadır.
                  </p>
                </div>
              </div>

              <Link 
                href="/tr/projects/kurban-bagisi"
                className="block mt-6 text-center text-gray-500 font-semibold hover:text-[#0b5331] transition-colors"
              >
                ← Tüm Kurban Bağışı Bölgeleri
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- GENİŞLETİLMİŞ SSS (FAQ) SECTION --- */}
      <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Filistin ve Gazze kurban bağışı süreci hakkında merak ettiğiniz teknik ve dini detaylar.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {[
              {
                q: "Filistin kurban bağışı vekaleti nasıl verilir?",
                a: "Online bağış sistemimiz üzerinden 'Ödemeyi Tamamla' butonuna basmadan önce vekalet kutucuğunu işaretleyerek veya 444’lü numaramızı arayıp çağrı merkezi operatörümüze 'Vekaletimi İnsan Derneği'ne veriyorum' diyerek bu işlemi tamamlayabilirsiniz. İslami şartlar gereği, isminiz bizzat zikredilerek kesim yapılır."
              },
              {
                q: "Kurban kesim videoları ne zaman ve nasıl gönderilir?",
                a: "Kurban kesimleri bayramın ilk gününden itibaren başlar. Kesim anında çekilen videolarınız, dijital ekiplerimiz tarafından işlendikten sonra bayramın 2. veya 3. günü SMS yoluyla telefonunuza iletilen özel bir link üzerinden izlenebilir."
              },
              {
                q: "Gazze içerisinde kesim yapmak güvenli mi?",
                a: "İnsan Derneği, uzun yıllardır bölgede aktif olan lojistik ağı sayesinde, Gazze içerisindeki güvenli kesim noktalarını ve soğuk hava depolarını kullanmaktadır. Durumun riskli olduğu zamanlarda dahi alternatif kanallar (dondurulmuş nakliye veya sınır noktaları) üzerinden yardım ulaştırma kapasitesine sahibiz."
              },
              {
                q: "Kurban etleri dondurulmuş olarak mı dağıtılıyor?",
                a: "Evet, özellikle Gazze'deki enerji kısıtlamaları ve dağıtım süresindeki gıda güvenliğini sağlamak amacıyla etler hijyenik olarak parçalanır, vakumlanır ve şoklanarak dağıtıma çıkarılır. Bu sayede ailelerimiz eti daha uzun süre sağlıklı şekilde tüketebilmektedir."
              },
              {
                q: "Adak, Akika veya Şükür kurbanı da bağışlayabilir miyim?",
                a: "Tabii ki. Sadece Kurban Bayramı'nda değil, yılın her günü Filistin için Adak, Akika veya Şükür kurbanı vekaleti verebilirsiniz. Bu bağışlar da aynı titizlikle kesilerek Gazze halkına ulaştırılır."
              }
            ].map((item, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0b5331]/30 transition-all">
                <summary className="flex justify-between items-center p-6 text-lg font-bold text-gray-900 cursor-pointer list-none group-open:text-[#0b5331] group-open:bg-gray-50 transition-all">
                  {item.q}
                  <span className="text-[#0b5331] text-2xl transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Filistin kurban bağışı vekaleti nasıl verilir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Online bağış sistemimiz üzerinden ödeme adımında vekalet onayı vererek veya çağrı merkezimizi arayarak vekaletinizi İnsan Derneği'ne iletebilirsiniz."
                }
              },
              {
                "@type": "Question",
                "name": "Kurban kesim videoları ne zaman gönderilir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kurban kesimleri bayramın ilk gününden itibaren yapılır ve videolar genellikle 2-3 gün içinde SMS ile paylaşılır."
                }
              },
              {
                "@type": "Question",
                "name": "Gazze’de kurban kesimi güvenli mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kurban kesimleri yerel ekipler ve güvenli lojistik noktalar üzerinden, uygun şartlarda gerçekleştirilmektedir."
                }
              },
              {
                "@type": "Question",
                "name": "Kurban etleri nasıl dağıtılıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Etler hijyenik şekilde paketlenir, soğuk zincir ile Gazze’deki ihtiyaç sahiplerine ulaştırılır."
                }
              },
              {
                "@type": "Question",
                "name": "Adak veya akika kurbanı bağışlanabilir mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, yıl boyunca adak, akika ve şükür kurbanı vekaleti verilebilir ve aynı süreçle kesilip dağıtılır."
                }
              }
            ]
          })
        }}
      />
            
    </main>
  );
};

export default KurbanDonationPage;
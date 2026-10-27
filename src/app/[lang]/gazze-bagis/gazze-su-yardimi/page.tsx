import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";

export const metadata = {
  title: "Gazze Su Yardımı | Filistin Temiz İçme Suyu Bağışı",
  description: "Gazze su yardımı kampanyamızla abluka altındaki savaş mağduru ailelere tankerlerle temiz içme suyu ulaştırıyoruz. 8.000 TL ile bir tanker su bağışlayın.",
  alternates: {
    canonical: "https://insander.org/tr/projects/gazze-su-yardimi",
  },
  openGraph: {
    title: "Gazze Su Yardımı | Bir Yudum Temiz Su Hayat Kurtarır",
    description: "Gazze'de tahrip olan su hatlarına inat, 8.000 TL ile binlerce sivilin temiz içme suyuna erişmesini sağlayabilirsiniz. Bağış yapmak için tıklayın.",
    url: "https://insander.org/tr/projects/gazze-su-yardimi",
    siteName: "İnsan Derneği",
    images: [
      {
        url: "/assets/images-used/projects/gazze-su-yardimi.jpg",
        width: 1200,
        height: 630,
        alt: "Gazze Temiz İçme Suyu Dağıtımı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazze Su Yardımı | Gazze'ye Hayat Suyu Olun",
    description: "8.000 TL ile Gazze'deki mülteci kamplarına bir tanker temiz içme suyu ulaştırın.",
    images: ["/assets/images-used/projects/gazze-su-yardimi.jpg"],
  },
};

const GazzeSuYardimiPage = () => {
  return (
    <main className="bg-white">
      {/* --- SCHEMA MARKUP --- */}
      <Script
        id="ngo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "@id": "https://insander.org/#organization",
            "name": "İnsan Derneği",
            "url": "https://insander.org",
            "logo": {
              "@type": "ImageObject",
              "url": "https://insander.org/_next/image?url=%2Fassets%2Fimages-used%2Flogo%2Flogo-ww.png&w=384&q=75"
            },
            "foundingDate": "2023",
            "description":
              "İnsan Derneği, savaş, afet ve yoksulluk koşullarında yaşayan ihtiyaç sahiplerine temiz su, gıda, sağlık ve acil yardım alanlarında kesintisiz destek sağlayan insani yardım kuruluşudur.",
            "telephone": "+90 555 190 10 43",
            "email": "info@insander.org",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kütahya",
              "addressCountry": "TR"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dünya Geneli"
            },
            "knowsAbout": [
              "Gazze su yardımı",
              "Filistin temiz içme suyu",
              "Gazze su tankeri dağıtımı",
              "Acil su temini",
              "Mülteci kampları su dağıtımı",
              "Gazze insani yardım operasyonları"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Bağış Destek Hattı",
              "telephone": "+90 555 190 10 43",
              "email": "info@insander.org",
              "availableLanguage": ["Turkish", "English", "Arabic"]
            },
            "sameAs": [
              "https://www.instagram.com/insandernegi_/",
              "https://www.youtube.com/@insanderneği"
            ]
          })
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] lg:h-[720px] overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/images-used/projects/gazze-su-yardimi.jpg"
            alt="Gazze su yardımı ve tankerle içme suyu dağıtımı"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052c1a] via-[#052c1a]/90 via-40% to-transparent"></div>
        </div>

        <div className="relative z-10 h-full container mx-auto px-6 lg:px-0">
          <div className="flex flex-col justify-center h-full max-w-[780px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#e31e24]" aria-hidden="true"></span>
              <span className="text-[#e31e24] font-bold tracking-[0.1em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase bg-white/95 px-2.5 py-1 rounded shadow-sm">
                Acil Su Seferberliği
              </span>
            </div>

            <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
              Gazze Su Yardımı <br /><br className="hidden md:block" />
              <span className="text-[#38bdf8] text-2xl md:text-5xl">Temiz Su ile Hayat Verin</span>
            </h1>

            <p className="text-gray-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[680px]">
              Tahrip edilen su altyapısı ve tuzlanan kuyular nedeniyle Gazze'de temiz suya erişim durma noktasına geldi. <strong>Gazze su yardımı</strong> projemizle mobil su tankerlerimizi çadır kentlere ulaştırıyor, <strong>8.000 TL</strong> bağışınızla binlerce sivile bir tanker dolusu temiz içme suyu dağıtıyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#bagis-formu"
                className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#b71c1c] transition"
              >
                8.000 TL Su Bağışı Yap
              </a>
              <a
                href="#sahadan-goruntuler"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0b5331] transition"
              >
                Sahayı İncele
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base backdrop-blur-sm font-semibold">
                <span className="bg-[#38bdf8] text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✔</span>
                Günlük Mobil Tanker Dağıtımı
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base backdrop-blur-sm font-semibold">
                <span className="bg-[#38bdf8] text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✔</span>
                Arıtılmış Sağlıklı İçme Suyu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BREADCRUMB --- */}
      <section className="bg-gray-50 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="py-5">
          <div className="container mx-auto px-6">
            <ol className="flex items-center flex-wrap text-base md:text-lg font-medium">
              <li><Link href="/tr" className="text-gray-500 hover:text-[#0b5331] transition-colors">Ana Sayfa</Link></li>
              <li className="mx-3 text-gray-300">/</li>
              <li><Link href="/tr/projects" className="text-gray-500 hover:text-[#0b5331] transition-colors">Projelerimiz</Link></li>
              <li className="mx-3 text-gray-300">/</li>
              <li className="text-[#0b5331] font-bold md:text-lg" aria-current="page">Gazze Su Yardımı</li>
            </ol>
          </div>
        </nav>
      </section>

      {/* --- SÜREÇ KARTLARI (3'LÜ GRID) --- */}
      <section id="bagis-sureci" className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Gazze'ye Su Sevkiyatı Süreci: <br />
              <span className="text-[#0b5331]">Temiz Su Muhtaç Ailelere Nasıl Ulaşıyor?</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Elektrik kesintileri ve bombardımanlar su şebekelerini tamamen çökertti. Bağışlarınızla devreye aldığımız su tankerleri, zorlu kontrol noktalarını aşarak doğrudan ihtiyaç noktalarına hayat taşıyor.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {/* 1. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/icme-suyu.webp"
                  alt="Gazze su tankerleri dolum ve hazırlık alanı"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 1</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Arıtma ve Tanker Dolumu</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Bölgedeki aktif arıtma kuyularından temin edilen su, sağlık ve hijyen analizlerinden geçirilerek hijyenik mobil taşıma tankerlerimize doldurulur.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg border-2 border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">Su Bağışı Yap →</Link>
              </div>
            </div>

            {/* 2. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/içme-suyu-bagisi.jpg"
                  alt="Gazze çadır kentlerine tanker sevkiyatı ve dağıtım hazırlığı"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 2</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Kamplara Lojistik Sevkiyat</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Şiddetli yakıt krizine ve zorlu yol şartlarına rağmen ekiplerimiz, su tankerlerini yüz binlerce mültecinin sığındığı çadır bölgelerine ulaştırır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg bg-[#e31e24] text-white font-bold hover:bg-[#b71c1c] transition shadow-md">8.000 TL Destek Ol</Link>
              </div>
            </div>

            {/* 3. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/gazze-su-yardimi.jpg"
                  alt="Gazze halkına bidonlarla içme suyu dağıtımı"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 3</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Halka Doğrudan Su Dağıtımı</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Saatlerce su kuyruğunda bekleyen çocuklara, kadınlara ve çadır depolarına temiz içme suyu bidonlarla eşit ve adil şekilde paylaştırılır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg border-2 border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">Hemen Bağışla →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- YAPIŞKAN (STICKY) BAĞIŞ FORMU --- */}
      <section id="bagis-formu" className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-12 xl:col-span-8 xl:col-start-3 sticky top-24">
              <div className="bg-[#fcfcfc] p-2 rounded-[2rem] shadow-xl border border-gray-100">
                <DonationPaymentSection
                  categories={["Filistin", "Gazze", "Su Yardımı", "Acil Yardım"]}
                  paymentMethods={[]}
                  quickSelectAmounts={[1000, 2000, 4000, 8000, 16000, 24000]}
                  donationTitle="Gazze Temiz İçme Suyu & Tanker Bağışı"
                  href="/tr/pay/icme-suyu"
                  donationDetailsImage="/assets/images-used/projects/gazze-su-yardimi.jpg"
                  donationDescription="Gazze'deki siviller için bir tanker dolusu temiz içme suyu sağlayarak susuzluk tehlikesini önleyin."
                  initialAmount={8000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ZENGİN SEO İÇERİK & MAKALELER --- */}
      <section className="py-24 bg-white overflow-hidden" id="sahadan-goruntuler">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* SOL KOLON */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Gazze Temiz Su Krizi: <br />
                <span className="text-[#0b5331]">Salgın Hastalıklara Karşı Hayat Kaynağı</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-8 max-w-none">
                <p>
                  Gazze Şeridi genelinde devam eden yoğun çatışmalar, altyapı şebekelerini, deniz suyu arıtma tesislerini ve su depolarını kullanılamaz hale getirdi. Şebeke suyunun %95'inden fazlasının içilemez derecede tuzlu ve kirli olduğu Gazze'de temiz suya ulaşamamak; kolera, hepatit ve çocuklarda ölümcül böbrek yetmezliği vakalarını tetikliyor. İnsan Derneği olarak düzenli <strong>Gazze su yardımı</strong> operasyonlarımızla bu trajedinin önüne geçmeye çalışıyoruz.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">Bir Tanker Su Neden Bu Kadar Önemli?</h3>
                <p>
                  Bir su tankeri, sadece bir araç dolusu su anlamına gelmez. Bir tanker; yüzlerce çadırda yaşayan binlerce mülteci çocuğun günlerce temiz yemek pişirebilmesi, içme suyu ihtiyacını karşılaması ve temel hijyenini sağlayarak salgın hastalıklardan korunması demektir. <strong>8.000 TL</strong> ile karşılanan bir tanker su, çadırlardaki onlarca aile için doğrudan hayata tutunma vesilesidir.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#38bdf8] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Mobil Tanker Ağı</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600">Altyapının çalışmadığı noktalara mobil araçlarımızla doğrudan ulaşıyor, suyu kampların kalbine kadar teslim ediyoruz.</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#0b5331] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Arıtılmış ve Analiz Edilmiş Su</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600">Dağıtılan sular kuyu tortusundan ve tuzdan arındırılmış, çocukların tüketimine uygun sağlıklı içme suyudur.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 mt-0">Su Yardımları Nerelere Ulaşıyor?</h5>
                  <p className="text-base mb-4">Gönüllü ve profesyonel lojistik kadromuz, temiz suyu öncelikli risk grubundaki alanlara taşımaktadır:</p>
                  <ul className="space-y-3 mb-0 text-gray-700 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">1</span> Han Yunus, Refah ve Deyr el-Balah'taki derme çatma çadır kampları
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">2</span> Hastane çevrelerinde ve okul bahçelerinde sığınan yerinden edilmiş siviller
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">3</span> Aşevleri ve bebek beslenme merkezlerinin günlük temiz su ihtiyacı
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-12">Bir Tanker Su Bedeli: 8.000 TL</h3>
                <p>
                  Siz de tek başınıza bir tanker su bağışlayabilir veya dilediğiniz tutarda katkı sunarak su tankerlerimizin Gazze sokaklarında dönmesine vesile olabilirsiniz. İslam inancında <em>"en faziletli sadaka su temin etmektir"</em> buyruğuna icabet etmek için şimdi bağış yapın.
                </p>
              </div>
            </div>

            {/* SAĞ KOLON: ÖZET */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Su Bağışı Kampanya Özeti</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Bölge</span>
                    <span className="font-bold text-gray-900">Filistin / Gazze</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Bir Tanker Su Bedeli</span>
                    <span className="font-bold text-[#0b5331] text-lg">8.000 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Kategori</span>
                    <span className="font-bold text-gray-900">Su & Acil Destek</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-medium">Dağıtım Şekli</span>
                    <span className="font-bold text-[#0b5331]">Mobil Su Tankeri</span>
                  </div>
                </div>

                <Link 
                  href="#bagis-formu"
                  className="block w-full bg-[#0b5331] text-white text-center py-5 rounded-2xl font-black text-xl hover:bg-[#084326] transition-all shadow-lg mb-6"
                >
                  ŞİMDİ SU BAĞIŞLA
                </Link>

                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-tight">
                    İnsan Derneği bağış altyapısı <strong>256-bit SSL sertifikası</strong> ile korunmaktadır. Şeffaf dağıtım ağı ile güvendesiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SSS (FAQ) SECTION --- */}
      <section className="py-24 bg-[#f9fdfa] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Gazze Su Yardımı Hakkında Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Acil su dağıtımı operasyonu, arıtma aşamaları ve bağış süreçleri hakkında merak edilenler.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {[
              {
                q: "Gazze'de su tankerleri dağıtımı nasıl yapılıyor?",
                a: "Bölgede çalışan arıtma kuyularından doldurulan mobil su tankerlerimiz, yakıt ve güvenlik izinleri doğrultusunda sivil halkın en yoğun olarak çadır kurduğu Refah, Han Yunus ve Deyr el-Balah bölgelerine sevk edilir. Su, ailelerin yanlarında getirdiği bidon ve bidonlara sırayla doldurulur."
              },
              {
                q: "8.000 TL'lik su bağışı ile ne kadarlık bir su sağlanır?",
                a: "8.000 TL'lik bağış bedeli, yaklaşık bir tam tanker dolusu arıtılmış temiz içme suyunun tedariki, yakıt gideri ve yüzlerce sivilin günlük içme ve temel yemek suyu ihtiyacının karşılanmasını kapsar."
              },
              {
                q: "Su bağışı zekat veya sadaka yerine geçer mi?",
                a: "Evet. Su ihtiyacı hayati bir aciliyet taşıdığından, temiz su temini zekat, fitre, sadaka ve sadaka-i cariye niyetiyle bağışlanabilir. Peygamber Efendimiz (s.a.v.) en hayırlı sadakanın su ikram etmek olduğunu bildirmiştir."
              },
              {
                q: "Dağıtılan sular içilebilir nitelikte mi?",
                a: "Evet. Gazze'deki genel deniz suyu karışmış tuzlu şebeke suyunun aksine, tankerlerimizle ulaştırdığımız sular filtreleme ve arıtma işlemlerinden geçmiş, çocukların içimine uygun temiz tatlı sulardır."
              },
              {
                q: "Bağış yaptıktan sonra dağıtım raporlanıyor mu?",
                a: "Evet. İnsan Derneği şeffaflık politikası uyarınca sahadaki tanker dolum ve çadır kent dağıtım görüntüleri belirli aralıklarla web sitemiz ve sosyal medya hesaplarımız üzerinden bağışçılarımızla paylaşılmaktadır."
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

      {/* --- FAQ SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Gazze'de su tankerleri dağıtımı nasıl yapılıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bölgede çalışan arıtma kuyularından doldurulan mobil su tankerlerimiz, yakıt ve güvenlik izinleri doğrultusunda sivil halkın en yoğun olarak çadır kurduğu Refah, Han Yunus ve Deyr el-Balah bölgelerine sevk edilir. Su, ailelerin yanlarında getirdiği bidon ve bidonlara sırayla doldurulur."
                }
              },
              {
                "@type": "Question",
                "name": "8.000 TL'lik su bağışı ile ne kadarlık bir su sağlanır?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "8.000 TL'lik bağış bedeli, yaklaşık bir tam tanker dolusu arıtılmış temiz içme suyunun tedariki, yakıt gideri ve yüzlerce sivilin günlük içme ve temel yemek suyu ihtiyacının karşılanmasını kapsar."
                }
              },
              {
                "@type": "Question",
                "name": "Su bağışı zekat veya sadaka yerine geçer mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Su ihtiyacı hayati bir aciliyet taşıdığından, temiz su temini zekat, fitre, sadaka ve sadaka-i cariye niyetiyle bağışlanabilir."
                }
              },
              {
                "@type": "Question",
                "name": "Dağıtılan sular içilebilir nitelikte mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Gazze'deki genel deniz suyu karışmış tuzlu şebeke suyunun aksine, tankerlerimizle ulaştırdığımız sular filtreleme ve arıtma işlemlerinden geçmiş, çocukların içimine uygun temiz tatlı sulardır."
                }
              },
              {
                "@type": "Question",
                "name": "Bağış yaptıktan sonra dağıtım raporlanıyor mu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. İnsan Derneği şeffaflık politikası uyarınca sahadaki tanker dolum ve çadır kent dağıtım görüntüleri belirli aralıklarla web sitemiz ve sosyal medya hesaplarımız üzerinden bağışçılarımızla paylaşılmaktadır."
                }
              }
            ]
          })
        }}
      />

      {/* WHATSAPP BUTONU */}
      <a
        href="https://wa.me/905551901043?text=Merhaba,%20Gazze%20Su%20Yardımı%20hakkında%20bilgi%20almak%20istiyorum." 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp üzerinden bize ulaşın"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
};

export default GazzeSuYardimiPage;
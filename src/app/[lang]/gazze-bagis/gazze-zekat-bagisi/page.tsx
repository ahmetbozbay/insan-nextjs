import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";

export const metadata = {
  title: "Gazze Zekat Bağışı | Gazzeye Zekat Verilir Mi?",
  description: "Gazzeye zekat verilir mi sorusunun en güzel cevabı, Filistin'de kurduğumuz aşevleridir. Gazze zekat bağışı ile ihtiyaç sahiplerine günlük sıcak yemek ve gıda ulaştırıyoruz.",
  alternates: {
    canonical: "https://insander.org/tr/projects/zekat/gazze-zekat-bagisi",
  },
  openGraph: {
    title: "Gazze Zekat Bağışı | Filistin Zekat ve Gıda Desteği",
    description: "Zekatlarınız Gazze'de sıcak yemeğe dönüşüyor. 130 TL'lik sıcak yemek bedeli veya 1.000 TL'lik zekat dağıtımı ile savaş mağdurlarına destek olun.",
    url: "https://insander.org/tr/projects/zekat/gazze-zekat-bagisi",
    siteName: "İnsan Derneği",
    images: [
      {
        url: "/assets/images-used/projects/gazze-yemek-yardimi-filistin-banner.webp",
        width: 1200,
        height: 630,
        alt: "Gazze Zekat Bağışı ve Sıcak Yemek Dağıtımı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazze Zekat Bağışı | Filistin Zekat Dağıtımı",
    description: "Zekatlarınızla Gazze'de bir kap sıcak yemek bağışlayın.",
    images: ["/assets/images-used/projects/gazze-zekat-bagisi-filistin-banner.webp"],
  },
};

const GazzeZekatBagisiPage = () => {
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
              "İnsan Derneği, Gazze zekat bağışı ve Filistin zekat dağıtımı organizasyonlarıyla, savaş mağdurlarına sıcak yemek ve gıda desteği ulaştıran uluslararası bir insani yardım kuruluşudur.",
            "telephone": "+90 555 190 10 43",
            "email": "info@insander.org",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kütahya",
              "addressCountry": "TR"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Filistin, Gazze"
            },
            "knowsAbout": [
              "Gazze zekat bağışı",
              "Filistin zekat",
              "Gazzeye zekat verilir mi",
              "Zekat ile sıcak yemek bağışı",
              "Zekat dağıtımı",
              "Gıda kolisi zekat"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Zekat ve Bağış Destek Hattı",
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
              src="/assets/images-used/projects/gazze-yemek-yardimi-filistin-banner.webp"
              alt="Gazze zekat bağışı ile hazırlanan sıcak yemekler"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b5331] via-[#0b5331] via-5% to-transparent"></div>
          </div>

          <div className="relative z-10 h-full container mx-auto px-6 lg:px-0">
            <div className="flex flex-col justify-center h-full max-w-[780px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#e31e24]" aria-hidden="true"></span>
                <span className="text-[#e31e24] font-bold tracking-[0.1em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase bg-white/90 px-2 py-1 rounded shadow-sm">
                  Dini Vecibeler ve İbadet Bağışları
                </span>
              </div>

              {/* H1 ODAK ANAHTAR KELİME */}
              <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                  Gazze Zekat Bağışı <br /><br className="hidden md:block" />
                  <span className="text-[#e31e24] text-2xl md:text-5xl">Zekatlarınız Kardeşlerimize Gıda Oluyor</span>
              </h1>
          
              <p className="text-gray-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[680px]">
                <strong>Filistin zekat</strong> yardımlarınız, bölgedeki aşevlerimizde savaş mağduru aileler için can suyu oluyor. Zekat bağışlarınız, doğrudan gıda desteği ve <strong>130 TL bedelindeki sıcak yemek</strong> projelerimizle ihtiyaç sahiplerine ulaştırılmaktadır.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#bagis-formu"
                  className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#b71c1c] transition"
                >
                  Zekatını Bağışla
                </a>
                <a
                  href="#sahadan-goruntuler"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0b5331] transition"
                >
                  Zekat Dağıtım Videolarını İzle
                </a>
              </div>

              {/* GÜVEN SİNYALLERİ VURGUSU */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base backdrop-blur-sm font-semibold">
                  <span className="bg-[#e31e24] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✔</span>
                  Günlük 10.000 Kap Yemek (Zekat Kapsamında)
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base backdrop-blur-sm font-semibold">
                  <span className="bg-[#e31e24] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✔</span>
                  Şeffaf Dağıtım Ağı
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
              <li className="text-[#0b5331] font-bold md:text-lg" aria-current="page">Gazze Zekat Bağışı</li>
            </ol>
          </div>
        </nav>
      </section>
      
      {/* --- SÜREÇ KARTLARI (3'LÜ GRID) --- */}
      <section id="bagis-sureci" className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            {/* H2 SEO Çeşitliliği */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Gazzeye Zekat Verilir Mi? <br />
              <span className="text-[#0b5331]">Zekatlarınız Gıdaya Nasıl Dönüşüyor?</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              <strong>"Gazzeye zekat verilir mi?"</strong> sorusunun fıkhi olarak en öncelikli cevaplarından biri, oradaki açlık krizini önlemektir. Bize emanet ettiğiniz zekatlarınız, şeffaf dağıtım ağı ile gıda tedariki ve sıcak yemek olarak Gazze halkına ulaşır.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {/* 1. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/gazze-yemek-yardimi-tedarik-hazirlik.webp" 
                  alt="Zekat yardımları ile Gazze için taze malzeme ve et tedarik süreci"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 1</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Zekat ile Gıda Tedariki</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Zekat dağıtımı fonumuzda toplanan bağışlar, şoklanmış gıda koridoru üzerinden temel besin maddelerine dönüştürülür ve Gazze'deki aşevlerimize ulaştırılır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg border-2 border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">Zekat Bağışı Yap →</Link>
              </div>
            </div>

            {/* 2. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/gazze-yemek-yardimi-gunluk-pisirim.webp"
                  alt="Filistin zekat fonuyla Gazze aşevlerinde günlük sıcak yemek pişirimi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 2</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Aşevinde Zekat Pişirimi</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Zekatlarınız, Gazze aşevi çalışmalarımız kapsamında besin değeri yüksek, etli ve doyurucu taze sıcak yemeklere dönüştürülerek dev kazanlarda pişirilir.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg bg-[#e31e24] text-white font-bold hover:bg-[#b71c1c] transition shadow-md">1.000 TL Zekat Ver</Link>
              </div>
            </div>

            {/* 3. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/filistin-yemek-yardimi-dagitim-teslim.webp"
                  alt="Gazze zekat bağışı ile çadır kentlerde sıcak yemek dağıtımı"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 3</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Zekatların Teslim Edilmesi</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Zekatlarınızın tam karşılığı olan bu sıcak yemekler, dağıtım araçlarımızla çadır kentlerdeki hak sahiplerine (fakirler, yoksullar) doğrudan teslim edilir.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg border-2 border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">Emanetini Gönder →</Link>
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
                  categories={["Filistin", "Gazze", "Zekat Dağıtımı"]}
                  paymentMethods={[]}
                  quickSelectAmounts={[1000, 2000, 5000, 25000, 50000, 100000]}
                  donationTitle="Gazze Zekat ve Yemek Bağışı"
                  href="/tr/pay/zekat-bagisi"
                  donationDetailsImage="/assets/images-used/projects/gazze-yemek-yardimi-tedarik-hazirlik.webp"
                  donationDescription="Zekat dağıtımı (1.000 TL) veya Sıcak Yemek (130 TL) bedeliyle Gazze'ye gıda desteği sağlayın."
                  initialAmount={1000}
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
            
            {/* SOL KOLON (SEO ZENGİNLEŞTİRİLMİŞ METİNLER) */}
            <div className="w-full lg:w-2/3">
              {/* H2 SEO Başlığı */}
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Filistin Zekat Bağışları: <br />
                <span className="text-[#0b5331]">Emanetleriniz Gıda Desteğine Dönüşüyor</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-8 max-w-none">
                <p>
                  Abluka altındaki Gazze'de yaşanan insani kriz, temel besin maddelerine ve temiz suya erişimi durma noktasına getirmiştir. İnsan Derneği olarak, <strong>Gazze zekat bağışı</strong> projelerimiz kapsamında bağışladığınız tüm zekat, fitre ve fidyeleri doğrudan gıda yardımı ve sıcak yemek üretimi için kullanıyoruz. Biliyoruz ki, zekatın en önemli sarf yerlerinden biri ihtiyaç sahiplerinin doyurulmasıdır.
                </p>

                {/* H3 Alt Başlık */}
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">Gazzeye Zekat Verilir Mi?</h3>
                <p>
                  <strong>"Gazzeye zekat verilir mi?"</strong> sorusu, bağışçılarımızın en çok merak ettiği konuların başında gelmektedir. Fıkhi olarak zekatın verileceği kimseler Tevbe Suresi 60. ayette belirtilmiştir. Gazze'de evlerini kaybeden, geliri olmayan ve açlık tehlikesiyle karşı karşıya kalan savaş mağdurları "fakirler ve miskinler" sınıfına girdiği için, zekatlarınızı Gazze'ye göndermeniz hem caizdir hem de şu anki durumda büyük bir önceliğe sahiptir.
                </p>

                {/* GÜÇLÜ VURGULAR - H4 */}
                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#e31e24] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Günlük 10.000 Kap Yemek (Zekat Dağıtımı)</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600"><strong>Filistin zekat</strong> fonumuz sayesinde sahadaki aşevlerimiz her gün 10.000 kap taze yemeği muhtaçlara ulaştırmaktadır. Zekatlarınız binlerce masumun doymasını sağlar.</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#0b5331] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Şeffaf Dağıtım Ağı</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600">İbadet hassasiyetiyle bize emanet ettiğiniz zekatlarınız, derneğimizin şeffaf dağıtım ağı prensibiyle kuruşu kuruşuna, video raporlamalarıyla yerine teslim edilir.</p>
                  </div>
                </div>

                {/* H5 Alt Kırılım Listesi */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 mt-0">Zekat Yardımlarınız Kimlere Ulaşıyor?</h5>
                  <p className="text-base mb-4">Gıda ve yemek olarak hazırlanan zekat bağışlarınızda en dezavantajlı gruplar hedeflenir:</p>
                  <ul className="space-y-3 mb-0 text-gray-700 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">1</span> Sığınaklarda ve derme çatma çadır kentlerde barınan kimsesiz aileler
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">2</span> Yetersiz beslenme tehlikesi altındaki çocuklar ve yetim bebekler
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">3</span> Kendi gıdasını temin edemeyecek durumdaki yaşlılar, hastalar ve savaş yaralıları
                    </li>
                  </ul>
                </div>

                {/* YOUTUBE İFRAME (3'LÜ KART YAPISI) */}
                <div className="my-14">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sahadan Yansıyanlar: Zekatlarınız Nasıl Ulaşıyor?</h3>
                  <p className="text-base mb-8">Gazze'deki ekiplerimiz, ibadet hassasiyeti taşıyan <strong>gazze zekat bağışı</strong> operasyonlarımızı aralıksız sürdürüyor. Tırlarla giren gıda malzemeleri ve sıcak yemek dağıtımlarını güncel videolarımızdan izleyebilirsiniz.</p>
                  
                  <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hjjmILgQ8Jg?si=MN2kkxgRMlxy-xBG" title="Gazze Zekat Dağıtımı 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q2AA-leztvw?si=26wm0nWUUN-pK_w_" title="Gazze Zekat Dağıtımı 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/51Jc6H0TCjs?si=fMuLzpUZ4tQoYEmX" title="Gazze Zekat Dağıtımı 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- INSTAGRAM REELS (3'LÜ KART YAPISI) --- */}
                <div className="my-16 border-t border-gray-100 pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Instagram'dan Canlı Zekat Dağıtımları</h3>
                  <p className="text-base mb-8">Zekatlarınızın çadır kentlerde sıcak yemek ve gıda olarak dağıtılma anlarını, sosyal medya hesaplarımızdan şeffaf bir şekilde takip edebilirsiniz.</p>
                  
                  <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
                  <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DV8qreFjOKp/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/p/DV8qreFjOKp/" target="_blank" rel="noopener noreferrer">Zekat Dağıtımı Paylaşımı</a>
                      </blockquote>
                    </div>
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DZU9ma3Mo0w/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/reel/DZU9ma3Mo0w/" target="_blank" rel="noopener noreferrer">Zekat Dağıtımı Paylaşımı 2</a>
                      </blockquote>
                    </div>
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DYwmx3usd9T/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/reel/DYwmx3usd9T/" target="_blank" rel="noopener noreferrer">Zekat Dağıtımı Paylaşımı 3</a>
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* H3 Kapanış Özeti */}
                <h3 className="text-2xl font-bold text-gray-800 mt-12">Zekat Dağıtımı (1.000 TL) ve Yemek Bedeli (130 TL)</h3>
                <p>
                  Kurumumuzda genel <strong>Zekat Dağıtımı</strong> bedeli 1.000 TL, zekat niyetine verebileceğiniz tek bir <strong>Sıcak Yemek</strong> bedeli ise 130 TL olarak belirlenmiştir. Bağış sayfamızdaki formu kullanarak niyetinize göre miktar seçimi yapabilir ve zekat ibadetinizi İnsan Derneği güvencesiyle yerine getirebilirsiniz.
                </p>
              </div>
            </div>

            {/* SAĞ KOLON: ÖZET */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Zekat Kampanyası Özeti</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Bölge</span>
                    <span className="font-bold text-gray-900">Filistin / Gazze</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Zekat Dağıtım Payı</span>
                    <span className="font-bold text-[#e31e24] text-lg">1.000 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Sıcak Yemek Bedeli</span>
                    <span className="font-bold text-[#e31e24] text-lg">130 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Kategori</span>
                    <span className="font-bold text-gray-900">İbadet Bağışları</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-medium">Gıda Dönüşümü</span>
                    <span className="font-bold text-[#0b5331]">Günlük 10.000+ Kap</span>
                  </div>
                </div>

                <Link 
                  href="#bagis-formu"
                  className="block w-full bg-[#e31e24] text-white text-center py-5 rounded-2xl font-black text-xl hover:bg-[#b71c1c] transition-all shadow-lg mb-6"
                >
                  ZEKAT BAĞIŞI YAP
                </Link>

                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-tight">
                    İnsan Derneği zekat altyapısı <strong>256-bit SSL sertifikası</strong> ile korunmaktadır. Şeffaf dağıtım ağı ile emanetleriniz güvendedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SSS (FAQ) SECTION - ZEKAT ODAKLI --- */}
      <section className="py-24 bg-[#f9fdfa] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Gazze Zekat Bağışı Hakkında Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Gazzeye zekat verilir mi, zekat fonları nasıl gıdaya dönüşür gibi dini vecibelerinizle ilgili şeffaf bilgiler.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {[
              {
                q: "Gazzeye zekat verilir mi?",
                a: "Evet, Gazzeye zekat verilir. Kuran-ı Kerim'de belirtilen zekat verilecek 8 sınıftan biri olan 'fakirler ve miskinler' sınıfına giren, savaş sebebiyle evsiz ve gelirsiz kalan Filistin halkı, zekat bağışları için şu an en öncelikli kesimlerden biridir."
              },
              {
                q: "Filistin zekat bağışları gıda olarak mı dağıtılıyor?",
                a: "Evet, Gazze'deki piyasa koşulları ve nakit kullanımının zorluğu sebebiyle bize emanet ettiğiniz zekatlarınız, şeffaf dağıtım ağı ile gıda malzemesi alınarak veya aşevlerinde pişirilip sıcak yemek olarak doğrudan ihtiyaç sahiplerine dağıtılmaktadır."
              },
              {
                q: "Gazze zekat bağışı nasıl hesaplanır ve ulaştırılır?",
                a: "Zekatınızı kurumumuz üzerinden genel zekat fonuna (1.000 TL) veya bir kap sıcak yemeğe (130 TL) bedel olacak şekilde online ödeme adımıyla iletebilirsiniz. Toplanan bağışlar aşevlerimizin günlük 10.000 kap yemek üretim maliyetini karşılamada kullanılır."
              },
              {
                q: "Zekat bağışımın yerine ulaştığını nasıl öğrenebilirim?",
                a: "İnsan Derneği, 'Şeffaf ve İzlenebilir Bağış Altyapısı' ile çalışmaktadır. Zekatlarınızın gıdaya dönüşüp Gazze'de çadır kentlerdeki ailelere dağıtıldığı anları web sitemizden ve sosyal medya hesaplarımızdaki video raporlamalardan takip edebilirsiniz."
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

      {/* --- FAQ SCHEMA (ZEKAT) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Gazzeye zekat verilir mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, Gazzeye zekat verilir. Kuran-ı Kerim'de belirtilen zekat verilecek 8 sınıftan biri olan 'fakirler ve miskinler' sınıfına giren, savaş sebebiyle evsiz ve gelirsiz kalan Filistin halkı, zekat bağışları için şu an en öncelikli kesimlerden biridir."
                }
              },
              {
                "@type": "Question",
                "name": "Filistin zekat bağışları gıda olarak mı dağıtılıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, Gazze'deki piyasa koşulları ve nakit kullanımının zorluğu sebebiyle bize emanet ettiğiniz zekatlarınız, şeffaf dağıtım ağı ile gıda malzemesi alınarak veya aşevlerinde pişirilip sıcak yemek olarak doğrudan ihtiyaç sahiplerine dağıtılmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Gazze zekat bağışı nasıl hesaplanır ve ulaştırılır?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zekatınızı kurumumuz üzerinden genel zekat fonuna (1.000 TL) veya bir kap sıcak yemeğe (130 TL) bedel olacak şekilde online ödeme adımıyla iletebilirsiniz. Toplanan bağışlar aşevlerimizin günlük 10.000 kap yemek üretim maliyetini karşılamada kullanılır."
                }
              },
              {
                "@type": "Question",
                "name": "Zekat bağışımın yerine ulaştığını nasıl öğrenebilirim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "İnsan Derneği, 'Şeffaf ve İzlenebilir Bağış Altyapısı' ile çalışmaktadır. Zekatlarınızın gıdaya dönüşüp Gazze'de çadır kentlerdeki ailelere dağıtıldığı anları web sitemizden ve sosyal medya hesaplarımızdaki video raporlamalardan takip edebilirsiniz."
                }
              }
            ]
          })
        }}
      />

      <a
        href="https://wa.me/905551901043?text=Merhaba,%20Gazze%20Zekat%20Bağışı%20hakkında%20bilgi%20almak%20istiyorum." 
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

export default GazzeZekatBagisiPage;
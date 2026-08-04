import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";

export const metadata = {
  title: "Gazze Yemek Yardımı | Filistin Sıcak Yemek Bağışı",
  description: "Gazze yemek yardımı kampanyamızla Filistin'deki savaş mağduru ailelere günlük taze yemek ulaştırıyoruz. 130 TL ile bir kap sıcak yemek bağışlayın.",
  alternates: {
    canonical: "https://insander.org/tr/projects/gazze-yemek-yardimi",
  },
  openGraph: {
    title: "Gazze Yemek Yardımı | Açlığa Karşı Umut Olun",
    description: "Sadece 130 TL ile bir savaş mağdurunun günlük sıcak yemek ihtiyacını karşılayabilirsiniz. Bağış yapmak için tıklayın.",
    url: "https://insander.org/tr/projects/gazze-yemek-yardimi",
    siteName: "İnsan Derneği",
    images: [
      {
        url: "/assets/images-used/projects/gazze-yemek-yardimi-filistin-banner.webp",
        width: 1200,
        height: 630,
        alt: "Gazze Sıcak Yemek Dağıtımı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazze Yemek Yardımı | Açlığa Karşı Umut Olun",
    description: "130 TL ile Gazze'de bir kap sıcak yemek bağışlayın.",
    images: ["/assets/images-used/projects/gazze-yemek-yardimi-filistin-banner.webp"],
  },
};

const GazzeYemekYardimiPage = () => {
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
              "İnsan Derneği, savaş, afet ve yoksulluk gibi zor şartlarda yaşayan ihtiyaç sahiplerine gıda, sağlık, eğitim ve acil yardım alanlarında destek sağlayan uluslararası insani yardım kuruluşudur.",
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
              "Gazze yardım çalışmaları",
              "Filistin yemek yardımı",
              "Sıcak yemek bağışı",
              "Gazze sıcak yemek dağıtımı",
              "Acil yemek bağışı süreci",
              "Gıda yardımı",
              "Acil insani yardım"
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
              src="/assets/images-used/projects/gazze-yemek-yardimi-filistin-banner.webp"
              alt="Gazze yemek yardımı ve aşevi çalışmaları"
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
                  Acil Yardım Kampanyası
                </span>
              </div>

              {/* H1 ODAK ANAHTAR KELİME */}
              <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                  Gazze Yemek Yardımı <br /><br className="hidden md:block" />
                  <span className="text-[#e31e24] text-2xl md:text-5xl">Açlığa Karşı Umut Olun</span>
              </h1>
          
              <p className="text-gray-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[680px]">
                <strong>Gazze yemek yardımı</strong> ve <strong>Filistin yemek yardımı</strong> kampanyamızla, bölgedeki aşevlerimiz her gün binlerce savaş mağduru aileye taze ve sıcak yemek ulaştırıyor. Sadece <strong>130 TL</strong> ile bir kardeşinizin günlük sıcak yemek ihtiyacını karşılayabilirsiniz.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#bagis-formu"
                  className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#b71c1c] transition"
                >
                  130 TL Bağış Yap
                </a>
                <a
                  href="#sahadan-goruntuler"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0b5331] transition"
                >
                  Videoyu İzle
                </a>
              </div>

              {/* GÜVEN SİNYALLERİ VURGUSU */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base backdrop-blur-sm font-semibold">
                  <span className="bg-[#e31e24] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✔</span>
                  Günlük 10.000 Kap Yemek
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
              <li className="text-[#0b5331] font-bold md:text-lg" aria-current="page">Gazze Yemek Yardımı</li>
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
              Acil Yemek Bağışı Süreci: <br />
              <span className="text-[#0b5331]">Gazze'ye Sıcak Yemek Nasıl Ulaşıyor?</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Şeffaf, izlenebilir ve uluslararası insani yardım standartlarına uygun operasyon gücümüzle savaş mağduru kardeşlerimizin yanındayız. Filistin'de gerçekleştirdiğimiz sıcak yemek bağışı dağıtım adımlarını inceleyebilirsiniz.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {/* 1. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/gazze-yemek-yardimi-tedarik-hazirlik.webp" 
                  alt="Gazze sıcak yemek yardımı için taze malzeme ve et tedarik süreci"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 1</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Tedarik ve Hazırlık</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Şoklanmış gıda koridoru ile bölgeye ulaştırılan temel besin malzemeleri, Gazze'deki yerel aşevlerimizde profesyonel ekiplerimizce hijyenik koşullarda hazırlanır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg border-2 border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">Bağış Yap →</Link>
              </div>
            </div>

            {/* 2. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/gazze-yemek-yardimi-gunluk-pisirim.webp"
                  alt="Gazze aşevlerinde dev kazanlarda günlük sıcak yemek pişirimi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 2</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Aşevinde Günlük Pişirim</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Gazze aşevi çalışmalarımız kapsamında, besin değeri yüksek, doyurucu ve sağlıklı taze yemekler dev kazanlarda günlük olarak binlerce porsiyon pişirilir.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3.5 rounded-lg bg-[#e31e24] text-white font-bold hover:bg-[#b71c1c] transition shadow-md">130 TL Destek Ol</Link>
              </div>
            </div>

            {/* 3. KART */}
            <div className="group w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src="/assets/images-used/projects/filistin-yemek-yardimi-dagitim-teslim.webp"
                  alt="Filistin yemek yardımı kapsamında çadır kentlerde sıcak yemek dağıtımı"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10 shadow">Adım 3</div>
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0b5331] transition-colors">Gazze Sıcak Yemek Dağıtımı</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  Hazırlanan sıcak yemekler, dağıtım araçlarımızla çadır kentlerdeki, okullardaki ve sığınaklardaki ihtiyaç sahibi ailelere kapı kapı doğrudan ulaştırılır.
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
                  categories={["Filistin", "Gazze", "Acil Yardım"]}
                  paymentMethods={[]}
                  quickSelectAmounts={[130, 260, 650, 1300, 2600, 15000]}
                  donationTitle="Gazze Sıcak Yemek Bağışı"
                  href="/tr/pay/sicak-yemek"
                  donationDetailsImage="/assets/images-used/projects/gazze-yemek-yardimi-tedarik-hazirlik.webp"
                  donationDescription="Gazze'deki kardeşlerimize bir kap sıcak yemek ulaştırın."
                  initialAmount={130}
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
                Gazze Sıcak Yemek Dağıtımı: <br />
                <span className="text-[#0b5331]">Açlığa Karşı Birlikte Umut Olalım</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-8 max-w-none">
                <p>
                  Savaşın, yıkımın ve uzun süreli ablukanın gölgesinde hayatta kalma mücadelesi veren Gazze halkı, temiz gıdaya, suya ve ilaca ulaşmakta tarihin en büyük zorluklarından birini çekiyor. İnsan Derneği olarak yürüttüğümüz <strong>Gazze yemek yardımı</strong> kampanyası kapsamında, bölgede aktif olarak faaliyet gösteren aşevlerimiz aracılığıyla her gün binlerce kişiye ulaşmaktayız. Sadece bir kap sıcak yemek, enkaz altında kalmış umutları yeniden yeşertmek için hayati bir adımdır.
                </p>

                {/* H3 Alt Başlık */}
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">Filistin Yemek Yardımı Neden Hayati Önem Taşıyor?</h3>
                <p>
                  Bölgede gıda tedarik zincirlerinin kopması ve elektrik kesintileri nedeniyle ailelerin kendi imkanlarıyla evlerinde veya çadırlarında yemek pişirmesi neredeyse imkansız hale gelmiştir. <strong>Filistin yemek yardımı</strong> çalışmalarımız, tam da bu kriz anında devreye girerek insanların günlük kalori ve besin ihtiyaçlarını karşılamayı hedefler. Hazırlanan taze öğünler, bağışıklık sistemi zayıflamış bebeklerin, yaşlıların ve yaralıların hayata tutunmasını sağlamaktadır.
                </p>

                {/* GÜÇLÜ VURGULAR - H4 */}
                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#e31e24] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Günlük 10.000 Kap Yemek Hedefi</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600">Sizlerin destekleriyle kapasitesini her geçen gün artıran <strong>Gazze aşevi</strong> ağımız, günlük minimum 10.000 kap yemek üretimi ile sahadaki açlık krizine karşı çok güçlü bir set çekmektedir.</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-6 rounded-2xl border-l-4 border-[#0b5331] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Şeffaf Dağıtım Ağı</h4>
                    <p className="text-base leading-relaxed m-0 text-gray-600">Acil yemek bağışı süreci, derneğimizin şeffaflık ilkelerine uygun olarak ilerler. Uluslararası insani yardım standartlarına riayet ederek yardımlarınızı ilk elden muhtaçlara ulaştırırız.</p>
                  </div>
                </div>

                {/* H5 Alt Kırılım Listesi */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 mt-0">Yardımlarınız Kimlere Ulaşıyor?</h5>
                  <p className="text-base mb-4">Gerçekleştirdiğimiz sıcak yemek bağışı dağıtımlarında her zaman en savunmasız gruplara öncelik veriyoruz:</p>
                  <ul className="space-y-3 mb-0 text-gray-700 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">1</span> Sığınaklarda, okullarda ve derme çatma çadır kentlerde barınan aileler
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">2</span> Yetersiz beslenme (malnütrisyon) tehlikesi altındaki çocuklar ve bebekler
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#0b5331]/10 text-[#0b5331] rounded-full flex items-center justify-center text-sm">3</span> Hastanelerde tedavi gören hastalar ve kendi gıdasını temin edemeyecek durumdaki yaşlılar
                    </li>
                  </ul>
                </div>

                {/* YOUTUBE İFRAME (3'LÜ KART YAPISI) */}
                <div className="my-14">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sahadan Yansıyanlar: Gazze Aşevi Çalışmalarımız</h3>
                  <p className="text-base mb-8">Ekiplerimiz, savaşın zor şartlarına rağmen yardımlarınızı ihtiyaç sahiplerine ulaştırmaya devam ediyor. <strong>Sıcak yemek bağışı</strong> projelerimizin sahadaki gerçek etkisini aşağıdaki güncel raporlama videolarımızdan izleyebilirsiniz.</p>
                  
                  <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nXLW-MyRumQ?si=XNK8EnfkHQSJ8blj" title="Gazze Sıcak Yemek Dağıtımı 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q2AA-leztvw?si=26wm0nWUUN-pK_w_" title="Gazze Sıcak Yemek Dağıtımı 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/51Jc6H0TCjs?si=fMuLzpUZ4tQoYEmX" title="Gazze Sıcak Yemek Dağıtımı 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- INSTAGRAM REELS (3'LÜ KART YAPISI) --- */}
                <div className="my-16 border-t border-gray-100 pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Instagram'dan Canlı Bağlantılar</h3>
                  <p className="text-base mb-8">Aşevlerimizden ve sahadaki yemek dağıtım organizasyonlarından anlık gelişmeleri derneğimizin kurumsal sosyal medya hesaplarından da takip edebilirsiniz.</p>
                  
                  <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
                  <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DYM3N34SHll/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/reel/DYM3N34SHll/" target="_blank" rel="noopener noreferrer">İnsan Derneği Gazze Paylaşımı 1</a>
                      </blockquote>
                    </div>
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DZU9ma3Mo0w/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/reel/DZU9ma3Mo0w/" target="_blank" rel="noopener noreferrer">İnsan Derneği Gazze Paylaşımı 2</a>
                      </blockquote>
                    </div>
                    <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DYwmx3usd9T/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                        <a href="https://www.instagram.com/reel/DYwmx3usd9T/" target="_blank" rel="noopener noreferrer">İnsan Derneği Gazze Paylaşımı 3</a>
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* H3 Kapanış Özeti */}
                <h3 className="text-2xl font-bold text-gray-800 mt-12">Bir Kap Yemek Bedeli: 130 TL</h3>
                <p>
                  Siz de sadece <strong>130 TL</strong> bağışlayarak savaşın gölgesindeki bir Filistinlinin günlük taze yemek ihtiyacını karşılayabilirsiniz. Yardım elinizi uzatmak, acil yemek bağışı süreci üzerinden güvenle online ödeme yapmak için sayfamızdaki formu kullanabilirsiniz.
                </p>
              </div>
            </div>

            {/* SAĞ KOLON: ÖZET */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Bağış Kampanyası Özeti</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Bölge</span>
                    <span className="font-bold text-gray-900">Filistin / Gazze</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Bir Kap Yemek Bedeli</span>
                    <span className="font-bold text-[#e31e24] text-lg">130 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Kategori</span>
                    <span className="font-bold text-gray-900">Acil Yardım</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-medium">Aşevi Kapasitesi</span>
                    <span className="font-bold text-[#0b5331]">Günlük 10.000+ Kap</span>
                  </div>
                </div>

                <Link 
                  href="#bagis-formu"
                  className="block w-full bg-[#e31e24] text-white text-center py-5 rounded-2xl font-black text-xl hover:bg-[#b71c1c] transition-all shadow-lg mb-6"
                >
                  ŞİMDİ BAĞIŞ YAP
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

      {/* --- SSS (FAQ) SECTION - GENİŞLETİLMİŞ VE SEO ODAKLI --- */}
      <section className="py-24 bg-[#f9fdfa] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Gazze ve Filistin Yemek Yardımı Hakkında Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Acil yemek bağışı süreci, operasyonel detaylar ve dini vecibeler (zekat, sadaka) hakkında merak ettiğiniz tüm şeffaf bilgiler.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {[
              {
                q: "Gazze'de sıcak yemek dağıtımı nasıl yapılıyor?",
                a: "Sıcak yemek dağıtımı, şoklanmış gıda koridoru üzerinden ulaştırılan taze malzemelerin, Gazze içerisindeki aşevlerimizde uzman ekiplerimizce pişirilmesiyle başlar. Hazırlanan yemekler, dağıtım tırlarımız ve mobil araçlarımızla çadır kentlere, sığınaklara ve barınma merkezlerine günlük periyotlarla ulaştırılır."
              },
              {
                q: "130 TL'lik sıcak yemek bağışı ile tam olarak ne sağlanıyor?",
                a: "130 TL'lik bağış bedeli, bir kişinin günlük besin ve kalori ihtiyacını karşılayacak yüksek gramajlı ve etli/tavuklu bir kap sıcak yemeğin tüm maliyetini (malzeme tedariki, hijyenik pişirme aşaması ve güvenli lojistik dağıtım dahil) karşılamaktadır."
              },
              {
                q: "Filistin yemek yardımı bağışları zekat, fitre veya sadaka yerine geçer mi?",
                a: "Kesinlikle. İslam fıkhına göre açlık çeken savaş mağduru kardeşlerimize yapılan gıda yardımları zekat, sadaka, fidye veya kefaret kapsamında değerlendirilebilir. Bağış formumuzda ödeme yaparken niyetinizi belirtebilirsiniz; yardımlarınız dini hassasiyetlere tam uygunlukla yerine ulaştırılır."
              },
              {
                q: "Gazze aşevi çalışmalarınız hangi bölgeleri kapsıyor?",
                a: "Operasyonel güvenlik durumuna bağlı olarak başta Refah, Han Yunus ve Deyr el-Balah bölgeleri olmak üzere, yerinden edilmiş sivillerin en yoğun olarak sığındığı güney ve orta Gazze bölgelerinde aktif aşevi hizmeti vermekteyiz."
              },
              {
                q: "Acil yemek bağışı süreci ne kadar şeffaf ilerliyor?",
                a: "İnsan Derneği olarak 'Şeffaf Dağıtım Ağı' mottomuz gereği, sahadaki tüm pişirim ve dağıtım süreçleri dijital ortamda kayıt altına alınır. Düzenli aralıklarla web sitemiz ve sosyal medya hesaplarımız üzerinden videolarla (yukarıdaki alanda olduğu gibi) bağışçılarımıza raporlanmaktadır."
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

      {/* --- FAQ SCHEMA (GÜNCELLENMİŞ 5 SORU İLE) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Gazze'de sıcak yemek dağıtımı nasıl yapılıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sıcak yemek dağıtımı, şoklanmış gıda koridoru üzerinden ulaştırılan taze malzemelerin, Gazze içerisindeki aşevlerimizde uzman ekiplerimizce pişirilmesiyle başlar. Hazırlanan yemekler, dağıtım tırlarımız ve mobil araçlarımızla çadır kentlere, sığınaklara ve barınma merkezlerine günlük periyotlarla ulaştırılır."
                }
              },
              {
                "@type": "Question",
                "name": "130 TL'lik sıcak yemek bağışı ile tam olarak ne sağlanıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "130 TL'lik bağış bedeli, bir kişinin günlük besin ve kalori ihtiyacını karşılayacak yüksek gramajlı ve etli/tavuklu bir kap sıcak yemeğin tüm maliyetini (malzeme tedariki, hijyenik pişirme aşaması ve güvenli lojistik dağıtım dahil) karşılamaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Filistin yemek yardımı bağışları zekat, fitre veya sadaka yerine geçer mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kesinlikle. İslam fıkhına göre açlık çeken savaş mağduru kardeşlerimize yapılan gıda yardımları zekat, sadaka, fidye veya kefaret kapsamında değerlendirilebilir. Bağış formumuzda ödeme yaparken niyetinizi belirtebilirsiniz; yardımlarınız dini hassasiyetlere tam uygunlukla yerine ulaştırılır."
                }
              },
              {
                "@type": "Question",
                "name": "Gazze aşevi çalışmalarınız hangi bölgeleri kapsıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Operasyonel güvenlik durumuna bağlı olarak başta Refah, Han Yunus ve Deyr el-Balah bölgeleri olmak üzere, yerinden edilmiş sivillerin en yoğun olarak sığındığı güney ve orta Gazze bölgelerinde aktif aşevi hizmeti vermekteyiz."
                }
              },
              {
                "@type": "Question",
                "name": "Acil yemek bağışı süreci ne kadar şeffaf ilerliyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "İnsan Derneği olarak 'Şeffaf Dağıtım Ağı' mottomuz gereği, sahadaki tüm pişirim ve dağıtım süreçleri dijital ortamda kayıt altına alınır. Düzenli aralıklarla web sitemiz ve sosyal medya hesaplarımız üzerinden videolarla bağışçılarımıza raporlanmaktadır."
                }
              }
            ]
          })
        }}
      />

      <a
        href="https://wa.me/905551901043?text=Merhaba,%20Gazze%20Sıcak%20Yemek%20Yardımı%20hakkında%20bilgi%20almak%20istiyorum." 
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

export default GazzeYemekYardimiPage;
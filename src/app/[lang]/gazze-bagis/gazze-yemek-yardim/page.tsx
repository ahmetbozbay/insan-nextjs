import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";

export const metadata = {
  title: "Gazze Yemek Yardımı | Filistin Sıcak Yemek Bağışı",
  description: "Gazze ve Filistin yemek yardımı kampanyası. 130 TL ile bir kap sıcak yemek bağışlayın. Aşevlerimizle savaş mağduru ailelere günlük taze yemek ulaştırıyoruz.",
  alternates: {
    canonical: "https://insander.org/tr/projects/acil-yardim/gazze-yemek-yardimi",
  },
};

const GazzeYemekYardimiPage = () => {
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
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] lg:h-[720px] overflow-hidden bg-white">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images-used/projects/filistin-kurban-bagisi-banner.webp"
              alt="Gazze yemek yardımı ve aşevi çalışmaları"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* SEO SAFE READABILITY LAYER */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b5331]/80 via-black/40 to-black/10"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 h-full container mx-auto px-6 lg:px-0">
            <div className="flex flex-col justify-center h-full max-w-[780px]">
              {/* SEO BADGE */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#e31e24]" aria-hidden="true"></span>
                <span className="text-[#e31e24] font-bold tracking-[0.1em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase bg-white/90 px-2 py-1 rounded">
                  Acil Yardım Kampanyası
                </span>
              </div>

              {/* H1 (PRIMARY SEO KEYWORD) */}
              <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                  Gazze Yemek Yardımı <br /><br className="hidden md:block" />
                  <span className="text-[#e31e24] text-2xl md:text-5xl">Açlığa Karşı Umut Olun</span>
                </h1>
          
              {/* SEO DESCRIPTION */}
              <p className="text-gray-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[680px]">
                <strong>Filistin yemek yardımı</strong> kampanyamızla, bölgedeki aşevlerimiz her gün binlerce savaş mağduru aileye taze ve sıcak yemek ulaştırıyor. Sadece <strong>130 TL</strong> ile bir kardeşinizin günlük sıcak yemek ihtiyacını karşılayabilirsiniz.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#bagis-formu"
                  className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-[#b71c1c] transition"
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

              {/* TRUST SIGNALS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm">
                  ✔ Günlük 10.000 Kap Yemek
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm">
                  ✔ Şeffaf Dağıtım Ağı
                </span>
              </div>
            </div>
          </div>
        </section>

      {/* --- BREADCRUMB --- */}
      <section className="bg-gray-50 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="py-5">
          <div className="container mx-auto px-6">
            <ol className="flex items-center flex-wrap text-base md:text-lg font-medium">
              <li>
                <Link href="/tr" className="text-gray-500 hover:text-[#0b5331] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li className="mx-3 text-gray-300">/</li>
              <li>
                <Link href="/tr/projects" className="text-gray-500 hover:text-[#0b5331] transition-colors">
                  Projelerimiz
                </Link>
              </li>
              
              <li className="mx-3 text-gray-300">/</li>
              <li className="text-[#0b5331] font-bold md:text-lg">
                Gazze Yemek Yardımı
              </li>
            </ol>
          </div>
        </nav>
      </section>
      
      {/* --- SÜREÇ KARTLARI (3'LÜ GRID) --- */}
      <section id="bagis-sureci" className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Bir Kap Yemek <br />
              <span className="text-[#0b5331]">Nasıl Ulaşıyor?</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Şeffaf, izlenebilir ve uluslararası standartlara uygun operasyon gücümüzle savaş mağduru kardeşlerimizin yanındayız.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            
            {/* 1. KART */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurbanlıklar-filistin.webp" 
                  alt="Gazze sıcak yemek hazırlık ve tedarik süreci"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 1
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                  Tedarik ve Hazırlık
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Şoklanmış gıda koridoru ile bölgeye ulaştırılan malzemeler, aşevlerimizde hijyenik koşullarda hazırlanır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3 rounded-lg border border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">
                  Bağış Yap →
                </Link>
              </div>
            </div>

            {/* 2. KART */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurban-kesim-sonrası-filistin.webp"
                  alt="Gazze aşevlerinde günlük sıcak yemek pişirimi"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 2
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                  Günlük Pişirim
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Uzman ekiplerimiz, besin değeri yüksek, sıcak yemekleri dev kazanlarda günlük olarak binlerce porsiyon pişirir.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3 rounded-lg bg-[#e31e24] text-white font-bold hover:bg-[#b71c1c] transition">
                  130 TL Destek Ol
                </Link>
              </div>
            </div>

            {/* 3. KART */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurban-yardim-tiri-filistin.webp"
                  alt="Gazze sığınak ve çadır kentlerde sıcak yemek dağıtımı"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-xs font-bold rounded z-10">
                  Adım 3
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors">
                  Dağıtım ve Teslim
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Hazırlanan sıcak yemekler, çadır kentlerdeki ve sığınaklardaki ihtiyaç sahibi ailelere doğrudan ulaştırılır.
                </p>
                <Link href="#bagis-formu" className="inline-block w-full text-center py-3 rounded-lg border border-[#0b5331] text-[#0b5331] font-bold hover:bg-[#0b5331] hover:text-white transition">
                  Hemen Bağışla →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- YAPIŞKAN (STICKY) BAĞIŞ FORMU --- */}
      <section id="bagis-formu" className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-12 xl:col-span-8 xl:col-start-3 sticky top-24">
              <DonationPaymentSection
                categories={["Filistin", "Gazze", "Acil Yardım"]}
                paymentMethods={[]}
                quickSelectAmounts={[130, 260, 650, 1300]}
                donationTitle="Gazze Sıcak Yemek Bağışı"
                href="/tr/pay/sicak-yemek"
                donationDetailsImage="/assets/images-used/projects/filistin.webp"
                donationDescription="Gazze'deki kardeşlerimize bir kap sıcak yemek ulaştırın."
                initialAmount={130}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- ZENGİN SEO İÇERİK & SAHADAN VİDEO --- */}
      <section className="py-24 bg-white overflow-hidden" id="sahadan-goruntuler">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* SOL KOLON */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Gazze Yemek Yardımı: <br />
                <span className="text-[#0b5331]">Açlığa Karşı Umut Olun</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-8 max-w-none">
                <p>
                  Savaşın ve ablukanın gölgesinde hayatta kalma mücadelesi veren Gazze halkı, temiz gıdaya ve suya ulaşmakta büyük zorluklar çekiyor. <strong>Gazze yemek yardımı</strong> kampanyamız kapsamında, bölgede kurduğumuz aşevleri aracılığıyla her gün düzenli olarak on binlerce kişiye sıcak yemek ulaştırıyoruz.
                </p>

                {/* YOUTUBE İFRAME (3'LÜ KART YAPISI - SÜREÇ KARTLARI BİREBİR AYNISI) */}
                {/* YOUTUBE İFRAME (3'LÜ KART YAPISI) */}
                <div className="my-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sahadan Yansıyanlar</h3>
                  <p className="text-base mb-6">Bağışlarınızın Gazze'de nasıl umuda dönüştüğünü kendi gözlerinizle görün. Ekiplerimiz zor şartlara rağmen yardımlarınızı ihtiyaç sahiplerine ulaştırıyor.</p>
                  
                  <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    
                    {/* Video Kart 1 */}
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      {/* DEĞİŞİKLİK BURADA: aspect-video yerine h-[250px] md:h-[300px] eklendi */}
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/nXLW-MyRumQ?si=XNK8EnfkHQSJ8blj" 
                          title="İnsan Derneği Gazze Yardım Çalışmaları 1" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          loading="lazy"
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                      </div>
                    </div>

                    {/* Video Kart 2 */}
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/Q2AA-leztvw?si=26wm0nWUUN-pK_w_" 
                          title="İnsan Derneği Gazze Yardım Çalışmaları 2" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          loading="lazy"
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                      </div>
                    </div>

                    {/* Video Kart 3 */}
                    <div className="group w-full bg-black rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-[350px] md:h-[300px]">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/51Jc6H0TCjs?si=fMuLzpUZ4tQoYEmX" 
                          title="İnsan Derneği Gazze Yardım Çalışmaları 3" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          loading="lazy"
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                      </div>
                    </div>

                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800">Bir Kap Yemek 130 TL</h3>
                <p>
                  Bağışlayacağınız sadece <strong>130 TL</strong> ile bir kişinin günlük sıcak yemek ihtiyacını karşılayabilirsiniz. <strong>Filistin yemek yardımı</strong>, bölgedeki en acil ihtiyaçların başında gelmektedir. Bebekler, çocuklar ve yaşlılar başta olmak üzere savunmasız durumdaki binlerce insan bu yardımlarla hayata tutunuyor.
                </p>

                <div className="bg-[#f8f9fa] p-8 rounded-2xl border-l-4 border-[#0b5331] mt-8">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Şeffaf ve İzlenebilir Altyapı</h4>
                  <p className="text-base leading-relaxed m-0">İnsan Derneği olarak, yardımlarınızın doğru adrese ulaştığından emin olmanız için tüm süreçleri şeffaf bir şekilde yönetiyoruz. Aşevlerimizin faaliyetleri ve yemek dağıtım süreçleri düzenli olarak raporlanmaktadır.</p>
                </div>
              </div>
            </div>

            {/* SAĞ KOLON: ÖZET */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Bağış Özeti</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Bölge</span>
                    <span className="font-bold text-gray-900">Filistin / Gazze</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Bir Kap Yemek</span>
                    <span className="font-bold text-[#e31e24]">130 TL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Kategori</span>
                    <span className="font-bold text-gray-900">Acil Yardım</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Günlük Üretim</span>
                    <span className="font-bold text-gray-900">10.000+ Kap</span>
                  </div>
                </div>

                <Link 
                  href="#bagis-formu"
                  className="block w-full bg-[#e31e24] text-white text-center py-5 rounded-2xl font-black text-xl hover:bg-[#b71c1c] transition-all shadow-xl mb-6"
                >
                  ŞİMDİ BAĞIŞ YAP
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
            </div>
          </div>
        </div>
      </section>

      {/* --- SSS (FAQ) SECTION --- */}
      <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">Filistin ve Gazze yemek yardımı süreci hakkında merak ettiğiniz detaylar.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {[
              {
                q: "Gazze'de sıcak yemek dağıtımı nasıl yapılıyor?",
                a: "Bölgedeki yerel partnerlerimiz ve kendi lojistik ağımız sayesinde kurulan aşevlerinde pişirilen yemekler, sığınaklara ve çadır kentlere araçlarla günlük olarak dağıtılmaktadır."
              },
              {
                q: "130 TL ile tam olarak ne sağlanıyor?",
                a: "130 TL, bir kişinin bir öğünlük besin değeri yüksek, doyurucu ve sıcak yemek maliyetini (malzeme, pişirme ve dağıtım masrafları dahil) karşılamaktadır."
              },
              {
                q: "Zekat veya sadaka niyetine yemek bağışı yapabilir miyim?",
                a: "Evet, online bağış yaparken niyetinizi (zekat, sadaka, fidye vb.) belirtebilirsiniz. Bağışlarınız bu hassasiyete uygun olarak ihtiyaç sahiplerine ulaştırılır."
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

      <a
        href="https://wa.me/905010879198?text=Merhaba,%20Gazze%20Sıcak%20Yemek%20Yardımı%20hakkında%20bilgi%20almak%20istiyorum." 
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
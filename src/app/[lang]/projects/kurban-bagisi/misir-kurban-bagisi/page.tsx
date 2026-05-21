import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DonationPaymentSection from "@/sections/pay/donation-form";

export const metadata = {
  title: "Mısır'daki Gazzeli ve Filistinli Kardeşlerimiz İçin Kurban Bağışı 2026",
  description: "Mısır'da yaşayan yaralı, yetim ve ihtiyaç sahibi Gazzeli ve Filistinli ailelere 2026 kurban bağışınızla destek olun. Vekaletle kesim, İslami usuller ve video raporlama.",
  alternates: {
    canonical: "https://insander.org/tr/projects/kurban-bagisi/misir-kurban-bagisi",
  },
};

const KurbanDonationPage = () => {
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
          <div className="absolute inset-0">
            <Image
              src="/assets/images-used/projects/misir-kurban-bagisi-banner.webp"
              alt="Mısır'daki Gazzeli ve Filistinli mültecilere kurban eti desteği"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b5331]/40 via-white/40 to-white/10"></div>
          </div>

          <div className="relative z-10 h-full container mx-auto px-6 lg:px-0">
            <div className="flex flex-col justify-center h-full max-w-[780px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#e31e24]" aria-hidden="true"></span>
                <span className="text-[#e31e24] font-bold tracking-[0.25em] text-xs uppercase">
                  Mısır - Filistin Kurban Dayanışması 2026
                </span>
              </div>

              <h1 className="text-[#0b5331] text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
                Gazzeli ve Filistinli <br /> Kardeşlerimize Kurban Umudu
              </h1>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-[680px]">
                <strong>Mısır'da yaşayan</strong> yaralı, yetim ve ihtiyaç sahibi <strong>Gazzeli ve Filistinli</strong> kardeşlerimize kurban emanetlerinizi ulaştırıyoruz. 2026 Kurban Bayramı'nda sofralarına bereket olun.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#bagis-formu" className="bg-[#e31e24] text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-[#b71c1c] transition">
                  Kurban Bağışımı Yap
                </a>
                <a href="#bagis-bilgisi" className="border border-[#0b5331] text-[#0b5331] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0b5331] hover:text-white transition">
                  Süreci İncele
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm">
                  ✔ Gazzeli mülteci ailelere özel destek
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm">
                  ✔ İslami usullere uygun vekalet
                </span>
              </div>
            </div>
          </div>
        </section>

      <section className="bg-gray-50 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="py-5">
          <div className="container mx-auto px-6">
            <ol className="flex items-center flex-wrap text-base md:text-lg font-medium">
              <li><Link href="/tr" className="text-gray-500 hover:text-[#0b5331]">Ana Sayfa</Link></li>
              <li className="mx-3 text-gray-300">/</li>
              <li><Link href="/tr/projects" className="text-gray-500 hover:text-[#0b5331]">Projelerimiz</Link></li>
              <li className="mx-3 text-gray-300">/</li>

<li>
  <Link
    href="/tr/projects/kurban-bagisi"
    className="text-gray-500 hover:text-[#0b5331] transition-colors"
  >
    Kurban Bağışı
  </Link>
</li>

<li className="mx-3 text-gray-300">/</li>

<li className="text-[#0b5331] font-bold">
  Mısır Kurban Bağışı
</li>
            </ol>
          </div>
        </nav>
      </section>
      
      
      <section id="bagis-sureci" className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Mısır'daki Mağdurlar İçin <br />
              <span className="text-[#0b5331]">Kurban Organizasyonu</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Mısır’a sığınan yaralı, yetim ve ihtiyaç sahibi Filistinli kardeşlerimizin yaşadığı zorlu süreçte, kurbanlarınızla onların yanında oluyoruz.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Hedef Kitlemiz</h3>
              <p className="text-gray-600">Savaşın etkileriyle Mısır'da yaşamak zorunda kalan, özellikle yetim kalmış ve yaralı Gazzeli aileler önceliğimizdir.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">İslami Hassasiyet</h3>
              <p className="text-gray-600">Kurbanlarınız, vekaletinizle birlikte İslami usullere uygun olarak kesilir ve ihtiyaç sahiplerine teslim edilir.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Şeffaf Raporlama</h3>
              <p className="text-gray-600">Kurbanınızın kesim anına dair videolar, bağışınız sonrasında tarafınıza şeffaf bir şekilde iletilir.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bagis-formu" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <DonationPaymentSection
            categories={["Mısır", "Filistin", "Vekalet"]}
            paymentMethods={[]}
            quickSelectAmounts={[15000]}
            donationTitle="Mısır'daki Gazzeli Aileler İçin Kurban"
            href="/tr/pay/qurbani"
            donationDetailsImage="/assets/images-used/projects/mısır.webp"
            donationDescription="Mısır'da yaşayan Filistinli ihtiyaç sahipleri için kurban hisse bedeli: 15.000 TL"
            initialAmount={15000}
          />
        </div>
      </section>
      {/* --- Mısır SÜREÇ KARTLARI (3'LÜ GRID) --- */}
      <section id="bagis-sureci" className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          
          {/* Bölüm Başlığı */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Mısır’da Kurban İbadeti <br />
              <span className="text-[#0b5331]">Adım Adım Şeffaf Süreç</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Mısır’daki ihtiyaç sahiplerine ulaştırılacak kurbanlarınız, bölgedeki uzman ekiplerimiz tarafından
                  İslami usullere uygun şekilde titizlikle organize edilir ve tüm süreç şeffaf şekilde raporlanır.
              </p>
          </div>

          {/* GRID YAPISI */}
          <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            
            {/* 1. KART: SEÇİM */}
            <div className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link href="#bagis-formu" className="block relative aspect-[5/4] overflow-hidden bg-gray-50 p-4">
                <Image
                  src="/assets/images-used/projects/kurbanlıklar-misir.webp"
                  alt="Mısır kurbanlık seçimi ve islami usullere uygun kurban hazırlığı"
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
                  Mısır bölgesinde kurban vasıflarına en uygun, sağlıklı hayvanlar titizlikle belirlenir ve kesim gününe kadar koruma altına alınır.
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
                  src="/assets/images-used/projects/kurban-kesim-sonrası-misir.webp"
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
                  src="/assets/images-used/projects/kurban-yardim-tiri-misir.webp"
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
              <p className="text-gray-500 mb-4">Mısır genel kurban hisse bedeli için bağış sayfamızı ziyaret edin.</p>
              <Link 
                  href="#bagis-formu"
                  className="text-[#e31e24] font-black text-lg hover:underline underline-offset-8"
              >
                  Tüm Kurban Bağışı Seçeneklerini Gör
              </Link>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Neden Mısır'daki Kardeşlerimize Destek Olmalısınız?</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Mısır, şu an zorunlu göç ve çatışmalar sebebiyle çok sayıda Gazzeli ve Filistinli kardeşimize ev sahipliği yapmaktadır. Bu kardeşlerimiz, kurban bayramı gibi mübarek günlerde yalnız kalmamalı, sofralarında bir nebze olsun umut görmelidir.</p>
            <p>İnsan Derneği olarak, Mısır'daki yerel partnerlerimizle organize ettiğimiz bu kurban operasyonu doğrudan bu ihtiyaç sahibi ailelere odaklanmaktadır.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fcfcfc]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-center mb-12">Sıkça Sorulan Sorular</h2>
          {[
            { q: "Mısır'daki kurbanlar kime ulaşıyor?", a: "Kurbanlar Mısır'da bulunan yetim, yaralı ve temel gıda ihtiyacı olan Gazzeli ve Filistinli mülteci ailelere ulaştırılmaktadır." },
            { q: "Vekaleti nasıl verebilirim?", a: "Bağış formumuz üzerinden online olarak vekaletinizi vererek kurban organizasyonuna dahil olabilirsiniz." },
            { q: "Kesim videolarını görebiliyor muyum?", a: "Evet, kurbanınız kesildikten sonra kesim anına dair görüntüler tarafınıza dijital olarak raporlanır." }
          ].map((item, index) => (
            <details key={index} className="group bg-white mb-4 border rounded-xl p-6 cursor-pointer">
              <summary className="font-bold text-lg">{item.q}</summary>
              <p className="mt-4 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default KurbanDonationPage;
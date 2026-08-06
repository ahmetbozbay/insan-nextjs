"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  PlayCircle, 
  HandHeart, 
  PhoneCall, 
  MapPin, 
  Package, 
  Droplets, 
  Tent,
  Banknote,
  Video,
  CalendarHeart,
  Users,
  FileText,
  AlertCircle
} from "lucide-react";
import DonationPaymentSection from "@/sections/pay/donation-form";

interface KardesAileViewProps {
  lang?: string;
}

export default function KardesAileView({ lang = "tr" }: KardesAileViewProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* ================= 1. HERO BANNER (MOBİL SAĞA ODAKLI & YÜKSEK KONTRASTLI ROZET) ================= */}
      <section className="relative w-full h-[540px] [@media(min-width:768px)]:h-[640px] overflow-hidden bg-[#052c1a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/images-used/projects/gazze-kardes-aile-bagisi-hero-banner.webp"
            alt="Gazze kardeş aile bağışı ve yetim kefaleti Han Yunus"
            fill
            priority
            sizes="100vw"
            /* MOBİLDE SAĞA ODAKLAMA: object-[75%_center] */
            className="object-cover object-[75%_center] [@media(min-width:768px)]:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052c1a] via-[#052c1a]/90 via-50% to-transparent"></div>
        </div>

        <div className="relative z-10 h-full container mx-auto px-6">
          <div className="flex flex-col justify-center h-full max-w-[760px]">
            
            {/* YEŞİL-ÜSTÜ-YEŞİL KARMAŞASINI BİTİREN YÜKSEK KONTRASTLI NET ROZETLER */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 border border-slate-200 font-extrabold text-xs md:text-sm shadow-xl w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                Han Yunus, Gazze — El-Emel Çadır Kenti
              </span>
              
              <span className="inline-flex items-center text-white font-black tracking-[0.2em] text-xs uppercase bg-[#b71c1c] px-4 py-2 rounded-full shadow-lg w-fit">
                GAZZE KARDEŞ AİLE PROJESİ
              </span>
            </div>

            <h1 className="text-white text-3xl [@media(min-width:768px)]:text-5xl [@media(min-width:1200px)]:text-6xl font-black leading-[1.15] mb-5">
              Bir Ailenin Umudu, <br />
              <span className="text-emerald-400">Bir Yetimin Tebessümü Olun</span>
            </h1>

            <p className="text-gray-200 text-base [@media(min-width:768px)]:text-lg leading-relaxed mb-8 max-w-[640px] font-light">
              Abluka ve savaş altında çadırlarda yaşam mücadelesi veren Gazzeli yetim ailelerin aylık hayati ihtiyaçlarını <strong>Gazze kardeş aile bağışı</strong> ile üstlenin; yardımlarınız şeffaflıkla doğrudan ellerine ulaşsın.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#bagis-formu"
                className="bg-[#b71c1c] text-white px-8 py-4 rounded-xl font-bold text-base [@media(min-width:768px)]:text-lg shadow-xl hover:bg-[#880e0e] transition flex items-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                5.000 TL ile Kardeş Aile Ol
              </a>
              <a
                href="#sahadan-hikaye"
                className="border border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-base [@media(min-width:768px)]:text-lg hover:bg-white hover:text-[#052c1a] transition backdrop-blur-sm"
              >
                Saha Kaydını İzle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="bg-gray-50 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="py-3.5">
          <div className="container mx-auto px-6">
            <ol className="flex items-center flex-wrap text-sm font-medium text-gray-500">
              <li><Link href={`/${lang}`} className="hover:text-[#0b5331] flex items-center gap-1"><Home className="w-4 h-4" /> Ana Sayfa</Link></li>
              <li className="mx-2 text-gray-300">/</li>
              <li><Link href={`/${lang}/gazze-bagis`} className="hover:text-[#0b5331]">Gazze Bağış Projeleri</Link></li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-[#0b5331] font-bold" aria-current="page">Gazze Kardeş Aile Bağışı</li>
            </ol>
          </div>
        </nav>
      </section>


      {/* ================= 2. İKİYE BÖLÜNMÜŞ SAĞ-SOL HİKAYE & VİDEO (OKUNABİLİR METİNLER & BÜYÜK İKONLAR) ================= */}
        <section id="sahadan-hikaye" className="py-16 [@media(min-width:768px)]:py-24 bg-white">
        <div className="container mx-auto px-6">
            
            <div className="flex flex-col [@media(min-width:992px)]:flex-row items-center justify-between gap-10 [@media(min-width:1200px)]:gap-14">
            
            {/* SOL KISIM: ZENGİN HİKAYE, SAHA NOTU VE BÜYÜTÜLMÜŞ İKON KARTLARI */}
            <div className="w-full [@media(min-width:992px)]:w-[58%] space-y-6">
                
                {/* ROZETLER */}
                <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b5331] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    <HandHeart className="w-4 h-4" /> Sahadan Birebir Teslimat
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 bg-gray-100 px-3.5 py-1.5 rounded-full border border-gray-200">
                    <MapPin className="w-3.5 h-3.5 text-red-600" /> Han Yunus / Sektör 4
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> %100 Doğrulanmış Aile
                </span>
                </div>

                {/* ANA BAŞLIK */}
                <h2 className="text-3xl [@media(min-width:768px)]:text-4xl font-black text-gray-900 leading-tight">
                Rüya Hanım ve 5 Yetim Evladı <span className="text-[#0b5331]">Sizinle Hayata Tutunuyor</span>
                </h2>

                {/* HİKAYE METİNLERİ */}
                <div className="prose prose-base md:prose-lg text-gray-700 space-y-3 leading-relaxed font-normal">
                <p>
                    Han Yunus’un El-Emel mahallesinde, yıpranmış bir çadırda yaşam mücadelesi veren <strong>Rüya Mahmud Muhammed El-Abadise</strong> ve 5 yetim çocuğu, sizlerin sağladığı sponsorluklarla hayata tutunuyor. Eşini kaybettikten sonra hiçbir düzenli geliri bulunmayan Rüya Hanım, zorlu çadır şartlarında evlatlarını korumaya çalışıyor.
                </p>
                <p>
                    İnsan Derneği olarak, aracı kurumlar olmadan bağışçılarımızın emanetlerini şeffaflıkla doğrudan çadır kentlerdeki ihtiyaç sahiplerine ulaştırıyoruz. Bağışlarınız, isminize özel hazırlanan zarflarla bizzat annelerin ellerine teslim edilir.
                </p>
                </div>

                {/* ALINTI KUTUSU */}
                <div className="bg-emerald-50/80 p-4 md:p-5 rounded-2xl border-l-4 border-[#0b5331] text-sm md:text-base text-gray-900 italic font-medium shadow-sm">
                “Eşimi kaybettikten sonra 5 evladımla çadırda yalnız kaldım. Türkiye’den gelen bu kardeş aile desteği evlatlarımın yüzünü güldüren bir umut oldu.”
                <span className="not-italic font-extrabold text-[#0b5331] block text-right mt-2 text-xs md:text-sm">— Rüya Mahmud (5 Çocuk Annesi)</span>
                </div>

                {/* SAHA İNCELEME ÖZETİ */}
                <div className="bg-gray-50 p-4 md:p-5 rounded-2xl border border-gray-200">
                <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#0b5331]" /> Saha İnceleme Özeti & Aile Profili
                </h4>
                <div className="grid grid-cols-2 [@media(min-width:576px)]:grid-cols-4 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-gray-500 block text-xs font-medium">Aile Reisi</span>
                    <strong className="text-gray-900 font-extrabold text-sm">Rüya Mahmud</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-gray-500 block text-xs font-medium">Yetim Sayısı</span>
                    <strong className="text-gray-900 font-extrabold text-sm">5 Evlat (2-11 Yaş)</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-gray-500 block text-xs font-medium">Yerleşim</span>
                    <strong className="text-emerald-700 font-extrabold text-sm">El-Emel Kampı</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-gray-500 block text-xs font-medium">Sponsorluk</span>
                    <strong className="text-[#b71c1c] font-extrabold text-sm">Düzenli Kefalet</strong>
                    </div>
                </div>
                </div>

                {/* 4 TEMEL ÖZELLİK KARTLARI - BÜYÜTÜLMÜŞ VURGULU İKON KUTULARI */}
                <div className="grid grid-cols-1 [@media(min-width:576px)]:grid-cols-2 gap-4 pt-2">
                {[
                    { 
                    title: "Çadırda Elden Nakit Teslimatı", 
                    desc: "Yardım zarfı bizzat anneye çadırında teslim edilir.", 
                    icon: Banknote 
                    },
                    { 
                    title: "Bağışçı İsmine Özel Teşekkür", 
                    desc: "Teslimat anında isminize özel video kaydı alınır.", 
                    icon: Video 
                    },
                    { 
                    title: "%100 Şeffaf Saha Raporlaması", 
                    desc: "Tüm görsel ve teslim tutanakları tarafınıza iletilir.", 
                    icon: ShieldCheck 
                    },
                    { 
                    title: "Aylık Düzenli Aile Kefaleti", 
                    desc: "Ailenin gıda ve sağlık ihtiyaçları her ay karşılanır.", 
                    icon: CalendarHeart 
                    },
                ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200 hover:bg-emerald-50/60 hover:border-emerald-300 transition-all shadow-sm">
                        {/* BELİRGİN VE BÜYÜK İKON KUTUSU */}
                        <div className="w-48 h-48 rounded-xl bg-[#0b5331] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-24 h-24 text-white" />
                        </div>
                        <div>
                        <h5 className="text-gray-900 font-extrabold text-sm md:text-base mb-0.5">{item.title}</h5>
                        <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                    );
                })}
                </div>

            </div>

            {/* SAĞ KISIM: VİDEO VE KARTUŞ */}
            <div className="w-full [@media(min-width:992px)]:w-[38%] flex flex-col items-center justify-center flex-shrink-0">
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 aspect-[9/16] w-full max-w-[320px] max-h-[500px] group mb-3">
                <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster="/assets/images-used/projects/gazze-kardes-aile-bagisi-hero-banner.webp"
                    onPlay={() => setIsVideoPlaying(true)}
                >
                    <source src="/assets/images-used/projects/gazze-kardes-aile-ruya-hanim.webm" type="video/webm" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>

                {!isVideoPlaying && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pointer-events-none transition-opacity duration-300 group-hover:bg-black/30">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 mb-3 group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-9 h-9 text-white fill-white/80" />
                    </div>
                    <span className="text-white text-xs font-extrabold tracking-wider uppercase drop-shadow-md">
                        YARDIMIN ULAŞMA ANINI İZLEYİN
                    </span>
                    </div>
                )}
                </div>

                {/* SAHA KARTUŞU */}
                <div className="w-full max-w-[320px] bg-slate-900 text-white p-3.5 rounded-2xl border border-slate-700 text-center shadow-md">
                <p className="text-xs text-gray-200 font-semibold leading-normal flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span><strong>Saha Raporu:</strong> Han Yunus — Nakit Teslimat Kaydı</span>
                </p>
                </div>

            </div>

            </div>
        </div>
        </section>


      {/* ================= 3. KEFALET NELERİ KAPSAR? (BÜYÜTÜLMÜŞ İKONLAR VE NET METİNLER) ================= */}
      <section className="py-20 bg-[#fcfcfc] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0b5331] font-extrabold text-xs uppercase tracking-widest block mb-2">BİR AYLIK KEFALET İÇERİĞİ</span>
            <h2 className="text-3xl [@media(min-width:768px)]:text-4xl font-black text-gray-900 mb-3">
              5.000 TL Bir Ailenin Nelerine Derman Olur?
            </h2>
            <p className="text-gray-600 text-sm [@media(min-width:768px)]:text-base">
              Üstlendiğiniz 1 aylık Kardeş Aile desteği ile yetim ailesinin en temel 4 hayati ihtiyacı eksiksiz karşılanır.
            </p>
          </div>

          <div className="grid grid-cols-1 [@media(min-width:576px)]:grid-cols-2 [@media(min-width:992px)]:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* 1. ERZAK KOLİSİ */}
            <div className="bg-white p-7 rounded-3xl border-2 border-emerald-200 shadow-md hover:shadow-xl hover:border-emerald-500 transition-all text-center group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Aylık Erzak Kolisi</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                Kuru gıda, un, yağ, bakliyat ve temel besin ürünlerini kapsayan ailelik erzak desteği.
              </p>
            </div>

            {/* 2. İÇME SUYU */}
            <div className="bg-white p-7 rounded-3xl border-2 border-blue-200 shadow-md hover:shadow-xl hover:border-blue-500 transition-all text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Temiz İçme Suyu</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                Tankerlerle çadır alanına getirilen günlük hijyenik ve içilebilir su gereksinimi.
              </p>
            </div>

            {/* 3. ÇADIR & BARINMA */}
            <div className="bg-white p-7 rounded-3xl border-2 border-amber-200 shadow-md hover:shadow-xl hover:border-amber-500 transition-all text-center group">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-600/30 group-hover:scale-110 transition-transform">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Çadır & Barınma</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                Yıpranan çadır brandalarının yenilenmesi, minder, battaniye ve kışlık koruma.
              </p>
            </div>

            {/* 4. NAKİT DESTEĞİ */}
            <div className="bg-white p-7 rounded-3xl border-2 border-red-200 shadow-md hover:shadow-xl hover:border-red-500 transition-all text-center group">
              <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Acil Nakit Desteği</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                İlaç, çocuk bezi veya özel tıbbi ihtiyaçlar için anneye bizzat teslim edilen nakit zarfı.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 4. BAĞIŞ KART / FORM ALANI (BÜYÜTÜLMÜŞ VE BELİRGİN SPONSORLUK KUTULARI) ================= */}
      <section id="bagis-formu" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#b71c1c] font-bold text-xs uppercase tracking-widest block mb-2">ONLİNE DESTEK PORTALI</span>
            <h2 className="text-3xl [@media(min-width:768px)]:text-4xl font-black text-gray-900 mb-3">
              Gazze Kardeş Aile Bağışı Yapın
            </h2>
            <p className="text-gray-600 text-base">
              Seçeceğiniz bağış miktarı ile Gazze'deki bir veya daha fazla yetim ailesinin aylık sponsorluğunu üstlenebilirsiniz.
            </p>
          </div>

          {/* İSTEK ÜZERİNE BÜYÜTÜLMÜŞ, KALINLAŞTIRILMIŞ BÖLÜM (image_a98cfe.png) */}
          <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 [@media(min-width:992px)]:grid-cols-5 gap-4">
            
            <div className="bg-emerald-50/60 p-5 rounded-2xl border-2 border-emerald-600 text-center shadow-md">
              <span className="font-black text-[#0b5331] block text-xl md:text-2xl mb-1">5.000 TL</span>
              <span className="text-slate-800 font-extrabold text-sm block">1 Aile Kefaleti</span>
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-2xl border-2 border-emerald-600 text-center shadow-md">
              <span className="font-black text-[#0b5331] block text-xl md:text-2xl mb-1">10.000 TL</span>
              <span className="text-slate-800 font-extrabold text-sm block">2 Aile Kefaleti</span>
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-2xl border-2 border-emerald-600 text-center shadow-md">
              <span className="font-black text-[#0b5331] block text-xl md:text-2xl mb-1">20.000 TL</span>
              <span className="text-slate-800 font-extrabold text-sm block">4 Aile Kefaleti</span>
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-2xl border-2 border-emerald-600 text-center shadow-md">
              <span className="font-black text-[#0b5331] block text-xl md:text-2xl mb-1">50.000 TL</span>
              <span className="text-slate-800 font-extrabold text-sm block">10 Aile Kefaleti</span>
            </div>

            <div className="bg-red-50/60 p-5 rounded-2xl border-2 border-[#b71c1c] text-center shadow-md sm:col-span-2 [@media(min-width:992px)]:col-span-1">
              <span className="font-black text-[#b71c1c] block text-xl md:text-2xl mb-1">100.000 TL</span>
              <span className="text-slate-800 font-extrabold text-sm block">20 Aile (Bölgesel)</span>
            </div>

          </div>

          {/* CANLI BAĞIŞ FORMU */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-2 [@media(min-width:768px)]:p-6 rounded-[2rem] shadow-xl border border-gray-200">
              <DonationPaymentSection
                categories={["Filistin", "Gazze", "Kardeş Aile"]}
                paymentMethods={[]}
                quickSelectAmounts={[5000, 10000, 20000, 50000, 100000]}
                donationTitle="Gazze Kardeş Aile Bağışı"
                href="/tr/pay/kardes-aile"
                donationDetailsImage="/assets/images-used/projects/gazze-kardes-aile-bagisi-hero-banner.webp"
                donationDescription="Gazze çadırlarda yaşayan yetim ailelerin aylık tüm temel hayati ihtiyaçlarını karşılayın."
                initialAmount={5000}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ================= 5. SSS & KURUMSAL HAT BİLGİSİ ================= */}
      <section className="py-20 bg-[#f9fdfa] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl [@media(min-width:768px)]:text-4xl font-black text-gray-900 mb-3">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600">Gazze Kardeş Aile projemiz ve şeffaf teslimat sürecimiz hakkında merak edilenler.</p>
          </div>

          <div className="space-y-4 mb-16">
            {[
              {
                q: "Gazze Kardeş Aile sponsorluk bedeli ne kadardır?",
                a: "Bir yetim ailesinin aylık gıda, içme suyu, çadır bakımı ve nakdi ihtiyaçlarını kapsayan standart Kardeş Aile bedeli 5.000 TL'dir. 10.000 TL ile 2 aileye, 50.000 TL ile 10 aileye aylık sponsor olabilirsiniz."
              },
              {
                q: "Bağışım aileye nasıl ulaştırılıyor?",
                a: "Bağışlarınız derneğimizin Filistin ve Gazze sahasında bizzat görev yapan kendi personelleri tarafından zarf içerisinde ailelere çadırlarında elden teslim edilmektedir."
              },
              {
                q: "Yardımın ulaştığına dair video veya fotoğraf gönderiyor musunuz?",
                a: "Evet, teslimat anında bağışçımızın isminin okunduğu özel video kaydı alınır ve dijital ortamda bağışçımıza şeffaflık raporu olarak iletilir."
              },
              {
                q: "Kardeş Aile bağışları Zekat yerine geçer mi?",
                a: "Evet, savaş mağduru yetim ve dul ailelere yapılan bu nakdi yardımlar İslam fıkhına uygun olup Zekat, Sadaka ve Fitre vecibeleriniz yerine geçer."
              }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0b5331]/30 transition-all">
                <summary className="flex justify-between items-center p-5 [@media(min-width:768px)]:p-6 text-base [@media(min-width:768px)]:text-lg font-bold text-gray-900 cursor-pointer list-none group-open:text-[#0b5331] group-open:bg-gray-50 transition-colors">
                  {item.q}
                  <span className="text-[#0b5331] text-xl transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="p-6 pt-2 text-gray-600 text-sm [@media(min-width:768px)]:text-base leading-relaxed border-t border-gray-100 bg-white">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="bg-[#052c1a] text-white rounded-3xl p-8 [@media(min-width:768px)]:p-12 shadow-2xl flex flex-col [@media(min-width:768px)]:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center [@media(min-width:768px)]:text-left">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> 256-Bit SSL Korumalı Güvenli Bağış
              </div>
              <h3 className="text-2xl [@media(min-width:768px)]:text-3xl font-black">Detaylı Bilgi mi Almak İstiyorsunuz?</h3>
              <p className="text-gray-300 text-sm [@media(min-width:768px)]:text-base font-light">
                Kardeş Aile projemiz ve banka hesap numaralarımız için kurumsal destek hattımızla iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a 
                href="tel:+905010879198" 
                className="bg-white text-[#052c1a] hover:bg-gray-100 px-6 py-4 rounded-xl font-bold text-sm [@media(min-width:768px)]:text-base transition flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 text-[#052c1a]" />
                +90 (501) 087 91 98
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
                href="https://wa.me/905010879198?text=Merhaba,%20İnsan%20Derneği%20hakkında%20detaylı%20bilgi%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-50 right-20 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp üzerinden bize ulaşın"
                >
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </a>

    </main>
  );
}
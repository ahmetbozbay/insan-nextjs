"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Utensils, 
  GraduationCap, 
  Baby, 
  HandHelping,
  Package,
  Tent,
  Ambulance
} from "lucide-react";

export default function HomeView({ lang = "tr" }: { lang?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // --- KURBAN PROJELERİ VERİLERİ ---
    const kurbanProjects = [
      {
        title: "Filistin Kurban Bağışı",
        price: "135.000 TL",
        image: "/assets/images-used/projects/filistin.webp",
        link: `/${lang}/projects/kurban-bagisi/filistin-kurban-bagisi`,
      },
      {
        title: "Lübnan Kurban Bağışı",
        price: "15.000 TL",
        image: "/assets/images-used/projects/lübnan.webp",
        link: `/${lang}/projects/kurban-bagisi/lubnan-kurban-bagisi`,
      },
      {
        title: "Mısır Kurban Bağışı",
        price: "15.000 TL",
        image: "/assets/images-used/projects/mısır.webp",
        link: `/${lang}/projects/kurban-bagisi/misir-kurban-bagisi`,
      }
    ];

    // --- SLIDER VERİLERİ ---
    const slides = [
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/b6ef7bd55e922f7a71c69a91b1ecee2ced8f4954-1280x960.jpg", 
            title: "Kurbanınız Umut Olsun", 
            description: "Vekaletlerinizi titizlikle yerine getiriyor, videolarla size bildiriyoruz. Bu bayram binlerce sofraya bereket olalım.",
            link: `/${lang}/projects/kurban-bagisi`,
            donateLink: `/${lang}/projects/kurban-bagisi`,
            tag: "KURBAN 2026"
        },
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/ebc53ead1b612b6eba7ea715bac4b9c4ce228fb7-2048x1536.jpg", 
            title: "Gazze'ye Gıda Desteği", 
            description: "Saldırıların başından bu yana on binlerce gıda kolisi dağıtımı gerçekleştirerek Gazze halkının yanında oluyoruz.",
            link: `/${lang}/projects/gida-kolisi`,
            donateLink: `/${lang}/pay/gida-kolisi`,
            tag: "ACİL YARDIM"
        },
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/db67bea66878e3a0421f6236c0e4d476f896214d-848x480.jpg", 
            title: "Altyapı ve Yaşam Alanları", 
            description: "Çadır kampları kuruyor, iş makineleriyle tesviye çalışmaları yaparak barınma alanlarını yaşanabilir kılıyoruz.",
            link: `/${lang}/projects/altyapi-calismalari`,
            donateLink: `/${lang}/pay/altyapi-calismalari`,
            tag: "ALTYAPI - BİNA"
        },
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/c9b5cba806ec74e1dfca2ede217910c31db7f492-2048x1152.jpg", 
            title: "Filistin'in Geleceği: Eğitim", 
            description: "Zorlu şartlar altında dahi eğitimden kopmayan Gazze halkına hafızlık ve okul desteği sağlıyoruz.",
            link: `/${lang}/projects/egitim-destek`,
            donateLink: `/${lang}/pay/egitim-destek`,
            tag: "EĞİTİM"
        },
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/b3af03c02203d8c4824163dffcc75b72797ff3a2-1280x720.jpg", 
            title: "Yaraları Birlikte Sarıyoruz", 
            description: "Saldırılarda uzuvlarını kaybeden kardeşlerimize protez desteği sağlayarak hayata tutunmalarına yardımcı oluyoruz.",
            link: `/${lang}/projects/protez`,
            donateLink: `/${lang}/pay/protez`,
            tag: "SAĞLIK"
        }
    ];

    // --- HIZLI BAĞIŞ VERİLERİ ---
    const quickDonations = [
        {
            title: "Nakdi Yardım",
            price: "500 TL",
            image: "https://cdn.sanity.io/images/bbpgvnl9/production/a2e4b5dff9b2150ef74cfc3abf826abc61edaeb8-1600x900.jpg",
            link: `/${lang}/projects/nakdi-yardim`,
            payLink: `/${lang}/pay/nakdi-yardim`
        },
        {
            title: "Sıcak Yemek",
            price: "130 TL",
            image: "https://cdn.sanity.io/images/bbpgvnl9/production/dd1a3328fbee48609bce4d4a581f6eab32e50a1c-1600x900.jpg",
            link: `/${lang}/projects/sicak-yemek`,
            payLink: `/${lang}/pay/sicak-yemek`
        },
        {
            title: "Hijyen Paketi",
            price: "900 TL",
            image: "https://cdn.sanity.io/images/bbpgvnl9/production/5cc6f34cbedfe5bbe086c6fc653b129294d1133a-2048x1536.jpg",
            link: `/${lang}/projects/hijyen-paketi`,
            payLink: `/${lang}/pay/hijyen-paketi`
        },
        {
            title: "Ekmek - Un",
            price: "800 TL",
            image: "https://cdn.sanity.io/images/bbpgvnl9/production/02310009fdf848b5a33d64b073ab0f48cc7877b3-1280x720.jpg",
            link: `/${lang}/projects/ekmek-un`,
            payLink: `/${lang}/pay/ekmek-un`
        }
    ];

    // --- "NELER YAPIYORUZ" FAALİYET ALANLARI (İsim ve İkon Hataları Tamamen Düzeltildi) ---
    const categories = [
        { name: "Eğitim Destek", icon: <GraduationCap />, link: `/${lang}/projects/egitim-destek` },
        { name: "Gıda Kolisi", icon: <Package />, link: `/${lang}/projects/gida-kolisi` },
        { name: "Sıcak Yemek", icon: <Utensils />, link: `/${lang}/projects/sicak-yemek` },
        { name: "Çadır Yardımı", icon: <Tent />, link: `/${lang}/projects/cadir` },
        { name: "Ambulans", icon: <Ambulance />, link: `/${lang}/projects/ambulans` },
        { name: "Yenidoğan Paketi", icon: <Baby />, link: `/${lang}/projects/yenidogan-paketi` },
        { name: "Kardeş Aile", icon: <Heart />, link: `/${lang}/projects/kardes-aile` },
        { name: "Nakdi Yardım", icon: <HandHelping />, link: `/${lang}/projects/nakdi-yardim` },
    ];

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <main className="flex flex-col bg-white">
            
            {/* --- HERO SLIDER SECTION (Kırmızı & Yeşil Dengeli) --- */}
            <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden group">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                        }`}
                    >
                        {/* Koyu Kontrast Katmanı (Yeşil Alt Tonlu) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#052c1a]/95 via-black/50 to-transparent z-10"></div>
                        <img src={slide.url} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                        
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-8 md:px-24">
                                <div className="max-w-4xl">
                                    {/* Kırmızı Badge */}
                                    <span className="inline-block bg-[#e31e24] text-white px-6 py-2 rounded-lg text-sm font-black mb-8 tracking-[0.2em] uppercase shadow-lg shadow-[#e31e24]/30">
                                        {slide.tag}
                                    </span>
                                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-2xl border-l-8 border-[#e31e24] pl-8">
                                        {slide.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-8">
                                        {/* Kırmızı Birincil Buton */}
                                        <Link 
                                            href={slide.donateLink} 
                                            className="bg-[#e31e24] hover:bg-[#b71c1c] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl hover:scale-105 duration-300"
                                        >
                                            Bağış Yap
                                        </Link>
                                        {/* Şeffaf/Yeşil İkincil Buton */}
                                        <Link 
                                            href={slide.link} 
                                            className="bg-white/10 hover:bg-white hover:text-[#0b5331] text-white backdrop-blur-xl px-10 py-5 rounded-2xl font-black text-lg transition-all border-2 border-white/20 shadow-2xl hover:scale-105 duration-300"
                                        >
                                            Projeyi İncele
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigasyon Okları (Kırmızı Hover Efektli) */}
                <div className="absolute inset-0 z-40 flex items-center justify-between px-4 md:px-8 pointer-events-none">
                    <button onClick={prevSlide} className="pointer-events-auto bg-black/30 hover:bg-[#e31e24] text-white p-5 md:p-6 rounded-full backdrop-blur-md transition-all border-2 border-white/10 group">
                        <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button onClick={nextSlide} className="pointer-events-auto bg-black/30 hover:bg-[#e31e24] text-white p-5 md:p-6 rounded-full backdrop-blur-md transition-all border-2 border-white/10 group">
                        <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Alt İlerleme Çubukları (Kırmızı Aksan) */}
                <div className="absolute bottom-12 left-0 w-full z-40 px-8 md:px-24">
                    <div className="container mx-auto flex gap-6">
                        {slides.map((_, i) => (
                            <div key={i} onClick={() => setCurrentSlide(i)} className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                                <div 
                                    className={`h-full bg-[#e31e24] transition-all ease-linear ${
                                        i === currentSlide && isMounted
                                        ? "w-full duration-[6000ms]" 
                                        : "w-0 duration-0" 
                                    }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- KURBAN BAĞIŞI BÖLGELERİ SECTION (İç Sayfalarla Birebir Eşit) --- */}
            <section id="bagis-secenekleri" className="py-20 md:py-32 bg-[#fcfcfc] border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-[2px] bg-[#e31e24]"></span>
                            <span className="text-[#e31e24] font-bold tracking-[0.25em] text-xs uppercase">Güvenilir Kurban Organizasyonu</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                            2026 Vekaletle Kurban Bağışı Yapılabilecek Bölgeler
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl">
                            Vekaletle kurban bağışınızı Filistin, Gazze, Lübnan ve Mısır gibi ihtiyaç bölgelerine ulaştırarak islami usullere uygun kesim ve dağıtım sürecine destek olabilirsiniz.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:gap-8 pb-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                        {kurbanProjects.map((item, idx) => {
                            const slug = item.link || "#";
                            return (
                                <div
                                    key={idx}
                                    className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <Link href={slug} className="block relative aspect-[5/4] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} 2026 vekaletle kurban bağışı`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-3 py-1 text-xs font-bold rounded">
                                            Kurban Bağışı 2026
                                        </div>
                                    </Link>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#0b5331] text-2xl font-black mb-3">
                                            {item.price}
                                        </p>
                                        <p className="text-gray-500 text-sm mb-4">
                                            {item.title} kapsamında vekaletle kurban kesimi yapılır. Süreç anlık video ve SMS ile bildirilir.
                                        </p>
                                        <Link
                                            href={slug}
                                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5331] px-5 py-3.5 text-center text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#084326] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0b5331]/40 focus:ring-offset-2"
                                            aria-label={`${item.title} bağışı sayfasına git`}>
                                            <span>{item.title} bağışı yapmak için tıkla</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- HIZLI BAĞIŞ SECTION --- */}
            <section className="py-20 md:py-32 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[#e31e24]"></div>
                            <span className="text-[#e31e24] font-bold uppercase tracking-[0.3em] text-sm">Hemen Destek Ol</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[0.95]">
                            Hızlı Bağış
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                            Acil ihtiyaç duyulan projelerimize anında destek olabilir, bir cana umut olabilirsiniz.
                        </p>
                    </div>

                    <div className="flex flex-row gap-6 md:gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
                        {quickDonations.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="flex-none w-[300px] md:w-[calc(25%-1.5rem)] snap-start group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                            >
                                <Link href={item.link} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-4 left-4 bg-[#e31e24] text-white px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        Öncelikli
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-[#0b5331] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#0b5331] text-3xl font-black mb-8 tracking-tight">
                                        {item.price}
                                    </p>
                                    <div className="mt-auto flex flex-col gap-3">
                                        {/* Kırmızı Buton */}
                                        <Link 
                                            href={item.payLink} 
                                            className="bg-[#e31e24] text-white text-center py-4 rounded-xl font-black hover:bg-[#b71c1c] transition-all shadow-lg shadow-[#e31e24]/20 active:scale-95 text-lg duration-300"
                                        >
                                            Bağış Yap
                                        </Link>
                                        <Link 
                                            href={item.link} 
                                            className="text-gray-400 text-center py-2 text-sm font-bold hover:text-gray-900 transition-colors tracking-wide"
                                        >
                                            Detayları İncele
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100">
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_15px_50px_rgba(0,0,0,0.03)]">
                            <div className="text-center lg:text-left">
                                <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                                    Daha fazla hayat değiştirmek ister misiniz?
                                </h4>
                                <p className="text-gray-500 text-base md:text-lg font-medium">
                                    Aktif olan tüm yardım projelerimizi listeleyebilir ve dilediğinize destek olabilirsiniz.
                                </p>
                            </div>
                            <Link 
                                href={`/${lang}/projects`} 
                                className="group flex items-center gap-6 bg-[#0b5331] hover:bg-[#e31e24] text-white pl-10 pr-4 py-4 rounded-[1.5rem] transition-all duration-500 shadow-2xl transform hover:-translate-y-1 active:scale-95"
                            >
                                <span className="font-black text-xl md:text-2xl tracking-tight">
                                    Tüm Projeleri Gör
                                </span>
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#e31e24] transition-all duration-500">
                                    <ChevronRight size={32} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAALİYET ALANLARI (Doğrulanan Eşleşmelerle Premium Tasarım) --- */}
            <section className="py-20 md:py-28 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="mb-16 border-l-4 border-[#e31e24] pl-6">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">
                            Neler Yapıyoruz?
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl">
                            İnsani yardımın her alanında, profesyonel ve şeffaf bir operasyon yürütüyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {categories.map((category, index) => (
                            <Link 
                                key={index} 
                                href={category.link} 
                                className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-[#e31e24]/30"
                            >
                                {/* İkon Alanı: Yeşil başlar, hover olunca İnsander Kırmızısına döner */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0b5331]/5 text-[#0b5331] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e31e24] group-hover:text-white transition-all duration-500 shadow-sm">
                                    <div className="scale-[1.5] md:scale-[1.8]">{category.icon}</div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-[#e31e24] transition-colors duration-300">
                                    {category.name}
                                </h3>
                                {/* Hoverda genişleyen kırmızı çizgi */}
                                <div className="mt-4 w-0 h-1 bg-[#e31e24] rounded-full group-hover:w-12 transition-all duration-500"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- İSTATİSTİKLER --- */}
            <section className="bg-[#0b5331] py-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#052c1a] rounded-full blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/30 rounded-full blur-[150px] opacity-40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                        {[
                            { label: "Bağışçı Sayısı", value: "45.000+" },
                            { label: "Tamamlanan Proje", value: "1.200+" },
                            { label: "Desteklenen Aile", value: "85.000+" },
                            { label: "Aktif Bölge", value: "12+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="relative group">
                                <div className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#e31e24]/30 hover:-translate-y-2">
                                    {/* Parlayan Kırmızı/Turuncu alt ton yerine net beyaz ve yeşil uyumu */}
                                    <span className="text-white text-4xl md:text-6xl font-black mb-2 tracking-tighter drop-shadow-lg">
                                        {stat.value}
                                    </span>
                                    <div className="w-8 h-1 bg-[#e31e24] rounded-full mb-4 group-hover:w-16 transition-all duration-500"></div>
                                    <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-center leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                                {idx !== 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-white/10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SON DOKUNUŞ: BÜLTEN & FİNAL CTA --- */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Sol: Bülten Kaydı */}
                        <div className="bg-gray-900 rounded-[1rem] p-20 md:p-16 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e31e24]/10 rounded-full blur-3xl group-hover:bg-[#e31e24]/20 transition-all duration-700"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">İyilikten Haberiniz Olsun</h3>
                                <p className="text-gray-400 text-lg mb-8 font-medium">Projelerimizden ve yardım faaliyetlerimizden anında haberdar olmak için bültenimize katılın.</p>
                                
                                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                                    <input 
                                        type="email" 
                                        placeholder="E-posta adresiniz" 
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#e31e24] transition-all"
                                    />
                                    <button className="bg-[#e31e24] hover:bg-[#b71c1c] text-white font-black px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-[#e31e24]/20 duration-300">
                                        Kaydol
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sağ: İletişim / Güncel Bilgiler */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">Bize Ulaşın</h3>
                                <p className="text-gray-500 text-lg font-medium mb-8">Sorularınız veya kurumsal iş birlikleri için ekibimiz size destek olmaya hazır.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Telefon Kartı */}
                                <a href="tel:+905010879198" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#e31e24]/30 hover:bg-white transition-all group duration-300">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#e31e24] group-hover:bg-[#e31e24] group-hover:text-white transition-all duration-300">
                                        <ChevronRight size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-gray-400 font-bold uppercase tracking-widest">Destek Hattı</span>
                                        <span className="text-gray-900 font-black">+90 (555) 190 10 43</span>
                                    </div>
                                </a>

                                {/* E-Posta Kartı */}
                                <a href="mailto:info@insander.org" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#e31e24]/30 hover:bg-white transition-all group duration-300">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#e31e24] group-hover:bg-[#e31e24] group-hover:text-white transition-all duration-300">
                                        <ChevronRight size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-gray-400 font-bold uppercase tracking-widest">E-Posta</span>
                                        <span className="text-gray-900 font-black">info@insander.org</span>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-4 p-8 rounded-2xl bg-[#0b5331]/5 border border-[#0b5331]/10 flex items-center gap-6">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <Heart className="text-[#e31e24] fill-[#e31e24]" size={24} />
                                </div>
                                <p className="text-gray-700 font-medium text-sm leading-relaxed">
                                    Her bağış bir umut, her destek yeni bir gelecek. <strong className="text-[#0b5331]">2026'da birlikte daha güçlüyüz.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            {/* --- SMS BAĞIŞ POPUP --- */}
            {showPopup && (
            <>
                <style jsx>{`
                @keyframes popupScale {
                    0% {
                    opacity: 0;
                    transform: scale(0.88);
                    }
                    100% {
                    opacity: 1;
                    transform: scale(1);
                    }
                }
                `}</style>

                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

                <div
                    className="relative w-full max-w-xl"
                    style={{ animation: "popupScale .35s ease" }}
                >

                    {/* Kapat Butonu */}
                    <button
                    onClick={() => setShowPopup(false)}
                    aria-label="Popup kapat"
                    className="absolute -top-8 -right-8 z-20 bg-emerald-600 text-white w-36 h-36 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:bg-red-600 hover:scale-110 transition-all duration-300"
                    >
                    <X size={90} strokeWidth={3.5} />
                    </button>

                    {/* SMS Bağış Görseli */}
                    <a
                    href="sms:9790?body=BAĞIŞ"
                    className="block overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                    >
                    <Image
                        src="/assets/images-used/projects/sms-bagis-popup.webp"
                        alt="Gazze SMS Bağış Kampanyası"
                        width={900}
                        height={900}
                        priority
                        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                    </a>

                </div>

                </div>
            </>
            )}

    
        </main>
    );
}




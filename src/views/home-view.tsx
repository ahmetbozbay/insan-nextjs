"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Droplets, 
  Utensils, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  Baby, 
  HandHelping 
} from "lucide-react";

export default function HomeView({ lang = "tr" }: { lang?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // --- SLIDER VERİLERİ ---
    const slides = [
        { 
            url: "https://cdn.sanity.io/images/bbpgvnl9/production/b6ef7bd55e922f7a71c69a91b1ecee2ced8f4954-1280x960.jpg", 
            title: "Kurbanınız Umut Olsun", 
            description: "Vekaletlerinizi titizlikle yerine getiriyor, videolarla size bildiriyoruz. Bu bayram binlerce sofraya bereket olalım.",
            link: `/${lang}/projects/kurban-bagisi`,
            donateLink: `/${lang}/pay/kurban-bagisi`,
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

    // --- FAALİYET ALANLARI VERİLERİ ---
    const categories = [
        { name: "Gıda & Su", icon: <Droplets />, link: "/gida-su" },
        { name: "Sıcak Yemek", icon: <Utensils />, link: "/sicak-yemek-ekmek" },
        { name: "Barınma & Giyim", icon: <Home />, link: "/barinma-giyim" },
        { name: "Sağlık", icon: <Stethoscope />, link: "/saglik" },
        { name: "Eğitim", icon: <GraduationCap />, link: "/egitim" },
        { name: "Nakdi Yardım", icon: <HandHelping />, link: "/nakdi-yardim" },
        { name: "Yetim & Kardeş Aile", icon: <Heart />, link: "/yetim" },
        { name: "Yenidoğan Desteği", icon: <Baby />, link: "/saglik" },
    ];

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <main className="flex flex-col bg-white">
            
            {/* --- HERO SLIDER SECTION --- */}
            <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden group">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                        }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
                        <img src={slide.url} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                        
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-8 md:px-24">
                                <div className="max-w-4xl">
                                    <span className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-black mb-8 tracking-[0.2em] uppercase shadow-lg shadow-emerald-900/40">
                                        {slide.tag}
                                    </span>
                                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-medium max-w-2xl border-l-8 border-emerald-500 pl-8">
                                        {slide.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-8">
                                        <Link 
                                            href={slide.link} 
                                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl hover:scale-105"
                                        >
                                            Projeyi İncele
                                        </Link>
                                        <Link 
                                            href={slide.donateLink} 
                                            className="bg-white/10 hover:bg-white hover:text-emerald-950 text-white backdrop-blur-xl px-10 py-5 rounded-2xl font-black text-lg transition-all border-2 border-white/20 shadow-2xl hover:scale-105"
                                        >
                                            Bağış Yap
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigasyon Okları */}
                <div className="absolute inset-0 z-40 flex items-center justify-between px-4 md:px-8 pointer-events-none">
                    <button onClick={prevSlide} className="pointer-events-auto bg-black/30 hover:bg-emerald-600 text-white p-6 md:p-8 rounded-full backdrop-blur-md transition-all border-2 border-white/10 group">
                        <ChevronLeft size={40} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button onClick={nextSlide} className="pointer-events-auto bg-black/30 hover:bg-emerald-600 text-white p-6 md:p-8 rounded-full backdrop-blur-md transition-all border-2 border-white/10 group">
                        <ChevronRight size={40} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Alt İlerleme Çubukları */}
                <div className="absolute bottom-12 left-0 w-full z-40 px-8 md:px-24">
                    <div className="container mx-auto flex gap-6">
                        {slides.map((_, i) => (
                            <div key={i} onClick={() => setCurrentSlide(i)} className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                                <div 
                                    className={`h-full bg-emerald-500 transition-all ease-linear ${
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

           {/* --- HIZLI BAĞIŞ SECTION --- */}
<section className="py-20 md:py-32 bg-[#fcfcfc] border-y border-gray-100">
    <div className="container mx-auto px-6">
        
        {/* Başlık Alanı - Daha Dominant ve Modern */}
        <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-emerald-600"></div>
                <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm">Hemen Destek Ol</span>
            </div>
            <h2 className="text-7xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[0.95]">
                Hızlı Bağış
            </h2>
           <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                Acil ihtiyaç duyulan projelerimize anında destek olabilir, 
                <span className="md:block"> bir cana umut olabilirsiniz.</span>
            </p>
        </div>

        {/* Kartlar - Yanyana ve Daha Uzun Görseller */}
        <div className="flex flex-row gap-6 md:gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
            {quickDonations.map((item, idx) => (
                <div 
                    key={idx} 
                    className="flex-none w-[300px] md:w-[calc(25%-1.5rem)] snap-start group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 border border-gray-50"
                >
                    
                    {/* Görsel Alanı - Daha UZUN (Portrait) oran */}
                    <Link href={item.link} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl">
                            Öncelikli
                        </div>
                        {/* Görsel üzerine hafif bir degrade (metin okunabilirliği için opsiyonel) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>

                    {/* İçerik Alanı */}
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-emerald-600 text-3xl font-black mb-8 tracking-tight">
                            {item.price}
                        </p>

                        <div className="mt-auto flex flex-col gap-3">
                            <Link 
                                href={item.payLink} 
                                className="bg-emerald-600 text-white text-center py-4 rounded-xl font-black hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 active:scale-95 text-lg"
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

        {/* Tüm Projeleri Gör - Daha Büyük ve Hacimli Kutu */}
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
                    className="group flex items-center gap-6 bg-gray-900 text-white pl-10 pr-4 py-4 rounded-[1.5rem] hover:bg-emerald-600 transition-all duration-500 shadow-2xl shadow-gray-900/20 hover:shadow-emerald-900/30 transform hover:-translate-y-1 active:scale-95"
                >
                    <span className="font-black text-xl md:text-2xl tracking-tight">
                        Tüm Projeleri Gör
                    </span>
                    
                    {/* Daha büyük ve hacimli ok alanı */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-all duration-500">
                        <ChevronRight size={32} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </div>

    </div>
</section>
{/* --- FAALİYET ALANLARI --- */}
<section className="py-20 md:py-28 bg-gray-50/50">
    <div className="container mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="mb-16 border-l-4 border-emerald-600 pl-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">
                Neler Yapıyoruz?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl">
                İnsani yardımın her alanında, profesyonel ve şeffaf bir operasyon yürütüyoruz.
            </p>
        </div>

        {/* 8 İkon İçin Sabit Linkli Grid Yapısı */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            
            {/* 1. Eğitim Destek */}
            <Link href={`/${lang}/projects/egitim-destek`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[0]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Eğitim Destek</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 2. Gıda Kolisi */}
            <Link href={`/${lang}/projects/gida-kolisi`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[1]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Gıda Kolisi</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 3. Sıcak Yemek */}
            <Link href={`/${lang}/projects/sicak-yemek`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[2]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Sıcak Yemek</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 4. Çadır */}
            <Link href={`/${lang}/projects/cadir`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[3]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Çadır Yardımı</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 5. Ambulans */}
            <Link href={`/${lang}/projects/ambulans`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[4]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Ambulans</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 6. Yenidoğan Paketi */}
            <Link href={`/${lang}/projects/yenidogan-paketi`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[5]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Yenidoğan Paketi</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 7. Kardeş Aile */}
            <Link href={`/${lang}/projects/kardes-aile`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[6]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Kardeş Aile</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

            {/* 8. Nakdi Yardım */}
            <Link href={`/${lang}/projects/nakdi-yardim`} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <div className="scale-[1.5] md:scale-[1.8]">{categories[7]?.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-700 transition-colors">Nakdi Yardım</h3>
                <div className="mt-4 w-0 h-1 bg-emerald-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
            </Link>

        </div>
    </div>
</section>
           {/* --- İSTATİSTİKLER (MODERN & TEMİZ) --- */}
<section className="bg-emerald-900 py-24 relative overflow-hidden">
    {/* Arka plan süslemesi - CSS Gradient ile derinlik */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-800 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-950 rounded-full blur-[150px] opacity-50"></div>
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
                    {/* Kart yapısı - Cam efekti ve hafif border */}
                    <div className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-emerald-400/30 hover:-translate-y-2">
                        
                        {/* Numara kısmı - Emerald parlaması */}
                        <span className="text-emerald-400 text-4xl md:text-6xl font-black mb-2 tracking-tighter drop-shadow-lg">
                            {stat.value}
                        </span>
                        
                        {/* Ayırıcı küçük çizgi */}
                        <div className="w-8 h-1 bg-white/20 rounded-full mb-4 group-hover:w-16 group-hover:bg-emerald-400 transition-all duration-500"></div>
                        
                        {/* Etiket - Daha okunaklı ve zarif */}
                        <span className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-center leading-tight">
                            {stat.label}
                        </span>

                    </div>
                    
                    {/* Sadece masaüstünde görünen aralardaki süs çizgileri */}
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
            
            {/* Sol: Bülten Kaydı - Köşeler yumuşatıldı (rounded-3xl) */}
            <div className="bg-gray-900 rounded-[1rem] p-20 md:p-16 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">İyilikten Haberiniz Olsun</h3>
                    <p className="text-gray-400 text-lg mb-8 font-medium">Projelerimizden ve yardım faaliyetlerimizden anında haberdar olmak için bültenimize katılın.</p>
                    
                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="E-posta adresiniz" 
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                        />
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
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
                    <a href="tel:+902742121212" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-500/30 hover:bg-white transition-all group">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                            <ChevronRight size={20} />
                        </div>
                        <div>
                            <span className="block text-xs text-gray-400 font-bold uppercase tracking-widest">Destek Hattı</span>
                            <span className="text-gray-900 font-black">+90 (274) 212 12 12</span>
                        </div>
                    </a>

                    {/* E-Posta Kartı */}
                    <a href="mailto:info@insander.org" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-500/30 hover:bg-white transition-all group">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                            <ChevronRight size={20} />
                        </div>
                        <div>
                            <span className="block text-xs text-gray-400 font-bold uppercase tracking-widest">E-Posta</span>
                            <span className="text-gray-900 font-black">info@insander.org</span>
                        </div>
                    </a>
                </div>

                <div className="mt-4 p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center gap-6">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                        <Heart className="text-emerald-600 fill-emerald-600" size={24} />
                    </div>
                    <p className="text-emerald-900 font-bold text-sm leading-relaxed">
                        Her bağış bir umut, her destek yeni bir gelecek. 2026'da birlikte daha güçlüyüz.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

            
        </main>
    );
}
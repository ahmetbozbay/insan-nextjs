"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, Filter } from "lucide-react";

export default function ProjectsPage({ lang = "tr" }: { lang?: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // --- 20 PROJENİN TAM VE DOĞRULANMIŞ VERİ DİZİSİ ---
  const projects = [
    {
      title: "Gıda Kolisi",
      price: "1.500 TL",
      category: "Gıda & Su",
      image: "/assets/images-used/projects/gida-kolisi.webp",
      desc: "Filistin ve Gazze başta olmak üzere kriz bölgelerine on binlerce gıda kolisi ulaştırıyoruz.",
      link: `/${lang}/projects/gida-kolisi`,
      payLink: `/${lang}/pay/gida-kolisi`
    },
    {
      title: "İçme Suyu",
      price: "12.000 TL",
      category: "Gıda & Su",
      image: "/assets/images-used/projects/icme-suyu.webp",
      desc: "Gazze Şeridi'ndeki kanalizasyon ve altyapı saldırıları sonrası temiz suya erişim sağlıyoruz.",
      link: `/${lang}/projects/icme-suyu`,
      payLink: `/${lang}/pay/icme-suyu`
    },
    {
      title: "Ekmek - Un",
      price: "800 TL",
      category: "Gıda & Su",
      image: "/assets/images-used/projects/ekmek-un.webp",
      desc: "Saldırıların ve ambargonun gölgesinde temel gıda maddesi olan un ve ekmek ihtiyacını karşılıyoruz.",
      link: `/${lang}/projects/ekmek-un`,
      payLink: `/${lang}/pay/ekmek-un`
    },
    {
      title: "Kıyafet",
      price: "1.000 TL",
      category: "Barınma & Giyim",
      image: "/assets/images-used/projects/kiyafet.webp",
      desc: "Ramazan ve Kurban bayramlarında Gazze, Lübnan ve Mısır'daki çocuklara kıyafet desteği sunuyoruz.",
      link: `/${lang}/projects/kiyafet`,
      payLink: `/${lang}/pay/kiyafet`
    },
    {
      title: "Nakdi Yardım",
      price: "500 TL",
      category: "Nakdi Yardım",
      image: "/assets/images-used/projects/nakdi-yardim.webp",
      desc: "Zekat, fitre ve nakdi bağışlarınızı en doğru ve güvenilir şekilde ilk elden teslim ediyoruz.",
      link: `/${lang}/projects/nakdi-yardim`,
      payLink: `/${lang}/pay/nakdi-yardim`
    },
    {
      title: "Çeşitli Faaliyetler",
      price: "200 TL",
      category: "Genel",
      image: "/assets/images-used/projects/cesitli-faaliyetler.webp",
      desc: "Filistin halkına yönelik ağır saldırıların ilk gününden bu yana çok yönlü saha operasyonları yürütüyoruz.",
      link: `/${lang}/projects/cesitli-faaliyetler`,
      payLink: `/${lang}/pay/cesitli-faaliyetler`
    },
    {
      title: "Zekat Dağıtımı",
      price: "1.000 TL",
      category: "Nakdi Yardım",
      image: "/assets/images-used/projects/zekat-dagitimi.webp",
      desc: "Emanet ettiğiniz zekat ve fitre bağışlarını şer-i şuruata uygun olarak muhtaç ailelere ulaştırıyoruz.",
      link: `/${lang}/projects/zekat-dagitimi`,
      payLink: `/${lang}/pay/zekat-dagitimi`
    },
    {
      title: "Sıcak Yemek",
      price: "130 TL",
      category: "Gıda & Su",
      image: "/assets/images-used/projects/sicak-yemek.webp",
      desc: "Gazze'deki aşevlerimizde her gün binlerce savaş mağduru aile için sıcak yemek pişirip dağıtıyoruz.",
      link: `/${lang}/projects/sicak-yemek`,
      payLink: `/${lang}/pay/sicak-yemek`
    },
    {
      title: "Çadır",
      price: "9.000 TL",
      category: "Barınma & Giyim",
      image: "/assets/images-used/projects/cadir.webp",
      desc: "Evleri yıkılan sivil halkın havadan ve karadan zorlu kış şartlarından korunması için çadır kampları kuruyoruz.",
      link: `/${lang}/projects/cadir`,
      payLink: `/${lang}/pay/cadir`
    },
    {
      title: "Hijyen Paketi",
      price: "900 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/hijyen-paketi.webp",
      desc: "Altyapının çökmesi sonucu baş gösteren salgın hastalıkların önüne geçmek için hijyen setleri dağıtıyoruz.",
      link: `/${lang}/projects/hijyen-paketi`,
      payLink: `/${lang}/pay/hijyen-paketi`
    },
    {
      title: "Altyapı Çalışmaları",
      price: "1.000 TL",
      category: "Altyapı & Bina",
      image: "/assets/images-used/projects/altyapi-calismalari.webp",
      desc: "Saldırılarda zarar gören su hatlarını, yolları tamir ediyor; çadır alanlarını iş makineleriyle tesviye ediyoruz.",
      link: `/${lang}/projects/altyapi-calismalari`,
      payLink: `/${lang}/pay/altyapi-calismalari`
    },
    {
      title: "Hafızlık",
      price: "200 TL",
      category: "Eğitim",
      image: "/assets/images-used/projects/hafizlik.webp",
      desc: "Zorlu yaşam mücadelelerine rağmen eğitim ve inançlarını sürdüren Gazze halkına hafızlık desteği sağlıyoruz.",
      link: `/${lang}/projects/hafizlik`,
      payLink: `/${lang}/pay/hafizlik`
    },
    {
      title: "Kurban Bağışı",
      price: "15.000 TL",
      category: "Kurban",
      image: "/assets/images-used/projects/kurban-bagisi.webp",
      desc: "2026 yılı vekaletle kurban kesimlerini İslami usullere uygun gerçekleştiriyor, video ile raporluyoruz.",
      link: `/${lang}/projects/kurban-bagisi`,
      payLink: `/${lang}/pay/kurban-bagisi`
    },
    {
      title: "Yaralı Destek",
      price: "500 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/yarali-destek.webp",
      desc: "Saldırılarda ağır yaralanan ve tedavi amacıyla Mısır'a tahliye edilen Filistinlilere tıbbi destek oluyoruz.",
      link: `/${lang}/projects/yarali-destek`,
      payLink: `/${lang}/pay/yarali-destek`
    },
    {
      title: "Protez",
      price: "1.000 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/protez.webp",
      desc: "Uzuvlarını kaybeden savaş mağduru kardeşlerimize protez tedavisi sağlayarak hayata tutunmalarını hedefliyoruz.",
      link: `/${lang}/projects/protez`,
      payLink: `/${lang}/pay/protez`
    },
    {
      title: "Kardeş Aile",
      price: "5.000 TL",
      category: "Yetim & Aile",
      image: "/assets/images-used/projects/kardes-aile.webp",
      desc: "Aile reisi engelli, hasta veya şehit düşmüş dezavantajlı ailelerin aylık geçim yükümlülüğünü üstleniyoruz.",
      link: `/${lang}/projects/kardes-aile`,
      payLink: `/${lang}/pay/kardes-aile`
    },
    {
      title: "Yenidoğan Paketi",
      price: "1.500 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/yenidogan-paketi.webp",
      desc: "Gazze'de zorlu abluka koşullarında dünyaya gözlerini açan bebekler için acil mama, bez ve giyim ulaştırıyoruz.",
      link: `/${lang}/projects/yenidogan-paketi`,
      payLink: `/${lang}/pay/yenidogan-paketi`
    },
    {
      title: "Eğitim Destek",
      price: "1.500 TL",
      category: "Eğitim",
      image: "/assets/images-used/projects/egitim-destek.webp",
      desc: "Eğitim hakkı sekteye uğramış öğrencilere çadır sınıflarda eğitim materyalleri ve burs imkanı sağlıyoruz.",
      link: `/${lang}/projects/egitim-destek`,
      payLink: `/${lang}/pay/egitim-destek`
    },
    {
      title: "Sağlık Merkezleri",
      price: "500 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/saglik-merkezleri.webp",
      desc: "Gazze'de ayakta kalan toplam sağlık altyapısının ilaç, tıbbi sarf malzeme ve lojistik giderlerini karşılıyoruz.",
      link: `/${lang}/projects/saglik-merkezleri`,
      payLink: `/${lang}/pay/saglik-merkezleri`
    },
    {
      title: "Ambulans",
      price: "1.000 TL",
      category: "Sağlık",
      image: "/assets/images-used/projects/ambulans.webp",
      desc: "Saldırılarda zarar gören acil yardım filolarını destekliyor, aktif ambulansların yakıt ve bakımını yapıyoruz.",
      link: `/${lang}/projects/ambulans`,
      payLink: `/${lang}/pay/ambulans`
    }
  ];

  const categories = ["Tümü", "Gıda & Su", "Barınma & Giyim", "Sağlık", "Eğitim", "Nakdi Yardım", "Altyapı & Bina", "Yetim & Aile", "Kurban"];

  // --- FİLTRELEME MANTIĞI ---
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tümü" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- HERO HEADER SECTION --- */}
      <section className="relative w-full py-20 bg-gradient-to-r from-[#052c1a] to-[#0b5331] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#e31e24]"></span>
            <span className="text-[#e31e24] font-black tracking-widest text-xs uppercase">İnsan Derneği Faaliyetleri</span>
            <span className="w-8 h-[2px] bg-[#e31e24]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Yardım Projelerimiz
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            İnsani yardımın her alanında, profesyonel, sürdürülebilir ve tamamen <strong>şeffaf operasyonlar</strong> yürütüyoruz.
          </p>
        </div>
      </section>

      {/* --- FİLTRELEME & ARAMA BARBARI --- */}
      <section className="bg-gray-50 border-b border-gray-100 py-6 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Arama Girişi */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Proje adı ile ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-800 focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] transition-all"
            />
          </div>

          {/* Kategori Yatay Scroll Menü */}
          <div className="w-full lg:w-auto flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 snap-x">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 snap-start ${
                  selectedCategory === cat
                    ? "bg-[#e31e24] text-white shadow-md shadow-[#e31e24]/20"
                    : "bg-white border border-gray-100 text-gray-600 hover:border-[#0b5331]/30 hover:text-[#0b5331]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* --- PROJELER GRID ALANI --- */}
      <section className="py-16 bg-[#fcfcfc]">
        <div className="container mx-auto px-6">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <p className="text-gray-400 text-xl font-medium mb-4">Aradığınız kriterlere uygun aktif yardım projesi bulunamadı.</p>
              <button onClick={() => { setSearchTerm(""); setSelectedCategory("Tümü"); }} className="text-[#e31e24] font-bold hover:underline">
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* GÖRSEL ALANI */}
                  <Link href={project.link} className="block relative aspect-[5/4] overflow-hidden bg-gray-50">
                    <Image
                      src={project.image}
                      alt={`${project.title} insani yardım faaliyetleri`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Kategori Rozeti */}
                    <div className="absolute top-4 left-4 bg-[#0b5331] text-white px-3 py-1 text-[11px] font-bold rounded-md tracking-wide shadow">
                      {project.category}
                    </div>
                  </Link>

                  {/* İÇERİK ALANI */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-normal line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Fiyat ve Aksiyon Alanı */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Bağış Bedeli</span>
                        <span className="text-[#0b5331] text-2xl font-black tracking-tight">{project.price}</span>
                      </div>

                      {/* İnsander Klasik Kırmızı Bağış Butonu */}
                      <Link
                        href={project.payLink}
                        className="w-full bg-[#e31e24] text-white text-center py-3 rounded-xl font-black tracking-wide shadow-md shadow-[#e31e24]/10 hover:bg-[#b71c1c] active:scale-[0.98] transition-all duration-200"
                      >
                        Bağış Yap
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* --- ALT GÜVEN BANNERI --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#0b5331]/5 rounded-3xl p-8 md:p-12 border border-[#0b5331]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center lg:text-left flex-col sm:flex-row">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#e31e24]">
                <Heart className="w-8 h-8 fill-[#e31e24]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-950 mb-1">Kurumsal ve Güvenli Bağış Altyapısı</h4>
                <p className="text-gray-600 font-medium">Tüm online bağış operasyonlarınız 256-bit SSL güvenlik sertifikası güvencesiyle korunmaktadır.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+905010879198" className="bg-gray-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition">
                Destek Hattı
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
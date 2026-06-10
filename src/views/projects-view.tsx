"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ProjectsPage({ lang = "tr" }: { lang?: string }) {
  // --- GRUPLANMIŞ PROJE VERİLERİ ---
  const sections = [
    {
      id: "acil-ve-inadi",
      title: "Acil Yardımlar & İbadet Bağışları",
      subtitle: "Kriz anlarında hızlı reaksiyon gösterdiğimiz temel ve dini operasyonlarımız.",
      projects: [
        {
          title: "Kurban Bağışı",
          price: "15.000 TL",
          image: "/assets/images-used/projects/kurban-bagisi.webp",
          desc: "2026 yılı vekaletle kurban kesimlerini İslami usullere uygun gerçekleştiriyor, video ile raporluyoruz.",
          link: `/${lang}/projects/kurban-bagisi`,
        },
        {
          title: "Zekat Dağıtımı",
          price: "1.000 TL",
          image: "/assets/images-used/projects/zekat-dagitimi.webp",
          desc: "Emanet ettiğiniz zekat ve fitre bağışlarını şer-i şuruata uygun olarak muhtaç ailelere ulaştırıyoruz.",
          link: `/${lang}/projects/zekat-dagitimi`,
        },
        {
          title: "Nakdi Yardım",
          price: "500 TL",
          image: "/assets/images-used/projects/nakdi-yardim.webp",
          desc: "Zekat, fitre ve nakdi bağışlarınızı en doğru ve güvenilir şekilde ilk elden ihtiyaç sahiplerine teslim ediyoruz.",
          link: `/${lang}/projects/nakdi-yardim`,
        },
        {
          title: "Çeşitli Faaliyetler",
          price: "200 TL",
          image: "/assets/images-used/projects/cesitli-faaliyetler.webp",
          desc: "Ağır kriz altındaki bölgelerde ilk günden bu yana çok yönlü acil saha operasyonları yürütüyoruz.",
          link: `/${lang}/projects/cesitli-faaliyetler`,
        }
      ]
    },
    {
      id: "gida-ve-su",
      title: "Gıda & Temiz Su Güvencesi",
      subtitle: "Ambargo ve lojistik zorluklara rağmen sürdürdüğümüz beslenme ve su projelerimiz.",
      projects: [
        {
          title: "Gıda Kolisi",
          price: "1.500 TL",
          image: "/assets/images-used/projects/gida-kolisi.webp",
          desc: "Filistin ve Gazze başta olmak üzere kriz bölgelerine on binlerce gıda kolisi ulaştırıyoruz.",
          link: `/${lang}/projects/gida-kolisi`,
        },
        {
          title: "İçme Suyu",
          price: "12.000 TL",
          image: "/assets/images-used/projects/icme-suyu.webp",
          desc: "Gazze Şeridi'ndeki altyapı saldırıları sonrası tankerler ve kuyularla temiz su erişimi sağlıyoruz.",
          link: `/${lang}/projects/icme-suyu`,
        },
        {
          title: "Ekmek - Un",
          price: "800 TL",
          image: "/assets/images-used/projects/ekmek-un.webp",
          desc: "Saldırıların gölgesinde un ve unlu mamul tedariği sağlayarak fırınların çalışmasına destek oluyoruz.",
          link: `/${lang}/projects/ekmek-un`,
        },
        {
          title: "Sıcak Yemek",
          price: "130 TL",
          image: "/assets/images-used/projects/sicak-yemek.webp",
          desc: "Bölgedeki aşevlerimizde her gün binlerce savaş mağduru aile için sıcak yemek pişirip dağıtıyoruz.",
          link: `/${lang}/projects/sicak-yemek`,
        }
      ]
    },
    {
      id: "barinma-altyapi",
      title: "Barınma & Altyapı Çalışmaları",
      subtitle: "Yıkılan yaşam alanlarını korunaklı kılmak ve aileleri güvenceye almak için yürüttüğümüz projeler.",
      projects: [
        {
          title: "Çadır",
          price: "9.000 TL",
          image: "/assets/images-used/projects/cadir.webp",
          desc: "Evleri yıkılan sivil halkın havadan ve karadan zorlu kış şartlarından korunması için çadır kampları kuruyoruz.",
          link: `/${lang}/projects/cadir`,
        },
        {
          title: "Altyapı Çalışmaları",
          price: "1.000 TL",
          image: "/assets/images-used/projects/altyapi-calismalari.webp",
          desc: "Zarar gören su hatlarını tamir ediyor, çadır alanlarını iş makineleriyle yaşanabilir kılıyoruz.",
          link: `/${lang}/projects/altyapi-calismalari`,
        },
        {
          title: "Kıyafet",
          price: "1.000 TL",
          image: "/assets/images-used/projects/kiyafet.webp",
          desc: "Ramazan ve Kurban bayramlarında Gazze, Lübnan ve Mısır'daki yetim çocuklara kıyafet desteği sunuyoruz.",
          link: `/${lang}/projects/kiyafet`,
        },
        {
          title: "Kardeş Aile",
          price: "5.000 TL",
          image: "/assets/images-used/projects/kardes-aile.webp",
          desc: "Aile reisi engelli, hasta veya şehit düşmüş dezavantajlı ailelerin aylık geçim yükümlülüğünü üstleniyoruz.",
          link: `/${lang}/projects/kardes-aile`,
        }
      ]
    },
    {
      id: "saglik-egitim",
      title: "Sağlık, Hijyen & Eğitim Seferberliği",
      subtitle: "Geleceğimizi inşa eden eğitim faaliyetleri ile hayat kurtaran medikal operasyonlarımız.",
      projects: [
        {
          title: "Ambulans",
          price: "1.000 TL",
          image: "/assets/images-used/projects/ambulans.webp",
          desc: "Saldırılarda zarar gören acil yardım filolarını destekliyor, aktif ambulansların yakıt ve bakımını yapıyoruz.",
          link: `/${lang}/projects/ambulans`,
        },
        {
          title: "Sağlık Merkezleri",
          price: "500 TL",
          image: "/assets/images-used/projects/saglik-merkezleri.webp",
          desc: "Gazze'de ayakta kalan kısıtlı sağlık altyapısının ilaç, tıbbi sarf malzeme ve lojistik giderlerini karşılıyoruz.",
          link: `/${lang}/projects/saglik-merkezleri`,
        },
        {
          title: "Protez",
          price: "1.000 TL",
          image: "/assets/images-used/projects/protez.webp",
          desc: "Uzuvlarını kaybeden savaş mağduru kardeşlerimize protez tedavisi sağlayarak hayata tutunmalarını sağlıyoruz.",
          link: `/${lang}/projects/protez`,
        },
        {
          title: "Yaralı Destek",
          price: "500 TL",
          image: "/assets/images-used/projects/yarali-destek.webp",
          desc: "Saldırılarda ağır yaralanan ve tedavi amacıyla Mısır'a tahliye edilen Filistinlilere tıbbi destek oluyoruz.",
          link: `/${lang}/projects/yarali-destek`,
        },
        {
          title: "Yenidoğan Paketi",
          price: "1.500 TL",
          image: "/assets/images-used/projects/yenidogan-paketi.webp",
          desc: "Zorlu abluka koşullarında dünyaya gözlerini açan bebekler için acil mama, bez ve giyim ulaştırıyoruz.",
          link: `/${lang}/projects/yenidogan-paketi`,
        },
        {
          title: "Hijyen Paketi",
          price: "900 TL",
          image: "/assets/images-used/projects/hijyen-paketi.webp",
          desc: "Altyapının çökmesi sonucu baş gösteren salgın hastalıkların önüne geçmek için hijyen setleri dağıtıyoruz.",
          link: `/${lang}/projects/hijyen-paketi`,
        },
        {
          title: "Eğitim Destek",
          price: "1.500 TL",
          image: "/assets/images-used/projects/egitim-destek.webp",
          desc: "Eğitim hakkı sekteye uğramış öğrencilere çadır sınıflarda eğitim materyalleri ve burs imkanı sağlıyoruz.",
          link: `/${lang}/projects/egitim-destek`,
        },
        {
          title: "Hafızlık",
          price: "200 TL",
          image: "/assets/images-used/projects/hafizlik.webp",
          desc: "Zorlu yaşam mücadelelerine rağmen eğitim ve inançlarını sürdüren Gazze halkına hafızlık desteği sağlıyoruz.",
          link: `/${lang}/projects/hafizlik`,
        }
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- PREMIUM HERO BANNER --- */}
      <section className="relative w-full py-24 bg-gradient-to-r from-[#052c1a] to-[#0b5331] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
            <span className="text-[#b71c1c] font-bold tracking-[0.25em] text-xs uppercase">Şeffaf ve Profesyonel İnsani Yardım</span>
            <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Aktif Yardım Projelerimiz
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            İnsan Derneği operasyonel gücüyle sahada; emanetlerinizi İslami kurallara ve uluslararası standartlara uygun olarak ulaştırıyoruz.
          </p>
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
              ]
            })
          }}
        />
      </section>

      {/* --- DINAMIK GRUPLANMIŞ SECTIONLAR --- */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="py-20 bg-[#fcfcfc] border-b border-gray-100 last:border-none">
          <div className="container mx-auto px-6">
            
            {/* Kategori Başlık Bloğu */}
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
                <span className="text-[#b71c1c] font-bold tracking-[0.25em] text-xs uppercase">{section.title}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {section.title} Sahası
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                {section.subtitle}
              </p>
            </div>

            {/* ÇALIŞAN KUSURSUZ GRID YAPISI (Tam İstediğin Şablon) */}
            <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
              {section.projects.map((item, idx) => {
                const slug = item.link || "#";
                return (
                  <div
                    key={idx}
                    className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    {/* GÖRSEL ALANI */}
                    <Link href={slug} className="block relative aspect-[5/4] overflow-hidden bg-gray-50">
                      <Image
                        src={item.image}
                        alt={`${item.title} 2026 insani yardım projesi`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-[#b71c1c] text-white px-3 py-1 text-xs font-bold rounded">
                        İnsan Derneği 2026
                      </div>
                    </Link>

                    {/* KART İÇERİK ALANI */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#0b5331] text-2xl font-black mb-3">
                        {item.price}
                      </p>
                      
                      <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                        {item.desc}
                      </p>

                      {/* İÇ SAYFA BUTON MİMARİSİ TAKLİDİ */}
                      <Link
                        href={slug}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5331] px-5 py-3.5 text-center text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#084326] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0b5331]/40 focus:ring-offset-2"
                        aria-label={`${item.title} bağışı sayfasına git`}
                      >
                        <span>{item.title} Bağışı Yap</span>
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      ))}

      {/* --- ALT GÜVENLİK VE DESTEK ALANI --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#0b5331]/5 rounded-3xl p-8 md:p-12 border border-[#0b5331]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center lg:text-left flex-col sm:flex-row">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#b71c1c]">
                <Heart className="w-8 h-8 fill-[#b71c1c]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-950 mb-1">Şeffaf ve İzlenebilir Bağış Altyapısı</h4>
                <p className="text-gray-600 font-medium">Bağışlarınız şoklanmış gıda koridorları ve güvenli lojistik ağımızla bizzat ihtiyaç sahibine ulaştırılır.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+905010879198" className="bg-gray-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition">
                Kurumsal Destek Hattı
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
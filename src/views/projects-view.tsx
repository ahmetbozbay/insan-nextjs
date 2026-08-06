"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Home } from "lucide-react";

interface ProjectsViewProps {
  lang?: string;
  category?: string;
}

export default function ProjectsView({ lang = "tr", category = "Tümü" }: ProjectsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState(category || "Tümü");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  // --- MAKSİMUM SEO & "GAZZE BAĞIŞ" ODAKLI MİMARİ ---
  const sections = [
    {
      id: "acil-ve-ibadet",
      badge: "GAZZE BAĞIŞ & ACİL YARDIM",
      title: "Gazze Bağış Projeleri: Acil Yardım & İbadet",
      subtitle: "Gazze, Lübnan ve Ürdün'deki kriz bölgelerine online Gazze bağış olanağı ve acil insani operasyonlarımız.",
      projects: [
        {
          title: "Gazze Kurban Bağışı",
          price: "15.000 TL",
          image: "/assets/images-used/projects/kurban-bagisi.webp",
          desc: "Gazze ve mülteci kamplarında 2026 yılı vekaletle Gazze kurban bağışı kesimlerini İslami usullere uygun yapıyor, video ile raporluyoruz.",
          link: `/${lang}/gazze-bagis/kurban-bagisi`,
          category: "Kurban",
          buttonText: "Gazze Kurban Bağışı Yap"
        },
        {
          title: "Gazze Zekat Bağışı",
          price: "1.000 TL",
          image: "/assets/images-used/projects/zekat-dagitimi.webp",
          desc: "Emanet ettiğiniz Gazze zekat bağışı ve fitrelerinizi, Filistin ve Lübnan'daki savaş mağduru muhtaç ailelere doğrudan teslim ediyoruz.",
          link: `/${lang}/gazze-bagis/zekat-dagitimi`,
          category: "Nakdi Yardım",
          buttonText: "Gazze Zekat Bağışı Yap"
        },
        {
          title: "Gazze Nakdi Bağış",
          price: "500 TL",
          image: "/assets/images-used/projects/nakdi-yardim.webp",
          desc: "Acil nakit ihtiyacı olan Gazzeli aileler için Gazze nakdi bağış seçeneğiyle doğrudan nakit yardımı ulaştırıyoruz.",
          link: `/${lang}/gazze-bagis/nakdi-yardim`,
          category: "Nakdi Yardım",
          buttonText: "Gazze Nakdi Bağış Yap"
        },
        {
          title: "Gazze Saha Yardım Bağışı",
          price: "200 TL",
          image: "/assets/images-used/projects/cesitli-faaliyetler.webp",
          desc: "Gazze, Ürdün ve Lübnan sınırındaki mülteci kamplarında genel acil saha operasyonları için Gazze bağış desteği sağlayın.",
          link: `/${lang}/gazze-bagis/cesitli-faaliyetler`,
          category: "Genel",
          buttonText: "Gazze Saha Bağışı Yap"
        }
      ]
    },
    {
      id: "gida-ve-su",
      badge: "GAZZE GIDA & SU BAĞIŞLARI",
      title: "Gazze Gıda & Temiz Su Bağış Projeleri",
      subtitle: "Abluka altındaki Gazze Şeridi ve sığınmacı kampları için sürdürülen hayati gıda ve su Gazze bağış projelerimiz.",
      projects: [
        {
          title: "Gazze Sıcak Yemek Bağışı",
          price: "130 TL",
          image: "/assets/images-used/projects/sicak-yemek.webp",
          desc: "Gazze'deki aşevlerimizde her gün binlerce aileye sıcak yemek dağıtıyoruz. Gazze sıcak yemek bağışı ile bir öğün destek olun.",
          link: `/${lang}/gazze-bagis/gazze-yemek-yardimi`,
          category: "Gıda & Su",
          buttonText: "Gazze Yemek Bağışı Yap"
        },
        {
          title: "Gazze Gıda Kolisi Bağışı",
          price: "1.500 TL",
          image: "/assets/images-used/projects/gida-kolisi.webp",
          desc: "Abluka altındaki bölgelere ve mültecilere temel gıda malzemeleri ulaştırmak için Gazze gıda kolisi bağışı yapabilirsiniz.",
          link: `/${lang}/gazze-bagis/gida-kolisi`,
          category: "Gıda & Su",
          buttonText: "Gazze Gıda Bağışı Yap"
        },
        {
          title: "Gazze İçme Suyu Bağışı",
          price: "12.000 TL",
          image: "/assets/images-used/projects/icme-suyu.webp",
          desc: "Tahrip olan altyapı nedeniyle Gazze Şeridi'ne tankerlerle su taşıyoruz. Gazze temiz su bağışı ile hayat verin.",
          link: `/${lang}/gazze-bagis/icme-suyu`,
          category: "Gıda & Su",
          buttonText: "Gazze Su Bağışı Yap"
        },
        {
          title: "Gazze Ekmek & Un Bağışı",
          price: "800 TL",
          image: "/assets/images-used/projects/ekmek-un.webp",
          desc: "Fırınların çalışmasını sağlamak ve halkın ekmeğe erişimi için Gazze un ve ekmek bağışı kampanyamıza destek olun.",
          link: `/${lang}/gazze-bagis/ekmek-un`,
          category: "Gıda & Su",
          buttonText: "Gazze Ekmek Bağışı Yap"
        }
      ]
    },
    {
      id: "barinma-altyapi",
      badge: "GAZZE BARINMA & ALTYAPI BAĞIŞLARI",
      title: "Gazze Barınma & Altyapı Bağış Projeleri",
      subtitle: "Yıkılan yaşam alanlarında Gazzeli mülteci aileleri korunaklı kılmak için yürütülen Gazze barınma bağışları.",
      projects: [
        {
          title: "Gazze Kardeş Aile Bağışı",
          price: "5.000 TL",
          image: "/assets/images-used/projects/kardes-aile.webp",
          desc: "Aile reisi şehit düşmüş veya engelli kalmış ailelerin aylık bakımını Gazze kardeş aile bağışı ile üstlenin.",
          link: `/${lang}/gazze-bagis/kardes-aile`,
          category: "Yetim & Aile",
          buttonText: "Kardeş Aile Bağışı Yap"
        },
        {
          title: "Gazze Altyapı Desteği Bağışı",
          price: "1.000 TL",
          image: "/assets/images-used/projects/altyapi-calismalari.webp",
          desc: "Kamp alanlarında su hatlarını tamir ediyor, altyapıyı yaşanabilir kılıyoruz. Gazze altyapı bağışı ile destek verin.",
          link: `/${lang}/gazze-bagis/altyapi-calismalari`,
          category: "Altyapı & Bina",
          buttonText: "Gazze Altyapı Bağışı Yap"
        },
        {
          title: "Gazze Kıyafet & Kışlık Bağış",
          price: "1.000 TL",
          image: "/assets/images-used/projects/kiyafet.webp",
          desc: "Gazze, Lübnan ve Mısır'daki yetim çocuklara kışlık giysi ulaştırmak için Gazze kıyafet bağışında bulunabilirsiniz.",
          link: `/${lang}/gazze-bagis/kiyafet`,
          category: "Barınma & Giyim",
          buttonText: "Gazze Kıyafet Bağışı Yap"
        },
        {
          title: "Gazze Çadır & Barınma Bağışı",
          price: "9.000 TL",
          image: "/assets/images-used/projects/cadir.webp",
          desc: "Evsiz kalan sivil halkı zorlu hava şartlarından korumak için Gazze çadır bağışı ile güvenli yaşam alanları kuruyoruz.",
          link: `/${lang}/gazze-bagis/cadir`,
          category: "Barınma & Giyim",
          buttonText: "Gazze Çadır Bağışı Yap"
        }
      ]
    },
    {
      id: "saglik-egitim",
      badge: "GAZZE SAĞLIK & EĞİTİM BAĞIŞLARI",
      title: "Gazze Sağlık, Hijyen & Eğitim Bağış Seferberliği",
      subtitle: "Hayat kurtaran medikal operasyonlar ve geleceği inşa eden eğitim faaliyetleri için Gazze bağış projeleri.",
      projects: [
        {
          title: "Gazze Ambulans & Yakıt Bağışı",
          price: "1.000 TL",
          image: "/assets/images-used/projects/ambulans.webp",
          desc: "Aktif ambulansların can kurtarmaya devam edebilmesi için Gazze ambulans yakıtı ve tıbbi bakım bağışı sağlayın.",
          link: `/${lang}/gazze-bagis/ambulans`,
          category: "Sağlık",
          buttonText: "Gazze Ambulans Bağışı Yap"
        },
        {
          title: "Gazze Sağlık Merkezi Bağışı",
          price: "500 TL",
          image: "/assets/images-used/projects/saglik-merkezleri.webp",
          desc: "Kısıtlı sağlık altyapısının ilaç ve medikal sarf malzemelerini karşılamak üzere Gazze sağlık bağışında bulunun.",
          link: `/${lang}/gazze-bagis/saglik-merkezleri`,
          category: "Sağlık",
          buttonText: "Gazze Sağlık Bağışı Yap"
        },
        {
          title: "Gazze Protez Tedavisi Bağışı",
          price: "1.000 TL",
          image: "/assets/images-used/projects/protez.webp",
          desc: "Saldırılarda uzuvlarını kaybeden savaş mağduru kardeşlerimize Gazze protez tedavisi bağışı ile umut olun.",
          link: `/${lang}/gazze-bagis/protez`,
          category: "Sağlık",
          buttonText: "Gazze Protez Bağışı Yap"
        },
        {
          title: "Gazze Yaralı Destek Bağışı",
          price: "500 TL",
          image: "/assets/images-used/projects/yarali-destek.webp",
          desc: "Tahliye edilen ağır yaralı Filistinlilerin medikal giderleri için Gazze yaralı tedavi bağışı kabul ediyoruz.",
          link: `/${lang}/gazze-bagis/yarali-destek`,
          category: "Sağlık",
          buttonText: "Yaralı Destek Bağışı Yap"
        },
        {
          title: "Gazze Yenidoğan Bebek Bağışı",
          price: "1.500 TL",
          image: "/assets/images-used/projects/yenidogan-paketi.webp",
          desc: "Zor şartlarda doğan bebekler için acil mama ve bezi kapsayan Gazze yenidoğan bebek bağışı ulaştırıyoruz.",
          link: `/${lang}/gazze-bagis/yenidogan-paketi`,
          category: "Sağlık",
          buttonText: "Gazze Bebek Bağışı Yap"
        },
        {
          title: "Gazze Hijyen Paketi Bağışı",
          price: "900 TL",
          image: "/assets/images-used/projects/hijyen-paketi.webp",
          desc: "Salgın hastalıkların önüne geçmek adına mülteci kamplarında Gazze hijyen paketi bağışı dağıtımları gerçekleştiriyoruz.",
          link: `/${lang}/gazze-bagis/hijyen-paketi`,
          category: "Sağlık",
          buttonText: "Gazze Hijyen Bağışı Yap"
        },
        {
          title: "Gazze Eğitim Desteği Bağışı",
          price: "1.500 TL",
          image: "/assets/images-used/projects/egitim-destek.webp",
          desc: "Çadır sınıflarda eğitim alan öğrencilerin çanta ve materyal ihtiyacı için Gazze eğitim bağışı yapabilirsiniz.",
          link: `/${lang}/gazze-bagis/egitim-destek`,
          category: "Eğitim",
          buttonText: "Gazze Eğitim Bağışı Yap"
        },
        {
          title: "Gazze Hafızlık Eğitimi Bağışı",
          price: "200 TL",
          image: "/assets/images-used/projects/hafizlik.webp",
          desc: "Kur'an eğitimi alan Gazze ve mülteci kampı gençlerine Gazze hafızlık bağışı ile burs desteği verin.",
          link: `/${lang}/gazze-bagis/hafizlik`,
          category: "Eğitim",
          buttonText: "Gazze Hafızlık Bağışı Yap"
        }
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- HERO BANNER (H1 & KELİME YOĞUNLUĞU OPTİMİZE EDİLDİ) --- */}
      <header className="relative w-full py-20 bg-gradient-to-r from-[#052c1a] to-[#0b5331] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
            <span className="text-[#b71c1c] font-bold tracking-[0.25em] text-xs uppercase">ONLINE GAZZE BAĞIŞ & ACİL YARDIM PORTALI</span>
            <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
          </div>
          
          {/* SEO İÇİN ANA H1 ETİKETİ */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
            Gazze Bağış & Acil Yardım Projeleri
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Gazze, Lübnan ve Ürdün'deki mülteci ve kriz mağdurları için online <strong>Gazze bağış</strong> projelerimizi inceleyin; zekat, kurban ve acil yardımlarınızı İnsan Derneği güvencesiyle ulaştırın.
          </p>
        </div>
      </header>

      {/* --- BREADCRUMB --- */}
      <section className="bg-gray-50 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="py-5">
          <div className="container mx-auto px-6">
            <ol className="flex items-center flex-wrap text-base md:text-sm font-medium">
              <li>
                <Link href={`/${lang}`} className="flex items-center text-gray-500 hover:text-[#0b5331] transition-colors">
                  <Home className="w-4 h-4 mr-2" />
                  Ana Sayfa
                </Link>
              </li>
              <li className="mx-3 text-gray-300">/</li>
              <li>
                <Link href={`/${lang}/gazze-bagis`} className="text-[#0b5331] font-bold" aria-current="page">
                  Gazze Bağış Projeleri
                </Link>
              </li>
            </ol>
          </div>
        </nav>
        
        {/* SEO: JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
                    "name": "Gazze Bağış Projeleri",
                    "item": "https://insander.org/tr/gazze-bagis"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Gazze Bağış ve Acil Yardım Projeleri",
                "description": "Gazze, Lübnan ve Ürdün'deki mülteciler için acil insani yardım, gıda, zekat ve kurban Gazze bağış projeleri.",
                "url": "https://insander.org/tr/gazze-bagis"
              }
            ])
          }}
        />
      </section>

      {/* --- SECTİON BAZLI LİSTELEME --- */}
      {sections.map((section) => {
        const hasMatchingProject = section.projects.some(p => selectedCategory === "Tümü" || p.category === selectedCategory);
        if (!hasMatchingProject) return null;

        const displayProjects = section.projects.filter(p => selectedCategory === "Tümü" || p.category === selectedCategory);

        return (
          <section key={section.id} id={section.id} className="py-16 md:py-24 bg-[#fcfcfc] border-b border-gray-100 last:border-none">
            <div className="container mx-auto px-6">
              
              <header className="max-w-3xl mb-14">
                {/* ÜST MİNİ BAŞLIK / ROZET */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-[2px] bg-[#b71c1c]"></span>
                  <span className="text-[#b71c1c] font-bold tracking-[0.25em] text-xs uppercase">{section.badge}</span>
                </div>
                
                {/* SEO CRITICAL: H2 BAŞLIĞINDA 'GAZZE BAĞIŞ' DOĞRUDAN YER ALIYOR */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                  {section.subtitle}
                </p>
              </header>

              {/* 3'LÜ GRID YAPINIZ BOZULMADAN KORUNDU */}
              <div className="grid gap-6 lg:gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                {displayProjects.map((item, idx) => (
                  <article
                    key={idx}
                    className="group w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    {/* GÖRSEL ALANI */}
                    <Link href={item.link} className="block relative aspect-[5/4] overflow-hidden bg-gray-50 focus:outline-none">
                      <Image
                        src={item.image}
                        alt={`${item.title} - İnsan Derneği Gazze Bağış`}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* GÖRSEL ROZETİ SEO ODAKLI GÜNCELLENDİ */}
                      <div className="absolute top-4 left-4 bg-[#b71c1c] text-white px-3 py-1 text-xs font-bold rounded shadow-sm">
                        Gazze Bağış 2026
                      </div>
                    </Link>

                    {/* İÇERİK ALANI */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* H3 KART BAŞLIĞI: HEDEF KELİME DAHİL */}
                      <Link href={item.link} className="focus:outline-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b5331] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </Link>
                      
                      <p className="text-[#0b5331] text-2xl font-black mb-3">
                        {item.price}
                      </p>
                      
                      <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* BUTON METNİ: HEDEF KELİME DAHİL */}
                      <Link
                        href={item.link}
                        title={`${item.title} için online bağış yapın`}
                        className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5331] px-5 py-3.5 text-center text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#084326] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0b5331]/40 focus:ring-offset-2"
                      >
                        <span>{item.buttonText}</span>
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </section>
        );
      })}

      {/* --- ALT GÜVENLİK VE DESTEK ALANI --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#0b5331]/5 rounded-3xl p-8 md:p-12 border border-[#0b5331]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center lg:text-left flex-col sm:flex-row">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#b71c1c]">
                <Heart className="w-8 h-8 fill-[#b71c1c]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-950 mb-1">Güvenli Online Gazze Bağış Altyapısı</h4>
                <p className="text-gray-600 font-medium">Gazze bağışlarınız şeffaflıkla Lübnan, Ürdün ve Gazze'deki sığınmacılara bizzat ulaştırılır.</p>
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
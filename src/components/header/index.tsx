"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// SAF SVG İKONLAR
const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const ChevronDownIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

export default function Header({ lang = "tr" }: { lang?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [kurumsalMobileOpen, setKurumsalMobileOpen] = useState(false);

  const kurumsalLinks = [
    { label: "Hakkımızda", href: `/${lang}/about/about-us` },
    { label: "Misyon – Vizyon", href: `/${lang}/about/mission-vision` },
    { label: "Yetkili Kurullar", href: `/${lang}/about/board-of-directors` },
    { label: "Tüzük", href: `/${lang}/about/bylaws` },
    { label: "Çalışma İlkelerimiz", href: `/${lang}/about/our-working-principles` },
    { label: "Hesap Numaraları", href: `/${lang}/about/account-numbers` },
    { label: "Paydaş Derneklerimiz", href: `/${lang}/about/our-partner-associations` },
    { label: "Sık Sorulan Sorular", href: `/${lang}/about/frequently-asked-questions` },
    { label: "Belgeler", href: `/${lang}/about/documents` },
    { label: "KVKK", href: `/${lang}/about/kvkk` },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* DERİNLİKLİ VE STICKY HEADER MİMARİSİ */
        .hdr-root { 
          position: sticky; 
          top: 0; 
          z-index: 999999; 
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(12px); 
          -webkit-backdrop-filter: blur(12px); 
          border-bottom: 1px solid rgba(0, 0, 0, 0.06); 
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08); 
          font-family: var(--font-inter), system-ui, sans-serif; 
          transition: all 0.3s ease;
        }
        
        .hdr-topbar { 
          display: none; 
          background: #052c1a; 
          color: #ffffff; 
          font-size: 13px; 
          padding: 8px 0; 
          border-bottom: 1px solid rgba(255,255,255,0.08); 
        }
        
        .hdr-container { max-width: 1320px; margin: 0 auto; padding: 0 16px; width: 100%; box-sizing: border-box; }
        
        /* MOBİL BÖLÜM (< 992px) */
        .hdr-mobile-bar { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; }
        .hdr-logo-mobile { display: flex; align-items: center; width: 135px; text-decoration: none; flex-shrink: 0; }
        .hdr-mobile-right { display: flex; align-items: center; gap: 8px; }
        
        /* MASAÜSTÜ BÖLÜM (>= 992px) */
        .hdr-desktop-bar { display: none; }
        
        /* İNCE VE SÜZÜLEN MENÜ LİNKLERİ */
        .hdr-link { 
          color: #090E0D; 
          font-weight: 700; 
          text-decoration: none; 
          font-size: 15px; 
          display: inline-flex; 
          align-items: center; 
          gap: 5px; 
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease; 
          white-space: nowrap; 
        }
        .hdr-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #03562E;
          transition: width 0.2s ease-in-out;
        }
        .hdr-link:hover { color: #03562E; }
        .hdr-link:hover:after { width: 100%; }
        
        /* DROPDOWN KUTUSU & DERİNLİK GÖLGESİ */
        .hdr-dropdown { position: relative; display: inline-block; }
        .hdr-dropdown-btn { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
        .hdr-dropdown-box { 
          display: none; 
          position: absolute; 
          top: 100%; 
          left: -20px; 
          width: 460px; 
          background: #ffffff; 
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.18); 
          border: 1px solid rgba(0,0,0,0.06); 
          border-radius: 16px; 
          padding: 16px; 
          z-index: 999999; 
          grid-template-columns: 1fr 1fr; 
          gap: 6px; 
        }
        .hdr-dropdown:hover .hdr-dropdown-box { display: grid; }
        .hdr-sublink { 
          display: block; 
          padding: 10px 12px; 
          color: #374151; 
          text-decoration: none; 
          font-size: 13.5px; 
          font-weight: 600; 
          border-radius: 8px; 
          transition: all 0.2s; 
          text-align: left; 
        }
        .hdr-sublink:hover { background: #E5F1FF; color: #03562E; transform: translateX(3px); }
        
        /* BAĞIŞ YAP BUTONU */
        .hdr-donate-btn { 
          display: inline-flex; 
          align-items: center; 
          gap: 7px; 
          background: linear-gradient(135deg, #03562E 0%, #004222 100%); 
          color: #ffffff; 
          padding: 10px 24px; 
          border-radius: 50px; 
          text-decoration: none; 
          font-weight: 800; 
          font-size: 14px; 
          white-space: nowrap; 
          transition: all 0.25s ease; 
          box-shadow: 0 8px 20px -4px rgba(3,86,46,0.35); 
        }
        .hdr-donate-btn:hover { 
          background: linear-gradient(135deg, #b71c1c 0%, #880e0e 100%); 
          transform: translateY(-2px); 
          box-shadow: 0 12px 24px -4px rgba(183,28,28,0.4); 
        }
        
        .hdr-burger-btn { display: flex; align-items: center; justify-content: center; background: #f3f4f6; border: none; width: 38px; height: 38px; border-radius: 10px; cursor: pointer; color: #111827; }
        .hdr-mobile-drawer { display: none; background: #ffffff; border-top: 1px solid #f3f4f6; padding: 20px; position: absolute; top: 100%; left: 0; right: 0; z-index: 999999; box-shadow: 0 15px 30px rgba(0,0,0,0.12); max-height: 80vh; overflow-y: auto; }
        .hdr-mobile-drawer.open { display: block; }
        .hdr-m-link { display: block; padding: 14px 0; border-bottom: 1px solid #f9fafb; color: #111827; font-weight: 700; text-decoration: none; font-size: 15px; }

        /* MASAÜSTÜ MEDYA SORGUSU (>= 992px) */
        @media (min-width: 992px) {
          .hdr-topbar { display: block; }
          .hdr-mobile-bar { display: none; }
          
          .hdr-desktop-bar { 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            padding: 12px 0; 
          }
          
          .hdr-nav-group-left { display: flex; align-items: center; gap: 32px; flex: 1; justify-content: flex-start; }
          .hdr-nav-group-right { display: flex; align-items: center; gap: 32px; flex: 1; justify-content: flex-end; }
          
          .hdr-logo-center { 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 210px; 
            text-decoration: none; 
            flex-shrink: 0;
            margin: 0 20px;
          }
          .hdr-logo-center img { width: 100%; height: auto; object-fit: contain; display: block; }
        }
      `}} />

      <header className="hdr-root">
        
        {/* 1. ÜST BİLGİ BARI */}
        <div className="hdr-topbar">
          <div className="hdr-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <a href="tel:+905010879198" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#25D366' }}>📞</span>
                <strong>+90 (501) 087 91 98</strong>
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <span style={{ color: '#e5e7eb' }}>Gazze, Lübnan & Ürdün Acil İnsani Yardım Seferberliği</span>
            </div>
            <Link href={`/${lang}/about/account-numbers`} style={{ color: '#A1DDD2', fontWeight: 600, textDecoration: 'none' }}>
              Banka Hesap Numaraları
            </Link>
          </div>
        </div>

        <div className="hdr-container">
          
          {/* 2. MASAÜSTÜ HEADER */}
          <div className="hdr-desktop-bar">
            
            {/* SOL MENÜ GRUBU */}
            <div className="hdr-nav-group-left">
              <Link href={`/${lang}`} className="hdr-link">Ana Sayfa</Link>
              
              <div className="hdr-dropdown">
                <button className="hdr-link hdr-dropdown-btn">
                  Kurumsal <ChevronDownIcon />
                </button>
                <div className="hdr-dropdown-box">
                  {kurumsalLinks.map((item, idx) => (
                    <Link key={idx} href={item.href} className="hdr-sublink">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={`/${lang}/gazze-bagis`} className="hdr-link">Neler Yapıyoruz</Link>
            </div>

            {/* MERKEZ LOGO */}
            <Link href={`/${lang}`} className="hdr-logo-center">
              <Image
                src="/assets/images-used/projects/insander-logo.webp"
                alt="İnsan Derneği Logo"
                width={210}
                height={55}
                priority
              />
            </Link>

            {/* SAĞ MENÜ GRUBU */}
            <div className="hdr-nav-group-right">
              <Link href={`/${lang}/blog`} className="hdr-link">Haberler</Link>
              <Link href={`/${lang}/contact`} className="hdr-link">İletişim</Link>
              
              <Link href={`/${lang}/gazze-bagis`} className="hdr-donate-btn">
                <HeartIcon /> BAĞIŞ YAP
              </Link>
            </div>

          </div>

          {/* 3. MOBİL HEADER */}
          <div className="hdr-mobile-bar">
            <Link href={`/${lang}`} className="hdr-logo-mobile">
              <Image
                src="/assets/images-used/projects/insander-logo.webp"
                alt="İnsan Derneği Logo"
                width={135}
                height={40}
                priority
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Link>

            <div className="hdr-mobile-right">
              <Link href={`/${lang}/gazze-bagis`} className="hdr-donate-btn" style={{ padding: '8px 14px', fontSize: '12px' }}>
                <HeartIcon /> BAĞIŞ YAP
              </Link>
              
              <button onClick={() => setMobileOpen(!mobileOpen)} className="hdr-burger-btn" aria-label="Mobil Menü">
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

        </div>

        {/* 4. MOBİL AÇILIR DRAWER */}
        <div className={`hdr-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
          <Link href={`/${lang}`} onClick={() => setMobileOpen(false)} className="hdr-m-link">Ana Sayfa</Link>
          
          <div>
            <button 
              onClick={() => setKurumsalMobileOpen(!kurumsalMobileOpen)}
              className="hdr-m-link" 
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', border: 'none', background: 'none' }}
            >
              Kurumsal <ChevronDownIcon />
            </button>
            {kurumsalMobileOpen && (
              <div style={{ paddingLeft: '15px', background: '#f9fafb', borderRadius: '8px', padding: '10px' }}>
                {kurumsalLinks.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', color: '#4b5563', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={`/${lang}/gazze-bagis`} onClick={() => setMobileOpen(false)} className="hdr-m-link">Neler Yapıyoruz</Link>
          <Link href={`/${lang}/blog`} onClick={() => setMobileOpen(false)} className="hdr-m-link">Haberler</Link>
          <Link href={`/${lang}/contact`} onClick={() => setMobileOpen(false)} className="hdr-m-link">İletişim</Link>
        </div>

      </header>
    </>
  );
}
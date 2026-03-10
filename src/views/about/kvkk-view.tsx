import FaqsArea from "@/components/faq";

export interface AboutUsViewProps {
  lang?: string;
}

export default async function KvkkView({ lang = "en" }: AboutUsViewProps) {
  const faqs = [
    {
      // title: "Insan Dernegin hakkinda",
      //   content:"Lorem ipsum dolor sit amet consectetur. Nibh pellentesque vel sed",
      additionalContent: [
        `İnsan Derneği, savaş, doğal afet vb. nedenlerde faaliyetlerini sürdürdüğü bölgelerde gösterdiği
hassasiyetlerini kişisel verilerin güvenliği hususunda da göstermektedir`,
        `İnsan Derneği, her türlü mecradaki ziyaretçilerimize ait özel ve genel nitelikli kişisel verilerin 6698 sayılı
Kişisel Verilerin Korunması Kanunu, Kanun’a bağlı yürürlüğe koyulan ve koyulacak ikincil düzenlemelere
(yönetmelik, tebliğ, genelge) ve bağlayıcı nitelikteki Kişisel Verileri Koruma Kurul’u tarafından alınmış
ve alınacak kararlara uygun olarak işlenmesine, muhafaza edilmesine ve silinmesine büyük önem
göstermektedir. Bu sorumluluğumuzun bilinci ile Kanun’da tanımlı şekli ile “Veri Sorumlusu” sıfatıyla,
kişisel verilerinizi aşağıda izah edildiği surette ve mevzuat tarafından emredilen sınırlar çerçevesinde
işlemekteyiz.`,
      ],
      //   listItems: [
      //     "amet consectetur. Nibh pellentesque",
      //     "dolor sit amet consectetur. Nibh pellentesque",
      //     "Nibh pellentesque",
      //     "Lorem ipsum dolor Nibh pellentesque",
      //     "ipsum dolor sit amet consectetur. Nibh pellentesque",
      //   ],
    },
    {
      title: '1. VERİ SORUMLUSU',
      content: `İnsan Derneği “Veri Sorumlusu”dur. Saray Mah. Fuatpaşa Cad. N:1 Merkez/Kütahya`
    },
    {
      title: '2. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI',
      content: `İnsan Derneği, gerek kanuni yükümlülüklerini doğrudan yerine getirirken, gerekse bu yükümlülükler ve
verilen hizmetlerin dolaylı olarak gerektirdiği durumlarda Kişisel verilerin işlenmesine ihtiyaç
duymaktadır. Bu anlamda kişisel verileriniz`,
      listItems: [
        `4734 sayılı Kamu İhale Kanunu Mevzuatı`,
        `4735 sayılı Kamu İhale Sözleşmeleri Kanunu`,
        `4857 sayılı İş Kanunu`,
        `488 Sayılı Damga Vergisi Kanunu`,
        `492 Sayılı Harçlar Kanunu`,
        `5187 Sayılı Basın Kanunu`,
        `5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanunun Uygulanmasına İlişkin Yönetmelik`,
        `5232 Sayılı Türk Ceza Kanunu`,
        `5271 Sayılı Ceza Muhakemesi Kanunu`,
        `5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci`,
        `zenlemelerde belirtilen yükümlülüklerimizi yerine getirmek,`,
        `5520 Sayılı Kurumlar Vergisi Kanunu`,
        `5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Ve Bu Yayınlar Yoluyla İşlenen`,
        `çlarla Mücadele Edilmesi Hakkında Kanun`,
        `5809 Elektronik Haberleşme Kanunu`,
        `6098 Sayılı Türk Borçlar Kanunu`,
        `6102 Sayılı Ticaret Kanunu`,
        `6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci düzenlemelerde belirtilen yükümlülüklerimizi yerine getirmek`,
        `48107 sayılı Vergi Muafiyeti Statüsüne Uygunluk yazısı Hükümlerine uyum sağlamak ve;`,
        `4857 sayılı İş Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci düzenlemelerde belirtilen yükümlülüklerimizi yerine getirmek`,
        `5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci düzenlemelerde belirtilen yükümlülüklerimizi yerine getirmek`,
        `6331 sayılı İş Sağlığı ve Güvenliği Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci düzenlemelerde belirtilen yükümlülüklerimizi yerine getirmek`,
        `6698 sayılı Kişisel Verilerin Korunması Kanunu’nda ve bu Kanun’a bağlı çıkarılan ikinci düzenlemelerde belirtilen yükümlülüklerimizi yerine getirmek`,
        `09.2008 tarihli Vakıf Kültür Varlıkları İhale Yönetmeliği`,
      ],
      additionalContent: [
        `Gerektiğinde ilgili kamu kurum ver kuruluşlarının, adli veya idari yargı mercilerinin ve kolluk güçlerinin
ihtiyacı olan bilgileri sağlamak, amaçlarıyla Kanun’da belirtilen sınırlar çerçevesinde hukuka, dürüstlük
kurallarına uygun ve işbu amaçlarla her daim bağlantılı, sınırlı ve ölçülü şekilde işlenmektedir.`
      ]
    },
    {
      title: '3. KİŞİSEL VERİLERİN AKTARILMASI',
      content: `Kişisel verileriniz, yukarıda sayılan amaçlar dahilinde, Kanun’un 8. ve 9. maddesinde belirtilen şartlara
uygun olarak mevzuatta izin verilen gerçek ve tüzel kişilere, gerektiğinde yetkili diğer kamu kurum ve
kuruluşlarına, adli ve idari yargı mercilerine, kolluk kuvvetlerine, iş ilişkisi içerisinde olduğumuz kurum
ve kuruluşlara, eğitim ve insani yardım faaliyetleri ile ilgili otoritelere ve ilgili bakanlıklara ve ortak
faaliyet yürüttüğü aynı amaca sahip insani yardım derneklerine, proje ortaklarına dışarıdan hizmet
alınan danışmanlık, teknoloji ve eğitim şirketlerine aktarılabilmektedir.`
    },
    {
      title: `4. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ`,
      content: `Kişisel verileriniz; İnsan Derneği tarafından yetkilendirilmiş veri işleyen gerçek veya tüzel kişiler
tarafından, e-posta, telefon, internet sitesi, muhtelif sözleşmeler, kağıt ortamında tutulan formlar ve
tutanaklar gibi vasıtalarla otomatik ve otomatik olmayan yöntemlerle sözlü, yazılı veya elektronik
ortamda toplanmaktadır.
Bu kapsamda;
İlgili Kişi Grubu Alınan Kişisel veri
Bağışçı Ad-Soyad, T.C. kimlik numarası, cinsiyet, doğum yılı, telefon numarası,
e-posta, adres bilgileri, banka hesap bilgileri, log kayıtları
Gönüllü Ad-Soyad, Kimlik-ehliyet-pasaport bilgileri, cinsiyet, uyruk, doğum yeri,
doğum tarihi, telefon numarası, e-posta adresi, adres bilgileri, kan
grubu, banka hesap bilgileri, medeni durum, askerlik bilgileri, eğitim
bilgisi, log kayıtları, vesikalık fotoğraf, adli sicil kaydı, acil durumlarda
iletişime geçilmesi amacıyla irtibat kişisi bilgileri, sağlık bilgileri,
sertifikalar, iş tecrübesi
İhtiyaç Sahibi Ad-Soyad, Kimlik-pasaport bilgileri, cinsiyet, uyruk, ana-baba adı,
doğum yılı, doğum yeri, medeni durum, eğitim bilgisi, imza, adli sicil
kaydı, telefon numarası, e-posta adresi, vesikalık fotoğraf, adres
bilgileri, kan grubu, banka hesap bilgileri, acil durumlarda iletişime
geçilmesi amacıyla irtibat kişisi bilgileri, sizin ve bakmak yükümlü
olunan kişiler hakkında ailenizin nüfus kayıt bilgileri, aile durumunuza
ilişkin bilgiler, sağlık bilgileri, adli veya idari makamlardan gelen kaydı
gereken evrak
Tedarikçi Kurum Temsilcisi Ad-Soyad, telefon numarası, e-posta adresi, adres bilgileri, vergi
numarası, imza, banka bilgileri
Ziyaretçi Ad-Soyad, T.C. kimlik numarası, telefon numarası, e-posta, adres
bilgileri, giriş-çıkış bilgileri, güvenlik kayıtları
tipindeki özel ve genel nitelikli kişisel veriler Kanun’un 5. maddesinin 2/a-c-ç-e-f bentleri ve 6.
maddesinin 3. fıkrası uyarınca, temel hak ve özgürlüklerinize zarar vermemek kaydıyla ve İHH’nın
meşru menfaatleri hukuki sebebine dayalı olarak işlenmektedir.
Yukarıda sayılanlar veri tipleri haricinde gönüllülerin dernek ve vakıf üyeliği, sivil toplum kuruluşlarına
ilişkin üyelik bilgileri ve sosyal medya hesap bilgileri tipindeki genel ve özel nitelikteki kişisel verileriniz
Kanun’un 5/1 ve 6/2 maddeleri kapsamında açık rızanız dâhilinde toplanacak ve işlenecektir. Bu
anlamda tarafınızca imzalanan açık rıza metni, aydınlatma metninin ayrılmaz bir parçası olacaktır.`
    },
    {
      title: `5. VERİ SAHİPLERİNİN KANUN KAPSAMINDAKİ HAKLARI`,
      content: `Dilediğiniz zaman İnsan Derneği’ne başvurarak kişisel verilerinizin;
-İşlenip işlenmediğini, işlenme amacını ve amacına uygun kullanıp kullanılmadığı öğrenebilir ve işlenmiş
ise bu konuda bilgi isteyebilir,
-Kanun’a uygun olarak yurt içinde ve yurt dışında bilgilerinizin paylaşıldığı üçüncü kişileri öğrenebilir,
-Bilgilerinizin eksik ya da hatalı işlendiğini düşünüyorsanız düzeltilmesini isteyebilir,
-Kanunun 7. maddesinde öngörülen şartlar çerçevesinde bilgilerinizin silinmesini ya da yok edilmesini
talep edebilir,
-Bilgilerinizin aktarıldığı üçüncü kişilere (c) ve (d) bentlerinde belirtilen taleplerinizin bildirilmesini ve
aynı işlemleri gerçekleştirmelerini isteyebilir,
-Bilgilerinizin, otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına
itiraz edebilir veya kanuna aykırı olarak kaydedildiğini veya kullanıldığını düşünüyorsanız ve bu sebeple
zarara uğramışsanız zararın giderilmesini isteyebilirsiniz.
-Bu amaçlarla yaptığınız başvurunun ek bir maliyet gerektirmesi durumunda, Kişisel Verileri Koruma
Kurulu tarafından çıkarılan Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ ile belirlenen
ücreti ödemeniz söz konusu olacaktır. Başvurunuza yazılı cevap verilmesi halinde ilk 10 (on) sayfaya
kadar ücret alınmayacak, 10 (on) sayfanın üzerindeki her sayfa için 1 TL işlem ücreti alınacaktır.
Başvurunuza verilecek cevabın CD, flash bellek gibi bir kayıt ortamında verilmesi halinde ise, kayıt
ortamının maliyeti kadar ücret tarafınıza yansıtılacaktır.
Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde
sonuçlandırılacaktır.
Kanun kapsamındaki haklarınızdan yararlanmak için başvurularınızı, Türkçe olmak kaydıyla yazılı olarak
İnsan Derneği’ne iletebilir, detaylı bilgi almak için Kişisel Verileri Koruma Kurumu’nun internet sayfasını
ziyaret edebilirsiniz.`
    }
  ];

  return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

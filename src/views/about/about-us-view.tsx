import FaqsArea from "@/components/faq";

export interface AboutUsViewProps {
    lang?: string;
}

export default async function AboutUsView({ lang = "en" }: AboutUsViewProps) {
    const faqs = [
        {
          // title: "Insan Dernegin hakkinda",
        //   content:"Lorem ipsum dolor sit amet consectetur. Nibh pellentesque vel sed",
          additionalContent: [
            "İnsan Derneği, yetkili kurullarında yer alan kişilerin gönüllülük esaslı yardımlaşma çalışmaları ve çeşitli sivil toplum kuruluşlarındaki 20 yılı aşkın yaptıkları görevleri neticesinde 2023 yılında kurdukları insani yardım ve kalkınma odaklı bir sivil toplum kuruluşudur.",
            `Dünyanın her bölgesindeki ihtiyaç sahiplerine destek olmak gayesiyle faaliyetlerine başlayan derneğimiz, öncelikle yıllardır abluka altında yaşamak zorunda kalan Gazze halkına yönelik çalışmalara başlamıştır. 7 Ekim 2023 tarihindeki Aksa Tufanı operasyonu sonucu gerçekleşen süreç derneğimizi tüm odak noktasını Gazze olarak belirlemek durumunda bırakmıştır.`,
            `Gazze ve çevre ülkelerindeki organizasyon kabiliyeti, sonuç almadaki başarı ve şeffaflık ülkemizden ve dünyanın farklı ülkelerinden birçok yardım kuruluşunun Filistinlilerle ilgili projelerini bizimle yapmalarını sağlamış ve bu ortak çalışmalar kısa sürede birçok hayırlı işlerin yapılmasına vesile olmuştur.`,
            `En genel haliyle faaliyet gösterdiğimiz bölgelerdeki dezavantajlı kesimleri desteklemeyi, kapsamlı insani yardım ve kalkınma programları aracılığıyla çalışmayı, yerel ve uluslararası sivil toplum kuruluşları ile işbirliği halinde çalışmalar yapmayı hedefimiz olarak belirliyoruz`,
          ],
        //   listItems: [
        //     "amet consectetur. Nibh pellentesque",
        //     "dolor sit amet consectetur. Nibh pellentesque",
        //     "Nibh pellentesque",
        //     "Lorem ipsum dolor Nibh pellentesque",
        //     "ipsum dolor sit amet consectetur. Nibh pellentesque",
        //   ],
        },
      ];
    
      return <FaqsArea faqs={faqs} contactEmail="info@insander.org" />;
}

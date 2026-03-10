const { createClient } = require('@sanity/client');
const { sanityClientConfig } = require('./index.js');
const fs = require('fs');
const path = require('path');

// import { client } from "@/sanity/client";
// import { createClient } from "@sanity/client";

const client = createClient(sanityClientConfig);

const projects = [
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze'ye yönelik saldırıların başlamasıyla birlikte, insanlar evlerini terk etmek zorunda kalmış ve aynı zamanda günlük tedarik zincirinin bozulması sonucu yüzbinlerce Filistinli'nin gıdaya ulaşması çok zor hale gelmiştir. 15 Ekim 2023 tarihi itibariyle Gazze'nin kuzey bölgeleri olan Cebaliye ve Şecaiye'de başladığımız günlük sıcak yemek dağıtımı, bağışçılarımızın destekleriyle her geçen gün artmış ve günlük 1800 kişiye ulaşmıştır. Refah, Han Yunus ve Deyrul Belah bölgelerinde devam ettiğimiz sıcak yemek dağıtımı için kişi başı günlük ücret 90 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "With the start of attacks on Gaza, people were forced to leave their homes, and at the same time, the disruption of the daily supply chain made it very difficult for hundreds of thousands of Palestinians to access food. As of October 15, 2023, our daily hot meal distribution, which started in the northern regions of Gaza, namely Jabalia and Shuja'iyya, has increased daily with the support of our donors and has reached 1,800 people per day. For the hot meal distribution we continue in Rafah, Khan Yunis, and Deir al-Balah, the daily cost per person is 90 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze’ye yönelik saldırıların başlamasıyla birlikte, insanlar evlerini terk etmek zorunda kalmış aynı zamanda günlük tedarik zincirinin bozulması sonucu yüzbinlerce Filistinli’nin gıdaya ulaşması çok zor hale gelmiştir. 15 Ekim 2023 tarihi itibariyle Gazze’nin Kuzey bölgeleri olan Cebaliye ve Şecaiye bölgelerinde başladığımız günlük sıcak yemek dağıtımı her geçen gün bağışçılarımızın destekleriyle artmış ve günlük 1800 kişiye ulaşmıştır. Refah, Han Yunus ve Deyrul Belah bölgelerinde devam ettiğimiz sıcak yemek dağıtımı için kişi başı günlük ücret 130 tl dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "l6huHymp7vrW0JxXG5Ca3M",
                "_type": "reference",
                "_key": "cbbp7xgoxyc"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/sicak-yemek/1.png",
        "publishedAt": "2025-03-10",
        "slug": "sicak-yemek",
        "title": {
            "ar": "وجبة ساخنة",
            "en": "Hot Meal",
            "tr": "Sıcak Yemek"
        },
        "price": "130 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a12b34c56d78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e12f34g56h78",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze Şeridi'ndeki kanalizasyon ve altyapı saldırılar sonucunda %93 oranında zarar görmüş ve insanlar içme suyunda dahi deniz suyu kullanmak zorunda kalmıştır. Gazze'de yaşanan bu sıkıntıya çözüm olarak, 5 Aralık 2023 tarihinden itibaren Cebaliye Belediyesine şebeke hattının çalışabilmesi için güneş panelleri ve akü desteği sağladık. Akabinde altyapıların yüksek oranda tahrip olması nedeniyle su kuyuları açmaya, kuyuları paneller ve motorlar ile güçlendirip hızlı çalışır hale getirdik. Bu kuyulardan elde ettiğimiz suyu tankerlerle insanlara ulaştırıyoruz. Günlük olarak sürekli devam eden bu çalışmamız günde ortalama 5000 litre ila 15000 litre arasında farklı lokasyonlarda devam etmektedir. 1 tanker 5000 litre su almakta olup çıkarma, ulaştırma ve dağıtım toplam bedeli 12.000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i12j34k56l78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m12n34o56p78",
                            "_type": "span",
                            "marks": [],
                            "text": "Due to attacks on sewage and infrastructure in the Gaza Strip, 93% of the system has been damaged, forcing people to use seawater even for drinking. As a solution to this crisis in Gaza, since December 5, 2023, we have provided solar panels and battery support to the Jabalia Municipality to enable the operation of the network line. Subsequently, due to the high level of infrastructure destruction, we started drilling water wells, strengthening them with panels and motors to make them operational quickly. We distribute the water obtained from these wells to people using tankers. This ongoing effort continues daily, delivering between 5,000 and 15,000 liters of water at various locations. A single tanker holds 5,000 liters of water, and the total cost of extraction, transportation, and distribution is 12,000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q12r34s56t78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u12v34w56x78",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze Şeridi'ndeki kanalizasyon ve altyapı saldırılar sonucunda %93 oranında zarar görmüş ve insanlar içme suyunda dahi deniz suyu kullanmak zorunda kalmıştır. Gazze'de yaşanan bu sıkıntıya çözüm olarak, 5 Aralık 2023 tarihinden itibaren Cebaliye Belediyesine şebeke hattının çalışabilmesi için güneş panelleri ve akü desteği sağladık. Akabinde altyapıların yüksek oranda tahrip olması nedeniyle su kuyuları açmaya, kuyuları paneller ve motorlar ile güçlendirip hızlı çalışır hale getirdik. Bu kuyulardan elde ettiğimiz suyu tankerlerle insanlara ulaştırıyoruz. Günlük olarak sürekli devam eden bu çalışmamız günde ortalama 5000 litre ila 15000 litre arasında farklı lokasyonlarda devam etmektedir. 1 tanker 5000 litre su almakta olup çıkarma, ulaştırma ve dağıtım toplam bedeli 12.000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "b12c34d56e78",
                "_ref": "1wDThe4hFJQC4iuGzeGEKh",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/icme-suyu/1.png",
        "publishedAt": "2025-03-10",
        "slug": "icme-suyu",
        "title": {
            "ar": "مياه الشرب",
            "en": "Drinking Water",
            "tr": "İçme Suyu"
        },
        "price": "12.000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "f12g34h56i78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "j12k34l56m78",
                            "_type": "span",
                            "marks": [],
                            "text": "Saldırıların sonucunda temel gıdaya erişimin de zorlanmasıyla birlikte 20 Kasım 2023 tarihiyle birlikte önce kuzey bölgesinde ekmek dağıtımı faaliyetimiz başlamıştır. Ekmekler gerek yıkılmayan fırınlarda gerekse Gazze’li kadınların organize edilip bir araya getirilmesi ve belirli miktar ücret verilmesi yolu ile yapılmaktadır.  Günlük 10.000 adet ekmek dağıtımı yapmaktayız. Dağıtımlarımız kuzey bölgeler başta olmak üzere devam etmektedir. Bir poşet bita ekmeği bedeli 15 TL'dir. Bunun yanı sıra ailelere kendilerinin kullanmaları için un yardımı faaliyetlerimiz de bölgede belirli aralıklarla devam etmektedir. Bir çuval un bedeli 800 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "n12o34p56q78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "r12s34t56u78",
                            "_type": "span",
                            "marks": [],
                            "text": "As a result of the attacks, access to basic food has become difficult. Thus, on November 20, 2023, we started distributing bread in the northern region. The bread is either produced in undamaged bakeries or by organizing Gazan women and providing them with a certain amount of financial support. We distribute 10,000 loaves of bread daily, primarily in the northern regions. The cost of one bag of pita bread is 15 TL. Additionally, we continue providing flour aid at regular intervals for families to use themselves. The cost of one sack of flour is 800 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "v12w34x56y78",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "z12a34b56c78",
                            "_type": "span",
                            "marks": [],
                            "text": "Saldırıların sonucunda temel gıdaya erişimin de zorlanmasıyla birlikte 20 Kasım 2023 tarihiyle birlikte önce kuzey bölgesinde ekmek dağıtımı faaliyetimiz başlamıştır. Ekmekler gerek yıkılmayan fırınlarda gerekse Gazze’li kadınların organize edilip bir araya getirilmesi ve belirli miktar ücret verilmesi yolu ile yapılmaktadır.  Günlük 10.000 adet ekmek dağıtımı yapmaktayız. Dağıtımlarımız kuzey bölgeler başta olmak üzere devam etmektedir. Bir poşet bita ekmeği bedeli 15 TL'dir. Bunun yanı sıra ailelere kendilerinin kullanmaları için un yardımı faaliyetlerimiz de bölgede belirli aralıklarla devam etmektedir. Bir çuval un bedeli 800 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d12e34f56g78",
                "_ref": "l6huHymp7vrW0JxXG5Ca3M",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/ekmek-un/1.png",
        "publishedAt": "2025-03-10",
        "slug": "ekmek-un",
        "title": {
            "ar": "الخبز - الدقيق",
            "en": "Bread - Flour",
            "tr": "Ekmek – Un"
        },
        "price": "800 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a23b45c67d89",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e23f45g67h89",
                            "_type": "span",
                            "marks": [],
                            "text": "منذ 7 أكتوبر 2023، تم تدمير 70٪ من المباني نتيجة قصف المناطق السكنية المدنية من الجو والبر. نحن نقدم خدمات توزيع وتركيب الخيام لدعم الأسر الفلسطينية التي تكافح للبقاء على قيد الحياة في ظل هذه الظروف الصعبة. نحن نواصل دعم الخيام في مناطق رفح ودير البلح والزيتون في غزة. تبلغ تكلفة الخيمة الواحدة 9000 ليرة تركية، بينما تبلغ تكلفة الحصة الواحدة للخيمة 1000 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i23j45k67l89",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m23n45o67p89",
                            "_type": "span",
                            "marks": [],
                            "text": "Since October 7, 2023, 70% of buildings have been destroyed due to aerial and ground bombings of civilian residential areas. We provide tent distribution and installation services to support Palestinian families struggling to survive under these harsh conditions. Our tent support activities continue in the Rafah, Deir al-Balah, and Zaytoun regions of Gaza. The cost of one tent is 9,000 TL, while the cost of one share for a tent is 1,000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q23r45s67t89",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u23v45w67x89",
                            "_type": "span",
                            "marks": [],
                            "text": "7 Ekim 2023 tarihinden itibaren sivil yerleşim yerlerinin havadan ve karadan bombalanması sonucu binaların %70’i yıkılmıştır. Saldırılar altında zor şartlarda hayatta kalma mücadelesi veren Filistinli ailelere barınma desteği sağlamak için çadır dağıtımı ve kurulumu hizmeti veriyoruz. Gazze’nin Refah, Deyrul Belah ve Zeytün bölgesinde devam ettiğimiz çadır desteği faaliyetimiz için bir çadır bedeli 9000 TL'dir. Çadır için bir hisse bedeli 1000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d23e45f67g89",
                "_ref": "1wDThe4hFJQC4iuGzeGE8n",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/cadir/1.png",
        "publishedAt": "2025-03-10",
        "slug": "cadir",
        "title": {
            "ar": "الخيمة",
            "en": "Tent",
            "tr": "Çadır"
        },
        "price": "9000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a34b56c78d90",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e34f56g78h90",
                            "_type": "span",
                            "marks": [],
                            "text": "تسبب تضرر البنية التحتية وخطوط الصرف الصحي نتيجة الهجمات في جعل موضوع النظافة والصحة أكثر أهمية. وللتقليل من تأثير هذه العملية التي تزيد من خطر انتشار الأمراض، نقوم بتوزيع حزم النظافة على فترات منتظمة. تحتوي الحزمة على صابون، شامبو، معجون وفرشاة أسنان، مناديل مبللة، مسحوق غسيل وفوط صحية للنساء. تكلفة الحزمة 900 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i34j56k78l90",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m34n56o78p90",
                            "_type": "span",
                            "marks": [],
                            "text": "The damage to infrastructure and sewage lines due to attacks has made hygiene and sanitation crucial. To mitigate the impact of this situation, which also increases the risk of epidemics, we distribute hygiene packages at regular intervals. Each package contains soap, shampoo, toothpaste and toothbrush, wet wipes, detergent, and sanitary pads for women. The cost of one package is 900 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q34r56s78t90",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u34v56w78x90",
                            "_type": "span",
                            "marks": [],
                            "text": "Altyapı ve kanalizasyon hatlarının saldırılar sonucunda zarar görmüş olması temizlik ve hijyen konusunu çok önemli bir hale getirmiştir. Salgın hastalık risklerini de doğuran bu sürecin etkisini azaltmak için belirli periyotlarla hijyen paketi dağıtımı yapmaktayız. Bir paket de sabun, şampuan, diş macunu-fırçası, ıslak mendil, deterjan ve bayan pedi bulunmaktadır. Paket bedeli 900 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d34e56f78g90",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/hijyen-paketi/1.png",
        "publishedAt": "2025-03-10",
        "slug": "hijyen-paketi",
        "title": {
            "ar": "حزمة النظافة",
            "en": "Hygiene Package",
            "tr": "Hijyen Paketi"
        },
        "price": "900 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a45b67c89d01",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e45f67g89h01",
                            "_type": "span",
                            "marks": [],
                            "text": "خلال الهجمات على غزة، وُلد حوالي 70 ألف طفل. وُلد 90٪ من هؤلاء الأطفال بوزن غير كافٍ بسبب سوء تغذية الأمهات، ونقص النظافة في البيئة. لدعم العائلات التي استقبلت أطفالها في ظروف صعبة، نقوم بتوزيع حزم حديثي الولادة في المناطق التي تتركز فيها مخيمات اللاجئين في غزة. تحتوي الحزمة على حفاضات للأطفال، حليب للأطفال، ملابس، شامبو، بودرة ومناديل مبللة. تكلفة الحزمة 950 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i45j67k89l01",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m45n67o89p01",
                            "_type": "span",
                            "marks": [],
                            "text": "During the attacks on Gaza, approximately 70,000 babies were born. 90% of these newborns have low birth weights due to maternal malnutrition and lack of hygienic environments. To support families welcoming their babies under difficult conditions, we continue distributing newborn packages in areas with a high concentration of refugee camps in Gaza. Each package includes baby diapers, formula, clothing, shampoo, powder, and wet wipes. The cost of one package is 950 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q45r67s89t01",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u45v67w89x01",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze’de saldırılar sürecince 70 bin civarında bebek dünyaya gelmiştir. Doğan bebeklerin %90’ı, annelerin maruz kaldığı eksik beslenme, ortam hijyeni eksikliği gibi nedenlerle yetersiz kilo oranlarıyla dünyaya gelmektedir. Zor şartlar altında bebeklerine kavuşan ailelere ve bebeklere destek sağlamak amacıyla bebek bezi, mama, kıyafet, şampuan, pudra ve ıslak mendilden oluşan yenidoğan paketi dağıtımlarımız Gazze’nin çadır kamplarının yoğun olduğu bölgelerde devam etmektedir. Bir paket bedeli 950 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d45e67f89g01",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/yenidogan-paketi/1.png",
        "publishedAt": "2025-03-10",
        "slug": "yenidogan-paketi",
        "title": {
            "ar": "حزمة حديثي الولادة",
            "en": "Newborn Package",
            "tr": "Yenidoğan Paketi"
        },
        "price": "950 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a56b78c90d12",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e56f78g90h12",
                            "_type": "span",
                            "marks": [],
                            "text": "يعد الشعب الفلسطيني من بين أكثر الشعوب معرفة بالقراءة والكتابة في العالم، حيث تصل نسبة الإلمام بالقراءة والكتابة إلى 97.5٪. كما أن نسبة الالتحاق بالتعليم الجامعي مرتفعة جدًا. على الرغم من تدمير العديد من المدارس بسبب القصف خلال الهجمات، لا يزال الفلسطينيون يسعون لمواصلة تعليم أطفالهم. لذلك، نحن نقدم دعمًا للقرطاسية ودعمًا ماليًا للمعلمين للمساهمة في هذه العملية. نقوم بإنشاء مدارس خيام، بالإضافة إلى تقديم الدعم النفسي للأطفال وبرامج التحفيز والمكافآت. تكلفة حزمة القرطاسية 1500 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i56j78k90l12",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m56n78o90p12",
                            "_type": "span",
                            "marks": [],
                            "text": "The Palestinian people have one of the highest literacy rates in the world, at 97.5%. The rate of university education is also very high. Despite many schools being destroyed by bombings during the attacks, Palestinians are striving to continue their children's education. In response, we provide both stationery support and financial assistance to teachers to contribute to this process. We are also setting up tent schools. Additionally, we offer psychological support programs for children and motivational rewards. The cost of a stationery package is 1,500 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q56r78s90t12",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u56v78w90x12",
                            "_type": "span",
                            "marks": [],
                            "text": "Filistin halkı %97,5 oran ile okur yazarlığın dünyada en yüksek olduğu halklardan biridir. Üniversite eğitimi görme oranı da çok yüksektir. Saldırılar süresince bir çok okul da bombalar sonucunda yıkılmış olmasına rağmen Filistinliler çocuklarının eğitimlerine devam etmeye çalışmaktadırlar. Bu doğrultuda bizler de hem kırtasiye desteği hem de öğretmenlere ücret desteği sağlayarak bu sürece katkıda bulunuyoruz. Süreçte çadır okullar oluşturuyoruz. Ayrıca çocuklara yönelik psikolojik destek çalışmaları ve motivasyon amaçlı ödüllendirmeler yapıyoruz. Kırtasiye paketi bedeli 1500 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d56e78f90g12",
                "_ref": "l6huHymp7vrW0JxXG5CaNg",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/egitim-destek/1.png",
        "publishedAt": "2025-03-10",
        "slug": "egitim-destek",
        "title": {
            "ar": "دعم التعليم",
            "en": "Education Support",
            "tr": "Eğitim Destek"
        },
        "price": "1500 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a67b89c01d23",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e67f89g01h23",
                            "_type": "span",
                            "marks": [],
                            "text": "قمنا بأعمال تسوية الأرض باستخدام المعدات الثقيلة في المناطق المخصصة لإقامة مخيمات اللاجئين. كما أنشأنا خطوط بنية تحتية من الآبار التي تم حفرها في هذه المناطق، مما جعل المياه متاحة في العديد من نقاط المخيم. بعد وقف إطلاق النار، تستمر جهودنا في فتح الطرق باستخدام الآليات الثقيلة. تكلفة دعم الوحدة 1000 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i67j89k01l23",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m67n89o01p23",
                            "_type": "span",
                            "marks": [],
                            "text": "We carried out land leveling work using heavy machinery in areas designated for refugee camps. We also built infrastructure lines from the wells dug in these areas, making water accessible at multiple points within the camp. After the ceasefire, our efforts to clear roads using heavy machinery continue. The unit support cost is 1,000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q67r89s01t23",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u67v89w01x23",
                            "_type": "span",
                            "marks": [],
                            "text": "Çadır kampı kurulacak alanlarda iş makineleri ile tesviye çalışmaları yaptık. Çadır kamplarının olduğu bölgelerde açılan su kuyularından altyapı hatları oluşturarak suyu kampın birçok noktasında ulaşılabilir hale getirdik. Ateşkes sonrası yolların iş makineleri ile açılması noktasındaki faaliyetlerimiz devam etmektedir. Birim destek bedeli 1000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d67e89f01g23",
                "_ref": "1wDThe4hFJQC4iuGzeGE8n",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/altyapi-calismalari/1.png",
        "publishedAt": "2025-03-10",
        "slug": "altyapi-calismalari",
        "title": {
            "ar": "أعمال البنية التحتية",
            "en": "Infrastructure Works",
            "tr": "Altyapı Çalışmaları"
        },
        "price": "1000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a78b90c12d34",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e78f90g12h34",
                            "_type": "span",
                            "marks": [],
                            "text": "تأثرت المرافق الصحية والمستشفيات في غزة جراء الهجمات التي لم تحترم أي قواعد. تعرض 70٪ من إجمالي المنشآت الصحية في غزة لأضرار جزئية أو كاملة، مما جعلها غير قادرة على تقديم الخدمات للمرضى. أكبر مركز صحي في غزة، مستشفى الشفاء بسعة 1500 سرير، تعرض للقصف على الهواء مباشرة. نتيجة لنزوح جزء كبير من سكان غزة من المناطق الشمالية إلى الجنوبية، لم تعد المراكز الصحية القليلة المتبقية في الجنوب قادرة على تلبية الاحتياجات المتزايدة. بعد وقف إطلاق النار، قمنا بنقل ثلاثة من مراكزنا الصحية وفقًا لحركة السكان. في ظل هذه الحاجة المتزايدة، أنشأنا تسعة مراكز صحية، سبعة منها ضمن مشاريعنا مع جمعيات شريكة، واثنان مملوكان لنا. قمنا بتوفير المعدات الطبية والمواد الطبية والقوى العاملة والأدوية لهذه المراكز. تقدم هذه المراكز خدمات متعددة مثل الطوارئ، متابعة الحمل، الولادة وما بعدها، صحة الأطفال، والعظام. يستفيد يوميًا حوالي 300 شخص من هذه الخدمات مجانًا. كما وفرنا لقاحات شلل الأطفال في مراكزنا الصحية بالتعاون مع منظمة الصحة العالمية استجابةً لحالات شلل الأطفال التي ظهرت بسبب نقص التطعيم أثناء الهجمات. تكلفة الدعم لكل مركز صحي هي 500 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i78j90k12l34",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m78n90o12p34",
                            "_type": "span",
                            "marks": [],
                            "text": "Healthcare facilities and hospitals in Gaza have been severely affected by indiscriminate attacks. 70% of Gaza’s total healthcare facilities have been partially or completely damaged, making them unable to serve patients. The largest healthcare center in Gaza, Al-Shifa Hospital, with a capacity of 1,500 beds, was bombed live on air. Due to the displacement of a large portion of Gaza’s population from the northern to southern regions, the remaining operational healthcare centers in the south could no longer meet the increased demand. After the ceasefire, we relocated three of our healthcare centers based on population movement. In response to the growing needs, we established nine healthcare centers—seven through partnerships with local organizations and two under our own management. We provided medical equipment, supplies, manpower, healthcare personnel, and medication to these centers. These centers offer various services, including emergency care, pregnancy follow-ups, childbirth and postpartum care, pediatric health, and orthopedics. On average, 300 people benefit from these services daily for free. Additionally, in partnership with the World Health Organization, we ensured that polio vaccinations were administered in our centers after cases of polio emerged due to a lack of immunization during the attacks. The unit support cost for a healthcare center is 500 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q78r90s12t34",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u78v90w12x34",
                            "_type": "span",
                            "marks": [],
                            "text": "Hiçbir kural tanımayan saldırılardan Gazze’deki sağlık kuruluşları ve hastanelerde etkilendi. Gazzedeki toplam sağlık kuruluşlarının %70 kısmen yada tamamen hasar aldığı için hastalara hizmet veremeyecek hale geldi. 1947 yılında kurulan Gazze’deki en büyük sağlık merkezi olan 1500 yatak kapasiteli Şifa Hastanesi canlı yayınlarda bombalandı. Saldırılarda Gazze halkının büyük bölümünün yaşadığı kuzey bölgelerinden güney bölgelerine göç ettirilmeleri sonucu güneyde ayakta kalabilen sağlık merkezleri göç sonucu artan ihtiyacı karşılayamaz hale geldi. Ateşkes sonrası nüfus hareketine göre 3 sağlık merkezimizi taşıdık. Bu süreçte oluşan ihtiyaca binaen ayakta kalabilen binalarda yada çadırlarda partner derneklerimizle yaptığımız projeler dahilinde 7 adet kendi bünyemizde 2 adet olmak üzere toplam 9 adet sağlık merkezi kurduk. Bu merkezlerin tıbbi ekipman, medikal malzeme, insan gücü, sağlık personeli ve ilaç desteğini sağladık. Bu merkezlerde acil servis hizmeti temel olmak üzere, gebelik takibi, doğum ve sonrası, çocuk sağlığı, ortopedi gibi birçok konuda hizmet verilmektedir. Her bir sağlık merkezimizden günlük ortalama 300 kişi ücretsiz olarak yararlanmaktadır. Saldırılar boyunca aşılama eksikliği dolayısıyla Gazze’de çocuk felci vakaları görülmesi üzerine Dünya Sağlık Örgütü ile ortaklaşa yaptığımız projede sağlık merkezlerimizde çocuk felci aşıları yapılmasını sağladık. Sağlık merkezi ihtiyaçları için birim destek bedeli 500 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d78e90f12g34",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/saglik-merkezleri/1.png",
        "publishedAt": "2025-03-10",
        "slug": "saglik-merkezleri",
        "title": {
            "ar": "المراكز الصحية",
            "en": "Healthcare Centers",
            "tr": "Sağlık Merkezleri"
        },
        "price": "500 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a89b01c23d45",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e89f01g23h45",
                            "_type": "span",
                            "marks": [],
                            "text": "قبل الهجمات، كان ما يقرب من 80٪ من سيارات الإسعاف المستخدمة في غزة غير صالحة للاستخدام بسبب القصف. وضعنا هدفًا لتوفير 9 سيارات إسعاف لمراكزنا الصحية التسعة. قمنا بشراء 3 سيارات إسعاف من مصر وإرسالها إلى غزة. لا تزال جهود جمع التبرعات جارية لتوفير 6 سيارات إسعاف أخرى. تكلفة دعم الوحدة لسيارة الإسعاف هي 1000 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i89j01k23l45",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m89n01o23p45",
                            "_type": "span",
                            "marks": [],
                            "text": "Before the attacks, nearly 80% of the ambulances used in Gaza were rendered inoperable due to bombings. We set a target of providing 9 ambulances for our 9 healthcare centers. We purchased 3 ambulances in Egypt and sent them to Gaza. Fundraising efforts are ongoing to secure 6 more ambulances. The unit support cost for an ambulance is 1,000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q89r01s23t45",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u89v01w23x45",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze’de saldırılar öncesi kullanılan ambulansların %80’e yakını saldırılarda kullanılamaz hale geldi. Oluşturduğumuz 9 sağlık merkezimiz için 9 ambulans hedefi koyduk. 3 ambulansı Mısır’da satın alıp Gazze’ye gönderdik. 6 ambulans için bağış toplama çalışmalarımız devam etmektedir. Ambulans birim destek bedeli 1000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d89e01f23g45",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/ambulans/1.png",
        "publishedAt": "2025-03-10",
        "slug": "ambulans",
        "title": {
            "ar": "سيارة الإسعاف",
            "en": "Ambulance",
            "tr": "Ambulans"
        },
        "price": "1000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a90b12c34d56",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e90f12g34h56",
                            "_type": "span",
                            "marks": [],
                            "text": "شهد العالم بأسره التزام شعب غزة بعقيدتهم في ظل التوكل التام خلال هذه الأحداث. لقد أدى موقف شعب غزة إلى توجيه العديد من الناس حول العالم نحو الإسلام. ورغم كل الصعوبات، استمرت دراسات تحفيظ القرآن الكريم خلال فترة الهجمات. تم افتتاح دورات تحفيظ في العديد من المخيمات المؤقتة. قدمت منظمتنا دعمًا ماليًا، ودعمًا غذائيًا، ودعمًا في المستلزمات الدراسية لهذه الدورات. كما نظمنا العديد من حفلات التخرج لحفظة القرآن، كان أكبرها حفل تخرج لـ 7200 حافظ. تكلفة دعم وحدة تحفيظ القرآن الكريم هي 200 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i90j12k34l56",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m90n12o34p56",
                            "_type": "span",
                            "marks": [],
                            "text": "The entire world has witnessed the unwavering faith and trust of the people of Gaza in these difficult times. Their resilience has inspired many around the world to turn towards Islam. Despite all hardships, Quran memorization programs continued throughout the attacks. In many tent camps, Quran memorization courses were established. As an organization, we provided financial, food, and stationery support to these courses. We also organized multiple Quran memorization graduation ceremonies, the largest of which saw 7,200 students receive their certification. The unit support cost for Quran memorization efforts is 200 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q90r12s34t56",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u90v12w34x56",
                            "_type": "span",
                            "marks": [],
                            "text": "Yaşanılan süreçte Gazze halkının tam tevekkül içinde inançlarına bağlılığına tüm dünya canlı tanıklık etti. Gazze halkının bu tavrı dünyada birçok insanın İslam’a yönelmesine sebep oldu. Her türlü zorluklarlara rağmen Gazze’de hafızlık çalışmaları da saldırılar boyunca devam etti. Birçok noktada oluşan çadır kamplarında hafızlık kursları açıldı. Derneğimiz olarak bu kurslara maddi destek, gıda desteği, kırtasiye desteği sağladık. En büyüğü 7200 hafızın icazet aldığı tören olmak üzere birçok hafızlık icazet töreni düzenledik. Hafızlık çalışmalarına destek birim bedeli 200 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d90e12f34g56",
                "_ref": "l6huHymp7vrW0JxXG5CaNg",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/hafizlik/1.png",
        "publishedAt": "2025-03-10",
        "slug": "hafizlik",
        "title": {
            "ar": "تحفيظ القرآن",
            "en": "Quran Memorization",
            "tr": "Hafızlık"
        },
        "price": "200 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a91b13c35d57",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e91f13g35h57",
                            "_type": "span",
                            "marks": [],
                            "text": "لقد كنا نقوم بتنظيم أنشطة ذبح الأضاحي في فلسطين منذ سنوات طويلة. قبل الحرب، قمنا أيضًا بزرع شجرة لكل متبرع أضحية في غزة. بعد 7 أكتوبر، نظمنا ذبح الأضاحي في عيد الأضحى 2024 داخل غزة وأيضًا في مصر لإرسال اللحوم إلى هناك. بالإضافة إلى ذلك، يتم ذبح الأضاحي الخاصة بالعقيقة والنذور واستخدامها في مطابخ الطعام ضمن برنامج توزيع الوجبات الساخنة اليومية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i91j13k35l57",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m91n13o35p57",
                            "_type": "span",
                            "marks": [],
                            "text": "We have been organizing Qurbani sacrifice activities in Palestine for many years. Before the war, we also planted a tree in Gaza for each Qurbani donor. After October 7, during the 2024 Eid al-Adha, we organized Qurbani sacrifices both inside Gaza and in Egypt to be transported there. Additionally, Aqeeqah and vow sacrifices are also performed and used in community kitchens as part of the daily hot meal distribution program."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q91r13s35t57",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u91v13w35x57",
                            "_type": "span",
                            "marks": [],
                            "text": "Uzun yıllardır Filistin’de kurban kesimi faaliyeti yapmaktayız. Savaş öncesi her kurban bağışçısı adına Gazze’de ayrıca bir fidan dikimi yaptık. 7 Ekim sonrası, 2024 Kurban Bayramı'nda hem Gazze içinde hem de oraya ulaştırılmak üzere Mısır’da kurban kesim organizasyonu yaptık. Ayrıca akika ve adak kurbanları da kesilerek günlük sıcak yemek dağıtımı kapsamında aşevinde değerlendirilmektedir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d91e13f35g57",
                "_ref": "l6huHymp7vrW0JxXG5Ca3M",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/kurban/1.png",
        "publishedAt": "2025-03-10",
        "slug": "kurban",
        "title": {
            "ar": "الأضاحي",
            "en": "Qurbani",
            "tr": "Kurban"
        },
        "price": "NONE"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a93b15c37d59",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e93f15g37h59",
                            "_type": "span",
                            "marks": [],
                            "text": "نقوم بتوزيع ملابس العيد للأطفال في غزة ولبنان ومصر خلال شهر رمضان وعيد الأضحى. كما نقوم بتوزيع الملابس على الغزيين الذين اضطروا إلى ترك منازلهم والتي دُمرت بسبب القصف. بالإضافة إلى ذلك، نقوم بتوزيع الأحذية والملابس الرياضية والجوارب في مخيمات اللاجئين. كما نقدم دعمًا بالملابس للعائلات والجرحى الذين اضطروا لمغادرة غزة إلى مصر، وللفلسطينيين الذين لم يتمكنوا من دخول غزة بعد 7 أكتوبر وبقوا في مصر، وخاصة الأيتام، إلى جانب المساعدات الأخرى. تكلفة الملابس العيدية ... ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i93j15k37l59",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m93n15o37p59",
                            "_type": "span",
                            "marks": [],
                            "text": "We distribute holiday clothing for children in Gaza, Lebanon, and Egypt during Ramadan and Eid al-Adha. We also provide clothing to Gazans who were forced to leave their homes and had their houses destroyed by bombings. Additionally, we distribute shoes, tracksuits, and socks in refugee camps. We also provide clothing support to injured individuals and families who had to flee from Gaza to Egypt, as well as to Palestinians who were unable to enter Gaza after October 7 and remained in Egypt, particularly orphans, alongside other aid efforts. The cost of holiday clothing is ... TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q93r15s37t59",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u93v15w37x59",
                            "_type": "span",
                            "marks": [],
                            "text": "Ramazan ve Kurban Bayramlarında Gazze, Lübnan, Mısır’da çocuklara yönelik bayramlık kıyafet dağıtımı yapmaktayız. Saldırılar sonucu evlerini terk etmek durumunda kalan ve evleri bombalarla yıkılan Gazzeliler için kıyafet dağıtımı gerçekleştiriyoruz. Çadır kamplarda ayakkabı, eşofman, çorap dağıtımları yapıyoruz. Gazze’den Mısır’a geçmek zorunda kalan yaralı ve ailelerine ve 7 Ekim sürecinde Gazze’ye geçemeyip Mısır’da kalan Filistinlilere, başta yetimler olmak üzere diğer desteklerin yanında kıyafet desteği de sağlıyoruz. Bayramlık bedeli ... TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d93e15f37g59",
                "_ref": "l6huHymp7vrW0JxXG5Caom",
                "_type": "reference"
            }
        ],
        "location": "Gazze, Filistin",
        "mainImage": "./project-images/kiyafet/1.png",
        "publishedAt": "2025-03-10",
        "slug": "kiyafet",
        "title": {
            "ar": "الملابس",
            "en": "Clothing",
            "tr": "Kıyafet"
        },
        "price": "NONE"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a94b16c38d60",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e94f16g38h60",
                            "_type": "span",
                            "marks": [],
                            "text": "نحن نقدم الدعم للجرحى الذين تمكنوا من العبور إلى مصر لتلقي العلاج بعد الهجمات، من خلال زيارات المستشفيات، والمساعدات النقدية، والأدوية غير المغطاة من قبل المستشفيات، بالإضافة إلى توفير كراسي متحركة وغيرها من الاحتياجات. كما نوفر دعمًا للسكن لمرضى السرطان الذين يحتاجون إلى الذهاب إلى المستشفى على فترات منتظمة في مصر. بالإضافة إلى ذلك، نوفر الإقامة في منازل مستأجرة من قبل منظمتنا لأولئك الذين أكملوا علاجهم في مصر ولكنهم غير قادرين على العودة إلى غزة. تكلفة الدعم للوحدة 500 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i94j16k38l60",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m94n16o38p60",
                            "_type": "span",
                            "marks": [],
                            "text": "We provide support for Gazans who were injured in the attacks and managed to cross into Egypt for treatment, including hospital visits, financial aid, assistance with medications not covered by hospitals, and mobility aids such as wheelchairs. We also offer housing support in Egypt for cancer patients who require periodic hospital visits. Additionally, for those who have completed their treatment in Egypt but are unable to return to Gaza, we provide accommodation in homes rented by our organization. The unit support cost is 500 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q94r16s38t60",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u94v16w38x60",
                            "_type": "span",
                            "marks": [],
                            "text": "Saldırılar sonucunda yaralanan ve tedavi amacıyla Mısır’a geçebilen Gazzelilere hastane ziyareti, nakdi yardım, hastanelerin karşılamadığı ilaç yardımları, tekerleklekli sandalye gibi destekler sağlıyoruz. Kanser tedavisi görüp hastaneye belirli periyotlarla gitmek durumunda kalan kanser hastalarına Mısır’da barınma desteği sağlıyoruz. Ayrıca Mısır’da tedavisi tamamlanıp Gazze’ye dönemeyenler için de derneğimizce kiralanan evlerde barınma imkanı sunuyoruz. Birim destek bedeli 500 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d94e16f38g60",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Egypt",
        "mainImage": "./project-images/yarali-destek/1.png",
        "publishedAt": "2025-03-10",
        "slug": "yarali-destek",
        "title": {
            "ar": "دعم الجرحى",
            "en": "Injured Support",
            "tr": "Yaralı Destek"
        },
        "price": "500 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a95b17c39d61",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "e95f17g39h61",
                            "_type": "span",
                            "marks": [],
                            "text": "يتم علاج الفلسطينيين الذين أصيبوا في الهجمات وتمكنوا من العبور إلى مصر فقط في الحالات الطارئة من قبل الحكومة المصرية، ولا يتم تنفيذ أي إجراءات طبية في حالات فقدان الأصابع أو الذراعين أو الساقين. لذلك، نقوم بإدارة هذه العمليات بالتعاون مع المستشفيات الخاصة لتوفير الأطراف الصناعية للجرحى الذين فقدوا أطرافهم. بالإضافة إلى ذلك، نستمر في تقديم الدعم العلاجي مثل جراحة فقدان السمع، وعلاج الحروق وإعادة التأهيل. تكلفة الدعم للوحدة 1000 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "i95j17k39l61",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "m95n17o39p61",
                            "_type": "span",
                            "marks": [],
                            "text": "Palestinians injured in the attacks who were able to cross into Egypt receive only emergency treatment from the Egyptian government. However, no medical procedures are performed for cases involving the loss of fingers, arms, or legs. To address this, we coordinate with private hospitals to provide prosthetic limbs for those who have suffered such losses. Additionally, we continue to support treatments such as hearing loss surgeries, burn treatment, and rehabilitation. The unit support cost is 1,000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "q95r17s39t61",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "u95v17w39x61",
                            "_type": "span",
                            "marks": [],
                            "text": "Saldırılarda yaralanıp Mısır’a tedavi için geçebilen Filistinlilerin sadece acil tedavi kapsamındaki tedavileri Mısır devletince yapılmakta olup parmak, kol, bacak kopmaları gibi durumlarda bir işlem yapılmadığından bu şekilde organ kaybı yaşayan Filistinli yararlılar için özel hastanelerle süreci yöneterek protez imkanı sunuyoruz. Bunun haricinde duyma kaybı ameliyatı, yanık tedavisi rehabilitasyonu gibi tedavi destekleri sağlamaya devam ediyoruz. Birim destek bedeli 1000 TL'dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_key": "d95e17f39g61",
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference"
            }
        ],
        "location": "Egypt",
        "mainImage": "./project-images/protez/1.png",
        "publishedAt": "2025-03-10",
        "slug": "protez",
        "title": {
            "ar": "الأطراف الصناعية",
            "en": "Prosthetics",
            "tr": "Protez"
        },
        "price": "1000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "منذ بداية الهجمات في غزة، قمنا بتوزيع عشرات الآلاف من الطرود الغذائية. تم شراء وتجهيز معظمها في مصر ومحاولة إيصالها إلى غزة عبر الشاحنات. مع تصاعد الهجمات على لبنان، اضطر حوالي مليون شخص إلى ترك مناطقهم، وهناك وزعنا 3600 طرد غذائي. في مصر، يوجد من لم يتمكن من العودة إلى غزة في 7 أكتوبر، والجرحى ومرافقيهم، والفلسطينيين الخارجين من غزة. لهؤلاء، الذين يبلغ عددهم حوالي 140,000 شخص، تم توزيع ما يقارب 5000 طرد غذائي. دعمنا في توزيع الطرود الغذائية مستمر في هذه المناطق. تكلفة الطرد الغذائي الواحد حوالي 1500 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "Since the beginning of the attacks in Gaza, we have distributed tens of thousands of food parcels. Most of them were prepared in Egypt and transported by trucks to Gaza. As the attacks intensified in Lebanon, around one million people had to leave their regions. We distributed 3,600 food parcels in Lebanon. In Egypt, there are those who couldn’t return to Gaza on October 7, the wounded and their caregivers, and Palestinians who fled Gaza. For this population of around 140,000 people, we distributed nearly 5,000 food parcels. Our support through food parcel distribution continues in these regions. The average cost of one food parcel is approximately 1500 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Filistin Gazze’de saldırıların başlangıcından itibaren onbinlerce gıda kolisi dağıtımı gerçekleştirdik. Bunların çoğunluğu Mısır’da alınıp hazırlanan ve tırlar ile Gazze’ye ulaştırılmaya çalışılan yardımlardı. Saldırıların Lübnan’a yönelik şiddetini artırması sonucu Lübnan’da yaklaşık bir milyon kişi kendi yaşadığı bölgeleri terk etmek zorunda kaldı. Bu aşamada Lübnan’da 3600 gıda kolisi dağıtımı gerçekleştirdik. Hem 7 ekim’de Mısır’da olup Gazze’ye dönemeyenler, hem yaralı ve bakıcısı olarak Mısır’a gelenler hem de Gazze’den ayrılan Filistinliler Mısır’da bulunmaktalar. Sayıları 140.000’i bulan bu nüfus için 5000’e yakın gıda kolisi dağıtımı gerçekleştirdik. Gıda kolisi desteklerimiz bahsedilen bölgelerde sürekli devam etmektedir. Bir gıda kolisi bedeli ortalama 1500tl dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "l6huhymp7vrW0JxXG5Ca3M",
                "_type": "reference",
                "_key": "selected-food-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/gida-kolisi/1.png",
        "slug": "gida-kolisi",
        "title": {
            "ar": "طرد غذائي",
            "en": "Food Parcel",
            "tr": "GIDA KOLİSİ"
        },
        "price": "1500 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "مع بدء الهجمات الشديدة على غزة، ومع تجاوز عدد الجرحى قدرة المستشفيات، بدأ علاج الناس أمام أبواب المستشفيات. في هذه المرحلة بدأت حملات توزيع البطانيات، واستمرت بالازدياد بسبب اضطرار الناس إلى ترك منازلهم واستمرار الهجمات على مخيمات اللاجئين المؤقتة، مما أدى إلى موجات نزوح مستمرة. منذ 7 أكتوبر وحتى اليوم، تم توزيع ما يقارب 100,000 بطانية في غزة بالشراكة مع جمعياتنا الشريكة. كما اضطر حوالي مليون شخص في لبنان إلى مغادرة مناطقهم نتيجة تصاعد الهجمات هناك، حيث تم توزيع 3500 بطانية. أنشطة توزيع البطانيات ما زالت مستمرة. تكلفة البطانية الواحدة 200 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "With the start of heavy attacks on Gaza, hospitals became overwhelmed and many injured people began receiving treatment outside hospital buildings. During this time, we began distributing blankets. As people were forced to flee their homes and attacks continued on tent camps, the demand and distribution increased. Since October 7, we have distributed nearly 100,000 blankets in Gaza with our partner organizations. Due to the escalation of attacks in Lebanon, around one million people were displaced, and 3,500 blankets were distributed there. Our blanket distribution efforts are ongoing. The cost of one blanket is 200 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Gazze’ye yönelik ağır saldırıların başlamasıyla birlikte yaralanan birçok insan hastane kapasitelerini aşınca insan hastane önlerinde tedavi edilmeye başladı. Bu süreçte başlayan battaniye dağıtımlarımız süreç boyunca insanların evlerini terk etmek zorunda kalması, sığınılan çadır kamplara yönelik saldırıların devam etmesiyle oluşan sürekli göç sonucu artarak devam etti. 7 ekimden bugüne kadar partner derneklerimizle beraber Gazze’de 100.000’e yakın battaniye dağıtımı gerçekleştirdik. Saldırıların Gazze’den sonra Lübnan’a yönelik de şiddetini artırması sonucu Lübnan’da yaklaşık bir milyon kişi kendi yaşadığı bölgeleri terk etmek zorunda kaldı. Ülke için yaşanan bu göçte 3500 battaniye dağıtımı gerçekleştirdik. Battaniye dağıtım faaliyetlerimiz devam etmektedir. Bir adet battaniye bedeli 200tl’dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "l6huhymp7vrW0JxXG5Caom",
                "_type": "reference",
                "_key": "selected-clothing-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/battaniye/1.png",
        "slug": "battaniye",
        "title": {
            "ar": "بطانية",
            "en": "Blanket",
            "tr": "BATTANİYE"
        },
        "price": "200 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "نقوم بتوزيع التبرعات النقدية مثل الزكاة والفطرة التي يتم جمعها في بلدنا بشكل مباشر في فلسطين ولبنان وسوريا ومصر على فترات منتظمة."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "We regularly distribute cash donations such as zakat, fitrah, and similar aid collected in our country directly by hand in Palestine, Lebanon, Syria, and Egypt."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Ülkemizde yapılan zekat, fitre vb. nakdi bağışların elden teslim şiarıyla Filistin, Lübnan, Suriye ve Mısır’da belirli periyotlarla dağıtımını gerçekleştiriyoruz."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "1wDThe4hFJQC4iuGzeGE8n",
                "_type": "reference",
                "_key": "selected-shelter-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/nakdi-yardim/1.png",
        "slug": "nakdi-yardim",
        "title": {
            "ar": "مساعدة نقدية",
            "en": "Cash Aid",
            "tr": "NAKDİ YARDIM"
        },
        "price": "500 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "في مشروعنا الذي أُنشئ لتأمين معيشة العائلات التي لا يوجد فيها ربّ أسرة قادر على العمل بسبب الإعاقة أو المرض، ولا يوجد أطفال بسنّ العمل، ما زلنا ندعم 54 عائلة في غزة. مع الوضع الذي سيلي وقف إطلاق النار، سيكون هذا المشروع من أهم الاحتياجات للفلسطينيين. تكلفة الدعم الشهري للعائلة الواحدة هي 5000 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "In our project created to support the monthly livelihood of families where the head of the household is disabled, ill, or unable to work, and there are no children of working age, we are currently supporting 54 families in Gaza. After the ceasefire, this project will become one of the most essential needs for Palestinians. The monthly support cost for one family is 5000 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Aile reisinin engelli, hasta vb durumlarda olduğu ve ailede çalışabilecek yaşta çocukların olmadığı ailelerin aylık geçimini sağlamak amacıyla oluşturulan projemizde halen Gazze’de 54 aile bulunmaktadır. Ateşkes sonrası oluşacak durumla birlikte Filistinlilerin en büyük ihtiyaçlarından birisi olacak bu projemiz çok önemli hale gelecektir. Bir aile aylık destek bedeli 5000tl dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "1wDThe4hFJQC4iuGzeGE8n",
                "_type": "reference",
                "_key": "selected-shelter-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/kardes-aile/1.png",
        "slug": "kardes-aile",
        "title": {
            "ar": "عائلة مكفولة",
            "en": "Sponsored Family",
            "tr": "KARDEŞ AİLE"
        },
        "price": "5000 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "نقدم دعمًا شهريًا بقيمة 800 ليرة تركية لأطفال الأيتام حتى سن 14 عامًا. نهدف إلى تعزيز الرابط الروحي بين المتبرعين والأطفال من خلال تبادل الرسائل كل 6 أشهر. واعتبارًا من مارس 2025، يوجد 12,000 يتيمًا في غزة في انتظار الكفالة. تكلفة كفالة اليتيم 800 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "We provide monthly support of 800 TL for orphan children up to the age of 14. We aim to strengthen the emotional bond between donors and children through letter exchanges every 6 months. As of March 2025, there are 12,000 orphans in Gaza waiting for sponsorship. The cost of sponsoring an orphan is 800 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "14 yaşına kadar olan yetim çocuklarımıza aylık 800 TL olmak üzere destek sağlıyoruz. Bağışçılar ile çocukların 6 aylık periyotla mektuplaşmalarını sağlayarak aralarındaki manevi bağın kuvvetlenmesini amaçlıyoruz. 2025 Mart ayı itibari ile Gazze’de 12.000 destek bekleyen yetim bulunmaktadır. Yetim sponsorluk bedeli 800 TL’dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "l6huhymp7vrW0JxXG5CaNg",
                "_type": "reference",
                "_key": "selected-education-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/yetim-sponsorluk/1.png",
        "slug": "yetim-sponsorluk",
        "title": {
            "ar": "كفالة يتيم",
            "en": "Orphan Sponsorship",
            "tr": "YETİM SPONSORLUK"
        },
        "price": "800 TL"
    },
    {
        "_type": "project",
        "body": {
            "ar": [
                {
                    "_key": "a77a2893e3fd",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "167c292a19ea",
                            "_type": "span",
                            "marks": [],
                            "text": "منذ بدء الهجمات الشديدة على الفلسطينيين، فقد الكثير من الناس منازلهم وعائلاتهم. أكثر من تأثر بهذه الأوضاع هم الأطفال، ولهذا نقوم بتنظيم برامج ترفيهية لتخفيف آلامهم النفسية. خلال فترة الهجمات، قمنا بتأمين حلاقة الشعر لآلاف الأطفال. تكلفة دعم الوحدة الواحدة هي 200 ليرة تركية."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "en": [
                {
                    "_key": "378ac2e4aa7e",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "c9f759933af2",
                            "_type": "span",
                            "marks": [],
                            "text": "Since the beginning of the heavy attacks on Palestinians, many people have lost their homes and families. Children have been the most affected, and we organize entertainment programs to help ease their pain. During the attacks, we also helped thousands of children get haircuts. The unit support cost is 200 TL."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ],
            "tr": [
                {
                    "_key": "eb1920d95966",
                    "_type": "block",
                    "children": [
                        {
                            "_key": "503a265a208a",
                            "_type": "span",
                            "marks": [],
                            "text": "Filistinlilere yönelik ağır saldırıların başladığı günden bugüne kadar bir çok insan evini, ailesini kaybetti. Bu süreçten en çok etkilenen başta çocuklar olmak üzere onların acılarını hafifletmeye yönelik eğlence programları düzenliyoruz. Saldırılar boyunca binlerce çocuğun saç traşı olmasını sağladık. Birim destek bedeli 200tl dir."
                        }
                    ],
                    "markDefs": [],
                    "style": "normal"
                }
            ]
        },
        "categories": [
            {
                "_ref": "vAYkxqWoa8xzFVtZM61FAa",
                "_type": "reference",
                "_key": "selected-health-category"
            }
        ],
        "location": "Gazze, Filistin",
        "publishedAt": "2025-03-10",
        "mainImage": "./project-images/cesitli-faaliyetler/1.png",
        "slug": "cesitli-faaliyetler",
        "title": {
            "ar": "أنشطة متنوعة",
            "en": "Various Activities",
            "tr": "ÇEŞİTLİ FAALİYETLER"
        },
        "price": "200 TL"
    },
];


const deleteExistingCategories = async () => {
    try {
        const existingCategories = await client.fetch(`*[_type == "project"]{_id}`);

        if (existingCategories.length === 0) {
            console.log("✅ No existing projects found.");
            return;
        }

        console.log(`🗑 Deleting ${existingCategories.length} existing categories...`);

        for (const category of existingCategories) {
            await client.delete(category._id);
            console.log(`🗑 Deleted: ${category._id}`);
        }

        console.log("✅ All existing projects deleted.");
    } catch (error) {
        console.error("❌ Error deleting existing categories:", error);
    }
};

const importCategories = async () => {
    for (const project of projects) {
        try {
            let imageAsset;
            const imagesDir = path.join(__dirname, `project-images/${project.slug}`);

            // Upload mainImage (1.png)
            if (project.mainImage) {
                console.log(`📷 Uploading main image: ${project.title.en}`);
                const mainImagePath = path.join(imagesDir, '1.png');
                const fileStream = fs.createReadStream(mainImagePath);
                imageAsset = await client.assets.upload('image', fileStream, {
                    filename: `${project.slug}-main.png`,
                });
            }

            // Upload other images (excluding 1.png)
            const allImages = fs.readdirSync(imagesDir)
                .filter(file => file !== '1.png' && /\.(jpe?g|png|webp)$/i.test(file));

            const uploadedImages = [];
            for (const imageFile of allImages) {
                const imagePath = path.join(imagesDir, imageFile);
                const stream = fs.createReadStream(imagePath);
                const uploaded = await client.assets.upload('image', stream, {
                    filename: `${project.slug}-${imageFile}`,
                });
                uploadedImages.push({
                    _type: 'image',
                    _key: Math.random().toString(36).slice(2),
                    asset: {
                        _type: 'reference',
                        _ref: uploaded._id,
                    },
                });
                console.log(`🖼️ Uploaded: ${imageFile}`);
            }

            // Create project with images
            const response = await client.create({
                _type: "project",
                title: project.title,
                slug: { _type: "slug", current: project.slug },
                location: project.location,
                categories: project.categories,
                publishedAt: project.publishedAt,
                price: project.price,
                ...((project.mainImage && imageAsset) ? {
                    mainImage: {
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: imageAsset._id,
                        },
                    },
                } : {}),
                ...(uploadedImages.length > 0 ? { images: uploadedImages } : {}),
                body: {
                    en: project.body.en,
                    tr: project.body.tr,
                    ar: project.body.ar
                }
            });

            console.log(`✅ Imported: ${project.title.en}`);
        } catch (error) {
            console.error(`❌ Error importing ${project.title.en}:`, error);
        }
    }
};


// Function to import new categories
// const importCategories = async () => {
//     for (const project of projects) {
//         try {
//             let imageAsset;
//             if (project.mainImage) {
//                 console.log(`📷 Uploading image: ${project.title.en}`);
//                 const imagePath = path.join(__dirname, `project-images/${project.slug}/1.png`);
//                 const fileStream = fs.createReadStream(imagePath);
//                 imageAsset = await client.assets.upload('image', fileStream, {
//                     filename: `${project.slug}.png`,
//                 });
//             }

//             const response = await client.create({
//                 _type: "project",
//                 title: project.title,
//                 slug: { _type: "slug", current: project.slug },
//                 location: project.location,
//                 categories: project.categories,
//                 publishedAt: project.publishedAt,
//                 price: project.price,
//                 ...((project.mainImage && imageAsset) ? {
//                     mainImage: {
//                         _type: "image",
//                         asset: {
//                             _type: "reference",
//                             _ref: imageAsset._id,
//                         },
//                     },
//                 } : {}),
//                 body: {
//                     en: project.body.en,
//                     tr: project.body.tr,
//                     ar: project.body.ar
//                 }
//             });
//             console.log(`✅ Imported: ${project.title.en}`);
//         } catch (error) {
//             console.error(`❌ Error importing ${project.title.en}:`, error);
//         }
//     }
// };

const runImport = async () => {
    await deleteExistingCategories();
    await importCategories();
};

runImport()
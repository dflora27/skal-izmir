import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Skål International İzmir | Skål International İzmir", description: "Skål International İzmir Skål International İzmir sayfası." },
    en: { title: "Skål International Izmir | Skål International Izmir", description: "Skål International Izmir Skål International Izmir page." },
    es: { title: "Skål International Esmirna | Skål International Esmirna", description: "Página de Skål International Esmirna de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

const HISTORY_PILLARS: Record<string, { year: string; desc: string }[]> = {
  tr: [
    { year: "1956", desc: "Türkiye’nin halen devam eden ilk Uluslararası Fuarı." },
    { year: "1960", desc: "İstanbul’dan sonra direkt uluslararası uçuşlara hizmet veren ilk nokta: Çiğli Havalimanı." },
    { year: "1962", desc: "İlk Türk otel zincirinin öncülerinden Bergama Tusan Motel." },
    { year: "1964", desc: "Uluslararası standartlardaki ilk 5 yıldızlı otellerden Büyük Efes Oteli." },
    { year: "1967", desc: "Türkiye’nin ilk yabancı tatil köyü Foça Tatil Köyü (Türkiye’deki ilk Club Med)." },
    { year: "1969", desc: "İlk Türk tatil köyü Nebioğlu Tatil Köyü." },
    { year: "1972", desc: "Akdeniz Olimpiyatları’na ev sahipliği yaparak uluslararası turizm kimliğini pekiştirmesi." }
  ],
  en: [
    { year: "1956", desc: "Turkey's first International Fair, which is still ongoing." },
    { year: "1960", desc: "The first point outside of Istanbul to serve direct international flights: Çiğli Airport." },
    { year: "1962", desc: "Bergama Tusan Motel, one of the pioneers of the first Turkish hotel chain." },
    { year: "1964", desc: "Büyük Efes Hotel, one of the first 5-star hotels at international standards." },
    { year: "1967", desc: "Turkey's first foreign holiday village, Foça Holiday Village (the first Club Med in Turkey)." },
    { year: "1969", desc: "The first Turkish holiday village, Nebioğlu Holiday Village." },
    { year: "1972", desc: "Consolidated its international tourism identity by hosting the Mediterranean Olympics." }
  ],
  es: [
    { year: "1956", desc: "La primera Feria Internacional de Turquía, que aún continúa." },
    { year: "1960", desc: "El primer punto fuera de Estambul en servir vuelos internacionales directos: el Aeropuerto de Çiğli." },
    { year: "1962", desc: "Bergama Tusan Motel, uno de los pioneros de la primera cadena hotelera turca." },
    { year: "1964", desc: "Büyük Efes Hotel, uno de los primeros hoteles de 5 estrellas de estándares internacionales." },
    { year: "1967", desc: "El primer pueblo de vacaciones extranjero de Turquía, Foça Holiday Village (el primer Club Med en Turquía)." },
    { year: "1969", desc: "El primer pueblo de vacaciones turco, Nebioğlu Holiday Village." },
    { year: "1972", desc: "Consolidó su identidad turística internacional al albergar las Olimpiadas del Mediterráneo." }
  ]
};

const MILESTONES: Record<string, { period: string; president: string; desc: string }[]> = {
  tr: [
    { period: "1974 - 2002", president: "Josef Keşişyan", desc: "28 yıl aralıksız sürdürdüğü başkanlığı boyunca Skål’un ülkemizde yaygınlaşmasına devasa katkılar sunmuş, ardından Skål International tarafından Onur Üyeliği unvanına layık görülmüştür." },
    { period: "2002", president: "Ali Acundaş", desc: "Bayrağı devralan Ali Acundaş, kulübümüzün Onur Üyesi olarak Skål değerlerini ileriye taşımıştır." },
    { period: "2008", president: "Faik Alsaç", desc: "Kulübümüz, farklı üye profillerinin katılımıyla büyüme trendine girmiş ve USDF’nin kuruluşuna paralel olarak kurumsal kimliğini pekiştirmiştir." },
    { period: "2012", president: "Nihat Levent", desc: "Skål Dünya Kongresi adaylığı ve uluslararası yoğun katılım sayesinde İzmir, küresel ölçekte tanıtılmıştır." },
    { period: "2016", president: "Berrin Uşkay", desc: "Kulübümüzün ilk kadın başkanı olarak sektörel krizlere rağmen 50. Yıl kutlamaları ve uluslararası kardeş kulüp anlaşmalarıyla başarı dolu bir dönem yönetmiştir." },
    { period: "2018 - 2021", president: "Emre Gezgin", desc: "STK liderlerinin katılımıyla oluşan sinerji sonucunda kulübümüz, İzmir İl Kültür ve Turizm Müdürlüğü’nden “Farkındalık Ödülü” almış ve 2020’de “Dünyanın En İyi 2. Kulübü” seçilmiştir." },
    { period: "2021 - 2025", president: "Güner Güney", desc: "Dünya Kongresi ev sahipliği sürecini yöneterek İzmir'e eşsiz bir global prestij kazandırmıştır." },
    { period: "2025 - Günümüz", president: "Aydın Tokbaş", desc: "Sürdürülebilirlik ilkeleri çerçevesinde kulübün vizyoner projelerini başarıyla yürütmektedir." }
  ],
  en: [
    { period: "1974 - 2002", president: "Josef Keşişyan", desc: "During his uninterrupted 28-year presidency, he made immense contributions to the spread of Skål in our country and was later awarded Honorary Membership by Skål International." },
    { period: "2002", president: "Ali Acundaş", desc: "Taking over the flag, Ali Acundaş advanced Skål values as an Honorary Member of our club." },
    { period: "2008", president: "Faik Alsaç", desc: "With the participation of different member profiles, our club entered a growth trend and solidified its corporate identity parallel to the establishment of USDF." },
    { period: "2012", president: "Nihat Levent", desc: "Through the nomination for the Skål World Congress and intense international participation, Izmir was promoted on a global scale." },
    { period: "2016", president: "Berrin Uşkay", desc: "As our club's first female president, despite sectorial crises, she managed a successful term with 50th Anniversary celebrations and international twinning club agreements." },
    { period: "2018 - 2021", president: "Emre Gezgin", desc: "As a result of the synergy created by the participation of NGO leaders, our club received the 'Awareness Award' from the Izmir Provincial Directorate of Culture and Tourism and was selected as the '2nd Best Club in the World' in 2020." },
    { period: "2021 - 2025", president: "Güner Güney", desc: "By managing the hosting process of the World Congress, he brought unique global prestige to Izmir." },
    { period: "2025 - Present", president: "Aydın Tokbaş", desc: "Successfully carrying out the club's visionary projects within the framework of sustainability principles." }
  ],
  es: [
    { period: "1974 - 2002", president: "Josef Keşişyan", desc: "Durante su presidencia ininterrumpida de 28 años, hizo enormes contribuciones a la difusión de Skål en nuestro país y luego fue galardonado con una Membresía Honoraria por Skål International." },
    { period: "2002", president: "Ali Acundaş", desc: "Al tomar el relevo, Ali Acundaş avanzó los valores de Skål como Miembro Honorario de nuestro club." },
    { period: "2008", president: "Faik Alsaç", desc: "Con la participación de diferentes perfiles de miembros, nuestro club entró en una tendencia de crecimiento y consolidó su identidad corporativa paralelamente al establecimiento de USDF." },
    { period: "2012", president: "Nihat Levent", desc: "A través de la nominación para el Congreso Mundial de Skål y la intensa participación internacional, Esmirna se promovió a nivel mundial." },
    { period: "2016", president: "Berrin Uşkay", desc: "Como la primera mujer presidenta de nuestro club, a pesar de las crisis sectoriales, logró un mandato exitoso con las celebraciones del 50º Aniversario y acuerdos de clubes hermanos internacionales." },
    { period: "2018 - 2021", president: "Emre Gezgin", desc: "Como resultado de la sinergia creada por la participación de líderes de ONG, nuestro club recibió el 'Premio a la Conciencia' de la Dirección Provincial de Cultura y Turismo de Esmirna y fue seleccionado como el '2º Mejor Club del Mundo' en 2020." },
    { period: "2021 - 2025", president: "Güner Güney", desc: "Al liderar el proceso de organización del Congreso Mundial, aportó un prestigio global único a Esmirna." },
    { period: "2025 - Presente", president: "Aydın Tokbaş", desc: "Llevando a cabo con éxito los proyectos visionarios del club en el marco de los principios de sostenibilidad." }
  ]
};

const PAGE_CONTENT = {
  tr: {
    heroSub: "Medeniyetlerin ve Turizmin Öncü Kenti",
    introP1: "Farklı medeniyetlerin kuruluşuna ve gelişimine ön ayak olan tarihi, kültürel ve ekonomik dokusuyla İzmir; ülkemizin çok kültürlülüğünü yüzyıllar boyu temsil ederek Türkiye turizminin gelişimine her açıdan önderlik etmiştir.",
    introP2: "Tarihe meydan okuyan ihracat limanıyla yarı endüstriyel ürünlerini dünya limanlarına taşıma hüviyetine sahip olan kentimiz, kuruluşu 19. yüzyıla dayanan yabancı dilde eğitim veren kurumları sayesinde turizmden önce <strong>“dünya vatandaşı”</strong> kavramıyla tanışma şansına sahip olmuştur.",
    introP31: "“Levanten”",
    introP32: "kelimesinin dünyaya yayılmasına vesile olan şehrimiz; çok kültürlülüğü sosyal, kültürel ve ekonomik bağlamda dünya ile paylaşmış, farklı kültürlerle olan iletişim dostluğunu yüzyılları aşan bir birikimle sürdürmüştür.",
    timelineTitle: "Köklü Birikimin Sonuçları",
    timelineQuote: "\"Dünyanın yedi harikasından birine ve UNESCO Dünya Miraslarına ev sahipliği yapan İzmir’de, Skål ruhunun bu denli kabul görmesi bir tesadüf değildir.\"",
    unescoP: "İzmir'in Efes gibi UNESCO miraslarına sahip zengin tarihi, kentin \"Tarihi Liman Kenti\" unvanıyla 2020'de geçici listeye girmesi ve Green Destinations gibi sürdürülebilir turizm hedefleri 2025-2028 sürecinde kentin kültürel ve tarihi kimliğini uluslararası arenada pekiştirecektir.",
    unescoTitle: "İzmir'in UNESCO ve Turizm Gelişim Süreci",
    unescoItem1Title: "İzmir Tarihi Liman Kenti",
    unescoItem1Desc: "Kemeraltı, Basmane ve çevresini kapsayan bölge, 2020 yılında UNESCO Dünya Mirası Geçici Listesi'ne girmiştir. Bu proje, Helenistik dönemden günümüze uzanan ticari mirası korumayı amaçlar.",
    unescoItem2Title: "UNESCO Mirasları",
    unescoItem2Desc: "2015 yılında Efes Antik Kenti, Çukuriçi Höyük, Ayasuluk Tepesi ve Meryem Ana Evi UNESCO Dünya Mirası listesine girmiştir.",
    historyTitle: "Tarihçemiz",
    historyP: "Skål International İzmir Kulübü, 16 Mart 1966’da İzmir Kilim Hotel’de gerçekleşen Genel Kurul sonrası, vizyoner profesyonel turizmci tarafından kurulmuştur.",
    foundersTitle: "Kurucu Üyelerimiz",
    foundersP: "Türkiye’de İstanbul ve Ankara’dan sonra kurulan <strong class=\"text-[#0A192F] font-medium\">üçüncü Skål kulübü</strong> olma özelliğini taşıyan kulübümüzün ilk başkanı, dönemin İzmir İl Kültür ve Turizm Müdürü Hüseyin Avni Sezer’dir.",
    milestonesTitle: "Kilometre Taşları ve Başkanlarımız",
    currentTitle: "Bugünü ve Gücü",
    currentP: "Günümüzde 75 üyeden oluşan Skål International İzmir Kulübü, evrensel prensipleri yerel değerlerle buluşturarak kent turizmine yön veren güçlü bir aile ve iletişim ağı yaratmaya devam etmektedir.",
    multiLangTitle: "Çok Kültürlü Yapı",
    multiLangSub: "Üyelerimiz arasında konuşulan diller;",
    langsResult: ["İngilizce", "Fransızca", "Almanca", "İtalyanca", "İspanyolca", "Portekizce", "Yunanca", "İbranice", "Arapça"],
    activityTitle: "Faaliyet Alanları",
    activitiesResult: [
      "Şehir, Resort ve Butik Otelcilik",
      "Incoming, Outgoing ve Ingoing Seyahat Acentaları",
      "Sağlık Turizmi, Agro-Turizm ve Eko-Turizm",
      "Müzecilik, Ulaşım, Rent a Car ve Catering",
      "Turizm Yazarlığı, Blog Yazarlığı ve Danışmanlık"
    ],
    awardsTitle: "Ödüllerimiz ve Etkimiz",
    awards: [
      { year: "1995", desc: "İzmir Kulübü 1991’de Bodrum, 1995 yılında da Kuşadası kulüplerinin kurucu sponsoru olmuştur." },
      { year: "2019", desc: "İzmir turizmine katkılarımızdan dolayı Artemis Farkındalık Onur Ödülü'nü alan ilk STK olduk." },
      { year: "2020", desc: "7 kıta ve 103 ülkeden 19 rakip kulübü geride bırakarak <strong class=\"text-white\">“Dünyanın En İyi 2. Skål Kulübü”</strong> seçildik." }
    ],
    visionTitle: "Skål International İzmir'in Turizm Vizyonu",
    visionP: "Sahip olduğu derin tarihsel doku, kültürel mirası ve sürdürülebilir turizm çalışmaları sayesinde bünyesinde barındırdığı tüm paydaş STK temsilcileri ile birlikte yarattığı sinerji ile İzmir'i uluslararası turizmin odak noktası haline getirmek.",
    congressTitle: "Dünya Kongresi",
    congressP1: "Skål International Dünya Kongresi her sene dünyanın farklı bir destinasyonunda bir kulübün ev sahipliğinde, birliğe üye turizm profesyonellerinin katılımıyla gerçekleşmektedir. Bu üst segment etkinliğin ev sahibi şehir üzerindeki etkisi, klasik bir kongrenin çok ötesine geçer.",
    congressP2: "Özellikle MICE ve destinasyon markalaşması açısından “katalizör” rolü oynayan organizasyon, ev sahibi şehre kısa vadede yüksek harcama yapan uluslararası turizm profesyonelleri sayesinde ekonomik katkı ve güçlü bir global tanıtım sağlar. Uzun vadede ise şehir MICE, gastronomi, kültür ve deneyim turizmi alanları başta olmak üzere tüm segmentler için yeni iş birlikleri, tur paketleri ve sürdürülebilir turizm talebi yaratır.",
    congressP3: "Skål International İzmir Kulübü, ilk önce 2017 yılında bu prestijli organizasyonun ev sahipliği için Berrin Uşkay liderliğinde aday olmuş, ancak yarışı Hindistan'ın Haydarabad kazanmıştır, bu tecrübe ile çalışmalarına azim ile devam eden İzmir, 2022'de hayalini gerçekleştirerek, Güner Güney başkanlığındaki yönetim kurulunun özverili çalışmalarıyla Bükreş (Romanya), St. Petersburg (Rusya) ve Kalküta (Hindistan) şehirlerini geçip, büyük bir başarı göstererek bu prestijli kongreyi 1993 İstanbul ve 2007 Antalya kongrelerinden sonra Türkiye'de üçüncü kez, İzmir'de ise ilk kez 2024 yılında düzenlemiştir. Bu etkinliğin yaratmış olduğu etkileşim, kentin tanıtımı ve turizmi için önemli bir atağı tetiklemiştir.",
    twinningTitle: "Twinning Clubs",
    twinningP1: "Skål International Twinning Clubs (Kardeş Kulüp) uygulaması, farklı ülkelerdeki Skål kulüplerinin resmi olarak eşleşerek uzun vadeli iş birliği kurmasıdır. Bu eşleşmeler sayesinde kulüpler; bilgi paylaşımı, ortak etkinlikler, karşılıklı ziyaretler ve ticari fırsatlar geliştirir.",
    twinningP2: "Bu sayede kardeş kulüpler arasında uluslararası network ve iş geliştirme hızlanır, destinasyonlar arasında turizm akışı ve tanıtım artar, üyeler için somut iş fırsatlarına dönüşen ilişkiler oluşur. Kısaca Twinning, Skål hareketinin “Doing Business Among Friendship” yaklaşımını en somut hale getiren araçlardan biridir.",
    twinningP3: "Skål International İzmir kulübü, şu ana kadar Skål International Atlanta, Skål International Roma ve Skål International Cape Town kulüpleri ile twinning (kardeş kulüp) anlaşması imzalamıştır.",
  },
  en: {
    heroSub: "The Pioneering City of Civilizations and Tourism",
    introP1: "Izmir, with its historical, cultural, and economic texture that spearheaded the establishment and development of various civilizations, has represented the multiculturalism of our country for centuries and has continuously led the development of Turkish tourism in every aspect.",
    introP2: "Our city, holding the identity of carrying semi-industrial products to world ports through an export port that defies time, had the chance to meet the concept of <strong>“world citizen”</strong> before tourism, thanks to its foreign language educational institutions dating back to the 19th century.",
    introP31: "“Levantine”",
    introP32: "Our city, which brought the word to the world, shared multiculturalism socially, culturally, and economically with the globe, and sustained communication friendships with different cultures with centuries of accumulation.",
    timelineTitle: "The Results of a Deep-Rooted Heritage",
    timelineQuote: "\"It is no coincidence that the Skål spirit is so welcomed in Izmir, which hosts one of the Seven Wonders of the World and UNESCO World Heritages.\"",
    unescoP: "Izmir's rich history, housing UNESCO heritages like Ephesus, entering the tentative list in 2020 as the 'Historical Port City,' and sustainable tourism goals like Green Destinations will solidify the city's cultural and historical identity in the international arena during the 2025-2028 process.",
    unescoTitle: "Izmir's UNESCO and Tourism Development Process",
    unescoItem1Title: "Izmir Historical Port City",
    unescoItem1Desc: "The region covering Kemeraltı, Basmane, and their surroundings entered the UNESCO World Heritage Tentative List in 2020. This project aims to preserve the commercial heritage stretching from the Hellenistic period to the present day.",
    unescoItem2Title: "UNESCO Heritages",
    unescoItem2Desc: "In 2015, the Ancient City of Ephesus, Çukuriçi Mound, Ayasuluk Hill, and the House of the Virgin Mary entered the UNESCO World Heritage list.",
    historyTitle: "Our History",
    historyP: "Skål International Izmir Club was established by visionary tourism professionals following the General Assembly held at Izmir Kilim Hotel on March 16, 1966.",
    foundersTitle: "Our Founding Members",
    foundersP: "Our club, standing as the <strong class=\"text-[#0A192F] font-medium\">third Skål club</strong> established in Turkey after Istanbul and Ankara, had its first president as the Provincial Director of Culture and Tourism of that era, Hüseyin Avni Sezer.",
    milestonesTitle: "Milestones and Our Presidents",
    currentTitle: "Its Present and Strength",
    currentP: "Today, Skål International Izmir Club, consisting of 75 members, continues to create a powerful family and communication network that guides city tourism by blending universal principles with local values.",
    multiLangTitle: "Multicultural Structure",
    multiLangSub: "Languages spoken among our members;",
    langsResult: ["English", "French", "German", "Italian", "Spanish", "Portuguese", "Greek", "Hebrew", "Arabic"],
    activityTitle: "Fields of Activity",
    activitiesResult: [
      "City, Resort and Boutique Hotel Management",
      "Incoming, Outgoing and Ingoing Travel Agencies",
      "Health Tourism, Agro-Tourism, and Eco-Tourism",
      "Museology, Transportation, Rent a Car, and Catering",
      "Tourism Writing, Blogging, and Consulting"
    ],
    awardsTitle: "Our Awards and Impact",
    awards: [
      { year: "1995", desc: "Izmir Club became the founding sponsor of the Bodrum club in 1991 and the Kuşadası clubs in 1995." },
      { year: "2019", desc: "We became the first NGO to receive the Artemis Awareness Honorary Award for our contributions to Izmir's tourism." },
      { year: "2020", desc: "We were selected as the <strong class=\"text-white\">“2nd Best Skål Club in the World”</strong> leaving behind 19 competing clubs from 7 continents and 103 countries." }
    ],
    visionTitle: "The Tourism Vision of Skål International Izmir",
    visionP: "To make Izmir the focal point of international tourism through the synergy created with all stakeholder NGO representatives it harbors, thanks to its deep historical texture, cultural heritage, and sustainable tourism efforts.",
    congressTitle: "World Congress",
    congressP1: "The Skål International World Congress takes place every year in a different destination around the world, hosted by a club and attended by tourism professional members of the association. The impact of this top-segment event on the host city goes far beyond a classic congress.",
    congressP2: "Playing a 'catalyst' role, especially in terms of MICE and destination branding, the organization provides economic contribution and strong global promotion in the short term thanks to high-spending international tourism professionals. In the long term, it sparks new collaborations, tour packages, and a demand for sustainable tourism across all segments—particularly MICE, gastronomy, cultural and experiential tourism.",
    congressP3: "Skål International Izmir Club first became a candidate under the leadership of Berrin Uşkay to host this prestigious organization in 2017, but the race was won by Hyderabad, India. Persisting in its efforts with determination after this experience, Izmir achieved its dream in 2022. Through the dedicated works of the board led by Güner Güney, it surpassed Bucharest (Romania), St. Petersburg (Russia), and Kolkata (India), demonstrating a great success to host this prestigious congress for the third time in Turkey (following 1993 Istanbul and 2007 Antalya) and for the first time in Izmir in 2024. The interaction generated by this event triggered an important leap for the city's promotion and tourism.",
    twinningTitle: "Twinning Clubs",
    twinningP1: "The Skål International Twinning Clubs application is the formal pairing of Skål clubs in different countries to establish long-term cooperation. Through these pairings, clubs develop information sharing, joint events, reciprocal visits, and commercial opportunities.",
    twinningP2: "In this way, international networking and business development accelerate between twinning clubs, tourism flows and promotional activities increase between destinations, and connections are built for members that turn into concrete commercial opportunities. Briefly put, Twinning is one of the most visible instruments reflecting the 'Doing Business Among Friendship' approach of the Skål movement.",
    twinningP3: "The Skål International Izmir club currently has twinning agreements with Skål International Atlanta, Skål International Rome, and Skål International Cape Town clubs.",
  },
  es: {
    heroSub: "La Ciudad Pionera en Civilizaciones y Turismo",
    introP1: "Esmirna, con su tejido histórico, cultural y económico que lideró el establecimiento y desarrollo de diversas civilizaciones, ha representado el multiculturalismo de nuestro país durante siglos y ha sido continuamente pionera en el desarrollo del turismo turco en todos los sentidos.",
    introP2: "Nuestra ciudad, que tiene la identidad de llevar productos semiindustriales a los puertos del mundo a través de un puerto de exportación que desafía el tiempo, tuvo la oportunidad de conocer el concepto de <strong>'ciudadano del mundo'</strong> antes que el turismo, gracias a sus instituciones educativas en lenguas extranjeras que datan del siglo XIX.",
    introP31: "“Levantino”",
    introP32: "Nuestra ciudad, que extendió esta palabra por el mundo, compartió el multiculturalismo social, cultural y económicamente, y sostuvo sus amistades de comunicación con diferentes culturas con la herencia de los siglos.",
    timelineTitle: "Los Resultados de una Herencia Profundamente Arraigada",
    timelineQuote: "\"No es coincidencia que el espíritu Skål sea tan bienvenido en Esmirna, que alberga una de las Siete Maravillas del Mundo y Patrimonios de la Humanidad por la UNESCO.\"",
    unescoP: "La rica historia de Esmirna, albergando patrimonios de la UNESCO como Éfeso, entrando en la lista indicativa en 2020 como 'Ciudad Portuaria Histórica' y los objetivos de turismo sostenible como Destinos Verdes, solidificarán la identidad cultural e histórica de la ciudad en la arena internacional durante el proceso 2025-2028.",
    unescoTitle: "El Proceso de Desarrollo de UNESCO y Turismo en Esmirna",
    unescoItem1Title: "Ciudad Portuaria Histórica de Esmirna",
    unescoItem1Desc: "La región que abarca Kemeraltı, Basmane y sus alrededores ingresó a la Lista Indicativa del Patrimonio Mundial de la UNESCO en 2020. Este proyecto tiene como objetivo preservar el patrimonio comercial que se extiende desde el período helenístico hasta la actualidad.",
    unescoItem2Title: "Patrimonios de la UNESCO",
    unescoItem2Desc: "En 2015, la Ciudad Antigua de Éfeso, el Montículo Çukuriçi, la Colina Ayasuluk y la Casa de la Virgen María entraron en la lista del Patrimonio Mundial de la UNESCO.",
    historyTitle: "Nuestra Historia",
    historyP: "El Club Skål International Esmirna fue establecido por profesionales visionarios del turismo tras la Asamblea General celebrada en el Hotel Kilim de Esmirna el 16 de marzo de 1966.",
    foundersTitle: "Nuestros Miembros Fundadores",
    foundersP: "Alineándose como el <strong class=\"text-[#0A192F] font-medium\">tercer club Skål</strong> establecido en Turquía después de Estambul y Ankara, nuestro club tuvo como primer presidente al Director Provincial de Cultura y Turismo de esa época, Hüseyin Avni Sezer.",
    milestonesTitle: "Hitos y Nuestros Presidentes",
    currentTitle: "Su Presente y Fortaleza",
    currentP: "Hoy en día, el Club Skål International Esmirna, compuesto por 75 miembros, continúa creando una familia sólida y una red de comunicación que guía el turismo en la ciudad al fusionar principios universales con valores locales.",
    multiLangTitle: "Estructura Multicultural",
    multiLangSub: "Idiomas hablados entre nuestros miembros;",
    langsResult: ["Inglés", "Francés", "Alemán", "Italiano", "Español", "Portugués", "Griego", "Hebreo", "Árabe"],
    activityTitle: "Ámbitos de Actividad",
    activitiesResult: [
      "Gestión de Hoteles de Ciudad, Resorts y Hoteles Boutique",
      "Agencias de Viajes Emisoras, Receptoras e Internas",
      "Turismo de Salud, Agroturismo y Ecoturismo",
      "Museología, Transporte, Alquiler de Autos y Catering",
      "Redacción sobre Turismo, Blogging y Consultoría"
    ],
    awardsTitle: "Nuestros Premios e Impacto",
    awards: [
      { year: "1995", desc: "El Club de Esmirna se convirtió en el patrocinador fundador del club Bodrum en 1991 y los clubes de Kuşadası en 1995." },
      { year: "2019", desc: "Nos convertimos en la primera ONG en recibir el Premio de Honor a la Conciencia Artemis por nuestras contribuciones al turismo en Esmirna." },
      { year: "2020", desc: "Fuimos seleccionados como el <strong class=\"text-white\">“Segundo Mejor Club Skål del Mundo”</strong> superando a 19 clubes competidores de 7 continentes y 103 países." }
    ],
    visionTitle: "La Visión Turística de Skål International Esmirna",
    visionP: "Convertir a Esmirna en el punto focal del turismo internacional a través de la sinergia creada con todos los representantes de ONG asociados que alberga, gracias a su rica textura histórica, patrimonio cultural y esfuerzos de turismo sostenible.",
    congressTitle: "Congreso Mundial",
    congressP1: "El Congreso Mundial de Skål International se lleva a cabo cada año en un destino diferente alrededor del mundo, organizado por un club local y con la participación de profesionales del turismo miembros de la asociación. El impacto de este evento de máxima categoría en la ciudad anfitriona va mucho más allá de un congreso tradicional.",
    congressP2: "Actuando como un «catalizador», especialmente en áreas como MICE (Reuniones, Incentivos, Convenciones y Exposiciones) y desarrollo de marcas a destinos, la organización aporta un nivel económico en el corto plazo y una fuerte exposición global gracias a la participación de turistas internacionales que gastan grandes sumas. A largo plazo, el evento genera la creación de colaboraciones, paquetes turísticos y opciones sostenibles para el turismo para todas las áreas.",
    congressP3: "El Club Skål International de Esmirna se postuló en 2017 por el liderazgo de Berrin Uşkay para ser anfitrión del evento pero la contienda fue ganada por la ciudad India de Hyderabad. A raíz de esta experiencia la ciudad intensificó sus esfuerzos con tenacidad logrando materializar un sueño en 2022 de la mano de la gestión del equipo de Güner Güney, siendo elegida a nivel local entre destinos locales que incluyeron a Bucarest, San Petersburgo y Calcuta. A partir de ello el Congreso en el 2024 se concretó en la ciudad en el contexto del tercer congreso al nivel del país.",
    twinningTitle: "Clubes Hermanos",
    twinningP1: "La iniciativa de los Clubes Hermanos de Skål International representa el acuerdo formales mediante los cuales clubes Skål en diferentes regiones cooperan sistemáticamente a largo plazo. Por medio de ambos se busca generar desarrollo de información en la ejecución y promover conexiones comerciales compartidas.",
    twinningP2: "Gracias a eso se fortalecen aspectos internacionales entre las relaciones comerciales haciendo prosperar su nivel a nivel de negocio en aspectos turísticos. A mediano plazo 'Twinning' resuena el lema de los Skål haciendo comercio entre amigos.",
    twinningP3: "El club de Skål International de Esmirna ha mantenido acuerdos hermanados con los clubes internacionales en Roma, Skål International Atlanta y con Cape Town en el marco global.",
  }
};

export default async function SkalIzmirPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const historyPillars = HISTORY_PILLARS[lang] || HISTORY_PILLARS.en;
  const milestones = MILESTONES[lang] || MILESTONES.en;
  const t = PAGE_CONTENT[lang] || PAGE_CONTENT.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Title Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål International İzmir Logo" className="w-[300px] md:w-[400px] object-contain mb-8 mix-blend-multiply drop-shadow-sm" />
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
             {t.heroSub}
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 bg-[#FDFDFD]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 font-light text-xl text-slate-600 leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.introP1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.introP2 }} />
            <p>
              <span className="text-[#0A192F] font-medium border-b-2 border-blue-600 pb-1">{t.introP31}</span> {t.introP32}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">{t.timelineTitle}</h2>
           <div className="max-w-5xl mx-auto grid xl:grid-cols-2 gap-x-16 gap-y-12">
              {historyPillars.map((item, idx) => (
                 <div key={idx} className="flex gap-6 items-start group">
                    <div className="font-serif text-3xl font-bold text-blue-400 group-hover:text-white transition-colors duration-300 w-24 shrink-0">{item.year}</div>
                    <div className="text-blue-100/80 font-light leading-relaxed border-l border-blue-800 pl-6 group-hover:border-blue-400 transition-colors duration-300">
                       {item.desc}
                    </div>
                 </div>
              ))}
           </div>
           <p className="mt-20 max-w-3xl mx-auto text-center text-xl text-blue-200/60 font-light italic">
              {t.timelineQuote}
           </p>

           <div className="mt-16 max-w-4xl mx-auto">
             <p className="text-lg text-blue-100 font-light leading-relaxed mb-10">
               {t.unescoP}
             </p>
             <h3 className="text-2xl font-serif text-white mb-6">{t.unescoTitle}</h3>
             <div className="space-y-6">
               <div className="bg-blue-900/40 p-6 md:p-8 rounded-2xl border border-blue-800">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">{t.unescoItem1Title}</h4>
                  <p className="text-blue-100/90 font-light leading-relaxed">{t.unescoItem1Desc}</p>
               </div>
               <div className="bg-blue-900/40 p-6 md:p-8 rounded-2xl border border-blue-800">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">{t.unescoItem2Title}</h4>
                  <p className="text-blue-100/90 font-light leading-relaxed">{t.unescoItem2Desc}</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* History & Founders */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                 <h2 className="text-4xl font-serif text-[#0A192F] mb-6">{t.historyTitle}</h2>
                 <p className="text-lg font-light text-slate-500 leading-relaxed">
                    {t.historyP}
                 </p>
              </div>
              <div className="lg:w-2/3 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center">
                 <h4 className="uppercase tracking-[0.2em] font-bold text-xs text-slate-400 mb-6">{t.foundersTitle}</h4>
                 <div className="flex flex-wrap gap-4 text-xl font-serif text-[#0A192F]">
                    {["Josef Keşişyan", "Jean Zacharie", "Haluk Kilimci", "Erol Doktoroğlu", "Ergun Göksan", "Halis Temel", "Hüseyin Avni Sezer"].map((name, i) => (
                       <span key={i} className="bg-slate-50 px-5 py-2 rounded-full border border-slate-100">{name}</span>
                    ))}
                 </div>
                 <p className="mt-8 text-slate-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.foundersP }} />
              </div>
           </div>
        </div>
      </section>

      {/* Milestones / Presidents */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-4xl font-serif text-[#0A192F] mb-16 text-center">{t.milestonesTitle}</h2>
           <div className="max-w-4xl mx-auto space-y-12">
              {milestones.map((stone, idx) => (
                 <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
                    <div className="md:w-1/4 pt-1">
                       <span className="font-bold tracking-widest text-slate-400 uppercase text-sm block mb-1">{stone.period}</span>
                       <span className="font-serif text-2xl text-[#0A192F]">{stone.president}</span>
                    </div>
                    <div className="md:w-3/4 relative">
                       {/* Line connector */}
                       <div className="absolute -left-6 top-2 bottom-0 w-px bg-slate-200 hidden md:block group-last:bg-transparent"></div>
                       {/* Dot */}
                       <div className="absolute -left-[27px] top-3 w-2 h-2 rounded-full bg-[#0A192F] hidden md:block shadow-[0_0_0_4px_white]"></div>
                       
                       <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-slate-600 font-light leading-relaxed shadow-sm transition-shadow group-hover:shadow-md">
                          {stone.desc}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Current State & Awards */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
           
           <div className="space-y-12">
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">{t.currentTitle}</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {t.currentP}
                 </p>
              </div>

              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-6">{t.multiLangTitle}</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed mb-4 border-l-2 border-blue-600 pl-4">
                    {t.multiLangSub}
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {t.langsResult.map(lang => (
                       <span key={lang} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-semibold tracking-wider text-slate-600">{lang}</span>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-6">{t.activityTitle}</h3>
                 <ul className="space-y-4">
                    {t.activitiesResult.map((area, i) => (
                       <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                          <span className="text-slate-600 font-medium">{area}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-[#0A192F] p-10 rounded-3xl shadow-xl text-white">
                 <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                   {t.awardsTitle}
                 </h3>
                 <ul className="space-y-6">
                    {t.awards.map((award, i) => (
                     <li key={i} className="flex gap-4 items-start">
                        <span className="font-bold text-yellow-400 mt-1 shrink-0 px-2 border border-yellow-400/30 rounded">{award.year}</span>
                        <span className="text-blue-100/90 font-light" dangerouslySetInnerHTML={{ __html: award.desc }} />
                     </li>
                    ))}
                 </ul>
              </div>
            </div>
        </div>

        {/* Added sections (moved out of grid to span full width layout correctly) */}
        <div className="container mx-auto px-6 md:px-12 mt-20 pb-12">
           <div className="pt-8 space-y-16 max-w-5xl mx-auto">
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">{t.visionTitle}</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {t.visionP}
                 </p>
              </div>
              
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">{t.congressTitle}</h3>
                 <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                    <p>{t.congressP1}</p>
                    <p>{t.congressP2}</p>
                    <p>{t.congressP3}</p>
                 </div>
              </div>

              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">{t.twinningTitle}</h3>
                 <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                    <p>{t.twinningP1}</p>
                    <p>{t.twinningP2}</p>
                    <p className="font-medium text-[#0A192F]">{t.twinningP3}</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

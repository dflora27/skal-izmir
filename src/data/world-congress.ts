export const congressData = {
  tr: {
    hero: {
      title: "83. Skal International World Congress 2024 İzmir",
      subtitle: "İzmir 2024",
      motto: `"Dostluk Yoluyla Turizm" (Tourism through Friendship)`,
      desc: "Dünya turizm profesyonellerini aynı çatı altında toplayan en eski ve en yaygın sivil toplum örgütü Skal International, 83. Dünya Kongresi'ni İzmir'de gerçekleştirdi.",
    },
    candidacy: {
      title: "Zaferle Sonuçlanan Adaylık Süreci",
      desc: "İzmir'in bu kongreye ev sahipliği yapması, Skal İzmir Kulübü'nün iki yılı aşkın süren yoğun diplomatik çabalarının bir sonucudur.",
      bullets: [
        { title: "Yarışılan Kentler", content: "Romanya'dan Bükreş, Rusya'dan St. Petersburg ve Hindistan'dan Kalküta gibi güçlü rakipler." },
        { title: "Oylama Sonucu", content: "27 Eylül 2022 tarihinde, Dünya Turizm Günü'nde yapılan final oylamasında 256 oyun 159'unu alarak 17 yıl aradan sonra Türkiye'ye ve ilk kez İzmir'e kazandırılmıştır." }
      ]
    },
    metrics: {
      title: "Kongre Parametreleri ve Katılımcı Profili",
      items: [
        { label: "Tarih", value: "16 - 21 Ekim 2024" },
        { label: "Konum", value: "Swissotel Büyük Efes, İzmir" },
        { label: "Katılım", value: "~400 Profesyonel" },
        { label: "Ülke", value: "40 Farklı Ülke" },
      ]
    },
    agenda: [
      {
        slug: "day-1-get-together",
        day: "16 Ekim 2024",
        title: "Get-Together Party",
        desc: "Kongrenin ilk günü delegelerin İzmir'e varışına ve kayıt işlemlerine ayrılmıştır.",
        gallery: [
          "/swc/get-together-01.JPG",
          "/swc/get-together-03.jpg",
          "/swc/get-together-04.jpg",
          "/swc/get-together-05.jpg",
          "/swc/get-together-06.jpg"
        ],
        details: [
          { subtitle: "Kültürel Buluşma", content: "Tarihi Havagazı Fabrikası Kültür Merkezi bahçesinde düzenlenen kültürel buluşma." }
        ]
      },
      {
        slug: "day-2-opening-ceremony",
        day: "17 Ekim 2024",
        title: "Opening Ceramony",
        desc: "AASSM'de yapılan protokol ve resmi açılış töreni.",
        gallery: [
          "/swc/opening-ceramony-01.JPG",
          "/swc/opening-ceramony-02 (1).jpg",
          "/swc/opening-ceramony-02 (2).jpg",
          "/swc/opening-ceramony-02 (3).jpg",
          "/swc/opening-ceramony-02 (4).jpg",
          "/swc/opening-ceramony-02 (5).jpg",
          "/swc/opening-ceramony-02 (6).jpg",
          "/swc/opening-ceramony-02 (7).jpg",
          "/swc/opening-ceramony-02 (8).jpg"
        ],
        details: [
          { subtitle: "Açılış", content: "AASSM'de Annette Cardenas ve üst düzey yetkililerin katılımıyla." }
        ]
      },
      {
        slug: "day-2-urla-tour",
        day: "17 Ekim 2024",
        title: "Urla Tour with Lunch",
        desc: "AASSM'de yapılan protokolün hemen ardından Urla gastronomi turuna başlandı.",
        video: "/swc/swc-urla-sahne.mp4",
        gallery: Array.from({length: 20}, (_, i) => `/swc/urla-tour-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Urla Tour with Lunch", content: "Bağ yolları ve lokal üreticilerin ziyaret edilmesi." }
        ]
      },
      {
        slug: "day-3-assembly-dine-around",
        day: "18 Ekim 2024",
        title: "Annual General Assembly",
        desc: "AGA (Annual General Assembly) ve akşamında tüm şehre yayılan Dine-Around konsepti.",
        gallery: Array.from({length: 5}, (_, i) => `/swc/aga-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Yıllık Genel Kurul", content: "Organizasyonun geleceğine dair stratejik kararların alındığı kongre." },
          { subtitle: "Dine Around", content: "İzmir'in en prestijli restoranlarına dağılarak gastronomi keşfi." }
        ]
      },
      {
        slug: "day-4-trade-forum",
        day: "19 Ekim 2024",
        title: "B2B Travel Forum",
        desc: "Sektörel dijital dönüşüm ve sürdürülebilir pazarlama çalıştayları.",
        gallery: Array.from({length: 4}, (_, i) => `/swc/b2b-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Çalıştay Oturumları", content: "Yapay zeka ve dijital dönüşüm odaklı forum." }
        ]
      },
      {
        slug: "day-4-gmp-cocktail",
        day: "19 Ekim 2024",
        title: "Global Market Place Cocktail",
        desc: "B2B buluşmaları ve eşsiz bağlantıların kurulduğu global kokteyl.",
        gallery: Array.from({length: 3}, (_, i) => `/swc/gmp-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Global Market Place Cocktail", content: "Swissotel Büyük Efes'te kurulan stand alanlarında B2B görüşmeleri ve kokteyl." }
        ]
      },
      {
        slug: "day-5-cesme-alacati-tours",
        day: "20 Ekim 2024",
        title: "Çeşme & Alaçatı Tours",
        desc: "Sabah saatlerinde gerçekleşen Çeşme ve Alaçatı doğa ve kültür gezisi.",
        gallery: [],
        video: "/swc/swc-alacati-tour.mp4",
        details: [
          { subtitle: "Gezi Turu", content: "Alaçatı sokakları ve flamingolarla dolu doğa turu." }
        ]
      },
      {
        slug: "day-5-presidents-gala",
        day: "20 Ekim 2024",
        title: "President's Gala Dinner",
        desc: "Gece yarısına uzanan, dostlukların pekiştiği kapanış balosu ve ödüller.",
        gallery: Array.from({length: 6}, (_, i) => `/swc/gala-01 (${i+1}).jpg`),
        details: [
          { subtitle: "President's Gala Dinner", content: "Dostlukların pekiştiği kapanış balosu ve ödüller." }
        ]
      }
    ],
    impact: {
      title: "Kongrenin Stratejik Önemi ve Başarıları",
      items: [
        { title: "MICE Sektöründe İzmir İmzası", content: "35 ülkeden direkt uçuş bağları ve modern altyapısı sayesinde İzmir kendini kanıtladı." },
        { title: "Ace of M.I.C.E. Ödülü", content: "Skal İzmir, 83. Dünya Kongresindeki eksiksiz organizasyonuyla MICE sektörünün en saygın prestij ödülünü aldı." },
        { title: "Ekonomik Beklenti", content: "İzmir'e gelecek üst düzey nitelikli turist potansiyelinde %20 ile %30 arasında kesin artış." }
      ]
    }
  },
  en: {
    hero: {
      title: "83. Skal International World Congress 2024 İzmir",
      subtitle: "Izmir 2024",
      motto: `"Tourism through Friendship"`,
      desc: "Skal International, the oldest and largest network uniting tourism professionals globally, hosted its 83rd World Congress in Izmir.",
    },
    candidacy: {
      title: "The Victorious Candidacy Process",
      desc: "Hosting this congress was the result of over two years of intensive diplomatic efforts by Skal Izmir.",
      bullets: [
        { title: "Competing Cities", content: "Fierce rivals including Bucharest (Romania), St. Petersburg (Russia), and Kolkata (India)." },
        { title: "Voting Outcome", content: "At the final vote on World Tourism Day, Izmir won 159 out of 256 votes, bringing the congress to Turkey after 17 years and to Izmir for the first time." }
      ]
    },
    metrics: {
      title: "Congress Parameters & Demographics",
      items: [
        { label: "Date", value: "Oct 16 - 21, 2024" },
        { label: "Venues", value: "Swissotel Büyük Efes, İzmir" },
        { label: "Attendance", value: "~400 Professionals" },
        { label: "Countries", value: "40 Countries" },
      ]
    },
    agenda: [
      {
        slug: "day-1-get-together",
        day: "Oct 16, 2024",
        title: "Get-Together Party",
        desc: "The first day focused on arrivals, registration, and networking.",
        gallery: [
          "/swc/get-together-01.JPG",
          "/swc/get-together-03.jpg",
          "/swc/get-together-04.jpg",
          "/swc/get-together-05.jpg",
          "/swc/get-together-06.jpg"
        ],
        details: [
          { subtitle: "Networking", content: "A magical introductory evening at the Historical Coal Gas Factory." }
        ]
      },
      {
        slug: "day-2-opening-ceremony",
        day: "Oct 17, 2024",
        title: "Opening Ceramony",
        desc: "Opening protocol and official ceremonies at AASSM.",
        gallery: [
          "/swc/opening-ceramony-01.JPG",
          "/swc/opening-ceramony-02 (1).jpg",
          "/swc/opening-ceramony-02 (2).jpg",
          "/swc/opening-ceramony-02 (3).jpg",
          "/swc/opening-ceramony-02 (4).jpg",
          "/swc/opening-ceramony-02 (5).jpg",
          "/swc/opening-ceramony-02 (6).jpg",
          "/swc/opening-ceramony-02 (7).jpg",
          "/swc/opening-ceramony-02 (8).jpg"
        ],
        details: [
          { subtitle: "Ceremony", content: "Led by Skal World President Annette Cardenas at AASSM." }
        ]
      },
      {
        slug: "day-2-urla-tour",
        day: "Oct 17, 2024",
        title: "Urla Tour with Lunch",
        desc: "Following the protocol at AASSM, a gastronomy tour of Urla took place.",
        video: "/swc/swc-urla-sahne.mp4",
        gallery: Array.from({length: 20}, (_, i) => `/swc/urla-tour-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Urla Tour with Lunch", content: "Exploring boutique wineries and local Aegean gastronomy." }
        ]
      },
      {
        slug: "day-3-assembly-dine-around",
        day: "Oct 18, 2024",
        title: "Annual General Assembly",
        desc: "The AGA (Annual General Assembly) during the day, followed by city-wide Dine-Around.",
        gallery: Array.from({length: 5}, (_, i) => `/swc/aga-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Assembly", content: "Strategic global decisions shaped by all participating clubs." },
          { subtitle: "Dine Around", content: "Delegates scattered to Izmir's elite restaurants for a culinary adventure." }
        ]
      },
      {
        slug: "day-4-trade-forum",
        day: "Oct 19, 2024",
        title: "B2B Travel Forum",
        desc: "Sectoral digital transformation and sustainable marketing workshops.",
        gallery: Array.from({length: 4}, (_, i) => `/swc/b2b-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Workshops", content: "AI integration and green tourism strategies discussed." }
        ]
      },
      {
        slug: "day-4-gmp-cocktail",
        day: "Oct 19, 2024",
        title: "Global Market Place Cocktail",
        desc: "B2B meetings and a global networking cocktail at Swissotel.",
        gallery: Array.from({length: 3}, (_, i) => `/swc/gmp-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Global Market Place Cocktail", content: "B2B booth sessions and cocktail located at Swissotel Buyuk Efes." }
        ]
      },
      {
        slug: "day-5-cesme-alacati-tours",
        day: "Oct 20, 2024",
        title: "Çeşme & Alaçatı Tours",
        desc: "Morning tours exploring Cesme and Alacati landscapes.",
        gallery: [],
        video: "/swc/swc-alacati-tour.mp4",
        details: [
          { subtitle: "City Tour", content: "Exploring ancient castles and tracing flamingos across wetlands." }
        ]
      },
      {
        slug: "day-5-presidents-gala",
        day: "Oct 20, 2024",
        title: "President's Gala Dinner",
        desc: "The farewell ball cementing lifelong friendships and handing over the flag.",
        gallery: Array.from({length: 6}, (_, i) => `/swc/gala-01 (${i+1}).jpg`),
        details: [
          { subtitle: "President's Gala Dinner", content: "The farewell ball cementing lifelong friendships and handing over the flag." }
        ]
      }
    ],
    impact: {
      title: "Strategic Impact & Triumphs",
      items: [
        { title: "Izmir's Signature in MICE", content: "Proving its global connectivity with direct flights from 35 countries and 68 destinations." },
        { title: "Ace of M.I.C.E. Award", content: "Skal Izmir achieved the most prestigious MICE award for flawlessly executing this massive event." },
        { title: "Economic Repercussions", content: "Projected 20% to 30% increase in high-tier tourism flow to the Aegean region." }
      ]
    }
  },
  es: {
    hero: {
      title: "83. Skal International World Congress 2024 İzmir",
      subtitle: "Esmirna 2024",
      motto: `"Turismo a Través de la Amistad"`,
      desc: "Skal International, la red más antigua y extensa de profesionales del turismo, celebró su 83º Congreso Mundial en Esmirna.",
    },
    candidacy: {
      title: "Un Proceso de Candidatura Victorioso",
      desc: "Ser sede de este congreso fue el resultado de más de dos años de intensos esfuerzos diplomáticos por parte de Skal Esmirna.",
      bullets: [
        { title: "Ciudades Competidoras", content: "Rivales como Bucarest, San Petersburgo y Calcuta." },
        { title: "Resultado de la Votación", content: "Esmirna obtuvo 159 de 256 votos, atrayendo el congreso a Turquía después de 17 años." }
      ]
    },
    metrics: {
      title: "Parámetros del Congreso",
      items: [
        { label: "Fecha", value: "16 - 21 Oct, 2024" },
        { label: "Lugar", value: "Swissotel Büyük Efes, İzmir" },
        { label: "Asistencia", value: "~400 Profesionales" },
        { label: "Países", value: "40 Países" },
      ]
    },
    agenda: [
      {
        slug: "day-1-get-together",
        day: "16 Oct 2024",
        title: "Get-Together Party",
        desc: "Día dedicado a llegadas y registro.",
        gallery: [
          "/swc/get-together-01.JPG",
          "/swc/get-together-03.jpg",
          "/swc/get-together-04.jpg",
          "/swc/get-together-05.jpg",
          "/swc/get-together-06.jpg"
        ],
        details: [
          { subtitle: "Social", content: "Una tarde mágica en la Fábrica Histórica de Gas." }
        ]
      },
      {
        slug: "day-2-opening-ceremony",
        day: "17 Oct 2024",
        title: "Opening Ceramony",
        desc: "Protocolo de apertura y ceremonias oficiales en AASSM.",
        gallery: [
          "/swc/opening-ceramony-01.JPG",
          "/swc/opening-ceramony-02 (1).jpg",
          "/swc/opening-ceramony-02 (2).jpg",
          "/swc/opening-ceramony-02 (3).jpg",
          "/swc/opening-ceramony-02 (4).jpg",
          "/swc/opening-ceramony-02 (5).jpg",
          "/swc/opening-ceramony-02 (6).jpg",
          "/swc/opening-ceramony-02 (7).jpg",
          "/swc/opening-ceramony-02 (8).jpg"
        ],
        details: [
          { subtitle: "Apertura", content: "Dirigida por Annette Cardenas en AASSM." }
        ]
      },
      {
        slug: "day-2-urla-tour",
        day: "17 Oct 2024",
        title: "Urla Tour with Lunch",
        desc: "Después del protocolo, se llevó a cabo un tour gastronómico.",
        video: "/swc/swc-urla-sahne.mp4",
        gallery: Array.from({length: 20}, (_, i) => `/swc/urla-tour-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Urla Tour with Lunch", content: "Explorando viñedos y la gastronomía del Egeo." }
        ]
      },
      {
        slug: "day-3-assembly-dine-around",
        day: "18 Oct 2024",
        title: "Annual General Assembly",
        desc: "Asamblea (AGA) seguida de una cena por toda la ciudad.",
        gallery: Array.from({length: 5}, (_, i) => `/swc/aga-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Asamblea", content: "Decisiones estratégicas formadas en Esmirna." },
          { subtitle: "Dine Around", content: "Los delegados visitaron los mejores restaurantes locales." }
        ]
      },
      {
        slug: "day-4-trade-forum",
        day: "19 Oct 2024",
        title: "B2B Travel Forum",
        desc: "Talleres y reuniones sobre transformación digital en turismo.",
        gallery: Array.from({length: 4}, (_, i) => `/swc/b2b-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Talleres", content: "Se discutieron estrategias de turismo verde e IA." }
        ]
      },
      {
        slug: "day-4-gmp-cocktail",
        day: "19 Oct 2024",
        title: "Global Market Place Cocktail",
        desc: "Reuniones B2B y un cóctel de networking global.",
        gallery: Array.from({length: 3}, (_, i) => `/swc/gmp-01 (${i+1}).jpg`),
        details: [
          { subtitle: "Global Market Place Cocktail", content: "Reuniones y coctel en el Swissotel Büyük Efes." }
        ]
      },
      {
        slug: "day-5-cesme-alacati-tours",
        day: "20 Oct 2024",
        title: "Çeşme & Alaçatı Tours",
        desc: "Tour matutino explorando Çeşme y Alaçatı.",
        video: "/swc/swc-alacati-tour.mp4",
        gallery: [],
        details: [
          { subtitle: "Tours", content: "Rastreando flamencos y castillos antiguos." }
        ]
      },
      {
        slug: "day-5-presidents-gala",
        day: "20 Oct 2024",
        title: "President's Gala Dinner",
        desc: "Lanzamiento y Fortalecimiento de amistades y entrega de premios.",
        gallery: Array.from({length: 6}, (_, i) => `/swc/gala-01 (${i+1}).jpg`),
        details: [
          { subtitle: "President's Gala Dinner", content: "Fortalecimiento de amistades y entrega de premios." }
        ]
      }
    ],
    impact: {
      title: "Impacto Estratégico",
      items: [
        { title: "Firma en MICE", content: "Demostró su conectividad y moderna infraestructura." },
        { title: "Premio Ace of M.I.C.E.", content: "Skal Esmirna ganó el premio más prestigioso MICE en el país." },
        { title: "Impacto Económico", content: "Aumento proyectado del turismo del 20% al 30%." }
      ]
    }
  }
};

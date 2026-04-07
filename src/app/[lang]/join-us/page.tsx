import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle2, ShieldCheck, Globe2, Target, Users, Plane, CreditCard, ChevronRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: string }>;
};

// Generating static metadata based on language
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const metadataMap: Record<string, Metadata> = {
    tr: { title: 'Bize Katılın | Skål International İzmir', description: 'Skål International üyesi olmanın ayrıcalıklarını keşfedin.' },
    en: { title: 'Join Us | Skål International İzmir', description: 'Discover the privileges of being a Skål International member.' },
    es: { title: 'Únete a Nosotros | Skål International Esmirna', description: 'Descubre los privilegios de ser miembro de Skål International.' }
  };
  
  return metadataMap[lang] || metadataMap.en;
}

const JOIN_US_CONTENT = {
  tr: {
    heroOverlay: "A trusted Voice in Travel and Tourism",
    heroTitle: "Skål International",
    heroSubtitle: "Turizmde Güvenilir Bir Ses",
    aboutPara1: "küresel turizm ve arkadaşlığı uluslararası boyutta destekleyen turizm liderlerinden oluşan uluslararası profesyonel bir örgüttür.",
    aboutPara2: "SKAL, dünya turizm profesyonellerinin küresel turizmi ve arkadaşlığı yaymaya çalıştığı uluslararası en yaygın ve en eski turizm sivil toplum örgütüdür. Bünyesinde, uluslararası seyahat ve turizm endüstrisindeki tüm sektörleri toplaması bakımından da dünyada tektir. Turizmin üst düzey yöneticileri olan üyeleri, yerel, ulusal ve uluslararası platformlarda buluşurlar ve turizmin gündeminde bulunan belli başlı konuları tartışırlar. Skal, turizm profesyonelliğini geliştirmek ve bu alanda üyelerine yarar sağlamak amacındadır.",
    aboutSlogan: "‘’Doing Business Among Friends’’",
    aboutPara2_p2: "sloganını benimseyerek uluslararası dostluk ve iş bağlantısını pekiştirmek, Turizm endüstrisinde profesyonelliği kuvvetlendirmek amacı ile düzenlenen seminer, konferans ve benzeri organizasyonların yapılmasını teşvik eder.",
    aboutPara3: "İlk kulüp, İskandinavya’da yapılan bir eğitim gezisi sonucunda Florimond Volckaert ve birkaç turizmci arkadaşı tarafından",
    aboutPara3_bold: "1932 yılında Paris’te kurulmuştur.",
    aboutPara3_p2: "2 yıl sonra, 1934 yılında, bu oluşum, dostluk ve uluslararası bazda gelişmiş, ‘’Association Internationale des Skal Clubs’’ formasyonunda ve Paris Skal Başkanı olan ‘’Father of Skal’’ olarak da bilinen Florimond Volckaert öncülüğünde Skal, uluslararası kimliğine kavuşmuştur.",
    aboutPara4: "Uluslararası Skal, bugün yaklaşık",
    aboutPara4_bold: "75 ülkede, 294 kulüp ve 12.500 üye",
    aboutPara4_p2: "ile temsil edilmektedir. Tüm kulüpler ve Ulusal Komiteler",
    aboutPara4_bold2: "İspanya/Torremolinos’da SKAL INTERNATIONAL",
    aboutPara4_p3: "şemsiyesi altında birleşmiştir ve bu merkezden idare edilir.",
    aboutPara5: "Skal International, her yıl değişik bir ülkede yapılan Dünya kongresinde, genel kurulda seçilen 7 kişilik bir yönetim kadrosu ile yönetilir. Bu kongreler, üyelere dünyada turizm sektöründeki gelişmeleri birinci ağızdan dinleme ve izleme fırsatı verir.",
    missionTitle: "Misyonumuz",
    missionDesc: "Profesyonelliğimiz, dostluklarımız ve liderliğimizle vizyonumuzu geliştirmek ve bu özelliklerimizi azami kullanarak",
    missionBold: "‘’Güvenilir ve sorumlu bir Turizm Endüstrisi’’",
    missionDesc2: "için çok çalışmak!",
    principlesTitle: "SKAL Evrensel Prensipleri",
    privilegesTitle: "Üyesi Olmanın Ayrıcalıkları",
    whoCanJoinTitle: "Kimler SKAL Üyesi Olabilir?",
    whoCanJoinDesc: "Turizm endüstrisine profesyonel olarak emek veren ve çeşitli kategorilerde faaliyet gösteren yöneticiler Skål ailesine katılabilir.",
    categoriesTitle: "Üyelik Kategorileri",
    categories: {
      active: { title: "Aktif Üye (Active Member)", desc: "Hali hazırda turizmde aktif, en az 3 yıl turizm ve seyahat sektöründe çalışmış yönetici veya yönetici yardımcısı pozisyonuna haiz kişiler 'AKTİF' üye olabilir." },
      activeIndividual: { title: "Aktif Münferit Üye (Active Individual Member)", desc: "Yönetici kapasitesinde olup turizm ve seyahat sektöründe çalışan, ancak bulunduğu ülkede Skål Kulübü olmayan veya ülke kanunları gereği Skål Kulübü kurulamayan yerlerde veya en yakın Skål Kulübü’nün 160 km’den fazla mesafede bulunduğu durumlardaki profesyonel turizmciler üye olabilirler." },
      retired: { title: "Emekli Üye (Retired Member)", desc: "55 yaşına gelmiş, turizmden emekli olmuş ve emeklilik öncesi en az 3 yıl aktif üyeliği olanlar Emekli Üye sayılır." },
      associate: { title: "Fahri Üye (Associate Member)", desc: "Daha önce en az 5 yıl aktif üye olan ama sonrasında görev değişikliği ile aktif üye sınıflandırmasında sayılamayıp yine turizmle ilintili yerlerde çalışanlar." },
      young: {
        title: "Young Skål (Student, Professional, Associate)",
        student: { title: "Öğrenci", desc: "Minimum 18 yaş, maksimum 27 yaş." },
        professional: { title: "Profesyonel", desc: "Minimum 20 yaş, maksimum 29 yaş." },
        associateSub: { title: "Associate", desc: "27 yaşını geçmiş ama hala okuyor veya 29 yaşını geçmiş hala eğitim alıyor veya çalışıyor, fakat Aktif Skål Üyelik kimliğine haiz değil. Bu durumda Associate Member olarak 35 yaşına kadar devam edebilir." }
      }
    },
    ctaTitle: "Kariyerinizi ve Ağınızı Genişletin",
    ctaDesc: "Turizm endüstrisinin en global ve prestijli sivil toplum kuruluşuna katılın. Hemen üyelik formunu doldurun ve 12.500 üyeli global ağımıza dahil olun.",
    ctaButton: "Üyelik Formunu Doldur"
  },
  en: {
    heroOverlay: "A trusted Voice in Travel and Tourism",
    heroTitle: "Skål International",
    heroSubtitle: "A Trusted Voice in Tourism",
    aboutPara1: "is an international professional organization of tourism leaders, promoting global tourism and friendship on an international scale.",
    aboutPara2: "SKAL is the most widespread and oldest international tourism non-governmental organization, bringing together all branches of the globe's travel and tourism industry. Members, the industry's managers and executives, meet at local, national, and international platforms to discuss matters affecting the tourism agenda. Skal aims to develop tourism professionalism and benefit its members. By embracing the slogan",
    aboutSlogan: "''Doing Business Among Friends''",
    aboutPara2_p2: ", it encourages seminars, conferences, and similar events to strengthen professional ties and international friendship.",
    aboutPara3: "The first club was founded in",
    aboutPara3_bold: "Paris in 1932",
    aboutPara3_p2: "by Florimond Volckaert and a few tourism friends following an educational trip to Scandinavia. Two years later, in 1934, the formation materialized into the 'Association Internationale des Skal Clubs' under the leadership of Florimond Volckaert, widely known as the ''Father of Skal''.",
    aboutPara4: "Today, Skal International is represented globally with approximately",
    aboutPara4_bold: "12,500 members across 294 clubs in 75 countries.",
    aboutPara4_p2: "All clubs and National Committees operate under the umbrella of",
    aboutPara4_bold2: "SKAL INTERNATIONAL headquartered in Torremolinos, Spain",
    aboutPara4_p3: ", and are administered from this central hub.",
    aboutPara5: "Skal International is governed by an Executive Committee of seven members elected by delegates to the General Assembly during the annual World Congress, which is held in a different country each year, giving members the opportunity to observe first-hand developments in the global tourism sector.",
    missionTitle: "Our Mission",
    missionDesc: "Through our leadership, professionalism, and friendship, work together to enhance our vision, maximize our potential, and foster a",
    missionBold: "''Trusted and Responsible Tourism Industry''",
    missionDesc2: "!",
    principlesTitle: "SKAL Universal Principles",
    privilegesTitle: "Privileges of Membership",
    whoCanJoinTitle: "Who Can Join SKAL?",
    whoCanJoinDesc: "Managers and executives professionally active in various categories of the tourism and travel industry can join the Skål family.",
    categoriesTitle: "Membership Categories",
    categories: {
      active: { title: "Active Member", desc: "Persons who currently hold a managerial or executive position within the travel and tourism industry, with a minimum of 3 years' experience, may qualify as 'ACTIVE' members." },
      activeIndividual: { title: "Active Individual Member", desc: "Tourism professionals working in a managerial capacity in countries where no Skål Club exists, cannot be established due to local laws, or where the nearest Club is more than 160km away." },
      retired: { title: "Retired Member", desc: "Individuals who have reached 55 years of age, retired from the tourism industry, and were active members for at least 3 years prior to retirement." },
      associate: { title: "Associate Member", desc: "Members who have had at least 5 years of active membership but, due to a change of employment, no longer qualify for active membership but remain visibly connected to the industry." },
      young: {
        title: "Young Skål (Student, Professional, Associate)",
        student: { title: "Student", desc: "Minimum 18 years, maximum 27 years." },
        professional: { title: "Professional", desc: "Minimum 20 years, maximum 29 years." },
        associateSub: { title: "Associate", desc: "Over 27 and still studying, or over 29 and still training/working without holding a managerial role. They may continue as an Associate Member until the age of 35." }
      }
    },
    ctaTitle: "Expand Your Career and Network",
    ctaDesc: "Join the most global and prestigious non-governmental organization in the tourism industry. Fill out the membership form today and become part of our 12,500 member global network.",
    ctaButton: "Fill out Membership Form"
  },
  es: {
    heroOverlay: "A trusted Voice in Travel and Tourism",
    heroTitle: "Skål International",
    heroSubtitle: "Una Voz Confiable en el Turismo",
    aboutPara1: "es una organización profesional internacional de líderes turísticos, promoviendo el turismo global y la amistad a escala internacional.",
    aboutPara2: "SKAL es la organización no gubernamental de turismo internacional más extendida y antigua, reuniendo todas las ramas de la industria de viajes y turismo. Los miembros, gerentes y ejecutivos del sector se reúnen a nivel local, nacional e internacional para tratar temas de la agenda turística. Skal busca desarrollar el profesionalismo turístico y beneficiar a sus miembros. Abrazando el lema",
    aboutSlogan: "''Doing Business Among Friends''",
    aboutPara2_p2: ", fomenta seminarios y conferencias para fortalecer lazos profesionales y amistad internacional.",
    aboutPara3: "El primer club fue fundado en",
    aboutPara3_bold: "París en 1932",
    aboutPara3_p2: "por Florimond Volckaert y algunos amigos del turismo tras un viaje educativo a Escandinavia. Dos años después, en 1934, la formación se materializó en 'Association Internationale des Skal Clubs' bajo el liderazgo de Volckaert, conocido como el 'Padre de Skal'.",
    aboutPara4: "Hoy, Skal International está representado globalmente por aproximadamente",
    aboutPara4_bold: "12.500 miembros en 294 clubes de 75 países.",
    aboutPara4_p2: "Todos los clubes y Comités Nacionales operan bajo el paraguas de",
    aboutPara4_bold2: "SKAL INTERNATIONAL con sede en Torremolinos, España",
    aboutPara4_p3: ", y son administrados desde este centro.",
    aboutPara5: "Skal es gobernado por un Comité Ejecutivo de siete miembros elegidos en Asamblea General durante el Congreso Mundial anual, celebrado en un país diferente cada año, permitiendo observar de primera mano los desarrollos turísticos.",
    missionTitle: "Nuestra Misión",
    missionDesc: "A través de nuestro liderazgo y amistad, trabajar juntos para potenciar nuestra visión, maximizar características y fomentar una",
    missionBold: "''Industria Turística Confiable y Responsable''",
    missionDesc2: "!",
    principlesTitle: "Principios Universales de SKAL",
    privilegesTitle: "Privilegios de Ser Miembro",
    whoCanJoinTitle: "¿Quién Puede Unirse a SKAL?",
    whoCanJoinDesc: "Gerentes y ejecutivos profesionalmente activos en varias categorías de la industria pueden unirse a la familia Skål.",
    categoriesTitle: "Categorías de Membresía",
    categories: {
      active: { title: "Miembro Activo", desc: "Personas activas en la industria con un mínimo de 3 años de experiencia en posición gerencial pueden calificar como 'ACTIVO'." },
      activeIndividual: { title: "Miembro Individual Activo", desc: "Profesionales trabajando como gerentes en áreas o países donde las leyes prohíben clubes Skål o la distancia al club más cercano es mayor a 160km." },
      retired: { title: "Miembro Retirado", desc: "Mayores de 55 años, retirados de la industria y miembros activos al menos 3 años antes del retiro." },
      associate: { title: "Miembro Asociado", desc: "Al menos 5 años de membresía activa pero, por un cambio laboral, ya no califican para membresía activa aunque mantienen vínculos al turismo." },
      young: {
        title: "Young Skål (Estudiante, Profesional, Asociado)",
        student: { title: "Estudiante", desc: "Mínimo 18 años, máximo 27 años." },
        professional: { title: "Profesional", desc: "Mínimo 20 años, máximo 29 años." },
        associateSub: { title: "Asociado", desc: "Mayor de 27 años y estudiando, o mayor de 29 trabajando sin rol gerencial designado aún." }
      }
    },
    ctaTitle: "Expanda su Carrera y Vínculos",
    ctaDesc: "Únase a la organización no gubernamental más global y prestigiosa del turismo. Complete el formulario de inscripción hoy.",
    ctaButton: "Llenar Formulario de Membresía"
  }
};

const PRINCIPLES = {
  tr: ["Dostluk, Arkadaşlık", "Katkı ve katılım", "Uluslararası", "Irkçılığa karşı", "Kâr gütmez", "Yönetim", "Demokratik ve özerk", "Sadece kendini düşünen değil", "Evrensel"],
  en: ["Friendship", "Contribution and Participation", "International", "Non-discriminatory", "Non-profit making", "Administration", "Democratic and Autonomous", "Not-inward looking", "Universal"],
  es: ["Amistad", "Contribución y Participación", "Internacional", "No discriminatorio", "Sin fines de lucro", "Administración", "Democrático y Autónomo", "No enfocado únicamente en uno mismo", "Universal"]
};

const PRIVILEGES = {
  tr: ["Skål 83 yıllık köklü bir kuruluş", "Turizm endüstrisinin en global STK'sı", "Bir dostluk kulübü", "İş imkânları", "Yiyelim, içelim, eğlenelim, gezelim", "Skål Prestijli", "Skål Uluslararası bir kuruluş, bu nedenle fayda sağlayabilir", "14.000 üye ile network"],
  en: ["Skål is an 83-year-old established organization", "The most global NGO in the tourism industry", "A club of friendship", "Business opportunities", "Eat, drink, enjoy, and travel", "Skål is prestigious", "Being international provides unmatched benefits", "Network with over 14,000 members"],
  es: ["Skål es una organización con 83 años de historia", "La ONG más global en turismo", "Un club de amistad", "Oportunidades de negocios", "Comidas, bebidas, disfrutar y viajar", "Skål otorga prestigio", "El carácter internacional brinda grandes beneficios", "Conexión en red con más de 14,000 miembros"]
};

const WHO_CAN_JOIN = {
  tr: [
    "Seyahat Acenteleri", "Konaklama tesisleri", "Havayolu, Denizyolu ve Demiryolu ulaştırması,",
    "Turist rehberleri,", "Turizm Akademisyenleri,", "Turizm Danışmanları ,", "Rent a Car firmaları,",
    "Resmi Turizm Kuruluşları,", "Restaurantlar,", "Seyahat blog yazarları,", "Agro, eko turizmciler,",
    "Cruise firmaları,", "E - Turizm firmaları,", "Turizm tedarikçileri,", "Tematik Park Yöneticileri,",
    "Sağlık Turizmi Yöneticileri", "Diğer profesyoneller…"
  ],
  en: [
    "Travel Agencies", "Hotels and Accommodations", "Air, Sea, and Rail transport operators",
    "Tour Guides", "Tourism Academics", "Tourism Consultants", "Rent a Car companies",
    "Official Tourism Boards", "Restaurants", "Travel Bloggers & Writers", "Agro/Eco Tourism managers",
    "Cruise lines", "E-tourism companies", "Tourism suppliers", "Theme Park and Museum managers",
    "Health Tourism executives", "Various other tourism professionals..."
  ],
  es: [
    "Agencias de viajes", "Hoteles y alojamientos", "Operadores de transporte aéreo, marítimo y trenes",
    "Guías turísticos", "Académicos de turismo", "Consultores", "Empresas de alquiler de coches",
    "Juntas Oficiales de Turismo", "Restaurantes", "Bloggers y escritores", "Gerentes de Agro/Eco Turismo",
    "Compañías de cruceros", "Empresas de e-turismo", "Proveedores de turismo", "Gerentes de museos y parques temáticos",
    "Ejecutivos de turismo de salud", "Varios otros profesionales..."
  ]
};

export default async function JoinUsPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'tr' | 'en' | 'es';
  const dict = await getDictionary(lang);

  const t = JOIN_US_CONTENT[lang] || JOIN_US_CONTENT.en;
  const principles = PRINCIPLES[lang] || PRINCIPLES.en;
  const privileges = PRIVILEGES[lang] || PRIVILEGES.en;
  const whoCanJoin = WHO_CAN_JOIN[lang] || WHO_CAN_JOIN.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#4E3F84] selection:text-white">
      <Header dict={dict} lang={lang} />

      {/* Hero Header - Deep Parallax & Elegance */}
      <section className="relative h-[65vh] lg:h-[75vh] w-full flex flex-col justify-end overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 bg-[#0A192F]">
          <Image
            src="/anasayfa-2.jpg" 
            alt="Skal Membership Background"
            fill
            className="object-cover object-center transform scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-50 mix-blend-luminosity filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#128FD9]/30 to-[#F87498]/30 mix-blend-multiply z-10"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pb-24 text-center lg:text-left flex flex-col items-center lg:items-start group">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 max-w-fit rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#128FD9] animate-pulse"></span>
            {t.heroOverlay}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
            {t.heroTitle}
          </h1>
          <p className="text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-[#F87498] font-medium italic mt-6 lg:mt-8 tracking-wide drop-shadow-lg max-w-4xl">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-20 w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* About Skal Section */}
        <div className="prose prose-lg lg:prose-xl max-w-none text-slate-600 font-light leading-relaxed mb-32 drop-shadow-sm">
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#4E3F84] first-letter:mr-3 first-letter:float-left">
            <strong className="text-[#0A192F] font-semibold">Skål</strong>, {t.aboutPara1}
          </p>
          <p>
            {t.aboutPara2}
            <strong className="text-[#0A192F] italic"> {t.aboutSlogan}</strong> {t.aboutPara2_p2}
          </p>
          <p>
            {t.aboutPara3} <strong className="text-[#128FD9]">{t.aboutPara3_bold}</strong> {t.aboutPara3_p2}
          </p>
          <p>
            {t.aboutPara4} <strong className="text-[#F87498]">{t.aboutPara4_bold}</strong> {t.aboutPara4_p2} <strong className="text-[#4E3F84]">{t.aboutPara4_bold2}</strong>{t.aboutPara4_p3}
          </p>
          <p>
            {t.aboutPara5}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#1B123A] rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden mb-32 -mx-6 lg:mx-0 transform hover:-translate-y-2 transition-transform duration-700">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#128FD9]/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
          <Target className="w-16 h-16 text-[#F87498] mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t.missionTitle}</h2>
          <p className="text-xl lg:text-3xl leading-relaxed font-light text-blue-100">
            {t.missionDesc} <strong className="text-white">{t.missionBold}</strong> {t.missionDesc2}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
           {/* Principles */}
           <div>
              <div className="flex items-center gap-4 mb-10">
                 <Globe2 className="w-10 h-10 text-[#128FD9]" />
                 <h2 className="text-3xl lg:text-4xl font-bold text-[#0A192F] tracking-tight">{t.principlesTitle}</h2>
              </div>
              <ul className="space-y-4">
                 {principles.map((p, idx) => (
                   <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4E3F84] font-bold shadow-sm group-hover:bg-[#128FD9] group-hover:text-white transition-colors">{idx + 1}</div>
                      <span className="font-medium text-slate-700">{p}</span>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Privileges */}
           <div>
              <div className="flex items-center gap-4 mb-10">
                 <ShieldCheck className="w-10 h-10 text-[#F87498]" />
                 <h2 className="text-3xl lg:text-4xl font-bold text-[#0A192F] tracking-tight">{t.privilegesTitle}</h2>
              </div>
              <ul className="space-y-4">
                 {privileges.map((p, idx) => (
                   <li key={idx} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-[#F87498] flex-shrink-0 mt-1" />
                      <span className="font-medium text-lg text-slate-700 leading-relaxed">{p}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Categories & Who Can Join Grid */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-[#0A192F] tracking-tight mb-6">{t.whoCanJoinTitle}</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t.whoCanJoinDesc}</p>
           </div>
           
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {whoCanJoin.map((w, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#128FD9] hover:shadow-xl transition-all duration-300 break-inside-avoid flex items-center gap-4">
                     <span className="w-2 h-2 rounded-full bg-[#128FD9] flex-shrink-0"></span>
                     <span className="text-slate-700 font-medium">{w}</span>
                  </div>
              ))}
           </div>
        </div>

        {/* Membership Categories Detailed */}
        <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 border border-slate-200/60 shadow-inner mb-32">
           <h2 className="text-4xl lg:text-5xl font-bold text-[#0A192F] mb-16 text-center tracking-tight">{t.categoriesTitle}</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#128FD9] mb-4">{t.categories.active.title}</h3>
                 <p className="text-slate-600 font-light leading-relaxed">{t.categories.active.desc}</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#F87498] mb-4">{t.categories.activeIndividual.title}</h3>
                 <p className="text-slate-600 font-light leading-relaxed">{t.categories.activeIndividual.desc}</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#4E3F84] mb-4">{t.categories.retired.title}</h3>
                 <p className="text-slate-600 font-light leading-relaxed">{t.categories.retired.desc}</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#0A192F] mb-4">{t.categories.associate.title}</h3>
                 <p className="text-slate-600 font-light leading-relaxed">{t.categories.associate.desc}</p>
              </div>
              
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500 md:col-span-2">
                 <h3 className="text-2xl font-bold text-[#128FD9] mb-6 flex items-center gap-3"><Plane className="w-8 h-8"/> {t.categories.young.title}</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">{t.categories.young.student.title}</h4>
                       <p className="text-slate-600 font-light">{t.categories.young.student.desc}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">{t.categories.young.professional.title}</h4>
                       <p className="text-slate-600 font-light">{t.categories.young.professional.desc}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">{t.categories.young.associateSub.title}</h4>
                       <p className="text-slate-600 font-light text-sm">{t.categories.young.associateSub.desc}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-[#1B123A] rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl group">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#F87498]/20 to-[#128FD9]/20 mix-blend-screen z-0"></div>
           <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-1000 z-0" style={{backgroundImage: "url('/swc/swc-bg.JPG')"}}></div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
                 <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">{t.ctaTitle}</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                 {t.ctaDesc}
              </p>
              <a 
                 href="https://www.skal.org/MembershipForm" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 bg-[#F87498] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#0A192F] shadow-[0_0_40px_rgba(248,116,152,0.4)] transition-all duration-500 hover:scale-105"
              >
                 {t.ctaButton}
                 <ChevronRight className="w-5 h-5" />
              </a>
           </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

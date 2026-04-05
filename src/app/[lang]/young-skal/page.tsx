import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { GraduationCap, ArrowUpRight, Calendar, Users, Globe2, BookOpen } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Young Skål | Skål International İzmir", description: "Skål International İzmir Young Skål sayfası." },
    en: { title: "Young Skål | Skål International Izmir", description: "Skål International Izmir Young Skål page." },
    es: { title: "Young Skål | Skål International Esmirna", description: "Página de Young Skål de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

const HISTORY_EVENTS: Record<string, { date: string; title: string; desc: string }[]> = {
  tr: [
    { date: "Ekim 1998", title: "Resmi Başvuru", desc: "Antalya Genç Skål Kulübü için Dernekler Masasına başvuru yapıldı. Tüzük düzeltmeleri gerçekleştirildi." },
    { date: "09 Aralık 1998", title: "Resmi Kuruluş", desc: "Antalya Valiliği onayı ile Antalya Genç Skål Derneği resmen kuruldu. (16 üye, 9 Yönetim Kurulu Üyesi) Kurucu Başkan: Özen Kırant." },
    { date: "19-21 Mart 1999", title: "Akdeniz Bölge Toplantısı & Gala", desc: "Dünya Skål Başkanı Antonio Espinosa ve Genel Sekreter Jim Power katılımı ile Young Skål Antalya Kuruluş Töreni ve Gala Gecesi Falez Oteli'nde düzenlendi. Gençlere yeşil renkli 'Young Skål' rozeti Dünya Başkanı tarafından takıldı." },
    { date: "23 Mayıs 1999", title: "İlk Genel Kurul", desc: "Genç Skål Derneği'nin kuruluş sonrası İlk Genel Kurulu yapıldı. Kurucu 9 üye Yönetim Kuruluna tekrar seçildi." },
    { date: "02-05 Kasım 1999", title: "60. Dünya Skål Kongresi Temsili", desc: "Almanya Stuttgart'ta düzenlenen 60. Dünya Skål Kongresine Antalya Genç Skål Kulübünü temsilen katılım sağlandı." },
    { date: "Aralık 1999", title: "Üniversite Tanıtımları", desc: "Akdeniz Üniversitesi Turizm İşletmeciliği Tıp ve Sosyal Bilimler MYO'larında öğrencilere tanıtıcı toplantılar düzenlenip derneğe çok sayıda yeni vizyoner genç eklendi." },
    { date: "1999-2000", title: "Eğitim Seminerleri", desc: "Düzenlenen aylık toplantılara üst düzey Otel ve Seyahat Acentası yöneticileri ile akademisyenler konuşmacı olarak katıldı." },
    { date: "2000 - 2001", title: "Ulusal Pazarlama Kongresi & Sempozyum", desc: "Kültür Turizmi Sempozyumu (Falez Oteli) ve 5. Ulusal Pazarlama Kongresi'nde Young Skål üyeleri hazırlıktan gala gecesine dek aktif görev alıp 1. Young Skål Ulusal Toplantısı gerçekleştirildi." }
  ],
  en: [
    { date: "October 1998", title: "Official Application", desc: "Application was made to the Associations Desk for the Antalya Young Skål Club. Bylaws corrections were carried out." },
    { date: "December 9, 1998", title: "Official Establishment", desc: "With the approval of the Antalya Governorship, the Antalya Young Skål Association was officially founded. (16 members, 9 Board Members) Founding President: Özen Kırant." },
    { date: "March 19-21, 1999", title: "Mediterranean Regional Meeting & Gala", desc: "With the participation of World Skål President Antonio Espinosa and Secretary General Jim Power, the Young Skål Antalya Foundation Ceremony and Gala Night were held at the Falez Hotel. The green 'Young Skål' badge was pinned on the youth by the World President." },
    { date: "May 23, 1999", title: "First General Assembly", desc: "The First General Assembly of the Young Skål Association after its establishment was held. The founding 9 members were re-elected to the Board of Directors." },
    { date: "November 2-5, 1999", title: "60th World Skål Congress Representation", desc: "Attendance was provided representing the Antalya Young Skål Club at the 60th World Skål Congress held in Stuttgart, Germany." },
    { date: "December 1999", title: "University Promotions", desc: "Introductory meetings were organized for students at Akdeniz University Tourism Management Medicine and Social Sciences Vocational Schools, and many new visionary young people were added to the association." },
    { date: "1999-2000", title: "Educational Seminars", desc: "Senior Hotel and Travel Agency managers and academicians participated as speakers in the monthly meetings organized." },
    { date: "2000 - 2001", title: "National Marketing Congress & Symposium", desc: "At the Cultural Tourism Symposium (Falez Hotel) and the 5th National Marketing Congress, Young Skål members took active roles from preparation to the gala night, and the 1st Young Skål National Meeting was held." }
  ],
  es: [
    { date: "Octubre 1998", title: "Solicitud Oficial", desc: "Se presentó la solicitud ante la Mesa de Asociaciones para el Club Young Skål de Antalya. Se realizaron correcciones en los estatutos." },
    { date: "09 de Diciembre de 1998", title: "Establecimiento Oficial", desc: "Con la aprobación de la Gobernación de Antalya, se fundó oficialmente la Asociación Young Skål de Antalya. (16 miembros, 9 Miembros de la Junta) Presidente Fundador: Özen Kırant." },
    { date: "19-21 de Marzo de 1999", title: "Reunión Regional del Mediterráneo y Gala", desc: "Con la participación del Presidente Mundial de Skål Antonio Espinosa y el Secretario General Jim Power, se llevaron a cabo la Ceremonia de Fundación de Young Skål Antalya y la Noche de Gala en el Hotel Falez. La insignia verde 'Young Skål' fue prendida a los jóvenes por el Presidente Mundial." },
    { date: "23 de Mayo de 1999", title: "Primera Asamblea General", desc: "Se celebró la Primera Asamblea General de la Asociación Young Skål tras su establecimiento. Los 9 miembros fundadores fueron reelegidos en la Junta Directiva." },
    { date: "02-05 de Noviembre de 1999", title: "Representación en el 60º Congreso Mundial de Skål", desc: "Se aseguró la asistencia en representación del Club Young Skål de Antalya al 60º Congreso Mundial de Skål celebrado en Stuttgart, Alemania." },
    { date: "Diciembre de 1999", title: "Promociones Universitarias", desc: "Se organizaron reuniones introductorias para estudiantes de las Escuelas Vocacionales de Gestión Turística, Medicina y Ciencias Sociales de la Universidad Akdeniz, y muchos jóvenes visionarios nuevos se unieron a la asociación." },
    { date: "1999-2000", title: "Seminarios Educativos", desc: "Altos directivos de agencias de viajes, hoteles y académicos participaron como ponentes en las reuniones mensuales organizadas." },
    { date: "2000 - 2001", title: "Congreso y Simposio Nacional de Marketing", desc: "En el Simposio de Turismo Cultural (Hotel Falez) y el 5º Congreso Nacional de Marketing, los miembros de Young Skål asumieron roles activos desde la preparación hasta la noche de gala, llevándose a cabo la 1ª Reunión Nacional de Young Skål." }
  ]
};

const PAGE_CONTENT = {
  tr: {
    heroSub: "Skål'in dinamizmini korumak, devamlılığını sağlamak ve gelecekte başarılı turizm liderleri yetiştirmek amacıyla oluşturulmuş global organizasyon.",
    introTitleLeft: "Turizm Yönetiminde",
    introTitleRight: "Genç ve Canlı Kan",
    introP1: "Young Skål üyeleri, genç turizm profesyonelleri ve turizm eğitimi almakta olan öğrencilerdir.",
    introQuote: "\"Skål'ın gençlere yaptığı çağrıya dünyada ilk cevap verenler ve 1999 yılında ilk Young Skål gruplarını organize ederek Skål International'ın merkezi Torremolinos'a bildirenler Türk gençleridir.\"",
    introP2: "Temel amaç gençlerin kişisel ve mesleki gelişimlerini sağlamak, ilerleyen süreçte onları donanımlı ve yetişkin birer turizm profesyoneli yapmaktır.",
    card1Title: "Global Vizyon",
    card1Desc: "Uluslararası standartlarda turizm ağlarına anında erişim.",
    card2Title: "Mesleki Gelişim",
    card2Desc: "Akademik sunumlar, seminerler ve doğrudan yönetici mentörlüğü.",
    card3Title: "Network",
    card3Desc: "Stajyerlikten Genel Müdürlüğe ilerleyen devasa kariyer basamakları.",
    card4Title: "Liderlik",
    card4Desc: "Projeleri yöneterek, sorumluluk alarak kulüpler düzeyinde temsil.",
    timelineTitle: "Türkiye'de Kuruluş Öyküsü",
    timelineSub: "Dünya'daki ilk Young Skål grupları Antalya ve İstanbul'da kurulmuştur. Hikayenin temeli Antalya Akdeniz Üniversitesi işbirliği ile atılmıştır.",
    footerText: "İzmir olarak genç liderler yetiştirme vizyonumuza kararlılıkla devam ediyoruz."
  },
  en: {
    heroSub: "A global organization established to maintain the dynamism of Skål, ensure its continuity, and raise successful tourism leaders of the future.",
    introTitleLeft: "In Tourism Management",
    introTitleRight: "Young and Vibrant Blood",
    introP1: "Young Skål members are young tourism professionals and students receiving tourism education.",
    introQuote: "\"The first in the world to answer Skål's call to the youth and report it to Skål International's headquarters in Torremolinos by organizing the first Young Skål groups in 1999 were Turkish youths.\"",
    introP2: "The main purpose is to ensure the personal and professional development of the youth, and in the following process, to make them well-equipped and mature tourism professionals.",
    card1Title: "Global Vision",
    card1Desc: "Instant access to tourism networks at international standards.",
    card2Title: "Professional Development",
    card2Desc: "Academic presentations, seminars, and direct executive mentorship.",
    card3Title: "Networking",
    card3Desc: "Enormous career steps progressing from internship to General Management.",
    card4Title: "Leadership",
    card4Desc: "Representing at the club level by managing projects and taking responsibilities.",
    timelineTitle: "The Founding Story in Turkey",
    timelineSub: "The first Young Skål groups in the world were established in Antalya and Istanbul. The foundation of the story was laid in cooperation with Antalya Akdeniz University.",
    footerText: "As Izmir, we resolutely continue our vision of raising young leaders."
  },
  es: {
    heroSub: "Una organización global establecida para mantener el dinamismo de Skål, asegurar su continuidad y formar a los futuros líderes exitosos del turismo.",
    introTitleLeft: "En Gestión Turística",
    introTitleRight: "Sangre Joven y Vibrante",
    introP1: "Los miembros de Young Skål son jóvenes profesionales del turismo y estudiantes que reciben capacitación en turismo.",
    introQuote: "\"Los primeros en el mundo en responder a la llamada de Skål a los jóvenes y reportarlo a la sede de Skål International en Torremolinos organizando los primeros grupos Young Skål en 1999 fueron los jóvenes turcos.\"",
    introP2: "El propósito principal es asegurar el desarrollo personal y profesional de los jóvenes y, en el proceso subsecuente, convertirlos en profesionales del turismo bien equipados y maduros.",
    card1Title: "Visión Global",
    card1Desc: "Acceso instantáneo a redes de turismo en estándares internacionales.",
    card2Title: "Desarrollo Profesional",
    card2Desc: "Presentaciones académicas, seminarios y mentoría directa de ejecutivos.",
    card3Title: "Networking",
    card3Desc: "Enormes peldaños profesionales que progresan desde la pasantía hasta la Gerencia General.",
    card4Title: "Liderazgo",
    card4Desc: "Representando a nivel de club mediante la gestión de proyectos y la asunción de responsabilidades.",
    timelineTitle: "La Historia de Fundación en Turquía",
    timelineSub: "Los primeros grupos Young Skål en el mundo se establecieron en Antalya y Estambul. La fundación de la historia se sentó en cooperación con la Universidad Akdeniz de Antalya.",
    footerText: "Como Esmirna, continuamos con determinación nuestra visión de formar jóvenes líderes."
  }
};

export default async function YoungSkalPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  
  const historyEvents = HISTORY_EVENTS[lang] || HISTORY_EVENTS.en;
  const t = PAGE_CONTENT[lang] || PAGE_CONTENT.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        {/* Dynamic youthful background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A192F] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Young Skål</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-8 leading-snug">
                   {t.introTitleLeft} <br/><strong className="text-blue-600 italic">{t.introTitleRight}</strong>
                 </h2>
                 <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                   {t.introP1}
                 </p>
                 <p className="text-lg text-[#0A192F] font-medium leading-relaxed p-6 bg-white border-l-4 border-blue-600 rounded-r-2xl shadow-sm mb-6">
                   {t.introQuote}
                 </p>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                   {t.introP2}
                 </p>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <Globe2 className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">{t.card1Title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{t.card1Desc}</p>
                 </div>
                 <div className="bg-[#0A192F] p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center transform translate-y-8">
                    <GraduationCap className="text-white mb-4" size={40} />
                    <h4 className="text-white font-bold mb-2">{t.card2Title}</h4>
                    <p className="text-blue-200 text-sm font-light leading-relaxed">{t.card2Desc}</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <Users className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">{t.card3Title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{t.card3Desc}</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transform translate-y-8">
                    <BookOpen className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">{t.card4Title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{t.card4Desc}</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">{t.timelineTitle}</h2>
               <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                 {t.timelineSub}
               </p>
            </div>

            <div className="max-w-5xl mx-auto relative cursor-default">
               {/* Center Timeline Line */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-100 transform md:-translate-x-1/2"></div>
               
               <div className="space-y-12">
                  {historyEvents.map((item, idx) => {
                     const isLeft = idx % 2 === 0;
                     return (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                           
                           {/* Empty space for alternating layout on desktop */}
                           <div className="hidden md:block md:w-5/12"></div>
                           
                           {/* Center Dot */}
                           <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-[3px] border-blue-500 rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300 z-10 shadow-[0_0_0_4px_white]"></div>
                           
                           {/* Content Box */}
                           <div className="w-full pl-12 md:pl-0 md:w-5/12 relative">
                              <div className={`bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-lg transition-all duration-300 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                                 <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-100/50 px-3 py-1 rounded-full">
                                    <Calendar size={14} /> {item.date}
                                 </span>
                                 <h4 className="text-xl font-serif font-bold text-[#0A192F] mb-3">{item.title}</h4>
                                 <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                           
                        </div>
                     );
                  })}
               </div>
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto text-center p-8 bg-[#0A192F] text-white rounded-[2rem] shadow-xl">
               <p className="text-lg font-light leading-relaxed">
                  {t.footerText}
               </p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

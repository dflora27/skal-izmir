import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { Globe, Users, Trophy, Building2 } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Skål Nedir? | Skål International İzmir", description: "Skål International İzmir Skål Nedir? sayfası." },
    en: { title: "What is Skål? | Skål International Izmir", description: "Skål International Izmir What is Skål? page." },
    es: { title: "¿Qué es Skål? | Skål International Esmirna", description: "Página de ¿Qué es Skål? de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

const PAGE_CONTENT = {
  tr: {
    heroTitle: "Skål Nedir?",
    heroSub: "Dünya turizm profesyonellerinin küresel turizmi ve arkadaşlığı yaymaya çalıştığı, uluslararası en yaygın ve köklü sivil toplum örgütü.",
    uniqueTitle: "Benzersiz Bir Kurum",
    uniqueDesc: "Uluslararası seyahat ve turizm endüstrisindeki <strong class=\"text-blue-700 font-bold italic\">tüm sektörleri</strong> bünyesinde toplaması bakımından dünyada tektir.",
    missionTitle: "Misyonumuz",
    missionDesc: "Profesyonelliği, dostluklar ve liderlikle geliştirmek ve bu özelliği azami kullanarak <strong class=\"font-medium text-white block mt-2 border-l-2 border-blue-500 pl-4 py-1\">\"Güvenilir ve sorumlu bir Turizm Endüstrisi\"</strong> için çalışmaktır.",
    sloganTitle: "Sloganımız",
    sloganDesc: "\"Doing Business Among Friends\"",
    sloganContext: "Uluslararası dostluk ve iş bağlantısını pekiştirmek, turizm endüstrisinde profesyonelliği kuvvetlendirmek amacı ile seminer ve konferanslar düzenlemeyi teşvik ederiz.",
    historyTitle: "Kuruluş Hikayesi",
    historyP1: "İlk kulüp, İskandinavya’da yapılan bir eğitim gezisi sonucunda <strong class=\"text-[#0A192F] font-bold\">Florimond Volckaert</strong> ve birkaç turizmci arkadaşı tarafından <strong>1932</strong> yılında Paris’te kurulmuştur.",
    historyP2: "2 yıl sonra, <strong>1934</strong> yılında, bu oluşum dostluk ve uluslararası bazda gelişmiş, <strong class=\"text-[#0A192F] italic\">\"Association Internationale des Skål Clubs\"</strong> formasyonunda uluslararası kimliğine kavuşmuştur. Sonraki yıllarda resmi adı kısaltılarak <strong>SKAL INTERNATIONAL</strong> şeklinde değişmiştir.",
    statCountry: "Ülke",
    statClub: "Kulüp",
    statMember: "Üye",
    statHqTitle: "Merkezi Kadro",
    statHqVal: "İspanya / Torremolinos",
    congressTitle: "Dünya Kongreleri ve Küresel Etki",
    congressDesc: "Skål International, her yıl değişik bir ülkede yapılan Dünya kongresinde, genel kurul tarafından seçilen yönetim kadrosu ile yönetilir. Bu kongreler, üyelere dünyada turizm sektöründeki gelişmeleri birinci ağızdan dinleme fırsatı verir.",
    congressStat: "Kongre sonrası ev sahibi ülkedeki <br/>turist artış oranı"
  },
  en: {
    heroTitle: "What is Skål?",
    heroSub: "The most widespread and deep-rooted international non-governmental organization, where global tourism professionals strive to spread global tourism and friendship.",
    uniqueTitle: "A Unique Institution",
    uniqueDesc: "It is unique in the world in that it gathers <strong class=\"text-blue-700 font-bold italic\">all sectors</strong> of the international travel and tourism industry under its umbrella.",
    missionTitle: "Our Mission",
    missionDesc: "To develop professionalism through friendships and leadership, and utilizing this trait to the maximum, working for a <strong class=\"font-medium text-white block mt-2 border-l-2 border-blue-500 pl-4 py-1\">\"Reliable and responsible Tourism Industry\"</strong>.",
    sloganTitle: "Our Slogan",
    sloganDesc: "\"Doing Business Among Friends\"",
    sloganContext: "We encourage organizing seminars and conferences to reinforce international connection and business ties, to strengthen professionalism in the tourism industry.",
    historyTitle: "Founding Story",
    historyP1: "The first club was founded in Paris in <strong>1932</strong> by <strong class=\"text-[#0A192F] font-bold\">Florimond Volckaert</strong> and a few tourism professional friends following an educational trip to Scandinavia.",
    historyP2: "Two years later, in <strong>1934</strong>, this formation developed on the basis of friendship and internationality, acquiring its international identity under the formation of <strong class=\"text-[#0A192F] italic\">\"Association Internationale des Skål Clubs\"</strong>. In the following years, its official name was shortened to <strong>SKAL INTERNATIONAL</strong>.",
    statCountry: "Countries",
    statClub: "Clubs",
    statMember: "Members",
    statHqTitle: "Headquarters",
    statHqVal: "Spain / Torremolinos",
    congressTitle: "World Congresses and Global Impact",
    congressDesc: "Skål International is governed by an executive committee elected by the general assembly at the World Congress held in a different country every year. These congresses give members the opportunity to directly hear about developments in the world tourism sector.",
    congressStat: "Increase in tourists in the host <br/>country after the congress"
  },
  es: {
    heroTitle: "¿Qué es Skål?",
    heroSub: "La organización no gubernamental internacional más extendida y arraigada, donde los profesionales del turismo global se esfuerzan por difundir el turismo y la amistad.",
    uniqueTitle: "Una Institución Única",
    uniqueDesc: "Es única en el mundo ya que reúne a <strong class=\"text-blue-700 font-bold italic\">todos los sectores</strong> de la industria internacional de viajes y turismo bajo su paraguas.",
    missionTitle: "Nuestra Misión",
    missionDesc: "Desarrollar el profesionalismo a través de la amistad y el liderazgo y, utilizando esta cualidad al máximo, trabajar por una <strong class=\"font-medium text-white block mt-2 border-l-2 border-blue-500 pl-4 py-1\">\"Industria de Turismo Confiable y responsable\"</strong>.",
    sloganTitle: "Nuestro Eslogan",
    sloganDesc: "\"Haciendo Negocios Entre Amigos\"",
    sloganContext: "Alentamos la organización de seminarios y conferencias para reforzar las conexiones internacionales y de negocios, fortaleciendo el profesionalismo en el sector turístico.",
    historyTitle: "Historia Creadora",
    historyP1: "El primer club fue fundado en París en <strong>1932</strong> por <strong class=\"text-[#0A192F] font-bold\">Florimond Volckaert</strong> y unos cuantos amigos profesionales del turismo tras un viaje educativo en la región escandinava.",
    historyP2: "Dos años más tarde, en <strong>1934</strong>, la formación se desarrolló internacionalmente fortaleciendo la vinculación bajo un formato mundial conocido como la <strong class=\"text-[#0A192F] italic\">\"Association Internationale des Skål Clubs\"</strong>. Años más tarde se cambió y acortó a <strong>SKAL INTERNATIONAL</strong>.",
    statCountry: "Países",
    statClub: "Clubes",
    statMember: "Miembros",
    statHqTitle: "Sede Central",
    statHqVal: "España / Torremolinos",
    congressTitle: "Congresos Mundiales e Impacto Global",
    congressDesc: "Skål International es gobernada por un comité ejecutivo formado en una asamblea por elecciones llevadas a cabo en la asamblea mundial anual dada a lugar a diferentes naciones con cada congreso dando las opciones en escuchar en primera voz desarrollo global por expertos directos.",
    congressStat: "Aumento de turistas en el país <br/>anfitrión luego del congreso"
  }
};

export default async function WhatIsSkalPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  const t = PAGE_CONTENT[lang] || PAGE_CONTENT.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* Main Philosophy & Mission */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              
              <div className="lg:w-1/2 flex flex-col justify-center gap-8">
                 <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-slate-100 flex-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Trophy size={120} />
                    </div>
                    <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t.uniqueTitle}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.uniqueDesc }} />
                 </div>

                 <div className="bg-[#0A192F] rounded-3xl p-10 md:p-14 shadow-xl flex-1 text-white relative overflow-hidden">
                    <span className="text-blue-300 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t.missionTitle}</span>
                    <p className="text-xl md:text-2xl font-light text-blue-50 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.missionDesc }} />
                 </div>
              </div>

              <div className="lg:w-1/2 flex flex-col relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Doing Business Among Friends" className="w-full h-full object-cover filter brightness-[0.8]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent flex flex-col justify-end p-10 md:p-14">
                    <h4 className="text-white/80 font-bold tracking-[0.3em] uppercase text-sm mb-4">{t.sloganTitle}</h4>
                    <p className="text-3xl md:text-5xl font-serif text-white italic drop-shadow-xl">{t.sloganDesc}</p>
                    <p className="text-blue-100 font-light mt-6 max-w-md leading-relaxed">
                      {t.sloganContext}
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* History and Stats */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
            
            <div className="max-w-4xl mx-auto mb-20 text-center">
               <h2 className="text-4xl font-serif text-[#0A192F] mb-8">{t.historyTitle}</h2>
               <p className="text-lg text-slate-500 font-light leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.historyP1 }} />
               <p className="text-lg text-slate-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.historyP2 }} />
            </div>

            {/* Global Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">75</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">{t.statCountry}</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Building2 className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">294</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">{t.statClub}</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Users className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">12.500</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">{t.statMember}</span>
               </div>
               <div className="bg-[#0A192F] rounded-3xl p-8 flex flex-col items-center text-center justify-center text-white shadow-xl">
                  <span className="text-xs tracking-widest uppercase font-bold text-blue-300 mb-2">{t.statHqTitle}</span>
                  <span className="text-xl font-serif">{t.statHqVal}</span>
               </div>
            </div>

            {/* Congress Detail */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-[2.5rem] p-10 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-2/3">
                  <h3 className="text-2xl font-serif text-[#0A192F] mb-4">{t.congressTitle}</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    {t.congressDesc}
                  </p>
               </div>
               <div className="md:w-1/3 bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center justify-center shrink-0 border border-blue-100">
                  <span className="text-5xl font-serif font-bold text-blue-600 mb-2">%10</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500" dangerouslySetInnerHTML={{ __html: t.congressStat }} />
               </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

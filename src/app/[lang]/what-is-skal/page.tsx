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

export default async function WhatIsSkalPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Skål Nedir?</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
            Dünya turizm profesyonellerinin küresel turizmi ve arkadaşlığı yaymaya çalıştığı, uluslararası en yaygın ve köklü sivil toplum örgütü.
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
                    <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Benzersiz Bir Kurum</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-6 leading-relaxed">
                       Uluslararası seyahat ve turizm endüstrisindeki <strong className="text-blue-700 font-bold italic">tüm sektörleri</strong> bünyesinde toplaması bakımından dünyada tektir.
                    </h3>
                 </div>

                 <div className="bg-[#0A192F] rounded-3xl p-10 md:p-14 shadow-xl flex-1 text-white relative overflow-hidden">
                    <span className="text-blue-300 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Misyonumuz</span>
                    <p className="text-xl md:text-2xl font-light text-blue-50 leading-relaxed">
                       Profesyonelliği, dostluklar ve liderlikle geliştirmek ve bu özelliği azami kullanarak <strong className="font-medium text-white block mt-2 border-l-2 border-blue-500 pl-4 py-1">"Güvenilir ve sorumlu bir Turizm Endüstrisi"</strong> için çalışmaktır.
                    </p>
                 </div>
              </div>

              <div className="lg:w-1/2 flex flex-col relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Doing Business Among Friends" className="w-full h-full object-cover filter brightness-[0.8]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent flex flex-col justify-end p-10 md:p-14">
                    <h4 className="text-white/80 font-bold tracking-[0.3em] uppercase text-sm mb-4">Sloganımız</h4>
                    <p className="text-3xl md:text-5xl font-serif text-white italic drop-shadow-xl">"Doing Business Among Friends"</p>
                    <p className="text-blue-100 font-light mt-6 max-w-md leading-relaxed">
                      Uluslararası dostluk ve iş bağlantısını pekiştirmek, turizm endüstrisinde profesyonelliği kuvvetlendirmek amacı ile seminer ve konferanslar düzenlemeyi teşvik ederiz.
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
               <h2 className="text-4xl font-serif text-[#0A192F] mb-8">Kuruluş Hikayesi</h2>
               <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                 İlk kulüp, İskandinavya’da yapılan bir eğitim gezisi sonucunda <strong className="text-[#0A192F] font-bold">Florimond Volckaert</strong> ve birkaç turizmci arkadaşı tarafından <strong>1932</strong> yılında Paris’te kurulmuştur.
               </p>
               <p className="text-lg text-slate-500 font-light leading-relaxed">
                 2 yıl sonra, <strong>1934</strong> yılında, bu oluşum dostluk ve uluslararası bazda gelişmiş, <strong className="text-[#0A192F] italic">"Association Internationale des Skal Clubs"</strong> formasyonunda uluslararası kimliğine kavuşmuştur. Sonraki yıllarda resmi adı kısaltılarak <strong>SKAL INTERNATIONAL</strong> şeklinde değişmiştir.
               </p>
            </div>

            {/* Global Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">90+</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">Ülke</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Building2 className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">358</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">Kulüp</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center">
                  <Users className="text-blue-600 mb-4" size={32} />
                  <span className="text-4xl font-serif font-bold text-[#0A192F] mb-1">15.000</span>
                  <span className="text-xs tracking-widest uppercase font-bold text-slate-400">Üye</span>
               </div>
               <div className="bg-[#0A192F] rounded-3xl p-8 flex flex-col items-center text-center justify-center text-white shadow-xl">
                  <span className="text-xs tracking-widest uppercase font-bold text-blue-300 mb-2">Merkezi Kadro</span>
                  <span className="text-xl font-serif">İspanya / Torremolinos</span>
               </div>
            </div>

            {/* Congress Detail */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-[2.5rem] p-10 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-2/3">
                  <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Dünya Kongreleri ve Küresel Etki</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    Skål International, her yıl değişik bir ülkede yapılan Dünya kongresinde, genel kurul tarafından seçilen yönetim kadrosu ile yönetilir. Bu kongreler, üyelere dünyada turizm sektöründeki gelişmeleri birinci ağızdan dinleme fırsatı verir.
                  </p>
               </div>
               <div className="md:w-1/3 bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center justify-center shrink-0 border border-blue-100">
                  <span className="text-5xl font-serif font-bold text-blue-600 mb-2">%10</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Kongre sonrası ev sahibi ülkedeki <br/>turist artış oranı</p>
               </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

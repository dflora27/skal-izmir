import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { Megaphone, CalendarIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAnnouncements } from '@/data/announcements';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Duyurular | Skål International İzmir", description: "Skål International İzmir Duyurular sayfası." },
    en: { title: "Announcements | Skål International Izmir", description: "Skål International Izmir Announcements page." },
    es: { title: "Avisos | Skål International Esmirna", description: "Página de Avisos de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function AnnouncementsPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-50 mx-auto flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100 hidden">
             <Megaphone size={36} />
          </div>
          <img src="/logo-60.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">
             {lang === 'tr' ? 'Duyurular' : lang === 'es' ? 'Avisos' : 'Announcements'}
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
             {lang === 'tr' ? 'Kulübümüzle ilgili en güncel gelişmeleri, kurumsal toplantıları, ziyaretlerimizi ve etkinlik panomuzu bu sayfadan takip edebilirsiniz.' : lang === 'es' ? 'Siga los últimos desarrollos de nuestro club, reuniones corporativas, visitas y tablero de eventos desde esta página.' : 'Follow the latest developments of our club, corporate meetings, visits, and event board from this page.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {getAnnouncements(lang).map((item) => (
                 <Link href={`/${lang}/announcements/${item.id}`} key={item.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group cursor-pointer relative overflow-hidden">
                    {item.image && (
                       <div className="w-full h-64 overflow-hidden relative bg-slate-100">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       </div>
                    )}
                    
                    <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10 bg-white">
                       {!item.image && <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out"></div>}
                       
                       <div className="flex items-center gap-4 mb-6">
                          <span className={`${item.image ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-slate-50 text-slate-600 border-slate-100'} px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border`}>
                             {item.category}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-slate-400 font-medium tracking-wide">
                             <CalendarIcon size={14} /> {item.date}
                          </span>
                       </div>
                       
                       <h3 className="text-2xl font-serif text-[#0A192F] mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                       <p className="text-slate-500 font-light leading-relaxed mb-8 flex-1">{item.excerpt}</p>
                       
                       <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase transition-transform group-hover:translate-x-2 w-max">
                          {lang === 'tr' ? 'İncele' : lang === 'es' ? 'Ver Detalles' : 'View Details'} <ArrowRight size={16} />
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

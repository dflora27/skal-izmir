import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import Link from 'next/link';
import { MapPin, CalendarDays, Filter } from 'lucide-react';
import { events } from '@/data/events';

// Helper to convert Turkish date strings like "16 Mart 2026" to Date objects for sorting
const parseDate = (dateStr: string) => {
  const months: Record<string, number> = {
    "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
    "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11
  };
  const parts = dateStr.trim().split(' ');
  if (parts.length >= 3) {
    const day = parseInt(parts[0], 10);
    const monthStr = parts[1];
    const year = parseInt(parts[2], 10);
    const month = months[monthStr] !== undefined ? months[monthStr] : 0;
    return new Date(year, month, day).getTime();
  }
  return 0;
};


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Etkinliklerimiz | Skål International İzmir", description: "Skål International İzmir Etkinliklerimiz sayfası." },
    en: { title: "Events | Skål International Izmir", description: "Skål International Izmir Events page." },
    es: { title: "Eventos | Skål International Esmirna", description: "Página de Eventos de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function EventsPage({ 
  params,
  searchParams
}: { 
  params: Promise<{ lang: 'tr' | 'en' | 'es' }>;
  searchParams: Promise<{ year?: string, type?: string, sort?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const currentYear = resolvedSearchParams.year || "Tümü";
  const currentSort = resolvedSearchParams.sort || "desc"; // desc = Yeniden Eskiye

  // Extract unique years
  const availableYears = ["Tümü", ...Array.from(new Set(events.map(e => {
    const parts = e.date.trim().split(' ');
    return parts.length >= 3 ? parts[2] : "";
  }).filter(Boolean))).sort((a,b) => parseInt(b) - parseInt(a))];



  // Helper for generating url
  const refineUrl = (key: string, val: string) => {
     let url = `/${lang}/events?`;
     const y = key === 'year' ? val : currentYear;
     const s = key === 'sort' ? val : currentSort;
     if (y !== 'Tümü') url += `year=${encodeURIComponent(y)}&`;
     if (s !== 'desc') url += `sort=${encodeURIComponent(s)}&`;
     return url.slice(0, -1);
  };

  // Filter
  let filteredEvents = [...events];
  
  if (currentYear !== "Tümü") {
    filteredEvents = filteredEvents.filter(e => e.date.includes(currentYear));
  }

  // Sort
  filteredEvents.sort((a, b) => {
     const tA = parseDate(a.date);
     const tB = parseDate(b.date);
     return currentSort === "asc" ? tA - tB : tB - tA;
  });

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Title Section */}
      <section className="pt-40 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo-60.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">
             {lang === 'tr' ? 'Etkinliklerimiz' : lang === 'es' ? 'Nuestros Eventos' : 'Our Events'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
             {lang === 'tr' 
               ? 'İzmir turizmine yön veren, dostluğu ve profesyonelliği pekiştirdiğimiz değerli buluşmalarımız.' 
               : lang === 'es' 
               ? 'Nuestros valiosos encuentros que guían el turismo en Esmirna, reforzando la amistad y la profesionalidad.' 
               : 'Our valuable gatherings guiding Izmir tourism, reinforcing friendship and professionalism.'}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-y border-slate-100 sticky top-[80px] z-30 pt-4 pb-4 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.05)]">
         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side: Year & Type Filters */}
            <div className="flex flex-wrap items-center gap-6">
               <div className="flex items-center gap-2">
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">
                    {lang === 'tr' ? 'YIL' : lang === 'es' ? 'AÑO' : 'YEAR'}
                 </span>
                 <div className="flex gap-2">
                    {availableYears.map(yr => (
                       <Link 
                          key={`y-${yr}`}
                          href={refineUrl('year', yr)}
                          scroll={false} 
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentYear === yr ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#0A192F]'}`}
                       >
                          {yr === 'Tümü' ? (lang === 'tr' ? 'Tümü' : lang === 'es' ? 'Todos' : 'All') : yr}
                       </Link>
                    ))}
                 </div>
               </div>
            </div>

            {/* Right side: Sorting */}
            <div className="flex items-center gap-2 shrink-0">
               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1"><Filter size={14}/> {lang === 'tr' ? 'SIRALA' : lang === 'es' ? 'ORDENAR' : 'SORT'}</span>
               <div className="bg-slate-50 p-1 rounded-full flex border border-slate-100">
                  <Link 
                     href={refineUrl('sort', 'desc')} 
                     scroll={false}
                     className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentSort === 'desc' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-[#0A192F]'}`}
                  >
                     {lang === 'tr' ? 'Yeniden Eskiye' : lang === 'es' ? 'Más Recientes' : 'Newest First'}
                  </Link>
                  <Link 
                     href={refineUrl('sort', 'asc')} 
                     scroll={false}
                     className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentSort === 'asc' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-[#0A192F]'}`}
                  >
                     {lang === 'tr' ? 'Eskiden Yeniye' : lang === 'es' ? 'Más Antiguos' : 'Oldest First'}
                  </Link>
               </div>
            </div>

         </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           {filteredEvents.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredEvents.map((event) => (
                   <Link href={`/${lang}/events/${event.id}`} key={event.id} className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-none">
                      
                      {/* Background Image */}
                      <img src={event.bgImage} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Dark Overlay (hidden by default, shows on hover) */}
                      <div className="absolute inset-0 bg-[#0A192F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                         
                         <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                           <h3 className="text-2xl font-serif text-white mb-4 leading-tight">{event.title}</h3>
                           <div className="space-y-3">
                              <div className="flex items-center gap-3 text-blue-200">
                                 <MapPin size={16} />
                                 <span className="text-sm font-light tracking-wide">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-3 text-blue-200">
                                 <CalendarDays size={16} />
                                 <span className="text-sm font-light tracking-wide">{event.date}</span>
                              </div>
                           </div>
                         </div>

                      </div>
                   </Link>
                ))}
             </div>
           ) : (
             <div className="text-center py-20">
               <div className="text-slate-300 mb-6 flex justify-center">
                 <Filter className="w-20 h-20" />
               </div>
               <h3 className="text-2xl font-serif text-[#0A192F] mb-4">
                  {lang === 'tr' ? 'Etkinlik Bulunamadı' : lang === 'es' ? 'No se encontraron eventos' : 'No Events Found'}
               </h3>
               <p className="text-slate-500 font-light">
                  {lang === 'tr' ? 'Seçtiğiniz filtrelere uygun etkinlik bulunmuyor.' : lang === 'es' ? 'No hay eventos que coincidan con los filtros seleccionados.' : 'There are no events matching your selected filters.'}
               </p>
               <Link href={`/${lang}/events`} scroll={false} className="inline-block mt-8 text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline">
                  {lang === 'tr' ? 'Tümünü Göster' : lang === 'es' ? 'Mostrar Todos' : 'Show All'}
               </Link>
             </div>
           )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

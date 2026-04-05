import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import Link from 'next/link';
import { members } from '@/data/members';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Üyelerimiz | Skål International İzmir", description: "Skål International İzmir Üyelerimiz sayfası." },
    en: { title: "Members | Skål International Izmir", description: "Skål International Izmir Members page." },
    es: { title: "Miembros | Skål International Esmirna", description: "Página de Miembros de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function MembersPage({ 
  params
}: { 
  params: Promise<{ lang: 'tr' | 'en' | 'es' }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Title Section */}
      <section className="pt-40 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo-60.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">
             {lang === 'tr' ? 'Üyelerimiz' : lang === 'es' ? 'Nuestros Miembros' : 'Our Members'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
             {lang === 'tr' 
               ? 'İzmir turizmine yön veren, Skål International çatısı altındaki değerli üyelerimiz.' 
               : lang === 'es' 
               ? 'Nuestros valiosos miembros bajo el paraguas de Skål International, guiando el turismo en Esmirna.' 
               : 'Our valuable members under the Skål International umbrella, guiding Izmir tourism.'}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           {members.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                   <Link href={`/${lang}/members/${member.id}`} key={member.id} className="flex flex-col group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
                      {/* Square Photo */}
                      <div className="w-full aspect-square overflow-hidden relative cursor-pointer">
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 mix-blend-multiply" 
                        />
                      </div>
                      {/* Info Bar */}
                      <div className="p-6 flex flex-col gap-4 border-t border-slate-100 bg-white z-10 relative">
                         <h3 className="font-serif text-xl text-[#0A192F] font-bold group-hover:text-blue-600 transition-colors">{member.name}</h3>
                         <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-blue-600 transition-colors inline-block w-max">
                            {lang === 'tr' ? 'Detaylar' : lang === 'es' ? 'Detalles' : 'Details'} &rarr;
                         </span>
                      </div>
                   </Link>
                ))}
             </div>
           ) : (
             <div className="text-center py-20">
               <div className="text-slate-300 mb-6 flex justify-center">
                 <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
               </div>
               <h3 className="text-2xl font-serif text-[#0A192F] mb-4">
                 {lang === 'tr' ? 'Bu Kategoriye Ait Üye Bulunamadı' : lang === 'es' ? 'No se encontraron miembros para esta categoría' : 'No Members Found for This Category'}
               </h3>
               <p className="text-slate-500 font-light">
                 {lang === 'tr' ? 'Seçtiğiniz kategori için henüz bir üye ataması yapılmamıştır.' : lang === 'es' ? 'Aún no se han asignado miembros a la categoría seleccionada.' : 'No members have been assigned to your selected category yet.'}
               </p>
               <Link href={`/${lang}/members`} scroll={false} className="inline-block mt-8 text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline">
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

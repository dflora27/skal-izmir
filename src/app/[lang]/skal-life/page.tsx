import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { BookOpenText, ArrowRight } from 'lucide-react';
import { skalLifeIssues } from '@/data/skal-life';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Skål Life | Skål International İzmir", description: "Skål International İzmir Skål Life sayfası." },
    en: { title: "Skål Life | Skål International Izmir", description: "Skål International Izmir Skål Life page." },
    es: { title: "Skål Life | Skål International Esmirna", description: "Página de Skål Life de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

const PAGE_CONTENT = {
  tr: {
    hero: "Sektördeki yenilikleri, değerli kulüp üyelerimizin makalelerini ve İzmir turizminin parlayan yüzünü \"Skål Life\" dergimizin sayfalarında keşfedin."
  },
  en: {
    hero: "Discover the innovations in the sector, the articles of our esteemed club members, and the shining face of Izmir tourism in the pages of our \"Skål Life\" magazine."
  },
  es: {
    hero: "Descubra las innovaciones en el sector, los artículos de los estimados miembros de nuestro club y la cara brillante del turismo en Esmirna en las páginas de nuestra revista \"Skål Life\"."
  }
};

export default async function SkalLifePage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  const t = PAGE_CONTENT[lang] || PAGE_CONTENT.en;

  // Issues are imported from @/data/skal-life

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-50 mx-auto flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100 hidden">
             <BookOpenText size={36} />
          </div>
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Skål Life</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            {t.hero}
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="max-w-5xl mx-auto space-y-12">
              {skalLifeIssues.map((item, idx) => (
                 <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center group cursor-pointer hover:shadow-xl transition-all duration-500 block">
                    
                    {/* Magazine Cover Image */}
                    <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative flex items-center justify-center p-2 bg-slate-50">
                       <img src={item.cover} alt="Skål Life Logo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-xl" />
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col items-start">
                       <div className="flex gap-4 items-center mb-6">
                         <span className="bg-[#0A192F] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                            SKÅL LIFE
                         </span>
                         <span className="text-slate-400 font-medium tracking-widest uppercase text-xs">
                            {item.date}
                         </span>
                       </div>
                       
                       <h3 className="text-3xl font-serif text-[#0A192F] mb-6 group-hover:text-blue-600 transition-colors">
                          {lang === 'tr' ? `Skål Life ${item.date} Sayısı` : lang === 'es' ? `Edición Skål Life de ${item.date}` : `Skål Life ${item.date} Issue`}
                       </h3>
                       <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                          {lang === 'tr' 
                            ? 'İzmir turizmine yön veren değerli yayınımızın bu sayısını PDF formatında inceleyebilir, üyelerimizin makaleleri ve sektördeki son gelişmeleri okuyabilirsiniz.'
                            : lang === 'es'
                            ? 'Puede revisar esta edición de nuestra valiosa publicación en formato PDF, leer los artículos de nuestros miembros y los últimos desarrollos de la industria.'
                            : 'You can review this issue of our valuable publication in PDF format, read the articles of our members and the latest industry developments.'
                          }
                       </p>
                       
                       <div className="mt-auto flex items-center gap-2 text-[#0A192F] font-bold text-sm tracking-widest uppercase transition-transform group-hover:translate-x-3 bg-slate-50 w-max px-6 py-3 rounded-xl border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200">
                          {lang === 'tr' ? 'Dergiye Göz At' : lang === 'es' ? 'Leer Revista' : 'Read Magazine'} <ArrowRight size={16} />
                       </div>
                    </div>

                 </a>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

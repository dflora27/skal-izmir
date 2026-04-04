import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { congressData } from '@/data/world-congress';
import { notFound } from 'next/navigation';
import { Clock, PlayCircle, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { EventGallery } from '@/components/event-gallery';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const data = congressData[lang as keyof typeof congressData] || congressData.en;
  const event = data.agenda.find(a => a.slug === slug);

  if (!event) return { title: 'Not Found' };

  return {
    title: `${event.title} | SWC İzmir`,
    description: event.desc,
  };
}

export async function generateStaticParams() {
  const languages = ['tr', 'en', 'es'];
  const params: any[] = [];
  
  languages.forEach(lang => {
    const data = congressData[lang as keyof typeof congressData];
    if (data && data.agenda) {
      data.agenda.forEach(event => {
        params.push({ lang, slug: event.slug });
      });
    }
  });

  return params;
}

export default async function WorldCongressEventPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'tr' | 'en' | 'es';
  const slug = resolvedParams.slug;
  const data = congressData[lang as keyof typeof congressData];
  const dict = await getDictionary(lang);
  
  if (!data) return notFound();

  const event = data.agenda.find(a => a.slug === slug);
  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-[#050510] font-sans overflow-hidden">
      <Header dict={dict} lang={lang} />

      {/* Hero Header - Deep Parallax & Huge Typography */}
      <section className="relative min-h-[70vh] lg:h-[80vh] w-full flex flex-col justify-end overflow-hidden pt-40 lg:pt-48">
        <div className="absolute inset-0 z-0 bg-[#050510]">
          <Image
            src={(event.gallery && event.gallery.length > 0) ? event.gallery[0] : "/swc/swc-4.jpg"} 
            alt={event.title}
            fill
            className="object-cover object-center transform scale-105 animate-[pulse_10s_ease-in-out_infinite] filter brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pb-24 text-white animate-fade-in-up">
          <Link 
            href={`/${lang}/world-congress`}
            className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs lg:text-sm font-bold mb-8 group"
          >
            <div className="p-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-[#0A192F] transition-all">
               <ArrowLeft className="w-4 h-4" />
            </div>
            {lang === 'tr' ? 'Kongreye Dön' : lang === 'es' ? 'Atrás' : 'Back'}
          </Link>
          
          <div className="flex gap-4 items-center mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-sm font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4 text-[#F87498]" />
              {event.day}
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-8 drop-shadow-2xl">
            {event.title}
          </h1>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl font-sans font-light leading-relaxed">
            {event.desc}
          </p>
        </div>
      </section>

      {/* Highlights Overlay - Overlapping glass effect */}
      <section className="relative z-20 w-full max-w-[1500px] mx-auto px-6 lg:px-12 -mt-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {event.details.map((detail, idx) => (
             <div key={idx} className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-14 shadow-2xl border border-white/10 group hover:bg-white/10 transition-colors duration-500">
               <div className="w-12 h-1 bg-gradient-to-r from-[#F87498] to-[#128FD9] mb-6 rounded-full group-hover:w-full transition-all duration-[1s]"></div>
               <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{detail.subtitle}</h3>
               <p className="text-white/60 font-sans leading-relaxed text-lg">{detail.content}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Full Interactive Event Gallery */}
      <div className="w-full bg-[#FDFDFD] rounded-t-[4rem] lg:rounded-t-[5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-30 relative">
        <EventGallery 
          images={event.gallery || []} 
          videos={event.video ? [event.video] : []} 
        />
      </div>

      <Footer />
    </main>
  );
}

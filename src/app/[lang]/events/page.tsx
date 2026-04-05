import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { getEvents } from '@/data/events';
import { EventsClient } from './EventsClient';
import { Suspense } from 'react';

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
  params
}: { 
  params: Promise<{ lang: 'tr' | 'en' | 'es' }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const localEvents = getEvents(lang);
  const availableYears = ["Tümü", ...Array.from(new Set(localEvents.map(e => {
    const parts = e.date.trim().split(' ');
    return parts.length >= 3 ? parts[2] : "";
  }).filter(Boolean))).sort((a,b) => parseInt(b) - parseInt(a))];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

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

      <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
         <EventsClient lang={lang} localEvents={localEvents} availableYears={availableYears} />
      </Suspense>

      <Footer />
    </main>
  );
}

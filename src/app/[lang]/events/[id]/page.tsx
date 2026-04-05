import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { MapPin, CalendarDays, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { events, getEvents } from '@/data/events';
import { EventGallery } from '@/components/event-gallery';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ lang: 'tr' | 'en' | 'es', id: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;
  const mockEvent = getEvents(lang).find((e) => e.id === id);

  if (!mockEvent) return { title: 'Not Found' };

  return {
    title: `${mockEvent.title} | Skål International İzmir`,
    description: mockEvent.desc,
  };
}

export async function generateStaticParams() {
  const languages = ['tr', 'en', 'es'];
  const params: any[] = [];
  
  languages.forEach(lang => {
    events.forEach(event => {
      params.push({ lang, id: event.id });
    });
  });

  return params;
}

export default async function EventDetailPage({ 
  params 
}: Props) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;
  const dict = await getDictionary(lang);

  const mockEvent = getEvents(lang).find((e) => e.id === id);
  if (!mockEvent) return notFound();

  // Dynamically find gallery files matching event date prefix (e.g. 25-02-2025-1.jpeg)
  const baseFileName = mockEvent.bgImage.split('/').pop()?.split('.')[0] || '';
  let galleryFiles: string[] = [];
  let videoFiles: string[] = [];
  
  if (baseFileName) {
    try {
      const publicEventsDir = path.join(process.cwd(), 'public', 'events');
      if (fs.existsSync(publicEventsDir)) {
        const files = fs.readdirSync(publicEventsDir);
        const eventFiles = files.filter(f => f.startsWith(`${baseFileName}-`));
        
        galleryFiles = eventFiles
          .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
          .map(f => `/events/${f}`);
          
        videoFiles = eventFiles
          .filter(f => /\.(mp4|webm|mov)$/i.test(f))
          .map(f => `/events/${f}`);
      }
    } catch (e) {
      console.error("Error reading gallery files:", e);
    }
  }

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Content Top Spacer */}
      <div className="pt-32 md:pt-40"></div>

      <section className="pb-20 bg-[#FDFDFD]">
         <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <Link href={`/${lang}/events`} className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0A192F] mb-10 uppercase tracking-widest text-xs font-bold transition-colors">
               <ArrowLeft size={16} /> {lang === 'tr' ? 'Tüm Etkinlikler' : lang === 'es' ? 'Todos los Eventos' : 'All Events'}
            </Link>

            <div className="flex flex-col items-center">
              {/* Event Poster / Cover Image */}
              <div className="w-full max-w-[600px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl mb-12 bg-slate-100 flex items-center justify-center">
                 <img src={mockEvent.bgImage} className="w-full h-full object-cover" alt={mockEvent.title} />
              </div>

              {/* Event Title & Meta */}
              <div className="w-full text-center mb-12">
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] mb-8 leading-tight">{mockEvent.title}</h1>
                 <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
                    <div className="flex items-center gap-2 font-medium">
                       <CalendarDays className="text-blue-600" size={20} />
                       <span>{mockEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                       <MapPin className="text-blue-600" size={20} />
                       <span>{mockEvent.location}</span>
                    </div>
                 </div>
              </div>

              {/* Event Description */}
              <div className="w-full max-w-3xl text-lg md:text-xl text-slate-600 font-light leading-relaxed whitespace-pre-wrap text-center">
                 {mockEvent.desc}
              </div>
            </div>
         </div>
      </section>

      {/* Dynamic Photo & Video Gallery Grid Drop-in */}
      <EventGallery images={galleryFiles} videos={videoFiles} />

      <Footer />
    </main>
  );
}

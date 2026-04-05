import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { CalendarDays, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';

import { getAnnouncements, announcements } from '@/data/announcements';
import { EventGallery } from '@/components/event-gallery';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default async function AnnouncementDetailPage({ 
  params 
}: { 
  params: Promise<{ lang: 'tr' | 'en' | 'es', id: string }> 
}) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;
  const dict = await getDictionary(lang);

  const announcement = getAnnouncements(lang).find((e) => e.id === id);
  if (!announcement) return notFound();

  // Dynamically find gallery files matching announcement ID prefix
  let galleryFiles: string[] = [];
  let videoFiles: string[] = [];
  
  if (announcement.id) {
    try {
      const publicDir = path.join(process.cwd(), 'public', 'duyurular');
      if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir);
        const eventFiles = files.filter(f => f.startsWith(`${announcement.id}-`));
        
        galleryFiles = eventFiles
          .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f)) // Include all matching images, including cover
          .map(f => `/duyurular/${f}`);
          
        videoFiles = eventFiles
          .filter(f => /\.(mp4|webm|mov)$/i.test(f))
          .map(f => `/duyurular/${f}`);
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
            <Link href={`/${lang}/announcements`} className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0A192F] mb-10 uppercase tracking-widest text-xs font-bold transition-colors">
               <ArrowLeft size={16} /> {lang === 'tr' ? 'Tüm Duyurular' : lang === 'es' ? 'Todos los Avisos' : 'All Announcements'}
            </Link>

            <div className="flex flex-col items-center">
              {/* Cover Image */}
              {announcement.image && (
                <div className="w-full max-h-[600px] rounded-[2rem] overflow-hidden shadow-xl mb-12 bg-slate-100 flex items-center justify-center">
                   <img src={announcement.image} className="w-full h-full object-cover max-h-[600px]" alt={announcement.title} />
                </div>
              )}

              {/* Title & Meta */}
              <div className="w-full text-center mb-12">
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] mb-8 leading-tight">{announcement.title}</h1>
                 <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
                    <div className="flex items-center gap-2 font-medium">
                       <CalendarDays className="text-blue-600" size={20} />
                       <span>{announcement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                       <Tag className="text-blue-600" size={20} />
                       <span className="uppercase tracking-wider text-sm">{announcement.category}</span>
                    </div>
                 </div>
              </div>

              {/* Description */}
              <div className="w-full max-w-3xl text-lg md:text-xl text-slate-600 font-light leading-relaxed whitespace-pre-wrap text-center md:text-left">
                 {announcement.content}
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

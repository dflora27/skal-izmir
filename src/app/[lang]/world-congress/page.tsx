import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { congressData } from '@/data/world-congress';
import { notFound } from 'next/navigation';
import { Globe2, Anchor, Award, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const data = congressData[lang as keyof typeof congressData] || congressData.en;

  return {
    title: `${data.hero.title} | Skål International İzmir`,
    description: data.hero.desc,
  };
}

export default async function WorldCongressPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'tr' | 'en' | 'es';
  const data = congressData[lang] || congressData.en;
  const dict = await getDictionary(lang);

  if (!data) return notFound();

  const swcImages = [
    '/swc/sg-1-01.JPG',
    '/swc/sg-1-02.JPG',
    '/swc/sg-1-03.jpg',
    '/swc/sg-1-04.jpg',
    '/swc/sg-1-05.jpg',
    '/swc/sg-1-06.jpg',
    '/swc/sg-1-07.jpg',
    '/swc/sg-1-08.jpg',
    '/swc/sg-1-09.jpg',
    '/swc/sg-1-10.jpg',
  ];

  return (
    <main className="min-h-screen bg-[#050510] text-[#0A192F] font-sans selection:bg-[#E5E9F0]">
      {/* 1. Add Navigation Header! */}
      <Header dict={dict} lang={lang} />

      <section className="relative min-h-[70vh] lg:min-h-[90vh] w-full flex items-end justify-center overflow-hidden pb-12 lg:pb-24 pt-32">
        {/* Background Parallax Image Layer */}
        <div className="absolute inset-0 z-0 bg-[#050510]">
          <Image
            src="/swc/swc-bg.JPG"
            alt="83rd Skal World Congress Izmir"
            fill
            className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#241744]/70 via-[#050510]/60 to-[#128FD9]/20 z-10 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1500px] px-6 lg:px-12 flex flex-col items-center text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 max-w-fit rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white/90 text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#F87498] animate-pulse"></span>
            {data.hero.subtitle}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl max-w-6xl mx-auto">
            {data.hero.title}
          </h1>
          
          <p className="text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-[#F87498] font-medium italic mt-8 mb-10 max-w-4xl mx-auto">
            {data.hero.motto}
          </p>

          <p className="text-xl lg:text-3xl text-white/90 font-light max-w-4xl tracking-wide leading-relaxed mt-20 drop-shadow-sm">
            {data.hero.desc}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-70">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>      {/* INFINITE MARQUEE STRIP AWWWARDS */}
      <section className="relative z-20 overflow-hidden bg-[#050510] py-24 pb-48">
        {/* Dynamic rotating text strip */}
        <div className="flex w-fit whitespace-nowrap animate-marquee-x hover:[animation-play-state:paused] text-white mt-12 mb-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {[...Array(6)].map((_, i) => (
              <span key={`text-${i}`} className="text-6xl md:text-8xl font-black uppercase mx-8 tracking-tighter opacity-100">
                #BUILDINGBRIDGES
              </span>
            ))}
        </div>

        {/* Parallax scrolling photos */}
        <div className="flex gap-4 lg:gap-8 overflow-hidden pl-4 lg:pl-12 w-[240vw] mx-auto animate-marquee-x [animation-duration:50s]">
          {swcImages.map((src, i) => (
             <div key={`img1-${i}`} className="relative w-[350px] lg:w-[500px] aspect-[4/3] lg:aspect-video flex-shrink-0 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 border border-white/10">
                <Image src={src} alt={`SWC Memory ${i}`} fill sizes="(max-width: 1024px) 350px, 500px" className="object-cover" />
             </div>
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {swcImages.map((src, i) => (
             <div key={`img2-${i}`} className="relative w-[350px] lg:w-[500px] aspect-[4/3] lg:aspect-video flex-shrink-0 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 border border-white/10">
                <Image src={src} alt={`SWC Memory ${i}`} fill sizes="(max-width: 1024px) 350px, 500px" className="object-cover" loading="lazy" />
             </div>
          ))}
        </div>
      </section>


      {/* Main Content Area - Light Mode Elegance */}
      <div className="bg-[#FDFDFD] rounded-t-[3rem] lg:rounded-t-[5rem] relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/10 pt-24 lg:pt-32 pb-32">
        
        <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 space-y-32 lg:space-y-40">

          {/* Intro Video */}
          <section className="w-full animate-fade-in-up">
             <div className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                 <video 
                   src="/swc/swc-ent.mp4" 
                   autoPlay loop muted playsInline 
                   className="w-full h-auto object-cover scale-105" 
                 />
             </div>
          </section>

          {/* Section 1: Candidacy & Metrics Grid - Glassmorphism & Overlaps */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              {/* Abstract decorative graphic */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F87498]/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative space-y-10 pr-0 lg:pr-10">
                <div className="flex flex-col xl:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0A192F] leading-tight tracking-tight">
                      {data.candidacy.title}
                    </h2>
                    <div className="h-0.5 w-24 bg-gradient-to-r from-[#128FD9] to-[#F87498]"></div>
                    <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-light">
                      {data.candidacy.desc}
                    </p>
                  </div>
                </div>
                <div className="grid gap-6">
                  {data.candidacy.bullets.map((b, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="mt-1 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#4E3F84] group-hover:text-white transition-colors duration-500 flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-current" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A192F] text-xl mb-2">{b.title}</h3>
                        <p className="text-slate-500 leading-relaxed max-w-md">{b.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#1B123A] to-[#241744] rounded-[2rem] lg:rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#128FD9]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="inline-flex py-2 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <h3 className="text-lg lg:text-xl font-bold uppercase tracking-widest text-indigo-200">
                  {data.metrics.title}
                </h3>
              </div>
              
              <div className="space-y-6 lg:space-y-8 relative z-10 mt-6 font-sans">
                {data.metrics.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 lg:pb-6 group">
                    <span className="text-white/60 font-medium text-lg lg:text-xl group-hover:text-white transition-colors">{item.label}</span>
                    <span className="text-white font-bold text-xl lg:text-2xl text-right pl-4 tracking-tight drop-shadow-md">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* Section 2: Interactive Timeline / Agenda - AWWARDS ACCORDION STYLE */}
          <section id="agenda" className="relative z-20 py-24 bg-white/50 backdrop-blur-3xl rounded-[3rem] lg:rounded-[4rem] overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 border border-slate-200 shadow-xl">
            <div className="container mx-auto max-w-5xl">
              <div className="mb-20 text-center flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-serif text-[#F87498] mb-6">Program</h2>
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-16 gap-8">
                  <div className="text-center md:text-left space-y-6 flex-1">
                    <h2 className="text-5xl lg:text-7xl font-bold text-[#0A192F] tracking-tight">
                      Öne Çıkan Etkinlikler
                    </h2>
                  </div>
                  <video 
                     src="/swc/swc-loop-video-flamingo.mp4" 
                     autoPlay loop muted playsInline 
                     className="w-40 lg:w-56 mix-blend-multiply opacity-90 pointer-events-none md:-mr-12" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:gap-8">
                {data.agenda.map((day, idx) => (
                  <Link 
                    href={`/${lang}/world-congress/${day.slug}`} 
                    key={idx}
                    className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent w-0 group-hover:w-full transition-all duration-[1s] ease-out z-0"></div>
                    
                    <div className="relative z-10 flex-1 pr-0 md:pr-12">
                      <div className="text-[#128FD9] font-black tracking-[0.2em] text-sm mb-4 uppercase flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[#128FD9]"></span>
                        {day.day}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight group-hover:text-[#4E3F84] transition-colors leading-tight">
                        {day.title}
                      </h3>
                      <p className="text-slate-500 font-sans text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                        {day.desc}
                      </p>
                    </div>
                    
                    <div className="relative z-10 mt-8 md:mt-0 flex-shrink-0 flex items-center gap-6">
                      <span className="text-[#4E3F84] font-semibold text-lg hover-underline opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700 delay-100 hidden md:block">
                        {lang === 'tr' ? 'Keşfet' : lang === 'es' ? 'Explorar' : 'Explore'}
                      </span>
                      <div className="w-16 h-16 rounded-full border-2 border-slate-200 group-hover:border-[#F87498] group-hover:bg-[#F87498] text-[#0A192F] group-hover:text-white flex items-center justify-center transition-all duration-500">
                        <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Impact & Triumphs */}
          <section className="bg-slate-50 rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-24 border border-slate-200/60 shadow-inner">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A192F] tracking-tight">
                {data.impact.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               {data.impact.items.map((item, i) => {
                 const Icon = i === 0 ? Anchor : i === 1 ? Award : TrendingUp;
                 return (
                   <div key={i} className="group bg-white rounded-[2rem] p-10 text-center border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                     <div className="mx-auto w-24 h-24 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#4E3F84] group-hover:text-[#F87498] flex items-center justify-center mb-8 transition-colors duration-500">
                       <Icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#0A192F] mb-6 group-hover:text-[#128FD9] transition-colors">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed text-lg font-sans">{item.content}</p>
                   </div>
                 );
               })}
            </div>
          </section>

        </div>
      </div>
      
      {/* 2. Add Footer! */}


      <Footer />
    </main>
  );
}

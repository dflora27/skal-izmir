import { getDictionary } from '@/lib/dictionaries';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Preloader } from '@/components/preloader';
import { getEvents } from '@/data/events';
export default async function Home({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const partners = [
    'https://www.untourism.int/',
    'https://peacetourism.org/',
    'https://ecpat.org/',
    'https://sustainabletravel.org/',
    'https://www.pata.org/',
    'https://www.responsibletourisminstitute.com/en',
    'https://www.biospheretourism.com/en',
    'https://wttc.org/',
    'https://imexevents.com/',
    'https://www.wtm.com/london/en-gb.html',
    'https://www.wtm.com/africa/en-gb.html',
    'https://www.ibtmworld.com/'
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white">
      <Preloader />
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/anasayfa-1.mov" type="video/mp4" />
        </video>
        {/* Subtle, elegant gradient to ensure text readability without looking dirty */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-white/20 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-white/10 z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 mt-32">
          <div className="flex flex-col max-w-5xl">
            <span className="text-[#0A192F] font-bold tracking-[0.2em] text-base mb-6 block animate-fade-in-up">
              {dict.hero.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.1] text-[#0A192F] animate-fade-in-up-delayed [text-wrap:balance]">
              {dict.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* About Section - Centered Logo Layout */}
      <section id="about" className="pt-32 pb-24 bg-[#FDFDFD] relative z-20 border-t border-[#E5E9F0]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          
          <div className="flex flex-col items-center justify-center mb-32 text-center">
            <img src="/logo.png" alt="Skål International İzmir" className="max-w-[400px] md:max-w-[500px] w-full object-contain mb-16 drop-shadow-md" />
            <div className="max-w-4xl space-y-8 text-xl md:text-2xl text-slate-600 leading-relaxed font-light border-t border-slate-200 pt-16 mt-8">
              <p>{dict.izmir.p1}</p>
              <p>{dict.izmir.p2}</p>
              <p className="font-medium text-[#0A192F]">{dict.izmir.p3}</p>
            </div>
          </div>

          {/* Elevated Modern Stats Display */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { val: dict.stats.year.value, label: dict.stats.year.label, bg: 'bg-[#0A192F]', text: 'text-white' },
              { val: dict.stats.clubs.value, label: dict.stats.clubs.label, bg: 'bg-white', text: 'text-[#0A192F]' },
              { val: dict.stats.countries.value, label: dict.stats.countries.label, bg: 'bg-white', text: 'text-[#0A192F]' },
              { val: dict.stats.members.value, label: dict.stats.members.label, bg: 'bg-[#F3F6F8]', text: 'text-[#0A192F]' },
            ].map((stat, i) => (
              <div key={i} className={`p-10 rounded-[2rem] ${stat.bg} shadow-lg border border-slate-100 flex flex-col justify-center items-center text-center transition-all duration-500 hover:shadow-2xl`}>
                <div className={`text-6xl md:text-8xl font-serif font-bold ${stat.text} mb-6 tracking-tighter`}>
                   {i === 0 || stat.val === '1934' ? stat.val : <AnimatedCounter value={stat.val} />}
                </div>
                <div className={`font-medium text-xs uppercase tracking-[0.2em] ${stat.bg === 'bg-[#0A192F]' ? 'text-white/70' : 'text-slate-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Animation Float */}
      <div className="w-full flex justify-center py-8 bg-[#FDFDFD]">
        <video 
          src="/skal-logo.mp4" 
          autoPlay loop muted playsInline 
          className="w-full max-w-[600px] object-contain mix-blend-multiply pointer-events-none opacity-90" 
        />
      </div>

      {/* Collaborations Marquee */}
      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
         <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
             <h2 className="text-3xl font-sans font-bold text-[#0A192F] mb-4">{dict.collaborations?.title || 'Skål International | İş Birlikleri'}</h2>
             <p className="text-slate-500 font-light max-w-2xl mx-auto">
                {dict.collaborations?.desc || 'Seyahat ve turizm sektörünün önde gelen kuruluşlarıyla olan güçlü bağlarımızdan ve iş birliklerimizden gurur duyuyoruz.'}
             </p>
         </div>
         <div className="relative w-full flex overflow-hidden group">
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
             <div className="flex animate-marquee-x group-hover:[animation-play-state:paused]">
                {/* First Set */}
                <div className="flex gap-16 items-center px-8 w-max">
                   {partners.map((url, i) => (
                      <a href={url} target="_blank" rel="noopener noreferrer" key={`set1-${i}`} className="flex-shrink-0 w-32 h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                         <img src={`/partners/partner-${i+1}.png`} alt={`Partner ${i+1}`} className="max-w-full max-h-full object-contain" />
                      </a>
                   ))}
                </div>
                {/* Second Set for seamless infinite loop */}
                <div className="flex gap-16 items-center px-8 w-max">
                   {partners.map((url, i) => (
                      <a href={url} target="_blank" rel="noopener noreferrer" key={`set2-${i}`} className="flex-shrink-0 w-32 h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                         <img src={`/partners/partner-${i+1}.png`} alt={`Partner ${i+1}`} className="max-w-full max-h-full object-contain" />
                      </a>
                   ))}
                </div>
             </div>
         </div>
      </section>

      {/* Network / Photo Layout */}
      <section id="members" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
            
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                {dict.network.title}
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed font-light">
                {dict.network.desc}
              </p>
              <p className="text-md text-blue-200 mb-10 leading-relaxed">
                {dict.network.desc2}
              </p>
              <Link 
                href={`/${lang}/members`}
                className="self-start px-8 py-4 bg-white text-blue-900 text-sm tracking-widest uppercase font-bold hover:bg-blue-50 transition-colors duration-300 rounded-lg shadow-lg"
              >
                {dict.network.button}
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px]">
               <img src="/anasayfa-2.jpg" alt="Skal Network" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/20 to-transparent"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Events Horizontal Scroll Gallery */}
      <section id="events" className="py-32 bg-[#F3F6F8] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-[#0A192F] mb-6">{dict.events_section.title}</h2>
            <p className="max-w-2xl mx-auto text-slate-600 font-light leading-relaxed">{dict.events_section.desc}</p>
          </div>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto py-10">
            <div className="flex gap-8 px-6 w-max animate-marquee-x hover:[animation-play-state:paused]">
              {/* Combine events a few times to create enough width for proper scrolling */}
              {[...getEvents(lang), ...getEvents(lang), ...getEvents(lang), ...getEvents(lang)].map((event, i) => (
                <div key={`${event.id}-${i}`} className="relative w-72 md:w-80 lg:w-96 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group">
                    <img src={event.bgImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={event.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white font-serif text-xl mb-4 leading-snug drop-shadow-md">{event.title}</h3>
                      <Link href={`/${lang}/events/${event.id}`}>
                        <span className="text-white font-bold tracking-widest uppercase border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0A192F] transition-colors duration-300 shadow-lg cursor-pointer text-xs block w-max mt-2">
                          {lang === 'tr' ? 'Etkinliği İncele' : lang === 'es' ? 'Ver evento' : 'View Event'}
                        </span>
                      </Link>
                    </div>
                </div>
              ))}
            </div>
        </div>

        <div className="container mx-auto px-6 text-center mt-12">
          <Link href={`/${lang}/events`} className="inline-block border-b border-[#0A192F] pb-1 text-[#0A192F] font-semibold text-sm uppercase tracking-[0.2em] hover:text-blue-600 hover:border-blue-600 transition-colors">{lang === 'tr' ? 'Tüm Etkinliklerimiz' : lang === 'es' ? 'Todos los Eventos' : 'All Events'}</Link>
        </div>
      </section>

      {/* SWC Feature Cross Display */}
      <section className="relative z-20 w-full bg-[#1B123A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#241744] to-[#128FD9]/50 mix-blend-multiply pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F87498]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-10"></div>
        
        <div className="relative z-20 flex flex-col md:flex-row shadow-2xl">
           <div className="md:w-1/2 relative bg-[#1B123A] min-h-[400px] overflow-hidden">
              <video 
                src="/wc-anasayfa-1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-[2s] scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1B123A] pointer-events-none"></div>
           </div>
           
           <div className="md:w-1/2 p-12 lg:p-24 flex flex-col justify-center text-white bg-gradient-to-bl from-[#241744]/40 to-[#1B123A]">
              <span className="w-12 h-1 bg-[#F87498] rounded-full mb-8"></span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight drop-shadow-xl pr-4">
                 {dict.world_congress_cta?.titlePrefix || '83rd Skål International'} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-[#F87498] italic tracking-tighter">{dict.world_congress_cta?.titleHighlight || 'World Congress 2024 İzmir'}</span>
              </h2>
              <p className="text-lg lg:text-xl text-blue-100/70 mb-12 font-light leading-relaxed max-w-xl">
                 {dict.world_congress_cta?.desc || 'İzmir\'de gerçekleşen bu dev küresel buluşmanın eşsiz atmosferini, anılarını ve oturumlarını özel kongre sayfamızda keşfedin.'}
              </p>
              
              <Link href={`/${lang}/world-congress`} className="group flex items-center gap-6 w-max rounded-full pl-8 pr-3 py-3 bg-white/10 hover:bg-white text-white hover:text-[#0A192F] transition-all duration-500 backdrop-blur-md shadow-[0_0_30px_rgba(248,116,152,0.15)] border border-white/20">
                 <span className="font-bold tracking-widest uppercase text-sm">{dict.world_congress_cta?.button || 'Keşfet'}</span>
                 <div className="w-12 h-12 rounded-full bg-[#F87498] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </div>
              </Link>
           </div>
        </div>
      </section>

      {/* Immersive Video Section */}
      <section className="relative w-full h-[25vh] md:h-[35vh] lg:h-[40vh] overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover object-[center_70%]"
        >
          <source src="/anasayfa-3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0A192F]/10 mix-blend-overlay"></div>
      </section>

      {/* Contact Form Elegance */}
      <section id="contact" className="py-32 bg-[#FDFDFD]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-[#0A192F] mb-8">
                {dict.contact.title}
              </h2>
              <p className="text-xl text-slate-500 mb-12 max-w-xl font-light">
                {dict.contact.desc}
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-slate-400 mb-1">{dict.contact?.emailLabel || 'E-posta'}</h4>
                  <a href="mailto:info@skalizmir.com" className="text-[#0A192F] font-semibold hover:text-blue-600 transition-colors">info@skalizmir.com</a>
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-slate-400 mb-1">{dict.contact?.addressLabel || 'Adres'}</h4>
                  <p className="text-[#0A192F] font-medium max-w-xs" dangerouslySetInnerHTML={{ __html: dict.contact?.address || 'İsmet Kaptan Mahallesi<br/>Çankaya İş Merkezi No.90 Kat:5 D: 507<br/>Konak / İZMİR' }}></p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
               <form className="flex flex-col gap-6">
                 <div className="flex flex-col">
                   <label className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">{dict.contact?.formName || 'Ad Soyad'}</label>
                   <input type="text" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" placeholder={dict.contact?.formNamePlaceholder || 'Örn: Ahmet Yılmaz'} />
                 </div>
                 <div className="flex flex-col">
                   <label className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">{dict.contact?.formEmail || 'E-Posta'}</label>
                   <input type="email" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" placeholder="ornek@sirket.com" />
                 </div>
                 <div className="flex flex-col">
                   <label className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">{dict.contact?.formMessage || 'Mesajınız'}</label>
                   <textarea rows={4} className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium resize-none" placeholder={dict.contact?.formMessagePlaceholder || 'Nasıl yardımcı olabiliriz?'}></textarea>
                 </div>
                 <button type="button" className="mt-4 px-10 py-5 bg-[#0A192F] text-white text-sm tracking-[0.1em] uppercase font-bold hover:bg-blue-600 transition-colors duration-500 rounded-xl shadow-lg w-full">
                    {dict.contact.formButton}
                 </button>
               </form>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

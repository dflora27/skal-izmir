import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = {
    tr: { title: "Hakkımızda | Skål International İzmir", description: "Skål International İzmir hakkında detaylı bilgi, yönetim kurulumuz, vizyonumuz ve küresel turizm ağımız." },
    en: { title: "About Us | Skål International Izmir", description: "Learn about Skål International Izmir, our board of directors, our vision, and our global tourism network." },
    es: { title: "Sobre Nosotros | Skål International Esmirna", description: "Conozca Skål International Esmirna, nuestra junta directiva, nuestra visión y nuestra red de turismo global." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const subpages = [
    { title: dict.about?.board?.title || "Yönetim Kurulu", desc: dict.about?.board?.desc || "İzmir'i dünyaya tanıtan, Skål International İzmir'in vizyoner yönetim kadrosu.", href: `/${lang}/board` },
    { title: dict.about?.president?.title || "Başkanın Mesajı", desc: dict.about?.president?.desc || "Skål International İzmir Başkanı'nın sektöre, üyelerimize ve geleceğe dair mesajı.", href: `/${lang}/president-message` },
    { title: dict.about?.what_is?.title || "Skål Nedir?", desc: dict.about?.what_is?.desc || "1934'te kurulan, dünyanın en büyük uluslararası konaklama ve turizm ağının hikayesi.", href: `/${lang}/what-is-skal` },
    { title: dict.about?.skal_izmir?.title || "Skål International İzmir", desc: dict.about?.skal_izmir?.desc || "Ege'nin turizm potansiyelini küresel dostluk ağıyla birleştiren kulübümüzün hedefleri.", href: `/${lang}/skal-izmir` },
    { title: dict.about?.usdf?.title || "USDF", desc: dict.about?.usdf?.desc || "Uluslararası Skål Dernekleri Federasyonu (USDF) ve Türkiye organizasyon yapısı.", href: `/${lang}/usdf` },
    { title: dict.about?.young?.title || "Young Skål", desc: dict.about?.young?.desc || "Turizmin geleceği olan gençlerimiz için oluşturulan dinamik destek organizasyonumuz.", href: `/${lang}/young-skal` },
    { title: dict.about?.florimond?.title || "Florimond Volckaert Fund", desc: dict.about?.florimond?.desc || "Skål üyelerine zor zamanlarında destek olmak amacıyla kurulan küresel yardım fonu.", href: `/${lang}/florimond-volckaert-fund` },
    { title: dict.about?.skal_life?.title || "Skål Life", desc: dict.about?.skal_life?.desc || "İzmir turizmine yön veren yayınımız, kulüp üyelerimizin makaleleri ve sektör dergimiz.", href: `/${lang}/skal-life` },
    { title: dict.about?.congress?.title || "83rd Skål International World Congress in Izmir", desc: dict.about?.congress?.desc || "İzmir'de düzenlenecek olan dev uluslararası Skål Kongresi detayları.", href: `/${lang}/world-congress` }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">{dict.about?.page?.title || 'Hakkımızda'}</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            {dict.about?.page?.desc || 'Seyahat ve turizm profesyonellerini birleştiren dünyanın en köklü dostluk ağını keşfedin.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subpages.map((page, idx) => (
              <Link 
                href={page.href} 
                key={idx} 
                className={`group rounded-3xl p-10 md:p-14 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex justify-between items-center border border-slate-100 relative overflow-hidden ${idx === 8 ? 'md:col-span-2 bg-[#0A192F] border-none' : 'bg-white'}`}
              >
                 {idx === 8 && (
                   <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('/swc/swc-bg.JPG')" }}></div>
                 )}
                 <div className="flex flex-col pr-8 relative z-10 w-full">
                    {idx === 8 && <span className="text-[#F87498] font-bold tracking-[0.2em] uppercase text-xs mb-3 block drop-shadow-md">İZMİ̇R 2024</span>}
                    <h3 className={`text-3xl font-serif mb-4 transition-colors capitalize ${idx === 8 ? 'text-white group-hover:text-[#F87498] md:text-5xl' : 'text-[#0A192F] group-hover:text-blue-700'}`}>{page.title}</h3>
                    <p className={`font-light leading-relaxed max-w-2xl ${idx === 8 ? 'text-white/80 text-lg md:text-xl' : 'text-slate-500'}`}>{page.desc}</p>
                 </div>
                 <div className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center transition-colors duration-500 relative z-10 ${idx === 8 ? 'bg-[#F87498] text-white group-hover:bg-white group-hover:text-[#F87498]' : 'bg-slate-50 text-[#0A192F] group-hover:bg-blue-600 group-hover:text-white'}`}>
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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

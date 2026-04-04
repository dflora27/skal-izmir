import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { MapPin, Target, Users, Key } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "USDF | Skål International İzmir", description: "Skål International İzmir USDF sayfası." },
    en: { title: "USDF | Skål International Izmir", description: "Skål International Izmir USDF page." },
    es: { title: "USDF | Skål International Esmirna", description: "Página de USDF de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function USDFPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const clubs = [
    "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Bodrum", 
    "Marmaris", "Kuşadası", "Fethiye", "Kapadokya", "Alanya", 
    "Çukurova", "Marmara", "Eskişehir", "Konya", "Karadeniz", "Troya"
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">USDF Skål Türkiye</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Uluslararası Skål Dernekleri Federasyonu
          </p>
        </div>
      </section>

      {/* History & Structure */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center border-b border-slate-200 pb-24">
           
           <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] leading-snug">
                Dünya Skål Hareketi İçinde <strong className="text-blue-600 italic">Çok Önemli Bir Yere</strong> Sahibiz
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Uluslararası Skål, <strong className="text-[#0A192F] font-medium border-b-2 border-blue-600 pb-1">1956 yılında</strong> İstanbul Skål Kulübünün kuruluşu ile Türkiye’ye girmiştir. SKAL TÜRKİYE, o günden bu yana küresel turizm dostluk ağında belirleyici bir güç olmuştur.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Key size={24} />
                 </div>
                 <div>
                    <h4 className="text-[#0A192F] font-bold uppercase tracking-widest text-xs mb-2">Federatif Yapı</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      Mart 2011 yılından itibaren federatif yapıya kavuşmuş ve <strong>ULUSLARARASI SKAL DERNEKLERİ FEDERASYONU (USDF)</strong> adını almıştır.
                    </p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-lg transform translate-y-8">
                 <span className="text-6xl font-serif text-[#0A192F] mb-2 font-bold">17</span>
                 <span className="text-sm uppercase tracking-widest font-bold text-slate-400">Aktif Kulüp</span>
              </div>
              <div className="bg-[#0A192F] text-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl">
                 <span className="text-6xl font-serif mb-2 font-bold">1000+</span>
                 <span className="text-sm uppercase tracking-widest font-bold text-blue-400">Turizm Profesyoneli</span>
              </div>
           </div>

        </div>

        {/* Clubs Grid Context */}
        <div className="container mx-auto px-6 md:px-12 pt-24 text-center">
           <h3 className="text-2xl font-serif text-[#0A192F] mb-12">Türkiye Genelindeki Kulüplerimiz</h3>
           <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {clubs.map((club, idx) => (
                 <span key={idx} className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm cursor-default">
                    <MapPin size={16} className="text-slate-400" />
                    {club}
                 </span>
              ))}
           </div>
           <p className="mt-12 text-slate-500 font-light">
              Yılda <strong className="text-[#0A192F]">6 kez</strong> kulüpler ile sektöre ilişkin konuların görüşüldüğü dev toplantılarda bir araya gelinir.
           </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
            
            <div className="bg-[#0A192F] rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none text-white">
                  <Target size={250} />
               </div>
               
               <div className="max-w-4xl relative z-10 text-white">
                  <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400 mb-8 border-l-4 border-blue-400 pl-4">Öncelikli Amacımız</h2>
                  
                  <div className="text-2xl md:text-3xl font-light leading-relaxed text-blue-50 space-y-6">
                     <p>
                       Büyüme konusunda destek vermenin yanı sıra, bünyesinde barındırdığı kulüplere yön vererek destek olmak ve projeler üretmek.
                     </p>
                     <p>
                       Katma değer sağlayan yararlı toplantılar düzenleyerek sektör içindeki ağırlığını kuvvetlendirmek, kamuoyunu ve sektörü bilinçlendirmek.
                     </p>
                     <p>
                       <strong className="font-serif italic tracking-wide text-white">"Kulüpler arasında ve Turizm Endüstrisinde çalışan üyeleri arasında dostluk, ortak bir anlayış ve işbirliği oluşturmaktır."</strong>
                     </p>
                  </div>
               </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

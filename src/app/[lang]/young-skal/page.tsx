import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { GraduationCap, ArrowUpRight, Calendar, Users, Globe2, BookOpen } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Young Skål | Skål International İzmir", description: "Skål International İzmir Young Skål sayfası." },
    en: { title: "Young Skål | Skål International Izmir", description: "Skål International Izmir Young Skål page." },
    es: { title: "Young Skål | Skål International Esmirna", description: "Página de Young Skål de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function YoungSkalPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const historyEvents = [
    { 
      date: "Ekim 1998", 
      title: "Resmi Başvuru", 
      desc: "Antalya Genç Skål Kulübü için Dernekler Masasına başvuru yapıldı. Tüzük düzeltmeleri gerçekleştirildi."
    },
    { 
      date: "09 Aralık 1998", 
      title: "Resmi Kuruluş", 
      desc: "Antalya Valiliği onayı ile Antalya Genç Skål Derneği resmen kuruldu. (16 üye, 9 Yönetim Kurulu Üyesi) Kurucu Başkan: Özen Kırant."
    },
    { 
      date: "19-21 Mart 1999", 
      title: "Akdeniz Bölge Toplantısı & Gala", 
      desc: "Dünya Skål Başkanı Antonio Espinosa ve Genel Sekreter Jim Power katılımı ile Young Skål Antalya Kuruluş Töreni ve Gala Gecesi Falez Oteli'nde düzenlendi. Gençlere yeşil renkli 'Young Skål' rozeti Dünya Başkanı tarafından takıldı."
    },
    { 
      date: "23 Mayıs 1999", 
      title: "İlk Genel Kurul", 
      desc: "Genç Skål Derneği'nin kuruluş sonrası İlk Genel Kurulu yapıldı. Kurucu 9 üye Yönetim Kuruluna tekrar seçildi."
    },
    { 
      date: "02-05 Kasım 1999", 
      title: "60. Dünya Skål Kongresi Temsili", 
      desc: "Almanya Stuttgart'ta düzenlenen 60. Dünya Skål Kongresine Antalya Genç Skål Kulübünü temsilen katılım sağlandı."
    },
    { 
      date: "Aralık 1999", 
      title: "Üniversite Tanıtımları", 
      desc: "Akdeniz Üniversitesi Turizm İşletmeciliği Tıp ve Sosyal Bilimler MYO'larında öğrencilere tanıtıcı toplantılar düzenlenip derneğe çok sayıda yeni vizyoner genç eklendi."
    },
    { 
      date: "1999-2000", 
      title: "Eğitim Seminerleri", 
      desc: "Düzenlenen aylık toplantılara üst düzey Otel ve Seyahat Acentası yöneticileri ile akademisyenler konuşmacı olarak katıldı."
    },
    { 
      date: "2000 - 2001", 
      title: "Ulusal Pazarlama Kongresi & Sempozyum", 
      desc: "Kültür Turizmi Sempozyumu (Falez Oteli) ve 5. Ulusal Pazarlama Kongresi'nde Young Skål üyeleri hazırlıktan gala gecesine dek aktif görev alıp 1. Young Skål Ulusal Toplantısı gerçekleştirildi."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        {/* Dynamic youthful background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A192F] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Young Skål</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            Skål'in dinamizmini korumak, devamlılığını sağlamak ve gelecekte başarılı turizm liderleri yetiştirmek amacıyla oluşturulmuş global organizasyon.
          </p>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-8 leading-snug">
                   Turizm Yönetiminde <br/><strong className="text-blue-600 italic">Genç ve Canlı Kan</strong>
                 </h2>
                 <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                   Young Skål üyeleri, genç turizm profesyonelleri ve turizm eğitimi almakta olan öğrencilerdir. 
                 </p>
                 <p className="text-lg text-[#0A192F] font-medium leading-relaxed p-6 bg-white border-l-4 border-blue-600 rounded-r-2xl shadow-sm mb-6">
                   "Skål'ın gençlere yaptığı çağrıya dünyada ilk cevap verenler ve 1999 yılında ilk Young Skål gruplarını organize ederek Skål International'ın merkezi Torremolinos'a bildirenler Türk gençleridir."
                 </p>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                   Temel amaç gençlerin kişisel ve mesleki gelişimlerini sağlamak, ilerleyen süreçte onları donanımlı ve yetişkin birer turizm profesyoneli yapmaktır.
                 </p>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <Globe2 className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">Global Vizyon</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">Uluslararası standartlarda turizm ağlarına anında erişim.</p>
                 </div>
                 <div className="bg-[#0A192F] p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center transform translate-y-8">
                    <GraduationCap className="text-white mb-4" size={40} />
                    <h4 className="text-white font-bold mb-2">Mesleki Gelişim</h4>
                    <p className="text-blue-200 text-sm font-light leading-relaxed">Akademik sunumlar, seminerler ve doğrudan yönetici mentörlüğü.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <Users className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">Network</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">Stajyerlikten Genel Müdürlüğe ilerleyen devasa kariyer basamakları.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transform translate-y-8">
                    <BookOpen className="text-blue-500 mb-4" size={40} />
                    <h4 className="text-[#0A192F] font-bold mb-2">Liderlik</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">Projeleri yöneterek, sorumluluk alarak kulüpler düzeyinde temsil.</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Türkiye'de Kuruluş Öyküsü</h2>
               <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                 Dünya'daki ilk Young Skål grupları Antalya ve İstanbul'da kurulmuştur. Hikayenin temeli Antalya Akdeniz Üniversitesi işbirliği ile atılmıştır.
               </p>
            </div>

            <div className="max-w-5xl mx-auto relative cursor-default">
               {/* Center Timeline Line */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-100 transform md:-translate-x-1/2"></div>
               
               <div className="space-y-12">
                  {historyEvents.map((item, idx) => {
                     const isLeft = idx % 2 === 0;
                     return (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                           
                           {/* Empty space for alternating layout on desktop */}
                           <div className="hidden md:block md:w-5/12"></div>
                           
                           {/* Center Dot */}
                           <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-[3px] border-blue-500 rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300 z-10 shadow-[0_0_0_4px_white]"></div>
                           
                           {/* Content Box */}
                           <div className="w-full pl-12 md:pl-0 md:w-5/12 relative">
                              <div className={`bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-lg transition-all duration-300 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                                 <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-100/50 px-3 py-1 rounded-full">
                                    <Calendar size={14} /> {item.date}
                                 </span>
                                 <h4 className="text-xl font-serif font-bold text-[#0A192F] mb-3">{item.title}</h4>
                                 <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                           
                        </div>
                     );
                  })}
               </div>
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto text-center p-8 bg-[#0A192F] text-white rounded-[2rem] shadow-xl">
               <p className="text-lg font-light leading-relaxed">
                  İzmir olarak genç liderler yetiştirme vizyonumuza kararlılıkla devam ediyoruz.
               </p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

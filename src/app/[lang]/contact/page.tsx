import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "İletişim | Skål International İzmir", description: "Skål International İzmir İletişim sayfası." },
    en: { title: "Contact Us | Skål International Izmir", description: "Skål International Izmir Contact Us page." },
    es: { title: "Contáctenos | Skål International Esmirna", description: "Página de Contáctenos de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">İletişim ve Destek</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya üyelik başvurularınız için Skål İzmir Yönetim Kurulu ve sekreteryamızla iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* Intro & Secretary */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-8 leading-snug">
                   Birlikte <br/><strong className="text-blue-600 italic">Turizmi Büyütüyoruz</strong>
                 </h2>
                 <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                   Taleplerinize en kısa sürede profesyonel ekibimiz tarafından dönüş sağlanacaktır.
                 </p>
                 <p className="text-lg text-[#0A192F] font-medium leading-relaxed p-6 bg-white border-l-4 border-blue-600 rounded-r-2xl shadow-sm mb-6">
                   "İzmir’in turizm potansiyelini birlikte büyütmek için buradayız."
                 </p>
                 <div className="mt-8 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                   <h4 className="text-xl font-bold text-[#0A192F] mb-1">Elif AKŞAHİN</h4>
                   <p className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-6">Genel Sekreter</p>
                   <a href="mailto:secretarygeneral@skalizmir.com" className="text-lg text-blue-600 font-medium hover:underline">
                     secretarygeneral@skalizmir.com
                   </a>
                 </div>
              </div>

              <div className="lg:w-1/2 w-full">
                 <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 relative">
                   <div className="absolute top-8 right-8 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <h3 className="text-2xl font-serif text-[#0A192F] mb-8">Bize Mesaj Gönderin</h3>
                   <form className="flex flex-col gap-6">
                     <div className="flex flex-col">
                       <input type="text" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" placeholder="Adınız Soyadınız" />
                     </div>
                     <div className="flex flex-col">
                       <input type="email" className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" placeholder="E-Posta Adresiniz" />
                     </div>
                     <div className="flex flex-col">
                       <textarea rows={4} className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium resize-none" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
                     </div>
                     <button type="button" className="mt-4 px-10 py-5 bg-[#0A192F] text-white text-sm tracking-[0.1em] uppercase font-bold hover:bg-blue-600 transition-colors duration-500 rounded-xl shadow-lg w-full">
                        Gönder
                     </button>
                   </form>
                 </div>
              </div>
              
           </div>
        </div>
      </section>

      {/* Social Media & Instagram Feed */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Bizi Sosyal Medya Platformlarından Takip Edin</h2>
             <p className="text-xl text-slate-500 font-medium mb-6">Skål İzmir ailesiyle bağınızı koparmayın!</p>
             <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                En güncel etkinliklerimizden haberdar olmak, profesyonel networking buluşmalarımızı takip etmek ve turizm dünyasındaki son gelişmeleri kaçırmamak için bizi sosyal medya hesaplarımızdan takip edin.
             </p>
             <p className="text-lg text-blue-600 font-bold mb-10">Dijital topluluğumuza katılın ve bu özel yolculuğun bir parçası olun.</p>
             
             <div className="flex justify-center gap-6">
                <a href="https://www.instagram.com/skalizmir/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-full border border-slate-200 hover:bg-blue-50 transition-colors group">
                   <svg className="w-6 h-6 text-[#0A192F] group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                   <span className="font-bold tracking-widest text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors uppercase">Instagram</span>
                </a>
                <a href="https://www.facebook.com/skalizmir/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-full border border-slate-200 hover:bg-blue-50 transition-colors group">
                   <svg className="w-6 h-6 text-[#0A192F] group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                   <span className="font-bold tracking-widest text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors uppercase">Facebook</span>
                </a>
             </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
             {[1, 2, 3, 4].map((num) => (
                <a key={num} href="https://www.instagram.com/skalizmir/" target="_blank" rel="noopener noreferrer" className="block relative aspect-[3/4] overflow-hidden group rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 pointer-events-auto">
                   <img src={`/insta/insta-${num}.jpeg`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Instagram Post ${num}`} />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
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

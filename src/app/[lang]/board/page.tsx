import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { Mail, Phone } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Yönetim Kurulu | Skål International İzmir", description: "Skål International İzmir Yönetim Kurulu sayfası." },
    en: { title: "Board of Directors | Skål International Izmir", description: "Skål International Izmir Board of Directors page." },
    es: { title: "Junta Directiva | Skål International Esmirna", description: "Página de Junta Directiva de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function BoardPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

    const members = [
      { name: "Aydın TOKBAŞ", roleTr: "Başkan", roleEn: "President", phone: "+90 505 862 07 85", email: "president@skalizmir.com", photo: "/yonetim/aydin-tokbas.jpg" },
      { name: "Mine Güneş KAYA", roleTr: "Asbaşkan", roleEn: "Vice President", phone: "+90 533 567 34 00", email: "vp@skalizmir.com", photo: "/yonetim/mine-gunes-kaya.jpeg" },
      { name: "Elif AKŞAHİN", roleTr: "Genel Sekreter", roleEn: "General Secretary", phone: "+90 542 270 24 60", email: "secretarygeneral@skalizmir.com", photo: "/yonetim/elif-aksahin.jpg" },
      { name: "Onur TÜRKAY", roleTr: "Sayman", roleEn: "Treasurer", phone: "+90 505 671 16 45", email: "treasurer@skalizmir.com", photo: "/yonetim/onur-turkay.jpg" },
      { name: "Bülent TERCAN", roleTr: "PR ve Üyelik Geliştirme", roleEn: "PR and Membership Development", phone: "+90 532 316 63 56", email: "membership@skalizmir.com", photo: "/yonetim/bulent-tercan.jpg" },
      { name: "Macit ŞAŞZADE", roleTr: "Proje Geliştirme", roleEn: "Project Development", phone: "+90 532 262 50 72", email: "project@skalizmir.com", photo: "/yonetim/macit-saszade.jpeg" },
      { name: "Gülçağ ÖZMERMER", roleTr: "Sponsorluk Geliştirme", roleEn: "Sponsorship Development", phone: "+90 532 571 41 84", email: "sponsorship@skalizmir.com", photo: "/yonetim/gulcag-ozmermer.jpg" }
    ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Yönetim Kurulu</h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Turizm potansiyelini küresel dostluk ağımızla birleştiren, İzmir'i dünyaya tanıtan yönetim kadromuz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {members.map((member, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group ${idx === members.length - 1 ? 'md:col-span-2 md:w-[calc(50%-1.5rem)] md:mx-auto xl:col-span-1 xl:w-full xl:col-start-2 xl:mx-0' : ''}`}>
                 {/* Photograph Placeholder */}
                 <div className="w-full aspect-[4/5] bg-slate-100 rounded-2xl mb-8 overflow-hidden relative">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 
                 <div className="flex flex-col flex-1">
                    <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-1">{member.name}</h3>
                    <p className="text-sm tracking-widest text-slate-400 uppercase font-bold mb-6">{lang === 'tr' ? member.roleTr : member.roleEn}</p>
                    
                    <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                       <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-sm text-slate-500 font-medium hover:text-blue-600 transition-colors">
                          <Phone size={16} />
                          {member.phone}
                       </a>
                       <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm text-slate-500 font-medium hover:text-blue-600 transition-colors">
                          <Mail size={16} />
                          {member.email}
                       </a>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

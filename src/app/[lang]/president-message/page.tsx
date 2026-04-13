import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Başkanın Mesajı | Skål International İzmir", description: "Skål International İzmir Başkanın Mesajı sayfası." },
    en: { title: "President's Message | Skål International Izmir", description: "Skål International Izmir President's Message page." },
    es: { title: "Mensaje del Presidente | Skål International Esmirna", description: "Página de Mensaje del Presidente de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

const PRESIDENT_CONTENT = {
  tr: {
    pageTitle: "Başkanın Mesajı",
    presidentName: "Aydın TOKBAŞ",
    presidentRole: "Başkan / President",
    greeting: "Değerli Skål Dostlarım;",
    p1: "28 Ocak 2025 tarihi itibari ile yapılan genel kurulumuzda başkan olarak seçilmiş bulunmaktayım. Beni ve yönetim kurulumu bu göreve layık gördüğünüz için çok teşekkür ederim.",
    p2: "Uzun zamandır kulübümüzün her kademesinde görev yaptım. İzmir Turizminin gelişmesi ve zenginleşmesi adına birçok projeler gerçekleştirdik. Bu vesileyle geçmiş dönemde görev alan tüm eski başkanlara ve yönetim kurulu üyelerine sonsuz teşekkür ederim.",
    quote: "Vizyonumuz; Artık İzmir Skål kulübü bir markadır. İzmir'de turizm denince ilk akla gelmektedir. Bünyemizde barındırdığımız tüm Turizm STK'larımız ile birlikte güçlü bir aileyiz.",
    p3: "Dostluk, kardeşlik ve paylaşım ilkesi ile ilerleyerek el birliği ile kulübümüzü en üst seviyede temsil etmeye ve projeler üretmeye çalışıyoruz.",
    p4: "Başkan olduğum süre boyunca üyelerimizin sorunları, projeleri ve İzmir turizminin gelişmesi ve ilerlemesi adına daima çalışacağım.",
    p5: "Bize inandığınız için çok teşekkür eder; tüm yönetim kurulu adına şükranlarımı sunarım.",
    signoff: "Skål Sevgi ve Saygılarımla",
  },
  en: {
    pageTitle: "President's Message",
    presidentName: "Aydın TOKBAŞ",
    presidentRole: "President",
    greeting: "Dear Skål Friends;",
    p1: "As of the general assembly held on January 28, 2025, I have been elected as the president. Thank you very much for deeming me and my board of directors worthy of this duty.",
    p2: "I have served at every level of our club for a long time. We have implemented many projects aiming to develop and enrich Izmir Tourism. I would like to take this opportunity to infinitely thank all past presidents and board members who served in previous terms.",
    quote: "Our Vision; Izmir Skål club is now a prominent brand. It is the first to come to mind when tourism is mentioned in Izmir. We are a strong family together with all the Tourism NGOs we harbor.",
    p3: "Advancing with the principles of friendship, brotherhood, and sharing, we strive to collaboratively represent our club at the highest level and to produce great projects.",
    p4: "During my time as president, I will constantly work to address our members' issues, push projects forward, and focus on the development and progression of Izmir's tourism.",
    p5: "Thank you so much for believing in us; I offer my gratitude on behalf of the entire board of directors.",
    signoff: "With Skål Love and Respect",
  },
  es: {
    pageTitle: "Mensaje del Presidente",
    presidentName: "Aydın TOKBAŞ",
    presidentRole: "Presidente",
    greeting: "Queridos Amigos de Skål;",
    p1: "A partir de la asamblea general celebrada el 28 de enero de 2025, he sido elegido como presidente. Muchas gracias por considerarnos dignos de este deber, tanto a mí como a mi junta directiva.",
    p2: "He servido en todos los niveles de nuestro club durante mucho tiempo. Hemos llevado a cabo muchos proyectos para el desarrollo y enriquecimiento del Turismo en Esmirna. Aprovecho esta oportunidad para agradecer infinitamente a todos los presidentes anteriores y miembros de la junta que sirvieron en los mandatos pasados.",
    quote: "Nuestra Visión; El club Skål de Esmirna es ahora una marca destacada. Es lo primero que viene a la mente cuando se menciona el turismo en Esmirna. Somos una familia fuerte junto con todas las ONG de Turismo que albergamos.",
    p3: "Avanzando con los principios de amistad, hermandad y compartir, trabajamos juntos para representar nuestro club al más alto nivel y producir grandes proyectos.",
    p4: "Durante mi tiempo como presidente, trabajaré constantemente considerando los problemas y proyectos de nuestros miembros, y por el constante desarrollo y avance del turismo en Esmirna.",
    p5: "Damos muchas gracias por creer en nosotros; ofrezco mi gratitud en nombre de toda la junta directiva.",
    signoff: "Con Amor y Respeto Skål",
  }
};

export default async function PresidentMessagePage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  const t = PRESIDENT_CONTENT[lang] || PRESIDENT_CONTENT.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Editorial Title Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-8 opacity-80 mix-blend-multiply" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">{t.pageTitle}</h1>
          </div>
        </div>
      </section>

      {/* Content Section - Editorial Layout */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Portrait Image Column */}
          <div className="lg:w-2/5 flex flex-col relative">
             <div className="sticky top-32">
                <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl p-2 border border-slate-100">
                   <img 
                     src="/aydin-tokbas.jpg" 
                     alt={`${t.presidentName} - ${t.presidentRole}`} 
                     className="w-full h-full object-cover rounded-2xl filter contrast-[1.05] brightness-[1.02]"
                   />
                </div>
                <div className="mt-8 text-center lg:text-left lg:pl-4">
                  <h3 className="text-2xl font-serif font-bold text-[#0A192F]">{t.presidentName}</h3>
                  <p className="text-sm tracking-widest text-slate-400 uppercase font-bold mt-2">{t.presidentRole}</p>
                </div>
             </div>
          </div>

          {/* Letter Text Column */}
          <div className="lg:w-3/5 flex flex-col bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-slate-100">
             <h4 className="text-xl md:text-2xl font-serif text-[#0A192F] mb-12 italic">{t.greeting}</h4>

             <div className="space-y-8 text-lg font-light leading-relaxed text-slate-600">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p className="p-8 border-l-2 border-blue-600 bg-blue-50/50 rounded-r-xl text-[#0A192F] font-medium text-xl italic">
                  {t.quote}
                </p>
                <p>{t.p3}</p>
                <p>{t.p4}</p>
                <p>{t.p5}</p>

                <div className="pt-16 mt-8 border-t border-slate-100">
                   <p className="font-serif text-[#0A192F] italic mb-2 text-xl">{t.signoff}</p>
                   <p className="font-bold tracking-widest uppercase text-sm text-[#0A192F]">{t.presidentName}</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

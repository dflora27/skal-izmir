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

export default async function PresidentMessagePage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Editorial Title Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-8 opacity-80 mix-blend-multiply" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Başkanın Mesajı</h1>
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
                     alt="Aydın TOKBAŞ - President" 
                     className="w-full h-full object-cover rounded-2xl filter contrast-[1.05] brightness-[1.02]"
                   />
                </div>
                <div className="mt-8 text-center lg:text-left lg:pl-4">
                  <h3 className="text-2xl font-serif font-bold text-[#0A192F]">Aydın TOKBAŞ</h3>
                  <p className="text-sm tracking-widest text-slate-400 uppercase font-bold mt-2">Başkan / President</p>
                </div>
             </div>
          </div>

          {/* Letter Text Column */}
          <div className="lg:w-3/5 flex flex-col bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-slate-100">
             <h4 className="text-xl md:text-2xl font-serif text-[#0A192F] mb-12 italic">Değerli Skål Dostlarım;</h4>

             <div className="space-y-8 text-lg font-light leading-relaxed text-slate-600">
                <p>
                  28 Ocak 2025 tarihi itibari ile yapılan genel kurulumuzda başkan olarak seçilmiş bulunmaktayım. Beni ve yönetim kurulumu bu göreve layık gördüğünüz için çok teşekkür ederim.
                </p>

                <p>
                  Uzun zamandır kulübümüzün her kademesinde görev yaptım. İzmir Turizminin gelişmesi ve zenginleşmesi adına birçok projeler gerçekleştirdik. Bu vesileyle geçmiş dönemde görev alan tüm eski başkanlara ve yönetim kurulu üyelerine sonsuz teşekkür ederim.
                </p>

                <p className="p-8 border-l-2 border-blue-600 bg-blue-50/50 rounded-r-xl text-[#0A192F] font-medium text-xl italic">
                  Vizyonumuz; Artık İzmir Skal kulübü bir markadır. İzmir'de turizm denince ilk akla gelmektedir. Bünyemizde barındırdığımız tüm Turizm STK'larımız ile birlikte güçlü bir aileyiz.
                </p>

                <p>
                  Dostluk, kardeşlik ve paylaşım ilkesi ile ilerleyerek el birliği ile kulübümüzü en üst seviyede temsil etmeye ve projeler üretmeye çalışıyoruz.
                </p>

                <p>
                  Başkan olduğum süre boyunca üyelerimizin sorunları, projeleri ve İzmir turizminin gelişmesi ve ilerlemesi adına daima çalışacağım.
                </p>

                <p>
                  Bize inandığınız için çok teşekkür eder; tüm yönetim kurulu adına şükranlarımı sunarım.
                </p>

                <div className="pt-16 mt-8 border-t border-slate-100">
                   <p className="font-serif text-[#0A192F] italic mb-2 text-xl">Skål Sevgi ve Saygılarımla</p>
                   <p className="font-bold tracking-widest uppercase text-sm text-[#0A192F]">Aydın TOKBAŞ</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

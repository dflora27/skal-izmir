import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { HeartHandshake, ShieldCheck, FileText, Landmark, KeySquare, HelpCircle } from 'lucide-react';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Florimund Volckaert Fonu | Skål International İzmir", description: "Skål International İzmir Florimund Volckaert Fonu sayfası." },
    en: { title: "Florimund Volckaert Fund | Skål International Izmir", description: "Skål International Izmir Florimund Volckaert Fund page." },
    es: { title: "Fondo Florimund Volckaert | Skål International Esmirna", description: "Página de Fondo Florimund Volckaert de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function FVFPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const reasons = [
    "İşi kaybetmekten ötürü geçim sıkıntısına düşmek.",
    "Vefat eden Skål üyesinin eşinin & çocuğunun okul masrafları.",
    "Başka imkânlarla karşılanmayacak hastane ve ameliyat masrafları.",
    "Fiziki sakatlanma geçiren Skål üyesinin yaşam koşuluna yardım edecek sağlık malzemesi tedariki.",
    "Skål üyesi veya en yakın aile fertlerinin doğal afetlerden dolayı düştükleri sıkıntılar.",
    "Derin geçim sıkıntısı halleri veya uzun süren ağır sağlık sorunları."
  ];

  const rules = [
    "Tamamen gizlilik içinde işlemler yürütülür.",
    "Bağış Talep Formundaki her soruyu detaylı ve açık (sarih) cevaplandırın, gerekirse ek sayfa kullanın.",
    "İletişim adreslerinizi ve telefon numaralarınızı teyit edin.",
    "İhtiyaç sahibinin Skål üyesi mi yoksa bir aile yakını mı olduğunu net belirtin.",
    "Yardım bağışı, ticari/şirket kayıpları veya borçları için verilmez.",
    "Skål üyeliğinizin süresi, pozisyonu ve genel durumu temel kıstaslardandır.",
    "Geri ödemesiz (borç olmayan) bir yardım olsa da, durum iyileştiğinde fona geri bağış yapılması erdemli bir tavsiye olarak sunulur.",
    "Bağış tahsilinde mütevellilere bilgi yazısı/makbuz verilmesi rica olunur."
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50/50 transform -skew-x-12"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">Florimond Volckaert Fonu</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed">
            «Bunca yıldır bu fona bağış yapan biriyim, bir gün kendimin bu fona başvuracağım aklıma gelmezdi.»
          </p>
        </div>
      </section>

      {/* Genesis & Meaning */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
           
           <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                 <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-serif text-[#0A192F]">Fon Nedir?</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Florimond Volckaert (1898 - 1968), Skål'ın kurucu başkanıdır. Skål üyelerinin kullanabileceği bir yardım fonunun oluşturulma görüşmeleri ilk kez 1949'da başlamış olup, 1953 yılında İspanya (Mayorka) Dünya Kongresinde karara bağlanarak <strong className="text-[#0A192F]">1954'te işlevsel hale gelmiştir.</strong>
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Amacı; Dünya genelindeki Skål kardeşlerinin ve yakın aile bireylerinin ciddi ihtiyaçları halinde onlara anında destek olabilmektir.
              </p>
           </div>

           <div className="flex flex-col gap-10">
              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-4 flex items-center gap-3">
                   <ShieldCheck className="text-blue-600" />
                   Sistem Nasıl Çalışır?
                 </h3>
                 <p className="text-slate-600 font-light leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   Bir Skål üyesinin yardıma ihtiyacı olduğu durumlarda, bağlı bulunduğu Kulübünün Başkanı veya Enternasyonel Temsilci (Councillor) vasıtası ile mevcut olan <strong className="text-[#0A192F]">3 mütevelliye (trustees)</strong> başvurulur. Bu heyet, başvuruyu alır almaz inceler ve çok hızlı sürede kararını bildirir.
                 </p>
              </div>

              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-4 flex items-center gap-3">
                   <Landmark className="text-blue-600" />
                   Para Nereden Gelmektedir?
                 </h3>
                 <div className="bg-[#0A192F] p-8 rounded-2xl shadow-xl text-white">
                    <p className="font-light leading-relaxed text-blue-50 mb-6">
                      Skål üyelerinin, Kulüplerin, Milli Komite ve Bölge komitelerinin tamamen gönüllü bağışlarından gelir.
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 py-1 italic font-medium text-lg">
                      "Bu fon sizin fonunuzdur. Lütfen bir gün sizin de ihtiyacınız olabileceğini unutmayınız."
                    </div>
                    <p className="mt-6 text-sm text-blue-200 tracking-wider uppercase font-bold">
                      Bağışlar ve Yardımlar %100 Gizlilik İçinde Yürütülür.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </section>

      {/* Special Cases */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-serif text-[#0A192F] mb-6">Hangi Özel Durumlarda Yardım Talep Edilir?</h2>
               <p className="text-slate-500 font-light text-lg">
                 Talep etmek için öne çıkan geçerli sebepler şunlardır:
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
               {reasons.map((reason, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-4">
                     <span className="text-blue-500 font-bold font-serif text-2xl mt-[-4px]">{idx + 1}.</span>
                     <p className="text-slate-600 font-medium leading-relaxed">{reason}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Application Rules */}
      <section className="py-24 bg-[#0A192F] text-white">
         <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
               <div className="sticky top-32">
                  <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Bağış İsteme Kuralları</h2>
                  <p className="text-blue-100/70 font-light text-lg leading-relaxed mb-8">
                     Yardım talepleri büyük bir hassasiyet ve gizlilikle işlenir. Bağışınızı gecikmeden alabilmeniz için aşağıdaki kuralların takip edilmesi önemlidir.
                  </p>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <h4 className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-blue-300 mb-2">
                        <FileText size={16} /> Form Nerede?
                     </h4>
                     <p className="text-sm font-light text-white/80">
                        <a href="https://www.skal.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-300 transition-colors">www.skal.org</a> sitesi içinde fonla ilgili başvuru formu bulunmaktadır. Form doldurularak, site üzerinden 3 mütevelliye gönderilmelidir.
                     </p>
                  </div>
               </div>
            </div>
            <div className="lg:w-2/3">
               <ul className="space-y-6">
                  {rules.map((rule, idx) => (
                     <li key={idx} className="bg-[#112240] p-6 md:p-8 rounded-2xl flex gap-6 items-start border border-blue-900/50 shadow-lg group hover:border-blue-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                           <KeySquare size={18} />
                        </div>
                        <p className="text-blue-50/90 font-light leading-relaxed text-lg pt-1 group-hover:text-white transition-colors">{rule}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 bg-[#F3F6F8]">
         <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-[#0A192F] mb-12">Banka Bilgileri (Bağış için)</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               
               <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A192F] flex items-center justify-center text-white mb-6 shadow-xl">
                     <span className="font-bold text-xl font-serif">€</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-widest uppercase text-[#0A192F] mb-6">Euro Hesabı</h4>
                  <div className="w-full space-y-4 text-left">
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Hesap Sahibi</span>
                        <p className="font-medium text-slate-600">Florimond Volckaert Fund</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Banka & Şube</span>
                        <p className="font-medium text-slate-600">Banco Bilbao Vizcaya<br/><span className="text-sm font-light">Plaza Costa del Sol 9, 29620 Torremolinos, Spain</span></p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Hesap No</span>
                        <p className="font-medium font-mono text-[#0A192F] bg-slate-50 p-2 rounded">0182.0481.65.0011510764</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">SWIFT / IBAN</span>
                        <p className="font-mono text-sm text-slate-600">BBVAESMM<br/><span className="text-[#0A192F] font-bold">ES94 0182 0481 6500 1151 0764</span></p>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A192F] flex items-center justify-center text-white mb-6 shadow-xl">
                     <span className="font-bold text-xl font-serif">$</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-widest uppercase text-[#0A192F] mb-6">USD Hesabı</h4>
                  <div className="w-full space-y-4 text-left">
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Hesap Sahibi</span>
                        <p className="font-medium text-slate-600">Florimond Volckaert Fund</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Banka & Şube</span>
                        <p className="font-medium text-slate-600">Banco Bilbao Vizcaya<br/><span className="text-sm font-light">Plaza Costa del Sol 9, 29620 Torremolinos, Spain</span></p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Hesap No</span>
                        <p className="font-medium font-mono text-[#0A192F] bg-slate-50 p-2 rounded">0182.0481.62.201121003.9</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">SWIFT / IBAN</span>
                        <p className="font-mono text-sm text-slate-600">BBVAESMM<br/><span className="text-[#0A192F] font-bold">ES89 0182 0481 6220 1121 0039</span></p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

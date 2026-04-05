import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { HeartHandshake, ShieldCheck, FileText, Landmark, KeySquare } from 'lucide-react';

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

const FVF_CONTENT = {
  tr: {
    heroTitle: "Florimond Volckaert Fonu",
    heroQuote: "«Bunca yıldır bu fona bağış yapan biriyim, bir gün kendimin bu fona başvuracağım aklıma gelmezdi.»",
    whatIsTitle: "Fon Nedir?",
    whatIsP1: "Florimond Volckaert (1898 - 1968), Skål'ın kurucu başkanıdır. Skål üyelerinin kullanabileceği bir yardım fonunun oluşturulma görüşmeleri ilk kez 1949'da başlamış olup, 1953 yılında İspanya (Mayorka) Dünya Kongresinde karara bağlanarak",
    whatIsP1Bold: "1954'te işlevsel hale gelmiştir.",
    whatIsP2: "Amacı; Dünya genelindeki Skål kardeşlerinin ve yakın aile bireylerinin ciddi ihtiyaçları halinde onlara anında destek olabilmektir.",
    howWorksTitle: "Sistem Nasıl Çalışır?",
    howWorksP: "Bir Skål üyesinin yardıma ihtiyacı olduğu durumlarda, bağlı bulunduğu Kulübünün Başkanı veya Enternasyonel Temsilci (Councillor) vasıtası ile mevcut olan",
    howWorksPBold: "3 mütevelliye (trustees)",
    howWorksP2: "başvurulur. Bu heyet, başvuruyu alır almaz inceler ve çok hızlı sürede kararını bildirir.",
    whereMoneyTitle: "Para Nereden Gelmektedir?",
    whereMoneyP: "Skål üyelerinin, Kulüplerin, Milli Komite ve Bölge komitelerinin tamamen gönüllü bağışlarından gelir.",
    whereMoneyQuote: "\"Bu fon sizin fonunuzdur. Lütfen bir gün sizin de ihtiyacınız olabileceğini unutmayınız.\"",
    secretTag: "Bağışlar ve Yardımlar %100 Gizlilik İçinde Yürütülür.",
    specialCasesTitle: "Hangi Özel Durumlarda Yardım Talep Edilir?",
    specialCasesSub: "Talep etmek için öne çıkan geçerli sebepler şunlardır:",
    rulesTitle: "Bağış İsteme Kuralları",
    rulesSub: "Yardım talepleri büyük bir hassasiyet ve gizlilikle işlenir. Bağışınızı gecikmeden alabilmeniz için aşağıdaki kuralların takip edilmesi önemlidir.",
    formWhereTitle: "Form Nerede?",
    formWhereP: "sitesi içinde fonla ilgili başvuru formu bulunmaktadır. Form doldurularak, site üzerinden 3 mütevelliye gönderilmelidir.",
    bankTitle: "Banka Bilgileri (Bağış için)",
    bankEuroTitle: "Euro Hesabı",
    bankUsdTitle: "USD Hesabı",
    bankHolder: "Hesap Sahibi",
    bankBranch: "Banka & Şube",
    bankAccNo: "Hesap No",
  },
  en: {
    heroTitle: "Florimond Volckaert Fund",
    heroQuote: "«I have been donating to this fund for years, I never thought I would apply to it myself one day.»",
    whatIsTitle: "What is the Fund?",
    whatIsP1: "Florimond Volckaert (1898 - 1968) is the founding president of Skål. Discussions to establish a relief fund for Skål members began in 1949, and it was formalized during the 1953 World Congress in Spain (Mallorca), becoming",
    whatIsP1Bold: "operational in 1954.",
    whatIsP2: "Its purpose is to provide immediate assistance to Skål brethren and their close family members worldwide in times of serious need.",
    howWorksTitle: "How Does the System Work?",
    howWorksP: "In cases where a Skål member needs assistance, an application is made through the President of their Club or the International Councillor to the acting",
    howWorksPBold: "3 trustees",
    howWorksP2: ". This board reviews the application immediately and communicates its decision very quickly.",
    whereMoneyTitle: "Where Does the Money Come From?",
    whereMoneyP: "It comes from entirely voluntary donations from Skål members, Clubs, National Committees, and Regional Committees.",
    whereMoneyQuote: "\"This fund is your fund. Please remember that one day you might need it too.\"",
    secretTag: "Donations and Aids are Conducted with 100% Confidentiality.",
    specialCasesTitle: "In What Special Cases is Aid Requested?",
    specialCasesSub: "The valid primary reasons to request aid are:",
    rulesTitle: "Rules for Requesting Aid",
    rulesSub: "Aid requests are processed with great sensitivity and confidentiality. To receive your grant without delay, it is important to follow these rules.",
    formWhereTitle: "Where is the Form?",
    formWhereP: "has the application form related to the fund. It should be filled out and sent to the 3 trustees via the website.",
    bankTitle: "Bank Details (For Donations)",
    bankEuroTitle: "Euro Account",
    bankUsdTitle: "USD Account",
    bankHolder: "Account Holder",
    bankBranch: "Bank & Branch",
    bankAccNo: "Account No",
  },
  es: {
    heroTitle: "Fondo Florimond Volckaert",
    heroQuote: "«He estado donando a este fondo durante años, nunca pensé que un día yo mismo aplicaría.»",
    whatIsTitle: "¿Qué es el Fondo?",
    whatIsP1: "Florimond Volckaert (1898 - 1968) es el presidente fundador de Skål. Las discusiones para establecer un fondo de ayuda para los miembros de Skål comenzaron en 1949 y se formalizaron durante el Congreso Mundial de 1953 en España (Mallorca), volviéndose",
    whatIsP1Bold: "operativo en 1954.",
    whatIsP2: "Su propósito es brindar asistencia inmediata a los hermanos Skål y sus familiares cercanos en todo el mundo en tiempos de necesidad grave.",
    howWorksTitle: "¿Cómo Funciona el Sistema?",
    howWorksP: "En los casos en que un miembro de Skål necesite ayuda, se realiza una solicitud a través del Presidente de su Club o el Consejero Internacional a los",
    howWorksPBold: "3 fideicomisarios actuales",
    howWorksP2: ". Esta junta revisa la solicitud de inmediato y comunica su decisión de manera muy rápida.",
    whereMoneyTitle: "¿De Dónde Viene el Dinero?",
    whereMoneyP: "Proviene de donaciones totalmente voluntarias de miembros de Skål, Clubes, Comités Nacionales y Comités Regionales.",
    whereMoneyQuote: "\"Este fondo es su fondo. Por favor, recuerde que un día usted también podría necesitarlo.\"",
    secretTag: "Las Donaciones y Ayudas se Realizan con el 100% de Confidencialidad.",
    specialCasesTitle: "¿En Qué Casos Especiales se Solicita Ayuda?",
    specialCasesSub: "Las razones primarias válidas para solicitar ayuda son:",
    rulesTitle: "Reglas para Solicitar Ayuda",
    rulesSub: "Las solicitudes de ayuda se procesan con gran sensibilidad y confidencialidad. Para recibir su donación sin retrasos, es importante seguir las siguientes reglas.",
    formWhereTitle: "¿Dónde Está el Formulario?",
    formWhereP: "tiene el formulario de solicitud relativo al fondo. Debe completarse y enviarse a los 3 fideicomisarios a través del sitio web.",
    bankTitle: "Detalles Bancarios (Para Donaciones)",
    bankEuroTitle: "Cuenta en Euros",
    bankUsdTitle: "Cuenta en USD",
    bankHolder: "Titular de la Cuenta",
    bankBranch: "Banco y Sucursal",
    bankAccNo: "Número de Cuenta",
  }
};

const REASONS = {
  tr: [
    "İşi kaybetmekten ötürü geçim sıkıntısına düşmek.",
    "Vefat eden Skål üyesinin eşinin & çocuğunun okul masrafları.",
    "Başka imkânlarla karşılanmayacak hastane ve ameliyat masrafları.",
    "Fiziki sakatlanma geçiren Skål üyesinin yaşam koşuluna yardım edecek sağlık malzemesi tedariki.",
    "Skål üyesi veya en yakın aile fertlerinin doğal afetlerden dolayı düştükleri sıkıntılar.",
    "Derin geçim sıkıntısı halleri veya uzun süren ağır sağlık sorunları."
  ],
  en: [
    "Falling into financial hardship due to job loss.",
    "School expenses for the spouse & child of a deceased Skål member.",
    "Hospital and surgical expenses that cannot be covered by other means.",
    "Providing medical supplies to assist the living conditions of a physically injured Skål member.",
    "Hardships suffered by a Skål member or their immediate family members due to natural disasters.",
    "Cases of deep financial hardship or prolonged severe health issues."
  ],
  es: [
    "Caer en dificultades financieras por la pérdida de empleo.",
    "Gastos escolares para el cónyuge y el hijo de un miembro fallecido de Skål.",
    "Gastos hospitalarios y quirúrgicos que no pueden cubrirse de otro modo.",
    "Suministro de equipo médico para asistir a un miembro de Skål con lesiones físicas.",
    "Dificultades sufridas por un miembro de Skål o su familia inmediata debido a desastres naturales.",
    "Casos de profunda dificultad financiera o problemas graves de salud prolongados."
  ]
};

const RULES = {
  tr: [
    "Tamamen gizlilik içinde işlemler yürütülür.",
    "Bağış Talep Formundaki her soruyu detaylı ve açık (sarih) cevaplandırın, gerekirse ek sayfa kullanın.",
    "İletişim adreslerinizi ve telefon numaralarınızı teyit edin.",
    "İhtiyaç sahibinin Skål üyesi mi yoksa bir aile yakını mı olduğunu net belirtin.",
    "Yardım bağışı, ticari/şirket kayıpları veya borçları için verilmez.",
    "Skål üyeliğinizin süresi, pozisyonu ve genel durumu temel kıstaslardandır.",
    "Geri ödemesiz (borç olmayan) bir yardım olsa da, durum iyileştiğinde fona geri bağış yapılması erdemli bir tavsiye olarak sunulur.",
    "Bağış tahsilinde mütevellilere bilgi yazısı/makbuz verilmesi rica olunur."
  ],
  en: [
    "Procedures are carried out in complete confidentiality.",
    "Answer every question on the Grant Request Form in detail and clearly, use an extra page if necessary.",
    "Confirm your contact addresses and phone numbers.",
    "Clearly state whether the person in need is a Skål member or a close family member.",
    "Relief grants are not given for commercial/company losses or debts.",
    "The duration of your Skål membership, your position, and overall standing are fundamental criteria.",
    "Although the grant is non-repayable (not a loan), it is an honorable recommendation to donate back to the fund when your situation improves.",
    "You are requested to provide an information letter/receipt to the trustees upon collection of the grant."
  ],
  es: [
    "Los procedimientos se llevan a cabo con total confidencialidad.",
    "Responda cada pregunta en el Formulario de Solicitud de Donación de manera detallada y clara, use una página adicional si es necesario.",
    "Confirme sus direcciones de contacto y números de teléfono.",
    "Indique claramente si la persona necesitada es un miembro de Skål o un familiar cercano.",
    "Las donaciones de ayuda no se otorgan por pérdidas o deudas comerciales/de la empresa.",
    "La duración de su membresía en Skål, su posición y reputación general son criterios fundamentales.",
    "Aunque la ayuda no es reembolsable (no es un préstamo), es una recomendación honorable devolver el donativo al fondo cuando su situación mejore.",
    "Se solicita que proporcione una carta de confirmación/recibo a los fideicomisarios tras recibir el donativo."
  ]
};

export default async function FVFPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  
  const t = FVF_CONTENT[lang] || FVF_CONTENT.en;
  const reasons = REASONS[lang] || REASONS.en;
  const rules = RULES[lang] || RULES.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50/50 transform -skew-x-12"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål Logo" className="h-12 w-auto mb-6 opacity-80 mix-blend-multiply" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed">
            {t.heroQuote}
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
              <h3 className="text-2xl font-serif text-[#0A192F]">{t.whatIsTitle}</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {t.whatIsP1} <strong className="text-[#0A192F]">{t.whatIsP1Bold}</strong>
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                {t.whatIsP2}
              </p>
           </div>

           <div className="flex flex-col gap-10">
              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-4 flex items-center gap-3">
                   <ShieldCheck className="text-blue-600" />
                   {t.howWorksTitle}
                 </h3>
                 <p className="text-slate-600 font-light leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   {t.howWorksP} <strong className="text-[#0A192F]">{t.howWorksPBold}</strong>{t.howWorksP2}
                 </p>
              </div>

              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-4 flex items-center gap-3">
                   <Landmark className="text-blue-600" />
                   {t.whereMoneyTitle}
                 </h3>
                 <div className="bg-[#0A192F] p-8 rounded-2xl shadow-xl text-white">
                    <p className="font-light leading-relaxed text-blue-50 mb-6">
                      {t.whereMoneyP}
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 py-1 italic font-medium text-lg">
                      {t.whereMoneyQuote}
                    </div>
                    <p className="mt-6 text-sm text-blue-200 tracking-wider uppercase font-bold">
                      {t.secretTag}
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
               <h2 className="text-3xl md:text-5xl font-serif text-[#0A192F] mb-6">{t.specialCasesTitle}</h2>
               <p className="text-slate-500 font-light text-lg">
                 {t.specialCasesSub}
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
                  <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{t.rulesTitle}</h2>
                  <p className="text-blue-100/70 font-light text-lg leading-relaxed mb-8">
                     {t.rulesSub}
                  </p>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <h4 className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-blue-300 mb-2">
                        <FileText size={16} /> {t.formWhereTitle}
                     </h4>
                     <p className="text-sm font-light text-white/80">
                        <a href="https://www.skal.org" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-300 transition-colors">www.skal.org</a> {t.formWhereP}
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
            <h2 className="text-3xl md:text-5xl font-serif text-[#0A192F] mb-12">{t.bankTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               
               <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A192F] flex items-center justify-center text-white mb-6 shadow-xl">
                     <span className="font-bold text-xl font-serif">€</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-widest uppercase text-[#0A192F] mb-6">{t.bankEuroTitle}</h4>
                  <div className="w-full space-y-4 text-left">
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankHolder}</span>
                        <p className="font-medium text-slate-600">Florimond Volckaert Fund</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankBranch}</span>
                        <p className="font-medium text-slate-600">Banco Bilbao Vizcaya<br/><span className="text-sm font-light">Plaza Costa del Sol 9, 29620 Torremolinos, Spain</span></p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankAccNo}</span>
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
                  <h4 className="text-xl font-bold tracking-widest uppercase text-[#0A192F] mb-6">{t.bankUsdTitle}</h4>
                  <div className="w-full space-y-4 text-left">
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankHolder}</span>
                        <p className="font-medium text-slate-600">Florimond Volckaert Fund</p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankBranch}</span>
                        <p className="font-medium text-slate-600">Banco Bilbao Vizcaya<br/><span className="text-sm font-light">Plaza Costa del Sol 9, 29620 Torremolinos, Spain</span></p>
                     </div>
                     <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block mb-1">{t.bankAccNo}</span>
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

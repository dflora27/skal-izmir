import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: string }>;
};

const CONTENT = {
  tr: {
    title: "Gizlilik Politikası",
    content: "Skål International İzmir, kişisel verilerinizin gizliliğine ve güvenliğine önem vermektedir. Web sitemizi ziyaretiniz sırasında paylaştığınız veya çerezler aracılığıyla toplanan bilgiler, yalnızca site deneyiminizi geliştirmek ve tarafınıza bilgi sağlamak amacıyla kullanılmaktadır. Kişisel verileriniz hiçbir kampanya veya üçüncü şahıs şirketler ile izinsiz paylaşılmaz. Sitemizde yer alan iletişim formları aracılığıyla toplanan veriler yalnızca kulübümüz faaliyetleri için kullanılır."
  },
  en: {
    title: "Privacy Policy",
    content: "Skål International Izmir values the privacy and security of your personal data. The information you share during your visit to our website or collected via cookies is strictly used to enhance your site experience and provide you with relevant information. Your personal data is never shared with third-party companies without your explicit consent. Information collected through contact forms is solely used for our club's activities."
  },
  es: {
    title: "Política de Privacidad",
    content: "Skål International Esmirna valora la privacidad y seguridad de sus datos personales. La información que comparte durante su visita a nuestra página web o recopilada a través de cookies se utiliza estrictamente para mejorar su experiencia y brindarle información relevante. Sus datos personales nunca se comparten con empresas de terceros sin su consentimiento explícito. La información recopilada a través de los formularios de contacto solo se utiliza para nuestras actividades del club."
  }
};

export default async function PrivacyPolicyPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'tr' | 'en' | 'es';
  const dict = await getDictionary(lang);
  
  const t = CONTENT[lang] || CONTENT.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans">
      <Header dict={dict} lang={lang} />
      
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0A192F]">{t.title}</h1>
        <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
          <p>{t.content}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

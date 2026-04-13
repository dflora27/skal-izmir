import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: string }>;
};

const CONTENT = {
  tr: {
    title: "Kullanım Şartları",
    content: "Bu web sitesini ziyaret ederek, tüm bu kullanım şartlarını kabul etmiş sayılırsınız. Site içindeki tüm içerikler, görseller ve logolar Skål International İzmir'e aittir ve izinsiz kopyalanamaz, paylaşılamaz veya herhangi bir ticari faaliyette kullanılamaz. Sitede yer alan dış bağlantıların içeriğinden kulübümüz sorumlu değildir. Skål International İzmir, site içeriklerinde önceden haber vermeksizin değişiklik yapma hakkını saklı tutar."
  },
  en: {
    title: "Terms of Use",
    content: "By visiting this website, you are deemed to have accepted all these terms of use. All content, visuals, and logos on this site belong to Skål International Izmir and cannot be copied, shared, or used in any commercial activity without permission. Our club is not responsible for the content of external links provided on the site. Skål International Izmir reserves the right to make changes to the site contents without prior notice."
  },
  es: {
    title: "Términos de Uso",
    content: "Al visitar esta página web, se considera que ha aceptado todos estos términos de uso. Todo el contenido, elementos visuales y logotipos de este sitio pertenecen a Skål International Esmirna y no pueden ser copiados, compartidos o utilizados en ninguna actividad comercial sin permiso. Nuestro club no se hace responsable del contenido de enlaces externos proporcionados en el sitio. Skål International Esmirna se reserva el derecho de realizar cambios en los contenidos del sitio sin previo aviso."
  }
};

export default async function TermsOfUsePage({ params }: Props) {
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

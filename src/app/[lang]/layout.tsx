import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { CustomCursor } from '@/components/custom-cursor';
import { JoinButton } from '@/components/join-button';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  // Enhanced translation mapping for SEO titles
  const titles: Record<string, string> = {
    tr: "Skål International İzmir | Seyahat ve Turizm Profesyonelleri Ağı",
    en: "Skål International Izmir | Global Travel & Tourism Professionals Network",
    es: "Skål International Esmirna | Red de Profesionales de Viajes y Turismo"
  };

  const descriptions: Record<string, string> = {
    tr: "Skål International İzmir, Ege'nin turizm potansiyelini küresel dostluk ağıyla birleştirerek seyahat ve turizm profesyonellerini bir araya getirir.",
    en: "Skål International Izmir brings together travel and tourism professionals, blending the Aegean's tourism potential with a global friendship network.",
    es: "Skål International Esmirna reúne a profesionales de viajes y turismo, combinando el potencial turístico del Egeo con una red global de amistad."
  };

  return {
    title: titles[lang] || titles.tr,
    description: descriptions[lang] || descriptions.tr,
    keywords: "Skal International Izmir, Izmir tourism network, travel professionals Izmir, Skål club Turkey, Ege turizm ağı, Skal Izmir members, İzmir seyahat profesyonelleri, Aegean tourism, global tourism network",
    openGraph: {
      title: titles[lang] || titles.tr,
      description: descriptions[lang] || descriptions.tr,
      url: `https://www.skalizmir.com/${lang}`,
      siteName: "Skål International İzmir",
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `https://www.skalizmir.com/${lang}`,
      languages: {
        'tr': 'https://www.skalizmir.com/tr',
        'en': 'https://www.skalizmir.com/en',
        'es': 'https://www.skalizmir.com/es',
      },
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  return (
    <html
      lang={resolvedParams.lang}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#E5E9F0] overflow-x-hidden w-full relative">
        <CustomCursor />
        {children}
        <JoinButton lang={resolvedParams.lang} />
      </body>
    </html>
  );
}

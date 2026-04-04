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
  
  // Basic translation mapping for SEO titles
  const titles: Record<string, string> = {
    tr: "Skål International İzmir",
    en: "Skål International İzmir",
    es: "Skål International Esmirna"
  };

  const descriptions: Record<string, string> = {
    tr: "Skål International, 1934'ten Beri Tüm Dünyadaki Seyahat ve Turizm Profesyonellerini Bir Araya Getiriyor.",
    en: "Skål International Brings Together Travel and Tourism Professionals Worldwide Since 1934.",
    es: "Skål International Reúne a Profesionales de Viajes y Turismo de Todo el Mundo Desde 1934."
  };

  return {
    title: titles[lang] || titles.tr,
    description: descriptions[lang] || descriptions.tr,
    keywords: "Skal, Izmir, Turizm, Seyahat, Tourism, Travel, Ege, Aegean, Network",
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
      <body className="min-h-full flex flex-col bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#E5E9F0]">
        <CustomCursor />
        {children}
        <JoinButton lang={resolvedParams.lang} />
      </body>
    </html>
  );
}

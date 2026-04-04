const fs = require('fs');
const path = require('path');

const pages = [
  { route: 'announcements', tr: "Duyurular", en: "Announcements", es: "Avisos" },
  { route: 'board', tr: "Yönetim Kurulu", en: "Board of Directors", es: "Junta Directiva" },
  { route: 'contact', tr: "İletişim", en: "Contact Us", es: "Contáctenos" },
  { route: 'events', tr: "Etkinliklerimiz", en: "Events", es: "Eventos" },
  { route: 'florimond-volckaert-fund', tr: "Florimund Volckaert Fonu", en: "Florimund Volckaert Fund", es: "Fondo Florimund Volckaert" },
  { route: 'members', tr: "Üyelerimiz", en: "Members", es: "Miembros" },
  { route: 'president-message', tr: "Başkanın Mesajı", en: "President's Message", es: "Mensaje del Presidente" },
  { route: 'skal-izmir', tr: "Skål International İzmir", en: "Skål International Izmir", es: "Skål International Esmirna" },
  { route: 'skal-life', tr: "Skål Life", en: "Skål Life", es: "Skål Life" },
  { route: 'usdf', tr: "USDF", en: "USDF", es: "USDF" },
  { route: 'what-is-skal', tr: "Skål Nedir?", en: "What is Skål?", es: "¿Qué es Skål?" },
  { route: 'young-skal', tr: "Young Skål", en: "Young Skål", es: "Young Skål" }
];

pages.forEach(p => {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[lang]', p.route, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('generateMetadata')) {
      console.log(`Skipping ${p.route}, metadata already exists.`);
      return;
    }

    const nextImportRegex = /import\s+.*?\s+from\s+['"]next.*?['"];?/;
    let hasNextImport = !!content.match(nextImportRegex);
    
    // Find the right place to insert Metadata Import
    // We'll just put `import { Metadata } from 'next';` at the top.
    content = `import { Metadata } from 'next';\n` + content;
    
    const metaBlock = `
export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "${p.tr} | Skål International İzmir", description: "Skål International İzmir ${p.tr} sayfası." },
    en: { title: "${p.en} | Skål International Izmir", description: "Skål International Izmir ${p.en} page." },
    es: { title: "${p.es} | Skål International Esmirna", description: "Página de ${p.es} de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}
`;
    
    content = content.replace(/export default async function/, metaBlock + '\nexport default async function');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${p.route}`);
  } else {
    console.log(`Not found: ${filePath}`);
  }
});

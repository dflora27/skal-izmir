const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// 1. Read uyeler.xlsx to get existing extra info (roles, companies)
let excelData = [];
try {
  const workbook = xlsx.readFile('./public/members/uyeler.xlsx');
  excelData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
} catch (e) {
  console.log("Could not read uyeler.xlsx", e.message);
}

// 2. Read raw text
const rawText = fs.readFileSync('./scripts/raw_members_text.txt', 'utf-8');
const blocks = rawText.split(/\n\s*\n/).filter(b => b.trim().length > 0);

const publicMembersDir = path.join(__dirname, '..', 'public', 'members');
const availableFiles = fs.existsSync(publicMembersDir) ? fs.readdirSync(publicMembersDir) : [];

const turkishMap = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' };
const slugify = (text) => text?.toString()
  .replace(/İ/g, 'i')
  .replace(/I/g, 'i')
  .toLowerCase()
  .replace(/\u0307/g, '')
  .replace(/[çğıöşü]/g, m => turkishMap[m] || m)
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '') || '';

let allMembers = [];

blocks.forEach(block => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length >= 3) {
    let rawName = lines[0].replace(/\u0307/g, ''); // Remove combining dots
    
    let email = lines[1];
    let phone = lines[2];
    
    // Some minor fixes for specific names
    if (rawName === 'DAMLA ÜNGÜN' || rawName.includes('Dilmaç')) {
      rawName = 'Damla Ungun';
    }

    const id = slugify(rawName);
    let fileId = id;
    if(fileId === 'i-brahim-demiralp') fileId = 'ibrahim-demiralp'; // fix specific issue

    // Find in Excel
    const excelMatch = excelData.find(r => slugify(r['Ad'] + ' ' + r['Soyad']) === fileId || slugify(r['Ad'] + ' ' + r['Soyad']).includes(fileId));
    
    let role = excelMatch ? (excelMatch['Pozisyonu'] || '-') : '-';
    let company = excelMatch ? (excelMatch['Çalıştığı Kurum'] || '-') : '-';
    let website = excelMatch ? (excelMatch['Website Linki'] || '-') : '-';

    const photoFile = availableFiles.find(f => f.toLowerCase().startsWith(fileId + '.') && !f.includes('-is'));
    const logoFile = availableFiles.find(f => f.toLowerCase().startsWith(fileId + '-is.'));

    let finalizedName = rawName; // Keep the original capitalization as requested

    allMembers.push({
      id: fileId,
      name: finalizedName,
      role,
      company,
      categories: [],
      photo: photoFile ? `/members/${photoFile}` : `/members/unknown.jpg`,
      companyLogo: logoFile ? `/members/${logoFile}` : null,
      desc: excelMatch 
        ? `Skål International İzmir üyesi ${finalizedName}, ${company} bünyesinde ${role} olarak görev yapmaktadır. Turizm sektöründeki engin tecrübesiyle İzmir turizmine değer katan profesyonellerimizden biridir.`
        : `Skål International İzmir üyesi olan ${finalizedName}, turizm sektöründeki engin tecrübesiyle İzmir turizmine değer katan seçkin profesyonellerimizden biridir.`,
      contact: {
        phone,
        email,
        website
      }
    });
  }
});

// Alphabetically sort
allMembers.sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' }));

const content = `// This file is auto-generated

export interface Member {
  id: string;
  name: string;
  role: string;
  company: string;
  categories: string[];
  photo: string;
  companyLogo: string | null;
  desc: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export const members: Member[] = ${JSON.stringify(allMembers, null, 2)};
`;

fs.writeFileSync('./src/data/members.ts', content, 'utf-8');
console.log('Generated src/data/members.ts successfully with ' + allMembers.length + ' members.');

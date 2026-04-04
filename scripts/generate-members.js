const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = xlsx.readFile('./public/members/uyeler.xlsx');
const sheetRef = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheetRef);

const publicMembersDir = path.join(__dirname, '..', 'public', 'members');
const availableFiles = fs.existsSync(publicMembersDir) ? fs.readdirSync(publicMembersDir) : [];

const turkishMap = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'I': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u' };
const slugify = (text) => text?.toString().toLowerCase().replace(/[çğıiöşüÇĞİIÖŞÜ]/g, m => turkishMap[m]).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || '';

const members = data.map(row => {
  const ad = row['Ad']?.replace(/\s+/g, ' ').trim();
  const soyad = row['Soyad']?.replace(/\s+/g, ' ').trim();
  let name = `${ad} ${soyad}`;
  if (name === 'Damla Dilmaç') {
    name = 'Damla Ungun';
  }
  
  const id = slugify(name);
  
  const role = row['Pozisyonu'] || '-';
  const company = row['Çalıştığı Kurum'] || '-';
  
  let phone = row['Telefon Numarası'] ? String(row['Telefon Numarası']).replace(/\s+/g, '') : '-';
  if (phone !== '-' && !phone.startsWith('+90') && phone.length === 10) phone = '+90' + phone;

  const email = row['E-posta Adresi'] || '-';

  // Specific id overrides
  let fileId = id;
  if(fileId === 'i-brahim-demiralp') fileId = 'ibrahim-demiralp';

  const photoFile = availableFiles.find(f => f.toLowerCase().startsWith(fileId + '.') && !f.includes('-is'));
  const logoFile = availableFiles.find(f => f.toLowerCase().startsWith(fileId + '-is.'));

  return {
    id: fileId,
    name,
    role,
    company,
    categories: [], // Categories removed
    photo: photoFile ? `/members/${photoFile}` : `/members/unknown.jpg`,
    companyLogo: logoFile ? `/members/${logoFile}` : null,
    desc: `${name}, ${company} bünyesinde ${role} olarak görev yapmaktadır. Turizm sektöründeki engin tecrübesiyle İzmir turizmine değer katan profesyonellerimizden biridir.`,
    contact: {
      phone,
      email,
      website: row['Website Linki'] || '-',
    }
  };
});

let dedupedMembers = Object.values(members.reduce((acc, m) => {
  acc[m.id] = m;
  return acc;
}, {}));

// Alphabetical sort by name
dedupedMembers.sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' }));

const content = `// This file is auto-generated based on uyeler.xlsx

export interface Member {
  id: string;
  name: string;
  role: string;
  company: string;
  categories: string[];
  photo: string;
  companyLogo: string;
  desc: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export const members: Member[] = ${JSON.stringify(dedupedMembers, null, 2)};
`;

fs.writeFileSync('./src/data/members.ts', content, 'utf-8');
console.log('Generated src/data/members.ts successfully with ' + dedupedMembers.length + ' members.');

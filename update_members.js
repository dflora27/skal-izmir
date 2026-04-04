const fs = require('fs');

let content = fs.readFileSync('src/data/members.ts', 'utf-8');

const replacements = [
  { id: 'aydin-tokbas', photo: '/members/aydin-tokbas.jpg', logo: null },
  { id: 'dursun-bulent-tercan', photo: '/members/bulent-tercan.jpg', logo: null },
  { id: 'damla-ungun', photo: '/members/damla-ungun.jpeg', logo: '/members/damla-ungun-is.jpeg' },
  { id: 'didem-ersoy', photo: '/members/didem-ersoy.JPG', logo: '/members/didem-ersoy-is.JPG' },
  { id: 'ege-meric', photo: '/members/ege-meric.jpeg', logo: '/members/ege-meric-is.jpeg' },
  { id: 'elif-aksahin', photo: '/members/elif-aksahin.jpg', logo: null },
  { id: 'gamze-gulcag-yeni-ozmermer', photo: '/members/gulcag-ozmermer.jpg', logo: null },
  { id: 'ibrahim-demiralp', photo: '/members/ibrahim-demiralp.jpeg', logo: '/members/ibrahim-demiralp-is.jpg' },
  { id: 'kivanc-meric', photo: '/members/kivanc-meric.jpg', logo: '/members/kivanc-meric-is.jpg' },
  { id: 'macit-saszade', photo: '/members/macit-saszade.jpeg', logo: null },
  { id: 'mine-gunes-kaya', photo: '/members/mine-gunes-kaya.jpg', logo: '/members/mine-gunes-kaya-is.png' },
  { id: 'hasan-onur-turkay', photo: '/members/onur-turkay.jpg', logo: null },
  { id: 'orhan-belge', photo: '/members/orhan-belge.jpeg', logo: '/members/orhan-belge-is.jpg' }
];

for (let r of replacements) {
    const regexPhoto = new RegExp('("id":\\s*"' + r.id + '"[\\s\\S]*?"photo":\\s*")[^"]+(")');
    content = content.replace(regexPhoto, '$1' + r.photo + '$2');
    
    if (r.logo) {
        const regexLogo = new RegExp('("id":\\s*"' + r.id + '"[\\s\\S]*?"companyLogo":\\s*)(null|"[^"]+")');
        content = content.replace(regexLogo, '$1"' + r.logo + '"');
    }
}

fs.writeFileSync('src/data/members.ts', content, 'utf-8');
console.log('Update complete');

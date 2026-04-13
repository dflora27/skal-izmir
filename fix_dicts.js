const fs = require('fs');

const p = 'src/dictionaries/en.json';
let content = fs.readFileSync(p, 'utf-8');
content = content.replace(/(?<!\/|\[|'|\"|\`|[a-zA-Z])Skal(?![a-zA-Z]|_|-)/g, 'Skål');
fs.writeFileSync(p, content);

const p2 = 'src/dictionaries/es.json';
let c2 = fs.readFileSync(p2, 'utf-8');
c2 = c2.replace(/(?<!\/|\[|'|\"|\`|[a-zA-Z])Skal(?![a-zA-Z]|_|-)/g, 'Skål');
c2 = c2.replace(/83º Congreso Mundial de Skål International en Esmirna/g, '83rd Skål International World Congress in Izmir');
fs.writeFileSync(p2, c2);

const p3 = 'src/app/[lang]/about/page.tsx';
let c3 = fs.readFileSync(p3, 'utf-8');
c3 = c3.replace(/(?<!\/|\[|'|\"|\`|[a-zA-Z])Skal(?![a-zA-Z]|_|-)/g, 'Skål');
c3 = c3.replace(/83\. Skål International World Congress/g, '83rd Skål International World Congress in Izmir');
fs.writeFileSync(p3, c3);

console.log('done dictionaries and about');

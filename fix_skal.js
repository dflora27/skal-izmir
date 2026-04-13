const fs = require('fs');
const pth = require('path');

const files = [
    'src/data/world-congress.ts',
    'src/data/announcements.ts',
    'src/app/[lang]/young-skal/page.tsx',
    'src/app/[lang]/world-congress/page.tsx',
    'src/app/[lang]/what-is-skal/page.tsx',
    'src/app/[lang]/skal-izmir/page.tsx',
    'src/app/[lang]/president-message/page.tsx',
    'src/app/[lang]/page.tsx',
    'src/app/[lang]/layout.tsx',
    'src/app/[lang]/join-us/page.tsx'
];

files.forEach(f => {
    let p = pth.join(process.cwd(), f);
    if(fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf-8');
        // Replace Skal with Skål, but keep 'Skal' intact inside URLs, imports, class names, etc.
        // Easiest is to only replace 'Skal ' or 'Skal.' or 'Skal,' or 'Skal-' etc.
        // Or positive lookbehind and lookahead.
        let newContent = content.replace(/(?<!\/|\[|'|"|`|[a-zA-Z])Skal(?![a-zA-Z]|_|-)/g, 'Skål');
        
        // Also let's fix the 83rd Congress titles in page.tsx / world-congress.ts / about/page.tsx
        newContent = newContent.replace(/83\. Skål International World Congress 2024 İzmir/g, '83rd Skål International World Congress in Izmir');
        newContent = newContent.replace(/83\. Skål International/g, '83rd Skål International');
        newContent = newContent.replace(/83\. Skal International/g, '83rd Skål International');
        
        fs.writeFileSync(p, newContent);
        console.log('Updated', f);
    }
});

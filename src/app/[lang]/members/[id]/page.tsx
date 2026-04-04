import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';
import { Phone, Mail, Link as LinkIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { members } from '@/data/members';
import fs from 'fs';
import path from 'path';

export default async function MemberDetailPage({ 
  params 
}: { 
  params: Promise<{ lang: 'tr' | 'en' | 'es', id: string }> 
}) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;
  const dict = await getDictionary(lang);

  const memberData = members.find(m => m.id === id) || members[0];
  const mockMember = {
    ...memberData,
    profilePhoto: memberData.photo,
  };

  // Dynamically load gallery images
  let galleryFiles: string[] = [];
  if (memberData.id) {
    try {
      const publicMembersDir = path.join(process.cwd(), 'public', 'members');
      if (fs.existsSync(publicMembersDir)) {
        const files = fs.readdirSync(publicMembersDir);
        const eventFiles = files.filter(f => f.startsWith(`${memberData.id}-`));
        // Ignore the exact primary logo files like 'id-is.png', 'id-is.jpg'
        const excludeRegex = /-is\.(jpeg|jpg|png|gif|webp)$/i;
        galleryFiles = eventFiles
          .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f) && !excludeRegex.test(f))
          .map(f => `/members/${f}`);
      }
    } catch (e) {
      console.error("Error reading gallery files:", e);
    }
  }

  // Fallback to placeholder if profile photo is the wiki generic one
  const isGenericPhoto = mockMember.profilePhoto.includes("Placeholder_image");

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
         <div className="container mx-auto px-6 lg:px-12 max-w-4xl flex flex-col items-center text-center">
            
            {/* Profile Photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-white shadow-xl overflow-hidden mb-8 relative">
               <img 
                 src={mockMember.profilePhoto} 
                 alt={mockMember.name} 
                 className={`w-full h-full rounded-full object-cover ${isGenericPhoto ? 'opacity-30 p-8 object-contain' : ''}`} 
               />
               <div className="absolute inset-0 rounded-full border border-slate-100 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Title & Info */}
            <h1 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-4">{mockMember.name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-2">{mockMember.company}</h2>
            {mockMember.role && mockMember.role !== "-" && (
               <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-6">{mockMember.role}</p>
            )}

            <div className="flex flex-wrap justify-center items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-500 mb-12">
               {mockMember.categories.map((c, i) => (
                 <div key={i} className="flex items-center gap-2">
                   {i > 0 && <ChevronRight size={14} className="text-slate-300" />}
                   <span className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-full">{c}</span>
                 </div>
               ))}
            </div>
            
            {/* Contact Actions Grid */}
            <div className="flex flex-wrap justify-center gap-4">
               {mockMember.contact.phone && mockMember.contact.phone !== "-" && (
                  <a href={`tel:${mockMember.contact.phone}`} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 transition-all">
                     <Phone size={18} />
                     <span className="text-sm font-bold tracking-widest">{mockMember.contact.phone}</span>
                  </a>
               )}
               {mockMember.contact.email && mockMember.contact.email !== "-" && (
                  <a href={`mailto:${mockMember.contact.email}`} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 transition-all">
                     <Mail size={18} />
                     <span className="text-sm font-bold tracking-widest hidden sm:inline">{mockMember.contact.email}</span>
                     <span className="text-sm font-bold tracking-widest sm:hidden">E-POSTA</span>
                  </a>
               )}
               {mockMember.contact.website && mockMember.contact.website !== "-" && (
                  <a href={mockMember.contact.website.startsWith('http') ? mockMember.contact.website : `https://${mockMember.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 transition-all">
                     <LinkIcon size={18} />
                     <span className="text-sm font-bold tracking-widest">WEBSITE</span>
                  </a>
               )}
            </div>

         </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 container mx-auto px-6 lg:px-12 max-w-5xl">
         
         {/* Details & Company Logo Split */}
         <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {mockMember.companyLogo && (
               <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">
                    {lang === 'tr' ? 'ŞİRKET LOGOSU' : lang === 'es' ? 'LOGO DE LA EMPRESA' : 'COMPANY LOGO'}
                  </span>
                  <div className="w-full p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center aspect-video group">
                     {mockMember.contact.website && mockMember.contact.website !== "-" ? (
                       <a href={mockMember.contact.website.startsWith('http') ? mockMember.contact.website : `https://${mockMember.contact.website}`} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                         <img 
                            src={mockMember.companyLogo} 
                            alt="Company Logo" 
                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500" 
                         />
                       </a>
                     ) : (
                       <img 
                          src={mockMember.companyLogo} 
                          alt="Company Logo" 
                          className="w-full h-full object-contain filter drop-shadow-sm" 
                       />
                     )}
                  </div>
               </div>
            )}

            <div className="flex-1 w-full">
               <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 block">
                  {lang === 'tr' ? 'HAKKINDA' : lang === 'es' ? 'SOBRE MÍ' : 'ABOUT'}
               </span>
               <div className="text-slate-600 font-light text-lg leading-relaxed whitespace-pre-wrap">
                  {mockMember.desc || (lang === 'tr' ? 'Üye bilgileri güncellenmeye devam etmektedir.' : lang === 'es' ? 'La información del miembro se está actualizando.' : 'Member information is being updated.')}
               </div>
            </div>

         </div>

         {/* Dynamic Photo Gallery */}
         {galleryFiles.length > 0 && (
            <div>
               <div className="text-center mb-12">
                  <h3 className="text-3xl font-serif text-[#0A192F]">
                     {lang === 'tr' ? 'Galeri' : lang === 'es' ? 'Galería' : 'Gallery'}
                  </h3>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryFiles.map((img, i) => (
                     <div key={i} className="aspect-square w-full overflow-hidden bg-white rounded-2xl shadow-sm relative group cursor-pointer border border-slate-100">
                        <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     </div>
                  ))}
               </div>
            </div>
         )}
      </section>

      <Footer />
    </main>
  );
}

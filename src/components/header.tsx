'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  dict: any;
  lang: string;
}

export function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname();
  const isWhiteBgPage = pathname === `/${lang}/members` || pathname.startsWith(`/${lang}/events/`);
  const currentPathWithoutLang = pathname.replace(`/${lang}`, '') || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLang = (newLang: string) => `/${newLang}${currentPathWithoutLang}`;

  const flags = {
    tr: '/turkey.png',
    en: '/united-kingdom.png',
    es: '/spain.png'
  };
  const currentFlagSrc = flags[lang as keyof typeof flags] || flags.en;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-700 ease-out ${scrolled ? 'pt-4 md:pt-6' : 'pt-6 md:pt-10'}`}>
      <div className={`flex items-center justify-between transition-all duration-700 ease-out ${scrolled ? 'w-[calc(100%-2rem)] max-w-[1400px] px-6 lg:px-8 py-3 lg:py-2 bg-white/95 backdrop-blur-xl shadow-lg rounded-[2rem] border border-slate-200/60' : 'w-full max-w-[1600px] px-4 md:px-8 xl:px-10 py-2 bg-transparent border border-transparent rounded-full'} `}>
        
        {/* Left Section (Logo) */}
        <div className="flex-[0.8] lg:flex-1 flex justify-start">
          <Link href={`/${lang}`} className="flex items-center gap-2 z-10 transition-transform hover:scale-105 duration-500">
            <Image 
              src="/logo-60.png" 
              alt="Skål International İzmir" 
              width={scrolled ? 160 : 220} 
              height={scrolled ? 50 : 70} 
              className={`object-contain drop-shadow-sm transition-all duration-700 ease-out ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'brightness-0 invert' : ''}`} 
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className={`hidden xl:flex items-center gap-6 2xl:gap-8 text-[12px] 2xl:text-[13px] tracking-widest uppercase font-semibold transition-all duration-700 flex-none ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'text-white drop-shadow-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-[#0A192F]'}`}>
          <Link href={`/${lang}/`} className="hover:text-blue-700 transition-colors whitespace-nowrap">{dict.nav.home}</Link>
          
          <div className="relative group py-4 -my-4">
            <Link href={`/${lang}/about`} className={`flex items-center gap-1 transition-colors uppercase cursor-pointer whitespace-nowrap ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'hover:text-white/80' : 'hover:text-blue-700'}`}>
              {dict.nav.about}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 ${scrolled ? 'mt-4' : 'mt-2'} w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 rounded-2xl overflow-hidden border border-slate-100 text-[#0A192F]`}>
              <div className="flex flex-col py-2 normal-case capitalize">
                 <Link href={`/${lang}/board`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.board || 'Yönetim Kurulu'}</Link>
                 <Link href={`/${lang}/president-message`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.president_message || 'Başkanın Mesajı'}</Link>
                 <Link href={`/${lang}/what-is-skal`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.what_is_skal || 'Skål Nedir?'}</Link>
                 <Link href={`/${lang}/skal-izmir`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.skal_izmir || 'Skål International İzmir'}</Link>
                 <Link href={`/${lang}/usdf`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.usdf || 'USDF'}</Link>
                 <Link href={`/${lang}/young-skal`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.young_skal || 'Young Skål'}</Link>
                 <Link href={`/${lang}/florimond-volckaert-fund`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors">{dict.nav.dropdown?.florimond || 'Florimund Volckaert Fund'}</Link>
                 <Link href={`/${lang}/world-congress`} className="px-6 py-3 hover:bg-slate-50 hover:text-[#F87498] transition-colors font-bold text-[#F87498] normal-case">Skål International World Congress 2024 İzmir</Link>
              </div>
            </div>
          </div>

          <Link href={`/${lang}/events`} className={`transition-colors whitespace-nowrap ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'hover:text-white/80' : 'hover:text-blue-700'}`}>{dict.nav.events}</Link>
          
          <div className="relative group py-4 -my-4">
            <Link href={`/${lang}/announcements`} className={`flex items-center gap-1 transition-colors uppercase cursor-pointer whitespace-nowrap ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'hover:text-white/80' : 'hover:text-blue-700'}`}>
              {dict.nav.announcements}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 ${scrolled ? 'mt-4' : 'mt-2'} w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 rounded-2xl overflow-hidden border border-slate-100 text-[#0A192F]`}>
              <div className="flex flex-col py-2 normal-case capitalize">
                 <Link href={`/${lang}/announcements`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors text-[11px] leading-snug">{dict.nav.dropdown?.announcements || 'Duyurular & Haberler'}</Link>
                 <Link href={`/${lang}/skal-life`} className="px-6 py-3 hover:bg-slate-50 hover:text-blue-700 transition-colors text-[11px] leading-snug">{dict.nav.dropdown?.skal_life || 'Skål Life'}</Link>
              </div>
            </div>
          </div>

          <Link href={`/${lang}/members`} className={`transition-colors whitespace-nowrap ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'hover:text-white/80' : 'hover:text-blue-700'}`}>{dict.nav.members}</Link>
          <Link href={`/${lang}/contact`} className={`transition-colors whitespace-nowrap ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'hover:text-white/80' : 'hover:text-blue-700'}`}>{dict.nav.contact}</Link>
        </nav>

        {/* Right Section (Icons & Flag) */}
        <div className={`flex-1 flex items-center justify-end gap-4 xl:gap-8`}>
          <div className={`hidden lg:flex gap-4 items-center ${!scrolled && pathname.startsWith('/' + lang + '/world-congress') ? 'text-white' : 'text-[#0A192F]'}`}>
            <a href="https://www.instagram.com/skalizmir/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="https://www.facebook.com/skalizmir/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
          </div>
          
          <div className="h-6 w-px bg-slate-200/50 ml-4 hidden lg:block"></div>
          <div className="relative group p-2 pb-4 -mb-4 z-20 pl-2 hidden xl:block">
            <button className="flex items-center justify-center p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
              <Image src={currentFlagSrc} alt={lang} width={24} height={24} className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-sm" />
            </button>
            <div className={`absolute top-full right-0 ${scrolled ? 'mt-4' : 'mt-2'} w-14 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right rounded-2xl overflow-hidden border border-slate-100`}>
               <div className="flex flex-col py-1">
                 <Link href={switchLang('tr')} className={`px-4 py-3 flex items-center justify-center hover:bg-slate-50 transition-colors ${lang === 'tr' ? 'bg-blue-50/50' : ''}`}><Image src="/turkey.png" alt="TR" width={24} height={24} className="w-6 h-6 object-contain drop-shadow-sm hover:scale-110 transition-transform" /></Link>
                 <Link href={switchLang('en')} className={`px-4 py-3 flex items-center justify-center hover:bg-slate-50 transition-colors ${lang === 'en' ? 'bg-blue-50/50' : ''}`}><Image src="/united-kingdom.png" alt="EN" width={24} height={24} className="w-6 h-6 object-contain drop-shadow-sm hover:scale-110 transition-transform" /></Link>
                 <Link href={switchLang('es')} className={`px-4 py-3 flex items-center justify-center hover:bg-slate-50 transition-colors ${lang === 'es' ? 'bg-blue-50/50' : ''}`}><Image src="/spain.png" alt="ES" width={24} height={24} className="w-6 h-6 object-contain drop-shadow-sm hover:scale-110 transition-transform" /></Link>
               </div>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
             className="xl:hidden p-2 text-[#0A192F] z-50 relative ml-2" 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             {mobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
             )}
          </button>
        </div>
      </div>
      
      {/* Mobile Sidebar overlay */}
      <div className={`fixed inset-0 bg-[#0A192F]/95 backdrop-blur-lg z-40 transition-all duration-500 xl:hidden flex flex-col justify-center items-center ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <div className="absolute top-10 w-full flex justify-center pb-8 border-b border-white/10">
            <Image src="/logo-60.png" alt="Logo" width={200} height={60} className="brightness-0 invert drop-shadow-lg" />
         </div>
         <nav className="flex flex-col items-center gap-8 text-white text-xl font-medium tracking-widest uppercase mt-20 overflow-y-auto max-h-[80vh] w-full px-8 pb-32">
            
            {/* Mobile Language Selector */}
            <div className="flex gap-4 mb-4 p-2 bg-white/5 rounded-2xl border border-white/10 shrink-0">
               <Link onClick={() => setMobileMenuOpen(false)} href={switchLang('tr')} className={`p-3 rounded-xl transition-colors ${lang === 'tr' ? 'bg-white/20' : 'hover:bg-white/10'}`}><Image src="/turkey.png" alt="TR" width={32} height={32} className="w-8 h-8 object-contain drop-shadow-lg" /></Link>
               <Link onClick={() => setMobileMenuOpen(false)} href={switchLang('en')} className={`p-3 rounded-xl transition-colors ${lang === 'en' ? 'bg-white/20' : 'hover:bg-white/10'}`}><Image src="/united-kingdom.png" alt="EN" width={32} height={32} className="w-8 h-8 object-contain drop-shadow-lg" /></Link>
               <Link onClick={() => setMobileMenuOpen(false)} href={switchLang('es')} className={`p-3 rounded-xl transition-colors ${lang === 'es' ? 'bg-white/20' : 'hover:bg-white/10'}`}><Image src="/spain.png" alt="ES" width={32} height={32} className="w-8 h-8 object-contain drop-shadow-lg" /></Link>
            </div>

            <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/`} className="hover:text-blue-400 transition-colors">{dict.nav.home}</Link>
            
            <div className="flex flex-col items-center gap-3 w-full normal-case capitalize">
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/about`} className="text-blue-400 hover:text-blue-300 text-sm font-bold border-b border-white/20 pb-2 mb-2 w-full text-center uppercase">{dict.nav.about}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/board`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.board || 'Yönetim Kurulu'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/president-message`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.president_message || 'Başkanın Mesajı'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/what-is-skal`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.what_is_skal || 'Skål Nedir?'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/skal-izmir`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.skal_izmir || 'Skål International İzmir'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/young-skal`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.young_skal || 'Young Skål'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/world-congress`} className="text-base font-bold text-[#F87498] hover:text-[#F87498]/80 normal-case">Skål International World Congress 2024 İzmir</Link>
            </div>
            
            <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/events`} className="hover:text-blue-400 transition-colors mt-4">{dict.nav.events}</Link>
            
            <div className="flex flex-col items-center gap-3 w-full normal-case capitalize">
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/announcements`} className="text-blue-400 hover:text-blue-300 text-sm font-bold border-b border-white/20 pb-2 mb-2 w-full text-center uppercase">{dict.nav.announcements}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/announcements`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.announcements || 'Duyurular & Haberler'}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/skal-life`} className="text-base hover:text-blue-300">{dict.nav.dropdown?.skal_life || 'Skål Life'}</Link>
            </div>
            
            <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/members`} className="hover:text-blue-400 transition-colors mt-4">{dict.nav.members}</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href={`/${lang}/contact`} className="hover:text-blue-400 transition-colors">{dict.nav.contact}</Link>
            
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 w-full justify-center">
              <a href="https://www.instagram.com/skalizmir/" target="_blank" className="hover:text-blue-400"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="https://www.facebook.com/skalizmir/?locale=tr_TR" target="_blank" className="hover:text-blue-400"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
            </div>
         </nav>
      </div>
    </header>
  );
}

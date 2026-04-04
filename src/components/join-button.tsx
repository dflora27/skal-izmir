'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function JoinButton({ lang }: { lang: string }) {
  const pathname = usePathname();
  
  // Don't show on the join page itself to avoid redundancy
  if (pathname === `/${lang}/join-us` || pathname === `/${lang}/join`) {
    return null;
  }

  const labels: Record<string, string> = {
    tr: "Bize Katılın",
    en: "Join Us",
    es: "Únete a Nosotros"
  };
  
  const text = labels[lang] || labels.en;

  return (
    <AnimatePresence>
      <div className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-[100] flex items-center justify-center">
        <Link href={`/${lang}/join-us`}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group cursor-pointer"
          >
            {/* Outline Glow Effect */}
            <div className="absolute -inset-1 bg-blue-400 rounded-full blur-md opacity-30 group-hover:opacity-70 transition duration-500"></div>
            
            <button className="relative flex items-center gap-3 bg-blue-600 group-hover:bg-blue-700 transition-colors px-8 py-3.5 rounded-full shadow-2xl overflow-hidden">
              <div className="relative flex h-5 w-5 md:h-6 md:w-6 items-center justify-center">
                <img src="/favicon.png" alt="Icon" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
              </div>
              
              <span className="text-white font-semibold tracking-wider text-[14px] md:text-base drop-shadow-sm z-10 whitespace-nowrap">
                {text}
              </span>
            </button>
          </motion.div>
        </Link>
      </div>
    </AnimatePresence>
  );
}

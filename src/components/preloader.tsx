'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only lock scroll completely when it's initially true
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1200); // 1.2 seconds max

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#FDFDFD] flex items-center justify-center flex-col"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
             <img src="/logo-60.png" alt="Skål Logo" className="w-64 md:w-80 h-auto mix-blend-multiply" />
             <div className="h-[2px] w-48 md:w-64 bg-slate-200 mt-10 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 1.0, ease: "easeInOut" }}
                   className="h-full bg-gradient-to-r from-blue-400 via-blue-600 to-[#F87498]"
                />
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

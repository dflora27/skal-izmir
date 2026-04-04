"use client";

import Image from "next/image";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

type MediaItem = { url: string; type: 'image' | 'video' };

export function EventGallery({ images = [], videos = [] }: { images?: string[], videos?: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mediaItems: MediaItem[] = [
    ...videos.map(v => ({ url: v, type: 'video' as const })),
    ...images.map(img => ({ url: img, type: 'image' as const }))
  ];

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % mediaItems.length);
    }
  }, [selectedIndex, mediaItems.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + mediaItems.length) % mediaItems.length);
    }
  }, [selectedIndex, mediaItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  if (mediaItems.length === 0) return null;

  return (
    <section className="py-24 bg-[#F3F6F8] border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="mb-16 border-b border-slate-200 pb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-[#0A192F]">Etkinlik Videoları</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((vid, idx) => {
                const globalIndex = idx; // Videos come first in mediaItems
                return (
                  <div
                    key={idx}
                    onClick={() => openLightbox(globalIndex)}
                    className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-video group cursor-pointer bg-black/10 flex items-center justify-center"
                  >
                    <video src={vid} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-[#0A192F]/20 transition-colors duration-300 flex items-center justify-center">
                       <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Photos Section */}
        {images.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-[#0A192F]">Etkinlik Fotoğrafları</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((photo, idx) => {
                const globalIndex = videos.length + idx;
                return (
                  <div
                    key={idx}
                    onClick={() => openLightbox(globalIndex)}
                    className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-square group cursor-pointer"
                  >
                    <Image
                      src={photo}
                      alt={`Gallery thumbnail ${idx}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0A192F]/0 group-hover:bg-[#0A192F]/20 transition-colors duration-300 flex items-center justify-center">
                       <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/80 hover:text-red-400 transition-colors z-[100000] bg-black/40 p-2 rounded-full cursor-pointer pointer-events-auto"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <X size={36} />
          </button>

          {/* Previous Button */}
          {mediaItems.length > 1 && (
            <button
              type="button"
              className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors z-[100000] p-4 group cursor-pointer pointer-events-auto"
              onClick={showPrev}
            >
              <ChevronLeft size={48} className="transition-transform group-hover:-translate-x-2" />
            </button>
          )}

          {/* Main Media Asset */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center p-4 py-16 md:p-12 z-[99999]">
             {mediaItems[selectedIndex].type === 'image' ? (
               <img
                 src={mediaItems[selectedIndex].url}
                 alt={`Gallery full view ${selectedIndex}`}
                 className="max-w-full max-h-full object-contain drop-shadow-2xl select-none"
                 onClick={(e) => e.stopPropagation()}
               />
             ) : (
               <video
                 src={mediaItems[selectedIndex].url}
                 controls
                 autoPlay
                 playsInline
                 className="max-w-full max-h-full object-contain drop-shadow-2xl shadow-black"
                 onClick={(e) => e.stopPropagation()}
               />
             )}
             
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tracking-widest text-sm font-light z-[100000]">
                {selectedIndex + 1} / {mediaItems.length}
             </div>
          </div>

          {/* Next Button */}
          {mediaItems.length > 1 && (
            <button
              type="button"
              className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors z-[100000] p-4 group cursor-pointer pointer-events-auto"
              onClick={showNext}
            >
              <ChevronRight size={48} className="transition-transform group-hover:translate-x-2" />
            </button>
          )}
        </div>,
        document.body
      )}
    </section>
  );
}

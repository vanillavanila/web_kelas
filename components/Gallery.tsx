'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

interface GalleryProps {
  images: string[]
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const currentScroll = scrollContainerRef.current.scrollLeft
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full relative py-10">
      
      {/* Scroll controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 hidden md:block">
        <button 
          onClick={() => scroll('left')}
          className="bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full backdrop-blur-md transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 hidden md:block">
        <button 
          onClick={() => scroll('right')}
          className="bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full backdrop-blur-md transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 pb-10 scrollbar-hide snap-x snap-mandatory"
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="flex-none w-64 md:w-80 h-80 relative group cursor-pointer snap-center overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/20"
            onClick={() => setSelectedImage(src)}
          >
            <Image 
              src={src} 
              alt={`Gallery Image ${idx + 1}`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 256px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              <p className="font-semibold tracking-wider">Select Image</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[85vh] rounded-lg overflow-hidden shadow-2xl scale-100 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <Image 
              src={selectedImage} 
              alt="Selected Gallery Image" 
              fill 
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}

import React from 'react'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'
import Gallery from '@/components/Gallery'

export default function GalleryPage() {
  // Generate array of image paths based on what's available
  const kenanganImages = Array.from({ length: 13 }, (_, i) => `/images/kenangan/${i + 1}.jpg`)

  return (
    <main className="relative flex flex-col min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-10 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Our Gallery
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
          Kumpulan momen tak terlupakan, tawa, dan cerita yang akan selalu kita kenang bersama.
        </p>
      </section>

      {/* Interactive Gallery Section */}
      <section className="w-full flex-grow flex flex-col justify-center pb-20">
        <Gallery images={kenanganImages} />
      </section>

      <Footers />
    </main>
  )
}


import React from 'react'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'
import './style.css' // Pastikan file style.css ada di folder yang sama!

const timelineData = [
  {
    year: '2023',
    title: 'Awal Pertemuan',
    description: 'Hari pertama kita berkumpul di kelas X RPL 2. Masih saling canggung dan belum saling kenal.',
    icon: '🏫'
  },
  {
    year: '2024',
    title: 'Masa Adaptasi',
    description: 'Mulai terbiasa dengan tugas koding yang tiada habisnya, begadang bareng ngerjain project, dan mulai terbentuk sirkel pertemanan.',
    icon: '💻'
  },
  {
    year: '2025',
    title: 'PKL ',
    description: 'Merasakan langsung dunia kerja lewat Praktik Kerja Lapangan (PKL).',
    icon: '🚀'
  },
  {
    year: '2026',
    title: 'Uji Kompetensi Keahlian & Kelulusan',
    description: 'Berjuang mati-matian menyelesaikan UKK & Akhirnya kita lulus dengan bangga!',
    icon: '🎓'
  }
]

export default function CeritaPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-20 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Perjalanan Kita
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
          Setiap detik yang terlewati menjadi sebuah cerita yang tak akan pernah kita lupakan.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-10 flex-grow z-10">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/0 transform md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-12 md:space-y-24">
          {timelineData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot/Icon */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 text-2xl z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {item.icon}
              </div>

              {/* Content Box */}
              <div className="ml-16 md:ml-0 w-full md:w-5/12 p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 group">
                <div className="text-blue-400 font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                  {item.year}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Dekorasi Animasi Gradient Latar Belakang */}
      <div className="container-pattren">
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        <div className="pattren"></div>
        
      </div>

      <Footers />
    </main>
  )
}
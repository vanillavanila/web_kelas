'use client'
import { icons } from 'lucide-react'
import React, { useState } from 'react';

const pelajaranPage = () => {
  
  const [selectPelajaran, setPelajaran] = useState<any>(null);

  const daftarPelajaran = [
    {
      id: 1,
      kategori: 'Web Development',
      judul: 'Pemrograman Web & Perangkat Bergerak',
      deskripsi: 'Mempelajari pembuatan website modern dari sisi client (Frontend) hingga server (Backend) menggunakan teknologi terkini.',
      subMateri: [
        { nama: 'HTML5 & CSS3', url: 'https://www.w3schools.com/html/' },
        { nama: 'JavaScript Modern', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { nama: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { nama: 'Laravel Framework', url: 'https://laravel.com/' }
      ],
      detailSilubus: '/images/silabus/2.svg',
      icon: '🌐',
      warna: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      kategori: 'UI/UX Design',
      judul: 'Desain Antarmuka Pengguna',
      deskripsi: 'Fokus pada pengalaman pengguna, pembuatan wireframe, prototyping, hingga desain visual aplikasi yang intuitif.',
      subMateri: [
        { nama: 'User Research', url: 'https://www.interaction-design.org/literature/topics/user-research' },
        { nama: 'Figma Tools', url: 'https://www.figma.com/resource-library/design-basics/' },
        { nama: 'Laws of UX', url: 'https://lawsofux.com/' }
      ],
      detailSilubus:'/images/silabus/1.svg',
      icon: '🎨',
      warna: 'from-pink-500 to-rose-600'
    },
    {
      id: 3,
      kategori: 'Dasar Pemrograman',
      judul: 'Pemrograman Berorientasi Objek (OOP)',
      deskripsi: 'Menanamkan logika pemrograman yang kuat, struktur data, dan arsitektur kode yang bersih serta mudah dirawat.',
      subMateri: [
        { nama: 'Konsep OOP', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
        { nama: 'Algoritma Dasar', url: 'https://www.w3schools.com/dsa/' },
        { nama: 'Struktur Data', url: 'https://www.geeksforgeeks.org/data-structures/' },
        { nama: 'Git & GitHub', url: 'https://www.w3schools.com/git/' }
      ],
      detailSilubus:'/images/silabus/4.svg',
      icon: '💻',
      warna: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
      kategori: 'Database',
      judul: 'Database & Information Systems',
      deskripsi: 'Mempelajari bagaimana cara merancang, mengelola, dan mengamankan data aplikasi menggunakan sistem relasional yang efisien.',
      subMateri: [
        { nama: 'Perancangan ERD', url: 'https://www.w3schools.com/sql/' },
        { nama: 'Query MySQL', url: 'https://dev.mysql.com/doc/' },
        { nama: 'Normalisasi Data', url: 'https://www.geeksforgeeks.org/normal-forms-in-dbms/' }
      ],
      detailSilubus:'/images/silabus/3.svg',
      icon: '🗄️',
      warna: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div>
      <div className="min-h-screen bg-slate-800 font-sans">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16 px-6 text-center shadow-lg">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-2">Pelajaran Kejuruan</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kompetensi Keahlian RPL 
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Eksplorasi materi pembelajaran utama untuk membentuk developer profesional, desainer kreatif, dan pemecah masalah yang handal.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {daftarPelajaran.map((pelajaran) => (
              <div 
                key={pelajaran.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-dashed border-slate-100 flex flex-col justify-between overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${pelajaran.warna} p-6 text-white relative`}>
                  <div className="text-4xl mb-3 bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {pelajaran.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest bg-black/20 px-2.5 py-1 rounded-full">
                    {pelajaran.kategori}
                  </span>
                  <h3 className="text-xl font-bold mt-3 leading-snug">
                    {pelajaran.judul}
                  </h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pelajaran.deskripsi}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Materi Inti:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pelajaran.subMateri.map((materi, idx) => (
                        <a 
                          href={materi.url}
                          key={idx}
                          target='_blank'
                          rel='noopener noreferrer'
                          className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium group-hover:bg-slate-200 transition-colors"
                        >
                          {materi.nama} 🔗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                  <button
                    onClick={() => setPelajaran(pelajaran)}
                    className="w-full cursor-pointer text-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100"
                  >
                    Lihat Detail Silabus →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectPelajaran && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-sm overscroll-none"
              onClick={() => setPelajaran(null)} // Klik area hitam di luar modal untuk menutup
            >
              <div 
                className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat konten diklik
              >
                {/* 1. HEADER MODAL (Terpisah) */}
                <div className={`bg-gradient-to-r ${selectPelajaran.warna} p-5 text-white flex justify-between items-start shrink-0`}>
                  <div className="pr-4">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-black/20 px-2.5 py-1 rounded-full inline-block">
                      Silabus Detail • {selectPelajaran.kategori}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-2 leading-tight">{selectPelajaran.judul}</h3>
                  </div>
                  {/* Tombol X Pojok Kanan Atas */}
                  <button 
                    onClick={() => setPelajaran(null)}
                    className="bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors cursor-pointer shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto flex-grow bg-slate-900/40 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectPelajaran.deskripsi}
                  </p>
                  <div className="bg-white p-3 rounded-xl shadow-md w-full flex justify-center items-center min-h-[150px]">
                    {/* Menggunakan <img> standar agar pembacaan SVG di HP 100% aman */}
                    <img 
                      src={selectPelajaran.detailSilubus} 
                      alt="silabus" 
                       width={500}     
                      height={350}    
                      className="object-contain max-w-full h-auto"
                    />
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-slate-800 border-t border-slate-700/50 flex justify-end shrink-0">
                  <button 
                    onClick={() => setPelajaran(null)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-sm font-semibold transition-colors text-center cursor-pointer shadow-md"
                  >
                    Tutup Silabus
                  </button>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default pelajaranPage;
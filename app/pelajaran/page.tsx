import { icons } from 'lucide-react'
import React from 'react'

const pelajaranPage = () => {
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
    icon: '🎨',
    warna: 'from-pink-500 to-rose-600'
  },
  {
    id:3,
      kategori: 'Dasar Pemrograman',
      judul: 'Pemrograman Berorientasi Objek (OOP)',
      deskripsi: 'Menanamkan logika pemrograman yang kuat, struktur data, dan arsitektur kode yang bersih serta mudah dirawat.',
    subMateri: [
    { nama: 'Konsep OOP', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
    { nama: 'Algoritma Dasar', url: 'https://www.w3schools.com/dsa/' },
    { nama: 'Struktur Data', url: 'https://www.geeksforgeeks.org/data-structures/' },
    { nama: 'Git & GitHub', url: 'https://www.w3schools.com/git/' }
    ],
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
    icon: '🗄️',
    warna: 'from-amber-500 to-orange-600'
  }
];
  return (
    <div>
     <div className="min-h-screen bg-slate-800 font-sans">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16 px-6 text-center shadow-lg">
        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-2">Pelajaran Kejuruan</span>
        <h1 className="text-4xl md:text-5-xl font-extrabold tracking-tight mb-4">
          Kompetensi Keahlian RPL 
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-lg">
          Eksplorasi materi pembelajaran utama untuk membentuk developer profesional, desainer kreatif, dan pemecah masalah yang handal.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
          {daftarPelajaran.map((pelajaran) =>(
            <div 
            key={pelajaran.id} 
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-dashed border-slate-100 flex flex-col justify-between overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${pelajaran.warna} p-6 text-white relative`}>
                <div className="text-4xl mb-3 bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrup-blur-sm">
                  {pelajaran.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest bg-black/20 px-2.5 py-1 rounded-full">
                  {pelajaran.kategori}
                </span>
                <h3 className="text-xl font-bold mt-3 leding-snug">
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
                      rel='noopener norefereer'
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium group-hover:bg-slate-200 transition-colors"
                      >
                        {materi.nama} 🔗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                <button className="w-full text-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100">
                  Lihat Detail Silabus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  )
}

export default pelajaranPage

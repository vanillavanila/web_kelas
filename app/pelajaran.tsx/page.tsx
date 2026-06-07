// app/pelajaran/page.tsx
import React from 'react'

export default function PelajaranPage() {
  const materiList = [
    {
      id: "01",
      title: "UI/UX Design",
      subtitle: "Arsitek & Desainer Aplikasi",
      desc: "Sebelum masuk ke tahap coding, sebuah produk digital harus dirancang terlebih dahulu agar nyaman digunakan dan tampilannya menarik. Di sini kita belajar riset pengguna (UX) dan keindahan visual (UI) menggunakan Figma.",
      image: "/assets/canva-uiux.png", // Gantilah dengan nama file gambar dari Canva-mu nanti
      tags: ["Figma", "Wireframing", "Prototyping"]
    },
    {
      id: "02",
      title: "Web Development",
      subtitle: "Pembangun Rumah Digital",
      desc: "Mengubah hasil desain UI/UX menjadi kode nyata yang bisa diakses di browser. Terbagi menjadi Frontend (HTML, CSS, JavaScript, Next.js) untuk tampilan depan, dan Backend (Node.js, Database) untuk mengurus sistem di balik layar.",
      image: "/assets/canva-webdev.png", // Gantilah dengan nama file gambar dari Canva-mu nanti
      tags: ["HTML & CSS", "Tailwind v4", "Next.js"]
    },
    {
      id: "03",
      title: "Pemrograman Dasar",
      subtitle: "Pondasi Logika Berpikir",
      desc: "Fondasi mendasar untuk melatih logika dan pemecahan masalah (problem solving). Di sini kita belajar bagaimana memberi instruksi kepada komputer melalui konsep variabel, pengkondisian (if/else), perulangan, dan fungsi.",
      image: "/assets/canva-programming.png", // Gantilah dengan nama file gambar dari Canva-mu nanti
      tags: ["Logika", "Algorithms", "Syntax"]
    }
  ]

  return (
    <main className="min-h-screen bg-[#050c18] text-white pt-32 pb-16 px-6 md:px-12">
      {/* Header Halaman */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-amber-200 bg-clip-text text-transparent">
          Materi Pelajaran XII RPL 2
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Ringkasan kompetensi keahlian dan ilmu teknologi yang dipelajari untuk bekal menjadi developer profesional.
        </p>
      </div>

      {/* Daftar Materi (Layout Zig-Zag) */}
      <div className="max-w-5xl mx-auto space-y-24">
        {materiList.map((materi, index) => {
          // Menentukan apakah susunannya zig-zag (gambar kiri teks kanan, atau sebaliknya)
          const isEven = index % 2 === 0

          return (
            <section 
              key={materi.id}
              className={`flex flex-col gap-10 items-center md:flex-row ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Sisi Gambar Aset Canva */}
              <div className="w-full md:w-1/2 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 bg-slate-900 shadow-xl transition duration-300 group-hover:border-blue-500/40">
                  {/* Sementara pakai placeholder jika gambar belum dimasukkan ke folder public/ */}
                  <img 
                    src={materi.image} 
                    alt={materi.title}
                    onError={(e) => {
                      // Fallback jika file gambar canva belum kamu taruh di folder public
                      e.currentTarget.src = `https://placehold.co/600x400/0a1730/ffffff?text=${materi.title}`
                    }}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold tracking-wider">
                    {materi.id}
                  </div>
                </div>
              </div>

              {/* Sisi Teks Penjelasan */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    {materi.subtitle}
                  </span>
                  <h2 className="text-3xl font-bold text-white">
                    {materi.title}
                  </h2>
                </div>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {materi.desc}
                </p>

                {/* Kumpulan Tag/Tools */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {materi.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
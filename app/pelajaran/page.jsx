import React from 'react'

function page() {
  return (
   <div className="max-w-4xl mx-auto py-10 px-4 space-y-12">
      
      {/* SEKSI 1: GAMBAR DI KIRI, PENJELASAN DI KANAN */}
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          {/* Aset Gambar Hasil Download dari Canva */}
          <img 
            src="/assets/canva-uiux-mockup.png" 
            alt="Desain UI/UX" 
            className="rounded-xl shadow-lg border border-white/10"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-300">1. Tahap UI/UX Design</h2>
          <p className="text-slate-300 leading-relaxed">
            Sebelum masuk ke tahap coding, kita merancang pengalaman pengguna (UX) dan keindahan visual (UI) terlebih dahulu menggunakan Figma...
          </p>
        </div>
      </section>

      {/* SEKSI 2: GAMBAR DI KANAN, PENJELASAN DI KIRI (ZIG-ZAG biar estetik) */}
      <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src="/assets/canva-webdev-code.png" 
            alt="Coding Frontend" 
            className="rounded-xl shadow-lg border border-white/10"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-300">2. Tahap Web Development</h2>
          <p className="text-slate-300 leading-relaxed">
            Di tahap ini, blueprint dari UI/UX dieksekusi menjadi kode nyata menggunakan HTML, CSS (Tailwind), dan JavaScript agar bisa diakses di browser...
          </p>
        </div>
      </section>

    </div>
  )
}

export default page

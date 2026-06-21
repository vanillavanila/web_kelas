'use client'
import React, { useState } from 'react';

const page = () => {
  const [filterMomen, setFilterMomen] = useState('semua');

  const quotesRpl2 = [
    { text: "Jangankan masa depan kita, error di baris 42 aja rela aku cari sampai pagi." },
    { text: "Kisah cinta kita itu kaya CSS, udah rapi di laptopku, begitu pindah ke hatimu malah berantakan." },
    { text: "Semua akan 'Commit' pada waktunya, tapi belum tentu 'Merge' di pelaminan." },
    { text: "Hidup itu cuma perlu 'Ctrl + Z' kalau lagi nyesel, sayangnya tuhan nggak ngasih library itu." }
  ];

  const ceritaUnik = [
    {
      id: 1,
      judul: "Tragedi Titik Koma (;)",
      konten: "Satu kelas panik berjamaah gara-gara project kelompok gak bisa di-running pas mau dinilai guru. Udah bongkar kode 2 jam, ternyata cuma kurang satu titik koma (;) di ujung baris. Sejak hari itu, kita punya trauma emosional sama tanda baca.",
      pelaku: "Kelompok 3 & Seisi Kelas"
    },
    {
      id: 2,
      judul: "Kopi, Indomie, dan Subuh",
      konten: "Uji Kompetensi Keahlian (UKK) adalah momen di mana kelas RPL 2 berubah fungsi jadi kos-kosan 24 jam. Aroma kopi bercampur bumbu Indomie mentah, diselingi suara keyboard mekanik yang berisik banget. Tidur di atas meja komputer udah jadi hal biasa.",
      pelaku: "Tim Begadang"
    }
  ];

  const momenSeru = [
    { id: 1, tipe: 'gabut', judul: "Mabar di Pojok Kelas", deskripsi: "Local Area Network (LAN) sekolah bukannya dipake buat sharing data project, malah dipake buat mabar game turnamen internal pas jam kosong." },
    { id: 2, tipe: 'solidaritas', judul: "Satu Error, Semua Error", deskripsi: "Prinsip RPL 2: Kalau ada satu orang yang kodenya error, yang pusing sekelas. Auto dikerubutin di pojok lab buat di-debug bareng-bareng." },
    { id: 3, tipe: 'hacks', judul: "Nge-hack Wi-Fi Lab", deskripsi: "Wi-Fi khusus guru berhasil dibongkar password-nya sama anak-anak barisan belakang dalam waktu 15 menit pake teknik inspect element dan menebak pola tanggal lahir kepala sekolah." },
    { id: 4, tipe: 'random', judul: "Adalah Pokonya", deskripsi: "Wi-Fi khusus guru berhasil dibongkar password-nya sama anak-anak barisan belakang dalam waktu 15 menit pake teknik inspect element dan menebak pola tanggal lahir kepala sekolah." },
  ];

  const filteredMomen = filterMomen === 'semua' 
    ? momenSeru 
    : momenSeru.filter(m => m.tipe === filterMomen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono selection:bg-teal-500 selection:text-slate-905 p-6 md:p-12">
      
      {/* HEADER SECTION */}
      <div className="max-w-5xl mx-auto text-center border-b border-dashed border-slate-800 pb-12 mb-12">
        <div className="inline-block bg-teal-500/10 text-teal-400 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 animate-pulse">
          // Console.log("Welcome to RPL 2");
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          RPL 2 Hall of Fame
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base">
          Kumpulan kode kehidupan, error cinta, dan kompilasi kenangan seru dari para calon Software Engineer kelas RPL 2.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* KOLOM KIRI & TENGAH (CERITA & HAL SERU) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* SECTION: CERITA UNIK */}
          <div>
            <h2 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2">
              <span className="text-slate-600">&lt;</span> Cerita_Unik <span className="text-slate-600">/&gt;</span>
            </h2>
            <div className="space-y-4">
              {ceritaUnik.map((cerita) => (
                <div key={cerita.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{cerita.judul}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{cerita.konten}</p>
                  <div className="text-xs text-teal-400/70 bg-teal-500/5 inline-block px-2 py-1 rounded border border-teal-500/10">
                    Saksi Bisu: {cerita.pelaku}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: HAL SERU (WITH FILTER) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <span className="text-slate-600">&lt;</span> Aktivitas_Seru <span className="text-slate-600">/&gt;</span>
              </h2>
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 text-xs">
                {['semua', 'gabut', 'solidaritas', 'hacks', 'random',].map((kat) => (
                  <button
                    key={kat}
                    onClick={() => setFilterMomen(kat)}
                    className={`px-3 py-1 rounded-md border capitalize transition-all ${
                      filterMomen === kat 
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500' 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {kat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMomen.map((momen) => (
                <div key={momen.id} className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                      #{momen.tipe}
                    </span>
                    <h3 className="text-base font-bold text-slate-300 mt-2.5 mb-1.5">{momen.judul}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{momen.deskripsi}</p>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-4 text-right">
                    status: executed_ok
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* KOLOM KANAN (QUOTES SIDEBAR) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
            <span className="text-slate-600">&lt;</span> Quotes_RPL2 <span className="text-slate-600">/&gt;</span>
          </h2>
          
          <div className="space-y-4">
            {quotesRpl2.map((quote, idx) => (
              <div key={idx} className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-5 rounded-xl flex flex-col justify-between shadow-sm">
                <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
                  "{quote.text}"
                </p>
              </div>
            ))}
          </div>

          {/* MINI STATS / LOG CARD */}
          <div className="bg-indigo-950/20 border border-indigo-500/10 rounded-xl p-5 text-xs text-slate-400 space-y-2">
            <div className="font-bold text-indigo-300 uppercase tracking-wider mb-1">// System Log info:</div>
            <div>• Total Siswa: <span className="text-slate-200 font-bold">Active</span></div>
            <div>• Solidaritas Kelas: <span className="text-teal-400 font-bold">100% Max</span></div>
            <div>• Kebisingan Lab: <span className="text-amber-400 font-bold">Overclocked</span></div>
            <div>• Status Kelulusan: <span className="text-cyan-400 font-bold">Loading...</span></div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="max-w-5xl mx-auto text-center text-xs text-slate-600 mt-20 pt-6 border-t border-slate-900">
        Build with ❤️ by Anak RPL 2 | Dynamic System Beta v1.0.0
      </div>

    </div>
  )
}

export default page

import React from 'react'
import Image from 'next/image'
function HeroAbout() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background Puzzle */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <img
            key={i}
            src={`/images/puzzle2/${i + 1}.jpg`}
            alt={`Puzzle2 ${i + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Overlay biar text keliatan */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content di atas background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white text-center">
        <div className='w-150'>
          <h1 className="text-5xl font-bold">Tentang TWELVRPL-2 </h1>
          <p className="mt-4 text-lg">
            TWELVRPL-2 bukan sekadar sebuah kelas, tapi tempat di mana cerita, tawa, perjuangan,
            dan kebersamaan tumbuh setiap harinya.
            Website ini dibuat sebagai ruang untuk menyimpan semua kenangan yang pernah kita lalui bersama,
            dari awal pertemuan hingga perjalanan menuju kelulusan.
            Semoga setiap foto dan cerita di sini bisa menjadi pengingat bahwa kita pernah menjadi bagian dari satu keluarga yang sama.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout

import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
  <div className="relative min-h-screen w-full">

      {/* Background Puzzle */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <img
            key={i}
            src={`/images/puzzle/${i + 1}.jpg`}
            alt={`Puzzle ${i + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Overlay biar text keliatan */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content di atas background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white text-center">
        <div className='w-135'>
          <h1 className="text-5xl font-bold">Welcome To Website 12 <span className='text-slate-300'>RPL 2</span> </h1>
          <p className="mt-4 text-xl font-semibold">
            “Kita mungkin lulus, tapi cerita kita gak akan selesai.”

            “Satu kelas, satu keluarga, selamanya.”

            “Kenangan terbaik selalu datang dari orang-orang terbaik.”

            “Di balik tugas dan ujian, ada tawa yang gak tergantikan.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

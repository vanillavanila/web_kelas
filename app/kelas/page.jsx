import React from 'react'
import Image from 'next/image'
import foto1 from '@/public/images/foto_kelas/1.png'
import foto2 from '@/public/images/foto_kelas/2.png'
import foto3 from '@/public/images/foto_kelas/3.png'
import foto4 from '@/public/images/foto_kelas/4.png'
import foto5 from '@/public/images/foto_kelas/5.png'
import foto6 from '@/public/images/foto_kelas/6.png'
import foto7 from '@/public/images/foto_kelas/7.png'
import foto8 from '@/public/images/foto_kelas/8.png'

const PageKenangan = () => {
  const galleryKelas = [
    {id:1, src: foto1, title:'Struktur Kelas 12 RPL-2', size:'md:col-span-2 md:row-span-2'},
    {id:2, src: foto2, title:'Orang-orang di Balik Kenangan Ini', size:'md:col-span-1'},
    {id:3, src: foto3, title:'Masa Muda yang Kita Jalanin Bareng', size:'md:col-span-1'},
    {id:4, src: foto4, title:'Momen Mereka', size:'md:col-span-1'},
    {id:5, src: foto5, title:'Bagian dari Cerita', size:'md:col-span-1'},
    {id:6, src: foto6, title:'Ini Kami', size:'md:col-span-1'},
    {id:7, src: foto7, title:'Masa Muda yang Kita Jalanin Bareng', size:'md:col-span-1'},
    {id:8, src: foto8, title:'Cerita yang Belum Selesai', size:'md:col-span-1'}
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight md:text-4xl">
          Memori Kelas
        </h2>
        <p className="mt-2 text-gray-600">
          Kumpulan Foto Anak-anak XII RPL-2
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
        {galleryKelas.map((foto) => (
          <div
            key={foto.id}
            className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${foto.size}`}
          >
            <Image
              src={foto.src}
              alt={foto.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={foto.id === 1}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-white font-semibold text-lg">{foto.title}</h3>
                <p className="text-gray-200 text-sm">Lihat Detail</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageKenangan
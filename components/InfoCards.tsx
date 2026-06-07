// mengambil ikon dari library bernama lucide-react
import { BookOpenCheck, Users, Sparkles } from "lucide-react"

const cards = [
  {
    title: "Kelas",
    desc: "Informasi tentang siswa XII RPL 2, struktur kelas, dan kegiatan.",
    icon: <Users size={40} />,
    link: "/kelas",
  },
  {
    title: "Pelajaran",
    desc: "Materi yang dipelajari seperti Web Dev, UI/UX, dan Pemrograman.",
    icon: <BookOpenCheck size={40} />,
    link: "/pelajaran",
  },
  {
    title: "Random",
    desc: "Cerita unik, quotes, dan hal seru dari anak-anak RPL 2.",
    icon: <Sparkles size={40} />,
    link: "/random",
  },
]

export default function InfoCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-[#0a1730] to-[#050c18]
          border border-blue-500/30 rounded-2xl p-8
          shadow-lg hover:shadow-blue-500/40
          hover:-translate-y-5 transition duration-300 
          cursor-pointer"
        >
          {/* Icon */}
          <div className="text-blue-400 mb-4">{card.icon}</div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-3">
            {card.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {card.desc}
          </p>

          {/* Button */}
          <a
            href={card.link}
            className="inline-block px-4 py-2 text-sm font-semibold
            text-white bg-blue-600 rounded-xl
            hover:bg-blue-500 transition"
          >
            Lihat Selengkapnya →
          </a>
        </div>
      ))}
    </section>
  )
}

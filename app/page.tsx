import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";
import Gallery from "@/components/Gallery";

export default function Home() {
  const kenanganImages = Array.from({ length: 7 }, (_, i) => `/images/foto/${i + 1}.jpg`)

  return (
   <main className="relative flex flex-col min-h-screen bg-slate-950 overflow-hidden">
     <Navbar />
     <Hero />
      <section className='flex flex-col py-20 justify-center items-center w-full z-10'>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Memory Images
          </span>
        </h2>
        
        {/* Replace static grid with dynamic Gallery */}
        <div className="w-full max-w-7xl mx-auto">
          <Gallery images={kenanganImages} />
        </div>
      </section>
     <Footers/>
   </main>
  );
}

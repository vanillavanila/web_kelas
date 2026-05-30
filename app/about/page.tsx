import React from 'react'
import Navbar from '@/components/Navbar'
import HeroAbout from '@/components/HeroAbout'
import InfoCards from '@/components/InfoCards'
import Footers from '@/components/Footers'
function page() { 
  return (
    <main className="relative flex flex-col gap-10 bg-slate-900 overflow-hidden">
      <Navbar />
      <HeroAbout />
      <InfoCards />
      <Footers />
    </main>
  )
}

export default page

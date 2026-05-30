import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import InfoCards from '@/components/InfoCards'
import Video from '@/components/Video'
function page() {
  return (
    <div className='bg-slate-950 relatife flex flex-col'>
      <Navbar />
      <Hero />
      <Video />
      <InfoCards />
    </div>
  )
}

export default page

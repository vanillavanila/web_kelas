'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [open, setOpen] = useState(false) 
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Kenangan', href: '/kenangan' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Cerita', href: '/cerita' },
  ]

  return (
    <div>
      <header className='fixed top-0 left-0 z-50 px-6 md:px-10 text-white flex gap-10 justify-between w-full backdrop-blur-md bg-slate-900/60 border-b border-white/10 transition-all duration-300'>
        <ul className='flex space-x-4 justify-center items-center h-20'>
            <li>
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/20 hover:border-white/50 transition-colors">
                <Image src="/images/logo.png" alt="Logo" fill className='object-cover'/>
              </div>
            </li>
            <li className="font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              TWELVRPL-2
            </li>
        </ul>
        <nav className='hidden md:flex w-100 justify-end'>
            <ul className='flex h-20 items-center space-x-8'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`relative text-sm font-medium transition-colors hover:text-blue-400
                      ${pathname === link.href ? 'text-blue-400' : 'text-slate-200'}
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300
                      ${pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
        </nav>
         {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden absolute right-6 top-6 text-white hover:text-blue-400 transition-colors z-50"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center md:hidden z-40
        ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <ul className='flex flex-col items-center space-y-8 text-white text-xl'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-semibold tracking-wider transition-colors
                    ${pathname === link.href ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      </header>
    </div>
  )
}

export default Navbar

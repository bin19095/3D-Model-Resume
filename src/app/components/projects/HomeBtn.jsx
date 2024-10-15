"use client"
import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'

const NavLink = motion(Link)


const HomeBtn = () => {
  return (
    <NavLink 
    initial= {{ scale: 0}}
    animate={{scale: 1 }}
    transition={{ delay: 1.5}}
    href={"/"} 
    target={"_self"} 
    className='text-foreground  rounded-full flex items-center justify-center 
    bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset
    hover:shadow-glass-sm fixed top-1 left-0 w-fit self-start'
    aria-label={"home"} name={"home"}
    style={{zIndex:"1000"}}
    >
    <span className='relative w-14 h-14 p-4   hover:text-accent'>
      <Home className='w-full h-auto z-1000' strokeWidth={1.5} />
        <span className="peer bg-transparent rounded-full z-1000 absolute top-0 left-0 w-full h-full"/>
        
        <span className="absolute hidden peer-hover:block px-1 py-1 left-full mx-2 top-1/2 -translate-y-1/2
    bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
        Home
    </span>
    </span>
    </NavLink>
  )
}

export default HomeBtn
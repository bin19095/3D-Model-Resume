"use client"
import { BtnList } from '@/app/data';
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';
import {motion} from "framer-motion";

const container = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
        }
    }
}

const Navigation = () => {
    const angelIncrement = 360/BtnList.length;
    const size = useScreenSize();
    const isLarge = size >= 1024;
    const isMedium = size >= 768;
  return (
    <div className='z-30 w-full fixed h-screen flex items-center justify-center'>
        <ResponsiveComponent>
            {({size}) => {
                return size && size >=480 ? (
                 <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
              
                 className = 'flex items-center justify-center relative  hover:pause animate-spin-slow group  '>
{
    BtnList.map((btn, index) => {
        const angleRad = (index * angelIncrement*Math.PI)/180;
        //const radius = 'calc(20vw - 1rem)';

        //  const x = `calc(${ radius } * ${Math.cos( angleRad )})`
        //  const y =   `calc(${ radius } * ${Math.sin( angleRad )})`
        const cosAngle = Math.cos(angleRad);
        const sinAngle = Math.sin(angleRad);
         const x = isLarge ?`calc(${cosAngle*0.9} * (20vw - 2rem))`: isMedium ? ` calc(${cosAngle*0.9} * (30vw - 2rem))`: ` calc(${cosAngle*0.9} * (40vw - 2rem))` ;
        //const x = `calc(${cosAngle*0.9} * (20vw - 2rem))`;
        const y = isLarge ?`calc(${sinAngle*.9} * (20vw - 2rem))`: isMedium ?`calc(${sinAngle*.9} * (30vw - 2rem))` : `calc(${sinAngle*.9} * (40vw - 2rem))`;
    
        // console.log('radius',radius)
        //    console.log("btn List", BtnList.length)
        const sty = {transform: `translate(${x} , ${y})`}
        //console.log("Style prorps",sty)
        return <NavButton x={x} y={y} key={btn.label} {...btn}/>

        
    })
}
</motion.div>) : (
    <>
    <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show" className = 'w-full px-2.5 xs:p-0 xs:w-max space-y-4 flex flex-col items-start xs:items-center justify-center relative  group  '>
{
    BtnList.slice(0,BtnList.length/2).map((btn, index) => {
        return <NavButton x={0} y={0} key={btn.label} {...btn} />

        
    })
}
</motion.div>

<motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show" className = 'w-full px-2.5 xs:p-0 xs:w-max  flex flex-col space-y-4 items-end xs:items-center justify-center relative group  '>
{
    BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
        return <NavButton x={0} y={0} key={btn.label} {...btn} labelDirection="left"/>

        
    })
}
</motion.div>
    
    
    
    </>
)

            }}
        </ResponsiveComponent>
        
        </div>

   
  )
}
export default Navigation;

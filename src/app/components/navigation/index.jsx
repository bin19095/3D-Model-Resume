"use client"
import { BtnList } from '@/app/data';
import React from 'react'
import NavButton from './NavButton';
const Navigation = () => {
    const angelIncrement = 360/BtnList.length;


  return (
    <div className='z-30 w-full fixed h-screen flex items-center justify-center'>
        <div className = 'flex items-center justify-center relative  hover:pause animate-spin-slow group  '>
            {
                BtnList.map((btn, index) => {
                    const angleRad = (index * angelIncrement*Math.PI)/180;
                     //const radius = 'calc(20vw - 1rem)';
                    
                    //  const x = `calc(${ radius } * ${Math.cos( angleRad )})`
                    //  const y =   `calc(${ radius } * ${Math.sin( angleRad )})`
                    const cosAngle = Math.cos(angleRad);
                    const sinAngle = Math.sin(angleRad);
                    const x = `calc(${cosAngle*0.9} * (20vw - 2rem))`;
                    const y = `calc(${sinAngle*.9} * (20vw - 2rem))`;
                
                 // console.log('radius',radius)
                //    console.log("btn List", BtnList.length)
                const sty = {transform: `translate(${x} , ${y})`}
                //console.log("Style prorps",sty)
                    return <NavButton x={x} y={y} key={btn.label} {...btn}/>

                    
                })
            }
        </div>
        </div>

   
  )
}
export default Navigation;

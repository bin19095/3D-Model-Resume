import {clsx } from 'clsx';
import React from 'react'


const ItemLayout = ({children, className}) => {
    return <div className={clsx(
        "  bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm p-8 rounded-xl flex items-center justify-center col-span-4",
        
    ) }>
        {children}
    </div>
}


const AboutDetails = () => {
  
    
  return (
    <section className='py-20 w-full'>
   
        <div className="grid grid-cols-12 gap-4 format ">
        <ItemLayout className={'!!col-span-6 '} >
             
             <p className="font-light">
             <h2 className="text-xl text-left w-full capitalize">
                 Architecture of Enhancements
             </h2>
          
                 My journey is web development is powered by an array of mythical tools an languages, with Javascirpt
                 casting the core of my Enhancements. I wield frameworks liek React.js with precision, crafting seamless portals (websites)
                 that connect realms/users across the digital universe. The ancient arts of the code camp empower me to create fast,
                 secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating.
                 Join me as I continue to explore new spells and technologies to shape the future of the web. 
             </p>
          
     </ItemLayout>
 
            <ItemLayout className={"!col-span-4"}>
                <p className="font-semibold w-full text-left text-5xl">
                    +25 <sub className="font-semibold text-base">Projects </sub>
                </p>
               
            </ItemLayout>
            <ItemLayout className={"!col-span-4 important"}>
               
                <p className="font-semibold w-full  text-base ">
                    +3 <sub className="font-semibold text-base"> years of experience</sub>
                </p>
               
            </ItemLayout>
        
        </div>
        <ItemLayout className={"col-span-6 important"}>
               
               <img src="https://github-readme-stats.vercel.app/api?username=bin19095&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" alt="codeCard"
               loading='lazy'/>
              
           </ItemLayout>
           <ItemLayout className={"col-span-6 important"}>
               
               <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bin19095&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" alt="codeCard"
               loading='lazy'/>
              
           </ItemLayout>

           <ItemLayout>
            <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,jquery,html,css,bootstrap,react,typescript,git,github,php,ps,powershell,npm,docker,jenkins,python,mysql,mongodb,netlify,java" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=bin19095&theme=dark&hide_border=true&background=45%2C00000000%2C00000000&border=FEFE5B&stroke=FEFE5B&ring=FEFE5B&fire=FEFE5B" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=bin19095&repo=BookCrud&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=bin19095&repo=CarProject&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=bin19095&repo=Components&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=bin19095&repo=resort-app&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false&description_lines_count=2&show_owner=true" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           <ItemLayout>
            <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=bin19095&repo=Resume-app&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&icon_color=FEFE5B&text_bold=false" 
            alt="CodeSpells" loading ='lazy'/>
           </ItemLayout>
           
           
           
    </section>
    
  )
}

export default AboutDetails;
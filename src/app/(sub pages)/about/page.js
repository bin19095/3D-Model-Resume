import Image from "next/image";
import bg from '../../../../public/background/about-background.png';
import AboutDetails from "@/app/components/about";
import RenderModel from "../../components/RenderModel";
import HatModel from "@/app/components/models/HatModel";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50  top-0 left-0 fixed w-full  h-full object-cover object-center opacity-25" />
    About Pages
    
    <div className=" w-full h-screen  top-1/2 -translate-y-1/2 left-0  absolute  ">
         <RenderModel>
            <HatModel/>
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center h-screen">
      <div className="absolute flex flex-col  items-center text-center top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2">
        <h1 className="font-bold text-6xl text-accent">Spell Code</h1>
        <p className="font-light text-foreground text-ls"> Meet The Front End Wizard Behind This Profile</p>
      </div>
      
      </div>
      <AboutDetails/>
     
      </>
  )
} 
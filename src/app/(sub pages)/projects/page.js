import Image from "next/image";
import bg from '../../../../public/background/projects-background.png';
import ProjectList from "../../components/projects";//index.jsx file to link with datajs key
import { projectsData } from '../../data';
import RenderModel from "../../components/RenderModel";

import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/app/components/models/Staff"), 
  {ssr: false});

export default function Home() {
  return (
    <>
      <Image priority size="100vw" src={bg} alt="background-image"  className="-z-50 fixed top-0 left-0 w-full  h-full object-cover object-center opacity-25" />
    Projects Page
    <ProjectList projects={projectsData}/>
    <div className="flex items-center justify-center fixed top-20 left-0 lg:top-20
    -translate-x-1/2 lg:translate-x-0 -z-10
    left-1/2
    lg:left-24
     h-screen">
         <RenderModel>
            <Staff/>
        </RenderModel>
      </div>
      </>
  )
} 
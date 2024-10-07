import Image from "next/image";
import bg from '../../../../public/background/projects-background.png';
import ProjectList from "../../components/projects";//index.jsx file to link with datajs key
import { projectsData } from '../../data';
import RenderModel from "../../components/RenderModel";
import Staff from "../../components/models/Staff";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" fill className="-z-50 fixed w-full h-full object-cover object-center opacity-30" />
    Projects Page
    <ProjectList projects={projectsData}/>
    <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
         <RenderModel>
            <Staff/>
        </RenderModel>
      </div>
      </>
  )
} 
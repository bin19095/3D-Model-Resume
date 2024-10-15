"use client"
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { createPortal } from 'react-dom';

const Modal = ({onClose, toggle}) => {
    return createPortal(
        <div className='fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-2000' style={{zIndex:'300'}}>
            <div className='bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8'>
                modal
            <p className="font-light">Do you like to play the background music?</p>
            <div className="flex items-center justify-center space-x-4">
            <button onClick={toggle} className="px-4 py-2 border border-accent/30 cursor-pointer border-solid hover:shadow-glass-sm rounded mr-2">Yes</button>
            <button onClick={onClose} className="px-4 py-2 border border-accent/30 cursor-pointer border-solid hover:shadow-glass-sm rounded ">No</button>
            </div>
            </div>
        
        </div>,
        document.getElementById("myModal")
    );
}

const Sound = () => {
    const [isPlaying, setIsPlaying ] = useState(false);
    const [showModal, setShowModal] =useState(false);
    const audioRef = useRef(null);

    const handleFirstUserInteraction = () =>{
        const musicConsent = localStorage.getItem("musicConsent");
        if(musicConsent === "true" && !isPlaying){
           audioRef.current.play()
           setIsPlaying(true); 
        }
      const events =  ["click", "keydown", "touchstart"];
      events.forEach((event) =>{
    document.removeEventListener(event, handleFirstUserInteraction)
   
}
)
    }
    useEffect(() => {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");
        if(consent && consentTime && 
            new Date(consentTime).getTime() + 3*24*60*60*1000 > new Date()
        ){
            setIsPlaying(consent === "true")
            if(consent === "true" ){
                const events=["click", "keydown", "touchstart"];
                events.forEach((event) =>
                {  
                   document.addEventListener(event, handleFirstUserInteraction)}
            );
            }
        }else{
            console.log("sound useffect showmodal")
            setShowModal(true)
        }
    },[]);

    const toggle = () => {
        const newState =!isPlaying;
        setIsPlaying( currentToggle =>{
          return  currentToggle= !currentToggle;
        })
        newState ? audioRef.current.play() : audioRef.current.pause()
        localStorage.setItem("musicConsent", String(newState));
        localStorage.setItem("consentTime", new Date().toISOString())
        setShowModal(false)
    }
    return (
    <div className="fixed top-3 right-2.5 xs:right-4 z-50 group">
    { showModal && <Modal onClose={() => setShowModal(false) } toggle={toggle} />
    
}
    <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    <motion.button 
    onClick={toggle}
    initial= {{ scale: 0}}
    animate={{scale: 1 }}
    transition={{ delay: 1.5}}
    href={"/"} 
    target={"_self"} 
    className='w-10 h-10 xs:w-14 xs:h-14 text-foreground  rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 
    bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset
    hover:shadow-glass-sm fixed top-4 right-4 w-fit self-start'
    aria-label={"home"} name={"home"}
    style={{zIndex:"1000"}}
    >
        {
            isPlaying ? 
            <Volume2 className='w-full h-full text-foreground group-hover:text-accent justify center' strokeWidth={1.5} />
            :
            <VolumeX className='w-full h-full text-foreground group-hover:text-accent justify center' strokeWidth={1.5} />
    }
        
    </motion.button>
    </div>
)
}

export default Sound;
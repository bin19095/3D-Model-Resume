import React from 'react'
import bg from '../../../../public/background/contact-background.png';
import Image from 'next/image';
import Form from '@/app/components/contact/Form';

const Contact = () => {
  return (
    <>
        <Image 
        src={bg}
        alt="background-image"
        className='-z-50 fixed top-0 left-0 w-full h-full object-center opacity-25'/>
        <article className='relative w-full flex flex-col items-center justify-center space-y-8'>
            <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
             <h1 className="text-accent font-semibold text-center text-4xl capitalize ">
                Summon The Developer
             </h1>
             <p className="text-center font-light">
                Hi, This is code wizard Binay Maharjan you are
                visiting indicates that you want to connect to the wizard.
                If you have any other question or want to know more about the
                coding wizard, then please try to send the message.
                wizard can do more than you expect so,have fun surfing the site.

                Thank you for visiting!!. 



             </p>
            
            </div>
            <Form />

        </article>

    </>
  )
}

export default Contact
"use client"

import React from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';



const Form = () =>  {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000, // you can not send more than 1 email per 5 seconds
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const onSubmit = data  => {
    const templateParams = {
        to_name: "Binay",
        from_name: data.name,
        to_reply: data.email,
        message: data.message
    }
    sendEmail(templateParams)
  };
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className = "max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      
      <input type="text" placeholder="name" {...register("name", {required:'This field is required!',
        minLength:{
            value:3,
            message: "Name should be at least 3 characters long."
        }
      })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
      }
      <input type="email" placeholder="email" {...register("email", {required: "This field is required", pattern: /^\S+@\S+$/i})}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
       />
         {
        errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
      }
      <textarea placeholder='message' {...register("message", {required: "This field is required!", maxLength:{
        value: 500,
        message: "message should be less than 500 characters",
      }, minLength:{
        value: 50,
        message: "message should be more than 50 characters"

      }})} 
            className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
/>

      <input value="Invoke contact" type="submit" className="mt-10 px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" />
     {
        errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
      }
    </form>
  );
}
export default Form
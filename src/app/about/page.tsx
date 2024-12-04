import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
  <div>
    {/* about me detail  */}
    <h1 className='text-5xl text-cyan-400 font-bold underline text-center mt-16 '>About Me</h1>

    <section className="text-gray-600 body-font">

      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10" alt="hero" src="/profile.png" width={720} height={600}/>
    
       <div className="text-center lg:w-2/3 w-full">

        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-300 hover:text-teal-50 underline">Tayyaba Arshad</h1>
        
        <h1 className=" sm:text-4xl mb-4 font-light text-gray-200">Web Developer</h1>

        <p className="mb-8 leading-relaxed text-gray-300 text-lg">
         This portfolio is both well-written and informative, with easy access to his competencies and job experience. You can also turn on the sound effect also to make surfing through his portfolio more enjoyable.
        </p>

        {/* social media icons  */}
       <div className="flex justify-center">
        <button className="inline-flex text-white py-2 px-6 text-3xl"><FaFacebook /></button>
        <button className="ml-4 inline-flex text-white py-2 px-6 text-3xl"><FaInstagram /></button>
        <button className="ml-4 inline-flex text-white py-2 px-6 text-3xl"><FaLinkedin /></button>
        <button className="ml-4 inline-flex text-white py-2 px-6 text-3xl"><FaGithub /></button>
       </div>

      </div>
     </div>
    </section>

      {/* Skill section  */}
    <div>
        <h2 className='text-5xl text-cyan-400 font-bold underline text-center mt-20 mb-16'>My Skill</h2>
        <ul className='text-2xl font-bold text-gray-200 text-center '>
            <li className='mb-4 hover:text-gray-400'>HTML</li>
            <li className='mb-4 hover:text-gray-400'>CSS</li>
            <li className='mb-4 hover:text-gray-400'>Javascript</li>
            <li className='mb-4 hover:text-gray-400'>Typescript</li>
            <li className='mb-4 hover:text-gray-400'>Next.js</li>
            <li className='mb-4 hover:text-gray-400'>React</li>
            <li className='mb-4 hover:text-gray-400'>Graphic Designing</li>
            <li className='mb-4 hover:text-gray-400'>MS Office</li>
        </ul>
    </div>
  </div> 
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    //  Hero section 
    <div className='container mx-auto py-24 px-5 flex flex-col md:flex-row items-center'>

      <div className='lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 '>
        <Image src={'/profile.png'} alt='profile image' width={720} height={600}/>
      </div>

      <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>

        <h1 className='text-3xl sm:text-4xl mb-4 font-medium text-emerald-300 '>
          Hi, I am <br/>Tayyaba Arshad
        </h1>

        <p className='mb-8 leading-relaxed text-gray-200 text-lg'>Tayyaba Arshad is a front-end developer and WordPress expert experience. His portfolio’s design seeks to capture the visitors’ attention with a creative concept and seamless background animation.</p>
         
         <div className='flex justify-center'>
           {/* Button  */}
          <button className='inline-flex bg-cyan-500 text-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-full text-lg'><Link href={'/about'}>About me</Link></button>
          <button className='ml-4 inline-flex bg-cyan-500 text-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-full text-lg'><Link href={'/contact'}>Contact me</Link></button>

        </div> 

      </div>
    </div>
  )
}

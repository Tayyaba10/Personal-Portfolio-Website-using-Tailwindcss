import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    // navbar 
    <nav className='bg-teal-300 '>

        <div className='container md:flex-row mx-auto flex  flex-col p-5 justify-between items-center'>

            <div className='mb-2 md:mb-0 flex items-center text-3xl font-semibold text-teal-900 '>
                Tayyaba
            </div>

            <div className='space-x-8 md:ml-auto md:mr-auto md:text-lg flex items-center justify-center'>

                <Link href={"/"} className=' hover:text-white text-black'>Home</Link>
                <Link href={"/about"} className='hover:text-white text-black mr-5'>About</Link>
                <Link href={"/projects"} className='hover:text-white text-black mr-5'>Projects</Link>
                <Link href={"/contact"} className='hover:text-white text-black mr-5'>Contact</Link>
               
            </div>
        </div>
    </nav>
  )
}

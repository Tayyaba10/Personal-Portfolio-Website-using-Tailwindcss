import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegComment } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";

export default function Projects() {
  return (
<div>
  <h1 className='text-5xl text-cyan-400 font-bold underline text-center mt-16 '>My Projects</h1>
 <section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap -m-4">
      {/* project 1 card detail */}
      <div className="p-4 md:w-1/3">

        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

          <Image className="lg:h-48 md:h-36 w-full object-cover object-centerz" src="/project1.png" alt="blog" width={720} height={400}/>

          <div className="p-6">

            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">CATEGORY</h2>
            <h1 className="title-font text-2xl font-medium text-black mb-3 underline">Responsive Figma Design</h1>
            <p className="leading-relaxed mb-3 text-gray-100">The goal of this task is to convert the provided Figma design into a pixel-perfect HTML layout using Next.js. The task focuses on creating a web page that mirrors the design with utmost precision, paying close attention to details such as spacing, typography, and layout. You are encouraged to use either custom CSS or Tailwind CSS for styling and organize the codebase into Next.js components where necessary for better modularity and reusability.
            </p>
            
            <div className="flex items-center flex-wrap mt-8">

                <Link href="/" className="text-blue-950 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                 <div className='w-4 h-4 ml-2'>
                    <IoMdArrowForward />
                 </div>
                </Link>
              
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                 
                 <div className='w-4 h-4 mr-1'>
                   <FiEye/>
                 </div>1.2K
              </span>

              <span className=" text-gray-400 inline-flex items-center leading-none text-sm">

                <div className='w-4 h-4 mr-1'>
                  <FaRegComment/>
                </div > 6
                
              </span>

            </div>
          </div>
        </div>
      </div>
        {/* project 2 card detail */}
      <div className="p-4 md:w-1/3">

        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/project2.png" alt="blog" width={721} height={401}/>
           
           <div className="p-6">

            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">CATEGORY</h2>
            <h1 className="title-font text-2xl font-medium text-black mb-3 underline">Country Page Listing</h1>
            <p className="leading-relaxed mb-3 text-gray-100">Set up dynamic routes for country names using the app router in Next.js. Each route will dynamically display details for a specific country based on the URL.
            Build a static page that lists five countries of your choice. Each country name should be clickable, linking to its respective dynamic route.</p>
            
            <div className="flex items-center flex-wrap mt-8">
              
              <Link href={'/'} className="text-blue-950 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                 <div className='w-4 h-4 ml-2'>
                    <IoMdArrowForward />
                 </div>
              </Link>

              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <div className='w-4 h-4 mr-1'>
                   <FiEye/>
                 </div> 1.2K
              </span>

              <span className="text-gray-400 inline-flex items-center leading-none text-sm">

                <div className='w-4 h-4 mr-1'>
                  <FaRegComment/>
                </div > 6

              </span>
            </div>
          </div>
        </div>
      </div>
        {/* project 3 card detail8 */}
      <div className="p-4 md:w-1/3">

        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/project3.png" alt="blog" width={720} height={402}/>
          
          <div className="p-6">

            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">CATEGORY</h2>
            <h1 className="title-font text-2xl font-medium text-black mb-3 underline">Responsive HumBurger Navbar</h1>
            <p className="leading-relaxed mb-3 text-gray-100">Create a responsive
             user interface by creating a navigation menu and working with breakpoints to
             handle various screen sizes. This will help you get comfortable with the basics
             of responsive design, CSS, and Next.js components</p>
            
            <div className="flex items-center flex-wrap mt-8">
              
              <Link href={"/"} className="text-blue-950 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                 <div className='w-4 h-4 ml-2'>
                    <IoMdArrowForward />
                 </div>
              </Link>

              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                 <div className='w-4 h-4 mr-1'>
                   <FiEye/>
                 </div>1.2K
              </span>

              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
               
               <div className='w-4 h-4 mr-1'>
                  <FaRegComment/>
                </div >6
                
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
</div>
  )
}

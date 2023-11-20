'use client'
 
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "react-transition-group";
import Link from 'next/link'
import { RiMenu4Fill } from 'react-icons/ri'

const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (() => {
    setIsOpen(!isOpen);
  });

  return (
    <div className='md:hidden text-center flex items-center delay-100 transition'>
      <RiMenu4Fill  onClick={toggleSidebar}
       className='text-3xl hover:text-pink-500/50 text-center mt-5 cursor-pointer flex items-center'/>


          {/* Sidebar */}
          <Transition in={isOpen} timeout={0} unmountOnExit>
          {(status) => (
            <div  onClick={toggleSidebar} onMouseLeave={toggleSidebar} 
              className={`fixed inset-y-0 z-50 rounded-b-2xl delay-100 min-h-screen backdrop-blur-3xl dark:inc-950 duration-300 transition-all dark:bg-black bg-gray-300 left-0 w-64 shadow-2xl shadow-gray-500/50 transform ${status === "entered" ? "translate-x-0" : "-translate-x-full"
                }`}
            >
            <div className="flex  flex-col h-screen sidebar rounded-2xl">
                <div className=" justify-between border-b-2 dark:border-gray-200/20 border-zinc-600/40 pb-[1.22rem] flex mt-5">
                <div className='max-sm:ml-0'>
                  <Link href="/" title='CodeMint' className="flex text-center justify-center"> 
                
                  <img src="/img/logo.png" width={50} className='mt-3  invert dark:invert-0 object-cover' alt="" />
                    <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
                  mint Ai
                    </span>
                  </Link>
                </div>
                  <div className="flex justify-end mt-3 mr-5">
                    <button className='p-3 bg-pink-700/50 hover:bg-red-500 active:bg-black transition-colors duration-300 rounded-full ' onClick={toggleSidebar}>
                      <FaTimes className=" text-2xl" />
                    </button>
                  </div>
                </div>

                {/* Sidebar links */}
                <nav className="mt-6 px-2 ">
                 
                <ul className='block mx-auto gap-14 mb-12 text-xl'>
                <li  className={`py-3 mb-2 transition delay-75 hover:text-pink-500/80 ${pathname === '/' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}  `} title='Tools'>
                  <Link href="/" legacyBehavior>
                      Home
                  </Link>
                  </li>
                <li  className={`py-3 mb-2 transition delay-75 hover:text-pink-500/80 ${pathname === '/tools' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}  `} title='Tools'>
                  <Link href="/tools" legacyBehavior>
                      Tools
                  </Link>
                  </li>
                <li className={`py-3 mb-2 transition delay-75 hover:text-pink-500/80 ${pathname === '/blogs' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}  `} title='Blogs'>
                  <Link href="/blogs" legacyBehavior>
                    Blogs
                  </Link>
                  </li>
                <li  className={`py-3 mb-2 transition delay-75 hover:text-pink-500/80 ${pathname === '/about' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}  `} title='About'>
                  <Link href="/about">About</Link>
                </li>
                  </ul>
                  <div className='mx-auto flex justify-center gap-7'>
                  <button className=' bg-gradient-to-l backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full'>
                    <div class="w-full px-5 py-2 rounded-full items-center justify-center dark:bg-gray-800 bg-black/40 text-white hover:bg-transparent"> 
                      <Link href="/tools" legacyBehavior>
                        Login
                      </Link>
                    </div>
                  </button>
                  <button className='bg-gradient-to-l  backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full text-white'>
                    <div className="w-full px-5 py-2 rounded-full items-center justify-center ">
                      <Link href=''>
                      Signup
                      </Link> 
                    </div>
                  </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </Transition>
    </div>
  )
}

export default Sidebar

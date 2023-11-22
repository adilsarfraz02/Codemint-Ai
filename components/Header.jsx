'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar';
import {usePathname} from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import DropDown from './DropDown';
 const Header = () => {
   const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { data: session } = useSession()
  
  return ( 
    <>
      {/* <div className='bg overflow-hidden -z-10 right-0 fixed bg-gradient-to-t from-purple-500 via-purple-500 to-blue-800 rounded-full'></div> */}
      
        <nav className='flex sidebar border-b bg-white dark:bg-black dark:border-gray-200/20 border-zinc-600/40 max-md:px-5 max-sm:px-7 justify-between max-sm:gap-12 py-5 max-md:py-2 px-12 backdrop-blur-md '>
            <div className='max-sm:ml-0'>
              <Link href="/" title='CodeMint' className="flex mt-2 text-center justify-center"> 
            
              <img src="/img/logo.png" width={50} className='mt-3 invert dark:invert-0 object-cover' alt="" />
                <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
                  mint Ai
                </span>
              </Link>
            </div>
            <div className='ml-12 text-center max-md:hidden transition delay-75 mt-4 max-sm:m-0 max-sm:hidden max-md:ml-6'> 
              <ul className='flex mt-2 max-md:gap-8 gap-3 max-sm:4'>
                <li className={`p-3 hover:bg-gray-300 rounded-xl backdrop-blur-xl px-7 transition delay-75 hover:text-pink-500/80 ${pathname === '/tools' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}`} title='Tools'>
                  <Link href="/tools" legacyBehavior>
                      Tools
                  </Link>
                  </li>
                <li className={`p-3 backdrop-blur-xl hover:bg-gray-300 rounded-xl transition delay-75 px-7 hover:text-pink-500/80 ${pathname === '/blogs' ? 'text-pink-500 bg-purple-500/10 rounded-2xl' : ''}`} title='Blogs'>
                  <Link href="/blogs" legacyBehavior>
                    Blogs
                  </Link>
                  </li>
                <li className={`p-3 hover:bg-gray-300 rounded-xl transition delay-75 px-7 hover:text-pink-500/80 ${pathname === '/about' ? 'text-pink-500  bg-purple-500/20 rounded-2xl' : ''}`} title='About'>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className='py-5  flex'>
              {/* <button className='mr-5 max-sm:hidden bg-gradient-to-l opacity-75 hover:opacity-100 backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full'>
                <div className="w-full px-5 py-2 rounded-full items-center justify-center dark:bg-gray-800 bg-black/40 text-white hover:bg-transparent"> 
                  <Link href="/tools" legacyBehavior>
                    Login
                  </Link>
                </div>
              </button> */}
          { session ?
            <div className='items-center flex gap-3 justify-center'>
             <DropDown /> 
             <Sidebar/>
             </div>:
              (
                <>
                <Link href="/login" className='mr-5  bg-gradient-to-l active:bg-violet-700 opacity-75 hover:opacity-100 backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full text-white'>
                <div className="w-full px-5 py-2 rounded-full items-center justify-center ">
                  SignIn
                </div>
              </Link>
                <Sidebar/>
              </>
              )
             }
            </div>
            {/* mobile */}
            
      </nav>
    </>
  )
}

export default Header
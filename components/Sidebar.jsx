'use client'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "react-transition-group";
import Link from 'next/link'
import { RiMenu4Fill } from 'react-icons/ri'
import { Button, Drawer } from 'antd'
import { signOut, useSession } from 'next-auth/react';
const Sidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <main className='md:hidden sidebar dark:bg-black text-center flex items-center delay-100 transition'>
      <RiMenu4Fill onClick={showDrawer}
        className='text-3xl hover:text-pink-500/50 text-center mt-5 max-md:mt-1 cursor-pointer flex items-center' />

      {/* Sidebar */}
      <Drawer className={` w-full sidebar side`} title="" placement="right" onClose={onClose} open={open}>
        <FaTimes onClick={() => setOpen(false)}
          className=' dark:text-white bg-white dark:bg-red-500 text-black text-3xl absolute top-3 bg-gray-50/20 p-2 rounded-full hover:text-black cursor-pointer hover:bg-pink-500' />
        <Link href="/" title='CodeMint' className="flex text-center justify-center">

          <img src="/img/logo.png" width={50} className='mt-3 dark:invert-0 invert object-cover' alt="" />
          <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
            mint Ai
          </span>
        </Link>
        {/* Sidebar links */}
        <nav className="mt-6 px-2 ">

          <ul className='block mx-auto gap-14 mb-12 text-xl text-center'>
            <Link href="/" legacyBehavior>
              <li className={`py-3 mb-2 transition delay-75 bg-zinc-50/10 px-2 rounded-lg hover:text-pink-500/80 ${pathname === '/' ? 'text-pink-500 bg-pink-400/30 rounded-2xl' : ''}  `} title='Tools'>
                Home
              </li>
            </Link>
            <Link href="/tools" legacyBehavior>
              <li className={`py-3 mb-2 transition delay-75 bg-zinc-50/10 rounded-lg px-2 hover:text-pink-500/80 ${pathname === '/tools' ? 'text-pink-500 bg-pink-400/30 rounded-2xl' : ''}  `} title='Tools'>
                Tools
              </li>
            </Link>
            <Link href="/blogs" legacyBehavior>
              <li className={`py-3 mb-2 transition delay-75 bg-zinc-50/10 rounded-lg px-2 hover:text-pink-500 ${pathname === '/blogs' ? 'text-pink-500 bg-pink-400/30 rounded-2xl' : ''}  `} title='Blogs'>
                Blogs
              </li>
            </Link>
            <Link href="/about">
              <li className={`py-3 mb-2 transition delay-75 bg-zinc-50/10 px-2 rounded-lg hover:text-pink-500 ${pathname === '/about' ? 'text-pink-500 bg-pink-400/30 rounded-2xl' : ''}  `} title='About'>
                About
              </li>
            </Link>
          </ul>
          <div className='mx-auto flex justify-center gap-3 max-md:flex-col'>
            <button className='w-full bg-gradient-to-l backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full'>
              <Link href={session ? '/admin' : '/login'} legacyBehavior>
                <div class="w-full px-5 py-2 rounded-full items-center justify-center dark:bg-gray-800 bg-black/40 text-white hover:bg-transparent">
                  {session ? 'Dashboard' : 'Login'}
                </div>
              </Link>
            </button>
            <button className={` bg-gradient-to-l py-2 backdrop-blur-2xl from-pink-500 to-purple-500 p-[2px] max-sm:mt-2 rounded-full text-white 
                                `}>
              {session ? <p onClick={() => signOut()}>
                <span className="w-full px-5 py-2 rounded-full items-center justify-center ">
                  {session ? 'Logout' : 'Signup'}
                </span>
              </p> :
                <Link href='/login'>
                  <div className="w-full px-5  rounded-full items-center justify-center ">
                    {session ? 'Logout' : 'Signup'}
                  </div>
                </Link>}
            </button>
          </div>
        </nav>
      </Drawer>
    </main>
  )
}

export default Sidebar

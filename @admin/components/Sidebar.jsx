import React , {useState} from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import {useSession} from 'next-auth/react'
import Image from 'next/image'
import DashDrop from './DahDropDown'
import { RxDashboard } from 'react-icons/rx'
import {BsPostcardHeart} from 'react-icons/bs'
import { FaToolbox } from 'react-icons/fa'
const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const{data : session} =useSession();

  return (
    <div className='h-[94vh] max-md:flex max-md:flex-col max-md:h-auto max-md:w-full bg-zinc-500/10 backdrop-blur-lg rounded-3xl p-4 w-1/4'>
      <div className='max-sm:ml-0 mt-7'>
              <Link href="/" title='CodeMint' className=" flex text-center justify-center"> 
              <img src="/img/logo.png" width={50} className='mt-3 invert dark:invert-0 object-cover' alt="" />
                <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
                  mint Ai
                </span>
              </Link>
      </div>

      <ul className="dash-links pb-44 max-md:pb-32">
        <li className='bg-black/10 dark:bg-black/80'>
          <Link href="/" className=' flex justify-center items-center gap-3 text-xl'>
          <RxDashboard/><span>Home</span>
          </Link>
        </li>
        <li className='bg-black/10 dark:bg-black/80'>
          <Link href="/blogs" className='flex justify-center items-center gap-3 text-xl'>
          <BsPostcardHeart /><span>Blog Posts</span>
          </Link>
        </li>
        <li className='bg-black/10 dark:bg-black/80'>
          <Link href="/tools" className='flex justify-center items-center gap-3 text-xl'>
           <FaToolbox/><span>Ai Tools</span> 
          </Link>
        </li>
        
      </ul>
      <div className="mx-auto ">
        <DashDrop />
        <h1 className="mx-auto text-center mt-2 text-2xl">
          {session.user.name}
        </h1>
      <p className="text-center text-pink-400">{session.user.email}</p>
      </div>
      {/* logout */}
      <div className="mx-20 mt-2">
        <button className={`w-full py-2 rounded-3xl transition active:bg-red-500/40 focus:bg-purple-500 hover:bg-red-500/40 bg-pink-500 ${loading ? 'opacity-20 cursor-not-allowed' : ''}`}  onClick={()=>{signOut(); setLoading(true)}}>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar

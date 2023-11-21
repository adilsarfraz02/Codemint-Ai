import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import {BsGithub,BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {signIn} from "next-auth/react" 
import {TfiReload} from 'react-icons/tfi'

const back = '< Go back'

const login = () => {
  const [tloading,setTloading] = useState(false);
  const [loading,setLoading] = useState(false);
  const [Gloading, setGloading] = useState(false);
  const [floading,setFloading] = useState(false);

  const {data: session} = useSession();
  const router = useRouter();
  if(!session){
    return (
      <div className='min-h-screen p-6'>
        <div className="w-1/4 absolute h-80 top-1/3 left-1/3 rounded-full blob-form mx-auto -z-10 blur-2xl"></div>
        <Head>
          <title>Signin 🤞- Codemint Ai</title>
        </Head> 
        <Link href="/" className='bg-zinc-500/30 hover:bg-zinc-500 transition-all px-4 py-2 rounded-3xl'>{back}</Link>
  
        <div className="h-[25rem] max-md:h-auto rounded-3xl ronded-xl bg-white/5 backdrop-blur-3xl max-md:w-[100%] py-5  max-xl:w-[60%] w-[30%] mx-auto translate-y-1/3 ring-1 dark:ring-white/20 ring-black/20">
              <div className='max-sm:ml-0 py-2'>
                <Link href="/" title='CodeMint' className="flex text-center justify-center"> 
                <img src="/img/logo.png" width={50} className='mt-1 invert dark:invert-0 object-cover' alt="" />
                  <span className="text-3xl mt-[12px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
                    mint Ai
                  </span>
                </Link>
              </div>
              <h1 className="text-center text-2xl font-bold dark:text-white text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-zinc-800">Login or signup</h1>
              <div className="mt-6 max-md:px-3 px-12">
            <button onClick={() => { signIn('google'); setGloading(true) }} className={`w-full text-center dark:bg-white dark:text-black bg-black text-white  transition py-3 rounded-3xl flex justify-center items-center gap-1 text-base hover:opacity-75 ${Gloading ? 'opacity-30 cursor-not-allowed hover:opacity-30' : ''}`}>
              {Gloading ? <TfiReload className="animate-spin" /> : <FcGoogle className='text-2xl' /> }Continue with Google </button>
                <div  className="flex my-5 justify-between">
                <button onClick={()=> {signIn('github'); setTloading(true)}} className={`ring-1 px-7 rounded-3xl text-2xl text-white py-3 transition bg-black ring-white/20 hover:opacity-75 ${tloading ? 'opacity-30 cursor-not-allowed hover:opacity-30' : ''}`}>
                {tloading ? <TfiReload className="animate-spin" /> : <BsGithub className='text-white' />}
                </button>
                <button onClick={()=>{ signIn('facebook'); setFloading(true)}} className={`ring-1 bg-blue-600 text-2xl text-white transition rounded-3xl px-7 py-3 ring-white/20 hover:opacity-75 ${floading ? 'opacity-30 cursor-not-allowed hover:opacity-30' : ''}`}>
                {floading ? <TfiReload className="animate-spin" /> : <FaFacebookF />}
                </button>
                <button onClick={()=> {signIn('twitter'); setLoading(true)}} className={`ring-1 bg-black text-2xl transition rounded-3xl px-7 py-3 ring-white/20 hover:opacity-75 ${loading ? 'opacity-30 cursor-not-allowed hover:opacity-30' : ''}`}>
               {loading ? <TfiReload className="animate-spin"/> :  <BsTwitter className='text-white'/>}   
                </button>
                </div>
              </div>
                <p className="text-center px-8">
                  By loging or signing up using the options above, you agree to Codemintai's <Link href="/terms&Condition" className='text-blue-500 underline'>Terms & Conditions</Link> and <Link href="/privacyPolicy" className='text-blue-500 underline'>Privacy Policy</Link> .
                </p>
        </div>
      </div>
    )
  }
  else{
    router.push("/admin")
    return(
      <div className='min-h-screen text-4xl -translate-y-1/2 text-center mx-auto'>
        You Are Login in 🤷‍♀️
      </div>
    )
  }
}

export default login

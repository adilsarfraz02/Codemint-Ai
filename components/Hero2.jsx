"use client"
import React ,{useEffect,useRef} from 'react'
import Link from "next/link"
import AboutSection from '../pages/Sections/AboutSec';
import Cta from '../pages/Sections/Cta';
import { useSession } from 'next-auth/react';

const AboutSec = () => {

  const exampleDiv = useRef(null);
  const {data: session} = useSession();

  return (
    <div className=''>
      {/* banner */}
      <section className="p-3 banner w-full text-center bg-black dark:bg-[#bbb] text-[#ccc] dark:text-[#222] -z-10" >
        <Link href="/blogs/1">
        <p className="font-semibold hover:underline delay-75 transition">
          Introducing Codemint ChatBot 🚀 - Read the Blog Post 
        </p>
        </Link>
      </section>
      {/* about Website*/}
      <section className='h-auto '>
        <h3 className='text-center my-12 px-2 flex items-center justify-center'>
          <Link href={session ? "/tools/chatGPT" : '/userNot'}>
          <span className='px-3 py-2 border-2 text-center flex flex-wrap  w-fit rounded-full border-gray-500/30 hover:border-gray-500/50 transition-colors'>Big Codemint ChatGPT Updates Released! 🎉</span>
          </Link>
        </h3>
        <div className="pt-12 max-md:pt-5">
          <h2 className="text-center max-sm:text-xl px-2 text-3xl font-bold dark:text-[#bbb] text-black">
            Code Snippets. Screenshots. Workflow Context.
          </h2>
          <h1  className="max-sm:text-5xl text-7xl my-2 font-extrabold text-center">
            Redefine Atomic Productivity.
          </h1>
          <p className="text-xl mx-48 max-md:mx-3 my-4 text-center">
            we set out on a mission to deeply improve how developers interact with the smallest elements throughout their day-to-day 
            processes with an intelligent code snippet manager.
          </p>
        </div>
        <div ref={exampleDiv}
          className="flex h-[650px] max-md:h-auto max-md:p-3 -z-10 w-3/4 justify-center mx-auto rounded-[50px] p-12 items-center border-2 my-12 border-gray-500/30 hover:border-gray-500/50 transition-colors delay-75">
              <img id="sticky" src='/img/hero.avif' className="w-full h-full rounded-[40px] max-md:rounded-[35px]" alt=""/>
        </div>
      </section>

      <AboutSection />
      <Cta />
    </div>
  )
}

export default AboutSec
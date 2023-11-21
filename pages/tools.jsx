import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { tools } from './api/Tools/ToolsPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSession, signIn, signOut } from "next-auth/react"

const Tools = () => {  
  const { data: session } = useSession()
  return (
    <>
      <Header/>
      <Head>
        <title>Tools | CodemintAi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="">
        <h1 className="text-center text-5xl max-md:text-3xl my-5 mt-12">
          CREATE STUNNING VISUALS
          <span className='text-orange-500'> IN SECONDS</span>
        </h1>
        <div id='tools' className="grid  grid-cols-3 mt-20 gap-8 max-sm:px-4 mx-auto px-32 max-md:grid-cols-2 max-sm:grid-cols-1">
          {tools.map((tool) => (
            <>
             <Link href={session ? tool.link : '/userNot'} className=' overflow-hidden shadow-2xl block relative inc-800/80 rounded-3xl'>
             <img
                src={tool.video}
                loop='true'
                autoPlay='true'
                className=' rounded-b-3xl w-[480px] h-[280px] bg-gray-300 video-tool'  
              />
              <div className="px-5 py-2">
                <h1 className="text-2xl text-purple-500 font-semiblod">{tool.title}</h1>
              </div>
              </Link>
            </>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Tools
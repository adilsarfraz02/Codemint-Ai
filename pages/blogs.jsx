'use client'
import React from 'react'
import Head from 'next/head'
import { posts } from './api/blogpost/posts';
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Blogs | Codemintai</title>
      </Head>
      {/* gradient Colors  blob*/}
      {/* <div className="w-1/3 h-96 rounded-full absolute bg-gradient-to-tr from-purple-500 right-0 via-pink-500 blur-3xl -z-10"></div> */}
      <div className="min-h-screen py-8 transition-all delay-100">
        <h1 className="text-5xl text-center font-bold mb-4">Codemint-Ai Latest Updates</h1>
        <p className="text-center text-xl opacity-75 relative ">All the latest news about Codemintai.</p>
        <ul className=' grid grid-cols-3 px-28 mt-12  z-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-12 max-[1000px]:px-6 max-sm:px-6 gap-3'>
          {posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id} className="mb-4 px-7 backdrop-blur-lg shadow-xl w-full border rounded-xl border-slate-500/20">
              <a>
                <p className="opacity-90 hover:opacity-75 hover:text-blue-500 py-4 text-lg font-bold tracking-wide my-2 hover:underline">{post.title}</p>
                  <img src={post.img} className="w-full bg-gray-400 rounded-2xl object-cover h-52" alt="no image" />
              </a>
              <div className="flex justify-between text-center py-4 px-1">
              <p className="opacity-80 font-semibold">
               {post.date}
              </p>
              <img src={post.user} className="w-8 bg-gray-400 rounded-2xl h-8" alt="" />
              </div>
            </Link>
          ))}
        </ul>
      </div>
        
        {/* gradient blob */}
        <div className="w-1/3 rounded-full -z-10 h-96 blur-2xl absolute bg-purple-900/40  left-0 top-1/2"></div>
      <Footer/>      
    </>
  )
}

export default Blogs
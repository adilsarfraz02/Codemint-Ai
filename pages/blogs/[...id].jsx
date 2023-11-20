import React from 'react';
import { useRouter } from 'next/router';
import { posts } from '../api/blogpost/posts';
import Head from 'next/head';
import Link from 'next/link';
import {HiOutlineExternalLink} from 'react-icons/hi'
import Footer from '../../components/Footer';
const BlogPost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find((post) => post.id === parseInt(id))

  if (!post) {
    return <div className='h-[75vh] text-center grid place-content-center'>
           <div className=' text-center w-full text-6xl font-bold drop-shadow-2xl'>
        Post not found! 🤷‍♀️</div>
       <div className="flex justify-center w-1/2 ml-[25%]">
        <Link className='from-pink-500 hover:bg-purple-700 bg-gradient-to-tr to-purple-500 mt-5 w-fit mx-auto text-center px-4 py-2 rounded-xl' href="/">Home</Link>
        <Link className='from-pink-500 hover:bg-purple-700 bg-gradient-to-tr to-purple-500 mt-5 w-fit mx-auto text-center px-4 py-2 rounded-xl' href="/blogs">Blogs</Link>
        <Link className='from-pink-500 hover:bg-purple-700 bg-gradient-to-tr to-purple-500 mt-5 w-fit mx-auto text-center px-4 py-2 rounded-xl' href="/login">Login</Link>
       </div>
       </div>
      ;
  }

  return (
    <div className=" min-h-screen py-8 max-md:py-2 px-10 transition-all delay-100">
      <Head>
        <title>{post.title} | Codeminai</title>
      </Head>
      <div className='max-sm:ml-0  mb-6'>
              <Link href="/" title='CodeMint' className="flex text-center justify-center"> 
            
              <img src="/img/logo.png" width={50} className='mt-3 invert dark:invert-0 object-cover' alt="" />
                <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
              mint Ai
                </span>
              </Link>
            </div>
      <h1 className='flex my-2 text-pink-500 modes'>
        <Link href="/" legacyBehavior className=' text-gray-500 opacity-80 hover:text-purple-500 hover:underline hover:opacity-95 active:opaity-100 active:text-purple-500'>
          Home
        </Link>&nbsp;/&nbsp;
        <Link href="/blogs" legacyBehavior className='text-gray-500 opacity-80 hover:text-purple-500 hover:underline hover:opacity-95 active:opaity-100 active:text-purple-500'>
          Blogs
        </Link>&nbsp;/&nbsp;
        <Link href={`/blogs/${post?.id}`} legacyBehavior className='hover:text-purple-500 hover:underline hover:opacity-80 text-opacity-100 active:opaity-100'>
        {post?.title}
        </Link>
      </h1>
      <div className="mx-auto max-md:mx-0 flex gap-12 max-md:block ">
      
        <div className=" max-md:w-full w-full h-auto max-md: ">
          <div className="float-right ml-5 max-sm:mb-5 max-md:w-full w-1/2 h-auto">
          <img src={post.img} className='rounded-3xl ' alt="" />
        </div>
          <h1 className="text-5xl mt-0 max-md:mb-4 max-md:mt-0 font-bold  drop-shadow-2xl dark:drop-shadow-2xl">{post.title}</h1>
          <div className="text-center flex items-center my-3">
            <span className='flex items-center gap-1'>
              <img src={post.user} alt="" className="w-12  rounded-full h-12" />&nbsp;<span className='text-blue-500 text-xl'>{post.author}</span> <HiOutlineExternalLink /></span>
          </div>
          <div className="text-lg first-letter:text-5xl first-letter:uppercase first-letter:text-blue-500 text">{post.content}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta distinctio quae dolorem non vero. Et asperiores blanditiis quos esse consequatur facere nisi,
            repudiandae eligendi dolore sit impedit quibusdam repellendus sed!         
           </div>
           <div className='flex gap-2 my-5 justify-between'>
            <div className="font-bold"><span className="text-purple-500">Posted on: </span>{post.date}</div> 
            <div className="">
              <Link className='bg-gradient-to-tr from-purple-500 to-pink-500 px-4 py-3 rounded-2xl hover:bg-purple-500 btnsingle' href={post.pageUrl}>{post.btn}</Link>
            </div>
            </div>
            <div className="text-lg mt-4">
             <span className="text-blue-500 text-xl">Description: </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
            
              </p>
              <br />
              <p className='indent-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus illum eius velit laboriosam omnis quaerat 
                corporis tempore eum, harum accusantium excepturi. Voluptatibus dolor animi aut deserunt eius vitae fugit.
            
              </p>
          </div>
        </div>

      </div>
     
    <Footer/>
    </div>
  );
};

export default BlogPost;

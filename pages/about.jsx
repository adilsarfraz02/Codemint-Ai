import Head from 'next/head'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {HiOutlineExternalLink} from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {

  return (
    <div className='h-auto'>
      <Head>
        <title>About Us | Codemintai</title>
      </Head>
      <Header/>
        <>
          <h1 className="text-center text-4xl pt-6 font-bold tracking-wider">
            About <span className='bg-clip-text text-transparent bg-gradient-to-tr from-purple-600 to-pink-600'>Codemint</span> 
          </h1>
          <h2 className='text-center text-3xl pt-10 font-semibold'>How it all started</h2>
          <div className="w-full mx-auto flex pt-3">
            <span className="text-center w-20 h-1.5 rounded-full bg-gradient-to-tr from-purple-900 via-purple-500 to-pink-600 mx-auto"></span>
          </div>
        </>
        {/* Started Section */}
        <div className="w-full ax-md:text-center px-28 text-lg mt-5 flex max-md:block max-sm:px-7 h-auto">
          <div className="w-1/2 pr-3 max-md:w-full">
            <h1 className="font-semibold tracking-wide py-3 first-letter:text-3xl">
            <span className='text-purple-500 font-bold'>Codemint AI</span> was born from a shared passion for harnessing the power of artificial intelligence to drive innovation and solve complex 
          challenges.
            </h1>
          Our journey began when our co-founders ,
          <a target='_blank' href='https://www.linkedin.com/in/adilsarfraz02/' className='underline hover:text-purple-500 active:text-pink-500'>ADil Sarfraz </a>
          &nbsp;and <a href="https://www.linkedin.com/in/muhammad-azhan-089169289/" target='_blank' className='hover:text-purple-500 underline active:text-pink-500 '>Azhan Saeed</a>, both experienced professionals in the field of AI, crossed
          paths at a technology conference. They shared a vision of making AI accessible and beneficial to businesses and individuals alike. 
          Inspired by the transformative potential of AI, they decided to combine their expertise and create Codemint AI. The company's 
          inception was marked by countless hours of research, development, and collaboration, all fueled by the desire to 
          push the boundaries of what AI could achieve. From those early days, Codemint AI has grown into a leading force in the
            AI industry, committed to delivering cutting-edge solutions and driving the future of artificial intelligence.
          </div>
          <div className="w-1/2 pl-3 mt-28 max-md:mt-5 max-md:w-full">
            <p className=''>CodeMint is a platform that allows students to solve programming problems in an interactive way, with the help of our mentors and experienced program
              </p>
              <p><span className='text-purple-500 font-bold'>Codemintai</span>, is a platform that helps you to learn
              programming languages, and also help you in building your projects.</p>
              <p>We have created this website for the sole purpose of helping people who are new to coding or just want to brush up their skills by learning
              </p>  
          </div>
        </div>
        {/* Mission */}
        <div className="W-full h-auto flex my-12">
          <div className="w-[20%] mx-auto text-9xl font-serif rotate-180 mt-20 flex">
            <h1 className='pt-15 mt-20 bg-clip-text bg-gradient-to-tr from-pink-500 float-right to-purple-500 text-transparent text-center'>,,</h1>
          </div>

            <div className="w-[60%] max-md:w-[85%]">
            <h1 className="text-5xl font-bold text-center pt-20 mission">
            Our  Mission
            </h1>
              <p className="text-center max-md:text-lg text-2xl p-1 font-semibold">
                To provide a platform where&nbsp;
                <span className="text-transparent bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text">developers can learn</span> new technologies.
              </p>
            </div>
            <div className="w-[20%] flex">
            <h1 className='pt-5 max-sm:pt-14 text-9xl font-serif mt-14 bg-clip-text bg-gradient-to-tr from-pink-500 float-left to-purple-500 text-transparent text-center'>,,</h1>
            </div>
        </div>
        {/* Join Us */}
        <div className="flex my-12 max-md:mb-24">
          <div className="w-[80%] flex mx-auto h-[250px] bg-gradient-to-tr dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 from-pink-500/80 via-purple-500/20 to-pink-500/50  backdrop-blur-3xl drop-shadow-xl rounded-2xl">
            <div className="w-[10%] h-full left"></div> 
            <div className="w-[80%] h-full text-center font-bold text-xl">
            <p className="py-3 pt-14 opacity-75">
              If this sounds like a company you would like to work for, join our Team and design it with us <span className="text-2xl">👍</span>
              </p>
              <button onMo className='mt-8 px-5 py-3 focus:opacity-75 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-purple-500 bg-purple-800 tracking-wider text-[#fbfbff] btn-shdow rounded-xl'>
              <a target='_blank' href="https://www.linkedin.com/company/99840227"> Join our team</a>
              </button>      
            </div>   
            <div className="w-[10%] h-full"> </div>      
          </div>  
        </div>
        {/* MAP Section */}
        <div className="w-full h-auto">
          <div className="w-[80%] max-sm:shadow-xl  h-[500px] mx-24 max-sm:mx-0 max-sm:w-full flex max-sm:block max-sm:h-auto -z-10">
            <div className="w-[30%] h-full max-sm:px-4 relative z-10 max-sm:z-0 max-sm:w-full">
              <div className="h-auto dark:bg-zinc-900 max-sm:pl-12 top-1/4 max-sm:top-0 max-sm:relative max-sm:shadow-none absolute max-sm:w-full px-3 py-6 max-sm:pb-14 shadow-2xl bg-white dark:inc-950 rounded-xl max-sm:rounded-b-none w-full ml-12 max-sm:m-0 text-center">
                <h1 className="text-2xl py-4 font-bold max-sm:text-left tracking-wider">
                  Feel free to reach out
                </h1>
                <a href='tel:+92184469941' className="text-left flex py-3 text-lg ml-2">
                  <BsFillTelephoneFill className='mt-1 text-purple-500'/>&nbsp;+92184469941
                </a>
                <a href='mailto:codemint@pupharma.online' className="text-left flex py-3 text-lg ml-2">
                  <FaLocationDot className='mt-1 text-purple-500'/>&nbsp;Pu Pharma, Lahore Pakistan.
                </a>
                <button className='text-xl focus:ring-2 focus:outline-none focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 focus:-scale-2 z-10 max-sm:text-left active:bg-purple-500 float-left py-3 mb-4 rounded-xl text-white bg-gradient-to-tr from-purple-500 to-pink-500 px-4'>
                  <a href="mailto:codemint@pupharma.online?subject=ContactUs&body=hello Codemint">Contact Us</a></button>
              </div>
            </div>
            <div className="w-[70%] h-full max-sm:w-full max-sm:px-4 rounded-2xl  dark:shadow-white max-sm:rounded-t-none">
              <div className="p-3 max-sm:rounded-t-none bg-white dark:inc-950 rounded-2xl h-full mx-auto relative">
                <div className="bg-purple-500 max-md:hidden top-[215px] left-[365px] text-white absolute z-10 rounded-md shadow-xl shadow-purple-500/50 px-3 py-2 ">
                  <a href='https://www.google.com/maps/place/PU+Pharma/@31.434309,74.339535,16z/data=!4m6!3m5!1s0x391907f39f867967:0x848c45dfe41cfff1!8m2!3d31.4343086!4d74.3395347!16s%2Fg%2F11tsdm9yv_?hl=en&entry=ttu' target='_blank'>
                  <FaLocationDot className='mt-1 text-white'/> CodeMint
                  </a>
                </div>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.267090865985!2d74.33695977551793!3d31.43431315138884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907f39f867967%3A0x848c45dfe41cfff1!2sPU%20Pharma!5e0!3m2!1sen!2s!4v1694635468742!5m2!1sen!2s" className='w-full hue-rotate-60 h-full max-md:h-60 rounded-xl' loading="lazy">
            </iframe>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
  )
}

export default About
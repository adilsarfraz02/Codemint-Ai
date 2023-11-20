import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className="text-gray-600 body-font">
  <div className="container px-12 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Link href="/" title='CodeMint' className="flex text-center justify-center"> 
                        {/* <span className="text-transparent text-2xl font-mono text-center flex justify-center bg-clip-text bg-gradient-to-l backdrop-blur-2xl from-pink-500 to-purple-500 ">
                      Codemintai
                    </span> */}
                    <img src="/img/logo.png" className="invert dark:invert-0" width={50} alt="" />
                    <span className="text-3xl mt-2 bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
              mint Ai
            </span>
              </Link>    
            </div>
    <p className="text-sm text-zinc-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200/50 sm:py-2 sm:mt-0 mt-4">© 2023 CodeMintai —
      <a href="https://www.facebook.com/profile.php?id=100014757152336" className="text-zinc-900 dark:text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">@ADil Sarfraz</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
      <a className="dark:text-gray-200  hover:text-purple-500" href='https://www.facebook.com/profile.php?id=100014757152336' target='_blank'>
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 dark:text-gray-200 hover:text-purple-500" href='https://twitter.com/adilsarfr00' target='_blank'>
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 dark:text-gray-200 hover:text-purple-500" href='https://www.instagram.com/a4adilsarfraz' target='_blank'>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 dark:text-gray-200 hover:text-purple-500" target='_blank' href='https://www.linkedin.com/in/adilsarfraz02/'>
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
  <div className="text-center mb-2 ">
    <Link href="/privacyPolicy" className='active:text-pink-500 hover:text-pink-500 border-r-2  border-gray-500'>
    Privacy & Policy &nbsp;
    </Link>
    <Link href="/terms&Condition" className='active:text-pink-500 hover:text-pink-500'>
    &nbsp; Terms & Conditions
    </Link>
  </div>
</footer>  )
}

export default Footer
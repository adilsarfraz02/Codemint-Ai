import React from 'react'

const PageLoader = () => {
  return (
    <div className='h-screen overflow-hidden w-full backdrop-blur-3xl place-content-center grid transition items-center'>
      <div className='m-auto'>
            <span title='CodeMint' className="flex animate-pulse"> 
                
                <img src="/img/logo.png" width={50} className='mt-3  invert dark:invert-0 object-cover' alt="" />
                <span className="text-3xl mt-[21px]  bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
                  mint Ai
                </span>
            </span>
        </div>
    </div>
  )
}

export default PageLoader

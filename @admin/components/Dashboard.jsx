import React from 'react'
import { IoNotifications } from 'react-icons/io5'
import toast from 'react-hot-toast'
const Dashboard = () => {
  const notification = () => {
    toast.success('No notification 🤞')
  }
  return (
    <div className='w-[75%] max-md:hidden block h-[94vh] border-dashed border-[3px] dark:border-zinc-50/20 bg-zinc-500/10 border-black/50 rounded-3xl p-4'>
      <div className="w-full mt-2 items-center justify-between flex text-xl px-4 rounded-3xl h-28 dark:bg-black/50 bg-zinc-500/10 ">
        <h1 className="text-pink-500 font-semibold">Dashboard</h1>
          <div onClick={notification} className='relative hover:bg-red-500 p-1 hover:cursor-pointer rounded-full'>
            <IoNotifications className='text-xl'/>
            <span class="absolute top-0 right-0 px-3 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">2</span>
          </div>
      </div>
      <div className="flex flex-wrap mx-4 gap-4 my-5">
        <div className="w-1/3 h-48 dark:bg-black/50 bg-zinc-500/10  rounded-2xl border-dashed border-black/50 dark:border-gray-50/20 text-black dark:text-gray-50/30 text-4xl items-center text-center flex justify-center border-4">+</div>
        <div className="w-3/5 h-48 dark:bg-black/50  bg-zinc-500/10 rounded-2xl border-dashed border-black/50 dark:border-gray-50/20 text-black dark:text-gray-50/30 text-4xl items-center text-center flex justify-center border-4">+</div>
      </div>
      <div className="flex flex-wrap mx-4 gap-4 my-5">
        <div className="w-3/5 h-48 dark:bg-black/50 bg-zinc-500/10  rounded-2xl border-dashed border-black/50 dark:border-gray-50/30 text-black dark:text-gray-50/30 text-4xl items-center text-center flex justify-center border-4">+</div>
        <div className="w-1/3  h-48 dark:bg-black/50 bg-zinc-500/10 rounded-2xl border-dashed border-black/50 dark:border-gray-50/30 text-black dark:text-gray-50/30 text-4xl items-center text-center flex justify-center border-4">+</div>
      </div>
    </div>
  )
}

export default Dashboard

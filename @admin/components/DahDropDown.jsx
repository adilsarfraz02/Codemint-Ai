'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { PiUserCircleDuotone } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'
import {IoCog} from 'react-icons/io5'
import {HiOutlineLogout} from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import {BiLogInCircle} from 'react-icons/bi'
import { useRouter } from 'next/router'
import { SYMBOL_CLEARED_COOKIES } from 'next/dist/server/api-utils'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashDrop() {
    const { data: session } = useSession();
    const router=useRouter()
  return (
    <Menu as="div" className="relative inline-block  text-left">
      <div className='px-20'>
        <Menu.Button className="inline-flex  justify-center mx-12 max-md:m-0 rounded-full items-center focus-within:ring-4 bg-gray-200 focus-within:ring-purple-500">
                  <img src={session.user.image} width={52} height={52} className='mx-auto flex items-center rounded-full' alt="user"
                      title={session.user.name} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute max-md:ml-0 left-0 z-10 ml-32 -mt-48 w-60 origin-top-right rounded-md bg-white/80 dark:bg-black/80 backdrop-blur-xl blurbg shadow-lg ring-1 ring-black dark:ring-white/10 ring-opacity-10 focus:outline-none">
          <div className="py-2 gap-5 block px-2">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-300 backdrop-blur-2xl shadow-md text-pink-500/80' : '',
                    'grid grid-cols-1 transition-colors gap-1 px-2 py-2 w-full rounded-md'
                  )}
                >
                    <span className='font-semibold text-base w-full text-purple-500'>signed as:</span>           
                    <span className="flex gap-1 items-center"><PiUserCircleDuotone className='text-center text-3xl first-letter:uppercase'/>{session.user.email}</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/blogs"
                  className={classNames(
                    active ? 'bg-gray-300 backdrop-blur-2xl shadow-md text-pink-500/80' : '',
                    'grid grid-cols-1 transition-colors gap-1 px-2 py-2 w-full rounded-md'
                  )}
                >
                    <span className="flex gap-1 items-center"><RxDashboard className=' text-center text-3xl'/> Blogs Post</span>
                </Link>
              )}
            </Menu.Item>           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
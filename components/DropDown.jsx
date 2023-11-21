import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { PiUserCircleDuotone } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'
import {IoCog} from 'react-icons/io5'
import {HiOutlineLogout} from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
    const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className=''>
        <Menu.Button className="inline-flex w-full  justify-center rounded-full focus-within:ring-4 bg-gray-200 focus-within:ring-purple-500">
                  <img src={session.user.image} width={52} height={52} className='rounded-full' alt="user"
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
        <Menu.Items className="absolute right-0 z-10 mt-1 w-60 origin-top-right rounded-md bg-white/80 dark:bg-black/80 backdrop-blur-xl blurbg shadow-lg ring-1 ring-black dark:ring-white/10 ring-opacity-10 focus:outline-none">
          <div className="py-2 gap-5 block px-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-300 backdrop-blur-2xl shadow-md text-pink-500/80' : '',
                    'grid grid-cols-1 transition-colors gap-1 px-2 py-2 w-full rounded-md'
                  )}
                >
                    <span className='font-semibold text-base w-full text-purple-500'>signed as:</span>           
                    <span className="flex gap-1 items-center"><PiUserCircleDuotone className='text-center text-3xl'/> {session.user.email}</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/admin"
                  className={classNames(
                    active ? 'bg-gray-300 backdrop-blur-2xl shadow-md text-pink-500/80' : '',
                    'grid grid-cols-1 transition-colors gap-1 px-2 py-2 w-full rounded-md'
                  )}
                >
                    <span className="flex gap-1 items-center"><RxDashboard className=' text-center text-3xl'/> Dashboard</span>
                </Link>
              )}
            </Menu.Item>          
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={() => signOut()}
                className={ classNames(
                    active ? 'bg-red-200 backdrop-blur-2xl shadow-md cursor-pointer text-red-500' : '',
                    'grid grid-cols-1 transition-colors gap-1 px-2 py-2 w-full rounded-md'
                  )}
                >
                    <span className="flex gap-1 items-center"><IoCog className='text-center text-3xl'/> Logout</span>
                </a>
              )}
            </Menu.Item>  
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
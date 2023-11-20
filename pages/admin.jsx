import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Admin from '../@admin/Admin'
const back = '< Go back'
const UserNot = () => {
    const [home, setHome] = useState(false);
    const [login, setLogin] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {

        return (
            <div className=' h-screen w-full grid place-content-center overflow-hidden'>
                <div className="w-1/4 delay-700 transition translate-x-1/2 rounded-full -z-10 h-80 blur-2xl absolute bg-gradient-to-bl from-pink-500/40 to-purple-900/40 left-1/3 top-1/4"></div>
                <Link href="/tools" className='dark:bg-zinc-700/50 bg-zinc-400 absolute mt-5 ml-5 hover:opacity-80 transition-all w-fit px-4 py-2 rounded-3xl'>{back}</Link>
                <h1 className="text-3xl mx-auto text-center ">Please Login Or Signup to Use <span className='text-purple-500 font-bold'>Dashboard</span> ✨</h1>
                <div className="flex justify-center mt-3 gap-3">
                    <Link href="/" onClick={() => { setHome(true) }} className={`dark:bg-white bg-black text-white text-xl dark:text-black py-2 rounded-full px-5 hover:opacity-80 ${home ? 'cursor-not-allowed opacity-40' : ''}`}>Home</Link>
                    <Link onClick={() => { setLogin(true) }} href="/login" className={`dark:bg-white text-xl bg-black text-white dark:text-black py-2 rounded-full px-5 hover:opacity-80 ${login ? 'cursor-not-allowed opacity-40' : ''}`}>Login Now </Link>
                </div>
            </div>
        )
    } else {
        return (
            <Admin />
        )
    }
}

export default UserNot

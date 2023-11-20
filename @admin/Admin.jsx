import React from 'react'
import {useSession} from 'next-auth/react'
import Head from "next/head"
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const Admin = () => {
 

  return (
    <div className=''>
      <Head>
        <title>Admin ✨| Codemint</title>
      </Head>
        <section className="min-h-full px-14 py-5 w-full flex gap-6">
          <Sidebar />
          <Dashboard />
        </section>
    </div>
  )
}

export default Admin

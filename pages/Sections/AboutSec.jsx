import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import ToolsSec from './ToolsSec'
const AboutSection = () => {
  return (
    <main>
    <ToolsSec />
      <h1 className="text-center mt-20 mb-8 text-5xl font-sans text-purple-500 font-bold ">Top Feedback</h1>

      <div className="flex  flex-col items-center w-full gap-6 px-12 md:flex-row md:mb-0 flex-between">
        <div className="shadow-2xl shadow-gray-50/10 border border-gray-200/10 hover:-translate-y-4 delay-150 transition-all mx-auto rounded-xl p-4 py-12 px-4">
          <p className="text-gray-600 items-center text-xl dark:text-white">
            <span className="text-2xl font-mono font-bold text-indigo-500">
              “&nbsp;
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span className="text-2xl font-bold font-mono text-indigo-500">
              &nbsp;”
            </span>
          </p>
          <div className="flex gap-2 -z-10 items-center mt-4">
            <a target="_blank" className="relative block">
              <img alt="profil" src="https://img.playbook.com/t13-TASRy_OG9bcHvXuWQotWlpYkrM-6Gyt_m2Xg2ao/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzczNmY2NDg0/LTViMzYtNDdhYy1h/NWNmLTEyNzRhNzMw/Y2Y1Nw" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <Link legacyBehavior href='https://www.instagram.com/b4bilalsar/' className="flex flex-col justify-between ml-2">
              <a target="_blank" rel="noopener noreferrer">
                <span target='_blank' className="text-base dark:hover:text-white hover:text-black transition-colors hover:underline items-center flex font-semibold text-indigo-500">
                  Bilal Sarfraz&nbsp;<FiExternalLink />
                </span>
                <span className="flex  text-xs dark:text-gray-400">
                  Founder of Pu Pharma
                </span>
              </a>
            </Link>

          </div>
        </div>
        <div className="shadow-2xl shadow-gray-50/10 border border-gray-200/10 transition hover:-translate-y-4 delay-150  mx-auto rounded-xl p-4 py-12 px-4">
          <p className="text-gray-600 items-center text-xl dark:text-white">
            <span className="text-2xl font-mono font-bold text-indigo-500">
              “&nbsp;
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span className="text-2xl font-bold font-mono text-indigo-500">
              &nbsp;”
            </span>
          </p>
          <div className="flex gap-2 items-center mt-4">
            <a target="_blank" className="relative block">
              <img alt="profil" src="https://img.playbook.com/Saekn0hYvnorzmIL6fVilOz4b0x9A6JY2nIWKYelZh8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q4NjdlMjRm/LWU5M2QtNDY2NC04/ZTQ2LTFkYTI0MGMw/ZGE0ZQ" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <Link legacyBehavior href='https://www.instagram.com/a4adilsarfraz/' className="flex flex-col justify-between ml-2">
              <a target="_blank" rel="noopener noreferrer">
                <span target='_blank' className="text-base dark:hover:text-white hover:text-black transition-colors hover:underline items-center flex font-semibold text-indigo-500">
                  ADil Sarfraz&nbsp;<FiExternalLink />
                </span>
                <span className="flex  text-xs dark:text-gray-400">
                  Full Stack Developer - Codemintai
                </span>
              </a>
            </Link>

          </div>
        </div>
        <div className="shadow-2xl shadow-gray-50/10 border border-gray-200/10 hover:-translate-y-4 delay-150 transition-all mx-auto rounded-xl p-4 py-12 px-4">
          <p className="text-gray-600 items-center text-xl dark:text-white">
            <span className="text-2xl font-mono font-bold text-indigo-500">
              “&nbsp;
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span className="text-2xl font-bold font-mono text-indigo-500">
              &nbsp;”
            </span>
          </p>
          <div className="flex gap-2 items-center mt-4">
            <a target="_blank" className="relative block">
              <img alt="profil" src="https://img.playbook.com/mr6Mn3hPv1x5rcL9iJlZlojarS6Lrkntf4DieFMQmlk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzAzYjEwMGRm/LTcxZWItNDQxOS05/OWM5LWQzOTE3ZTRj/MjgzYQ" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <Link legacyBehavior href='https://www.instagram.com/azhansaeed/' className="flex flex-col justify-between ml-2">
              <a target="_blank" rel="noopener noreferrer">
                <span target='_blank' className="text-base dark:hover:text-white hover:text-black transition-colors hover:underline items-center flex font-semibold text-indigo-500">
                  Azhan Saeed&nbsp;<FiExternalLink />
                </span>
                <span className="flex  text-xs dark:text-gray-400">
                  Frontend developer
                </span>
              </a>
            </Link>

          </div>
        </div>
      </div>
    </main>


  )
}

export default AboutSection

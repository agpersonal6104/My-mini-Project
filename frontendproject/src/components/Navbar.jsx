'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const path = usePathname();
  console.log(path);
  
  return (
    <div className='h-[11vh]'>
  {/* ========== HEADER ========== */}
  <header className="z-50 flex flex-wrap w-full bg-white border-b border-gray-200 md:justify-start md:flex-nowrap">
    <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-x-1">
        <a
          className="flex-none text-xl font-semibold text-black focus:outline-none focus:opacity-80"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>
        {/* Collapse Button */}
        <button
          type="button"
          className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          id="hs-header-base-collapse"
          aria-expanded="false"
          aria-controls="hs-header-base"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-header-base"
        >
          <svg
            className="hs-collapse-open:hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={3} x2={21} y1={6} y2={6} />
            <line x1={3} x2={21} y1={12} y2={12} />
            <line x1={3} x2={21} y1={18} y2={18} />
          </svg>
          <svg
            className="hidden hs-collapse-open:block shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
        {/* End Collapse Button */}
      </div>
      {/* Collapse */}
      <div
        id="hs-header-base"
        className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block "
        aria-labelledby="hs-header-base-collapse"
      >
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <div className="grow">
              <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <Link
                  className={"flex items-center p-2 text-sm text-gray-800 rounded-lg "+ ( path === '/' ? 'bg-gray-200' : 'bg-white')}
                  href="/"
                  aria-current="page"
                >
                  <svg
                    className="block shrink-0 size-4 me-3 md:me-2 md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  Landing
                </Link>
                
                <Link
                  className={"flex items-center p-2 text-sm text-gray-800 rounded-lg "+ ( path === '/createBlog' ? 'bg-gray-200' : 'bg-white')}
                  href="/createBlog"
                >
                  <svg
                    className="block shrink-0 size-4 me-3 md:me-2 md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Create Blog
                </Link>
                <Link
                  className={"flex items-center p-2 text-sm text-gray-800 rounded-lg "+ ( path === '/aboutUs' ? 'bg-gray-200' : 'bg-white')}
                  href="/aboutUs"
                >
                  <svg
                    className="block shrink-0 size-4 me-3 md:me-2 md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width={20} height={14} x={2} y={6} rx={2} />
                  </svg>
                  About Us
                </Link>
                <Link
                  className={"flex items-center p-2 text-sm text-gray-800 rounded-lg "+ ( path === '/ContactUs' ? 'bg-gray-200' : 'bg-white')}
                  href="/contactUs"
                >
                  <svg
                    className="block shrink-0 size-4 me-3 md:me-2 md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  Contact us
                </Link>
              </div>
            </div>
            <div className="my-2 md:my-0 md:mx-2">
              <div className="w-full h-px bg-gray-100 md:w-px md:h-4 md:bg-gray-300" />
            </div>
            {/* Button Group */}
            <div className=" flex flex-wrap items-center gap-x-1.5">
              <Link
                className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-purple-700 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                href="/login"
              >
                Sign in
              </Link>
              <Link
                className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-purple-700 text-white hover:bg-purple-900 focus:outline-none focus:bg-purple-900 disabled:opacity-50 disabled:pointer-events-none"
                href="/signup"
              >
                Get started
              </Link>
            </div>
            {/* End Button Group */}
          </div>
        </div>
      </div>
      {/* End Collapse */}
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
  {/* Nav */}
  <nav className="bg-white border-2 border-gray-400 border-bottom">
    <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-x-3">
        <div className="grow">
          <span className="font-semibold text-gray-800 whitespace-nowrap">
            My project
          </span>
        </div>
        <button
          type="button"
          className="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100"
          data-hs-collapse="#hs-nav-secondary"
          aria-controls="hs-nav-secondary"
          aria-label="Toggle navigation"
        >
          Overview
          <svg
            className="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      <div
        id="hs-nav-secondary"
        className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
      >
        <div className="flex flex-col py-2 sm:py-0 sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
          <a
            className="text-sm font-medium hover:text-purple-700 focus:outline-none focus:text-purple-700"
            href="#"
          >
            Overview
          </a>
          <a
            className="text-sm font-medium text-gray-800 hover:text-purple-700 focus:outline-none focus:text-purple-700"
            href="#"
          >
            Features
          </a>
          <a
            className="text-sm font-medium text-gray-800 hover:text-purple-700 focus:outline-none focus:text-purple-700"
            href="#"
          >
            Platforms
          </a>
          <a
            className="text-sm font-medium text-gray-800 hover:text-purple-700 focus:outline-none focus:text-purple-700"
            href="#"
          >
            Pricing
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* End Nav */}
</div>

  )
}

export default Navbar;
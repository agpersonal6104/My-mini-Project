'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const path = usePathname();
  console.log(path);
  
  return (
    <div className='h-[7vh]'>
  {/* ========== HEADER ========== */}
  <header className="z-50 flex flex-wrap w-full py-3 text-sm bg-blue-600 sm:justify-start sm:flex-nowrap sm:py-0">
    <nav
      className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <Link
          className="flex-none text-xl font-semibold text-white"
          href="/"
          aria-label="Brand"
        >
          Brand
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-sm font-semibold text-white border rounded-lg hs-collapse-toggle size-9 gap-x-2 border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="flex-shrink-0 hs-collapse-open:hidden size-4"
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
              className="flex-shrink-0 hidden hs-collapse-open:block size-4"
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
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
      >
        <div className="flex flex-col py-2 sm:flex-row sm:items-center sm:justify-end md:py-0 sm:ps-7">
          <Link
            className="py-3 font-medium text-white ps-px sm:px-3"
            href="/"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            className={"py-3 font-medium ps-px sm:px-3 "+ (path === '/' ? 'text-white' : 'text-white/80') }
            href="#"
          >
            Account
          </Link>
          <Link
            className="py-3 font-medium ps-px sm:px-3 text-white/80 hover:text-white"
            href="/aboutUs"
          >
            About Us
          </Link>
          <Link
            className="py-3 font-medium ps-px sm:px-3 text-white/80 hover:text-white"
            href="/contactUs"
          >
            Contact Us
          </Link>
              
          <Link
            className={"flex items-center py-2 font-medium gap-x-2 sm:border-s sm:border-white/30 md:py-0 sm:my-6 sm:ps-6 "+ (path === '/' ? 'text-white' : 'text-white/80')}
            href="/login"
          >
            <svg
              className="flex-shrink-0 size-4"
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
            Log in
          </Link>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
  {/* ========== MAIN CONTENT ========== */}
  <main id="content">
    <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* your content goes here ... */}
    </div>
  </main>
  {/* ========== END MAIN CONTENT ========== */}
</div>

  )
}

export default Navbar;
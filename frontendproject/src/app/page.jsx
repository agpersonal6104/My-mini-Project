'use client';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Home = () => {

  const[typeEffect] = useTypewriter({
    words: ['Latest Information','Latest Insights','Latest News'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40
  })
  
  return (
    <div className='flex justify-start mx-auto h-[200vh] flex-col'>
      <header className='h-[26%] w-full justify-start items-center flex bg-purple-100' id='backgroundHome'>
        <div className='flex flex-col gap-4 px-16'>
          <h1 className='text-5xl font-bold'>DevLopBlogs</h1>
          <p className='text-2xl font-bold'>Get the <span className='italic text-purple-600'>{typeEffect}</span></p>
        </div>
      </header>
      <main className='h-[64%] flex flex-col items-center justify-center w-full'>
        <div>
          <h1 className='text-3xl font-bold'>LATEST POSTS</h1>
          <div className='grid grid-cols-4'>
            {}
          </div>
        </div>
      </main>
      <>
  {/* ========== FOOTER ========== */}
  <footer className="w-full px-4 py-10 mx-auto mt-auto bg-purple-100 sm:px-6 lg:px-8">
    {/* Grid */}
    <div className="text-center">
      <div>
        <a
          className="flex-none text-xl font-semibold text-black"
          href="#"
          aria-label="Brand"
        >
          DevLopBlogs
        </a>
      </div>
      {/* End Col */}
      <div className="mt-3">
        <p className="text-gray-500">
          We're part of the{" "}
          <a
            className="font-medium text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline"
            href="#"
          >
            DevLopBlogs
          </a>{" "}
          family.
        </p>
        <p className="text-gray-500">
          © 2024 Preline Labs.
        </p>
      </div>
      {/* Social Brands */}
      <div className="mt-3 space-x-2">
        <a
          className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </a>
        <a
          className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <a
          className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
          </svg>
        </a>
      </div>
      {/* End Social Brands */}
    </div>
    {/* End Grid */}
  </footer>
  {/* ========== END FOOTER ========== */}
</>

    </div>
  )
}

export default Home;
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
          <h1 className='text-5xl font-bold'>Developer Blogs</h1>
          <p className='text-2xl font-bold'>Get the <span className='italic text-purple-600'>{typeEffect}</span></p>
        </div>
      </header>
      <main className='h-[64%] bg-gray-500 flex flex-col items-center justify-center w-full'>
        <div>
          <h1 className='text-3xl font-bold'>LATEST POSTS</h1>
          <div className='grid grid-cols-4'></div>
        </div>
      </main>
    </div>
  )
}

export default Home;
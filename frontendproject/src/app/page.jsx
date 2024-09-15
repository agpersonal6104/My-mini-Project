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
    <div className='flex items-center justify-center mx-auto'>
      <header className='grid h-[20%] grid-cols-2 justify-center items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold text-purple-600'>Welcome to Developer Blogs</h1>
          <p className='text-3xl font-bold'>Get the <span className='italic text-purple-600'>{typeEffect}</span></p>
        </div>
        <img src="type-of-blogs-700.webp" alt="blogs-home" />
      </header>
    </div>
  )
}

export default Home;
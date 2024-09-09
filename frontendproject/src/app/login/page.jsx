'use client';
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[96vh] mt-0'>
        <div className='lg:w-[75%] justify-center items-center md:w-[50%]'>
          <img src="blog1.jpg" alt="blog-home-image" className='hidden md:flex' />
        </div>
        <div className='w-[25%] h-[50%] justify-center items-center'>
            <div className='flex flex-col items-center justify-center h-[25%]'>
              
                <h1 className='m-2 text-xl font-bold'>Log in with</h1>
                
                <div className='grid grid-cols-2 gap-6'>
                    <button className='flex gap-2 px-8 py-4 bg-gray-100'><img src="google.png" alt="google-logo" className='h-[20px] w-[20px]'/>Google</button>
                    <button className='flex gap-2 px-8 py-4 bg-gray-100'><img src="facebook.png" alt="facebook-logo" className='h-[20px] w-[20px]' />Microsoft</button>
                </div>
    
            </div>

            <div className='flex items-center justify-center p-4 h-[5%]'>
              
              <h1 className=''>OR</h1>
              
            </div>
            
            <div className='flex flex-col items-center justify-center h-[65%]'>

              <label htmlFor="email" className='self-start my-2 px-11'>Email</label>
              <input id='email' type="text" className='bg-gray-200 h-[50px] w-[79%] px-4' placeholder='Enter Email Address'/>

              <label htmlFor="password" className='self-start my-2 px-11'>Password</label>
              <input id='password' type="text" className='bg-gray-200 h-[50px] w-[79%] px-4' placeholder='Enter your Password'/>
              <button className='text-white bg-black h-[50px] w-[79%] px-4 my-6'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Login;
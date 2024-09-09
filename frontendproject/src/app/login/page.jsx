'use client';
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
        <div className='w-[25%] h-[60%] rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center h-[25%]'>
              
                <h1 className='m-2 text-xl font-bold'>Log in with</h1>
                
                <div className='grid grid-cols-2 gap-6 mt-2'>
                    <button className='flex gap-2 px-8 py-4 bg-gray-200'><img src="google.png" alt="google-logo" className='h-[20px] w-[20px]'/>Google</button>
                    <button className='flex gap-2 px-8 py-4 bg-gray-200'><img src="facebook.png" alt="facebook-logo" className='h-[20px] w-[20px]' />Microsoft</button>
                </div>
    
            </div>

            <div className='flex items-center justify-center p-4 h-[5
            %]'>
              <h1 className=''>OR</h1>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-6 h-[65%]'>

              <label htmlFor="email" className='self-start px-11'>Email</label>
              <input id='email' type="text" className='bg-gray-200 h-[50px] w-[79%] px-4' placeholder='Enter Email Address'/>

              <label htmlFor="password" className='self-start px-11'>Email</label>
              <input id='password' type="text" className='bg-gray-200 h-[50px] w-[79%] px-4' placeholder='Enter your Password'/>
              <button className='text-white bg-black h-[50px] w-[79%] px-4'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Login;
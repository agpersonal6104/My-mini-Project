'use client';
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
        <div className='w-[25%] h-[60%] rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center h-[40%]'>
                <h1 className='p-6 m-2 text-xl font-bold'>Log in with</h1>
                
                <div className='grid grid-cols-2 gap-6 mt-4'>
                    <button className='px-8 py-4 bg-gray-200'>Google</button>
                    <button className='px-8 py-4 bg-gray-200'>Microsoft</button>
                </div>
                
            </div>
            
            <input type="text" className='' placeholder='Email'/>
        </div>
    </div>
  )
}

export default Login;
'use client';
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
        <div className='w-[40%] h-[60%] rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center h-[40%]'>
                <h1 className='text-xl font-bold'>Log in with</h1>
                
                <div className='grid grid-cols-2'>
                    <button>Google</button>
                    <button>Microsoft</button>
                </div>
                
            </div>
            
            <input type="text" className='' placeholder='Email'/>
        </div>
    </div>
  )
}

export default Login;
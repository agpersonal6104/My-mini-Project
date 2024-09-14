'use client';
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[96vh] mt-0'>
        <div className='w-[25%] h-[55%] justify-center items-center'>
            <div className='flex flex-col items-center justify-center h-[25%]'>
              
                <h1 className='my-3 text-xl font-bold text-cyan-700'>Log in to your Account</h1>
                
                <div className='grid grid-cols-2 gap-6'>
                    <button className='flex px-8 py-4 font-bold border rounded-lg border-cyan-700'>
                      <img src="google.png" alt="google-logo" className='h-[20px] w-[20px] mr-2'/>
                      <span className="text-red-600">G</span>
                      <span className="text-yellow-500">oo</span>
                      <span className="text-green-600">gl</span>
                      <span className="text-blue-600">e</span>
                    </button>
                    <button className='flex px-8 py-4 font-bold border rounded-lg border-cyan-700'><img src="facebook.png" alt="facebook-logo" className='h-[20px] w-[20px] mr-2' /><span className='text-blue-500'>Facebook</span></button>
                </div>
    
            </div>

            <div className='flex items-center justify-center h-[5%] mt-3'>
              
              <h1 className='font-bold text-cyan-700'>OR</h1>
              
            </div>
            
            <div className='flex flex-col items-center justify-center h-[55%]'>

              <label htmlFor="email" className='self-start my-2 font-bold px-11 text-cyan-700'>Email</label>
              <input id='email' type="text" className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg' placeholder='Enter Email Address'/>

              <label htmlFor="password" className='self-start my-2 font-bold px-11 text-cyan-700'>Password</label>
              <input id='password' type="text" className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg' placeholder='Enter your Password'/>
              
              <button className='text-white bg-cyan-700 h-[50px] w-[79%] px-4 my-6 font-bold rounded-lg hover:bg-cyan-500'>Log In</button>
              
              <h1 className='font-bold text-md'>Don't have an Account? <a className='text-blue-600' href="/signup">Sign Up</a></h1>
            </div>
        </div>
        <div className='lg:w-[75%] justify-center items-center md:w-[50%]'>
          <img src="blog1.jpg" alt="blog-login-image" className='hidden md:flex' />
        </div>
    </div>
  )
}

export default Login;
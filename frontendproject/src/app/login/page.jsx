'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
  .min(8, 'Password must be 8 characters long')
  .matches(/[a-z]/, 'must include lower case')
  .matches(/[A-Z]/, 'must include upper case')
  .matches(/[0-9]/, 'must contain a number')
  .matches(/\W/, "Must contain special characters")
})

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    // onSubmit: (values) => {
    //   console.log(values);
    //   try{
    //     const 
    //   }
    // },

    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        console.log(data); // Handle successful login (e.g., redirect or store token)
      } catch (error) {
        setErrorMessage(error.message);
      }
    },

    validationSchema: LoginSchema
  })

  return (
    <div className='flex items-center justify-center h-[103vh] mt-0'>
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
            
            <form
            onSubmit={loginForm.handleSubmit}
            className='flex flex-col items-center justify-center h-[55%]'>

              {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}

              <label htmlFor="email" className='self-start my-2 font-bold px-11 text-cyan-700'>Email</label>
              <input
              id='email'
              type="text"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Enter Email Address'
              aria-describedby='email-error'/>
              {
                loginForm.touched.email && (
                  <p className="text-xs text-red-600" id="email-error">
                    {signupForm.errors.email}
                  </p>
                )
              }

              <label htmlFor="password" className='self-start my-2 font-bold px-11 text-cyan-700'>Password</label>
              <input id='password'
              type="text"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Enter your Password'
              aria-describedby='password-error'/>
              {
                loginForm.touched.password && (
                  <p className="text-xs text-red-600" id="password-error">
                    {signupForm.errors.password}
                  </p>
                )
              }
              
              <button className='text-white bg-cyan-700 h-[50px] w-[79%] px-4 my-6 font-bold rounded-lg hover:bg-cyan-500'>Log In</button>
              
              <h1 className='font-bold text-md'>Don't have an Account? <Link className='text-blue-600' href="/signup">Sign Up</Link></h1>
            </form>
        </div>
        <div className='lg:w-[75%] justify-center items-center md:w-[50%]'>
          <img src="blog1.jpg" alt="blog-login-image" className='hidden md:flex' />
        </div>
    </div>
  )
}

export default Login;
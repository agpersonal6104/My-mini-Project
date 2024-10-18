'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[a-z]/, 'must include lower case')
    .matches(/[A-Z]/, 'must include upper case')
    .matches(/[0-9]/, 'must contain a number')
    .matches(/\W/, "Must contain special characters")
    .required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUp = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      axios.post('http://localhost:5000/user/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User Registered Successfully!');
        })
        .catch((err) => {
          setSubmitting(false);
          console.error(err);
          if (err.response) {
            toast.error(err.response.data.message || "Network error occurred.");
          } else if (err.request) {
            toast.error("Failed to send request.");
          } else {
            toast.error("An unexpected error occurred.");
          }
        });
    },
    
    validationSchema: SignupSchema
  });

  return (
    <div className='flex items-center justify-center h-[103vh] mt-0'>
      <div className='lg:w-[75%] justify-center items-center md:w-[50%]'>
        <img src="blog1.jpg" alt="blog-signup-image" className='hidden md:flex' />
      </div>
      <div className='w-[25%] h-[65%] justify-center items-center'>
         {/* <div className='w-[35%]'>
          <div className='flex flex-col items-center justify-start h-[25%]'>
            <h1 className='my-4 text-xl font-bold text-cyan-700'>Create your Account</h1>
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
            className='flex flex-col items-center justify-center h-[65%]'
            onSubmit={signupForm.handleSubmit}
          >
            <label htmlFor="name" className='self-start my-2 font-bold px-11 text-cyan-700'>Name</label>
            <input
              id='name'
              type="text"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Enter your Name'
              aria-describedby='name-error'
            />
            {
              signupForm.touched.name && (
                <p className="text-xs text-red-600" id="name-error">
                  {signupForm.errors.name}
                </p>
              )
            }

            <label htmlFor="email" className='self-start my-2 font-bold px-11 text-cyan-700'>Email</label>
            <input
              id='email'
              type="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Enter Email Address'
              aria-describedby='email-error'
            />
            {
              signupForm.touched.email && (
                <p className="text-xs text-red-600" id="email-error">
                  {signupForm.errors.email}
                </p>
              )
            }

            <label htmlFor="password" className='self-start my-2 font-bold px-11 text-cyan-700'>Password</label>
            <input
              id='password'
              type="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Enter your Password'
              aria-describedby='password-error'
            />
            {
              signupForm.touched.password && (
                <p className="text-xs text-red-600 " id="password-error">
                  {signupForm.errors.password}
                </p>
              )
            }

            <label htmlFor="confirmPassword" className='self-start my-2 font-bold px-11 text-cyan-700'>Confirm Password</label>
            <input
              id='confirmPassword'
              type="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
              className='h-[50px] w-[79%] px-4 border border-cyan-700 rounded-lg'
              placeholder='Confirm your Password'
              aria-describedby='confirm-password-error'
            />
            {
              signupForm.touched.confirmPassword && (
                <p className="text-xs text-red-600" id="confirm-password-error">
                  {signupForm.errors.confirmPassword}
                </p>
              )
            }

        <button
          type="submit"
          disabled={signupForm.isSubmitting}
          className='text-white bg-cyan-700 h-[50px] w-[79%] px-4 my-6 font-bold rounded-lg hover:bg-cyan-500'
        >
          <span>Sign Up</span>
        </button>

            <h1 className='font-bold text-md'>Have an Account? <Link className='text-blue-600' href="/login">Log In</Link></h1>
          </form>
        </div>*/}
        <div className='max-w-xl mx-auto'>
      <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?
              <Link
                className="font-medium text-cyan-700 decoration-2 hover:underline"
                href="/login"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="w-4 h-auto"
                width={46}
                height={47}
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign up with Google
            </button>
            <div className="flex items-center py-3 text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
              Or
            </div>
            {/* Form */}
            <form onSubmit={signupForm.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm bold text-cyan-700"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name}
                      className="block w-full px-4 py-3 text-sm border rounded-lg border-cyan-700"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg
                        className="text-red-500 size-5"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    signupForm.touched.name && (
                      <p className="mt-2 text-xs text-red-600" id="email-error">
                        {signupForm.errors.name}
                      </p>
                    )
                  }
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm bold text-cyan-700"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.email}
                      className="block w-full px-4 py-3 text-sm border rounded-lg border-cyan-700"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg
                        className="text-red-500 size-5"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    signupForm.touched.email && (
                      <p className="mt-2 text-xs text-red-600" id="email-error">
                        {signupForm.errors.email}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-cyan-700 bold"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password}
                      className="block w-full px-4 py-3 text-sm border rounded-lg border-cyan-700"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg
                        className="text-red-500 size-5"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    signupForm.touched.password && (
                      <p className="mt-2 text-xs text-red-600" id="password-error">
                        {signupForm.errors.password}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm text-cyan-700 bold"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.confirmPassword}
                      className="block w-full px-4 py-3 text-sm border rounded-lg border-cyan-700"
                      required=""
                      aria-describedby="confirm-password-error"
                    />
                    <div className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3">
                      <svg
                        className="text-red-500 size-5"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    signupForm.touched.confirmPassword && (
                      <p className="mt-2 text-xs text-red-600" id="password-error">
                        {signupForm.errors.confirmPassword}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm">
                      I accept the{" "}
                      <a
                        className="font-medium text-cyan-700 decoration-2 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="submit"
                  disabled={ signupForm.isSubmitting }
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white border border-transparent rounded-lg bg-cyan-800 gap-x-2 hover:bg-cyan-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                 <span>Sign up</span>
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>

    </div>
      </div> 
    </div>
  );
};

export default SignUp;
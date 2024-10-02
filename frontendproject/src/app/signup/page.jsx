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
      axios.post('http://localhost:6000/user/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User Registered Successfully!');
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response?.data);
          setSubmitting(false);
          toast.error(err?.response?.data?.message);
        });
    },
    validationSchema: SignupSchema
  });

  return (
    <div className='flex items-center justify-center h-[96vh] mt-0'>
      <div className='lg:w-[25%] justify-center items-center md:w-[50%] -rotate-90'>
        <img src="blog3.png" alt="blog-signup-image" className='hidden md:flex' />
      </div>
      <div className='w-[75%] h-[65%] justify-center items-center'>
        <div className='w-[35%]'>
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
              type="text"
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
              type="text"
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
              disabled={signupForm.isSubmitting || !signupForm.isValid} // prevent submission when form is invalid
              className='text-white bg-cyan-700 h-[50px] w-[79%] px-4 my-6 font-bold rounded-lg hover:bg-cyan-500'
            >
            Sign Up
            </button>

            <h1 className='font-bold text-md'>Have an Account? <Link className='text-blue-600' href="/login">Log In</Link></h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
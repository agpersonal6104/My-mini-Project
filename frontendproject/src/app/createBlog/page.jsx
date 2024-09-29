'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { title } from '@uiw/react-md-editor';

const createBlogSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Make it long')
    .max(50, 'Too Long!')
    .required('Name is Required')
})

const CreateBlog = () => {

  const createBlogForm = useFormik(
    {
      initialValues: {
        title: '',
        image: '',
        description: '',
        author: ''
      },

      onSubmit: (values, {resetForm, setSubmitting}) => {
        axios.post('http://localhost:6000/blog/add',values)
        .then((response) => {
          console.log(response);
          resetForm();
          toast.success('Blog Posted Successfully!');
        }).catch((err) => {
          console.log(err);
          console.log(err.response?.data);
          setSubmitting(false);
          toast.error('err?.response?.data?.message')
        });
      },
      
      validationSchema: createBlogSchema
    }
  )

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="flex items-center justify-center w-1/3 shadow-xl rounded-xl h-1/2">
        <form className='flex flex-col items-start justify-center gap-4 border border-black h-[80%] w-[70%] px-16'>
          <input
            type="text"
            placeholder='Enter the Title'
            className='border border-purple-400 h-[40px] w-[200px]'
          />
          
          <div className='flex flex-col'>
            <label htmlFor="image">Select an Image</label>
            <input type="file"/> 
          </div>

          <input
            type="text"
            placeholder='Description'
            className='border border-purple-400 h-[40px] w-[200px]'
          />

          <button type="submit">Create Blog Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const createBlogSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  imageUrl: Yup.string().url('Invalid image URL').required('Image is required'),
  description: Yup.string().required('Description is required'),
  content: Yup.string().required('Content is required'),
  author: Yup.string().required('Author is required'),
});

const CreateBlog = () => {

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const createBlogForm = useFormik({
    initialValues: {
      title: '',
      imageUrl: '', // This will be set after uploading the image
      description: '',
      content: '',
      author: '',
    },

    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      axios.post('http://localhost:5000/blog/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('Blog Created Successfully!');
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

    validationSchema: createBlogSchema,
  });

  return (
    <div className="h-[90vh] flex justify-center items-center bg-purple-50">
      <div className="flex items-center justify-center w-1/2 shadow-xl rounded-xl h-[60%] bg-white">
      
        <div className='flex items-center justify-center w-1/2 h-full'>
          
        <div className='flex flex-col items-center w-[80%] p-10 mx-auto border-4 border-purple-300 rounded-lg'>
          <label htmlFor="imageUrl" className='mb-4 text-5xl font-bold text-center'>Upload your Image File URL Below</label>
          <input
          type="text"
          id='imageUrl'
          name='imageUrl'
          onChange={createBlogForm.handleChange}
          value={createBlogForm.values.imageUrl}
          className='w-full h-[40px] rounded-md px-2 border'
          />
        </div>
          
        </div>
        
        <form className='flex flex-col items-start justify-center w-1/2 h-full gap-4 px-16'
        onSubmit={createBlogForm.handleSubmit}>
          
          <h1 className='text-3xl font-bold text-purple-500'>Create Blog</h1>
          
          <input
            type="text"
            placeholder='Enter the Title'
            className='container border border-purple-500 h-[40px] rounded-md px-2'
            id='title'
            name='title'
            value={createBlogForm.values.title}
            onChange={createBlogForm.handleChange}
          />

          <input
            type="text"
            id='description'
            name='description'
            onChange={createBlogForm.handleChange}
            value={createBlogForm.values.description}
            placeholder='Enter the Description'
            className='container border border-purple-500 h-[40px] rounded-md px-2'
          />

          <textarea type="text"
          id='content'
          name='content'
          value={createBlogForm.values.content}
          onChange={createBlogForm.handleChange}
          placeholder='Enter the Content'
          className='container border border-purple-500 h-[70px] rounded-md px-2' />

          <input type="text"
          id='author'
          name='author'
          onChange={createBlogForm.handleChange}
          value={createBlogForm.values.author}
          placeholder='Enter the Name of the Author'
          className='container border border-purple-500 h-[40px] rounded-md px-2'
          />
          
          <button 
          type="submit" 
          disabled={createBlogForm.isSubmitting} 
          className='container text-white bg-purple-500 hover:bg-purple-200 hover:text-black h-[40px] rounded-md'>
            {createBlogForm.isSubmitting ? 'Submitting...' : 'Create Blog Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
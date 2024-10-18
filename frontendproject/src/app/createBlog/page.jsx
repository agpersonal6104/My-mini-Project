'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const createBlogSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
});

const cloudinaryPreset = 'dv8josqjy';

const CreateBlog = () => {
  const [imageUrl, setImageUrl] = useState(''); // State for image URL

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return toast.error('Please select an image to upload');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);

    axios.post('https://api.cloudinary.com/v1_1/dv8josqjy/image/upload', formData, {
      headers: { 'Content-type': 'multipart/form-data' }
    })
    .then((result) => {
      console.log(result.data);
      setImageUrl(result.data.secure_url); // Set the image URL from the response
      toast.success('File Uploaded Successfully');
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to upload file');
    });
};

  const createBlogForm = useFormik({
    initialValues: {
      title: '',
      image: imageUrl, // Initialize with the current image URL
      description: '',
      author: ''
    },
    
    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios.post('http://localhost:6000/blog/add', values)
      .then((response) => {
        console.log(response);
        resetForm();
        toast.success('Blog Posted Successfully!');
      }).catch((err) => {
        console.log(err);
        console.log(err.response?.data);
        setSubmitting(false);
        toast.error(err?.response?.data?.message)
      });
    },
    
    validationSchema: createBlogSchema
  })

  return (
    <div className="h-[90vh] flex justify-center items-center bg-purple-50">
      <div className="flex items-center justify-center w-1/2 shadow-xl rounded-xl h-[60%] bg-white">
      
        <div className='flex items-center justify-center w-1/2 h-full'>
          
          <div className='flex justify-center w-[80%] p-10 mx-auto border-4 border-purple-300 rounded-lg'>
            <label htmlFor="uploadfile" className='text-5xl text-center font-vold'>Upload your File</label>
            <input
              onChange={handleUpload}
              id='uploadfile' type="file" className='hidden'
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
            value={createBlogForm.title}
            onChange={createBlogForm.handleChange}
          />

          <input
            type="text"
            onChange={createBlogForm.handleChange}
            value={createBlogForm.description}
            placeholder='Enter the Description'
            className='container border border-purple-500 h-[40px] rounded-md px-2'
          />

          <textarea type="text"
          value={createBlogForm.content}
          onChange={createBlogForm.handleChange}
          placeholder='Enter the Content'
          className='container border border-purple-500 h-[70px] rounded-md px-2' />

          <input type="text"
          onChange={createBlogForm.handleChange}
          value={createBlogForm.author}
          placeholder='Enter the Name of the Author'
          className='container border border-purple-500 h-[40px] rounded-md px-2'
          />
          
          <button type="submit" onClick={createBlogForm.handleSubmit} className='container text-white bg-purple-500 hover:bg-purple-200 hover:text-black h-[40px] rounded-md'>Create Blog Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
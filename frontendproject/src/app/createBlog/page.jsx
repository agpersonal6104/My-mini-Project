'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const createBlogSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  imageUrl: Yup.string().url('Invalid URL').required('Required'), // Validate URL
  description: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
});

const cloudinaryPreset = 'dv8josqjy'; // Your Cloudinary preset
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`; // Replace YOUR_CLOUD_NAME with your Cloudinary cloud name

const CreateBlog = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const createBlogForm = useFormik({
    initialValues: {
      title: '',
      imageUrl: '', // This will be set after uploading the image
      description: '',
      content: '',
      author: ''
    },
    
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // Include the imageUrl in the values
      values.imageUrl = imageUrl; // Set the imageUrl from the uploaded image
      
      axios.post('http://localhost:5000/blog/add', values)
      .then((response) => {
        console.log(response);
        resetForm();
        setImageFile(null);
        setImageUrl('');
        toast.success('Blog Posted Successfully!');
      }).catch((err) => {
        console.log(err);
        console.log(err.response?.data);
        setSubmitting(false);
        toast.error(err?.response?.data?.message);
      });
    },
    
    validationSchema: createBlogSchema
  });

  const handleImageUpload = async (event) => {
    const file = event.currentTarget.files[0];
    setImageFile(file);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);
    
    try {
      const response = await axios.post(cloudinaryUrl, formData);
      setImageUrl(response.data.secure_url); // Get the secure URL from Cloudinary response
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error('Image upload failed!');
    }
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-purple-50">
      <div className="flex items-center justify-center w-1/2 shadow-xl rounded-xl h-[60%] bg-white">
      
        <div className='flex items-center justify-center w-1/2 h-full'>
          
          <div className='flex justify-center w-[80%] p-10 mx-auto border-4 border-purple-300 rounded-lg'>
            <label htmlFor="uploadfile" className='text-5xl text-center font-vold'>Upload your File</label>
            <input
            type="text"
            id='imageUrl'
            onChange={createBlogForm.handleChange}
            value={createBlogForm.values.imageUrl}
            placeholder='Enter the Image URL'
            className='container border border-purple-500 h-[40px] rounded-md px-2'
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
            value={createBlogForm.title}
            onChange={createBlogForm.handleChange}
          />

          <input
            type="text"
            id='description'
            onChange={createBlogForm.handleChange}
            value={createBlogForm.description}
            placeholder='Enter the Description'
            className='container border border-purple-500 h-[40px] rounded-md px-2'
          />

          <textarea type="text"
          id='content'
          value={createBlogForm.content}
          onChange={createBlogForm.handleChange}
          placeholder='Enter the Content'
          className='container border border-purple-500 h-[70px] rounded-md px-2' />

          <input type="text"
          id='author'
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
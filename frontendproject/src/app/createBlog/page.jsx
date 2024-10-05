'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const createBlogSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  
})

const CreateBlog = () => {
  const [imageUrl, setImageUrl] = useState([]); // Initialize with an empty string

  // const handleUpload = (e) => {
  //   const file = e.target.files[0];
    
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'mypreset');
  //   formData.append('cloud_name', 'dv8josqjy');

  //   axios.post('https://api.cloudinary.com/v1_1/dv8josqjy/image/upload', formData, {
  //     headers: { 'Content-type' : 'multipart/form-data' }
  //   })
  //   .then((result) => {
  //     console.log(result.data);
  //     setImageUrl(result.data.secure_url); // Update the image URL state
  //     toast.success('File Uploaded Successfully');
  //   }).catch((err) => {
  //     console.log(err);
  //     toast.error('Failed to upload file');
  //   });
  // }

  const handleUpload = (e) => {
    const file = e.target.files[0];
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'dv8josqjy');
    
    axios.post('https://api.cloudinary.com/v1_1/dv8josqjy/image/upload', formData, {
      headers: { 'Content-type': 'multipart/form-data' }
    })
    .then((result) => {
      console.log(result.data);
      setImageUrl(result.data.secure_url); // Update the image URL state
      createBlogForm.setFieldValue('image', result.data); // Update the image field in the form with the entire response object
      toast.success('File Uploaded Successfully');
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to upload file');
    });
  }

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
    <div className="h-[90vh] flex justify-center items-center">
      <div className="flex items-center justify-center w-1/3 shadow-xl rounded-xl h-1/2">
        <form className='flex flex-col items-start justify-center gap-4 border border-black h-[80%] w-[70%] px-16'>
          <input
            type="text"
            placeholder='Enter the Title'
            className='border border-purple-400 h-[40px] w-[200px]'
            {...createBlogForm.getFieldProps('title')} // Connect the input to the formik field
          />
          
          <div className='flex justify-center max-w-2xl p-8 mx-auto mt-3 border-4 border-blue-300 rounded-lg'>
            <label htmlFor="uploadfile" className='text-5xl font-vold '>⚡ Upload your File</label>
            <input
              onChange={handleUpload}
              id='uploadfile' type="file" className='hidden'
            />
          </div>

          <input
            type="text"
            placeholder='Description'
            className='border border-purple-400 h-[40px] w-[200px]'
            {...createBlogForm.getFieldProps('description')} // Connect the input to the formik field
          />

          <button type="submit">Create Blog Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
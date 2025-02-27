// 'use client';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import * as Yup from 'yup';

// const createBlogSchema = Yup.object().shape({
//   title: Yup.string().required('Title is required'),
//   imageUrl: Yup.string().url('Invalid image URL').required('Image is required'),
//   description: Yup.string().required('Description is required'),
//   content: Yup.string().required('Content is required'),
//   author: Yup.string().required('Author is required'),
// });

// const CreateBlog = () => {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const createBlogForm = useFormik({
//     initialValues: {
//       title: '',
//       imageUrl: '',
//       description: '',
//       content: '',
//       author: '',
//     },
//     validationSchema: createBlogSchema,
//     onSubmit: async (values, { resetForm, setSubmitting }) => {
//       try {
//         setSubmitting(true);
//         const response = await axios.post('http://localhost:5000/blog/add', values);
//         console.log(response.status);
//         resetForm();
//         setImagePreview(null);
//         toast.success('Blog Created Successfully!');
//       } catch (err) {
//         console.error(err);
//         if (err.response) {
//           toast.error(err.response.data.message || 'Network error occurred.');
//         } else if (err.request) {
//           toast.error('Failed to send request.');
//         } else {
//           toast.error('An unexpected error occurred.');
//         }
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'mypreset');

//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/dv8josqjy/image/upload`,
//         formData
//       );
//       const imageUrl = response.data.secure_url;
//       createBlogForm.setFieldValue('imageUrl', imageUrl);
//       setImagePreview(imageUrl);
//       toast.success('Image uploaded successfully!');
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to upload image.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-purple-50 sm:px-6 lg:px-8">
//       <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-lg rounded-xl lg:grid-cols-2">
//         {/* Image Upload Section */}
//         <div className="flex flex-col items-center justify-center p-8 bg-purple-100">
//           <label htmlFor="imageUpload" className="mb-6 text-2xl font-bold text-center text-purple-900">
//             Upload Your Blog Image
//           </label>
//           <input
//             type="file"
//             id="imageUpload"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="flex items-center justify-center w-full h-40 max-w-xs transition-colors duration-200 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer hover:bg-purple-50"
//           >
//             {imagePreview ? (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="object-cover w-full h-full rounded-lg"
//               />
//             ) : (
//               <span className="text-purple-500">
//                 {isUploading ? 'Uploading...' : 'Click to upload an image'}
//               </span>
//             )}
//           </label>
//           {createBlogForm.errors.imageUrl && createBlogForm.touched.imageUrl && (
//             <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.imageUrl}</p>
//           )}
//         </div>

//         {/* Blog Form Section */}
//         <form
//           onSubmit={createBlogForm.handleSubmit}
//           className="flex flex-col gap-6 p-8"
//         >
//           <h1 className="text-3xl font-bold text-purple-900">Create Blog</h1>

//           <div>
//             <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               placeholder="Enter the Title"
//               value={createBlogForm.values.title}
//               onChange={createBlogForm.handleChange}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//             />
//             {createBlogForm.errors.title && createBlogForm.touched.title && (
//               <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.title}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <input
//               type="text"
//               id="description"
//               name="description"
//               placeholder="Enter the Description"
//               value={createBlogForm.values.description}
//               onChange={createBlogForm.handleChange}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//             />
//             {createBlogForm.errors.description && createBlogForm.touched.description && (
//               <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.description}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-700">
//               Content
//             </label>
//             <textarea
//               id="content"
//               name="content"
//               placeholder="Enter the Content"
//               value={createBlogForm.values.content}
//               onChange={createBlogForm.handleChange}
//               rows={4}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//             />
//             {createBlogForm.errors.content && createBlogForm.touched.content && (
//               <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.content}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-700">
//               Author
//             </label>
//             <input
//               type="text"
//               id="author"
//               name="author"
//               placeholder="Enter the Name of the Author"
//               value={createBlogForm.values.author}
//               onChange={createBlogForm.handleChange}
//               className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//             />
//             {createBlogForm.errors.author && createBlogForm.touched.author && (
//               <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.author}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={createBlogForm.isSubmitting || isUploading}
//             className="w-full px-6 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//           >
//             {createBlogForm.isSubmitting ? 'Submitting...' : 'Create Blog Post'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;

'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';

const createBlogSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  imageUrl: Yup.string().url('Invalid image URL').required('Image is required'),
  description: Yup.string().required('Description is required'),
  content: Yup.string().required('Content is required'),
  author: Yup.string().required('Author is required'),
});

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  // const navigate = useNavigate();

  const createBlogForm = useFormik({
    initialValues: {
      title: '',
      imageUrl: '',
      description: '',
      content: '',
      tag: '',
      author: '',
    },
    validationSchema: createBlogSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setSubmitting(true);
        const response = await axios.post('http://localhost:5000/blog/add', values);
        console.log(response.status);
        resetForm();
        setImagePreview(null);
        toast.success('Blog Created Successfully!');
        router.push('/myBlogs');
        // navigate('/my-blogs');
      } catch (err) {
        console.error(err);
        if (err.response) {
          toast.error(err.response.data.message || 'Network error occurred.');
        } else if (err.request) {
          toast.error('Failed to send request.');
        } else {
          toast.error('An unexpected error occurred.');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dv8josqjy/image/upload`,
        formData
      );
      const imageUrl = response.data.secure_url;
      createBlogForm.setFieldValue('imageUrl', imageUrl);
      setImagePreview(imageUrl);
      toast.success('Image uploaded successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to upload image.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-purple-50 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-lg rounded-xl lg:grid-cols-2">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center p-8 bg-purple-100">
          <label htmlFor="imageUpload" className="mb-6 text-2xl font-bold text-center text-purple-900">
            Upload Your Blog Image
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label
            htmlFor="imageUpload"
            className="flex items-center justify-center w-full h-40 max-w-xs transition-colors duration-200 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer hover:bg-purple-50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <span className="text-purple-500">
                {isUploading ? 'Uploading...' : 'Click to upload an image'}
              </span>
            )}
          </label>
          {createBlogForm.errors.imageUrl && createBlogForm.touched.imageUrl && (
            <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.imageUrl}</p>
          )}
        </div>

        {/* Blog Form Section */}
        <form
          onSubmit={createBlogForm.handleSubmit}
          className="flex flex-col gap-6 p-8"
        >
          <h1 className="text-3xl font-bold text-purple-900">Create Blog</h1>

          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the Title"
              value={createBlogForm.values.title}
              onChange={createBlogForm.handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            {createBlogForm.errors.title && createBlogForm.touched.title && (
              <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter the Description"
              value={createBlogForm.values.description}
              onChange={createBlogForm.handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            {createBlogForm.errors.description && createBlogForm.touched.description && (
              <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.description}</p>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Enter the Content"
              value={createBlogForm.values.content}
              onChange={createBlogForm.handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            {createBlogForm.errors.content && createBlogForm.touched.content && (
              <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.content}</p>
            )}
          </div>

          <div>
            <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-700">
              Tags
            </label>
            <textarea
              id="tag"
              name="tag"
              placeholder="Enter the tags"
              value={createBlogForm.values.tag}
              onChange={createBlogForm.handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            {createBlogForm.errors.tag && createBlogForm.touched.tag && (
              <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.tag}</p>
            )}
          </div>

          <div>
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter the Name of the Author"
              value={createBlogForm.values.author}
              onChange={createBlogForm.handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            {createBlogForm.errors.author && createBlogForm.touched.author && (
              <p className="mt-2 text-sm text-red-600">{createBlogForm.errors.author}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={createBlogForm.isSubmitting || isUploading}
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {createBlogForm.isSubmitting ? 'Submitting...' : 'Create Blog Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
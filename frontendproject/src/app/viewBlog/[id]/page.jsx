// 'use client';
// import axios from 'axios';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// const ViewBlog = () => {

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad with zero
//     const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
//     return `${day}-${month}-${year}`; // Return formatted date
//   };

//   const [blogList, setBlogList] = useState([]);

//   const fetchBlogData = async ()=> {
//     const res = await axios.get('http://localhost:5000/blog/getall');
//     console.log(res.status);
//     console.table(res.data);
//     setBlogList(res.data);
// }

// useEffect(()=> {
//   fetchBlogData();
// });

// const displayBlogs =() => {
//   if(blogList.length ===0)
//   {
//     return <div className='flex items-center justify-center'>
//       <p className='text-2xl font-bold text-center'>Loading.... Please Wait!</p>
//     </div>
//   }
//   else
//   {
//     return <div className='grid grid-cols-1 gap-1 px-4 lg:gap-4'>
//       {
//         blogList.map((blog) => {
//           return <div key={blog._id} className='flex flex-col h-full border rounded-md shadow-md'>
            
//               <img src={blog.imageUrl} alt="" className='w-[20%] self-center lg:w-[50%] rounded-md' />
            
//               <div className='flex flex-col justify-between flex-grow p-4'>
//           <div className='flex items-center justify-center mb-2'>
//             <div className='text-center'>
//               <h1 className='font-bold text-md'>{blog.title}</h1>
//               <h1 className='italic text-md'>{blog.description}</h1>
//               <h1 className='text-sm italic lg:text-md'><span className='italic font-bold'>Published On: </span>{formatDate(blog.createdAt)}</h1>
//             </div>
//           </div>

//           <div className='grid items-center grid-cols-2 border-t-2'>
//             <h1 className='text-sm font-bold lg:text-md'>{blog.author}</h1>
//             <Link href={'/viewBlog/' + blog._id} className='text-end hover:text-purple-500 hover:underline'>Read More</Link>
//           </div>
//         </div>
            
            
//           </div>
//         })
//       }
//     </div>
//   }
// }

//     const {id} = useParams();

//     const [blogData, setBlogData] = useState(null);

//     const getBlogData = async () => {

//           const res = await axios.get('http://localhost:5000/blog/get/' +id);
//           console.log(res.data);
//           setBlogData(res.data);

//     }

//     useEffect(() => {
//         getBlogData();
//     }, []);
  

//     return(
//       <div className='flex items-start justify-center m-0 mx-auto w-[90%]'>
//         <div className='w-2/3'>
//         {
//           blogData !== null ? 
//           (
//               <div className='flex mx-auto'>
//                 <div className='flex flex-col w-full rounded-lg h-[50%] p-4 box-border gap-4'>
//                   <div className='flex flex-col'>
//                     <h1 className='text-3xl font-bold underline text-start'>{blogData.title}</h1>
//                     <p className='text-lg font-bold text-start'><span className='text-purple-500'>Published By: </span>{blogData.author}</p>
//                     <img src={blogData.imageUrl} alt="" className='rounded-lg w-[70%] self-center' />
//                   </div>
                  
                  
                  
//                   <div className='flex flex-col gap-2'>
//                     <p className='text-2xl font-bold'>{blogData.description}</p>
//                     <p className='font-bold'>{blogData.content}</p> 
//                     <p className='font-bold'><span className='text-purple-500'>Published on: </span>{formatDate(blogData.createdAt)}</p>
//                   </div>
//                 </div>
//              </div>
//           ) :
//           <div>
//             <p className='flex w-full mx-auto'>Loading.....</p>
//           </div>
//         }
//         </div>
//         <div className='w-1/3 h-full border-l-2 border-black'>
//           <h1 className='px-4 py-2 mx-auto text-2xl font-bold text-purple-500 text-start'>More Blogs</h1>
//           {displayBlogs()}
//         </div>
//       </div>
//     )
// }

// export default ViewBlog;

'use client';

import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { ScrollArea } from '@/components/ScrollArea';
import { Skeleton } from '@/components/Skeleton';
import BlogCard from '@/components/BlogCard';

const ViewBlog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    return `${day}-${month}-${year}`
  }

  const [blogList, setBlogList] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBlogData = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/blog/getall')
      setBlogList(res.data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBlogData()
  }, [fetchBlogData])

  const { id } = useParams()
  const [blogData, setBlogData] = useState(null)
  const [mainLoading, setMainLoading] = useState(true)

  const getBlogData = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/blog/get/' + id)
      setBlogData(res.data)
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setMainLoading(false)
    }
  }, [id])

  useEffect(() => {
    getBlogData()
  }, [getBlogData])

  const MainContent = () => {
    if (mainLoading) {
      return (
        <div className="space-y-6">
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-1/4 h-4" />
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      )
    }

    if (!blogData) {
      return (
        <div className="py-12 text-center">
          <h2 className="mb-2 text-2xl font-semibold">Blog not found</h2>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      )
    }

    return (
      <article className="prose prose-purple lg:prose-lg max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="mb-4 text-3xl font-bold text-purple-900 lg:text-4xl">
            {blogData.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blogData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blogData.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        <div className="mb-8">
          <img
            src={blogData.imageUrl || "/placeholder.svg"}
            alt={blogData.title}
            className="rounded-lg w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-xl font-medium text-muted-foreground">
            {blogData.description}
          </p>
          <div className="leading-relaxed">
            {blogData.content}
          </div>
        </div>
      </article>
    )
  }

  const Sidebar = () => {
    if (loading) {
      return (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[200px]" />
          ))}
        </div>
      )
    }

    if (blogList.length === 0) {
      return (
        <div className="py-6 text-center">
          <p className="text-muted-foreground">No other blogs found</p>
        </div>
      )
    }

    return (
      <ScrollArea className="h-[calc(100vh-2rem)]">
        <div className="space-y-4">
          {blogList
            .filter(blog => blog._id !== id)
            .map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                formatDate={formatDate}
              />
            ))}
        </div>
      </ScrollArea>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="p-6 bg-white rounded-lg shadow-sm lg:p-8">
              <MainContent />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-purple-900">
                More Blogs
              </h2>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBlog;
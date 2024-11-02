'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewBlog = () => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad with zero
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    return `${day}-${month}-${year}`; // Return formatted date
  };

  const [blogList, setBlogList] = useState([]);

  const fetchBlogData = async ()=> {
    const res = await axios.get('http://localhost:5000/blog/getall');
    console.log(res.status);
    console.table(res.data);
    setBlogList(res.data);
}

useEffect(()=> {
  fetchBlogData();
});

const displayBlogs =() => {
  if(blogList.length ===0)
  {
    return <div className='flex items-center justify-center'>
      <p className='text-2xl font-bold text-center'>Loading.... Please Wait!</p>
    </div>
  }
  else
  {
    return <div className='grid grid-cols-1 gap-1 px-4 lg:gap-4'>
      {
        blogList.map((blog) => {
          return <div key={blog._id} className='flex flex-col h-full border rounded-md shadow-md'>
            
              <img src={blog.imageUrl} alt="" className='w-[20%] self-center lg:w-[50%] rounded-md' />
            
              <div className='flex flex-col justify-between flex-grow p-4'>
          <div className='flex items-center justify-center mb-2'>
            <div className='text-center'>
              <h1 className='font-bold text-md'>{blog.title}</h1>
              <h1 className='italic text-md'>{blog.description}</h1>
              <h1 className='text-sm italic lg:text-md'><span className='italic font-bold'>Published On: </span>{formatDate(blog.createdAt)}</h1>
            </div>
          </div>

          <div className='grid items-center grid-cols-2 border-t-2'>
            <h1 className='text-sm font-bold lg:text-md'>{blog.author}</h1>
            <Link href={'/viewBlog/' + blog._id} className='text-end hover:text-purple-500 hover:underline'>Read More</Link>
          </div>
        </div>
            
            
          </div>
        })
      }
    </div>
  }
}

    const {id} = useParams();

    const [blogData, setBlogData] = useState(null);

    const getBlogData = async () => {

          const res = await axios.get('http://localhost:5000/blog/get/' +id);
          console.log(res.data);
          setBlogData(res.data);

    }

    useEffect(() => {
        getBlogData();
    }, []);
  

    return(
      <div className='flex items-start justify-center m-0 mx-auto w-[90%]'>
        <div className='w-2/3'>
        {
          blogData !== null ? 
          (
              <div className='flex mx-auto'>
                <div className='flex flex-col w-full rounded-lg h-[50%] p-4 box-border gap-4'>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold underline text-start'>{blogData.title}</h1>
                    <p className='text-lg font-bold text-start'><span className='text-purple-500'>Published By: </span>{blogData.author}</p>
                    <img src={blogData.imageUrl} alt="" className='rounded-lg w-[70%] self-center' />
                  </div>
                  
                  
                  
                  <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold'>{blogData.description}</p>
                    <p className='font-bold'>{blogData.content}</p> 
                    <p className='font-bold'><span className='text-purple-500'>Published on: </span>{formatDate(blogData.createdAt)}</p>
                  </div>
                </div>
             </div>
          ) :
          <div>
            <p className='flex w-full mx-auto'>Loading.....</p>
          </div>
        }
        </div>
        <div className='w-1/3 h-full border-l-2 border-black'>
          <h1 className='px-4 py-2 mx-auto text-2xl font-bold text-purple-500 text-start'>More Blogs</h1>
          {displayBlogs()}
        </div>
      </div>
    )
}

export default ViewBlog;
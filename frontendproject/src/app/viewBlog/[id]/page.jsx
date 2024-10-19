'use client';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewBlog = () => {
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
      return <div className='grid grid-cols-1 gap-6 px-4'>
        {
          blogList.map((blog) => {
            return <div key={blog._id} className='container flex flex-col border rounded-md shadow-md'>
              <div className='grid lg:gap-2 border-b-2 h-[20%] items-center lg:px-2 grid-cols-2'>
                <h1 className='text-sm font-bold lg:text-md'>{blog.author}</h1>
                <h1 className='text-sm italic lg:text-md'>{blog.createdAt}</h1>
              </div>
              
              <div className='flex items-center justify-center'>
                <div className='text-center'>
                  <h1 className='text-sm italic'>{blog.title}</h1>
                  <h1 className='font-bold text-md'>{blog.description}</h1>
                  <h1 className='text-sm font-bold'>{blog.content}</h1>
                  <Link href={'/viewBlog/'+blog._id} >View</Link>
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
      <div className='flex items-center justify-center h-[89vh] m-0 mx-auto w-[90%]'>
        <div className='w-2/3'>
        {
          blogData !== null ? 
          (
              <div className='flex items-center justify-center'>
                <div className='flex flex-col w-full rounded-lg h-[60%] p-4 box-border gap-4'>
                  <div className='self-center'>
                    <img src={blogData.imageUrl} alt="" className='rounded-lg w-[70%]' />
                  </div>
                  
                  <p className='text-2xl font-bold text-start'><span className='text-purple-500'>BY: </span>{blogData.author}</p>
                  
                  <div className='h-[60%] gap-4 flex-col flex'>
                    <h1 className='text-3xl font-bold'>{blogData.title}</h1>
                    <p className='text-2xl font-bold'>{blogData.description}</p>
                    <p className='font-bold'>{blogData.content}</p> 
                    <p className='font-bold'><span className='text-purple-500'>Published on: </span>{blogData.createdAt}</p>
                  </div>
                </div>
             </div>
          ) : <div>
            <p className='flex w-full mx-auto'>Loading.....</p>
          </div>
        }
        </div>
        <div className='w-1/3'>
          {displayBlogs()}
        </div>
      </div>
    )
}

export default ViewBlog;
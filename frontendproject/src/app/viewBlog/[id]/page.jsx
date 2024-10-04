'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ViewBlog = () => {

    const {id} = useParams();

    const [blogData, setBlogData] = useState(null);

    const router = useRouter();

    const getBlogData = async () => {
        try {
          const res = await axios.get('http://localhost:6000/blog/getbyid/' +id);
          console.log(res.data);
          setBlogData(res.data);
        }
        catch (error)
        {
          console.error(error);
        }
    }

    useEffect(() => {
        getBlogData();
    }, []);
    
    if(!blogData)
    {
      return <div>Loading.....</div>
    }
    else
    {
      return(
        <div className='flex items-center justify-center h-[90vh]'>
        <div className='flex flex-col w-1/2 border-2 border-black rounded-lg shadow-lg h-[60%]'>
            <div className='h-[40%]'>
              <img src={blogData.imageUrl} alt={blogData.title} />
            </div>
            <div className='h-[60%]'>
              <h1>{blogData.title}</h1>
              <p>{blogData.description}</p>
              <p>{blogData.content}</p>
              <p>{blogData.author}</p>
              <p>Published on: {blogData.createdAt}</p>
            </div>
        </div>
      </div>
      );
    }
}

export default ViewBlog;
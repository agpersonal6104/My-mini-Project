'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ViewBlog = () => {

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
      <div className='max-w-xl p-5 mx-auto border rounded-lg shadow'>
        {
          blogData !== null ? 
          (
              <div className='flex items-center justify-center h-[90vh]'>
                <div className='flex flex-col w-1/2 border-2 border-black rounded-lg shadow-lg h-[60%]'>
                  <div className='h-[40%]'>
                    <img src={blogData.imageUrl} alt="" />
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
          ) : <div>
            <p className='flex w-full mx-auto'>Loading.....</p>
          </div>
        }
      </div>
    )
}

export default ViewBlog;
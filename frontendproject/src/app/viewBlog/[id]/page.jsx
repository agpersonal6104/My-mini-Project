'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const ViewBlog = () => {

    const {id} = useParams();

    const [blogdata, setBlogdata] = useState(null);

    const router = useRouter();

    const getBlogData = async () => {
        const res = await axios.get('http://localhost:6000/blog/getbyid/' +id);
        console.log(res.data);
        setBlogData(res.data);
    }

    useEffect(() => {
        getBlogData();
    }, []);

  return (
    <div className='h-[100vh]'>
      <div>
        
      </div>
    </div>
  )
}

export default ViewBlog;
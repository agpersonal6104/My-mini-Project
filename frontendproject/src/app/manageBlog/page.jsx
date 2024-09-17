'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const manageBlog = () => {

    const [blogList, setBlogList] = useState([]);
    const fetchBlogData = async () => {

        const res = await axios.get('http://localhost:6000/blog/getall');
        console.log(res.status);
        console.table(res.data);
        setBlogList(res.data);
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    const deleteBlog = (id) => {
        axios.delete('http://localhost:6000/blog/delete/'+id)
        .then((result) => {
            toast.success('Blog deleted Successfully!');
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to delete Blog!');
        });
    }

    const displayBlog = () => {
        if(blogList.length === 0)
        {
            return <p>Loading.... Please Wait!</p>
        }
        else
        {
            
        }
    }

  return (
    <div></div>
  )
}

export default manageBlog;
'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageBlog = () => {
  const [blogList, setBlogList] = useState([]);

  // Fetch all blogs
  const fetchBlogsData = async () => {
    try {
      const res = await axios.get('http://localhost:6000/blog/getall');
      console.log(res.status);
      console.table(res.data);
      setBlogList(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch blogs!');
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  // Delete a blog
  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:6000/blog/delete/${id}`)
      .then((result) => {
        toast.success('Blog deleted successfully!');
        fetchBlogsData(); // Refresh the blog list
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to delete blog!');
      });
  };

  // Display blogs
  const displayBlogs = () => {
    if (blogList.length === 0) {
      return <p className="text-center text-gray-500">Loading... Please wait!</p>;
    } else {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="text-white bg-blue-500">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Content</th>
                <th className="p-3 text-left">Author</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogList.map((blog) => (
                <tr key={blog._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{blog.title}</td>
                  <td className="p-3">{blog.content.substring(0, 50)}...</td>
                  <td className="p-3">{blog.author}</td>
                  <td className="flex p-3 space-x-2">
                    <Link
                      href={`/updateBlog/${blog._id}`}
                      className="px-3 py-1 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="px-3 py-1 text-white transition duration-300 bg-red-500 rounded-full hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Manage Blogs</h1>
        {displayBlogs()}
      </div>
    </div>
  );
};

export default ManageBlog;
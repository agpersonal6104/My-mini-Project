'use client';
import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="flex items-center justify-center w-1/3 shadow-xl rounded-xl h-1/2">
        <form className='flex flex-col items-start justify-center gap-4 border border-black h-[80%] w-[70%] px-16'>
          <input
            type="text"
            placeholder='Enter the Title'
            className='border border-purple-400 h-[40px] w-[200px]'
          />
          
          <div className='flex flex-col'>
            <label htmlFor="image">Select an Image</label>
            <input type="file"/> 
          </div>

          <input
            type="text"
            placeholder='Description'
            className='border border-purple-400 h-[40px] w-[200px]'
          />

          <button type="submit">Create Blog Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
import React from 'react'

const CreateBlog = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <div className=''>
            <form>
            <label htmlFor="title">Enter the Title</label>
            <input type="text" />

            <label htmlFor="description">Enter the Description</label>
            <input type="text" />
            </form>
        </div>
        
    </div>
  )
}

export default CreateBlog;
import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedBy, setPublishedBy] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('publishedBy', publishedBy);
    formData.append('image', image);

    try {
      const response = await axios.post('/blog', formData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Enter the Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Enter the Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="author">Enter the Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label htmlFor="publishedBy">Enter the Published By</label>
          <input
            type="text"
            value={publishedBy}
            onChange={(e) => setPublishedBy(e.target.value)}
          />

          <label htmlFor="image">Select an Image</label>
          <input type="file" onChange={handleImageChange} />

          <button type="submit">Create Blog Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
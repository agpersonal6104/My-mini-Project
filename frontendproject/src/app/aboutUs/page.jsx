import React from 'react';

const AboutUs = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='max-w-md p-4 bg-white rounded shadow-md'>
        <h1 className='mb-4 text-3xl font-bold'>Welcome to DevopBlogs</h1>
        <p className='mb-4 text-lg'>
        We're a community of passionate developers dedicated to sharing knowledge, insights, and experiences related to [specific programming languages, technologies, or development methodologies]. Our goal is to inspire and empower developers of all levels to grow their skills and stay up-to-date with the latest trends in the tech industry.
        </p>
        <button className='px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
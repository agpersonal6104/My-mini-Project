// 'use client';
// import React from 'react';

// function AboutUs() {
//   return (
//     <div className="m-0 mx-auto h-[89vh] px-8 bg-purple-50">
//       <h1 className="mb-8 text-4xl font-bold text-center">About DevLopBlogs</h1>
//       <p className="mb-12 text-lg text-center text-gray-700">
//         DevLopBlogs is your go-to destination for all things development. We're a community-driven platform dedicated to empowering developers of all levels to learn, grow, and share their knowledge.
//       </p>
//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//         <h2 className="mb-4 text-2xl font-semibold">Why choose DevLopBlogs?</h2>
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6V3" />
//             </svg>
//             <span className="text-gray-700">Comprehensive Coverage: From front-end development to back-end technologies, databases, and beyond, we cover a wide range of topics.</span>
//           </li>
//           <li className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6V3" />
//             </svg>
//             <span className="text-gray-700">Expert Insights: Our contributors are experienced developers who share their real-world experiences and best practices.</span>
//           </li>
//           <li className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6V3" />
//             </svg>
//             <span className="text-gray-700">Community-Driven: We foster a supportive community where developers can connect, collaborate, and learn from each other.</span>
//           </li>
//           <li className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6V3" />
//             </svg>
//             <span className="text-gray-700">Free and Accessible: All our content is freely available, making it easy for anyone to access and benefit from our resources.</span>
//           </li>
//         </ul>
//       </div>
//       <div className="mt-12 text-center">
//         <h2 className="mb-4 text-2xl font-semibold">Join the DevLopBlogs community today!</h2>
//         <p className="text-lg text-gray-700">
//           Subscribe to our newsletter, follow us on social media, and contribute your own articles to help others on their coding journey.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

'use client';
import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen px-4 py-12 m-0 mx-auto sm:px-8 bg-purple-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-8 text-4xl font-bold text-purple-900 sm:text-5xl">About DevLopBlogs</h1>
        <p className="mb-12 text-lg leading-relaxed text-gray-700 sm:text-xl">
          DevLopBlogs is your go-to destination for all things development. We're a community-driven platform dedicated to empowering developers of all levels to learn, grow, and share their knowledge.
        </p>
      </div>

      {/* Why Choose DevLopBlogs Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-3xl font-semibold text-purple-900 sm:text-4xl">Why choose DevLopBlogs?</h2>
          </div>

          {/* Right Column - List */}
          <ul className="space-y-6">
            {[
              "Comprehensive Coverage: From front-end development to back-end technologies, databases, and beyond, we cover a wide range of topics.",
              "Expert Insights: Our contributors are experienced developers who share their real-world experiences and best practices.",
              "Community-Driven: We foster a supportive community where developers can connect, collaborate, and learn from each other.",
              "Free and Accessible: All our content is freely available, making it easy for anyone to access and benefit from our resources.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6V3" />
                </svg>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-purple-900 sm:text-4xl">Join the DevLopBlogs community today!</h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 sm:text-xl">
          Subscribe to our newsletter, follow us on social media, and contribute your own articles to help others on their coding journey.
        </p>
        <button className="px-8 py-3 font-semibold text-white transition duration-300 bg-purple-900 rounded-lg hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
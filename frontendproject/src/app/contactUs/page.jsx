'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const contactUsSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  details:Yup.string().required('required')
});

const ContactUs = () => {

      const contactUsForm = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        details: ''
      },
      onSubmit: (values, { resetForm, setSubmitting }) =>
      {
        axios.post('http://localhost:5000/contacts/add', values)
          .then((response) => {
            console.log(response.status);
            resetForm();
            toast.success('User Registered Successfully!');
          })
          .catch((err) => {
            setSubmitting(false);
            console.error(err);
            if (err.response) {
              toast.error(err.response.data.message || "An error occurred.");
            } else if (err.request) {
              toast.error("Failed to send request.");
            } else {
              toast.error("An unexpected error occurred.");
            }
          });
      },
      validationSchema: contactUsSchema
    });

  return (
    <div className='h-[89vh] flex justify-center items-center'>
      <>
  {/* Contact Us */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-1 text-gray-600">
          We'd love to talk about how we can help you.
        </p>
      </div>
    </div>
    <div className="max-w-lg mx-auto mt-12">
      {/* Card */}
      <div className="flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8">
        <h2 className="mb-8 text-xl font-semibold text-gray-800">
          Fill in the form
        </h2>
        <form onSubmit={contactUsForm.handleSubmit}>
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={contactUsForm.handleChange}
                  value={contactUsForm.values.firstName}
                  className="block w-full px-4 py-3 text-sm border border-black rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={contactUsForm.handleChange}
                  value={contactUsForm.values.lastName}
                  className="block w-full px-4 py-3 text-sm border border-black rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={contactUsForm.handleChange}
                  value={contactUsForm.values.email}
                  autoComplete="email"
                  className="block w-full px-4 py-3 text-sm border border-black rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={contactUsForm.handleChange}
                  value={contactUsForm.values.phoneNumber}
                  className="block w-full px-4 py-3 text-sm border border-black rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>
            {/* End Grid */}
            <div>
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                onChange={contactUsForm.handleChange}
                value={contactUsForm.values.details}
                rows={4}
                className="block w-full px-4 py-3 text-sm border border-black rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                defaultValue={""}
              />
            </div>
          </div>
          {/* End Grid */}
          <div className="grid mt-6">
            <button
              type="submit"
              disabled={contactUsForm.isSubmitting}
              className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send inquiry
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      {/* End Card */}
    </div>
    <div className="grid items-center gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {/* Icon Block */}
      <a
        className="flex flex-col h-full p-4 text-center rounded-lg group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 sm:p-6"
        href="#"
      >
        <svg
          className="mx-auto text-gray-800 size-9"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Knowledgebase
          </h3>
          <p className="mt-1 text-gray-500">
            We're here to help with any questions or code.
          </p>
          <p className="inline-flex items-center mt-5 font-medium text-blue-600 gap-x-1">
            Contact support
            <svg
              className="transition ease-in-out shrink-0 size-4 group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="flex flex-col h-full p-4 text-center rounded-lg group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 sm:p-6"
        href="#"
      >
        <svg
          className="mx-auto text-gray-800 size-9"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">
            FAQ
          </h3>
          <p className="mt-1 text-gray-500">
            Search our FAQ for answers to anything you might ask.
          </p>
          <p className="inline-flex items-center mt-5 font-medium text-blue-600 gap-x-1">
            Visit FAQ
            <svg
              className="transition ease-in-out shrink-0 size-4 group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="flex flex-col h-full p-4 text-center rounded-lg group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 sm:p-6"
        href="#"
      >
        <svg
          className="mx-auto text-gray-800 size-9"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Developer APIs
          </h3>
          <p className="mt-1 text-gray-500">
            Check out our development quickstart guide.
          </p>
          <p className="inline-flex items-center mt-5 font-medium text-blue-600 gap-x-1">
            Contact sales
            <svg
              className="transition ease-in-out shrink-0 size-4 group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Contact Us */}
</>

    </div>
  )
}

export default ContactUs;
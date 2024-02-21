'use client'
import Image from 'next/image';
import React, { useState } from 'react';


interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const maxWords = 100; // Set the maximum number of words

  const [wordCount, setWordCount] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const words = value.split(/\s+/); // Split text into words using whitespace as a separator
    const truncatedWords = words.slice(0, maxWords); // Truncate the words to the first 500 words
    setWordCount(truncatedWords.length);
    
    const trucatedMessage = truncatedWords.join(' ')

   
    setFormData({
      ...formData,
      [e.target.name]: trucatedMessage
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3005/createContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className='border-2'>
         {formSubmitted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-lime-700 p-4 rounded">
          Form submitted successfully!
        </div>
      )}
      
      <div className='p-5 bg-lime-800'>
            <Image src='/Nuevoearthlogo.png' alt='Nuevo Earth Logo' width={300} height={300} className='mx-auto my-auto mb-2'></Image>
           
            <p className='font-poppins text-white text-xs text-center'>Better yet, meet us in person!</p>
        </div>
    <div  className="m-2">
      <div className="mb-1">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-1">
          First Name *
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-1">
          Last Name *
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="organization" className="block text-gray-700 font-bold mb-1">
          Organization *
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}  required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-1 ">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder='Craft your impactful message in 100 words or less '
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-28 resize-none placeholder:italic placeholder:text-slate-400"
        ></textarea>
        <div className="text-right text-gray-500">
          {wordCount}/{maxWords} words
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className=" btn btn-outline border-lime-800 hover:bg-lime-800 hover:text-white hover:border-none text-lime-800 font-bold py-0  px-5 text-xs rounded focus:outline-none focus:shadow-outline m-2"
        >
          Send
        </button>
      </div>
    </div>
   </form>
   )}

   export default ContactForm
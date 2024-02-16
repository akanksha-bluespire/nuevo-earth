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
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // implement form submission logic here
    setTimeout(()=>{
        setFormSubmitted(true)
    }, 1000)
  };

  return (
    <form onSubmit={handleSubmit} className='border-2'>
         {formSubmitted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-green-500 p-4 rounded">
          Form submitted successfully!
        </div>
      )}
        <div className='p-[10%] bg-lime-800'>
            <Image src='/Nuevoearthlogo.png' alt='Nuevo Earth Logo' width={300} height={300}></Image>
            <br></br>
            <p className='font-poppins text-white text-sm text-center'>Better yet, meet us in person!</p>
        </div>
    <div  className="m-[5%]">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="organization" className="block text-gray-700 font-bold mb-2">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange} required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
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
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className=" btn btn-outline border-lime-800 hover:bg-lime-800 hover:text-white hover:border-none text-lime-800 font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline m-[7%]"
        >
          Send
        </button>
      </div>
    </div>
   </form>
   )}

   export default ContactForm
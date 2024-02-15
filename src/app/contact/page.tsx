// components/ContactSection.js
"use client"
import React, { useState } from 'react';
import "../styles/contact.css"
import Image from 'next/image';
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}
const ContactPage = () => {

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitMessage('Form submitted successfully!');
    console.log('Form submitted:', formData);
    setErrors({});
  };
  const validateForm = (data: FormData) => {
    const errors: Record<string, string> = {};
    if (!data.firstname.trim()) {
      errors.firstname = 'First name is required';
    }

    if (!data.lastname.trim()) {
      errors.lastname = 'Last name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (

    <div>

        <title>
          Contact-NUEVO EARTH
        </title>
        <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/6.png')] bg-cover bg-center">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >Contact Us</h1>
                                        
                                    </div>
                              </div>
                        </div>

      <div className="section1">
        {/* <h1 className="h1">Contact</h1> */}
        <br />
        <Image src='/design/15.png' alt="contact image" width={400} height={400} className='m1'></Image>
        <p className='p1'>Please feel free to call or email us, or use our <br />contact form to get in touch with us. We look <br />forward to hearing from you!</p>
        <br />
      </div>
      <div className=''>
      <div className="section2">
        <div className="left">
          <h2 className='h2'><b>Let's build amazing things together</b></h2><br />
          <p>MBDA Business Center 13 Fifth Avenue, New York, NY 10160</p><br />
          <p>847-345-3255</p><br />
          <p>contact@example.com</p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="first_name">
              <label>First Name <span className="required">*</span></label>
              <br />
              <input className='input1' type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
              {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="last_name">
              <label>Last Name <span className="required">*</span></label><br />
              <input className='input1' type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
              {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname}</p>}
            </div>
            <br />
            <br />
            <br />
            <div>
              <label>Email <span className="required">*</span></label><br />
              <input className='input1' type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <br />
            <div>
              <label>Message</label>
              <br />
              <textarea className='message' name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <br />
            <button className="bg-green-700 mb-[2%] px-4 py-3 text-white" type="submit">Submit</button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
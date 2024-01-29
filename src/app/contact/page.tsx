// components/ContactSection.js
"use client"
import React, { useState} from 'react';
import "../styles/contact.css"
    const ContactPage = () => {
        
        const [formData, setFormData] = useState({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
        const [submitMessage, setSubmitMessage] = useState('');
        const handleChange = (e: { target: { name: any; value: any; }; }) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        };
      
        const handleSubmit = (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          setSubmitMessage('Form submitted successfully!');
          console.log('Form submitted:', formData);
        };
  return (

    <div>
    <div className="section1">
    <h1 className="h1">Contact</h1>
    <br/>
    <p className='p'>Please feel free to call or email us, or use our <br/>contact form to get in touch with us. We look <br/>forward to hearing from you!</p>
    <br/>
    </div>
    <div className="section2">
        <div className="left">
            <h2 className='h2'><b>Let's build amazing things together</b></h2><br/>
            <p>MBDA Business Center 13 Fifth Avenue, New York, NY 10160</p><br/>
            <p>847-345-3255</p><br/>
            <p>contact@example.com</p>
        </div>
        <div className="right">
            <form onSubmit={handleSubmit}>
                <div className="first_name">
                <label>First Name <span className="required">*</span></label>
                <br/>
                <input className='input1' type="text" name="firstname" value={formData.firstname} onChange={handleChange}/>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="last_name">
                <label>Last Name <span className="required">*</span></label><br/>
                <input className='input1' type="text" name="lastname" value={formData.lastname} onChange={handleChange}/>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                <label>Email <span className="required">*</span></label><br/>
                <input className='input1' type="email" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <br />
                <div>
                <label>Message</label>
                <br/>
                <textarea className='message' name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <br />
                <button className="button" type="submit">Submit</button>
                {submitMessage && <p className="submit-message">{submitMessage}</p>}
            </form>
            
        </div>
    </div>
</div>
  );
    };
  export default ContactPage;
// Import necessary dependencies and components
'use client'
import React, { useState } from 'react';
import ContactForm from './Contactform';
import Image from 'next/image';

const Message = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className='fixed bottom-0 right-0'>
      <div className="dropdown dropdown-top dropdown-left">
        {formVisible ? (
          // Display the message icon for closing the form with a smooth transition
          <Image
            src='/cross-mark.png' // Replace with the path to your message icon for closing
            alt='Close icon'
            width={80}
            height={80}
            className='rounded-full '
            tabIndex={0}
            role="button"
            onClick={toggleForm}
          />
        ) : (
          // Display the message icon when form is not visible
          <Image
            src='/message.png' // Replace with the path to your message icon
            alt='Message icon'
            width={80}
            height={80}
            className='m-0 '
            tabIndex={0}
            role="button"
            onClick={toggleForm}
          />
        )}
        {formVisible && (
          <ul
            tabIndex={0}
            
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box border-2 border-lime-800 w-80 text-xs"  
          >
            <ContactForm />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Message;

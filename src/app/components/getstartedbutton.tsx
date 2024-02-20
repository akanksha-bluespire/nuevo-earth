
'use client'
import React from 'react';
interface GetStartedButtonProps {
  scrollToRef: React.RefObject<HTMLDivElement>;
}
const GetStartedButton: React.FC<GetStartedButtonProps> = ({ scrollToRef }) => {
  const handleGetStartedClick = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='getstartedbutton'>
      <button className=" mb-[2%] px-5 py-4 text-white btn btn-outline hover:bg-white hover:text-green-700 hover:border-none" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};
export default GetStartedButton;

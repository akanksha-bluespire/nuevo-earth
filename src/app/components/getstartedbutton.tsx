
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
    <div>
      <button className="btn btn-primary" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};
export default GetStartedButton;

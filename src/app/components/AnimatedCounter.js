'use client'
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ label, endCount, className }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the counter animation when the element enters the viewport
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0, // Adjust the threshold as needed
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const duration = 1500;
    const steps = 50;
    const start = 0;

    const increment = (endCount - start) / steps;

    let currentCount = start;

    const intervalId = setInterval(() => {
      currentCount += increment;
      setCount(Math.ceil(currentCount));

      if (currentCount >= endCount) {
        clearInterval(intervalId);
      }
    }, duration / steps);
  };

  return (
    <div ref={counterRef} className={`text-center  mb-[7%] ${className}`}>
      <h2 className='sm:text-xl text-sm font-semibold mb-4'>{label}</h2>
      <p className='sm:text-3xl text-lg font-semibold text-lime-700'>{count}+</p>
    </div>
  );
};

export default AnimatedCounter;

'use client'
import { useEffect } from 'react';
import { useState } from 'react';

const AnimatedCounter = ({label,endCount, className}) => {
    const [count,setCount] = useState(0);

    useEffect(()=>{        
        const duration = 1000;
        const steps = 50; 
        const start = 0;

        const increment = (endCount-start)/steps;

        let currentCount = start;

        const intervalId = setInterval(()=>{
            currentCount += increment;
            setCount(Math.ceil(currentCount));


            if (currentCount >=endCount){
                clearInterval(intervalId);
            }
        },duration/steps);

        return () => clearInterval(intervalId);
    },[]);

    return (
        <div className='text-center mx-10 mb-[7%]'>
            <h2 className='text-xl font-semibold mb-4'>{label}</h2>
            <p className='text-3xl font-semibold text-lime-700'>{count}+</p>
        </div>
    );
};

export default AnimatedCounter;
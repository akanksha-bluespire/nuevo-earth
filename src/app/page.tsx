'use client'
import React from 'react'
import AnimatedCounter from "./components/AnimatedCounter";
import HomePage from "./components/HomePage";
import Carousel from "./components/Carousel.jsx";
import Clients from "./components/Clients";
import Cards from "./components/Cards"
import SlidingCards from './components/SlidingCards';
// import EmpowerComp from "./components/EmpowerComp"
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/tailwind.css'

const Home = () => {
  return (
    <div className="w-full">
      <title>NUEVO-EARTH</title>

      <HomePage />
      <div className="container mx-auto mt-8 mb-8">

      </div>
      <Carousel />
      {/* <EmpowerComp /> */}
      <div className="flex items-center justify-center mb-8 h-36 gap-0 sm:flex-row sm:pl-8 sm:pr-8 ">
        <AnimatedCounter label="Number of Projects" endCount={150} className=' sm:flex-1' />
        <AnimatedCounter label="Happy Clients" endCount={130} className=" sm:flex-1" />
        <AnimatedCounter label="Awards Received" endCount={25} className=" sm:flex-1" />
        <AnimatedCounter label="Team Members" endCount={40} className="sm:flex-1" />
      </div>
       <div className=''>
        <h2 className='text-3xl font-bold text-center mb-10'>What we do</h2>
         <Cards />
      </div> 

      <div>
        <h2 className='text-3xl font-bold text-center mb-10'>Our Clients</h2>
        <Clients />
      </div>
      <div className='mt-10'>

      </div>
    </div>
  );
};

export default Home;

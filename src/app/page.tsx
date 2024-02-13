import React from 'react'
import AnimatedCounter from "./components/AnimatedCounter";
import HomePage from "./components/HomePage";
import Carousel from "./components/Carousel";
import Clients from "./components/Clients";
// import EmpowerComp from "./components/EmpowerComp"
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/tailwind.css'
import Cards from './components/Cards';
const Home = () => {
  return (
    <div className="w-full">

      <HomePage />
      <div className="container mx-auto mt-8 mb-8">

      </div>
      <Carousel />
      {/* <EmpowerComp /> */}
      <div className="flex items-center justify-center mt-8 mb-8 h-36 flex-wrap">
        <AnimatedCounter label="Number of Projects" endCount={150} className='flex-1' />
        <AnimatedCounter label="Happy Clients" endCount={130} className="flex-1" />
        <AnimatedCounter label="Awards Received" endCount={25} className="flex-1" />
        <AnimatedCounter label="Team Members" endCount={40} className="flex-1" />
      </div>

      <div>
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

import React from 'react'
import AnimatedCounter from "./components/AnimatedCounter";
import HomePage from "./components/HomePage";
import Carousel from "./components/Carousel";
import Clients from "./components/Clients";
import EmpowerComp from "./components/EmpowerComp"
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/tailwind.css'


const Home = () =>{
    return (
        <div className="container mx-auto">
            

           <HomePage/>

           <div className="container mx-auto mt-8 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
                <Carousel/>
            </div>


            <EmpowerComp/>
        
            <div className="flex items-center justify-center h-36">
                <AnimatedCounter label="Number of Projects" endCount={150} className='flex-1'/>
                <AnimatedCounter label="Happy Clients" endCount={130} className="flex-1"/>
                <AnimatedCounter label="Awards Received" endCount={25} className="flex-1"/>
                <AnimatedCounter label="Team Members" endCount={40} className="flex-1"/>
            </div>
            

            <div>
                <h2 className='text-2xl font-bold text-center mb-5'>Our Clients</h2>
                <Clients/>
            </div>
           
        </div>
    );
};

export default Home;

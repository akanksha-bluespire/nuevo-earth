'use client';

import React from 'react'
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const services = [
        {
            id:1,
            image : '/bck.jpg',
            title : 'Service 1',
            description : "Description for Service 1"
        },
        {
            id : 2,
            image : '/bck.jpg',
            title : 'Service 2',
            description : "Description for Service 2"
        },
        {
            id : 3,
            image : '/bck.jpg',
            title : 'Service 3',
            description : "Description for Service 3"
        },
        {
            id : 4,
            image : '/bck.jpg',
            title : 'Service 4',
            description : "Description for Service 4"
        },
        {
            id : 5,
            image : '/bck.jpg',
            title : 'Service 5',
            description : "Description for Service 5"
        },
        {
            id : 6,
            image : '/bck.jpg',
            title : 'Service 6',
            description : "Description for Service 6"
        }
    ];

    const settings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 3,
        centerPadding: "60px",
        autoplay:true,
        autoplaySpeed: 2000,

        responsive : [
            {
                breakpoint : 768,
                settings : {
                    sliderToShow : 1,
                },
            },
        ],
    };
  return (
    <div>
      <Slider {...settings} className="mx-[3%]">
        {services.map((service)=>(
            <div key = {service.id} className='p-4 '>
                <img src = {service.image} alt={service.title} className="mb-4 rounded-md w-full h-64 object-cover"/>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
                <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
                    Read More
                </button>
            </div>
        ))}

      </Slider>
    </div>
  );
};

export default Carousel

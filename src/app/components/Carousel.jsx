'use client';

import React from 'react'
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const services = [
        {
            id: 1,
            title: 'Reduced permit application processing times by an average of 95 percent',
            description: "Description for Service 1"
        },
        {
            id: 2,
            title: 'An estimated annual economic benifits of $268 million realized for Arizona',
            description: "Description for Service 2"
        },
        {
            id: 3,
            title: '2022 & 2018 NASCIO.2021 Granicus Digital Government.2021 Gartner Case Study.2020 CIO 100 awards and more',
            description: "Description for Service 3"
        },
        {
            id: 4,
            title: 'Digital  enterprise e-permitting solution(myDEQ) saved Arrizona DEQ $XX million dollars',
            description: "Description for Service 4"
        },
        {
            id: 5,
            title: 'Eliminate over 90% of application errors even before submittal',
            description: "Description for Service 5"
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    sliderToShow: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings} className="mx-[30%] h-[40%] ">
                {services.map((service) => (
                    <div key={service.id} className='p-4 w-[30%] flex text-center	 ' >

                        <h3 className='text-3xl font-bold mb-2 flex-1 '>{service.title}</h3>

                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default Carousel


'use client';

import React from 'react'
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const services = [
        {
            title: 'Reduced permit application processing times by an average of 95 percent',
        },
        {
            title: 'An estimated annual economic benifits of $268 million realized for Arizona',
        },
        {
            title: '2022 & 2018 NASCIO.2021 Granicus Digital Government.2021 Gartner Case Study.2020 CIO 100 awards and more',
        },
        {
            title: 'Digital  enterprise e-permitting solution(myDEQ) saved Arrizona DEQ $XX million dollars',
        },
        {
            title: 'Eliminate over 90% of application errors even before submittal',
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerPadding: '0px',
        autoplay: true,
        arrows: false,
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
            <div className=' max-w-full h-ful max-h-50 bg-gradient-to-r from-white 40% to-blue-500 p-10 relative '>
                <Slider {...settings} className="mx-auto">
                    {services.map((service) => (
                        <div key={service.title} className='p-6 w-[60%] mx-auto text-center' >
                            <p className='text-3xl font-bold mb-2 '>{service.title}</p>
                        </div>
                    ))}

                </Slider>

            </div >
        </div>


    );
};

export default Carousel;


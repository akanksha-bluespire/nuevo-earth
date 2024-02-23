'use client'
import React, { useState } from 'react';

const StackingSlider = () => {
  const data = [
    { title: "Nuevo Earth Core", description: "Subscribe to an industry-leading E-Permitting and Compliance Govtech platform built for regulators, by regulators." },
    { title: "Custom Solutions", description: "Leverage our regulatory and technology expertise to create tailor-made software solutions that precisely align with your unique needs." },
    { title: "Consulting", description: "Do not know where to begin or what you need? Engage our experts to assess and advise. We can further help you implement the findings. " },
    { title: "Do It Yourself (DIY)", description: "You know what you need! Great. Let us help you develop the roadmap and implement it." },
  ];

  // State to track the current active card index
  const [activeCardIndex, setActiveCardIndex] = useState(data.length-3);

  // Function to handle previous button click
  const handlePrev = () => {
    setActiveCardIndex(prevIndex => Math.min(4, prevIndex +1));
  };

  // Function to handle next button click
  const handleNext = () => {
    setActiveCardIndex(prevIndex => Math.max(1, prevIndex -1)); // Assuming 4 cards
  };

  const activeIndex = (index) => {
    if (activeCardIndex === 4) {
      return index;
    } else if (activeCardIndex === 3) {
      if (index === 3)
        return 1;
      else return 0;
    } else if (activeCardIndex === 2) {
      if (index === 3)
        return 2;
      else if (index === 2)
        return 1;
      else
        return 0;
    } else if (activeCardIndex === 1) {
      if (index === 3)
        return 3;
      else if (index === 2)
        return 2;
      else if (index === 1)
        return 1;
      return 0;
    }
  };

  return (
    <div className="w-embed">
      <style>
        {`
        .arrows {
            margin-top: 20px; /* Adjust margin-top as needed */
            margin-left:50px;
          }
         
          .arrows button {
            margin: 0 10px; /* Adjust margin between buttons as needed */
            padding: 0px 20px; /* Adjust padding as needed */
            font-size: 16px; /* Adjust font size as needed */
            background-color: #007bff; /* Button background color */
            color:skyblue; /* Button text color */
            border: none; /* Remove button border */
            border-radius: 5px; /* Button border radius */
            cursor: pointer; /* Show pointer cursor on hover */
          }
         
          .arrows button:hover {
            background-color: green; /* Change button background color on hover */
          }
         
          .is--disabled-arrow {
            opacity: 0.2;
            pointer-events: none;
          }
          .main-content {
            z-index: 9999999999;
            top:0;
            left: 25%;
            display: flex;
            align-items: center;
            justify-content: top;
            flex-flow: column;
            height: 50vh;
            background: transparent;
             margin-left:80px;
          }
          .noise {
            z-index: 9999999999;
            top: 0;
            left: 0;
            width: 100%;
            height: 5vh;
            pointer-events: none;
            opacity: .06;
            margin-top:5px; 
          }
          .card {
            position: absolute;
            width: 300px; /* Adjust width as needed */
            height: 220px; /* Adjust height as needed */
            background-color: #a4bfc3; /* Sample background color */
            border-radius: 10px; /* Add border radius if needed */
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Add shadow if needed */
            overflow: hidden;
            padding: 20px;
            transition: transform 1s ease;
            z-index: 1;
            margin-left:-1050px;
          }
          .card.active {
            transform: translateX(calc(100% * var(--active-index)));
          }
          .card:nth-child(even) {
            background-color: #aae0bc; /* Sample background color */
          }
          .card:nth-child(4) {
            margin-right: -150px;
          }
          .card:nth-child(2) {
            margin-right: -50px; 
          }
          .card:nth-child(3) {
            margin-right: -100px;
          }
          .card:nth-child(3n) {
            //background-color: #f2fe9a; /* Sample background color */
          }
          .card-content {
            padding: 20px;
            color: #ffffff; /* Sample text color */
            text-align: center;
          }
          .card-container {
            position: relative;
            height: 200px;
            display: flex;
            justify-content: center; /* Adjust as needed */
            align-items: center; /* Adjust as needed  */
          }
          @media only screen and (max-width: 768px) {
            .card {
              width: 300px; /* Set width to 80% of the container */
              height:100%; /* Allow height to adjust based on content */
              margin-left: 0px; /* Remove the left margin */
              transition: transform 0.5s ease;
              margin: 3px; 
            }
            
            .main-content {
               margin-left:0px;
               align-items: center;
               justify-content: center;
               height: 100vh;
               overflow-y:auto;
            }
            .arrows {
              position: absolute;
              top: 2030px; /* Adjust the distance from the top as needed */
              left: 170px; /* Adjust the distance from the left as needed */
              flex-direction: column;
            }
            .arrows button {
              padding: 3px 10px; /* Adjust padding as needed */
              margin-top: 10px;  
            }
            .card.active {
              transform: translateY(calc(100% * var(--active-index)));
            }
            .card:nth-child(4) {
              margin-top: 150px;
            }
            .card:nth-child(2) {
              margin-top: 50px;
            }
            .card:nth-child(3) {
              margin-top: 100px;
            } 
            .card-container {
              position: relative;
              justify-content: center; /* Adjust as needed */
              align-items: center; /* Adjust as needed */
              display: flex; /* Add display flex to ensure proper alignment */
              flex-wrap: wrap; 
              // margin-bottom:-2300px;
              flex-direction: column;
              margin-top:-570px;
            
            } 
            .card:not(:first-child) {
              margin-right:0px; 
            } 
          }                    
          }
          }
         `}
      </style>
      <canvas id="noise" className="noise" width="1536"></canvas>
      <main role="main" className="main-content">
        <div className="container ">
          <div className="slide_contain card-container h-84">
            {data.map((item, index) => (
              <div key={index} className={`card ${activeCardIndex > 0 && activeCardIndex <= index? 'active' : ''}`} style={{ '--active-index': activeIndex(index) }}>
                <div style={{ height: "40px" }}>
                  <b><h1><p style={{ fontSize: '25px'}}>{item.title}</p></h1></b>
                </div>
                <p style={{ fontSize: '17px' }}>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="arrows">
            <button className="prev" onClick={handlePrev}>
            &uarr; 
            </button>
            <button className="next" onClick={handleNext}>
            &darr; 
            </button>

          </div>
        </div>
      </main>
    </div>
  );
};

export default StackingSlider;




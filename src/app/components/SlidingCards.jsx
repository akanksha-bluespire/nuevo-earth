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

 
  const handlePrev = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleNext = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
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
            padding: 10px 30px; /* Adjust padding as needed */
            font-size: 16px; /* Adjust font size as needed */
            border-radius: 5px; /* Button border radius */
            cursor: pointer; /* Show pointer cursor on hover */
            border: 1px solid;
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
            height: 40vh;
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
            background-color: white; /* Sample background color */
            border-radius: 10px; /* Add border radius if needed */
            box-shadow: 0px 0px 10px #3f6212; /* Add shadow if needed */
            overflow: hidden;
            padding: 20px;
            transition: transform 1s ease;
            z-index: 1;
            margin-left:-1050px;
            border:2px solid  #3f6212;
          }
          .card.active {
            transform: translateX(calc(100% * var(--active-index)));
          }
          .card:nth-child(even) {
            background-color: white; /* Sample background color */
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
         `}
      </style>
      <canvas id="noise" className="noise" width="1536"></canvas>
      <main role="main" className="main-content">
        <div className="container">
          <div className="slide_contain card-container">
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
            <button className="prev btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800" onClick={handlePrev}>
              &lt; {/* Left arrow */}
            </button>
            <button className="next btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800" onClick={handleNext}>
              &gt; {/* Right arrow */}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StackingSlider
// components/Cards.js
import React from 'react';
import Link from 'next/link';
import { data } from "../../../utils/constants"
import "../styles/home.css"
const Cards = () => {
  return (
    <div style={{ display: 'grid', margin: '100px 0px', gridTemplateColumns: 'repeat(auto-fill, minmax(287px, 0fr))', gap: '20px', justifyContent: 'center', width: "auto", alignItems: 'center' }}>
      {data.map((item, index) => (
        // card heading
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '0', padding: '20px', margin: '10px', width: 'fit-content', height: '400px', color: 'black', backgroundColor: "White" }} className="card"><br></br>

          <h1 style={{ fontSize: '30px', fontWeight: '600', color: 'black' }} className="card-title">{item.title}</h1> <br></br>


          {/* /* //card discription */}
          <p style={{ color: 'black', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>{item.description}</p>
        </div>
      ))}
    </div>

  );
};

export default Cards;
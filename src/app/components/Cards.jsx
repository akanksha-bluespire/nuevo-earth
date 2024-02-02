// components/Cards.js
import React from 'react';
import Link from 'next/link';
import {data} from "../../../utils/constants"
import "../styles/home.css"
const Cards = () => {
  return (
    <div style={{ display: 'grid', margin: "auto", gridTemplateColumns: 'repeat(auto-fill, minmax(287px, 0fr))', gap: '20px', justifyContent: 'center', width: "1000px" }}>
      {data.map((item, index) => (
        // card heading
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: 'auto', height: 'auto', backgroundColor: 'whitesmoke', color: 'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}className="card">
          <Link href={`/${encodeURIComponent(item.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 style={{ fontSize: '21px', fontWeight: '1000', color: 'black',}} className="card-title">{item.title}</h1> 
          </Link>

          {/* //card number */}
          <p style={{ fontSize: '20px', fontWeight: '1000', color: 'black', cursor: 'pointer' }}>{item.values}</p>
          
        {/* /* //card discription */ }
              <p style={{ color: 'black', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

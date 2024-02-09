// components/Cards.js
import React from 'react';
import { data } from "../../../utils/constants"
import "../styles/home.css"
const Cards = () => {
  return (
    <div style={{ display: 'grid', marginRight: '100px', marginLeft: '100px', marginTop: '50px', marginBottom: '50px', gridTemplateColumns: 'repeat(auto-fill, minmax(287px, 0fr))', gap: '20px', justifyContent: 'center', alignItems: 'center', height: "auto", width: "auto", alignItems: 'center' }}>
      {data.map((item, index) => (
        <div key={index} style={{ border: '2px solid black', borderRadius: '0', textAlign: 'center', padding: '20px', margin: '10px', width: 'fit-content', height: '300px' }} className="card"><br></br>
          <div style={{ height: "100px" }}>
            <p style={{ fontSize: '30px' }}>{item.title}</p>
          </div>
          <p style={{ fontSize: '16px' }}>{item.description}</p>
        </div>
      ))}
    </div>

  );
};

export default Cards;
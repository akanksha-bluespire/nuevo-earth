import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="card w-96 h-160 bg-base-100 mx-14 my-10 rounded-none transition-transform transform hover:scale-105 mr-10 ">
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-none" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary transition-transform transform hover:scale-105">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Link from 'next/link';
interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  redirection: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, redirection }) => {
  return (
    <div className="card w-full h-90 sm:w-96 bg-base-100 rounded-none transition-transform transform hover:scale-105 p-0">
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-none" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-5">
          <Link href={redirection} className="btn btn-outline border-lime-900 text-lime-900 hover:bg-lime-900 mb-[2%] px-3 py-2 hover:text-white font-poppins font-semibold rounded">Read More
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Card;

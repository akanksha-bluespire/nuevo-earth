import React from 'react';
import Link from 'next/link';
interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  redirection:string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description ,redirection}) => {
  return (
    <div className="card w-full sm:w-96 h-160 bg-base-100 m-40 sm:m-8 rounded-none transition-transform transform hover:scale-105">
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-none" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
      {/* <h1>
      <a href="https://nextjs.org" className="bg-blue-500 text-white p-3 rounded-md">Learn More</a>
      </h1> */}
          <Link href={redirection} className="bg-blue-500 text-white p-3 rounded-md ">Read More
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Card;
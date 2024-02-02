import React from 'react';

const clientsData = [
  { logoSrc: '/myntra.svg', name: 'Myntra' },
  { logoSrc: '/flipkart.svg', name: 'Flipkart' },
  { logoSrc: '/amazon.svg', name: 'Amazon' },
  { logoSrc: '/twitter.svg', name: 'Twitter' },
  { logoSrc: '/insta.svg', name: 'Instagram' },
  { logoSrc: '/pinterest.svg', name: 'Pinterest' },
];

const Clients = () => {
  return (
    <div className='mx-[3%] bg-gradient-to-r'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {clientsData.map((client, index) => (
          <div key={index} className=' bg-white  rounded-md flex flex-col items-center justify-center'>
            <img src={client.logoSrc} alt={`${client.name} Logo`}  className='mb-2'/>
            <span className='text-center font-semibold'>{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;

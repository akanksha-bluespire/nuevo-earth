import React from 'react'

const Clients = () => {
  return (
    <div className='mx-[3%] bg-gradient-to-r'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border border-blue-500'>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          Myntra
        </div>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          Flipkart
        </div>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          Amazon
        </div>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          American Express
        </div>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          Citizens
        </div>
        <div className='p-4 bg-white shadow-md rounded-md flex items-center justify-center'>
          Bluespire
        </div>
      </div>
    </div>
  )
}

export default Clients

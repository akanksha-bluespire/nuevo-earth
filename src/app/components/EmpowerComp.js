import React from 'react'
import Image from 'next/image'

const EmpowerComp = () => {
  return (
    <div className='flex max-w-full h-ful max-h-50 bg-gradient-to-r from-white 40% to-blue-500 p-4'>
      <div className='flex-1 mx-[3%]  my-auto'>
        <h2 className="text-3xl font-bold mb-[2%] font-Lora">Empowering you through E-permitting solutions</h2>
        <p className='mb-[2%] text-lg font-poppins'>At Nuevo Earth, we understand the challenges faced by environmental businesses. That's why we offer cost-effective e-permitting
          solutions that are designed to enhance your mission. Our founders have over 10 years of experience working directly for a state
          regulatory and permitting agency, so we know how to deliver the best possible results.
        </p>
        <button className='bg-green-700 mb-[2%] px-4 py-3 text-white'>Read More</button>

      </div>
      <div className='flex-1 flex items-center justify-center ml-8 '>
        <Image src="/empower.jpg" alt="Empower Image" width={500} height={500} className="rounded-lg intrinsic" />
      </div>



    </div>
  )
}

export default EmpowerComp

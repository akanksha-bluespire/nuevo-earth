'use client'
import React from 'react'
import Image from 'next/image'
import Tree from '../components/Tree'

interface ProductsPageProps {
    totalScrolls: number;
    divisions: number;
  }

const page3 : React.FC<ProductsPageProps> = ({ totalScrolls }) => {
  return (
    
    <div>
        <div className='relative min-h-screen'>
      <div className='bg-white bg-fixed text-black bg-cover w-full h-full font-poppins'>
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col">
          <div className="w-full h-1/2 bg-[url('/design/13.png')] bg-cover bg-center">
            <div className="w-full h-full backdrop-brightness-50 pt-[17%] pl-[7%] pb-[4%]">
              <h1 className="text-white text-6xl font-bold font-Lora">What we Offer</h1>
            </div>
          </div>
        </div>
        <div>
        <div className='w-[40%] m-[7%] '>
        <div className=''>
            <div>
                <div><h2  className='text-2xl font-semibold mb-[3%] mt-[4%] text-center'>E Permits / Registrations </h2></div>
                <div ><Image src="/design/4.png" alt='E Permits / Registartions' width={500} height={500} className='mx-auto my-auto p-[5%]'></Image></div>
            </div>
            <div >
                <p className='mb-[10%] text-justify'>What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            </div>
            <div>
                <button className='btn btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800'>Get Started</button>
        </div>
        </div>

        <div>
            <div>
                <h2  className='text-2xl font-semibold mb-[3%] mt-[4%] text-center'> E-Compliance Reporting </h2>
                <Image src="/design/14.png" alt='E-Compliance Reporting' width={500} height={500} className='mx-auto my-auto p-[5%]' id='division-5'></Image>

            </div>
            <div>
                <p className='mb-[10%] text-justify'>What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            </div>
            <div>
                <button className='btn btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800'>Get Started</button>
            </div>
        </div>

        <div>
            <div>
                <h2  className='text-2xl font-semibold mb-[3%] mt-[4%] text-center'> Other Applications </h2>
                <Image src="/design/15.png" alt='Other Applications' width={500} height={500} className='mx-auto my-auto p-[5%]'></Image>

            </div>
            <div>
                <p className='mb-[10%] text-justify'>What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            </div>
            
        </div>

        <div>
                <button className='btn btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800'>Get Started</button>
        </div>
        </div>


        {/* <div className='w-1/2'>
            <div>
                <h1 className='text-3xl font-bold mb-[3%] mt-[14%] text-center'>E-Permits/Registrations</h1>
                <p className='mb-[10%] text-justify'>It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference.</p> 
            </div>
            <div>
                    <Image src="/design/18.png" alt='Other Applications' width={500} height={500} className='mx-auto my-auto p-[5%]'></Image>
            </div>
            
            <div>
                <h2 className="text-xl font-semibold mb-2" >Air Rock Products General Permits</h2>
                        <ul className="list-disc ml-4">
                            <li>Concrete Batch Plant (CBP)</li>
                            <li>Crushing & Screening Plant (C&S)</li>
                            <li>Hot-Mix Asphalt Plant (HMAP)</li>
                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Grow It</h2>
                        <ul className="list-disc ml-4">
                            <li>Description Goes Here</li>

                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Stormwater NOI</h2>
                        <ul className="list-disc ml-4">
                            <li>Construction GP</li>
                            <li>Multi-Sector GP</li>
                        </ul>

                </div>
                
            
        </div>

        
        <div className='w-1/2'>
            <div>
                <h1 className='text-3xl font-bold mb-[3%] mt-[14%] text-center'>E-Compliance Reporting</h1>
                <p className='mb-[10%] text-justify'>It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference.</p>
            </div>
            <div>
                    <Image src="/design/17.png" alt='Other Applications' width={500} height={500} className='mx-auto my-auto p-[5%]'></Image>
            </div>
            
            <div>
                <h2 className="text-xl font-semibold mb-2" >Air Rock Products General Permits</h2>
                        <ul className="list-disc ml-4">
                            <li>Concrete Batch Plant (CBP)</li>
                            <li>Crushing & Screening Plant (C&S)</li>
                            <li>Hot-Mix Asphalt Plant (HMAP)</li>
                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Grow It</h2>
                        <ul className="list-disc ml-4">
                            <li>Description Goes Here</li>

                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Stormwater NOI</h2>
                        <ul className="list-disc ml-4">
                            <li>Construction GP</li>
                            <li>Multi-Sector GP</li>
                        </ul>

                </div>
                

        </div>

        
        <div className='w-1/2'>
            <div>
                <h1 className='text-3xl font-bold mb-[3%] mt-[14%] text-center'>Other Applications</h1>
                <p className='mb-[3%] text-justify'>It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference.</p>
            </div>
            <div>
                    <Image src="/design/12.png" alt='Other Applications' width={500} height={500} className='mx-auto my-auto p-[5%]'></Image>
            </div>
            
            <div>
                <h2 className="text-xl font-semibold mb-2" >Air Rock Products General Permits</h2>
                        <ul className="list-disc ml-4">
                            <li>Concrete Batch Plant (CBP)</li>
                            <li>Crushing & Screening Plant (C&S)</li>
                            <li>Hot-Mix Asphalt Plant (HMAP)</li>
                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Grow It</h2>
                        <ul className="list-disc ml-4">
                            <li>Description Goes Here</li>

                        </ul>

                </div>
                
                <div>
                <h2 className="text-xl font-semibold mb-2" >Stormwater NOI</h2>
                        <ul className="list-disc ml-4">
                            <li>Construction GP</li>
                            <li>Multi-Sector GP</li>
                        </ul>

                </div>
                
        <div>
            <button className='btn btn-outline border-lime-800 text-lime-800 mt-[10%] hover:bg-lime-800 hover:text-white hover:border-lime-800'>Learn More</button>
        </div>
                
            
        </div> */}
        <div className='fixed top-[50%] right-[3%] w-1/2 '>
            <Tree totalScrolls={totalScrolls}/>
        </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default page3

'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "../styles/product.css"
import "../styles/mainService.css";
import "../../../public/Nature.jpg"
import { OurservicesHeader } from "../../../utils/info";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  detail: string;
  content: { id: string; name: string; description: string, image: string }[];
};

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "E-Permits / Registrations",
      image: "/E-com.jpg",
      content: [
        { id: "1", name: "Concrete Batch Plant (CBP) ", description: " Mobile Concrete Batching Plant have the world's latest Twin Shaft Mixer technology for fast and homogeneous mixing with fully automatic PLC control system with SCADA/HMI. Its Rugged and compact design makes it suitable for handling all types of concrete with high accuracy and minimum maintenance.", image: "/cbp.jpg" },
        { id: "2", name: "Crushing & Screening Plant (C&S) ", description: "A crushing plant setup is a series of machines that are designed to take large pieces of concrete, asphalt or rock and break them into smaller pieces. The crushed material can then be used for construction, landscaping, and other purposes.KYB-Conmat Mobile Concrete Batching Plant have the world's", image: "/E-com.jpg" },
        { id: "3", name: "Hot-Mix Asphalt Plant (HMAP)", description: "HMA is the traditional process for constructing asphalt pavements. HMA is manufactured in a central mixing facility (typically called a hot mix plant) and consists of high quality aggregate and asphalt cement. The two are heated and mixed while hot to completely coat the aggregate with asphalt cement.", image: "/E-com.jpg" },
        { id: "4", name: "Construction GP", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        { id: "5", name: "Multi-Sector GP", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg", },
        { id: "6", name: "Description text goes here", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },

      ],
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",

      description:
        "E-Permit is a web-based solution that includes complete life cycle of different types of permits provided by State Transport Authority or Regional Transport Authority.",

    },
    {
      id: "2",
      name: "E-Compliance Reporting",
      image: "/E-com.jpg",
      content: [
        { id: "1", name: "Rock Products Annual Compliance", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },
        { id: "2", name: "Air Quality Excess Emissions ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        { id: "3", name: "Air Quality Excess Emissions ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        { id: "4", name: "surya", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },
        { id: "5", name: "raj", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        { id: "6", name: "kumar", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },

      ],
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",
      description:
        "eCompliance is a biometrics based Android application loaded onto an Android tablet which is connected to a fingerprint reader and/or iris scanner. It was developed by Microsoft Research for the use of Operation ASHA – an NGO dedicated to healthcare treatment, especially tuberculosis.",
    },
    {
      id: "3",
      name: "Other Applications",
      image: "/Nature.jpg",
      content: [
        { id: "1", name: "Operator Certification Online Portal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        { id: "2", name: "Open Burn Permit Online Portal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },
        { id: "3", name: "Vehicle Emissions Testing Exemptions", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
      ],
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",
      description:
        "What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.",
    },
  ]);

  return (
    <div>
      <div className="px-20 py-5">
        <h2 className="text-4xl font-bold text-black-500 text-center ">Products</h2>
        {/* <p className="text-3xl font-medium text-black my-4">What we offer</p> */}
        <div className='top flex flex-row-reverse flex-wrap gap-10'>
          <div className="ServicesHeader">
            <h1 className='title'>What we offer</h1>
            <p>{OurservicesHeader}</p>
          </div>
          <div className="Header">
            <Image src={"/tech2.jpg"} alt="image1 " width={500} height={700} className='tech2'></Image>
          </div>
        </div>



        {products.map((product, index) => (
          <div className='top flex flex-wrap items-stretch gap-5 product-box'>
            <div className="productHeader flex flex-col justify-between p-10">
              <div>
                <h1 className='titleHead'>{product?.name}</h1>
                <p>{product?.description}</p>
              </div>
              <div>
                <button
                  className="view-button"
                  onClick={() => {
                    router.push(`/products/view?id=${product?.id}`);
                    localStorage.setItem("product", JSON.stringify(product));
                  }}
                >
                  View Product
                </button>
              </div>

            </div>
            <div className="Header">
              <Image src={product?.image} alt="image1 " width={500} height={700} className='tech2'></Image>
            </div>
          </div>

          // <div key={index} className="product-card">
          //   <div>
          //     <img
          //       src={product.image}
          //       alt="e permit"
          //       className="image-card"
          //     />
          //   </div>
          //   <div className="w-full flex flex-col justify-between">
          //     <h3 className="text-black font-bold text-2xl mb-2">
          //       {product.name}
          //     </h3>
          //     <p className="text-black font-normal text-base mb-3">
          //       {product.description}
          //     </p>
          //     {/* <p className="text-black font-normal text-base mb-3">
          //     {product.detail}
          //   </p> */}
          //     <div className="flex justify-end">
          //       <button
          //         className="view-button"
          //         onClick={() => {
          //           router.push(`/products/view?id=${product?.id}`);
          //           localStorage.setItem("product", JSON.stringify(product));
          //         }}
          //       >
          //         View Product
          //       </button>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>

      {/* <div className="container">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 xl:w-5/12">
            <div className="text-container p-6">
              <h2 className="text-3xl font-bold mb-4">Branding & Strategy</h2>
              <p className="mb-4">
                To build a solid foundation for your online shop you need a strong brand and a bulletproof strategy. You can rely on our experience to create a beautiful and efficient online shop.
              </p>
              <div id="details" className="basic-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>Delivering powerful brands for popular shops</li>
                  <li>Creating beautiful concepts and evocative logos</li>
                  <li>Preparing complete branding guides and styles</li>
                  <li>Speedy delivery of marketing design assets</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-7/12">
            <div className="image-container p-6">
              <img className="w-100% h-50%" src="E-com.jpg" alt="alternative" />
            </div>
          </div>
        </div>
      </div> */}

     

     
    </div>
  );
};

export default Products;

'use client'
import React, { useEffect, useState } from "react";
import "../../styles/product.css"
import { useRouter } from 'next/navigation';

// import "../../../../public/Nature.jpg"
import "../../../../public/E-com.jpg"
import "@fontsource/poppins";
import Image from "next/image";

interface ProductItem {
  image: string;
  name: string;
  description: string;
}

const View = () => {
  const router = useRouter();
  const [openPanels, setOpenPanels] = useState<number[]>([]);
  const [product, setProduct] = useState<any>(null);

  const togglePanel = (id: number) => {
    if (openPanels.includes(id)) {
      setOpenPanels(openPanels.filter((panelId) => panelId !== id));
    } else {
      setOpenPanels([...openPanels, id]);
    }
  };

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof window !== "undefined") {
      const productData = localStorage.getItem("product");
      const parsedProduct = productData ? JSON.parse(productData) : null;
      setProduct(parsedProduct); // Set product state with retrieved data
    }
  }, []);

  // Render the component only if product data is available
  if (!product) {
    return null;
  }
  console.log("productname", product)
  return (
    // <div className="px-20 ">
    <div className="px-4 py-5 md:px-20 md:py-10">
      <h2 className="text-4xl font-bold text-center py-10 text-lime-800">
        Product Details
      </h2>

      {/* Use grid and create a 3x3 grid for the cards */}
      <div className="  pt-5 pb-1 pl-5 pr-5 rounded-xl ">
        <div className="flex flex-wrap items-center justify-center gap-24">
          {product?.content.map((item: ProductItem, index: number) => (
            <div className="single-card transition-transform transform hover:scale-105" key={index}>
              <div className="card-img ">
                {/* <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full" /> */}
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                  width={300} // Set width and height as per your requirements
                  height={200}
                />
              </div>
              <p className="text-black font-bold text-2xl justify-center font-poppins px-3 py-3">{item?.name}</p>
              <p className="card-des">{item?.description}</p>
            </div>
          ))}
        </div>
        <div className="pt-2 flex justify-end sm:pt-5">
          <button
            className="btn btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white hover:border-lime-800 px-7"
            onClick={() => {
              router.push('/productspage')
              localStorage.setItem("product", JSON.stringify(product));
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;

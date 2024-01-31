'use client'
import React, { useEffect, useState } from "react";
import "../../styles/product.css"
import "../../../../public/Nature.jpg"
import "../../../../public/E-com.jpg"

interface ProductItem {
  image: string;
  name: string;
  description: string;
}

const View = () => {
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
    <div className="px-20">

      <h2 className="text-4xl font-bold text-black text-center py-5 ">
        Product Details
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-2">
      {
        product?.content.map((item: ProductItem, index: number) => {
          console.log("item", item)
          return (
            <div className="single-card" key={index}>
              <div className="card-img">
                <img
                  src={"/E-com.jpg"}
                  alt="e permit"
                  className="object-contain"
                />
              </div>
              <p className="my-3 text-black font-bold text-2xl justify-center">{item?.name}</p>
              <p className="text-black font-normal text-base">{item?.description}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default View;

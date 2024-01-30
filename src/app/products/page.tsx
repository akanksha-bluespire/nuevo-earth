'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "../styles/product.css"
type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  detail: string;
};

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "E-Permits / Registrations",
      image: "/E-com.jpg",
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",

      description:
        "What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.",
        
    },
    {
      id: "2",
      name: "E-Compliance Reporting",
      image: "/E-com.jpg",
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",
      description:
        "What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.",
    },
    {
      id: "3",
      name: "Other Applications",
      image: "/E-com.jpg",
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",
      description:
        "What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.",
    },
  ]);

  return (
    <div>
      
    <div className="px-20 py-5">
      <h2 className="text-4xl font-bold text-black text-center">Products</h2>
      <p className="text-3xl font-medium text-black my-4">What we offer</p>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div>
              <img
                src={product.image}
                alt="e permit"
                className="image-card"
              />
          </div>
          <div className="w-full flex flex-col justify-between">
            <h3 className="text-black font-bold text-2xl mb-2">
              {product.name}
            </h3>
            <p className="text-black font-normal text-base mb-3">
              {product.description}
            </p>
            <div className="flex justify-end">
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
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;

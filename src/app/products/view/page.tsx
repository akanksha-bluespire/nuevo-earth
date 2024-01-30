'use client'
import React, { useEffect, useState } from "react";

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

  // const faqData = [{ id: 1, title: "sample", isOpen: openPanels.includes(1) }];

  const faqData = [
    {
      id: 1,
      title: "sample",
      isOpen: openPanels.includes(1),
      content: [
        { id: "1", name: "sample1" },
        { id: "2", name: "sample2" },
        { id: "3", name: "sample3" },
      ],
    },
    {
      id: 2,
      title: "sample1",
      isOpen: openPanels.includes(2),
      content: [
        { id: "1", name: "sample1" },
        { id: "2", name: "sample2" },
        { id: "3", name: "sample3" },
      ],
    },
    {
      id: 3,
      title: "sample2",
      isOpen: openPanels.includes(3),
      content: [
        { id: "1", name: "sample1" },
        { id: "2", name: "sample2" },
        // { id: "3", name: "sample3" },
      ],
    },
  ];
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
   console.log("productname",product)
  return (
    <div className="px-20">
     
      <h2 className="text-4xl font-bold text-black text-center ">
        Product Details
      </h2>
      <div className="flex items-stretch justify-between my-10">
        <div className="w-1/2">
          <img
            src={product.image}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-1/2 px-8">
          <h3 className="text-black font-bold text-2xl mb-2">{product.name}</h3>
          <p className="text-black font-normal text-base mb-3">
            {product.description}
          </p>
          <hr color="grey" />
          <div className="box-accordian">
            {faqData.map((faq) => (
              <div className="expansion-panel p-3" key={faq.id}>
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => togglePanel(faq.id)}
                >
                  <div>
                  <p className="custom-panel-title">
                    {faq.id} {faq.title}
                  </p>
                  </div>
                  <div
                    className="arrow-icon"
                    style={{ display: faq.isOpen ? "none" : "block" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div
                    className="arrow-icon-up"
                    style={{ display: faq.isOpen ? "block" : "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </div>
                </div>
                {faq.content.map((content, index) => {
                  return (
                    <div
                      className="my-3 order-expansion-content"
                      style={{ display: faq.isOpen ? "block" : "none" }}
                      key={index}
                    >
                      <p>{content.name}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <hr color="grey" />
        </div>
      </div>
    </div>
  );
};

export default View;

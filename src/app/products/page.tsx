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
        { id: "1", name: "Concrete Batch Plant (CBP) ", description: "A Concrete Batch Plant (CBP) is an essential facility in construction, producing precise concrete mixtures for various projects. Its efficient operation ensures consistent quality and cost-effectiveness. With expertise honed from years in regulatory agencies, we deliver innovative solutions, aiming to revolutionize the public sector's digital journey.", image: "/cbp.jpg" },
        { id: "2", name: "Crushing & Screening Plant (C&S) ", description: "A Crushing & Screening Plant (C&S) efficiently processes raw materials into various sizes of aggregates, essential for construction projects. Our team's firsthand experience in delivering cost-effective digital solutions ensures streamlined operations for C&S facilities. We aim to revolutionize the sector, mitigating common pitfalls and enhancing efficiency, aligning with our audacious vision for public-sector digital transformation.", image: "/E-com.jpg" },
        { id: "3", name: "Hot-Mix Asphalt Plant (HMAP)", description: "A Hot-Mix Asphalt Plant (HMAP) is a facility used in road construction to produce asphalt mixtures at high temperatures. It blends aggregates, asphalt binder, and other additives to create durable and smooth asphalt surfaces for roads and highways. HMAPs ensure quality and efficiency in asphalt production for infrastructure projects.", image: "/E-com.jpg" },
        { id: "4", name: "Construction GP", description: "Construction GP is a trusted partner for public sector digital solutions, founded by industry veterans with a decade of experience in state regulatory agencies. With a proven track record of saving millions and winning awards, we aim to revolutionize the sector by delivering cost-effective e-permitting solutions and ending unnecessary suffering in project execution.", image: "/Nature.jpg" },
        { id: "5", name: "Multi-Sector GP", description: "Multi-Sector GP offers innovative digital solutions tailored for public sector challenges. Founded by former state regulatory agency leaders, we bring expertise in e-permitting and cost-effective project delivery. Our audacious vision aims to alleviate the public sector's digital solution struggles, ensuring efficient and impactful outcomes for citizens and agencies alike.", image: "/E-com.jpg", },
        { id: "6", name: "Description text goes here", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },

      ],
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",

      description:
        " E-Permits/Registrations streamline government processes by digitizing permit issuance and registration procedures. Our solutions leverage years of expertise in state regulatory agencies, delivering cost-effective and efficient systems. With a track record of saving millions for agencies like the Arizona Department of Environmental Quality, we aim to alleviate the public sector's digital solution woes.",

    },
    {
      id: "2",
      name: "E-Compliance Reporting",
      image: "/E-com.jpg",
      content: [
        { id: "1", name: "Rock Products Annual Compliance", description: "Rock Products Annual Compliance Reporting is a streamlined solution for companies in the mining and quarrying industry to fulfill their regulatory obligations efficiently. Our platform simplifies the process of compiling and submitting compliance reports, ensuring accuracy and timely submission while minimizing costs and administrative burdens.", image: "/Roc.jpg" },
        { id: "2", name: "Air Quality Excess Emissions ", description: "Air Quality Excess Emissions refer to the release of pollutants beyond permissible limits, impacting air quality and public health. Our solutions address this challenge by providing efficient monitoring and regulatory compliance tools. With our expertise, we aim to mitigate environmental risks, ensure regulatory compliance, and safeguard public health effectively and affordably.", image: "/Emission.jpg" },
        { id: "3", name: "Discharge Monitoring Reporting (DMR) ", description: "Discharge Monitoring Reporting (DMR) is a crucial aspect of environmental compliance, ensuring accurate and timely reporting of wastewater discharges. Our expertise in DMR management helps public agencies streamline processes, mitigate risks, and achieve regulatory compliance cost-effectively. We provide tailored solutions to empower organizations in safeguarding water quality and public health.", image: "/Nature.jpg" },
        // { id: "4", name: "surya", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },
        // { id: "5", name: "raj", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/Nature.jpg" },
        // { id: "6", name: "kumar", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ullam voluptas sunt numquam dolorum accusantium dolor praesentium porro eligendi ad natus repellendus! Eveniet alias, ex neque itaque deserunt provident minima?", image: "/E-com.jpg" },

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
        { id: "1", name: "Operator Certification Online Portal", description: "The Operator Certification Online Portal is a user-friendly platform designed to streamline and simplify the process of certifying operators in various industries. Leveraging our founders' expertise, it offers cost-effective solutions, saving time and resources. Our audacious vision aims to alleviate public-sector suffering by delivering efficient, award-winning digital solutions.", image: "/Nature.jpg" },
        { id: "2", name: "Open Burn Permit Online Portal", description: "The Open Burn Permit Online Portal offers a streamlined solution for public-sector agencies to efficiently manage and issue burn permits online. Developed by industry experts with firsthand experience in regulatory agencies, our platform ensures cost-effective, compliant, and user-friendly processes, reducing administrative burdens and enhancing public service delivery.", image: "/E-com.jpg" },
        { id: "3", name: "Vehicle Emissions Testing Exemptions", description: "Vehicle Emissions Testing Exemptions provide relief for certain vehicles from mandatory emissions testing, based on factors like vehicle age, type, or low mileage. These exemptions aim to streamline regulations and reduce burdens for vehicle owners, ensuring cost-effective compliance while maintaining environmental standards.", image: "/Nature.jpg" },
      ],
      detail:
        "It all begins with an idea. Maybe you want to launch a business. Whatever it is, the way you tell your story online can make all the difference",
      description:
        "Our expertise extends beyond e-permitting solutions to encompass a wide range of digital solutions for the public sector. From regulatory compliance tools to citizen engagement platforms, we deliver cost-effective solutions tailored to your agency's needs. Let us help you streamline processes and enhance citizen services.",
    },
  ]);

  return (
    <div>
      <div className="px-20 py-5 m-2">
        {/* <h2 className="text-4xl font-bold text-black-500 text-center ">Products</h2>
        <p className="text-3xl font-medium text-black my-4">What we offer</p> */}
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
          <div className={index == 1 ? 'top flex flex-row-reverse flex-wrap items-stretch gap-5 product-box' : 'top flex flex-wrap items-stretch gap-5 product-box'}>
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

        ))}
      </div>
    </div>
  );
};

export default Products;

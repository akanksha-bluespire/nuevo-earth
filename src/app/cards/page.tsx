import React from 'react';
import Card from '../components/CardPage';;

const App: React.FC = () => {
  const cardData = [
    {
      title: "Digital Transformation",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/007/795/105/non_2x/digital-transformation-digitization-of-business-processes-and-modern-technology-wireframe-hand-turning-a-knob-and-selecting-digital-mode-digitalization-of-analog-data-concept-illustration-vector.jpg",
      description: "Digital Transformation",
      redirection: "services/servicestab1"
    },
    {
      title: "Environmental software Consulting Services",
      imageUrl: "https://media.licdn.com/dms/image/D4E12AQEK4TgOw1oW_g/article-cover_image-shrink_720_1280/0/1687944093873?e=2147483647&v=beta&t=k8F9piztFF9J7bdp3O870KQU8j8BgU73zBnvTNHwE88",
      description: "Environmental software Consulting Services",
      redirection: "services/servicestab2"
    },
    {
      title: "environmental software assessment ",
      imageUrl: "https://www.optelgroup.com/app/uploads/2023/07/title-2_2197170163_img_800x530_2.jpg",
      description: "environmental software assessment ",
      redirection: "services/servicestab3"
    },
    {
      title: "environmental software assessment",
      imageUrl: "https://www.pathways.prov.vt.edu/content/pathways_prov_vt_edu/en/students-and-advisors/courses/geog-2004/_jcr_content/article-image.transform/m-medium/image.jpg",
      description: "environmental software assessment",
      redirection: "services/servicestab1"
    },
    {
      title: "environmental software assessment",
      imageUrl: "https://www.shutterstock.com/image-photo/blurred-nature-cube-wooden-background-260nw-2208256399.jpg",
      description: "environmental software assessment",
      redirection: "services/servicestab2"
    },
    {
      title: "environmental software assessment",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/5/GT/JP/TH/4700505/environmental-clearance-consultant-250x250.jpg",
      description: "environmental software assessment",
      redirection: "services/servicestab3"
    },
  ];

  return (
    <div className="pt-10 pb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-13  pt-10 pb-10 justify-items-center md:grid-cols-2  gap-8 gap-y-16 pt-10 pb-10 justify-items-center lg:grid-cols-3 bg-gray-200  justify-items-center">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;


import React from 'react';
import Card from '../components/CardPage'

const App: React.FC = () => {
  const cardData = [
    {
      title: "Digital Transformation",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/007/795/105/non_2x/digital-transformation-digitization-of-business-processes-and-modern-technology-wireframe-hand-turning-a-knob-and-selecting-digital-mode-digitalization-of-analog-data-concept-illustration-vector.jpg",
      description: "Digital Transformation",
    },
    {
      title: "Environmental software Consulting Services ",
      imageUrl: "https://media.licdn.com/dms/image/D4E12AQEK4TgOw1oW_g/article-cover_image-shrink_720_1280/0/1687944093873?e=2147483647&v=beta&t=k8F9piztFF9J7bdp3O870KQU8j8BgU73zBnvTNHwE88",
      description: "Environmental software Consulting Services ",
    },
    {
      title: "Environmental software assessment ",
      imageUrl: "https://www.optelgroup.com/app/uploads/2023/07/title-2_2197170163_img_800x530_2.jpg",
      description: "environmental software assessment ",
    },
    {
      title: "Card 4",
      imageUrl: "https://www.pathways.prov.vt.edu/content/pathways_prov_vt_edu/en/students-and-advisors/courses/geog-2004/_jcr_content/article-image.transform/m-medium/image.jpg",
      description: "environmental software assessment",
    },
    {
      title: "Card 5",
      imageUrl: "https://www.shutterstock.com/image-photo/blurred-nature-cube-wooden-background-260nw-2208256399.jpg",
      description: "environmental software assessment",
    },
    {
      title: "Card 6",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/5/GT/JP/TH/4700505/environmental-clearance-consultant-250x250.jpg",
      description: "environmental software assessment",
    },
  ];

  return (
    <div className="grid grid-cols-3 p-5 bg-gray-200 m-[5%]">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;


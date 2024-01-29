// pages/[title].js
import { useRouter } from 'next/router';
import data from '../components/data';

//to redirect each to next page
const DynamicPage = () => {
  const router = useRouter();
  const { title } = router.query;

  // Find the item in the data array that matches the title
  const item = data.find((item) => item.title === title);

  // If the item is not found, you can handle it accordingly
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.values}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default DynamicPage;

//convert curret function to arrow function
import { Directory } from "../../components/Directory/directory.component"
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    { id: 1, title: "Hats" ,imageURL:"https://th.bing.com/th/id/OIP.grhNDUkImMmGd28tsWb30AHaE8?pid=ImgDet&rs=1" },
    { id: 2, title: "Bags",imageURL:"https://th.bing.com/th/id/OIP.pUv9WJizhwimhTtB1cTzRwHaE8?pid=ImgDet&rs=1" },
    { id: 3, title: "Shoes",imageURL:"https://th.bing.com/th/id/OIP.pUv9WJizhwimhTtB1cTzRwHaE8?pid=ImgDet&rs=1" },
    { id: 4, title: "Dress",imageURL:"https://th.bing.com/th/id/OIP.pUv9WJizhwimhTtB1cTzRwHaE8?pid=ImgDet&rs=1" },
    { id: 5, title: "Accesories",imageURL:"https://th.bing.com/th/id/OIP.pUv9WJizhwimhTtB1cTzRwHaE8?pid=ImgDet&rs=1" },
   
  ];
  return (
    <>
    <Outlet/><Directory categories={categories}/></>

  );
};

export default Home;

//Home is the parent component => Directory is the child component


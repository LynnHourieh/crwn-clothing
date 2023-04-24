//convert curret function to arrow function
import "./categories.styles.scss";
import { Directory } from "./components/Directory/directory.component";

const App = () => {
  const categories = [
    { id: 1, title: "Hats" ,imageURL:"https://th.bing.com/th/id/OIP.grhNDUkImMmGd28tsWb30AHaE8?pid=ImgDet&rs=1" },
    { id: 2, title: "Bags",imageURL:"https://th.bing.com/th/id/OIP.pUv9WJizhwimhTtB1cTzRwHaE8?pid=ImgDet&rs=1" },
  ];
  return (
<Directory categories={categories}/>
  );
};

export default App;

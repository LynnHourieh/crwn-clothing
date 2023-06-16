//convert curret function to arrow function
import { Outlet } from 'react-router-dom';

import { Directory } from '../../components/Directory/directory.component';
const Home = () => {
  

  return (
    <>
    <Outlet/><Directory /></>

  );
};

export default Home;

//Home is the parent component => Directory is the child component


//convert curret function to arrow function
import "./categories.styles.scss";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component"
import SignIn from "./components/sign-up-form/sign-up-form.component";
import { Routes, Route } from "react-router-dom";
const Shop = () => {
  return <h1>Shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
//go to parent component (Home) and insert the Outlet to see the Shop Component
//index is used so that when we have / path we have n avigation + home
//this is a nested route
//convert curret function to arrow function
import "./categories.styles.scss";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component"
import Authentication from "./route/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./route/shop/shop.component";
import Checkout from "./route/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;
//go to parent component (Home) and insert the Outlet to see the Shop Component
//index is used so that when we have / path we have n avigation + home
//this is a nested route
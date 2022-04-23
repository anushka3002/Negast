import { Products } from "../components/allProducts/allProducts";
import { Routes, Route } from "react-router";
import { SignIn } from "../components/signin/signin";
import { Signup } from "../components/signup/signup";
import { Homepage } from "../components/homepage/homepage";
import { Navbar } from "../components/navbar/navbar";
import { AddProduct } from "../components/AddProducts/AddProduct";
import { BuyerSignup } from "../components/signup/buyerSignup";
import { BuyerSignIn } from "../components/signin/buyerSignIn";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/allProducts" element={<Products />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/buyersignin" element={<BuyerSignIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/buyersignup" element={<BuyerSignup/>} />
        <Route exact path="/addproduct" element={<AddProduct />} />
      </Routes>
    </>
  );
};

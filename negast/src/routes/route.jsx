import { Products } from "../components/allProducts/allProducts";
import { Routes, Route } from "react-router";
import { SignIn } from "../components/signin/Sellersignin";
import { Signup } from "../components/signup/Sellersignup";
import { Homepage } from "../components/homepage/homepage";
import { Navbar } from "../components/navbar/navbar";
import { AddProduct } from "../components/AddProducts/AddProduct";
<<<<<<< HEAD
import { AddBidding } from "../components/sellerBidding/sellerBidding";
=======
import { UserSignup } from "../components/signup/UserSignup";
import { UserSignIn } from "../components/signin/UserSignIn";
import {SellerPost} from "../components/sellerPost/sellerPost"
>>>>>>> e0196d10021817085555f61529065a9575944ab4

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/allProducts" element={<Products />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/usersignin" element={<UserSignIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/usersignup" element={<UserSignup/>} />
        <Route exact path="/addproduct" element={<AddProduct />} />
<<<<<<< HEAD
        <Route exact path="/addBidding" element={<AddBidding />} />
=======
        <Route exact path="/sellerPost" element={<SellerPost />} />
>>>>>>> e0196d10021817085555f61529065a9575944ab4
      </Routes>
    </>
  );
};

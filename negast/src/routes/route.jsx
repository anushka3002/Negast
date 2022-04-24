import { Products } from "../components/allProducts/allProducts";
import { Routes, Route } from "react-router";
import { SignIn } from "../components/signin/Sellersignin";
import { UserSignIn } from "../components/signin/UserSignIn";
import { Signup } from "../components/signup/Sellersignup";
import { UserSignup } from "../components/signup/UserSignup";
import { Homepage } from "../components/homepage/homepage";
import { Navbar } from "../components/navbar/navbar";
import { AddProduct } from "../components/AddProducts/AddProduct";
import { AddBidding } from "../components/sellerBidding/sellerBidding";
import { SellerProducts } from "../components/sellerPost/SellerallProducts";
import { Footer } from "../components/footer/footer";
import { BuyerPost } from "../components/buyerPost/buyerPost";
import { BidShowCase } from "../components/bidShowCase/bidShowCase";

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
        <Route exact path="/sellerPost" element={<SellerProducts />} />
        <Route exact path="/addBidding" element={<AddBidding />} />
        <Route exact path="/buyerPost" element={<BuyerPost />} />
        <Route exact path="/bidShowCase" element={<BidShowCase/>} />

      </Routes>
      <Footer/>
    </>
  );
};

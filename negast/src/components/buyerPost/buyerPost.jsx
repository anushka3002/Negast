import { Navbar } from "../navbar/navbar";
import "./buyerPost.css";
import { MainBDiv, PostDiv } from "./buyerGrid.jsx";

export const BuyerPost = () => {
  return (
    <>
      <Navbar />
      <div id="pa_product_container">
        <PostDiv />
      </div>
    </>
  );
};

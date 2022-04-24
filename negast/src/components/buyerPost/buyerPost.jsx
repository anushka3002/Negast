import { Navbar } from "../navbar/navbar";
import "./buyerPost.css";
import { MainBDiv, PostDiv } from "./buyerGrid.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post_buyer_specific } from "../../redux/Post/action";

export const BuyerPost = () => {
  const dispatch = useDispatch();

  const alldata = useSelector((store) => store.post.post);
  const data = JSON.parse(localStorage.getItem("buyerData"))
  console.log("Hello baby",alldata)

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    dispatch(post_buyer_specific(data._id));
  };

  return (
    <>
      <Navbar />
      <div id="pa_product_container">
        {alldata.map((e)=>{
          return <PostDiv key={e._id}  data={e.product} post={e}/>
        })}
      </div>
    </>
  );
};

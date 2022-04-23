import { MainDiv } from "./SellerGrids.jsx";

// import {get_products_data} from "../../../redux/products/action"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellerDisplayGrid } from "./SellerDisplayGrid/SellerDisplayGrid";
import { get_all_post } from "../../../redux/Post/action.jsx";

export const SellerBoxGrids = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((store) => store.post.post);
  console.log("all post data", alldata);
  console.log(alldata[0].product);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    dispatch(get_all_post());
  };
  return (
    <MainDiv>
      {alldata.map((ele) => {
        return <SellerDisplayGrid key={ele._id} data={ele.product} />;
      })}
    </MainDiv>
  );
};

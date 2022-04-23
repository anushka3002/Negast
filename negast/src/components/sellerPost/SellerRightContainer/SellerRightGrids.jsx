import { MainDiv } from "./SellerGrids.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellerDisplayGrid } from "./SellerDisplayGrid/SellerDisplayGrid";
import { get_all_post } from "../../../redux/Post/action.jsx";

export const SellerBoxGrids = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((store) => store.post.post);
  console.log("all post data", alldata);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    dispatch(get_all_post());
  };
  return (
    <MainDiv>
      {alldata.map((ele) => {
        {
          console.log(ele);
        }
        return (
          <SellerDisplayGrid key={ele._id} data={ele.product} postData={ele} />
        );
      })}
    </MainDiv>
  );
};

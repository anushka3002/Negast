import { SellerProductRating } from "../SellerProductRating/SellerProductRating";
import { useNavigate } from "react-router-dom";

export const SellerDisplayGrid = ({ data }) => {
  const Navigate = useNavigate();
  console.log("vvvv", data);
  return (
    <div className="ProductDiv">
      <img src={data.image} />
      <div className="writtenPart">
        <p className="rtitle">{data.title}</p>
        <p className="rbrand">{data.brand}</p>
        <p id="rdescription">{data.description}</p>
        <p className="rprice">₹{data.price}</p>
        <p id="rrrating">
          <SellerProductRating key={data._id} rate={data.ratings} />
        </p>
      </div>
      <button className="rpostbtn" onClick={() => Navigate("/addBidding")}>
        Add Your Bid
      </button>
    </div>
  );
};

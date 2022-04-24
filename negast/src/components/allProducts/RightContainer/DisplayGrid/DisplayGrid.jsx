import { useState } from "react";
import { useDispatch } from "react-redux";
import { get_post_buyer } from "../../../../redux/Post/action";
import { ProductRating } from "../ProductRating/ProductRating";

export const DisplayGrid = ({ data }) => {
  // data.id, local user id , comment

  const dispatch = useDispatch();

  const [text, setText] = useState(false);
  const handlePost = () => {
    const userData = JSON.parse(localStorage.getItem("buyerData"));
    // console.log("userdata", userData);

    const temp = {
      product: data._id,
      buyer: userData._id,
      comment: "I want this ASAP",
    };

    // console.log("post data", temp);

    dispatch(get_post_buyer(temp));
  };
  return (
    <div className="ProductDiv">
      <img src={data.image} />
      <div className="writtenPart">
        <p className="rtitle">{data.title}</p>
        <p className="rbrand">{data.brand}</p>
        <p id="rdescription">{data.description}</p>
        <p className="rprice">₹{data.price}</p>
        <p id="rrrating">
          <ProductRating key={data._id} rate={data.ratings} />
        </p>
      </div>

      {text === false ? (
        <button
          className="rpostbtn"
          onClick={() => {
            handlePost();
            // alert(` The ${data.title} is now posted.`);
            setText("Posted");
          }}
        >
          Post Requirement
        </button>
      ) : (
        <button
          className="rpostbtn"
          onClick={() => {
            // setText("Posted");
            // alert(` The ${data.title} is now posted.`);
          }}
          style={{ backgroundColor: "grey" }}
        >
          Posted
        </button>
      )}
    </div>
  );
};

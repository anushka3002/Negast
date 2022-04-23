import { useState } from "react";
import { ProductRating } from "../ProductRating/ProductRating";

export const DisplayGrid = ({ data }) => {
  const [text, setText] = useState(false);
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
            alert(` The ${data.title} is now posted.`);
            setText("Posted");
          }}
        >
          Post Requirement
        </button>
      ) : (
        <button
          className="rpostbtn"
          onClick={() => {
            alert(` The ${data.title} is now posted.`);
            setText("Posted");
          }}
          style={{ backgroundColor: "grey" }}
        >
          Posted
        </button>
      )}
    </div>
  );
};

import {MainDiv} from "./Grids.jsx"
import {ProductRating} from "./ProductRating/ProductRating"

export const BoxGrids=()=> {
  return (
    <MainDiv>
      <div className="ProductDiv">
        <img src="logo192.png"/>
        <div className="writtenPart">
          <p className="rtitle">Title</p>
          <p className="rbrand">Brand</p>
          <p id="rdescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="rprice">₹Price</p>
          <p id="rrrating"><ProductRating/></p>
          <button className="rpostbtn">Post Buyer</button>
        </div>
      </div>
      <div className="ProductDiv">

      </div>
      <div className="ProductDiv">

      </div>
      <div className="ProductDiv">

      </div>
      <div className="ProductDiv">

      </div>
      <div className="ProductDiv">

      </div>
    </MainDiv>
  );
}

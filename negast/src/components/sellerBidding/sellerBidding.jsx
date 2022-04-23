import { Navbar } from "../navbar/navbar"
import "./sellerBidding.css"
import {MainDiv} from "./biddingGrid.jsx"

export const AddBidding=()=>{
    return(
        <>
        <Navbar/>
      
{/* product container */}
        <div id="a_product_container">
        <MainDiv>
      <div className="ProductDiv">
          <div id="a_image_cont">
        <img src="logo192.png"/>
        </div>
        <div className="writtenPart">
          <p className="rtitle">Title</p>
          <p className="rbrand">Brand</p>
          <p id="rdescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="rprice">₹Price</p>
          {/* <p id="rrrating"><ProductRating/></p> */}
          {/* <button className="rpostbtn">Post Buyer</button> */}
        </div>
      </div>
      <div className="pbid">
        <input placeholder="Enter your bid"></input>
         <button className="pbtn">Add Bid</button>
      </div>
      <div className="pbid">
      <input placeholder="Enter comment (optional)"></input>
         <button className="pbtn">Add comment</button>
      </div>
    </MainDiv>
        </div>
        </>
    )
}
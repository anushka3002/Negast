import { Navbar } from "../navbar/navbar"
import "./sellerBidding.css"
import {MainPDiv} from "./biddingGrid.jsx"
import { Footer } from "../footer/footer"

export const AddBidding=()=>{
    return(
        <>
        <Navbar/>
      
{/* product container */}
        <div id="a_product_container">
        <MainPDiv>
      <div className="PProductDiv">
          <div id="pa_image_cont">
        <img src="logo192.png"/>
        </div>
        <div className="pwrittenPart">
          <p className="prtitle">Title</p>
          <p className="prbrand">Brand</p>
          <p id="prdescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="prprice">₹Price</p>
          {/* <p id="rrrating"><ProductRating/></p> */}
          {/* <button className="rpostbtn">Post Buyer</button> */}
        </div>
      </div>
      <div className="pbid">
        <input placeholder="Enter your bid"></input>
         <button className="pbtn">Add Bid</button>
      </div>
      <div className="pcomment">
      <input placeholder="Enter comment (optional)"></input>
         <button className="pbtn">Add comment</button>
      </div>
    </MainPDiv>
        </div>
        {/* <Footer/> */}
        </>
    )
}
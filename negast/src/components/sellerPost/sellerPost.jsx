import { Navbar } from "../navbar/navbar"
import "./sellerPost.css"
import {MainDiv} from "./sellerGrid.jsx"


export const SellerPost=()=>{
    return(
        <>
        <Navbar/>
        <div id="a_filter_container">
            <select>
                <option>Brand</option>
                <option value="">LG</option>
                <option value="">Redmi</option>
                <option value="">Realme</option>
                <option value="">Lenovo</option>
                <option value="">Samsung</option>
                <option value="">Panasonic</option>
            </select>
            <select>
                <option value="">Sort by Price</option>
                <option value="">Low to High</option>
                <option value="">High to Low</option>
            </select>
            <select>
                <option value="">Laptop</option>
                <option value="">Mobile</option>
                <option value="">Refrigerator</option>
                <option value="">Television</option>
                <option value="">Headphone</option>
                <option value="">AC</option>
            </select>
        </div>

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
        </div>
        </>
    )
}
import { Navbar } from "../navbar/navbar"
import "./sellerPost.css"
import {MainSDiv} from "./sellerGrid.jsx"


export const SellerPost=()=>{
    return(
        <>
        <Navbar/>
        <div id="a_seller_filter_container">
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
        <div id="a_s_product_container">
        <MainSDiv>
      <div className="ProductSDiv">
          <div id="a_s_image_cont">
        <img src="logo192.png"/>
        </div>
        <div className="a_writtenPart">
          <p className="atitle">Title</p>
          <p className="abrand">Brand</p>
          <p id="adescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="aprice">₹Price</p>
          {/* <p id="rrrating"><ProductRating/></p> */}
          <button className="apostbtn">Post Buyer</button>
        </div>
      </div>
      <div className="ProductSDiv">

      </div>
      <div className="ProductSDiv">

      </div>
      <div className="ProductSDiv">

      </div>
      <div className="ProductSDiv">

      </div>
      <div className="ProductSDiv">

      </div>
    </MainSDiv>
        </div>
        </>
    )
}

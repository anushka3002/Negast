import { Navbar } from "../navbar/navbar"
import "./buyerPost.css"
import {MainBDiv} from "./buyerGrid.jsx"

export const BuyerPost=()=>{
    return(
        <>
        <Navbar/>
        <br></br><br></br>
        <div id="pa_product_container">
        <MainBDiv>
      <div className="pPProductDiv">
          <div id="ppa_image_cont">
        <img src="logo192.png"/>
        </div>
        <div className="ppwrittenPart">
          <p className="pprtitle">Title</p>
          <p className="pprbrand">Brand</p>
          <p id="pprdescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="pprprice">₹Price</p>
          
        </div>
      </div>
      
    </MainBDiv>
        </div>
        </>
    )
}
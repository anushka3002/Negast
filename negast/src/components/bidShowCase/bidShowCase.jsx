import { Navbar } from "../navbar/navbar"
import "./bidShowCase.css"
import {MainNDiv} from "./bidGrid"

export const BidShowCase=()=>{


  
    return(
        <>
        <Navbar/>
        <br></br><br></br>
        <div id="an_product_container">
        <MainNDiv>
      <div className="anProductDiv">
          <div id="an_image_cont">
        <img src="logo192.png"/>
        </div>
        <div className="anwrittenPart">
          <p className="anrtitle">Title</p>
          <p className="anrbrand">Brand</p>
          <p id="anrdescription">My name is Optimus Prime Calling all AutoBots. This is the message to my creator. I m coming for you</p>
          <p className="anrprice">₹Price</p>
          
        </div>
      </div>
    </MainNDiv>
        </div>

        <div>
          <div></div>
        </div>
        </>
    )
}
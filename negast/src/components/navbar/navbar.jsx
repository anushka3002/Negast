import "./navbar.css"
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <>
        <div id="a_nav_header">
            <div id="negast_logo_nav_div">
            <Link to={"/allProducts"}><img id="a_logo_nav" src="Negast_blue.png"></img></Link>
            </div>
            <div id="a_options_nav">
            <Link style={{textDecoration:"none",color:"#5f4dee"}} to={"/allProducts"}><p>HOME</p></Link>
            <Link style={{textDecoration:"none",color:"#5f4dee"}} to={"/buyerPost"}><p>BIDS</p></Link>
            <Link style={{textDecoration:"none",color:"#5f4dee"}} to={"/"}><p>INTRO</p></Link>
            <p>STRENGTH</p>
            {/* <Link style={{textDecoration:"none"}} to={"/addBidding"}><p>Bids</p></Link> */}
            <Link style={{textDecoration:"none"}} to={"/signup"}><button id="a_signup_nav">SIGN UP</button></Link>
            </div>
        </div>
        </>
    )
}
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { ClassNames } from "@emotion/react"
import "./footer.css" 

export const Footer=()=>{
return (
    <>
<div id="a_social_media">
    <div></div>
<FaFacebookF size={27} id="social_icon"/>
<FaTwitter size={27} id="social_icon"/>
<FaInstagram size={27} id="social_icon"/>
</div>


<div>
    <div id="a_footer">
    <img style={{width:"100%"}} src="footerWave.png"></img>
    <div id="footer_info">
    <div>
        <h2>About</h2>
        <p>Contact Us</p>
        <p>Careers</p>
        <p>Corporate</p>
        <p>Information</p>
    </div>

    <div>
        <h2>Help</h2>
        <p>FAQ</p>
        <p>Report</p>
        <p>Payments</p>
        <p>Infringement</p>
    </div>

    <div>
        <h2>Policy</h2>
        <p>Security</p>
        <p>Sitemap</p>
        <p>Privacy</p>
        <p>EPR Compliance</p>
    </div>
    
    <div>
        <h2>Mail Us:</h2>
        <p>Bengaluru, 560103</p>
        <p>negastindia@gmail.com</p>
        <p>Telephone: 1800 345 7829</p>
        <p>Negast Internet Private Limited</p>
    </div>
    </div>
    </div>

</div>

</>
)}
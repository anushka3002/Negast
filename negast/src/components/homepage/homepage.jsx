import "./homepage.css"
import {FontAwesomeIcon} from "fontawesome"

export const Homepage=()=>{
    return(
        <>
        <div id="a_header">
            <div id="negast_logo_div">
            <img id="a_logo" src="2d.png"></img>
            </div>
            <div id="a_options">
            <p>HOME</p>
            <p>PROBLEMS</p>
            <p>INTRO</p>
            <p>STRENGTH</p>
            <p>PRICING</p>
            <button id="a_signup">SIGN UP</button>
            </div>
        </div>

        <div id="a_front">
            <span id="left_Front">
                <h1 id="a_boost">Boost your selling with us</h1>
                <p>Our aim is to increase your selling and give you growth</p>
            </span>
            <span id="a_man_image">
            </span>
        </div>
        <img src="wave.png" style={{width:"100%"}}></img>

        <div id="categories">
            <p>Grocery</p>
            <p>Machinery & Tools</p>
            <p>Sports & Fashion</p>
            <p>Books</p>
            <p>Beauty & Fashion</p>
        </div>


        <h3 style={{marginTop:"10%",color:"#5f4dee"}}>Industry</h3>
            <h1>Stats of problems</h1>
        <div id="a_stats">
            <div>
            <img src="https://negast.in/images/giant%2021.png"></img>
            <h2>Market in few hands</h2>
            <p>Online E-commerce giants are taking over more than 40% of the market combined.</p>
            </div>
            <div>
            <img src="https://negast.in/images/revenue1.png"></img>
            <h2>Online Revenue</h2>
            <p>As per IBIS forecast research the online revenue will increase around 9% per year for the next 5 years. In that sense the online market will touch 60-70% by 2024</p>
            </div>
            <div>
            <img src="https://negast.in/images/market%20down1.png"></img>
            <h2>Market Down</h2>
            <p>As per the calculation if you are selling 100 products a month then it would be decreased around 30-40 products a month.</p>
            </div>
        </div>

        <div id='a_solution_container'>
            <h1>Solution with process</h1>
            <h2>App introduction</h2>
            <div id="a_solution">
                <div>
                    <img src="https://negast.in/images/intro%201.png"></img>
                </div>
                <div id="a_solution_text">
                    <h2>Introduction</h2>
                    <p>Negast is designed in such a way that it creates eagerness among the consumers & never let them buy outside the city. Because every seller has a potential to deliver the goods to their consumers at the best price with good service.</p>

                </div>
            </div>
        </div>
<h2>helo</h2>
<div id="a_social_media">
{/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
<h4>hello</h4>
</div>


<div>
    <div id="a_footer">
    <img style={{width:"100%"}} src="footerWave.png"></img>
        <h2>Contact askdnfas</h2>
        <p>negast@gmail.com</p>
        <p>Negast.in</p>
    </div>
</div>
        </>
    )
}
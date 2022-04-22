import "./homepage.css"
import logo from "./2d.png"
import wave from "./wave.png"

export const Homepage=()=>{
    return(
        <>
        <div id="a_header">
            <div id="negast_logo_div">
            <img id="a_logo" src={logo}></img>
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
        <img src={wave} style={{width:"100%"}}></img>

        <div id="categories">
            <p>Grocery</p>
            <p>Machinery & Tools</p>
            <p>Sports & Fashion</p>
            <p>Books</p>
            <p>Beauty & Fashion</p>
        </div>


        </>
    )
}
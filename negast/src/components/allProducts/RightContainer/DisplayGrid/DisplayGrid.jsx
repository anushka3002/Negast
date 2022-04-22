import {ProductRating} from "../ProductRating/ProductRating"

export const DisplayGrid=({data})=>{
    return(
        <div className="ProductDiv">
          <img src={data.image}/>
          <div className="writtenPart">
            <p className="rtitle">{data.title}</p>
            <p className="rbrand">{data.brand}</p>
            <p id="rdescription">{data.description}</p>
            <p className="rprice">₹{data.price}</p>
            <p id="rrrating"><ProductRating key={data._id} rate={data.ratings}/></p>
            <button className="rpostbtn">Post Buyer</button>
          </div>
        </div>
    )
}
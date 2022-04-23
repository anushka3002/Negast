import {SellerProductRating} from "../SellerProductRating/SellerProductRating"

export const SellerDisplayGrid=({data})=>{
    return(
        <div className="ProductDiv">
          <img src={data.image}/>
          <div className="writtenPart">
            <p className="rtitle">{data.title}</p>
            <p className="rbrand">{data.brand}</p>
            <p id="rdescription">{data.description}</p>
            <p className="rprice">₹{data.price}</p>
            <p id="rrrating"><SellerProductRating key={data._id} rate={data.ratings}/></p>
          </div>
          <button className="rpostbtn">Post Buyer</button>
        </div>
    )
}
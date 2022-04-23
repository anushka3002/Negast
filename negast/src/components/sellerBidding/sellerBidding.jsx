import { Navbar } from "../navbar/navbar"
import "./sellerBidding.css"
import {MainPDiv} from "./biddingGrid.jsx"
import { Footer } from "../footer/footer"
import {useParams} from 'react-router-dom'
import {get_prod_id} from "../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

export const AddBidding=()=>{
  const {id} = useParams();
  const dispatch = useDispatch();
    
  const data = useSelector((store)=>store.products.products)
    
    console.log("Rishabh",data)
    
    useEffect(()=>{
        getproduct();
    },[])
    
    const getproduct=()=>{
        dispatch(get_prod_id(id))
    }
    return(
        <>
        <Navbar/>
        <div id="a_product_container">
        <MainPDiv>
      <div className="PProductDiv">
          <div id="pa_image_cont">
        <img src={data.image}/>
        </div>
        <div className="pwrittenPart">
          <p className="prtitle">{data.title}</p>
          <p className="prbrand">{data.Brand}</p>
          <p id="prdescription">{data.description}</p>
          <p className="prprice">₹{data.price}</p>
        </div>
      </div>
      <div className="pbid">
        <input placeholder="Enter your bid"></input>
      </div>
      <div className="pcomment">
      <textarea rows="6" cols="50" placeholder="Enter comment (optional)"></textarea>
      <br></br>
         <button className="pbtn">Add Bid</button>
      </div>
    </MainPDiv>
        </div>
        </>
    )
}
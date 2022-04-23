import { Navbar } from "../navbar/navbar";
import "./sellerBidding.css";
import { MainPDiv } from "./biddingGrid.jsx";
import { Footer } from "../footer/footer";
import { useParams } from "react-router-dom";
import { get_prod_id } from "../../redux/products/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostDiv } from "../buyerPost/buyerGrid";
import axios from "axios";
import { get_post_id } from "../../redux/Post/action";

export const AddBidding = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [bid, setBid] = useState({
    price: "",
    comment: "",
  });

  const data = useSelector((store) => store.post.post);

  // console.log("Rishabh", data);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    console.log(id);
    dispatch(get_post_id(id));
  };

  const handleAddBid = () => {
    // console.log(data._id);
    const sellerData = JSON.parse(localStorage.getItem("buyerData"));

    if (!sellerData) {
      alert("Seller is not logged in");
    }

    const temp = {
      post: data._id,
      seller: sellerData._id,
      price: bid.price,
      comment: bid.comment,
    };

    axios
      .post(`https://negast.herokuapp.com/bids`, temp)
      .then((res) => alert("Bid Added"));
  };
  return (
    <div>
      <Navbar />
      <div id="a_product_container">
        <div id="pa_product_container">
          <PostDiv key={data.product._id} data={data.product} />
          <div className="vMainBidDiv">
            <div className="pbid">
              <input
                placeholder="Enter your bid"
                onChange={(e) =>
                  setBid({
                    ...bid,
                    price: e.target.value,
                  })
                }
              ></input>
              {/* </div> */}
              {/* <div className="pcomment"> */}
              <br></br>
              <br></br>
              <textarea
                rows="6"
                cols="50"
                placeholder="Enter comment (optional)"
                onChange={(e) =>
                  setBid({
                    ...bid,
                    comment: e.target.value,
                  })
                }
              ></textarea>
              <br></br>
              <button className="pbtn" onClick={() => handleAddBid()}>
                Add Bid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*<Navbar/>
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
      
    </MainPDiv>
    </div>*/}
    </div>
  );
};

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const MainBDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: auto;
  grid-gap: 4%;

  .pPProductDiv {
    /* border:2px solid orange; */
    // margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 3%;
    /* margin-right: 2%; */
  }
  #ppa_image_cont {
    width: 40%;
  }
  #ppa_image_cont > img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
  #ppa_image_cont > img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
  }
  .pPProductDiv > img {
    width: 40%;
    height: 40%;
    margin: auto;
    object-fit: contain;
  }

  .pPProductDiv > img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
  }
  .ppwrittenPart {
    width: 100%;
    height: 50%;
    /* border: 1px solid red; */
    text-align: left;
    line-height: 30%;
  }
  .ppwrittenPart > p {
    margin-left: 2%;
  }
  .pprtitle {
    font-weight: bold;
    font-size: 25px;
  }
  .pprtitle:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
  }
  .pprbrand {
    font-weight: bold;
    font-size: 15px;
    color: grey;
  }
  .pprbrand:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
  }
  .pprbrand:hover {
    cursor: pointer;
  }

  #pprdescription {
    line-height: 100%;
    font-size: 12px;
  }
  .pprprice {
    font-size: 18px;
    font-weight: bold;
  }
  .pprprice:hover {
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
  }

  .vSeeBids {
    background-color: blue;
    margin-left: 2%;
    margin-top: 1%;
    border: 1px solid blue;
    border-radius: 8%;
    width: 15%;
    height: 25%;
    color: white;
  }
`;

export const PostDiv = ({ data,post }) => {
  const Navigate = useNavigate();
  let prod = data;
  return (
    <MainBDiv>
      <div className="pPProductDiv">
        <div id="ppa_image_cont">
          <img src={prod.image} />
        </div>
        <div className="ppwrittenPart">
          <p className="pprtitle">{prod.title}</p>
          <p className="pprbrand">{prod.brand}</p>
          <p id="pprdescription">{prod.description}</p>
          <p className="pprprice">₹{prod.price}</p>
          <button
            className="vSeeBids"
            onClick={() => Navigate(`/post/${post._id}`)}
          >
            See All Bids
          </button>
        </div>
      </div>
    </MainBDiv>
  );
};

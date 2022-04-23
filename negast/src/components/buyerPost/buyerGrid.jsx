import styled from "styled-components";

export const MainBDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: auto;
  grid-gap: 4%;

  .pPProductDiv {
    /* border:2px solid orange; */
    // margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* margin-right: 2%; */
  }
  .pPProductDiv > img {
    width: 90%;
    height: 55%;
    margin: auto;
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
`;

export const PostDiv = () => {
  return (
    <MainBDiv>
      <div className="pPProductDiv">
        <div id="ppa_image_cont">
          <img src="logo192.png" />
        </div>
        <div className="ppwrittenPart">
          <p className="pprtitle"></p>
          <p className="pprbrand">Brand</p>
          <p id="pprdescription">
            My name is Optimus Prime Calling all AutoBots. This is the message
            to my creator. I m coming for you
          </p>
          <p className="pprprice">₹Price</p>
        </div>
      </div>
    </MainBDiv>
  );
};

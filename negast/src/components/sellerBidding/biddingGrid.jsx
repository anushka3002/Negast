import styled from 'styled-components'

export const MainDiv= styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
margin: auto;
align-items-center;
grid-gap: 4%;

.ProductDiv{
    /* border:2px solid orange; */
    // margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* margin-right: 2%; */
}
.ProductDiv>img{
    width: 90%;
    height: 55%;
    margin: auto;
}

.ProductDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.writtenPart{
    width: 100%;
    height:50%;
    /* border: 1px solid red; */
    text-align:left;
    line-height:30%;
}
.writtenPart>p{
    margin-left: 2%;
}
.rtitle{
   font-weight: bold;
   font-size:25px; 
}
.rtitle:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.rbrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
}
.rbrand:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.rbrand:hover{
    cursor: pointer;
}

#rdescription{
    line-height:100%;
    font-size:12px;
}
.rprice{
    font-size:18px;
    font-weight: bold;
}
.rprice:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.rpostbtn{
    width: 100%;
    height: 15%;
    font-size:18px;
    margin: auto;
    font-weight: bold;
    border: none;
    background-color:white;
}
.rpostbtn:hover{
    background-color: blue;
    color: white;
    cursor: pointer;
    transition: .5s;
}
#rrrating:hover{
    cursor: pointer;
    transition:1s;
}

`;

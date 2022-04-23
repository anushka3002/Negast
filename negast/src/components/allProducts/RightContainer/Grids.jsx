import styled from 'styled-components'

export const MainDiv= styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
margin: .5% .5%;
gap:1.5%;
// border:2px solid orange; 


.ProductDiv{
    border:1px solid #e5e5e7; 
    margin-left: 5%;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color:#e7e7ee;
    border-radius:10px;
    border:1px solid black;
    height:650px;
}
.ProductDiv>img{
    width: 100%;
    height: 45%;
    margin: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.ProductDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.writtenPart{
    margin-top:1%;
    margin:auto;
    width: 90%;
    height:40%;
    text-align:left;
    // border:1px solid black;
}
.writtenPart>p{
    margin-left: 2%;
}
.rtitle{
   font-weight: bold;
   font-size:25px; 
}
.rbrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
}
#rdescription{
    line-height:15px;
    font-size:12px;
}
.rprice{
    font-size:18px;
    font-weight: bold;
}
.rpostbtn{
    width: 100%;
    height: 10%;
    font-size:18px;
    margin: auto;
    font-weight: bold;
    border: none;
    // padding:5px;
    background-color:#e7e7ee;
    border-radius:5px;
    border:1px solid ;
}
.rpostbtn:hover{
    background-color:#5f4dee;
    color: white;
    cursor: pointer;
    transition: .5s;
}

`;

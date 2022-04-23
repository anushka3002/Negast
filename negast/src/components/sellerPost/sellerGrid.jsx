import styled from 'styled-components'

export const MainSDiv= styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin: .5% .5%;
grid-gap: 4%;

.ProductSDiv{
    /* border:2px solid orange; */
    margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* margin-right: 2%; */
}
.ProductSDiv>img{
    width: 90%;
    height: 55%;
    margin: auto;
}

.ProductSDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.a_writtenPart{
    width: 100%;
    height:50%;
    /* border: 1px solid red; */
    text-align:left;
    line-height:30%;
}
.a_writtenPart>p{
    margin-left: 2%;
}
.atitle{
   font-weight: bold;
   font-size:25px; 
}
.atitle:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.abrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
}
.abrand:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.abrand:hover{
    cursor: pointer;
}

#adescription{
    line-height:100%;
    font-size:12px;
}
.aprice{
    font-size:18px;
    font-weight: bold;
}
.aprice:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.apostbtn{
    width: 100%;
    height: 15%;
    font-size:18px;
    margin: auto;
    font-weight: bold;
    border: none;
    background-color:white;
}
.apostbtn:hover{
    background-color: blue;
    color: white;
    cursor: pointer;
    transition: .5s;
}
#arrating:hover{
    cursor: pointer;
    transition:1s;
}

// `;

import styled from 'styled-components'

export const MainPDiv= styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
margin: auto;
grid-gap: 4%;

.PProductDiv{
    /* border:2px solid orange; */
    // margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* margin-right: 2%; */
}
.PProductDiv>img{
    width: 40%;
    margin: auto;
}

.PProductDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.pwrittenPart{
    width: 100%;
    height:50%;
    /* border: 1px solid red; */
    text-align:left;
    line-height:30%;
}
.pwrittenPart>p{
    margin-left: 2%;
}
.prtitle{
   font-weight: bold;
   font-size:25px; 
}
.prtitle:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.prbrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
}
.prbrand:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.prbrand:hover{
    cursor: pointer;
}

#prdescription{
    line-height:100%;
    font-size:12px;
}
.prprice{
    font-size:18px;
    font-weight: bold;
}
.prprice:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}

`;

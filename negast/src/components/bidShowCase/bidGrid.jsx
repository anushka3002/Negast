import styled from 'styled-components'

export const MainNDiv= styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
margin: auto;
grid-gap: 4%;

.anProductDiv{
    /* border:2px solid orange; */
    // margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* margin-right: 2%; */
}
.anProductDiv>img{
    width: 90%;
    height: 55%;
    margin: auto;
}

.anProductDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.anwrittenPart{
    width: 100%;
    height:50%;
    /* border: 1px solid red; */
    text-align:left;
    line-height:30%;
}
.anwrittenPart>p{
    margin-left: 2%;
}
.anrtitle{
   font-weight: bold;
   font-size:25px; 
}
.anrtitle:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.anrbrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
}
.anrbrand:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}
.anrbrand:hover{
    cursor: pointer;
}

#anrdescription{
    line-height:100%;
    font-size:12px;
}
.anrprice{
    font-size:18px;
    font-weight: bold;
}
.anrprice:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.02);
}

`;

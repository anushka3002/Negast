import styled from 'styled-components'

export const MainDiv= styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
margin: .5% .5%;
grid-gap: 1%;

.ProductDiv{
    border:2px solid orange;
}
.ProductDiv>img{
    width: 100%;
    height: 60%;
}
.ProductDiv>img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
.writtenPart{
    width: 100%;
    height:40%;
    border: 1px solid red;
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
.rbrand{
    font-weight: bold;
    font-size:15px;
    color: grey;
    
}
.rbrand:hover{
    cursor: pointer;
    transition: 1s;
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
#rrrating:hover{
    cursor: pointer;
    transition:1s;
}
`;

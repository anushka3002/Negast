import { Navbar } from "../navbar/navbar"
import "./bidShowCase.css"
import {MainNDiv} from "./bidGrid"
import { PostDiv } from "../buyerPost/buyerGrid";
import { get_post_id } from "../../redux/Post/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {CustomizedTables} from "./Table/table"

export const BidShowCase=()=>{
  
  const {id} =useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.post.post);
  console.log("bababy",data)

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    dispatch(get_post_id(id));
  };
  
  
    return(
        <>
          <div><CustomizedTables key={data._id} data={id}/></div>
        </>
    )
}
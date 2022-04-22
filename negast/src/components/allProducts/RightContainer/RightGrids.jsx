import {MainDiv} from "./Grids.jsx"

import {get_products_data} from "../../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {DisplayGrid} from "./DisplayGrid/DisplayGrid"


export const BoxGrids=()=> {
  const dispatch = useDispatch();
    const alldata = useSelector((store)=>store.products.products)
    console.log(alldata)
    useEffect(()=>{
        getproduct();
    },[])
    
    const getproduct=()=>{
        dispatch(get_products_data())
    }
  return (
    <MainDiv>
      {alldata.map((ele)=>{
        return <DisplayGrid key={ele._id} data={ele}/>
      })}
    </MainDiv>
  );
}

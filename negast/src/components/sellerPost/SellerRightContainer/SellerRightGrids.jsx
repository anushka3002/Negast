import {MainDiv} from "./SellerGrids.jsx"

import {get_products_data} from "../../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {SellerDisplayGrid} from "./SellerDisplayGrid/SellerDisplayGrid"


export const SellerBoxGrids=()=> {
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
        return <SellerDisplayGrid key={ele._id} data={ele}/>
      })}
    </MainDiv>
  );
}

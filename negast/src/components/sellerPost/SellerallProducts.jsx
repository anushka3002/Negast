import { Navbar } from '../navbar/navbar';
import './SellerallProducts.css';
import {SellerLeftFilter} from "./SellerLeftFilters/SellerFilters"
import {SellerBoxGrids} from "./SellerRightContainer/SellerRightGrids"
import {get_products_data} from "../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

export const SellerProducts=()=>{
    return (
        <>
        <div>
            <Navbar/>
            {/* <br></br><br></br> */}
            <div id="rmaincontainer">    
                <div id="rleftcontainer">
                    <SellerLeftFilter/>
                </div>
                <div id="rrightcontainer">
                    <SellerBoxGrids/>
                </div>
            </div>
        </div>       
        </>
    )
}
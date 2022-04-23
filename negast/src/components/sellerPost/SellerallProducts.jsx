import { Navbar } from '../navbar/navbar';
import './SellerallProducts.css';
import {SellerLeftFilter} from "./SellerLeftFilters/SellerFilters"
import {SellerBoxGrids} from "./SellerRightContainer/SellerRightGrids"
import {get_products_data} from "../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Footer } from '../footer/footer';

export const SellerProducts=()=>{
    return (
        <>
        <div id="footer_bottom">
            <Navbar/>
            {/* <br></br><br></br> */}
            <div id="rmaincontainer">    
                <div id="rleftcontainer">
                    <SellerLeftFilter style={{position:"fixed",border:"1px solid red"}}/>
                </div>
                <div id="rrightcontainer">
                    <SellerBoxGrids/>
                </div>
            </div>
        </div>    
        </>
    )
}
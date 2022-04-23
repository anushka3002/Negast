import { Navbar } from '../navbar/navbar';
import './allProducts.css';
import {LeftFilter} from "./LeftFilters/Filters"
import {BoxGrids} from "./RightContainer/RightGrids"
import {get_products_data} from "../../redux/products/action"
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

export const Products=()=>{
    return (
        <>
        <div>
            <Navbar/>
            {/* <br></br><br></br> */}
            <div id="rmaincontainer">    
                <div id="rleftcontainer">
                    <LeftFilter/>
                </div>
                <div id="rrightcontainer">
                    <BoxGrids/>
                </div>
            </div>
        </div>       
        </>
    )
}
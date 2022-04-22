import { Navbar } from '../navbar/navbar';
import './allProducts.css';
import {LeftFilter} from "./LeftFilters/Filters"
import {BoxGrids} from "./RightContainer/RightGrids"


export const Products=()=>{
    return (
        <>
        <Navbar/>
        <div id="rmaincontainer">
            <div id="rleftcontainer">
                <LeftFilter/>
            </div>
            <div id="rrightcontainer">
                <BoxGrids/>
            </div>
        </div>
        </>
    )
}
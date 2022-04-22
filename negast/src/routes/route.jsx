import {Products} from "../components/allProducts/allProducts"
import { Routes, Route } from "react-router";
export const AllRoutes=()=>{
    return(
        <>
            <Routes>
                <Route exact path ="/allProducts" element = {<Products/>}/>
            </Routes>
        </>
    )
}
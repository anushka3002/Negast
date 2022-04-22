import {Products} from "../components/allProducts/allProducts"
import { Routes, Route } from "react-router";
import SignIn from "../components/signin/signin";
import Signup from "../components/signup/signup";
export const AllRoutes=()=>{
    return(
        <>
            <Routes>
                <Route exact path ="/allProducts" element = {<Products/>}/>
                <Route exact path ="/signin" element = {<SignIn />}/>
                <Route exact path ="/signup" element = {<Signup />}/>
            </Routes>
        </>
    )
}
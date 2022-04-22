import {Routes,Route} from "react-router-dom"
import { Homepage } from "../components/homepage/homepage"

export const AllRoutes=()=>{
    return(
        <Routes>
            <h1>elfasdd</h1>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    )
}
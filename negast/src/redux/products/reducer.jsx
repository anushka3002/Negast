import {GET_PRODUCTS} from "./action"
const initstate = {products:[]}

export const product_reducer = (store=initstate,{type,payload})=>{
    switch (type){
        case GET_PRODUCTS: {
            return {...store,products:payload}
        }
        default:{
            return store
        } 
    }
}
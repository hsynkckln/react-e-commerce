import { createContext,useContext, useEffect, useState } from "react";
import axios from "axios";

const eCommerce=createContext();

export const CommerceProvider=({children})=>{

    const [product,setProduct]=useState([])
    const [basket,setBasket]=useState([])

    useEffect(()=>{
        axios('https://dummyjson.com/products/search?q=phone')
        .then(res=>res.data)
        .then(data=>setProduct(data.products))
    },[])


    const values={
        product,setProduct,basket,setBasket
    }

    return <eCommerce.Provider value={values}>{children}</eCommerce.Provider>
}

export const useCommerce=()=>useContext(eCommerce);
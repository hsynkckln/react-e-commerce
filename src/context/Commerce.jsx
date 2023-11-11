import { createContext,useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductCommerce=createContext();

export const CommerceProvider=({children})=>{

    const [product,setProduct]=useState([])

    useEffect(()=>{
        axios('https://dummyjson.com/products/category/smartphones')
        .then(res=>res.data)
        .then(data=>setProduct(data.products))
    },[])

    const values={
        product,setProduct
    }

    return <ProductCommerce.Provider value={values}>{children}</ProductCommerce.Provider>
}

export const useCommerce=()=>useContext(ProductCommerce);
import { createContext,useContext, useEffect, useState } from "react";
import axios from "axios";

const eCommerce=createContext();

export const CommerceProvider=({children})=>{

    const [product,setProduct]=useState([])
    const [category,setCategory]=useState([])

    useEffect(()=>{
        axios('https://dummyjson.com/products/search?q=phone')
        .then(res=>res.data)
        .then(data=>setProduct(data.products))
    },[])


    const values={
        product,setProduct
    }

    return <eCommerce.Provider value={values}>{children}</eCommerce.Provider>
}

export const useCommerce=()=>useContext(eCommerce);
import React from "react";
import { useRouter } from "next/router";//hook para agarrar el query parameter

function ProductItem(){
    const {
        query: { id },//Se agarra el query parametro mas el nombre del archivo
    } = useRouter();//

    return(
        <>
            <h1>Este es un producto: {id}</h1> 
        </>
    )
}

export default ProductItem;
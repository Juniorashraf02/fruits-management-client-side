import React, { useState } from 'react';
import { useEffect } from "react";

const UseItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('fakeProducts.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    return [products]
   
};

export default UseItems;
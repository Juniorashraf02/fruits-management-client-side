import { useState } from 'react';
import { useEffect } from "react";

const UseItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts]
   
};

export default UseItems;
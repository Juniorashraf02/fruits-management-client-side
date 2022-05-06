import { useState } from 'react';
import { useEffect } from "react";

const UseItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://young-gorge-41222.herokuapp.com/items')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts]
   
};

export default UseItems;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../UseItems/UseItems';
import SingleProduct from './SingleProduct/SingleProduct';
import { Link } from 'react-router-dom';




const SingleInventoryProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = UseItems();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => { setItems(data) })
    }, []);

    let { _id, name, price, img, description, quantity, supplier } = items;

    const time = Math.floor(Math.random() * 10);

    const textArray = [
        "SOLD",
        "MARKET DEMAND HIGH",
        "FARMER'S CHOICE",
    ];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    const handleDeliverBtn =(e)=> {
       e.preventDefault();
        const itemQuantity = quantity;
        const newQuantity=itemQuantity-1;
        console.log(newQuantity);
        setProducts({...products, quantity:newQuantity});

    }

    

    return (
        <div>
            <div class="flex justify-center mt-20">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-96 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt={name} />
                    <div class="text-justify p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-bold mb-2">Product Name:{name}</h5>
                        <p class="text-gray-400 text-base mb-4">
                            {description}
                        </p>
                        <p class="text-gray-700 text-base mb-4 h-1">
                            Supplier: {supplier}
                        </p>
                        <p class="text-gray-700 text-base mb-4 h-1">
                            Quantity: {quantity}
                        </p>
                        <p class="text-gray-700 text-base mb-4 h-1">
                            Price: {price}
                        </p>
                        <p class="text-gray-600 text-xs mt-3">Last updated {time} mins ago</p>

                        <button onClick={handleDeliverBtn} type="button" class="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delivered</button>
                        <button type="button" class=" inline-block px-6 py-2 border-2 border-gray-200 cursor-not-allowed text-gray-600 font-bold text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{textArray[randomNumber]}</button>

                    </div>
                </div>
            </div>



            <Link to='/manage-inventory'>
                <button type="button" className="mt-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage Inventory</button>
            </Link>
        </div>

    );
};

export default SingleInventoryProduct;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




const SingleInventoryProduct = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => { setItems(data) })
    }, [id]);

    let { _id, name, price, img, description, quantity, supplier } = items;

    const time = Math.floor(Math.random() * 10);
    const textArray = [
        "SOLD",
        "MARKET DEMAND HIGH",
        "FARMER'S CHOICE",
    ];
    const randomNumber = Math.floor(Math.random() * textArray.length);


    const handleAddQuantity = (e) => {
        e.preventDefault();
        const inputNumner = e.target.quantity.value;
        if (inputNumner === '' || inputNumner < 0) {
            alert('Please enter a valid quantity')
        } else {
            const newQuantity = parseInt(inputNumner) + parseInt(quantity);
            setItems({ ...items, quantity: newQuantity });
            const url = `http://localhost:5000/items/${_id}`
            // console.log({newQuantity})
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity }),
            }).then(response => response.json()).then(data => {
                console.log(data);

            })
            // console.log(newQuantity);
        }
        e.target.reset();
    };



    const handleReduceQuantity = () => {
        const newQuantity = parseInt(quantity) - 1;
        setItems({ ...items, quantity: newQuantity });
        const url = `http://localhost:5000/items/${_id}`
        // console.log({newQuantity})
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity }),
        }).then(response => response.json()).then(data => {
            console.log(data);

        })
        // console.log(newQuantity);

    }





    return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="flex flex-col md:flex-row md:w-1/2 rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-60 md:h-auto object-cover md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt={name} />
                    <div className="text-justify p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-bold mb-2">
                            Product Name:  {name}</h5>
                        <p className="text-gray-400 text-base mb-4">
                            {description}
                        </p>
                        <p className="text-gray-700 text-base mb-4 h-1">
                            Supplier: {supplier}
                        </p>
                        <p className="text-gray-700 text-base mb-4 h-1">
                            Quantity: {quantity}
                        </p>
                        <p className="text-gray-700 text-base mb-4 h-1">
                            Price: {price}$
                        </p>
                        <p className="text-gray-600 text-xs mt-3">Last updated {time} mins ago</p>




                        <form onSubmit={handleAddQuantity} className="flex justify-center items-center my-2">
                            <div className=" ">

                                <input type="text" className=" form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" name="quantity" placeholder="Add quantity" />
                            </div>
                            <div className="">

                                <button type="submit" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 ml-2 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out">ADD</button>

                            </div>

                        </form>
                        <button onClick={handleReduceQuantity} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>


                        <button type="button" className="mt-1 inline-block px-6 py-2 border-2 border-gray-200 cursor-not-allowed text-gray-600 font-bold text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{textArray[randomNumber]}</button>

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
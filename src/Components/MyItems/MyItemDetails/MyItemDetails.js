import React from 'react';

const MyItemDetails = ({myitem,handleDelete}) => {
    return (
        <div className="border rounded-lg p-4 text-justify text-sm font-semibold text-gray-600 container mx-auto my-5 flex justify-between items-center">
           <div >
           <h1>Name: {myitem.name}</h1>
            <h1>Description: {myitem.description}</h1>
            <h1>Quantity: {myitem.quantity}</h1>
            <h1>Price: {myitem.price}</h1>
           </div>
           <div>
           <button onClick={() => handleDelete(myitem._id)} type="button" className=" inline-block px-6 py-2.5 bg-lime-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
           </div>
        </div>
    );
};

export default MyItemDetails;
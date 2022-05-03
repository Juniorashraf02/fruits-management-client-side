import React from 'react';

const ManageItems = ({ product, handleDelete }) => {
    const { _id, name, price, img, description, quantity, supplier } = product;
    // console.log(id);
    
    return (
        <div className="">
              <div className=" justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg h-60 mx-auto w-max" src={img} alt="" />
                </a>
                <div className="p-5">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-400 text-base mb-4">
                        {description}
                    </p>
                    <p className="text-left text-blue-500 mb-2 font-semibold">
                       <p>&nbsp; &nbsp; &nbsp; price: <span>{price}$</span></p> 
                       <p>Quantity: {quantity}</p>
                       <p>Supplier: {supplier}</p>
                    </p>



                    <div>
                    <button type="button" className="m-1 inline-block px-2 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">-</button>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Quantity</button>
                    <button type="button" className="m-1 inline-block px-2 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+</button>
                    </div>

                    <button onClick={()=>handleDelete(_id)} type="button" className="m-3 inline-block px-6 py-2.5 bg-red-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete Item</button>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default ManageItems;
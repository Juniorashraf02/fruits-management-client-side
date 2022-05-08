import React from 'react';


const ManageItems = ({ product, handleDelete }) => {
    const { _id, name, price, img, description, quantity, supplier } = product;
    


    return (
        <div className="">
            <div className=" justify-center transition ease-in-out delay-150 hover:-translate-y-.5 hover:scale-105 duration-500">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg h-60 mx-auto w-max" src={img} alt="" />
                    </a>
                    <div className="p-5 hover:bg-orange-100">
                        <h5 className="text-gray-900 text-xl font-semibold mb-2">{name}</h5>
                        <p className="text-gray-400 text-base mb-4 text-justify">
                            {description}
                        </p>
                        <p className="text-left text-blue-500 mb-2 font-semibold">
                            <p>&nbsp; &nbsp; &nbsp; price: <span>{price}$</span></p>
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                        </p>



                   
                           

                        <button onClick={() => handleDelete(_id)} type="button" className="m-3 inline-block px-6 py-2.5 bg-red-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete Item</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
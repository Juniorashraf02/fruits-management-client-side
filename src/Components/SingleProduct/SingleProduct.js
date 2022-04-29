import React from 'react';

const SingleProduct = ({ product }) => {
    const { name, price, img, description, quantity, supplier} = product;
    return (
        <div className="">
            <div class=" justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img class="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div class="p-5">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p class="text-gray-400 text-base mb-4">
                            {description}
                        </p>
                        <p className="text-left mb-2 font-semibold">
                           <p>&nbsp; &nbsp; &nbsp; price: <span>{price}</span></p> 
                           <p>Quantity: {quantity}</p>
                           <p>Supplier: {supplier}</p>
                        </p>


                        
                        
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
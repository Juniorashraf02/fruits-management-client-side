import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, price, img, description, quantity, supplier } = product;
    // console.log(id);

    const navigate = useNavigate();
    const handleUpdateBtn = id => {
        navigate(`/inventory/${id}`);
    }


    return (
        <div className="">
            <div className=" justify-center ">
                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:bg-rose-100 duration-500">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg h-60 mx-auto w-max" src={img} alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p className="text-gray-400 text-justify text-base mb-4">
                            {description}
                        </p>
                        <p className="text-left mb-2 text-gray-400 font-semibold">
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                            <p className='pl-2'>&nbsp; &nbsp;  price: <span>{price}$</span></p>
                        </p>





                        <button onClick={() => handleUpdateBtn(_id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
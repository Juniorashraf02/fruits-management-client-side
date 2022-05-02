import React from 'react';
import { Link } from 'react-router-dom';
import UseItems from './../UseItems/UseItems';
import ManageItems from './ManageItems';

const ManageInventory = () => {
    const [products] = UseItems();
    return (
        <div>
            <div className=''>
                <h1 className="m-5 text-2xl mt-20 font-semibold text-slate-700">Manage Inventory Items</h1>
                <Link to='/add-item'>
                <button type="button" className=" inline-block px-6 py-2.5 bg-lime-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out">Add Items to inventory</button>
                </Link>
            </div>
            <div className=' border-sky-400 rounded-lg p-5 container mx-auto grid md:grid-cols-3 gap-4 my-24'>

                {
                    products.map(product => <ManageItems
                        product={product} key={product.id}
                    ></ManageItems>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;
import React from 'react';
import { Link } from 'react-router-dom';
import UseItems from './../UseItems/UseItems';
import ManageItems from './ManageItems';
import { Helmet } from 'react-helmet-async';
const ManageInventory = () => {
    const [products, setProducts] = UseItems();
    const handleDelete = id => {
        const proceed = window.confirm('Deleted items can not be recoverd. Do you want to proceed?');
        if (proceed && products.length > 15) {
            const url = `https://young-gorge-41222.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            });
        }else{
            alert('Inventory must have atleast 15 items. Add new items to delete')
        }
    }
    return (
        <div>
            <Helmet>
                <title>Inventory - Fruits Warehouse</title>
            </Helmet>
            <div className=''>
                <h1 className="m-5 text-2xl mt-20 font-semibold text-slate-700">Manage Inventory Items</h1>
                <Link to='/add-item'>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-lime-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out">Add Items to inventory</button>
                </Link>
            </div>
            <h1 className="text-xl text-gray-400 font-semibold h-0 mt-10">Total Inventory Items: {products.length}</h1>
            <div className=' border-sky-400 rounded-lg p-5 container mx-auto grid md:grid-cols-3 gap-4 mb-24 mt-5'>


                {
                    products.map(product => <ManageItems
                        product={product} key={product._id} handleDelete={handleDelete}
                    ></ManageItems>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;
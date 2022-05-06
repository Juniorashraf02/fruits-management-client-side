import React from 'react';

import SingleProduct from '../../SingleInventoryProduct/SingleProduct/SingleProduct';
import UseItems from '../../UseItems/UseItems';


const Inventory = () => {
    const [products] = UseItems();
    const newProducts = products.slice(0, 6);
    // console.log(newProducts);
    
    
    return (
        <div id="inventory">
            <h1 className="text-2xl mt-20 font-semibold text-slate-700">Inventory</h1>
            <div className='border-y-2 border-sky-400 rounded-lg p-5 container mx-auto grid md:grid-cols-3 gap-4 my-24'>
                
                {
                    newProducts.map((product) => <SingleProduct
                        key={product._id} product={product} 
                    ></SingleProduct>)
                }
                
            </div>


        

        </div>
    );
};

export default Inventory;
import React from 'react';
import { GiMasterOfArms } from 'react-icons/gi';
import { MdBookOnline, MdDeliveryDining } from 'react-icons/md';
import DownloadAppSection from '../DownloadAppSection/DownloadAppSection';


const HowItWork = () => {
    return (
        <div>
            <h1 className="text-2xl uppercase mb-20 text-stone-600">How it works</h1>
            
            <div className='grid md:grid-cols-3 mb-20 container mx-auto'>
                <div className="p-4" >
                    <GiMasterOfArms className="animate-bounce m-auto text-9xl text-orange-600" ></GiMasterOfArms>
                    <p className='font-bold text-stone-600'>Collecting Fruits</p>

                    <p className=" text-gray-400 text-justify">We collect our porducts from our farms and from the farmer whose are associated with us and we make the goods clean and store them</p>
                </div>
                <div className="p-4">
                    <MdBookOnline className="animate-bounce m-auto text-9xl text-orange-600"></MdBookOnline>
                    <p className='font-bold text-stone-600'>Online tracking</p>
                    <p className=" text-gray-400 text-justify">Both Buyer and seller can buy and sell fruits from our online app. We give them the opportunity to buy and sell with us with a little charge!</p>
                </div>
                <div className="p-4">
                    <MdDeliveryDining className="animate-bounce m-auto text-9xl text-orange-600"></MdDeliveryDining>
                    <p className='font-bold text-stone-600'>Delivery</p>
                    <p className=" text-gray-400 text-justify">After confirming everyhthing and verifying we collect or give delivery to our consumers!</p>
                </div>
            </div>


            
        </div>
    );
};

export default HowItWork;
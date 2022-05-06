import React from 'react';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
    return (

        <div>
            
            {/* dynamic tittle */}
            <Helmet>
                <title>Contact Us - Fruits Warehouse</title>
            </Helmet>


            {/* contacts */}
            <p className="conatainer mx-auto items-center mt-5 font-medium justify-end">
                <p className="text-sky-600">OUR LOCATION</p>
                521 Green Lane <br />London<br />  NW96 2ET
            </p>
        </div>
    );
};

export default ContactUs;
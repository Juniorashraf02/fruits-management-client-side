import React from 'react';
import notFound from '../Images/notfound.png';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="not found" className="mx-auto mt-10" />
            <h1 className="text-3xl text-blue-400 uppercase font-bold">Not Found</h1>
        </div>
    );
};

export default NotFound;
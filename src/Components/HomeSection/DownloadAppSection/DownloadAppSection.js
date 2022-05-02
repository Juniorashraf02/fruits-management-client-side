import React from 'react';
import appImage from '../../Images/appimage.png';
const DownloadAppSection = () => {
    return (
        <div >
            <p id="downloadApp" className='font-semibold text-4xl text-indigo-300 my-10' >Download Our App</p>
            <div className="md:flex my-28 p-5 justify-center items-center container mx-auto">
                <div>
                    <img className='object-cover rounded-lg animate-pulse' src={appImage} alt="" />
                </div>
                <div>
                    <p className='my-10 font-semibold text-sky-500 text-justify md:text-4xl md:p-5'>Download our latest app from playstore get the full experience and get 25% bonus on selling <br /> 
                    


                     <a href="#applink"><u className='text-rose-400 animate-pulse'>Fruits Warehouse App</u></a></p>

                </div>
            </div>

        </div>
    );
};

export default DownloadAppSection;
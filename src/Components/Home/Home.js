import React from 'react';
import Banner from '../Banner/Banner';
import DownloadAppSection from '../DownloadAppSection/DownloadAppSection';
import HowItWork from '../HowItWork/HowItWork';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventory/>
            <HowItWork/>
            <DownloadAppSection/>
        </div>
    );
};

export default Home;
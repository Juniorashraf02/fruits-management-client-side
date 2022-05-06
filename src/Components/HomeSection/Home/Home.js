import React from 'react';
import Banner from '../Banner/Banner';
import DownloadAppSection from '../DownloadAppSection/DownloadAppSection';
import HowItWork from '../HowItWork/HowItWork';
import Inventory from '../HomeInventory/HomeInventory';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            {/* dynamic tittle */}
            <Helmet>
                <title>Home - Fruits Warehouse</title>
            </Helmet>
            <Banner />
            <Inventory />
            <HowItWork />
            <DownloadAppSection />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InventoryItems from '../InventoryItems/InventoryItems';
import StoreMapLocation from '../StoreMapLocation.js/StoreMapLocation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <StoreMapLocation></StoreMapLocation>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import SingleItem from '../InventoryItems/SingleItem';
import StoreMapLocation from '../StoreMapLocation.js/StoreMapLocation';

const Home = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-management-server.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.slice(0,6).map(item =>
                        <SingleItem key={item._id} item={item}>
                        </SingleItem>)
                }
            </div>
            <StoreMapLocation></StoreMapLocation>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
const InventoryItems = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-management-server.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    return (
        <div>
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-64 mr-64 mb-10'>Inventory Items [SHOW 6 ITEMS MAX]</h2>
            <div>
                {
                    items.map(item =>
                        <SingleItem key={item._id} item={item}>
                        </SingleItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;
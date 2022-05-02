import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
const InventoryItems = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    return (
        <div>
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
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
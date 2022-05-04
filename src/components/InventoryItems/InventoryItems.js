import React, { useEffect, useState } from 'react';
import AddNewItemBtn from './AddItem/AddNewItemBtn';
import SingleItemProtected from './SingleItemProtected';
const InventoryItems = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    return (
        <div>
            <h2 className='text-white font-[Poppins] mt-4 text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Inventory Items</h2>
            <AddNewItemBtn></AddNewItemBtn>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.map(item =>
                        <SingleItemProtected key={item._id} item={item}>
                        </SingleItemProtected>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;
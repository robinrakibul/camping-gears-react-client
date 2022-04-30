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
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.slice(0, 6).map(item =>
                        <SingleItem key={item._id} item={item}>
                        </SingleItem>)
                }
            </div>
            <div className="flex justify-center align-middle mt-5 mb-4">
                <button className='w-72 pt-2 pb-2 pl-4 pr-3 rounded bg-orange-600 hover:bg-orange-700 mb-5 text-white' data-mdb-ripple="true" data-mdb-ripple-color="light">Check Inventory 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-7 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default InventoryItems;
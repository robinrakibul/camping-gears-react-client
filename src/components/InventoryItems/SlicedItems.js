import React, { useEffect, useState } from 'react';
import SingleItem from '../InventoryItems/SingleItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SlicedItems = () => {
    const [items, setitems] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, []);

    const navigateInventories = () =>{
        navigate('/items');
    }
    return (
        <div id='slicedItems'>
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.slice(0, 6).map(item =>
                        <SingleItem key={item._id} item={item}>
                        </SingleItem>)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={navigateInventories} className='pt-3 pb-3 pl-4 pr-4 text-white rounded bg-orange-600 hover:bg-orange-700 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Manage Inventories
                    <FontAwesomeIcon className='pl-2 text-white' icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default SlicedItems;
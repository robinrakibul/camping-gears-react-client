import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const ItemDetail = () => {
    let navigate = useNavigate();
    const navigateInventories = () => {
        navigate('/items');
    }

    // Using useParams to get id from url
    const { itemsId } = useParams();

    return (
        <div className='text-white'>
            <h3 className='mb-10'>This is inventory item detail : {itemsId}</h3>

            <div className='flex justify-center'>
                <button onClick={navigateInventories} className='pt-3 pb-3 pl-4 pr-4 text-white rounded bg-orange-600 hover:bg-orange-700 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Manage Inventories
                    <FontAwesomeIcon className='pl-2 text-white' icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;
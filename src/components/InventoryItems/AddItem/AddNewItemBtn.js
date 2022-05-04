import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewItemBtn = () => {
    const navigate = useNavigate();
    const navigateToAddNewItem = () =>{
        navigate('/additem');
    }
    return (
        <div className='mb-5'>
            <button onClick={navigateToAddNewItem} className='pt-3 pb-3 pl-10 pr-10 rounded bg-blue-500 hover:bg-blue-700 mb-5 text-white' data-mdb-ripple="true" data-mdb-ripple-color="light">Add New Item</button>
        </div>
    );
};

export default AddNewItemBtn;
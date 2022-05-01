import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ item }) => {
    const {_id, title, image, price, description, supplier, quantity} = item;

    const navigate = useNavigate();
    const itemDetailNavigation = id =>{
        navigate(`/items/${id}`)
    }

    return (
        <div>
            <div className="flex justify-center mb-5">
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-72">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img width='300px' height='auto' className="rounded-t-lg object-cover" src={image} alt="" />
                    </a>
                    <p className='text-orange-500 font-bold'>Price: {price}</p>
                    <small>Supplier: {supplier}</small>
                    <p>Available Quantity: {quantity}</p>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                           {description.slice(0,50)}...
                        </p>
                        <button onClick={()=> itemDetailNavigation(_id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
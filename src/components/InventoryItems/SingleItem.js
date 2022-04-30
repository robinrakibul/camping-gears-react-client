import React from 'react';

const SingleItem = ({ item }) => {
    const { title, image, price, description, supplier, quantity} = item;
    return (
        <div>
            <div class="flex justify-center mb-5">
                <div class="rounded-lg shadow-lg bg-white max-w-sm w-72">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img width='300px' height='auto' class="rounded-t-lg object-cover" src={image} alt="" />
                    </a>
                    <p className='text-orange-500 font-bold'>Price: {price}</p>
                    <small>Supplier: {supplier}</small>
                    <p>Available Quantity: {quantity}</p>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p class="text-gray-700 text-base mb-4">
                           {description.slice(0,50)}...
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
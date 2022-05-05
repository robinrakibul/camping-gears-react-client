import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleItemProtected = ({ item }) => {
    const { _id, title, image, price, description, supplier, quantity } = item;

    const navigate = useNavigate();
    const itemDetailNavigation = id => {
        navigate(`/items/${id}`)
    }

    const handleDeleteItem = id => {
        const deletion = window.confirm('Do you really want to delete the item?');
        if(deletion){
            const url = `https://warehouse-management-server.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                toast.success('Item has been deleted successfully');
            })
        }
    }
    return (
        <div>
            <div className="flex justify-center mb-5">
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-72">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img width='300px' height='auto' className="rounded-t-lg object-cover" src={image} alt="" />
                    </a>
                    <p className='text-orange-500 font-bold'>Price: {price} Tk</p>
                    <small>Supplier: {supplier}</small>
                    <p className='text-xl font-bold'>Available Quantity: {quantity}</p>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {description.slice(0, 50)}...
                        </p>
                        <button onClick={() => itemDetailNavigation(_id)} type="button" className=" inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out">Stock Update</button>
                        <button onClick={() => handleDeleteItem(_id)} type="button" className=" ml-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )};

export default SingleItemProtected;
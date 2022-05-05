import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'flowbite';
import { toast } from 'react-toastify';

const ItemDetail = () => {
    const restockref = useRef('');
    let navigate = useNavigate();
    const navigateInventories = () => {
        navigate('/items');
    }

    // For quantity
    const [items, setitems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, []);

    // For all items
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]) /* updates everytime item quantity changes */

    // Handle delivered click
    const handleQuantityReduce = event => {
        event.preventDefault();
        const found = items.find(existItem => existItem._id === item._id)
        if (found && found.quantity >= 1) {
            found.quantity = found.quantity - 1;
            const setQuantity = parseInt(found.quantity);
            console.log(found.quantity);
            const url = `http://localhost:5000/items/${itemsId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ setQuantity })
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }


    // Quantity Restock

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, []);

    // Handle Restock Quantity click
    const handleRestock = event => {
        const restockItem = restockref.current.value;
        event.preventDefault();
        const found = items.find(existItem => existItem._id === item._id)
        if (found && found.quantity >= 0) {
            console.log(restockItem);
            if(restockItem!=='')
            {
                found.quantity = restockItem;
            }
            else{
                toast.error('Please enter a number to restock quantity')
            }
            const setQuantity = parseInt(found.quantity);
            console.log(found.quantity);
            const url = `http://localhost:5000/items/${itemsId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ setQuantity })
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    const { itemsId } = useParams();

    return (
        <div className='text-white flex flex-col items-center'>

            {/* Flowbite Card */}
            <div className="max-w-sm bg-white text-red rounded-lg shadow-md mt-5 font-[poppins]">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-3">Stock Details:</h1>
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Product Id: </span>{item._id}</h5>
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Product Name: </span>{item.title}</h5>
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Supplier Name: </span>{item.supplier}</h5>
                <img className="p-4 rounded-3xl" src={item.image} alt="" />
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Description: </span>{item.description}</h5>
                <h5 className="text-xl border-t-2 border-b-2 border-orange-400 tracking-tight text-gray-900 dark:text-white">Quantity: <span className='font-bold'>{item.quantity}</span></h5>
                <div className="px-5 pt-5 pb-5">
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price} Tk</span>
                        <Link to="" onClick={handleQuantityReduce} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800">Delivered</Link>
                    </div>
                    <div>
                        <input type="number" name="restock" ref={restockref} id="" disabled={restockref === null}className='text-black p-2 mt-3 mb-3 border-2 border-gray-400 rounded' /> <br />
                        <Link to="" onClick={handleRestock} className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Restock Quantity</Link>
                    </div>
                </div>
            </div>

            {/* Manage Inventory Button */}

            <div className='flex justify-center mt-5'>
                <button onClick={navigateInventories} className='pt-3 pb-3 pl-4 pr-4 text-white rounded bg-orange-600 hover:bg-orange-700 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Manage Inventories
                    <FontAwesomeIcon className='pl-2 text-white' icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsOnly from './MyItemsOnly';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setitems] = useState([]);
    useEffect(() => {
        const getItems = async()=>{
            const email = user.email;
            const url = `https://camping-gears-server.onrender.com/myitems?email=${email}`;
            const {data} = await axios.get(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setitems(data);
        }
        getItems();
    }, [items])
    return (
        <div>
            {/* Add items to see your items in my items */}
            <h2 className='text-white font-[Poppins] mt-4 text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>My Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.map(item => <MyItemsOnly key={item._id} item={item}></MyItemsOnly>)
                }
            </div>
        </div>
    );
};

export default MyItems;
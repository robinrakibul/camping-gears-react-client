import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsTable from './MyItemsOnly';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch(`https://warehouse-management-server.herokuapp.com/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items])
    return (
        <div>
            {/* Add items to see your items in my items */}
            <h2 className='text-white font-[Poppins] mt-4 text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>My Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.map(item => <MyItemsTable key={item._id} item={item}></MyItemsTable>)
                }
            </div>
        </div>
    );
};

export default MyItems;
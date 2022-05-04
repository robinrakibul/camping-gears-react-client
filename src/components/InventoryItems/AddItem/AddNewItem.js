import React from 'react';

const AddNewItem = () => {
    return (
        <div>
            <form className='flex flex-col w-96 mx-auto'>
                <input className='mb-4 p-3 rounded' placeholder='Name'/>
                <textarea className='mb-4 p-3 rounded' placeholder='Description'/>
                <input className='mb-4 p-3 rounded' placeholder='Price' type="number" />
                <input className='mb-4 p-3 rounded' placeholder='Image Direct Link' type="text" />
                <input type="submit" value="Add Service" className='cursor-pointer' />
            </form>
        </div>
    );
};

export default AddNewItem;
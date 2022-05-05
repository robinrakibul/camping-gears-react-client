import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://warehouse-management-server.herokuapp.com/additem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            toast.success('Item successfully added!')
        } )
    };

    return (
        <div className='font-[poppins]'>
            <h1 className='mt-5 text-white text-xl'>Fill up the form to add new item below,</h1>
            <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-5 p-3 rounded' value={user.email.toString()} {...register("email")} />
                <input className='mt-5 p-3 rounded' placeholder='Item Name' {...register("title", { required: true, maxLength: 20 })} />
                <textarea cols='40' rows='3' className='mt-5 p-3 rounded' placeholder='Item Description' {...register("description")} />
                <input className='mt-5 p-3 rounded' type="number" placeholder='Price' {...register("price")} />
                <input className='mt-5 p-3 rounded' type="number" placeholder='Quantity' {...register("quantity")} />
                <input className='mt-5 p-3 rounded' type="text" placeholder='Supplier Name' {...register("supplier")} />
                <input className='mt-5 mb-5 p-3 rounded' type="text" placeholder='Image Direct URL' {...register("image")} />
                <input type="submit" className='p-3 w-32 cursor-pointer border-2 rounded bg-blue-400 mb-5 hover:bg-blue-500' data-mdb-ripple="true" data-mdb-ripple-color="light" />
            </form>
        </div>
    );
};

export default AddNewItem;
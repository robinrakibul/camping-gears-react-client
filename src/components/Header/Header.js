import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='flex justify-center m-5'>
                <div className="logo mt-3 mb-3">
                    <h1 className='font-waterbrush text-4xl'>Camping Gears</h1>
                </div>
            </div>
            <hr />
            <ul className='font-[poppins] mt-2 mb-2 text-lg'>
                <Link className='mr-3' to="/home">Home</Link>
                <Link className='mr-3' to="/home">Items</Link>
                <Link className='mr-3' to="/home">Login</Link>
                <Link className='mr-3' to="/home">Blogs</Link>
                <Link className='mr-3' to="/home">Contact</Link>
            </ul>
            <hr />
        </header>
    );
};

export default Header;
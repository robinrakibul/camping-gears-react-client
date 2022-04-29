import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <header className="bg-[url('/src/img/bg-header.jpg')]">
            <div className='flex justify-center'>
                <div className="logo mt-3 mb-3">
                    <Link to="/"><h1 className='font-waterbrush text-6xl p-5'>Camping Gears</h1></Link>
                </div>
            </div>
            <hr />
            <ul className='font-[poppins] mt-2 mb-2 text-xl font-semibold'>
                <Link className='ml-5 mr-5 hover:text-[#fe4a49] duration-300' to="/home">Home</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Items</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Login</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Blogs</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Contact</Link>
            </ul>
            <hr />
        </header>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <header className="bg-[#001730] text-white">
            <div className='flex justify-center'>
                <div className="logo mt-3 mb-3">
                    <Link to="/"><h1 className='font-waterbrush p-5 text-3xl md:text-5xl'>Camping Gears</h1></Link>
                </div>
            </div>
            <ul className='font-[poppins] pt-3 pb-3 text-xl font-medium border-t-2 border-b-2 border-white'>
                <Link className='ml-5 mr-5 hover:text-[#fe4a49] duration-300' to="/">Home</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/items">Inventory</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/login">Login</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/blogs">Blogs</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/contact">Contact</Link>
            </ul>
        </header>
    );
};

export default Header;
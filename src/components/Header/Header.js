import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <header className="bg-[#001730] text-white">
            <div className='flex justify-center'>
                <div className="logo mt-3 mb-3">
                    <Link to="/"><h1 className='font-waterbrush text-6xl p-5'>Camping Gears</h1></Link>
                </div>
            </div>
            <ul className='font-[poppins] pt-3 pb-3 text-xl font-medium border-t-2 border-b-2 border-white'>
                <Link className='ml-5 mr-5 hover:text-[#fe4a49] duration-300' to="/home">Home</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Items</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Login</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Blogs</Link>
                <Link className='mr-5 hover:text-[#fe4a49] duration-300' to="/home">Contact</Link>
            </ul>
        </header>
    );
};

export default Header;
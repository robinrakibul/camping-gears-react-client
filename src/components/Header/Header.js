import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-[#001730] text-white md:h-52">
            <div className='flex justify-center'>
                <div className="logo mt-3 mb-3">
                    <Link to="/"><h1 className='font-waterbrush p-2 md:p-5 text-3xl md:text-5xl'>Camping Gears</h1></Link>
                </div>
            </div>
            <div className='text-2xl absolute top-6 right-5 pb-2 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                <FontAwesomeIcon icon={open ? faXmark : faBars }></FontAwesomeIcon>
            </div>
            <ul className={`font-[poppins] md:pt-3 md:pb-3 md:mb-0 text-xl font-medium md:border-t-2 md:border-b-2 md:border-white
            flex flex-col md:flex-row md:justify-center absolute md:static md:z-auto z[-1] bg-[#001730] w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                <Link className='md:ml-5 mr-5 mb-5 md:mb-0 hover:text-[#fe4a49] duration-300' to="/">Home</Link>
                <Link className='mr-5 mb-5 md:mb-0 hover:text-[#fe4a49] duration-300' to="/items">Inventory</Link>
                <Link className='mr-5 mb-5 md:mb-0 hover:text-[#fe4a49] duration-300' to="/login">Login</Link>
                <Link className='mr-5 mb-5 md:mb-0 hover:text-[#fe4a49] duration-300' to="/blogs">Blogs</Link>
                <Link className='mr-5 mb-5 md:mb-0 hover:text-[#fe4a49] duration-300' to="/contact">Contact</Link>
            </ul>
        </header>
    );
};

export default Header;
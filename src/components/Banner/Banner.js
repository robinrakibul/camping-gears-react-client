import React from 'react';
import campimage from '../../img/camping.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='ml-2 mr-10 text-white md:flex justify-around mb-10'>
            <div className='mt-16'>
                <p className='text-xl text-[#fe4a49]'>Track your sales now!</p>
                <h1 className='font-[librebodoni] text-5xl md:text-7xl font-bold mb-5'>Keep track of <br /> your camping inventory</h1>
                <button className='pt-3 pb-3 pl-4 pr-4 rounded bg-orange-600 mb-5'>Start Now</button>
            </div>
            <div>
                <img className='rounded m-2 ml-5 md:ml-0' width='650px' src={campimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
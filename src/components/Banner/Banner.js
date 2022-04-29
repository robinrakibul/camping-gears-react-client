import React from 'react';
import campimage from '../../img/camping.jpg';

const Banner = () => {
    return (
        <div className='bg-[#233849] text-white container flex justify-between'>
            <div className='mt-40'>
                <p className='text-xl text-[#fe4a49]'>Track your sales now!</p>
                <h1 className='font-[librebodoni] text-7xl font-bold mb-5'>Keep track of camping store</h1>
                <button className='pt-3 pb-3 pl-4 pr-4 rounded bg-orange-600'>Start Now</button>
            </div>
            <img className='rounded m-2' width='630px' src={campimage} alt="" />
        </div>
    );
};

export default Banner;
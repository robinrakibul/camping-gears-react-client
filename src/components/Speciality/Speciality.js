import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faHeadset, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Speciality = () => {
    return (
        <div>
            <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Our Speciality</h2>
            <div className='ml-16 mr-16 mt-2 mb-10 grid grid-cols-1 md:grid-cols-2 '>
                <div>
                    <FontAwesomeIcon className='text-white text-6xl m-5' icon={faTruck} />
                    <p className='text-white font-[poppins] font-extralight'>Thunder server to track process faster</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-6xl text-white m-5' icon={faArrowRotateRight} />
                    <p className='text-white font-[poppins] font-extralight'>All products are checked when inserted</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-6xl text-white m-5' icon={faShieldAlt} />
                    <p className='text-white font-[poppins] font-extralight'>Secured API using Environment Variables</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-6xl text-white m-5' icon={faHeadset} />
                    <p className='text-white font-[poppins] font-extralight'>Providing 24/7 support if any bugs found</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;
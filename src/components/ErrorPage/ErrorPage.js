import React from 'react';
import errorImg from '../../img/404.jpg';

const ErrorPage = () => {
    return (
        <div className='flex items-center'>
            <img className='md:mx-auto rounded mt-5 mb-5' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;
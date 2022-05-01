import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../img/register.jpg';
import google from '../../img/google.png';
const Register = () => {
    return (
        <div className='text-white font-[poppins] flex flex-col md:flex-row items-center md:justify-between mb-10'>
            <div className='w-full ml-10 mr-10'>
                <img className='mt-5 ml-8 md:ml-0 md:mt-0 rounded-3xl' width='400px' src={registerImg} alt="" />
            </div>
            <div className='mr-10 w-3/4'>
                <h2 className='text-primary text-center text-xl font-medium mt-10 mb-5'>Register Here</h2>
                <form className='grid grid-rows-4 gap-4'>
                    <input className='p-2 mb-3 border-2 border-gray-400 rounded' type="text" name="name" id="" placeholder='Your Name' />

                    <input className='p-2 mb-3 border-2 border-gray-400 rounded' type="email" name="email" id="" placeholder='Email Address' required />

                    <input className='p-2 mb-3 border-2 border-gray-400 rounded' type="password" name="password" id="" placeholder='Password' required />
                    <div className='inline mt-4'>
                        <input className='mr-2 cursor-pointer' type="checkbox" name="terms" id="terms" />
                        <label>Accept Genius Car Terms and Conditions</label>
                    </div>
                    <div className='items-center'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded bg-orange-600 hover:bg-orange-700 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Register</button>
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none text-[#fe4a49]'>Please Login</Link> </p>
                <p className='mt-2'>Or you can join with,</p>
                <div className=''>
                    <button
                        className='btn btn-info w-50 d-block mx-auto mt-4 my-2'>
                        <img style={{ width: '30px' }} src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
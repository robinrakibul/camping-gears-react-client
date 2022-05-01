import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../img/login.svg';
const Login = () => {
    return (
        <div className='flex items-center justify-between mb-10 font-[poppins]'>
            <div className='w-full ml-10'>
                <img width='450px' src={loginImg} alt="" />
            </div>
            <div className='text-white mr-10 mt-10 container w-3/4'>
                <form className='grid grid-rows-4 gap-4'>
                    <h2 className='text-primary text-center mt-5 text-xl font-medium'>Login Here</h2>
                    <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="email" placeholder='Enter Your Email' required />
                    <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="password" placeholder='Enter Your Password' required />
                    <div className='items-center'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded bg-orange-600 hover:bg-orange-700 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                    </div>
                </form>
                <p className='mt-3 mb-1'>New Here? <Link className='text-[#fe4a49] font-medium' to='/register'>Register</Link></p>
                <p>Forget Password? <button className='text-[#fe4a49] font-medium'>Reset Password</button> </p>
            </div>
        </div>
    );
};

export default Login;